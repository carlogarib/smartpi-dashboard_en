import {at, num, record, type Rec} from "../adapter";

export interface ExplanationRow {key: string; label: string; value: string}
const codes: Record<string, string> = {
  none: "Aucun motif indiqué", init: "Initialisation", reset: "Réinitialisation",
  deadband_hysteresis_shell: "Intégrale conservée dans la couronne d’hystérésis de la bande morte",
  pi_deadband_shell_hold: "PI admissible pour l’observation FF dans la bordure de bande morte",
  setpoint_change: "Protection après changement de consigne", off_resume: "Protection après reprise depuis l’arrêt",
  window_resume: "Protection après fermeture de fenêtre", power_shedding_resume: "Protection après délestage",
  disturbance_recovery: "Protection pendant la récupération d’une perturbation",
  warming_up: "Initialisation de l’observation", collecting: "Collecte en cours", waiting_deadtime: "Attente d’un temps mort exploitable",
  ready: "Fenêtre admissible", rejected: "Observation refusée", observer_rejected: "Observation refusée",
  stationary: "Observation stationnaire", periodic: "Observation périodique",
  applied: "Transfert appliqué", awaiting_cycle_boundary: "Attente d’une frontière de cycle",
  awaiting_post_aw_boundary: "Attente de la frontière après anti-windup", updated_bumpless: "Mise à jour avec transfert de l’intégrale",
  causal_update_without_transfer: "Correction FF sans transfert de l’intégrale", skipped: "Mise à jour non appliquée",
  deadtime_unreliable: "Temps mort non fiable", causal_power_not_covered: "Commande causale insuffisamment couverte",
  washout: "Attente après interruption de l’observation", not_enough_measurements: "Mesures distinctes insuffisantes",
  window_too_short: "Fenêtre d’observation trop courte", incomplete_observer_result: "Résultat d’observation incomplet",
  "skip: no external temp": "Observation non retenue : température extérieure absente",
  "skip: ff3_active": "Observation non retenue : FF3 actif",
  "skip: bootstrap - active deadtime not yet learned": "Observation non retenue : temps mort actif encore inconnu",
  "skip: bootstrap - passive deadtime not yet learned": "Observation non retenue : temps mort passif encore inconnu",
  "skip: resume cool-down": "Observation non retenue : attente après reprise",
  "skip: deadtime window": "Observation non retenue : fenêtre de temps mort actif",
  "skip: deadtime window (cool)": "Observation non retenue : fenêtre de temps mort passif",
  "skip: setpoint transient": "Observation non retenue : transition de consigne",
  "skip: delta too small": "Observation non retenue : variation thermique trop faible",
  "skip: slope outlier": "Observation non retenue : pente atypique",
  "skip: low excitation (u mid)": "Observation non retenue : excitation insuffisante",
  "power not constant": "Commande non constante", "passive baseline not settled": "Référence passive non stabilisée",
  "no outdoor temperature": "Température extérieure absente", "late crossings insufficient": "Changements de niveau tardifs insuffisants",
  "no baseline crossing": "Aucun changement de niveau dans la référence", "passive slope unknown": "Pente passive inconnue",
  "no active response": "Aucune réponse active exploitable", "intercept not resolvable": "Délai non identifiable",
  estimated: "Estimation obtenue", "episode interrupted by restart": "Épisode interrompu par un redémarrage",
};

/** Only exact, source-verified codes are interpreted. Future codes stay visible. */
export function publishedCode(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "Indisponible";
  return Object.hasOwn(codes, value) ? `${codes[value]} (${value})` : `Code publié · ${value.length > 300 ? value.slice(0, 300) + "…" : value}`;
}
const format = new Intl.NumberFormat("fr-FR", {maximumFractionDigits: 6});
const numeric = (value: unknown, unit = "") => {const n = num(value); return n === null ? "Indisponible" : `${format.format(n).replace("-", "−")}${unit}`;};
const commandPoints = (value: unknown) => {const n = num(value); return n === null || !Number.isFinite(n * 100) ? "Indisponible" : numeric(n * 100, " points de commande");};
function transactionDate(value: unknown, now: number): string | null {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) || !Number.isFinite(Date.parse(value)) || !Number.isFinite(now) || Date.parse(value) > now + 60_000) return null;
  const year = Number(value.slice(0, 4)), month = Number(value.slice(5, 7)), day = Number(value.slice(8, 10));
  const days = [31, year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month < 1 || month > 12 || day < 1 || day > days[month - 1] || Number(value.slice(11, 13)) > 23) return null;
  return value;
}

/** Descriptive publication view: no integral contribution or controller decision is inferred. */
export class SmartPIExplanations {
  readonly maintenance: ExplanationRow[];
  readonly learning: ExplanationRow[];
  readonly transaction: {date: string | null; rows: ExplanationRow[]} | null;
  constructor(live: Rec, available = true, now = Date.now()) {
    if (!available) live = {};
    const code = (key: string, label: string, path: string): ExplanationRow => ({key, label, value: publishedCode(at(live, path))});
    const number = (key: string, label: string, path: string, unit = ""): ExplanationRow => ({key, label, value: numeric(at(live, path), unit)});
    this.maintenance = [
      code("hold-source", "Origine du maintien de l’intégrale", "temperature.integral_hold_source"),
      code("hold-mode", "Mode de maintien de l’intégrale", "temperature.integral_hold_mode"),
      code("guard-source", "Origine de la protection de l’intégrale", "temperature.integral_guard_source"),
      ...(record(at(live, "feedforward.fftrim")) ? [
      code("observation-mode", "Observation FF2", "feedforward.fftrim.observation_mode"),
      code("stationary-state", "Fenêtre stationnaire", "feedforward.fftrim.stationary.state"),
      code("periodic-state", "Fenêtre périodique", "feedforward.fftrim.periodic.state"),
      code("trim-reject", "Dernier motif d’observation FF2", "feedforward.fftrim.last_reject_reason"),
      code("trim-update", "Dernière issue FF2", "feedforward.fftrim.last_update_reason"),
      code("transfer-state", "Transfert courant", "feedforward.fftrim.transfer.state"),
      code("transfer-reason", "Motif du transfert courant", "feedforward.fftrim.transfer.reason"),
      ] : []),
    ];
    const transaction = at(live, "feedforward.fftrim.last_transaction");
    this.transaction = record(transaction) ? {date: transactionDate(transaction.timestamp_utc, now), rows: [
      {key: "transaction-mode", label: "Observation", value: publishedCode(transaction.observation_mode)},
      {key: "transaction-state", label: "État publié", value: publishedCode(transaction.state)},
      {key: "transaction-reason", label: "Motif publié", value: publishedCode(transaction.reason)},
      {key: "transaction-quality", label: "Qualité publiée", value: publishedCode(transaction.quality)},
      {key: "requested-trim", label: "Variation FF2 demandée", value: commandPoints(transaction.requested_trim_delta)},
      {key: "stored-trim", label: "Variation FF2 mémorisée", value: commandPoints(transaction.stored_trim_delta)},
      {key: "transferable-i", label: "Part d’intégrale transférable publiée", value: commandPoints(transaction.transferable_i_power)},
      {key: "requested-i", label: "Transfert de l’intégrale demandé", value: commandPoints(transaction.requested_i_transfer)},
      {key: "i-transfer", label: "Transfert de l’intégrale appliqué", value: commandPoints(transaction.applied_i_transfer)},
      {key: "trim-delta", label: "Variation FF2 appliquée", value: commandPoints(transaction.applied_trim_delta)},
      {key: "net-delta", label: "Variation nette de commande publiée", value: commandPoints(transaction.net_command_delta)},
    ]} : null;
    this.learning = [
      code("learning-reason", "Dernier motif d’apprentissage", "learning.last_reason"),
      number("warmup-count", "Mise en régime de l’anticipation · compteur accepté", "analysis.learning.ff_warmup_ok_count"),
      number("warmup-cycles", "Mise en régime de l’anticipation · cycles publiés", "analysis.learning.ff_warmup_cycles"),
      number("response-lag", "Délai de réponse publié", "analysis.learning.response_lag.lag_s", " s"),
      number("lag-estimates", "Estimations du délai", "analysis.learning.response_lag.estimates"),
      number("lag-episodes", "Épisodes observés pour le délai", "analysis.learning.response_lag.episodes"),
      number("lag-target", "Seuil d’épisodes publié", "analysis.learning.response_lag.episodes_target"),
      code("lag-reason", "Motif du délai de réponse", "analysis.learning.response_lag.last_reason"),
      {key: "tau", label: "Constante de temps τ", value: at(live, "model.tau_reliable") === true ? numeric(at(live, "model.tau_min"), " min") : "Non interprétable · fiabilité non établie"},
    ];
  }
}
