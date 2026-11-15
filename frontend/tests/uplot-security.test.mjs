import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {build} from 'esbuild';
import {hardenUplot, uplotHardeningPlugin, UPLOT_VERSION, UPLOT_SHA256} from '../scripts/uplot-hardening.mjs';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const source=await readFile(new URL('../node_modules/uplot/dist/uPlot.esm.js',import.meta.url),'utf8');
const upstreamPackage=JSON.parse(await readFile(new URL('../node_modules/uplot/package.json',import.meta.url),'utf8'));
const transformed=hardenUplot(source,upstreamPackage.version);
// Exercise the exact transformed implementation used by the build plugin.
// Only an export is added to access its otherwise private copy helper.
const compiled=await build({stdin:{contents:transformed+'\nexport {copy as securityTestCopy};',sourcefile:'uplot-security.mjs'},bundle:true,format:'esm',platform:'node',target:'node22',write:false});
const {default:uPlot,securityTestCopy:copy}=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));

test('uPlot patch refuses upstream drift and unexpected versions before bundling',()=>{
 assert.equal(upstreamPackage.version,UPLOT_VERSION);
 assert.equal(createHash('sha256').update(source).digest('hex'),UPLOT_SHA256);
 assert.throws(()=>hardenUplot(source+'\n',UPLOT_VERSION),/uPlot.*(checksum|SHA|source)/i);
 assert.throws(()=>hardenUplot(source,'1.6.33'),/uPlot.*version/i);
 assert.throws(()=>hardenUplot(source),/uPlot.*version/i);
});

test('assign never descends into inherited destination objects or invokes inherited setters',()=>{
 const shared={original:true};
 const inherited={settings:shared};
 const target=Object.create(inherited);
 uPlot.assign(target,{settings:{changed:true}});
 assert.deepEqual(shared,{original:true});
 assert.equal(Object.hasOwn(target,'settings'),true);
 assert.deepEqual(target.settings,{changed:true});
 let called=false;
 const setterTarget=Object.create({set option(value){called=true;}});
 uPlot.assign(setterTarget,{option:{enabled:true}});
 assert.equal(called,false);
 assert.deepEqual(setterTarget.option,{enabled:true});
});

test('assign and copy reject inherited sources and nested prototype-bearing JSON keys',()=>{
 const inherited=Object.create({unexpected:{enabled:true}});inherited.owned={zero:0};
 assert.deepEqual(uPlot.assign({},inherited),{owned:{zero:0}});
 assert.deepEqual(copy(inherited),{owned:{zero:0}});
 const payload=JSON.parse('{"__proto__":{"polluted":true},"constructor":{"prototype":{"polluted":true}},"prototype":{"polluted":true},"safe":{"__proto__":{"nested":true},"constructor":{"prototype":{"nested":true}},"prototype":{"nested":true},"zero":0}}');
 for(const value of [copy(payload),uPlot.assign({},payload)]){
  assert.deepEqual(value,{safe:{zero:0}});
  assert.equal(Object.getPrototypeOf(value),Object.prototype);
  for(const key of ['__proto__','constructor','prototype'])assert.equal(Object.hasOwn(value,key),false);
 }
 assert.equal({}.polluted,undefined);assert.equal({}.nested,undefined);
 const nullProto=Object.assign(Object.create(null),{safe:1});
 assert.deepEqual(uPlot.assign({},nullProto),{safe:1});
});

test('copy and merging preserve graph options, arrays, functions and typed arrays',()=>{
 const stroke=()=> '#123456',range=(_u,min,max)=>[min,max];
 const options={width:720,height:245,scales:{x:{time:true},y:{range}},series:[{}, {label:'Measured',stroke,width:2,dash:[6,4],spanGaps:false}],axes:[{size:65}],hooks:{draw:[stroke]},zero:0,enabled:false};
 const cloned=copy(options);
 assert.deepEqual(cloned,options);assert.notEqual(cloned,options);
 assert.notEqual(cloned.scales,options.scales);assert.notEqual(cloned.series,options.series);
 assert.equal(cloned.series[1].stroke,stroke);assert.equal(cloned.scales.y.range,range);
 const merged=uPlot.assign({},options,{scales:{x:{min:0,max:120}},series:options.series});
 assert.equal(merged.scales.x.time,true);assert.equal(merged.scales.x.min,0);assert.equal(merged.scales.x.max,120);
 assert.equal(merged.scales.y.range,range);assert.equal(merged.series[1].stroke,stroke);
 const typed=new Float64Array([0,1,NaN]);
 const typedCopy=copy(typed);assert.deepEqual(typedCopy,typed);assert.notEqual(typedCopy,typed);
 assert.equal(copy(stroke),stroke);
 const matrix=[[1,2],[3,4]],matrixCopy=copy(matrix);assert.deepEqual(matrixCopy,matrix);assert.notEqual(matrixCopy[0],matrix[0]);
 class GraphExtension {constructor(){this.option=true;}}
 const extension=new GraphExtension(),date=new Date(0),view=new DataView(new ArrayBuffer(4));
 for(const opaque of [extension,date,view])assert.equal(copy(opaque),opaque);
 const array=[null,{constructor:{prototype:{unexpected:true}},zero:0}];
 assert.deepEqual(copy(array),[null,{zero:0}]);
});

test('the actual esbuild plugin patches exactly the installed ESM module and refuses missing transforms',async()=>{
 const options={absWorkingDir:fileURLToPath(new URL('../',import.meta.url)),bundle:true,format:'esm',platform:'node',mainFields:['module','main'],target:'node22',write:false,logLevel:'silent'};
 const result=await build({...options,stdin:{contents:'import uPlot from "uplot"; export default uPlot;',resolveDir:options.absWorkingDir},plugins:[uplotHardeningPlugin()]});
 const {default:built}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 const shared={keep:true},target=Object.create({option:shared});built.assign(target,{option:{owned:true}});
 assert.deepEqual(shared,{keep:true});assert.deepEqual(target.option,{owned:true});
 assert.deepEqual(built.assign({},JSON.parse('{"constructor":{"prototype":{"polluted":true}},"zero":0}')),{zero:0});
 await assert.rejects(()=>build({...options,stdin:{contents:'export default 1;'},plugins:[uplotHardeningPlugin()]}),/Expected one reviewed uPlot ESM module/);
});
