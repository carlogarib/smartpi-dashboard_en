import test from 'node:test';
import assert from 'node:assert/strict';
import {archivedDiagnostic} from '../.build-tests/utils/archived-diagnostic.mjs';
import {suspensionIntervals} from '../.build-tests/utils/suspensions.mjs';
import {ObservatoryClient} from '../.build-tests/services/observatory.mjs';
test('orphan inventory uses only admin metadata get without an entity and validates returned counts',async()=>{
 const calls=[];const client=new ObservatoryClient({states:{},callWS:async msg=>{calls.push(msg);return{orphans:[]}}});
 assert.deepEqual(ObservatoryClient.orphans(await client.request(undefined,'get')),[]);
 assert.equal(Object.hasOwn(calls[0],'entity_id'),false);
 await assert.rejects(client.request(undefined,'clear'));await assert.rejects(client.request(undefined,'get',{id:'x'}));
 assert.equal(calls.length,1);
 const orphan={entity_id:'sensor.removed',bookmarks:1,trials:0,forecasts:0,receipts:0,points:10};
 assert.deepEqual(ObservatoryClient.orphans({orphans:[orphan]}),[orphan]);
 for(const invalid of [{...orphan,points:-1},{...orphan,entity_id:'climate.forbidden'},{...orphan,bookmarks:'1'}]) assert.throws(()=>ObservatoryClient.orphans({orphans:[invalid]}));
});
test('PI replay restores recorded gains and integral without today’s flags or binding',()=>{
 const d={entityId:'sensor.demo',available:true,name:'Demo',state:'stable',climateId:'climate.today',temperatureUnit:'°C',live:{model:{tau_reliable:true},control:{kp:99}},history:{}};
 const sample={time:1000,state:'stable',unit:'°F',live:{},history:{control:{kp:.5,ki:0},temperature:{indoor:68,integral_error:12}}};
 const result=archivedDiagnostic(d,sample);
 assert.deepEqual(result.live.control,{kp:.5,ki:0});assert.equal(result.live.temperature.integral_error,12);
 assert.equal(result.live.model.tau_reliable,undefined);assert.equal(result.climateId,null);assert.equal(result.temperatureUnit,'°F');
 assert.equal(archivedDiagnostic(d,{...sample,history:{}}).live.control.kp,null);
 assert.equal(archivedDiagnostic(d,{...sample,history:{},live:{control:{kp:1}}}).live.control.kp,1);
 assert.equal(archivedDiagnostic(d,{...sample,history:{control:{kp:null}},live:{control:{kp:1}}}).live.control.kp,null);
});
test('suspension strips use observed timestamps, known states and no gaps or retrospective flags',()=>{
 const p=(time,extra={})=>({time:time-10,suspensions_observed_at:time,climate_id:'climate.demo',window:'off',safety:false,overpowering:false,...extra});
 assert.deepEqual(suspensionIntervals([p(100,{safety:true}),p(160),p(220)],'safety',80,240),[
  {start:80,end:100,state:'unknown'},{start:100,end:160,state:'active'},{start:160,end:220,state:'inactive'},{start:220,end:240,state:'unknown'}]);
 assert.deepEqual(suspensionIntervals([p(100),p(800)],'window',100,800),[{start:100,end:800,state:'unknown'}]);
 assert.deepEqual(suspensionIntervals([p(100,{suspensions_observed_at:undefined,window:'on'}),p(160)],'window',100,200),[{start:100,end:200,state:'unknown'}]);
 assert.deepEqual(suspensionIntervals([p(100),p(160,{climate_id:'climate.other'})],'window',100,160),[{start:100,end:160,state:'unknown'}]);
});
