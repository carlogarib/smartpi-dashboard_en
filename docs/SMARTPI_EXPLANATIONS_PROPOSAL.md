# Explications SmartPI — proposition mise en œuvre localement

Les trois ajouts proposés après l’audit du 15 novembre 2026 sont réalisés à la
demande de l’utilisateur. Ils restent locaux, distincts d’une publication ou
d’une installation Home Assistant.

## Pourquoi ce maintien ?

Un détail sous le trajet thermique rassemble l’origine et le mode du maintien
de l’intégrale, sa protection et les motifs FF2 publiés. Les codes connus ont
une explication française ; les codes futurs restent visibles, sans cause inventée.
Le motif `pi_deadband_shell_hold` décrit l’admissibilité du PI à l’observation FF
à la bordure de bande morte ; il ne prouve pas qu’un transfert a été appliqué.

La dernière transaction FF2 est présentée séparément, avec sa propre date,
sa qualité, son motif et ses montants demandés, mémorisés, transférables et
appliqués. Les ratios sont convertis en points de commande ×100 ; les zéros
restent valides et les champs absents restent indisponibles.

La variation nette publiée est affichée telle quelle. Ni la présence d’une
transaction ni sa qualité ne permettent de conclure automatiquement à une
commande inchangée. Un transfert conservé peut être plus ancien que la
publication actuelle. Date invalide ou future non vérifiable signalée, sans
emprunter l’heure de la publication SmartPI.

## Gains et mémoire du PI

Dans Supervision, le détail « Gains et mémoire du PI » propose trois graphiques
séparés pour `history.control.kp`, `history.control.ki` et
`history.temperature.integral_error`. Ils partagent la période et la source
sélectionnées, sans requête supplémentaire. Ils ne sont créés qu’à l’ouverture
du détail et sont nettoyés à sa fermeture.

Les unités internes restent celles du diagnostic, sans conversion implicite.
L’état intégral représente une mémoire interne, pas sa contribution isolée ni
un pourcentage de chauffe. Les valeurs ne sont jamais complétées à partir du
régulateur actuel. Lacunes, zéros et changements de contexte restent visibles.

## Comprendre l’apprentissage

Dans les détails d’apprentissage, un bloc rapproche le dernier motif publié,
la mise en régime de l’anticipation, les estimations et épisodes du délai de
réponse ainsi que leur seuil publié. Les motifs connus sont expliqués sans
promettre de date de fin ; un code inconnu reste affiché comme code publié.

La constante de temps n’est présentée que lorsque `tau_reliable` est explicitement
vrai. Les compteurs ne deviennent pas des scores de fiabilité. Les sources
indisponibles masquent les anciennes valeurs ; les badges de fraîcheur suivent
le minuteur de présentation existant.

## Portée et validation

Ces affichages décrivent les signaux SmartPI, sans recalculer le PI, modifier ses
coefficients, commander un thermostat ou mesurer l’énergie. Les détails restent
repliables, utilisables au clavier et vérifiés sur fixtures desktop/mobile,
clair/sombre, données partielles, anciennes et indisponibles.

Pour toute future mesure de performance, définir séparément référence,
couverture et exclusions. Ces explications ne constituent pas une validation
scientifique d’une pièce ni une étude d’utilisabilité.

Sources vérifiées :

- [SmartPI 0.6.5](https://github.com/KipK/vtherm_smartpi/releases/tag/0.6.5).
- [Diagnostic publié, SHA 43cd4f0](https://github.com/KipK/vtherm_smartpi/blob/43cd4f05f03da65fb4d1d4a4adecbd9d100d5bec/custom_components/vtherm_smartpi/smartpi/diagnostics.py).
- [Contrat Recorder, même SHA](https://github.com/KipK/vtherm_smartpi/blob/43cd4f05f03da65fb4d1d4a4adecbd9d100d5bec/custom_components/vtherm_smartpi/smartpi/diagnostic_history.py).
