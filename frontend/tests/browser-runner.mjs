/** Isolated Chrome CDP test runner. Serve repository on loopback port 8765 first. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const endpoint = process.env.SMARTPI_CDP_URL ?? "http://127.0.0.1:9224";
const output =
  process.env.SMARTPI_BROWSER_OUTPUT ?? "/private/tmp/smartpi-browser-evidence";
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let n = 0; n < 30; n++) {
  try {
    target = await (
      await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })
    ).json();
    break;
  } catch {
    await pause(300);
  }
}
assert.ok(target, "Start isolated Chrome with remote debugging enabled");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => socket.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map(),
  errors = [];
socket.addEventListener("message", (e) => {
  const r = JSON.parse(e.data);
  if (r.method === "Runtime.exceptionThrown")
    errors.push(r.params.exceptionDetails);
  if (r.id && pending.has(r.id)) {
    const p = pending.get(r.id);
    pending.delete(r.id);
    clearTimeout(p.timer);
    r.error ? p.reject(r.error) : p.resolve(r.result);
  }
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const key = ++id;
    const timer = setTimeout(() => {
      pending.delete(key);
      reject(Error("Timeout " + method));
    }, 10000);
    pending.set(key, { resolve, reject, timer });
    socket.send(JSON.stringify({ id: key, method, params }));
  });
}
async function evaluate(expression) {
  const r = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
}
const context = `const p=fixture.panel,v=p.shadowRoot.querySelector('smartpi-visual-diagnostics'),root=v.shadowRoot;`;
const run = (script) => evaluate(`(async()=>{${context}${script}})()`);
async function settle() {
  await pause(80);
}
async function waitLoaded() {
  for (let n = 0; n < 50; n++) {
    if (
      await evaluate(
        `!!window.fixture && !fixture.panel.shadowRoot.querySelector('smartpi-visual-diagnostics')?.loading`,
      )
    )
      return;
    await pause(100);
  }
  throw Error("History did not settle");
}
const checks = {};
try {
  await mkdir(output, { recursive: true });
  await send("Page.enable");
  await send("Network.enable");
  await send("Network.setCacheDisabled", {cacheDisabled:true});
  await send("Page.bringToFront");
  await send("Runtime.enable");
  await send("Emulation.setTimezoneOverride", { timezoneId: "UTC" });
  await send("Emulation.setLocaleOverride", { locale: "en-US" });
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: "light" }],
  });
  await send("Page.navigate", {
    url: "http://127.0.0.1:8765/frontend/tests/visual-browser.html",
  });
  await waitLoaded();
  checks.initial = await run(
    `return {reads:fixture.counts.reads,writes:fixture.counts.writes,charts:root.querySelectorAll('smartpi-time-chart').length,rows:v.recorder.length,canvas:[...root.querySelectorAll('smartpi-time-chart')].every(c=>!!c.shadowRoot.querySelector('canvas'))};`,
  );
  assert.equal(checks.initial.reads, 4);
  assert.equal(checks.initial.writes, 0);
  checks.learningProgress = await run(`
    const meters = [...p.shadowRoot.querySelectorAll('.learn progress')];
    return meters.length === 2 && meters.every(meter => meter.max === 31)
      && meters[0].value === 9 && meters[1].value === 5
      && p.shadowRoot.querySelector('.learn').textContent.includes('premier palier 5');
  `);
  assert.ok(checks.learningProgress);
  checks.datedLegend = await run(`
    const c=root.querySelector('smartpi-time-chart');await c.updateComplete;
    const publication=c.samples.filter(s=>s.time>=c.range[0]&&s.time<=c.range[1]).at(-1);
    const legend=c.shadowRoot.querySelector('.publication-values');
    return legend.querySelector('time').dateTime===new Date(publication.time*1000).toISOString()
      &&!legend.textContent.includes('Indisponible')&&legend.textContent.includes('Dernière publication');
  `);
  assert.ok(checks.datedLegend);
  checks.legendPartialAndZero = await run(`
    const c=document.createElement('smartpi-time-chart');
    c.range=[100,300];c.curves=[{label:'Commande',path:'power.applied_percent',unit:'%',color:'#2689ca'},
      {label:'FF',path:'power.ff_percent',unit:'%',color:'#399986'}];
    c.samples=[{time:100,state:'stable',live:{},history:{power:{applied_percent:35,ff_percent:12}}},
      {time:200,state:'stable',live:{},history:{power:{applied_percent:0}}}];
    p.shadowRoot.append(c);await c.updateComplete;
    const legend=()=>c.shadowRoot.querySelector('.publication-values');
    const partial=legend().textContent.includes('0 %')&&legend().textContent.includes('Absente à cet instant')
      &&legend().querySelector('time').dateTime===new Date(200000).toISOString();
    c.plot.setCursor({left:c.plot.valToPos(100,'x'),top:50});await c.updateComplete;
    const inspected=legend().textContent.includes('35 %')&&legend().textContent.includes('12 %');
    c.plot.setCursor({left:-10,top:-10});await c.updateComplete;
    const retained=legend().textContent.includes('35 %');
    c.range=[250,300];await c.updateComplete;
    const empty=c.shadowRoot.textContent.includes('Aucune publication dans cette fenêtre.')&&!legend();
    c.remove();return partial&&inspected&&retained&&empty;
  `);
  assert.ok(checks.legendPartialAndZero);
  checks.chartContinuity = await run(`
    const c=document.createElement('smartpi-time-chart');c.thermalPhases=true;
    c.range=[0,4000];c.curves=[{label:'Température',path:'temperature.indoor',unit:'°C',color:'#2689ca'}];
    const sample=(time,temperature,unit='°C',context='room-a')=>({time,state:'stable',unit,context,live:{},history:{temperature:{indoor:temperature}}});
    p.shadowRoot.append(c);
    const cases=[
      {samples:[sample(100,18),sample(700,19)],continuous:true},
      {samples:[sample(100,18),sample(701,19)],continuous:false},
      {samples:[sample(100,18),sample(200,19,'°F')],continuous:false},
      {samples:[sample(100,18),sample(200,19,'°C','room-b')],continuous:false},
      {samples:[sample(100,18),sample(200,null),sample(300,19)],continuous:false},
    ];
    let valid=true;
    for(const scenario of cases){
      c.samples=scenario.samples;await c.updateComplete;
      const fills=[],ctx={save(){},beginPath(){},rect(){},clip(){},fillRect(...args){fills.push(args)},restore(){}};
      c.drawThermalPhases({bbox:{left:0,top:0,width:4000,height:200},ctx,valToPos:time=>time});
      const gaps=c.plot.series[1].gaps(c.plot,1,0,c.samples.length-1,[]);
      valid&&=scenario.continuous?fills.length===2&&gaps.length===0:fills.length===0;
      if(scenario.samples.length===2&&!scenario.continuous)valid&&=gaps.length===1;
    }
    c.remove();return valid;
  `);
  assert.ok(checks.chartContinuity,'Charts and thermal phases must stop at missing data, long gaps, unit or context changes');
  checks.chartContextLayout = await run(`
    const c=document.createElement('smartpi-time-chart');c.style.cssText='display:block;width:600px';
    c.range=[100,200];c.curves=[{label:'Température',path:'temperature.indoor',unit:'°C',color:'#2689ca'}];
    c.samples=[{time:100,state:'stable',live:{},history:{temperature:{indoor:18}}},
      {time:200,state:'stable',live:{},history:{temperature:{indoor:19}}}];
    const bar=document.createElement('div');bar.slot='context-bars';c.append(bar);
    const layouts=[];c.addEventListener('plot-layout',e=>layouts.push(e.detail));
    p.shadowRoot.append(c);await c.updateComplete;
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const matches=()=>{const area=c.plot.over.getBoundingClientRect(),box=c.shadowRoot.querySelector('.plot').getBoundingClientRect(),last=layouts.at(-1);
      return last&&Math.abs(last.left-(area.left-box.left))<.01&&Math.abs(last.right-(box.right-area.right))<.01;};
    const initial=c.plot,slot=c.shadowRoot.querySelector('slot[name=context-bars]');
    let valid=matches()&&slot.assignedElements()[0]===bar&&slot.previousElementSibling.classList.contains('plot');
    c.style.width='400px';await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    valid&&=layouts.length>=2&&matches()&&c.plot===initial;
    c.remove();return valid;
  `);
  assert.ok(checks.chartContextLayout,'Context bars must align to plot area and follow resizing without rebuilding the chart');
  checks.suspensionRibbon = await run(`
    const original=v.observations,end=v.range[1];
    const point=(offset,extra={})=>({time:end-offset,suspensions_observed_at:end-offset,temperature:19,target:20,outdoor:8,applied:40,mode:'heat',unit:'°C',climate_id:'climate.fixture',window:'off',safety:false,overpowering:false,...extra});
    v.observations=[point(240,{window:'on',safety:true,overpowering:true}),point(180),point(120,{window:null,safety:null,overpowering:null}),point(60)];
    await v.updateComplete;
    const c=root.querySelector('smartpi-time-chart'),bar=c.querySelector('smartpi-suspension-ribbon');await c.updateComplete;await bar.updateComplete;
    const rows=[...bar.shadowRoot.querySelectorAll('.row')];
    let valid=rows.length===3&&rows.every(row=>row.querySelector('.active')&&row.querySelector('.inactive')&&row.querySelector('.unknown'))
      &&bar.textContent===''&&bar.shadowRoot.textContent.includes('Carnet local')&&bar.shadowRoot.textContent.includes('séparés des courbes Recorder ou de session');
    v.observations=[point(240,{window:'on',safety:true,overpowering:true,suspensions_observed_at:undefined}),point(180,{suspensions_observed_at:undefined})];
    await v.updateComplete;await bar.updateComplete;
    valid&&=[...bar.shadowRoot.querySelectorAll('.row')].every(row=>!row.querySelector('.active')&&!row.querySelector('.inactive')&&row.querySelector('.unknown'));
    v.observations=original;await v.updateComplete;return valid;
  `);
  assert.ok(checks.suspensionRibbon,'Suspensions must distinguish observed states from unarchived periods');
  checks.suspensionAlignment={};
  for(const width of [1440,390,320]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<500});await settle();
    checks.suspensionAlignment[width]=await run(`const c=root.querySelector('smartpi-time-chart'),bar=c.querySelector('smartpi-suspension-ribbon');await bar.updateComplete;
      const area=c.plot.over.getBoundingClientRect(),track=bar.shadowRoot.querySelector('.track').getBoundingClientRect();
      bar.scrollIntoView({block:'center'});return Math.abs(area.left-track.left)<1&&Math.abs(area.right-track.right)<1&&document.documentElement.scrollWidth<=innerWidth;`);
    assert.ok(checks.suspensionAlignment[width],'Suspension alignment '+width);
    const shot=await send('Page.captureScreenshot',{format:'png'});
    await writeFile(output+'/suspensions-'+width+'.png',Buffer.from(shot.data,'base64'));
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  checks.archivedPiReplay = await run(`
    const saved={recorder:v.recorder,recorderEntity:v.recorderEntity,preferSession:v.preferSession,range:v.range,inspection:v.inspection,replay:v.replay};
    const time=v.range[1]-60,sample={time,state:'stable',live:{},history:{temperature:{indoor:19,integral_error:12},control:{kp:.5,ki:0},power:{pi_percent:8}}};
    v.recorder=[sample];v.recorderEntity=v.diagnostic.entityId;v.preferSession=false;v.range=[time-1,time+1];v.inspection={entityId:v.diagnostic.entityId,recorder:true,time};v.replay=true;
    await v.updateComplete;const d=root.querySelector('smartpi-control-diagram');await d.updateComplete;
    d.shadowRoot.querySelector('g.block[aria-label^="Régulateur PI"]').dispatchEvent(new MouseEvent('click',{bubbles:true}));await d.updateComplete;
    const rows=[...d.shadowRoot.querySelectorAll('aside dl>div')],value=label=>rows.find(row=>row.querySelector('dt')?.textContent===label)?.querySelector('dd')?.textContent.trim();
    const valid=value('Gain proportionnel Kp')==='0,5'&&value('Gain intégral Ki')==='0'&&value('État de l’intégrale')==='12'&&d.historical&&d.diagnostic.climateId===null;
    Object.assign(v,saved);await v.updateComplete;return valid;
  `);
  assert.ok(checks.archivedPiReplay,'Replay PI gains and integral must come from the archived publication, including zero');
  checks.piMemoryCharts = await run(`
    const saved={recorder:v.recorder,recorderEntity:v.recorderEntity,preferSession:v.preferSession,range:v.range,inspection:v.inspection,piMemoryOpen:v.piMemoryOpen},reads=fixture.counts.reads;
    const time=v.range[1]-120,point=(time,history)=>({time,state:'stable',live:{control:{kp:99,ki:99},temperature:{integral_error:99}},history:{temperature:{indoor:19},...history}});
    v.recorder=[point(time,{control:{kp:.5,ki:0},temperature:{indoor:19,integral_error:12}}),point(time+60,{control:{kp:.6},temperature:{indoor:19,integral_error:-3}})];
    v.recorderEntity=v.diagnostic.entityId;v.preferSession=false;v.range=[time-1,time+61];v.inspection=undefined;
    await v.updateComplete;const details=root.querySelector('details.pi-memory');details.open=true;
    await new Promise(resolve=>setTimeout(resolve,0));await v.updateComplete;
    const charts=[...details.querySelectorAll('smartpi-time-chart')];await Promise.all(charts.map(c=>c.updateComplete));
    const paths=charts.map(c=>c.curves[0].path);
    let valid=charts.length===3&&paths.join(',')==='control.kp,control.ki,temperature.integral_error'
      &&charts.every(c=>c.curves.length===1&&c.range[0]===v.range[0]&&c.range[1]===v.range[1])
      &&charts[1].shadowRoot.textContent.includes('Absente à cet instant')&&!charts.some(c=>c.shadowRoot.querySelector('.publication-values')?.textContent.includes('99'));
    charts[1].inspect(time);await v.updateComplete;await Promise.all(charts.map(c=>c.updateComplete));
    valid&&=v.inspection?.time===time&&charts[1].shadowRoot.querySelector('.publication-values').textContent.includes('0 ');
    v.recorder=[point(time,{temperature:{indoor:19}})];await v.updateComplete;await Promise.all(charts.map(c=>c.updateComplete));
    valid&&=charts.every(c=>!c.plot&&c.shadowRoot.textContent.includes('Absente à cet instant'))&&fixture.counts.reads===reads;
    details.open=false;await new Promise(resolve=>setTimeout(resolve,0));await v.updateComplete;
    valid&&=!details.querySelector('smartpi-time-chart')&&charts.every(c=>!c.plot&&!c.observer);
    Object.assign(v,saved);await v.updateComplete;return valid;
  `);
  assert.ok(checks.piMemoryCharts,'PI memory charts must use archived gains and integral, preserve zero and gaps, share selection and issue no new request');
  checks.orphanRecovery = await run(`
    const empty=document.createElement('smartpi-dashboard-panel'),calls=[];let deleted=false,services=0;
    const id='sensor.removed_fixture',book={current:null,points:[],bookmarks:[{id:'one',label:'Souvenir conservé',created_at:100,temperature:19,target:20,preset:null,outdoor:8,unit:'°C'}],receipts:[],trials:[],forecasts:[]};
    empty.hass={states:{},callService:async()=>{services++},callWS:async message=>{calls.push(message);if(!message.entity_id)return{orphans:deleted?[]:[{entity_id:id,bookmarks:1,trials:0,forecasts:0,receipts:0,points:0}]};if(message.action==='clear'){deleted=true;return{}}return structuredClone(book);}};
    p.shadowRoot.append(empty);await empty.updateComplete;
    const o=empty.shadowRoot.querySelector('smartpi-orphan-notebooks');await o.updateComplete;
    const tick=async()=>{await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;},button=text=>[...o.shadowRoot.querySelectorAll('button')].find(b=>b.textContent.trim()===text);
    await o.load();await tick();let valid=empty.shadowRoot.textContent.includes('Aucun diagnostic')&&o.shadowRoot.textContent.includes(id);
    button('Consulter').click();await tick();valid&&=o.shadowRoot.textContent.includes('Souvenir conservé');
    button('Supprimer ce carnet').click();await tick();valid&&=!deleted&&!!button('Confirmer la suppression');
    button('Confirmer la suppression').click();await tick();
    valid&&=deleted&&o.shadowRoot.textContent.includes('Aucun carnet orphelin')&&services===0&&calls.filter(c=>c.action==='clear').length===1;
    empty.remove();return valid;
  `);
  assert.ok(checks.orphanRecovery,'An orphan notebook must remain readable and explicitly deletable without an active diagnostic or climate call');
  const touchPoint = await run(`
    const c=document.createElement('smartpi-time-chart');c.inspectable=true;c.syncKey='touch-test';
    c.range=[90,300];c.curves=[{label:'Commande',path:'power.applied_percent',unit:'%',color:'#2689ca'}];
    c.samples=[{time:100,state:'stable',live:{},history:{power:{applied_percent:35}}},
      {time:200,state:'stable',live:{},history:{power:{applied_percent:0}}}];
    document.body.prepend(c);await c.updateComplete;c.scrollIntoView({block:'start'});
    window.legendTouchChart=c;const b=c.plot.over.getBoundingClientRect();
    return {x:b.left+c.plot.valToPos(100,'x'),y:b.top+50};
  `);
  await send('Emulation.setTouchEmulationEnabled',{enabled:true});
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[touchPoint]});
  await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await settle();
  checks.legendTouch = await evaluate(`(async()=>{const c=window.legendTouchChart;await c.updateComplete;
    const selected=c.shadowRoot.querySelector('.publication-values').textContent.includes('35 %');
    c.remove();delete window.legendTouchChart;return selected;})()`);
  assert.ok(checks.legendTouch);
  await send('Emulation.setTouchEmulationEnabled',{enabled:false});


  assert.equal(checks.initial.charts, 3);
  assert.ok(checks.initial.canvas);
  assert.ok(checks.initial.rows > 5700);
  checks.scatterProjection = await run(`
    const xy=root.querySelector('smartpi-diagnostic-projection');await xy.updateComplete;
    return xy.kind==='scatter'&&xy.shadowRoot.querySelector('svg')?.getAttribute('aria-label').includes('600 points')&&
      xy.shadowRoot.textContent.includes('publications couplées')&&xy.shadowRoot.textContent.includes('600 publications réparties');
  `);
  assert.ok(checks.scatterProjection);
  await run(`const xy=root.querySelector('smartpi-diagnostic-projection');xy.shadowRoot.querySelector('input').focus();`);
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowLeft',code:'ArrowLeft',windowsVirtualKeyCode:37});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowLeft',code:'ArrowLeft',windowsVirtualKeyCode:37});
  checks.scatterKeyboardInspection = await run(`
    const xy=root.querySelector('smartpi-diagnostic-projection');await xy.updateComplete;await v.updateComplete;
    const good=xy.selected>=0&&v.inspection?.time===xy.projection.points[xy.selected].time&&xy.shadowRoot.activeElement?.tagName==='INPUT';
    xy.selected=-1;v.inspection=undefined;await v.updateComplete;return good;
  `);
  assert.ok(checks.scatterKeyboardInspection);
  await run(`root.querySelector('[aria-label="Zoom avant"]').click();`);
  await settle();
  checks.zoom = await run(
    `return [...root.querySelectorAll('smartpi-time-chart')].every(c=>Math.abs(c.plot.scales.x.min-v.range[0])<.1&&Math.abs(c.plot.scales.x.max-v.range[1])<.1)&&Math.abs(v.range[1]-v.range[0]-12*3600)<.1;`,
  );
  assert.ok(checks.zoom);
  checks.trackingWindow = await run(
    `const summary=root.querySelector('.tracking');const chart=root.querySelector('smartpi-time-chart');const pairs=chart.samples.filter(s=>Number.isFinite(s.history.temperature?.indoor)&&Number.isFinite(s.history.setpoint?.filtered_setpoint)).length;return chart.samples.length>0&&summary.querySelector('dd').textContent===pairs+' / '+chart.samples.length&&summary.textContent.includes('Médiane absolue');`,
  );
  assert.ok(checks.trackingWindow);
  await run(
    `root.querySelector('smartpi-time-chart').shadowRoot.querySelector('.series-controls button').focus();`,
  );
  await send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key: "Enter",
    code: "Enter",
    windowsVirtualKeyCode: 13,
    text: "\r",
    unmodifiedText: "\r",
  });
  await send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "Enter",
    code: "Enter",
    windowsVirtualKeyCode: 13,
  });
  await settle();
  checks.keyboardLegend = await run(
    `return root.querySelector('smartpi-time-chart').plot.series[1].show===false && root.querySelector('smartpi-time-chart').shadowRoot.querySelector('.series-controls button').getAttribute('aria-pressed')==='false';`,
  );
  if (!checks.keyboardLegend)
    checks.legendDetails = await run(
      `const c=root.querySelector('smartpi-time-chart');return {button:c.shadowRoot.querySelector('.series-controls button').outerHTML,show:c.plot.series[1].show,hidden:[...c.hiddenCurves],focus:c.shadowRoot.activeElement?.outerHTML};`,
    );
  assert.ok(checks.keyboardLegend);
  checks.unrelatedUpdate = await run(
    `const charts=[...root.querySelectorAll('smartpi-time-chart')],plots=charts.map(c=>c.plot);p.hass={...fixture.hass,states:{...fixture.hass.states,'sensor.unrelated':{entity_id:'sensor.unrelated',state:'1',attributes:{}}}};await p.updateComplete;await v.updateComplete;await Promise.all(charts.map(c=>c.updateComplete));return charts.every((c,i)=>c.plot===plots[i]);`,
  );
  assert.ok(checks.unrelatedUpdate);
  await run(
    `const c=root.querySelector('smartpi-time-chart');c.plot.setSeries(1,{show:false});root.querySelector('[aria-label="Période précédente"]').click();`,
  );
  await settle();
  checks.legend = await run(
    `return root.querySelector('smartpi-time-chart').plot.series[1].show===false;`,
  );
  assert.ok(checks.legend);
  await run(
    `const c=root.querySelector('smartpi-time-chart');c.plot.setScale('x',{min:v.range[0]+300,max:v.range[1]-300});`,
  );
  await settle();
  checks.dragRange = await run(
    `return [...root.querySelectorAll('smartpi-time-chart')].every(c=>Math.abs(c.plot.scales.x.min-v.range[0])<.1);`,
  );
  assert.ok(checks.dragRange);
  await run(`v.hours=48;v.reset();`);
  await settle();
  checks.science = await run(
    `const charts=[...root.querySelectorAll('smartpi-time-chart')];return {gaps:charts[0].plot.data[1].some(x=>x===null),fullRange:charts[1].plot.scales.y.max>100&&charts[1].plot.scales.y.min<0,source:root.textContent.includes('Recorder · historique persistant'),event:root.textContent.includes('Consigne filtrée 19 → 20')};`,
  );
  assert.ok(Object.values(checks.science).every(Boolean));
  checks.inspection = await run(`
    const event = [...root.querySelectorAll('.timeline button')].find(b => b.textContent.includes('Consigne filtrée 19 → 20'));
    event.click();
    await v.updateComplete;
    const charts = [...root.querySelectorAll('smartpi-time-chart')];
    await Promise.all(charts.map(c => c.updateComplete));
    const time = charts[0].selectedTime;
    const aligned = charts.every(c => c.selectedTime === time);
    const panel = root.querySelector('.publication');
    const recorder = panel.querySelector('time').dateTime === new Date(time * 1000).toISOString()
      && panel.textContent.includes('Recorder') && panel.textContent.includes('Non archivé')
      && !root.querySelector('.active-path');
    const gap = charts[0].samples.find(s => s.state === 'unavailable');
    charts[0].dispatchEvent(new CustomEvent('inspect-publication', { detail: gap.time, bubbles: true, composed: true }));
    await v.updateComplete;
    const unavailable = panel.textContent.includes('Indisponible') && !root.querySelector('.active-path');
    panel.querySelector('button').click();
    await v.updateComplete;
    const direct = panel.textContent.includes('Instantané SmartPI');
    const over = charts[0].shadowRoot.querySelector('.u-over');
    const x = Math.round(over.getBoundingClientRect().left + charts[0].plot.valToPos(time, 'x'));
    const clickedTime = charts[0].plot.data[0][charts[0].plot.posToIdx(x - over.getBoundingClientRect().left)];
    let emitted;
    charts[0].addEventListener('inspect-publication', e => emitted = e.detail, { once: true });
    over.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, button: 0, bubbles: true }));
    over.dispatchEvent(new MouseEvent('click', { clientX: x, bubbles: true }));
    await v.updateComplete;
    const click = panel.querySelector('time').dateTime === new Date(clickedTime * 1000).toISOString();
    if (!click) throw Error(JSON.stringify({x, time, clickedTime, emitted, pointerStart: charts[0].pointerStart, current: panel.querySelector('time').dateTime, inspection:v.inspection, samePlot:over===charts[0].plot.over}));
    panel.querySelector('button').click();
    await v.updateComplete;
    return { aligned, recorder, unavailable, direct, click };
  `);
  assert.ok(Object.values(checks.inspection).every(Boolean));
  checks.blockDetails = await run(`
    const chart = root.querySelector('.command-chart smartpi-time-chart');
    const buttons = [...root.querySelectorAll('.synoptic button')];
    const block = (label) => buttons.find(b => b.textContent.trim() === label);
    for (const [label, series, detail] of [['PI', 3, 'Contribution PI'], ['Anticipation', 4, 'Anticipation retenue']]) {
      chart.shadowRoot.querySelectorAll('.series-controls button')[series - 1].click();
      if (chart.plot.series[series].show !== false) return false;
      block(label).click();
      await v.updateComplete;
      if (!chart.plot.series[series].show || !root.querySelector('#block-detail').textContent.includes(detail)) return false;
    }
    block('Modèle thermique').click();
    await v.updateComplete;
    return root.querySelector('#block-detail').textContent.includes('Pertes estimées B');
  `);
  assert.ok(checks.blockDetails);
  checks.historicalReplay = await run(`
    v.inspect(v.windowData(v.usingRecorder?v.recorder:v.session).samples[10].time);await v.updateComplete;
    const bar=root.querySelector('.replay-bar');
    if(!bar)throw Error("Historical banner missing");
    bar.querySelector('button').click();await v.updateComplete;
    const diagram=root.querySelector('.replay-bar smartpi-control-diagram');await diagram.updateComplete;
    const selected=v.windowData(v.usingRecorder?v.recorder:v.session).samples.find(s=>s.time===v.inspection.time);
    return {binding:diagram.diagnostic.climateId===null,time:diagram.diagnostic.lastUpdated===new Date(selected.time*1000).toISOString(),
      value:diagram.diagnostic.live.power.applied_percent===(selected.history.power?.applied_percent ?? null),
      banner:bar.textContent.includes('Historique')&&diagram.shadowRoot.textContent.includes('à cette publication')&&!diagram.shadowRoot.textContent.includes('en direct'),unit:diagram.diagnostic.temperatureUnit===null};
  `);
  assert.ok(Object.values(checks.historicalReplay).every(Boolean),JSON.stringify(checks.historicalReplay));
  await run(`root.querySelector('.replay-bar input').focus();`);
  const replayTime=await run(`return v.inspection.time;`);
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowLeft',code:'ArrowLeft',windowsVirtualKeyCode:37});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowLeft',code:'ArrowLeft',windowsVirtualKeyCode:37});
  checks.replayKeyboard=await run(`await v.updateComplete;return v.inspection.time<${replayTime};`);
  assert.ok(checks.replayKeyboard);
  const replayBounds=await run(`const b=root.querySelector('.replay-bar').getBoundingClientRect();return{x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};`);
  const replayShot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...replayBounds,scale:1}});
  await writeFile(output+'/historical-replay.png',Buffer.from(replayShot.data,'base64'));
  await run(`v.inspection=undefined;v.replay=false;await v.updateComplete;`);


  checks.sessionCalibration = await run(`
    const session = v.session;
    const time = v.range[1] - 30;
    v.session = [{ time, state: 'calibration', observedAt: true,
      history: { power: { applied_percent: 0 } },
      live: { control: { phase: 'Calibration' } } }];
    v.preferSession = true;
    await v.updateComplete;
    const chart = root.querySelectorAll('smartpi-time-chart')[1];
    await chart.updateComplete;
    const button = chart.shadowRoot.querySelector('tbody button');
    chart.shadowRoot.querySelector('details').open = true;
    button.focus();
    button.click();
    await v.updateComplete;
    const panel = root.querySelector('.publication');
    const verified = panel.textContent.includes('Observation de session') && panel.textContent.includes('0 %')
      && root.querySelector('.synoptic').textContent.includes('Voie directe déclarée');
    panel.querySelector('button').click();
    v.session = session;
    v.preferSession = false;
    await v.updateComplete;
    return verified;
  `);
  assert.ok(checks.sessionCalibration);
  await run(
    `const c=root.querySelector('smartpi-time-chart'),over=c.shadowRoot.querySelector('.u-over'),r=over.getBoundingClientRect();over.dispatchEvent(new MouseEvent('mousemove',{clientX:r.left+100,clientY:r.top+80,bubbles:true}));`,
  );
  await settle();
  checks.cursor = await run(
    `return [...root.querySelectorAll('smartpi-time-chart')].map(c=>c.plot.cursor.left);`,
  );
  assert.ok(checks.cursor.every((n) => Math.abs(n - checks.cursor[0]) < 2));
  await run(
    `root.querySelector('smartpi-time-chart').plot.setSeries(1,{show:true});v.scrollIntoView();`,
  );
  await settle();
  await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  }).then((r) =>
    writeFile(output + "/desktop.png", Buffer.from(r.data, "base64")),
  );
  await run(`window.scrollTo(0,0);`);
  await settle();
  await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }).then((r) =>
    writeFile(output + "/overview.png", Buffer.from(r.data, "base64")),
  );
  await run(`v.tab='regulation';v.expert=true;`);
  await settle();
  checks.diagram = await run(
    `const d=root.querySelector('smartpi-control-diagram'),s=d.shadowRoot;s.querySelector('summary').click();const b=s.querySelector('[role="button"]');b.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));await d.updateComplete;return {blocks:s.querySelectorAll('[role="button"]').length,provenance:s.textContent.includes('attributes.live.setpoint.filtered_setpoint'),chain:root.querySelector('smartpi-command-chain').shadowRoot.textContent.includes('-4 %')};`,
  );
  assert.equal(checks.diagram.blocks, 8);
  assert.ok(checks.diagram.provenance);
  assert.ok(checks.diagram.chain);
  checks.piDetail = await run(
    `const d=root.querySelector('smartpi-control-diagram'),b=d.shadowRoot.querySelectorAll('g[role="button"]')[2];b.focus();b.dispatchEvent(new KeyboardEvent('keydown',{key:' ',bubbles:true}));await d.updateComplete;const detail=d.shadowRoot.querySelector('aside').textContent;return b.getAttribute('aria-pressed')==='true'&&d.shadowRoot.activeElement===b&&detail.includes('0,5 °C')&&detail.includes('0,8 °C')&&detail.includes('attributes.live.analysis.control.error_p')&&!!d.shadowRoot.querySelector('time[datetime]');`,
  );
  if(!checks.piDetail) checks.piDiagnostic=await run(`const d=root.querySelector('smartpi-control-diagram');return {config:p.hass.config,fixtureConfig:fixture.hass.config,visualUnit:v.diagnostic.temperatureUnit,unit:d.diagnostic.temperatureUnit,detail:d.shadowRoot.querySelector('aside').textContent,focus:d.shadowRoot.activeElement?.tagName,selected:d.shadowRoot.querySelectorAll('g[role=button]')[2].getAttribute('aria-pressed')};`);
  assert.ok(checks.piDetail);
  checks.liveSeparation = await run(`return !root.querySelector('.tracking, .timeline')&&!!root.querySelector('smartpi-control-diagram')&&!!root.querySelector('.toolbar')&&!!root.querySelector('.command-comparison smartpi-time-chart')&&root.textContent.includes('Le schéma reste l’instantané actuel');`);
  assert.ok(checks.liveSeparation);
  checks.liveRoutes = await run(`
    const d=root.querySelector('smartpi-control-diagram'),s=d.shadowRoot,base=d.diagnostic;
    const use=async live=>{d.diagnostic={...base,live};await d.updateComplete;};
    const live=structuredClone(base.live);
    live.power.applied_percent=0;
    live.power.current_cycle_percent=0;
    live.power.next_cycle_percent=28;
    live.analysis.control.forced_by_timing=true;
    await use(live);
    const timing=s.querySelector('.note').textContent.includes('Temporisation imposée') &&
      [...s.querySelectorAll('.snapshot dd')].at(-1).textContent==='0 %';
    s.querySelector('[data-block="applied"]').click();await d.updateComplete;
    const cycle=s.querySelector('aside').textContent.includes('Candidat au cycle suivant') &&
      s.querySelector('aside').textContent.includes('28 %');
    await use({...live, calibration:{state:'HeatUp'}});
    const calibration=s.querySelector('.route-badge').textContent.includes('Calibration') &&
      s.querySelectorAll('.step').length===2 && !s.querySelector('[data-block="limits"]') &&
      s.querySelector('aside h4').textContent.includes('Calibration');
    await use({power:{applied_percent:0}});
    const partial=!s.querySelector('.steps .arrow, svg path.flow') &&
      s.querySelector('.note').textContent.includes('Motif indisponible') &&
      [...s.querySelectorAll('.snapshot dd')].at(-1).textContent==='0 %';
    d.diagnostic=base; await d.updateComplete;
    s.querySelector('details').open=false;
    return {timing,cycle,calibration,partial};
  `);
  assert.ok(Object.values(checks.liveRoutes).every(Boolean), JSON.stringify(checks.liveRoutes));
  await run(`v.expert=false;await v.updateComplete;const d=root.querySelector('smartpi-control-diagram');await d.updateComplete;d.shadowRoot.querySelector('[data-block="limits"]').click();`);
  await run(`root.querySelector('smartpi-control-diagram').scrollIntoView();`);
  await settle();
  await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  }).then((r) =>
    writeFile(output + "/diagram.png", Buffer.from(r.data, "base64")),
  );
  await run(`p.shadowRoot.querySelectorAll('.tile')[1].click();`);
  await settle();
  await waitLoaded();
  checks.navigation = await run(
    `const d=root.querySelector('smartpi-control-diagram');return d.diagnostic.entityId==='sensor.salon'&&d.shadowRoot.textContent.includes('PI/FF contournés')&&d.shadowRoot.querySelectorAll('.inactive').length>=2;`,
  );
  assert.ok(checks.navigation);
  await run(`v.tab='model';`);
  await settle();
  checks.model = await run(
    `return root.querySelectorAll('smartpi-time-chart').length===2&&!root.textContent.includes('120 °C')&&root.textContent.includes('Aucune courbe Twin');`,
  );
  assert.ok(checks.model);
  checks.modelProjection = await run(`const xy=root.querySelector('smartpi-diagnostic-projection');await xy.updateComplete;return xy.kind==='model'&&!!xy.shadowRoot.querySelector('svg')&&xy.shadowRoot.textContent.includes('la confiance actuelle ne valide pas le passé');`);
  assert.ok(checks.modelProjection);
  checks.projectionGapsAndBands = await evaluate(`(async()=>{
    const sample=(time,changes={})=>({time,state:'stable',history:{power:{command_percent:80,applied_percent:40},model:{a:.02,b:.001}},live:{},...changes});
    const data=[sample(100),sample(200,{state:'unavailable'}),sample(300),sample(1000)];
    const xy=document.createElement('smartpi-diagnostic-projection');xy.kind='model';xy.samples=data;document.body.append(xy);await xy.updateComplete;
    const separated=xy.shadowRoot.querySelectorAll('path.trajectory').length===3;
    const chart=document.createElement('smartpi-time-chart');chart.commandComparison=true;chart.percent=true;chart.range=[90,1100];chart.heading='Comparaison synthétique';chart.samples=data;
    chart.curves=[{label:'Demandée',path:'power.command_percent',color:'#d6892e',unit:'%',step:true},{label:'Appliquée',path:'power.applied_percent',color:'#2689ca',unit:'%',step:true}];
    document.body.append(chart);await chart.updateComplete;
    const bands=chart.plot?.bands.length===2&&chart.plot.data[1][1]===null&&chart.plot.data[2][1]===null&&chart.plot.series[1].gaps(chart.plot,1,0,3,[]).length>0;
    xy.remove();chart.remove();return separated&&bands&&!xy.observer&&!chart.observer&&!chart.plot;
  })()`);
  assert.ok(checks.projectionGapsAndBands);
  checks.commandBandPixels = await evaluate(`(async()=>{
    const chart=document.createElement('smartpi-time-chart');chart.commandComparison=true;chart.percent=true;chart.range=[0,6];chart.heading='Zone entre commandes';
    chart.curves=[{label:'Demandée',path:'power.command_percent',color:'#d6892e',unit:'%',step:true},{label:'Appliquée',path:'power.applied_percent',color:'#2689ca',unit:'%',step:true}];
    chart.samples=[1,2,3,4,5].map(time=>({time,state:'stable',live:{},history:{power:{command_percent:time<3?80:40,applied_percent:time<3?40:80}}}));
    document.body.append(chart);await chart.updateComplete;await new Promise(resolve=>requestAnimationFrame(resolve));
    const u=chart.plot,alpha=time=>u.ctx.getImageData(Math.round(u.valToPos(time,'x',true)),Math.round(u.valToPos(57,'y',true)),1,1).data[3];
    const values=[alpha(1.5),alpha(4.5)];chart.remove();return values;
  })()`);
  assert.ok(checks.commandBandPixels.every(alpha=>alpha>0),'Both directions of command difference must have a visible band');
  checks.analysisResponsive = {};
  for (const [width,height] of [[1440,1000],[390,844],[320,800]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:width===1440?'light':'dark'},{name:'prefers-reduced-motion',value:'reduce'}]});
    for (const tab of ['evolution','regulation','model']) {
      await run(`v.tab='${tab}';await v.updateComplete;`);await settle();
      const bounds=await run(`const target=root.querySelector('${tab==='regulation'?'.command-comparison':'smartpi-diagnostic-projection'}');await target.updateComplete;target.scrollIntoView({block:'start'});const b=target.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:Math.min(b.height,1600)};`);
      const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...bounds,scale:1}});
      await writeFile(output+'/analysis-'+tab+'-'+width+'.png',Buffer.from(shot.data,'base64'));
      checks.analysisResponsive[tab+'-'+width]=await evaluate('document.documentElement.scrollWidth<=innerWidth');
      assert.ok(checks.analysisResponsive[tab+'-'+width],'Analysis overflow '+tab+' '+width);
    }
  }
  await run(`v.tab='model';await v.updateComplete;`);
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Emulation.setEmulatedMedia", {
    features: [
      { name: "prefers-color-scheme", value: "dark" },
      { name: "prefers-reduced-motion", value: "reduce" },
    ],
  });
  await settle();
  await run(`v.scrollIntoView();`);
  await settle();
  checks.mobile = await evaluate(
    `({width:document.documentElement.scrollWidth,viewport:innerWidth})`,
  );
  assert.equal(checks.mobile.width, 390);
  await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  }).then((r) =>
    writeFile(output + "/mobile.png", Buffer.from(r.data, "base64")),
  );
  checks.mobileViews = {};
  for (const tab of ["evolution", "regulation", "model", "learning"]) {
    await run(`v.tab='${tab}';`);
    await settle();
    checks.mobileViews[tab] = await evaluate(
      "document.documentElement.scrollWidth",
    );
    assert.equal(checks.mobileViews[tab], 390);
  }
  checks.learning = await run(`
    const chart = root.querySelector('smartpi-time-chart');
    await chart.updateComplete;
    const before = chart.marks;
    const filter = root.querySelector('[aria-label="Repères d’apprentissage"] button');
    filter.click();
    await v.updateComplete;
    const filtered = !before.some(mark => mark.kind === 'A' || mark.kind === 'B') && chart.marks.every(mark => mark.kind !== 'A') && chart.thermalPhases && root.querySelectorAll('smartpi-time-chart').length === 2;
    filter.click();
    await v.updateComplete;
    chart.scrollIntoView({block:'center'});
    return filtered && !!chart.shadowRoot.querySelector('canvas');
  `);
  assert.ok(checks.learning);
  await settle();
  await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }).then((r) =>
    writeFile(output + "/learning-mobile.png", Buffer.from(r.data, "base64")),
  );
  await run(`v.tab='evolution';await v.updateComplete;root.querySelector('.tracking').scrollIntoView({block:'center'});`);
  await settle();
  await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }).then((r) =>
    writeFile(output + "/tracking-mobile.png", Buffer.from(r.data, "base64")),
  );
  await run(`v.tab='regulation';await v.updateComplete;const d=root.querySelector('smartpi-control-diagram');await d.updateComplete;d.shadowRoot.querySelector('[data-block="command"]').click();await d.updateComplete;d.scrollIntoView();`);
  await settle();
  checks.mobileDirectDetail = await run(`const d=root.querySelector('smartpi-control-diagram'),detail=d.shadowRoot.querySelector('aside').textContent;return detail.includes('État de l’hystérésis')&&!detail.includes('Sortie PI publiée')&&d.shadowRoot.querySelectorAll('.block.inactive').length===3&&document.documentElement.scrollWidth===390;`);
  assert.ok(checks.mobileDirectDetail);
  await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }).then((r) =>
    writeFile(output + "/diagram-mobile.png", Buffer.from(r.data, "base64")),
  );
  checks.supervisionShortcut = await run(`
    const {session,preferSession,followNow,range,end}=v;
    v.preferSession=true;await v.updateComplete;
    const time=Date.parse(v.diagnostic.lastUpdated)/1000;
    const sample={time,state:v.diagnostic.state,history:v.diagnostic.history,live:v.diagnostic.live};
    v.session=[{...sample,observedAt:true}];await v.updateComplete;
    root.querySelector('.open-supervision').click();await v.updateComplete;
    const missing=!v.inspection && root.textContent.includes('publication du direct est introuvable');
    v.tab='regulation';v.session=[sample];await v.updateComplete;
    root.querySelector('.open-supervision').click();await v.updateComplete;
    const selected=v.inspection?.time===time && v.inspection?.recorder===false &&
      root.querySelector('#inspection-title').textContent.includes('Publication sélectionnée');
    Object.assign(v,{session,preferSession,followNow,range,end});await v.updateComplete;
    return {missing,selected};
  `);
  assert.ok(Object.values(checks.supervisionShortcut).every(Boolean), JSON.stringify(checks.supervisionShortcut));

  checks.historyLoading = await run(`const pending=v.load();await v.updateComplete;
    const visible=v.loading&&root.textContent.includes('Lecture de');await pending;return visible;`);
  assert.ok(checks.historyLoading);
  await run(`v.tab='evolution';window.historyMode='error';await v.load();`);
  await settle();
  checks.permission = await run(
    `return root.textContent.includes('refusée ou impossible')&&root.textContent.includes('Historique de session');`,
  );
  assert.ok(checks.permission);
  await run(`window.historyMode='empty';await v.load();v.tab='evolution';`);
  await settle();
  checks.empty = await run(
    `return root.textContent.includes('aucune série v2 exploitable')&&root.textContent.includes('Historique de session');`,
  );
  assert.ok(checks.empty);
  await run(
    `const id='sensor.salon';fixture.hass.states[id]={...fixture.hass.states[id],last_updated:new Date(Date.now()+500).toISOString()};p.hass={...fixture.hass,states:{...fixture.hass.states}};`,
  );
  await settle();
  checks.sessionVisible = await run(
    `const last=v.session.at(-1);return [...root.querySelectorAll('smartpi-time-chart')].every(c=>c.samples.includes(last));`,
  );
  assert.ok(checks.sessionVisible);
  await run(`root.querySelector('[aria-label="Zoom avant"]').click();`);
  await settle();
  checks.sessionPaused = await run(
    `const before=[...v.range],id='sensor.salon';fixture.hass.states[id]={...fixture.hass.states[id],last_updated:new Date(Date.now()+800).toISOString()};p.hass={...fixture.hass,states:{...fixture.hass.states}};await p.updateComplete;await v.updateComplete;return v.range[0]===before[0]&&v.range[1]===before[1]&&!v.followNow;`,
  );
  assert.ok(checks.sessionPaused);
  await run(`v.reset();`);
  await settle();
  await run(
    `const id='sensor.salon';fixture.hass.states[id]={...fixture.hass.states[id],state:'unavailable',last_updated:new Date(Date.now()+1000).toISOString()};p.hass={...fixture.hass,states:{...fixture.hass.states}};`,
  );
  await settle();
  checks.reactivity = await run(
    `const charts=[...root.querySelectorAll('smartpi-time-chart')];return v.session.some(s=>s.state==='unavailable'&&Object.keys(s.history).length===0)&&charts.every(c=>c.samples.some(s=>s.state==='unavailable'));`,
  );
  assert.ok(checks.reactivity);
  checks.cleanup = await run(
    `v.tab='evolution';await v.updateComplete;const charts=[...root.querySelectorAll('smartpi-time-chart')],xy=[...root.querySelectorAll('smartpi-diagnostic-projection')];p.remove();return charts.every(c=>!c.plot&&!c.observer)&&xy.every(c=>!c.observer)&&p.sessionHistory.get('sensor.salon').length===0&&p.freshnessTimer===undefined;`,
  );
  assert.ok(checks.cleanup);
  assert.equal(await evaluate("fixture.counts.writes"), 0);
  // Separate synthetic scene: the two explicitly authorized climate actions.
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'light'}]});
  await send("Page.navigate", {url: "http://127.0.0.1:8765/frontend/tests/thermal-browser.html"});
  for (let n = 0; n < 50; n++) {
    if (await evaluate("!!window.thermalFixture?.panel.shadowRoot.querySelector('smartpi-thermal-journey')?.shadowRoot")) break;
    await pause(100);
  }
  const journey = script => evaluate(`(async()=>{const f=thermalFixture,p=f.panel,j=p.shadowRoot.querySelector('smartpi-thermal-journey'),r=j.shadowRoot;${script}})()`);
  const sync = `f.publish();await p.updateComplete;await j.updateComplete;`;
  checks.journeyInitial = await journey(`return {calls:f.calls.length,eta:r.querySelector('.eta')?.textContent.includes('35 min'),target:r.querySelector('.destination').textContent.includes('20'),measured:r.querySelector('.measured').textContent.includes('19,2')};`);
  assert.equal(checks.journeyInitial.calls, 0);
  assert.ok(checks.journeyInitial.eta && checks.journeyInitial.target && checks.journeyInitial.measured);
  checks.journeyRoomNavigation = await journey(`
    const sensor=structuredClone(f.sensor),climate=structuredClone(f.climate);
    sensor.entity_id='sensor.navigation_test';climate.entity_id='climate.navigation_test';
    climate.attributes.specific_states.regulation_diagnostics=sensor.entity_id;
    f.hass.states[sensor.entity_id]=sensor;f.hass.states[climate.entity_id]=climate;${sync}
    const select=async id=>{p.selectedId=id;await p.updateComplete;await j.updateComplete;
      return !!r.querySelector('.eta')&&!r.textContent.includes('après le changement de consigne');};
    const valid=await select(sensor.entity_id)&&await select(f.sensor.entity_id);
    delete f.hass.states[sensor.entity_id];delete f.hass.states[climate.entity_id];${sync}
    return valid&&f.calls.length===0;
  `);
  assert.ok(checks.journeyRoomNavigation,'Selecting another room must preserve its already valid Twin publication');
  checks.journeyReconnectPending = await journey(`
    const original=f.hass.callWS,base=f.calls.length;let valid=true;
    for(const stage of ['metadata','service']){
      let release,entered=false;const gate=new Promise(resolve=>release=resolve);
      p.hass={...f.hass,callWS:async message=>{if(stage==='metadata'&&message.action==='receipt_begin'){entered=true;await gate;}return original(message);}};
      f.setPending(stage==='service'?gate:undefined);await p.updateComplete;await j.updateComplete;
      await j.previewTemperature(21);const operation=j.apply();
      for(let n=0;n<20&&!(stage==='metadata'?entered:f.calls.length>base);n++)await new Promise(resolve=>setTimeout(resolve,0));
      const parent=j.parentNode,next=j.nextSibling;j.remove();parent.insertBefore(j,next);await j.updateComplete;
      release();await operation;await j.updateComplete;
      valid&&=!j.sending&&!j.choice&&!r.querySelector('.apply')&&r.querySelector('[role=status]').textContent.includes('Résultat non confirmé')
        &&f.calls.length===base+(stage==='service'?1:0);
      await new Promise(resolve=>setTimeout(resolve,0));valid&&=f.calls.length===base+(stage==='service'?1:0);
      f.calls.length=base;
    }
    f.setPending(undefined);p.hass=f.hass;await p.updateComplete;await j.updateComplete;
    return valid;
  `);
  assert.ok(checks.journeyReconnectPending,'Reconnecting a pending request must discard its preview, report uncertainty and never resend');
  checks.publishedExplanations = await journey(`
    const maintenance=document.createElement('smartpi-explanations'),learning=document.createElement('smartpi-explanations');
    maintenance.mode='maintenance';learning.mode='learning';
    const diagnostic={...j.diagnostic,lastUpdated:new Date().toISOString(),available:true,live:{
      temperature:{integral_hold_source:'deadband_hysteresis_shell',integral_hold_mode:'future_hold',integral_guard_source:'setpoint_change'},
      feedforward:{fftrim:{observation_mode:'stationary',stationary:{state:'ready'},periodic:{state:'waiting_deadtime'},last_reject_reason:'future_reject',last_update_reason:'updated_bumpless',transfer:{state:'applied',reason:'updated_bumpless'},
        last_transaction:{timestamp_utc:'2026-11-14T10:00:00Z',observation_mode:'stationary',state:'applied',reason:'updated_bumpless',quality:'future_quality',requested_trim_delta:0,stored_trim_delta:0,transferable_i_power:0,requested_i_transfer:0,applied_i_transfer:0,applied_trim_delta:.03}}},
      learning:{last_reason:'skip: no external temp'},model:{tau_reliable:false,tau_min:999},
      analysis:{learning:{ff_warmup_ok_count:0,ff_warmup_cycles:7,response_lag:{lag_s:0,estimates:0,episodes:0,episodes_target:3,last_reason:'warming_up'}}}}};
    maintenance.diagnostic=diagnostic;learning.diagnostic=diagnostic;p.shadowRoot.append(maintenance,learning);
    await Promise.all([maintenance.updateComplete,learning.updateComplete]);
    const m=maintenance.shadowRoot,l=learning.shadowRoot,field=(root,key)=>root.querySelector('[data-field='+key+'] dd')?.textContent;
    let valid=m.querySelector('summary').textContent==='Pourquoi ce maintien ?'&&l.querySelector('summary').textContent==='Comprendre l’apprentissage'
      &&field(m,'hold-source').includes('Intégrale conservée')&&field(m,'hold-mode')==='Code publié · future_hold'
      &&field(m,'trim-reject')==='Code publié · future_reject'&&field(m,'i-transfer')==='0 points de commande'
      &&['requested-trim','stored-trim','transferable-i','requested-i'].every(key=>field(m,key)==='0 points de commande')
      &&field(m,'trim-delta')==='3 points de commande'&&field(m,'net-delta')==='Indisponible'
      &&m.querySelector('[data-transaction] time').dateTime==='2026-11-14T10:00:00Z'
      &&field(l,'warmup-count')==='0'&&field(l,'response-lag')==='0 s'&&field(l,'lag-episodes')==='0'
      &&field(l,'tau').includes('Non interprétable')&&!l.textContent.includes('999 min');
    maintenance.now=Date.parse(diagnostic.lastUpdated)/1000+601;await maintenance.updateComplete;
    const agingQuality=m.querySelector('smartpi-publication-quality');await agingQuality.updateComplete;
    valid&&=agingQuality.shadowRoot.textContent.includes('ancienne');maintenance.now=Date.now()/1000;
    maintenance.diagnostic={...diagnostic,available:false};await maintenance.updateComplete;
    valid&&=[...m.querySelectorAll('[data-field] dd')].every(dd=>dd.textContent==='Indisponible')
      &&!m.querySelector('[data-transaction] time')&&!m.textContent.includes('future_hold');
    maintenance.diagnostic={...diagnostic,lastUpdated:new Date(Date.now()-700000).toISOString(),live:{}};await maintenance.updateComplete;
    const quality=m.querySelector('smartpi-publication-quality');await quality.updateComplete;
    valid&&=field(m,'hold-source')==='Indisponible'&&m.textContent.includes('Aucun transfert daté publié')&&quality.shadowRoot.textContent.includes('ancienne');
    maintenance.remove();learning.remove();
    const integrated=[...p.shadowRoot.querySelectorAll('smartpi-explanations')];
    return valid&&integrated.some(e=>e.mode==='maintenance')&&integrated.some(e=>e.mode==='learning')&&f.calls.length===0;
  `);
  assert.ok(checks.publishedExplanations,'Learning and maintenance explanations must preserve published reasons, zero, missing values, old transaction date and reliability');
  checks.explanationsKeyboard={};
  for(const mode of ['maintenance','learning']){
    await journey(`const component=[...p.shadowRoot.querySelectorAll('smartpi-explanations')].find(e=>e.mode==='${mode}');
      if('${mode}'==='learning')p.shadowRoot.querySelector('.learning-details').open=true;
      component.shadowRoot.querySelector('details').open=false;component.shadowRoot.querySelector('summary').focus();`);
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
    await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
    checks.explanationsKeyboard[mode]=await journey(`const component=[...p.shadowRoot.querySelectorAll('smartpi-explanations')].find(e=>e.mode==='${mode}');
      const opened=component.shadowRoot.querySelector('details').open;component.shadowRoot.querySelector('details').open=false;
      if('${mode}'==='learning')p.shadowRoot.querySelector('.learning-details').open=false;return opened;`);
    assert.ok(checks.explanationsKeyboard[mode],'Explanation keyboard toggle '+mode);
  }
  checks.learningCompact = await journey(`
    const learn=()=>p.shadowRoot.querySelector('.learn');
    const compact=learn().textContent.includes('Surveillance du modèle')&&!learn().querySelector('progress')
      &&learn().querySelector('details')&&!learn().querySelector('details').open;
    const original=structuredClone(f.sensor.attributes.live.learning);
    for(const stage of ['learning','degraded','bootstrap',undefined]){
      Object.assign(f.sensor.attributes.live.learning,{stage,emea_samples_a:31,emea_samples_b:31,history_target:31});
      ${sync}
      if(learn().querySelector('details')||learn().querySelectorAll('progress').length!==2)return false;
    }
    f.sensor.attributes.live.learning=original;${sync}return compact;
  `);
  assert.ok(checks.learningCompact);
  checks.overviewCards = await journey(`
    const tile=()=>p.shadowRoot.querySelector('.tile');
    const original=structuredClone(f.sensor),climate=structuredClone(f.climate);
    let good=tile().textContent.includes('Consigne')&&tile().textContent.includes('20 °C')
      &&tile().textContent.includes('19,7 °C')&&tile().querySelector('.tile-level').style.height==='42%';
    for(const [mode,label] of [['frost','Hors gel'],['eco','Éco'],['comfort','Confort'],['boost','Boost'],['custom','custom'],['none','Manuel']]){
      f.climate.attributes.preset_mode=mode;${sync}
      good&&=tile().textContent.includes(label)&&tile().classList.contains('mode-'+(mode==='custom'?'unknown':mode));
    }
    f.climate.state='off';${sync}good&&=tile().textContent.includes('Arrêt');
    Object.assign(f.climate,structuredClone(climate));
    for(const value of [0,null,-1,101]){
      f.sensor.attributes.live.power.applied_percent=value;${sync}
      good&&=tile().querySelector('.tile-level').style.height==='0%';
      good&&=value===0?tile().textContent.includes('0 %'):tile().textContent.includes('Commande indisponible');
    }
    f.sensor.last_updated=new Date(Date.now()-700000).toISOString();${sync}
    good&&=tile().textContent.includes('Publication ancienne')&&tile().querySelector('.tile-level').style.height==='0%';
    f.sensor.state='unavailable';${sync}good&&=tile().textContent.includes('Diagnostic indisponible');
    Object.assign(f.sensor,original);Object.assign(f.climate,climate);${sync}return good&&f.calls.length===0;
  `);
  assert.ok(checks.overviewCards);
  // Render the overview with five synthetic thermostats; never a real HA state.
  await journey(`
    for(const [i,mode] of ['frost','eco','comfort','boost','none'].entries()){
      if(!i){f.climate.attributes.preset_mode=mode;f.climate.attributes.friendly_name='Chambre parents';continue;}
      const sensor=structuredClone(f.sensor),climate=structuredClone(f.climate);
      sensor.entity_id='sensor.overview_'+i;climate.entity_id='climate.overview_'+i;
      climate.attributes.specific_states.regulation_diagnostics=sensor.entity_id;
      climate.attributes.friendly_name=['','Cuisine','Chambre avec un nom particulièrement long','Salon','Bureau'][i];
      climate.attributes.preset_mode=mode;sensor.attributes.live.power.applied_percent=[0,15,45,80,0][i];
      f.hass.states[sensor.entity_id]=sensor;f.hass.states[climate.entity_id]=climate;
    }${sync}
  `);
  for(const theme of ['light','dark']){
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:theme}]});
    for(const [width,height] of [[1440,1000],[390,844],[320,844]]){
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
      await evaluate('scrollTo(0,0)');await settle();
      assert.ok(await journey(`return document.documentElement.scrollWidth<=innerWidth&&[...p.shadowRoot.querySelectorAll('.tile')].every(t=>t.scrollWidth<=t.clientWidth+4);`),'Overview overflow '+width);
      const shot=await send('Page.captureScreenshot',{format:'png'});
      await writeFile(output+'/overview-'+theme+'-'+width+'.png',Buffer.from(shot.data,'base64'));
    }
  }

  await journey(`p.shadowRoot.querySelectorAll('.tile')[2].focus();`);
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  checks.overviewKeyboard = await journey(`await p.updateComplete;
    const tile=p.shadowRoot.querySelectorAll('.tile')[2];
    return tile.getAttribute('aria-pressed')==='true'&&p.shadowRoot.activeElement===tile&&f.calls.length===0;`);
  assert.ok(checks.overviewKeyboard);
  await journey(`p.shadowRoot.querySelector('.learning-details summary').focus();`);
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  checks.learningDetailsKeyboard = await journey(`return p.shadowRoot.querySelector('.learning-details').open;`);
  assert.ok(checks.learningDetailsKeyboard);
  for(const [width,height] of [[1440,1000],[390,844],[320,844]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    const bounds=await journey(`const learn=p.shadowRoot.querySelector('.learn');learn.querySelector('details').open=false;
      learn.scrollIntoView({block:'center'});const b=learn.getBoundingClientRect();return{x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};`);
    const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...bounds,scale:1}});
    await writeFile(output+'/monitoring-'+width+'.png',Buffer.from(shot.data,'base64'));
  }
  await journey(`
    for(const key of Object.keys(f.hass.states))if(key.includes('overview_'))delete f.hass.states[key];
    f.climate.attributes.preset_mode='comfort';f.climate.attributes.friendly_name='Salon';${sync}
  `);
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'light'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});

  checks.journeyMaintenance = await journey(`
    const saved=structuredClone(f.sensor.attributes.live),target=f.climate.attributes.temperature;
    const live=f.sensor.attributes.live;
    f.climate.attributes.temperature=19;
    Object.assign(live,{control:{mode:'smartpi',phase:'Stable',in_deadband:false},calibration:{state:'Idle'},
      setpoint:{filtered_setpoint:19,trajectory_active:false,boost_active:false},
      power:{ff_percent:14.2,pi_percent:-6.1,command_percent:8.1,applied_percent:8.1,hold_percent:0}});
    ${sync}
    const visible=r.querySelector('.maintenance')?.textContent.includes('Chauffe de maintien')&&r.querySelector('.maintenance')?.textContent.includes('14,2');
    live.setpoint.trajectory_active=true;${sync}
    const hidden=!r.querySelector('.maintenance');
    f.sensor.attributes.live=saved;f.climate.attributes.temperature=target;${sync}
    return visible&&hidden&&f.calls.length===0;
  `);
  assert.ok(checks.journeyMaintenance);
  checks.journeyEffortProportion = await journey(`
    const results=[];
    for(const percent of [0,15,68,100]){
      f.sensor.attributes.live.power.applied_percent=percent;${sync}
      const meter=r.querySelector('[role=meter]'),arrow=r.querySelector('.effort-arrow');
      results.push(meter?.getAttribute('aria-valuenow')===String(percent)&&
        (percent===0?!arrow:Math.abs(arrow.getBoundingClientRect().width/meter.getBoundingClientRect().width-percent/100)<.001));
    }
    f.sensor.attributes.live.power.applied_percent=42;${sync}return results.every(Boolean)&&getComputedStyle(r.querySelector('.effort-arrow')).clipPath!=='none';
  `);
  assert.ok(checks.journeyEffortProportion);
  checks.journeyAttributeTiming = await journey(`
    const updated=f.climate.last_updated,changed=f.climate.last_changed,source=f.sensor.last_updated;
    const results=[];
    f.climate.last_changed=new Date(Date.now()-60000).toISOString();
    for(let i=0;i<5;i++){
      f.climate.last_updated=new Date(Date.now()+i+1).toISOString();
      f.climate.attributes.hvac_action=i%2?'idle':'heating';${sync}
      results.push(!!r.querySelector('.effort-arrow')&&r.querySelector('[role=meter]')?.getAttribute('aria-valuenow')==='42'&&
        r.querySelector('.setpoint-position').textContent.includes('Encore')&&!r.querySelector('.eta'));
    }
    f.climate.state='cool';f.climate.last_changed=new Date(Date.now()+20).toISOString();${sync}
    results.push(!r.querySelector('[role=meter]')&&!r.querySelector('.return-chevron'));
    f.sensor.last_updated=new Date(Date.now()+30).toISOString();${sync}
    results.push(!!r.querySelector('.effort-arrow.reverse'));
    f.climate.state='heat';f.climate.last_updated=updated;f.climate.last_changed=changed;
    f.climate.attributes.hvac_action='heating';f.sensor.last_updated=source;${sync}
    return results.every(Boolean)&&f.calls.length===0;
  `);
  assert.ok(checks.journeyAttributeTiming);
  checks.journeyOvershootAndZero = await journey(`
    f.sensor.attributes.live.temperature.indoor=20.3;f.sensor.attributes.live.power.applied_percent=12;${sync}
    const positive=r.querySelector('.return-chevron')?.dataset.direction==='left'&&r.querySelector('.setpoint-position').textContent.includes('+0,3')&&
      !r.querySelector('.effort-arrow').classList.contains('reverse')&&r.querySelector('[role=meter]').getAttribute('aria-valuenow')==='12';
    f.sensor.attributes.live.power.applied_percent=0;${sync}
    const zero=!r.querySelector('.effort-arrow')&&r.querySelector('.return-chevron')?.dataset.direction==='left';
    f.sensor.attributes.live.temperature.indoor=20;${sync}
    const aligned=!!r.querySelector('.aligned-mark')&&!r.querySelector('.return-chevron')&&r.querySelector('.setpoint-position').textContent.includes('À la consigne affichée');
    f.climate.state='cool';f.sensor.attributes.live.temperature.indoor=19.7;f.sensor.attributes.live.power.applied_percent=68;${sync}
    const cool=r.querySelector('.return-chevron')?.dataset.direction==='right'&&!!r.querySelector('.effort-arrow.reverse');
    f.climate.state='heat';f.sensor.attributes.live.temperature.indoor=19.2;f.sensor.attributes.live.power.applied_percent=42;${sync}
    f.sensor.last_updated=new Date(Date.now()+1).toISOString();${sync}
    return positive&&zero&&aligned&&cool&&f.calls.length===0;
  `);
  assert.ok(checks.journeyOvershootAndZero);
  checks.journeyEffortMissing = await journey(`
    const oldTime=f.sensor.last_updated;const results=[];
    for(const value of [null,-1,101]){f.sensor.attributes.live.power.applied_percent=value;${sync}results.push(!r.querySelector('[role=meter]')&&!r.querySelector('.effort-arrow'));}
    f.sensor.attributes.live.power.applied_percent=42;f.sensor.last_updated=new Date(Date.now()-601000).toISOString();${sync}
    results.push(!r.querySelector('[role=meter]')&&!r.querySelector('.return-chevron'));
    f.sensor.last_updated=oldTime;${sync}return results.every(Boolean)&&!!r.querySelector('[role=meter]');
  `);
  assert.ok(checks.journeyEffortMissing);
  checks.journeyEffortExpiry = await journey(`
    const source=f.sensor.last_updated,climateTime=f.climate.last_updated;
    f.climate.last_updated=new Date(Date.now()-601000).toISOString();f.sensor.last_updated=new Date(Date.now()-599700).toISOString();${sync}
    const visible=!!r.querySelector('[role=meter]');await new Promise(resolve=>setTimeout(resolve,400));await j.updateComplete;
    const expired=!r.querySelector('[role=meter]');f.climate.last_updated=climateTime;f.sensor.last_updated=source;${sync}return visible&&expired;
  `);
  assert.ok(checks.journeyEffortExpiry);
  checks.journeyKeyboardFocus = await journey(`const input=r.querySelector('input');input.focus();const style=getComputedStyle(input);return r.activeElement===input&&style.outlineStyle==='solid'&&parseFloat(style.outlineWidth)>=3;`);
  assert.ok(checks.journeyKeyboardFocus);
  checks.journeyEtaAbsent = await journey(`
    const twin=f.sensor.attributes.live.analysis.twin;const results=[];
    for(const patch of [{twin_model_reliable:false},{twin_status:'unavailable'},{eta_s:null},{eta_reason:'too_far'},{twin_warming_up:true}]){
      const old={...twin};Object.assign(twin,patch);${sync}results.push(!r.querySelector('.eta'));Object.assign(twin,old);
    }${sync}return results.every(Boolean)&&!!r.querySelector('.eta');
  `);
  assert.ok(checks.journeyEtaAbsent);
  checks.journeyPreview = await journey(`
    const eco=[...r.querySelectorAll('.preset')].find(b=>b.textContent.includes('Éco'));eco.click();await j.updateComplete;
    const preview=r.querySelector('.preview')?.textContent.includes('17')&&!r.querySelector('.eta')&&f.calls.length===0&&r.querySelector('.destination').textContent.includes('20')&&r.querySelector('.setpoint-position').textContent.includes('Encore 0,8')&&r.querySelector('[role=meter]').getAttribute('aria-valuenow')==='42';
    r.querySelector('.actions button').click();await j.updateComplete;return preview&&!r.querySelector('.preview')&&!!r.querySelector('.eta');
  `);
  assert.ok(checks.journeyPreview);
  await journey(`r.querySelector('input').focus();`);
  await send("Input.dispatchKeyEvent", {type:"keyDown",key:"ArrowRight",code:"ArrowRight",windowsVirtualKeyCode:39});
  await send("Input.dispatchKeyEvent", {type:"keyUp",key:"ArrowRight",code:"ArrowRight",windowsVirtualKeyCode:39});
  checks.journeyKeyboard = await journey(`await j.updateComplete;return j.choice?.kind==='temperature'&&j.choice.value===20.5&&f.calls.length===0;`);
  assert.ok(checks.journeyKeyboard);
  checks.journeyStale = await journey(`f.climate.attributes.temperature=21;${sync}return !j.choice&&!r.querySelector('.preview')&&f.calls.length===0;`);
  assert.ok(checks.journeyStale);
  checks.journeyApply = await journey(`
    [...r.querySelectorAll('.preset')].find(b=>b.textContent.includes('Éco')).click();await j.updateComplete;
    r.querySelector('.apply').click();await j.updateComplete;await new Promise(resolve=>setTimeout(resolve,0));await j.updateComplete;
    return f.calls.length===1&&JSON.stringify(f.calls[0])===JSON.stringify(['climate','set_preset_mode',{entity_id:'climate.demo_salon',preset_mode:'eco'}])&&r.querySelector('.destination').textContent.includes('21')&&!j.choice;
  `);
  assert.ok(checks.journeyApply);
  checks.journeyTemperature = await journey(`
    r.querySelector('[aria-label="Augmenter la température"]').click();await j.updateComplete;r.querySelector('.apply').click();
    await new Promise(resolve=>setTimeout(resolve,0));await j.updateComplete;
    return f.calls.length===2&&JSON.stringify(f.calls[1])===JSON.stringify(['climate','set_temperature',{entity_id:'climate.demo_salon',temperature:21.5}]);
  `);
  assert.ok(checks.journeyTemperature);
  checks.journeyRefused = await journey(`
    f.setReject(true);r.querySelector('[aria-label="Augmenter la température"]').click();await j.updateComplete;r.querySelector('.apply').click();
    await new Promise(resolve=>setTimeout(resolve,0));await j.updateComplete;
    return f.calls.length===3&&r.querySelector('[role=status]').textContent.includes('refusée')&&!!r.querySelector('.preview');
  `);
  assert.ok(checks.journeyRefused);
  checks.journeyPending = await journey(`
    f.setReject(false);let resolve;f.setPending(new Promise(r=>resolve=r));r.querySelector('.apply').click();await j.updateComplete;
    r.querySelector('.apply').click();await new Promise(resolve=>setTimeout(resolve,0));const blocked=f.calls.length===4&&r.querySelector('.apply').disabled;
    f.climate.entity_id='climate.other';f.climate.attributes.specific_states.regulation_diagnostics='sensor.other';${sync}
    resolve();await new Promise(r=>setTimeout(r,0));await j.updateComplete;f.setPending(undefined);
    return blocked&&!r.querySelector('.preview')&&!r.querySelector('.eta')&&!r.querySelector('[role=status]').textContent.includes('Demande envoyée');
  `);
  assert.ok(checks.journeyPending);
  await journey(`f.climate.entity_id='climate.demo_salon';f.climate.attributes.specific_states.regulation_diagnostics=f.sensor.entity_id;f.climate.attributes.temperature=20;${sync}f.sensor.last_updated=new Date(Date.now()+1).toISOString();${sync}`);
  checks.journeyResponsive = {};
  for (const [width,height] of [[1440,1000],[390,844],[320,800]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await settle();
    const bounds=await journey(`j.scrollIntoView({block:'start'});const b=j.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};`);
    const capture=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...bounds,scale:1}});
    await writeFile(output+`/thermal-${width}.png`,Buffer.from(capture.data,'base64'));
    checks.journeyResponsive[width]=await journey(`return document.documentElement.scrollWidth<=innerWidth&&[...r.querySelectorAll('button')].filter(b=>!b.disabled).every(b=>b.getBoundingClientRect().height>=44);`);
    assert.ok(checks.journeyResponsive[width]);
  }
  for (const [scene,width,height,temp,percent,mode] of [
    ['heating',1440,1000,19.2,68,'heat'],['overshoot',390,844,20.3,12,'heat'],
    ['overshoot-zero',320,800,20.3,0,'heat'],['aligned',390,844,20,0,'heat'],['cooling',390,844,19.7,68,'cool']
  ]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await journey(`f.climate.state='${mode}';f.sensor.attributes.live.temperature.indoor=${temp};f.sensor.attributes.live.power.applied_percent=${percent};Object.assign(f.sensor.attributes.live.analysis.twin,{eta_s:${scene === 'heating' ? 2100 : 'null'},eta_reason:'${scene === 'heating' ? 'ok' : 'unavailable'}'});f.sensor.last_updated=new Date(Date.now()+1).toISOString();${sync}`);
    await settle();
    const bounds=await journey(`j.scrollIntoView({block:'start'});const b=j.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};`);
    const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...bounds,scale:1}});
    await writeFile(output+'/effort-'+scene+'.png',Buffer.from(shot.data,'base64'));
    assert.ok(await journey(`return document.documentElement.scrollWidth<=innerWidth;`),'Effort scene overflow '+scene);
  }
  await journey(`f.climate.state='heat';f.sensor.attributes.live.temperature.indoor=19.2;f.sensor.attributes.live.power.applied_percent=42;Object.assign(f.sensor.attributes.live.analysis.twin,{eta_s:2100,eta_reason:'ok'});${sync}`);
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'dark'},{name:'prefers-reduced-motion',value:'reduce'}]});
  await settle();
  const darkBounds=await journey(`const b=j.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};`);
  const dark=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...darkBounds,scale:1}});
  await writeFile(output+'/thermal-dark-390.png',Buffer.from(dark.data,'base64'));
  const observatory = script => evaluate(`(async()=>{const f=thermalFixture,p=f.panel,j=p.shadowRoot.querySelector('smartpi-thermal-journey'),o=p.shadowRoot.querySelector('smartpi-observatory'),r=o.shadowRoot;${script}})()`);
  checks.observatoryLoaded = await observatory(`await o.refresh();await o.updateComplete;return !!o.room&&!o.error&&r.textContent.includes('Reçus de chauffe');`);
  assert.ok(checks.observatoryLoaded);
  const initialClimateCalls = await evaluate('thermalFixture.calls.length');
  checks.authorityAndAdvice = await observatory(`
    f.climate.state='off';f.climate.attributes.specific_states.hvac_off_reason='hvac_off_window_detection';f.climate.attributes.requested_state={target_temperature:21};f.publish();await p.updateComplete;await j.updateComplete;
    const authority=j.shadowRoot.querySelector('.authority').textContent.includes('Fenêtre ouverte');
    f.climate.state='heat';delete f.climate.attributes.specific_states.hvac_off_reason;f.sensor.attributes.live.power.applied_percent=100;f.publish();await p.updateComplete;await j.updateComplete;
    j.shadowRoot.querySelector('[aria-label="Augmenter la température"]').click();await j.updateComplete;
    const good=authority&&j.shadowRoot.querySelector('.advice').textContent.includes('déjà à 100');
    j.shadowRoot.querySelector('.actions button').click();delete f.climate.attributes.specific_states.hvac_off_reason;f.sensor.attributes.live.power.applied_percent=42;f.publish();await p.updateComplete;return good;
  `);
  assert.ok(checks.authorityAndAdvice);
  checks.comfortBookmark = await observatory(`
    r.querySelector('[data-view=bookmarks]').click();await o.updateComplete;
    const input=r.querySelector('#bookmark-name');input.value='Lecture du soir';r.querySelector('form').requestSubmit();
    await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    const saved=r.textContent.includes('Lecture du soir')&&o.room.bookmarks.length===1;
    [...r.querySelectorAll('button')].find(b=>b.textContent.includes('Préparer')).click();await p.updateComplete;await j.updateComplete;
    const preview=!!j.shadowRoot.querySelector('.preview')&&j.choice.value===20;
    j.shadowRoot.querySelector('.actions button').click();await j.updateComplete;
    return saved&&preview;
  `);
  assert.ok(checks.comfortBookmark);
  checks.trialAndFeedback = await observatory(`
    r.querySelector('[data-view=trials]').click();await o.updateComplete;r.querySelector('#trial-name').value='Soirée à 20';r.querySelector('form').requestSubmit();
    await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    const started=o.room.trials.length===1&&r.textContent.includes('Soirée à 20');
    [...r.querySelectorAll('button')].find(b=>b.textContent.includes('Terminer l’essai')).click();await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    const select=r.querySelector('select');select.value='good';select.dispatchEvent(new Event('change',{bubbles:true}));await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    return started&&o.room.trials[0].status==='finished'&&o.room.trials[0].feedback==='good';
  `);
  assert.ok(checks.trialAndFeedback);
  checks.trialComparison = await observatory(`
    const book=f.getBook(f.sensor.entity_id),first=book.trials[0];Object.assign(first.summary,{publications:12,minimum:19.5,maximum:20.1,last:20,max_abs_error:.5});
    book.trials.push({...structuredClone(first),id:'comparison-trial',label:'Autre soirée',target:19.5,outdoor:3,feedback:'cold'});
    await o.refresh();await o.updateComplete;[...r.querySelectorAll('.compare input')].forEach(box=>box.click());await o.updateComplete;
    return !!r.querySelector('table')&&r.querySelector('.comparison').textContent.includes('Conditions et durées peuvent différer');
  `);
  assert.ok(checks.trialComparison);
  checks.forecastNotebook = await observatory(`
    f.getBook(f.sensor.entity_id).forecasts=[{id:'forecast-ok',started_at:Date.now()/1000-2400,target:20,temperature:19.2,outdoor:8,unit:'°C',eta_s:1800,status:'reached',observed_s:2400,observed_at:Date.now()/1000},{id:'forecast-gap',started_at:Date.now()/1000-1000,target:21,temperature:19,unit:'°C',eta_s:3000,status:'excluded',reason:'Interruption de données supérieure à 10 min'}];
    await o.refresh();r.querySelector('[data-view=forecasts]').click();await o.updateComplete;
    return r.textContent.includes('30 min')&&r.textContent.includes('40 min')&&r.textContent.includes('Interruption de données')&&r.querySelector('.counts').textContent.includes('1 atteinte');
  `);
  assert.ok(checks.forecastNotebook);
  for (const [width,height] of [[1440,1000],[390,844],[320,800]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    for (const tab of ['receipts','bookmarks','trials','forecasts']) {
      await observatory(`r.querySelector('[data-view=${tab}]').click();await o.updateComplete;`);
      await settle();
      const bounds=await observatory(`o.scrollIntoView({block:'start'});const b=o.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:Math.min(b.height,1600)};`);
      const capture=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...bounds,scale:1}});
      await writeFile(output+`/observatory-${tab}-${width}.png`,Buffer.from(capture.data,'base64'));
      assert.ok(await observatory(`return document.documentElement.scrollWidth<=innerWidth;`),'Observatory overflow '+tab+' '+width);
    }
  }
  checks.observatoryRefusal = await observatory(`f.setMetadataReject(true);await o.refresh();await o.updateComplete;const refused=r.textContent.includes('Stockage local refusé');f.setMetadataReject(false);await o.refresh();await o.updateComplete;return refused&&!o.error;`);
  assert.ok(checks.observatoryRefusal);
  checks.observatoryDelete = await observatory(`
    r.querySelector('[data-view=bookmarks]').click();await o.updateComplete;
    [...r.querySelectorAll('.entries button')].find(b=>b.textContent.trim()==='Supprimer').click();await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    const removed=o.room.bookmarks.length===0;r.querySelector('.storage').open=true;
    [...r.querySelectorAll('.storage button')].find(b=>b.textContent.includes('Effacer les données')).click();await o.updateComplete;
    const armed=!![...r.querySelectorAll('button')].find(b=>b.textContent.includes('Confirmer l’effacement'));
    [...r.querySelectorAll('button')].find(b=>b.textContent.includes('Confirmer l’effacement')).click();await new Promise(resolve=>setTimeout(resolve,0));await o.updateComplete;
    return removed&&armed&&o.room.trials.length===0&&o.room.forecasts.length===0&&o.room.receipts.length===0;
  `);
  assert.ok(checks.observatoryDelete);
  checks.observatoryMalformedResponse = await observatory(`
    const book=f.getBook(f.sensor.entity_id);book.trials.push({id:'incomplete'});
    await o.refresh();await o.updateComplete;const refused=!!o.error&&r.textContent.includes('non reconnue');
    book.trials=[];await o.refresh();await o.updateComplete;return refused&&!o.error;
  `);
  assert.ok(checks.observatoryMalformedResponse);
  checks.observatoryTextEscaping = await observatory(`
    const label='<img src=x onerror="window.smartpiXss=true">';
    await o.mutate('bookmark_save',{label});r.querySelector('[data-view=bookmarks]').click();await o.updateComplete;
    const escaped=r.textContent.includes(label)&&!r.querySelector('img')&&!window.smartpiXss;
    await o.mutate('bookmark_delete',{id:o.room.bookmarks[0].id});return escaped;
  `);
  assert.ok(checks.observatoryTextEscaping);
  checks.observatoryReconnectDuringSave = await observatory(`
    const original=f.hass.callWS;let release;const gate=new Promise(resolve=>release=resolve);
    p.hass={...f.hass,callWS:async msg=>{if(msg.action==='bookmark_save')await gate;return original(msg)}};
    await p.updateComplete;await o.updateComplete;
    const saving=o.mutate('bookmark_save',{label:'Retour au panneau'});await o.updateComplete;
    const parent=o.parentNode,next=o.nextSibling;o.remove();parent.insertBefore(o,next);await o.updateComplete;
    release();await saving;await o.refresh();await o.updateComplete;
    const recovered=!o.saving&&!o.loading&&o.room.bookmarks.some(b=>b.label==='Retour au panneau');
    p.hass=f.hass;await p.updateComplete;await o.updateComplete;
    await o.mutate('bookmark_delete',{id:o.room.bookmarks.find(b=>b.label==='Retour au panneau').id});
    return recovered;
  `);
  assert.ok(checks.observatoryReconnectDuringSave);
  assert.equal(await evaluate('thermalFixture.calls.length'),initialClimateCalls,'Observatory metadata and bookmark previews must not issue climate commands');
  checks.journeyLocked = await journey(`f.climate.attributes.specific_states.is_locked=true;${sync}return !r.querySelector('input')&&[...r.querySelectorAll('button')].every(b=>b.disabled);`);
  assert.ok(checks.journeyLocked);
  checks.journeyMissing = await journey(`f.sensor.state='unavailable';${sync}return !r.querySelector('.eta')&&!r.querySelector('input')&&r.querySelector('.measured').textContent.includes('—')&&document.documentElement.scrollWidth<=innerWidth;`);
  assert.ok(checks.journeyMissing);
  await send('Page.navigate',{url:'http://127.0.0.1:8765/frontend/tests/thermal-browser.html'});
  for(let n=0;n<50;n++){if(await evaluate("!!window.thermalFixture?.panel.shadowRoot.querySelector('smartpi-thermal-journey')?.shadowRoot"))break;await pause(100);}
  checks.twinScene = await journey(`
    const live=f.sensor.attributes.live;
    f.climate.attributes.temperature=19;f.climate.attributes.hvac_action='idle';
    Object.assign(live,{control:{mode:'smartpi',phase:'Stable',in_deadband:false},calibration:{state:'Idle'},
      setpoint:{filtered_setpoint:19,trajectory_active:false,boost_active:false},
      power:{ff_percent:14.2,pi_percent:-6.1,command_percent:8.1,applied_percent:8.1,hold_percent:0}});
    Object.assign(live.analysis.twin,{twin_T_hat:19.34,twin_T_pred:19.35,eta_s:null,eta_reason:'unreachable'});
    ${sync}
    // A fresh diagnostic after the target change releases the waiting state.
    f.sensor.last_updated=new Date(Date.now()+1).toISOString();${sync}
    return !!r.querySelector('.twin-arrow')&&r.textContent.includes('chauffe maximale')&&r.textContent.includes('Chauffe de maintien')&&!r.querySelector('.eta')&&f.calls.length===0;
  `);
  assert.ok(checks.twinScene);
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'light'}]});
  for(const [width,height] of [[1440,1000],[390,844],[320,844]]){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await journey(`j.scrollIntoView({block:'start'});`);await settle();
    assert.ok(await journey(`return document.documentElement.scrollWidth<=innerWidth&&r.querySelector('.twin-signal').getBoundingClientRect().right<=innerWidth;`));
    const shot=await send('Page.captureScreenshot',{format:'png'});
    await writeFile(output+'/twin-'+width+'.png',Buffer.from(shot.data,'base64'));
  }
  checks.twinUnavailable = await journey(`f.sensor.attributes.live.analysis.twin.twin_model_reliable=false;${sync}return !r.querySelector('.twin-arrow')&&!r.querySelector('.eta')&&r.textContent.includes('modèle fiable');`);
  assert.ok(checks.twinUnavailable);

  checks.evidenceViews = await evaluate(`(async()=>{
    const wrap=document.createElement('div');wrap.id='evidence-scene';wrap.style.cssText='padding:20px;max-width:1220px;margin:auto;color:var(--primary-text-color);background:var(--card-background-color)';
    const c=document.createElement('smartpi-room-comparison'),e=document.createElement('smartpi-response-episodes');
    const end=Date.now()/1000;
    const samples=(unit,offset)=>Array.from({length:40},(_,i)=>({time:end-3600+i*90,state:'stable',unit,context:unit,live:{},history:{temperature:{indoor:19+offset+Math.sin(i/5)*.4},setpoint:{filtered_setpoint:20},power:{applied_percent:i===20?null:10+i}}}));
    c.rooms=[{id:'a',name:'Cuisine — démonstration',unit:'°C',samples:samples('°C',0)},{id:'b',name:'Salon — démonstration',unit:'°C',samples:samples('°C',.3)},{id:'c',name:'Pièce en Fahrenheit',unit:'°F',samples:samples('°F',0)}];c.end=end;
    e.points=Array.from({length:30},(_,i)=>({time:end-1800+i*60,temperature:18+i*.1,target:i<20?20:21,outdoor:8,applied:40,mode:'heat',unit:'°C',climate_id:'climate.demo',bound:true,window:'off',safety:false,overpowering:false}));
    wrap.append(c,e);document.body.prepend(wrap);await c.updateComplete;await e.updateComplete;
    c.shadowRoot.querySelector('details').open=true;
    const groups=c.shadowRoot.querySelectorAll('.rooms'),rows=e.shadowRoot.querySelectorAll('li');
    const ok=groups.length===2&&c.shadowRoot.querySelectorAll('svg').length===3&&rows.length===2&&e.shadowRoot.textContent.includes('première observation');
    window.evidenceScene={wrap,c,e};return ok;
  })()`);
  assert.ok(checks.evidenceViews);
  for(const theme of ['light','dark']){
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:theme},{name:'prefers-reduced-motion',value:'reduce'}]});
    for(const [width,height] of [[1440,1000],[390,844],[320,844]]){
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
      const b=await evaluate(`(()=>{const e=evidenceScene.wrap;e.scrollIntoView({block:'start'});const b=e.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};})()`);
      assert.ok(await evaluate('document.documentElement.scrollWidth<=innerWidth'),'Evidence overflow '+width);
      const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...b,scale:1}});
      await writeFile(output+'/evidence-'+theme+'-'+width+'.png',Buffer.from(shot.data,'base64'));
    }
  }
  await evaluate('evidenceScene.wrap.remove();delete window.evidenceScene;');
  checks.forecastScientificScope = await journey(`const o=p.shadowRoot.querySelector('smartpi-observatory');o.tab='forecasts';await o.updateComplete;
    return o.shadowRoot.textContent.includes('aucun score de précision')&&o.shadowRoot.textContent.includes('horizon n’est pas publié');`);
  assert.ok(checks.forecastScientificScope);
  assert.equal(errors.length, 0, JSON.stringify(errors.slice(0, 2).map(error => error.exception?.description ?? error.text)));
  await writeFile(
    output + "/checks.json",
    JSON.stringify(checks, null, 2) + "\n",
  );
  console.log(JSON.stringify(checks, null, 2));
} catch (error) {
  await writeFile(
    output + "/failure.json",
    JSON.stringify({ checks, error: String(error) }, null, 2),
  ).catch(() => {});
  console.log(JSON.stringify(checks, null, 2));
  await send("Runtime.terminateExecution").catch(() => {});
  console.error(error);
  process.exitCode = 1;
} finally {
  await send("Page.close").catch(() => {});
  socket.close();
}
