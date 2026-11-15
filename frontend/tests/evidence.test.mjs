import test from 'node:test';
import assert from 'node:assert/strict';
import {PublicationQuality,ResponseEpisodes,ComparisonTrace} from '../.build-tests/utils/evidence.mjs';
const point=(time,temperature=18,extra={})=>({time,temperature,target:20,outdoor:8,applied:50,mode:'heat',unit:'°C',climate_id:'climate.demo',bound:true,window:'off',safety:false,overpowering:false,...extra});
test('quality preserves zero and rejects absent, unavailable, stale and future clocks',()=>{
 const date=n=>new Date(n*1000).toISOString();
 assert.equal(PublicationQuality.describe(0,date(1000),true,1001),'Publication récente');
 for(const v of [null,undefined,NaN])assert.equal(PublicationQuality.describe(v,date(1000),true,1001),'Valeur absente');
 assert.equal(PublicationQuality.describe(1,date(1000),false,1001),'Source indisponible');
 assert.equal(PublicationQuality.describe(1,date(1000),true,1700),'Publication ancienne');
 assert.equal(PublicationQuality.describe(1,date(2000),true,1000),'Horodatage non vérifiable');
});
test('episodes use same bound target, observed tolerance crossing, signed overshoot and no interpolation',()=>{
 const e=new ResponseEpisodes([point(0),point(60,19),point(120,20),point(180,20.5)],.2).episodes[0];
 assert.equal(e.firstWithin,120);assert.equal(e.overshoot,.5);assert.equal(e.publications,4);assert.equal(e.bracketedSeconds,180);
 const cool=new ResponseEpisodes([point(0,23,{mode:'cool'}),point(60,19.5,{mode:'cool'})],.2).episodes[0];
 assert.equal(cool.overshoot,.5);assert.equal(cool.firstWithin,null);
});
test('gaps, window, missing, stale-bound, mode/unit/thermostat changes split episodes',()=>{
 for(const change of [{temperature:null},{window:'on'},{safety:true},{overpowering:true},{bound:false}]){
  const r=new ResponseEpisodes([point(0),point(60,18,change),point(120,19)],.2);
  assert.equal(r.excluded,1);assert.equal(r.episodes.length,2);assert.ok(r.episodes.every(e=>e.firstWithin===null));
 }
 for(const change of [{target:21},{mode:'cool'},{unit:'°F'},{climate_id:'climate.other'}])assert.equal(new ResponseEpisodes([point(0),point(60,19,change)],.2).episodes.length,2);
 const r=new ResponseEpisodes([point(0),point(601,20)],.2);assert.equal(r.episodes.length,2);assert.equal(r.episodes[0].endReason,'Interruption > 10 min');
});
test('no context fabricated for legacy records; bounds and monotone counters',()=>{
 assert.equal(new ResponseEpisodes([point(0,18,{bound:undefined})],.2).excluded,1);
 assert.equal(new ResponseEpisodes([point(0,18,{window:undefined})],.2).episodes[0].contextKnown,false);
 assert.throws(()=>new ResponseEpisodes([],NaN));
 for(let n=1;n<100;n++){const r=new ResponseEpisodes(Array.from({length:n},(_,i)=>point(i*60,18+i/100)),.2).episodes[0];assert.equal(r.publications,n);assert.equal(r.bracketedSeconds,(n-1)*60);assert.equal(r.minimum,18);}
});
test('session comparison refuses unrecorded units, observation-time seed, invalid values and bridges',()=>{
 const s=(time,extra={})=>({time,state:'stable',unit:'°C',context:'a',live:{},history:{temperature:{indoor:19},setpoint:{filtered_setpoint:20},power:{applied_percent:0}},...extra});
 const trace=new ComparisonTrace([s(0,{observedAt:true}),s(60),s(120),s(800),s(860,{unit:'°F'}),s(920),s(980,{context:'b'})],'°C',0,1000);
 assert.equal(trace.valid,5);assert.deepEqual(trace.segments.map(s=>s.length),[2,1,1,1]);assert.equal(trace.segments[0][0].error,1);assert.equal(trace.segments[0][0].applied,0);
 assert.equal(new ComparisonTrace([s(0,{unit:undefined})],'°C',0,100).valid,0);
});

import {ControlPresentation} from '../.build-tests/utils/control.mjs';
test('archived unknown unit and native Fahrenheit never acquire current Celsius metadata',()=>{
 const d={entityId:'sensor.demo',state:'stable',name:'Demo',available:true,live:{temperature:{indoor:68},setpoint:{filtered_setpoint:69}},history:{}};
 const unknown=new ControlPresentation({...d,temperatureUnit:null}).blocks();
 const fahrenheit=new ControlPresentation({...d,temperatureUnit:'°F'}).blocks();
 assert.ok(unknown.some(b=>b.value.includes('unité source')));
 assert.ok(fahrenheit.some(b=>b.value.includes('°F')));
 assert.ok(!fahrenheit.some(b=>b.value.includes('°C')));
});
