import test from 'node:test';
import assert from 'node:assert/strict';
import {SmartPIExplanations, publishedCode} from '../.build-tests/utils/smartpi-explanations.mjs';

test('unknown and partial diagnostics remain neutral; zeros stay valid',()=>{
 const model=new SmartPIExplanations({temperature:{integral_hold_source:'future_code'},analysis:{learning:{ff_warmup_ok_count:0,ff_warmup_cycles:0}}});
 assert.equal(publishedCode('future_code'),'Code publié · future_code');
 assert.equal(publishedCode(null),'Indisponible');
 assert.match(model.maintenance.find(r=>r.key==='hold-source').value,/future_code/);
 assert.equal(model.learning.find(r=>r.key==='warmup-count').value,'0');
 assert.equal(model.learning.find(r=>r.key==='warmup-cycles').value,'0');
 assert.equal(model.transaction,null);
});
test('transaction uses only its own timestamp and finite published ratios in command points',()=>{
 const transaction={timestamp_utc:'2026-11-15T10:00:00+00:00',state:'applied',reason:'future_reason',quality:'future_quality',requested_trim_delta:0.03,stored_trim_delta:0.02,transferable_i_power:0,requested_i_transfer:0.01,applied_i_transfer:0,applied_trim_delta:0.0123,net_command_delta:-0.001};
 const model=new SmartPIExplanations({feedforward:{fftrim:{last_transaction:transaction}}},true,Date.parse('2026-11-15T12:00:00Z'));
 assert.equal(model.transaction.date,transaction.timestamp_utc);
 assert.equal(model.transaction.rows.find(r=>r.key==='i-transfer').value,'0 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='trim-delta').value,'1,23 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='net-delta').value,'−0,1 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='requested-trim').value,'3 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='stored-trim').value,'2 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='transferable-i').value,'0 points de commande');
 assert.equal(model.transaction.rows.find(r=>r.key==='requested-i').value,'1 points de commande');
 assert.match(model.transaction.rows.find(r=>r.key==='transaction-reason').value,/future_reason/);
 for(const date of [null,1000,'2026-11-15T10:00:00','tomorrow','2026-02-30T10:00:00Z'])assert.equal(new SmartPIExplanations({feedforward:{fftrim:{last_transaction:{timestamp_utc:date}}}}).transaction.date,null);
 assert.equal(new SmartPIExplanations({feedforward:{fftrim:{last_transaction:transaction}}},true,Date.parse('2026-11-15T09:58:59Z')).transaction.date,null);
 for(const value of [null,undefined,NaN,Infinity,1e308,'0',true]){
  const t=new SmartPIExplanations({feedforward:{fftrim:{last_transaction:{net_command_delta:value}}}}).transaction;
  assert.equal(t.rows.find(r=>r.key==='net-delta').value,'Indisponible');
 }
});
test('unavailable diagnostics never expose retained live explanations or transactions',()=>{
 const model=new SmartPIExplanations({temperature:{integral_hold_source:'old-secret-reason'},feedforward:{fftrim:{last_transaction:{applied_i_transfer:0.25}}}},false);
 assert.equal(model.transaction,null);
 assert.equal(model.maintenance.find(r=>r.key==='hold-source').value,'Indisponible');
 assert.equal(publishedCode('x'.repeat(1000)).length,315);
});
test('learning translates known reasons without inventing tau or a model from counts',()=>{
 const model=new SmartPIExplanations({learning:{last_reason:'skip: no external temp'},model:{tau_min:999,tau_reliable:false},analysis:{learning:{response_lag:{lag_s:0,estimates:0,episodes:0,episodes_target:7,last_reason:'late crossings insufficient'}}}});
 assert.match(model.learning.find(r=>r.key==='learning-reason').value,/extérieure/);
 assert.ok(!model.learning.find(r=>r.key==='tau').value.includes('999'));
 assert.equal(model.learning.find(r=>r.key==='response-lag').value,'0 s');
 assert.match(model.learning.find(r=>r.key==='lag-reason').value,/changements de niveau/i);
 assert.match(publishedCode('deadband_hysteresis_shell'),/bande morte/);
});
