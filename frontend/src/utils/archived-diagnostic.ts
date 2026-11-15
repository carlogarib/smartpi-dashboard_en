import {type SmartPIDiagnostic, at, num, record} from "../adapter";
import {type Sample} from "./timeseries";

/** Only fields from this publication: never inherit today's values or confidence. */
export function archivedDiagnostic(diagnostic: SmartPIDiagnostic, sample: Sample): SmartPIDiagnostic {
  const live = {...sample.live};
  for (const [section, keys] of Object.entries({
    temperature: ["indoor", "integral_error"], setpoint: ["filtered_setpoint"],
    power: ["applied_percent", "command_percent", "pi_percent", "ff_percent"],
    model: ["a", "b"], control: ["kp", "ki"],
  })) {
    const source = live[section];
    live[section] = {...(record(source) ? source : {}), ...Object.fromEntries(keys.map(key => [key, num(at(sample.history, `${section}.${key}`) === undefined ? at(sample.live, `${section}.${key}`) : at(sample.history, `${section}.${key}`))]))};
  }
  return {...diagnostic, state: sample.state, available: !["unknown", "unavailable"].includes(sample.state),
    lastUpdated: new Date(sample.time * 1000).toISOString(), climateId: null, temperatureUnit: sample.unit ?? null,
    live, history: sample.history};
}
