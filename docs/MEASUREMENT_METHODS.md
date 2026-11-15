# Lecture des observations — 0.4

Ces vues décrivent des publications. Elles ne règlent pas le PI et ne constituent
ni une mesure d’énergie ni une validation scientifique de chaque pièce.

## Valeurs et provenance

Le badge distingue source indisponible, champ absent, horodatage non vérifiable,
publication récente et publication de plus de 10 minutes. Une date future de plus
de 60 secondes est refusée. Zéro reste valide. Le panneau recalcule la fraîcheur
visuelle toutes les 30 secondes, sans lecture réseau ni abonnement supplémentaire.
La consigne normale vient du climate lié explicitement ; la filtrée et les
commandes viennent du diagnostic SmartPI. Leurs dates peuvent différer.

Recorder et session restent deux sources distinctes. Les compteurs de qualité
portent sur les publications présentes dans la fenêtre et les champs disponibles
à chaque publication. Ils ne représentent pas une couverture en temps : la
cadence peut être irrégulière et un état stable peut ne pas être republié.

## Relecture historique

La sélection est une publication précise de la source et de la fenêtre actives.
Le curseur de relecture parcourt ces publications, sans interpolation temporelle.
Le schéma historique est nommé et daté, distinct de l’onglet de régulation en
direct. Il utilise seulement les champs `history` et `live` archivés ; il n’a pas
de liaison climate permettant une commande. Une route ou un motif absent reste
inconnu. Aucun drapeau actuel de fiabilité ne valide les valeurs passées.

L’unité n’existe pas dans le contrat historique v2 standard utilisé ici. La
session conserve dorénavant l’unité observée et le contexte de liaison/mode. Sans
unité enregistrée, les valeurs sont libellées « unité source » ; l’unité actuelle
n’est pas appliquée rétrospectivement. Aucune conversion historique n’est devinée.

## Comparaison des pièces

Fenêtre commune : dernière heure de **session**. Pour chaque groupe d’unité
explicitement enregistrée (°C ou °F), les tracés partagent l’axe temporel, l’échelle
symétrique des écarts filtrés et l’échelle de commande 0–100 %. L’écart est
`consigne filtrée − température intérieure` d’une même publication. Les séries
n’ont pas de classement : usage, température extérieure et dynamique des pièces
diffèrent. Aucune commande n’est assimilée à de la chaleur réellement délivrée.

Le premier instantané de session, dont l’heure est celle de l’observation, ne
constitue pas une publication datée pour cette comparaison. Une unité absente,
un état indisponible, une paire manquante/invalide, un changement de contexte ou
une interruption > 10 minutes coupe les segments. Jusqu’à 600 derniers points
par segment sont dessinés ; les tables montrent au plus 60 dernières publications.
Les segments relient des publications, sans affirmer une mesure intermédiaire.

## Bilans par épisode

Source : points prospectifs du carnet local, conservés même panneau fermé,
maximum 1 200 points / 48 h par pièce. L’API admin existante retourne uniquement
une projection fermée de ces points, sans nouvelle action ni service.

Un segment partage liaison climate, mode heat/cool, unité et consigne normale.
Sa consigne doit être confirmée par une publication diagnostique au moins aussi
récente que l’état climate (`bound`). Une publication absente/invalide, un contexte
non confirmé, une fenêtre explicitement ouverte, une sécurité ou un délestage
explicitement actifs exclut le point et sépare les segments. Les changements de
contexte et indisponibilités observés laissent des séparateurs sans température,
y compris si aucune nouvelle mesure n’a été publiée pendant le changement.
L’absence d’un drapeau n’est pas une preuve d’absence de suspension : un avertissement
signale les contextes partiellement non archivés.

Le début est la première observation disponible, pas nécessairement l’instant du
changement. Les anciens points sans confirmation de contexte sont exclus.
La tolérance de lecture choisie (exacte, ±0,2 ou ±0,5 dans l’unité de l’épisode)
n’est ni une bande morte SmartPI ni une norme de confort.

- Première présence dans la tolérance : délai jusqu’à la première **publication**
  telle que `abs(température − consigne) <= tolérance`. Aucun instant de
  franchissement entre publications n’est interpolé ; zéro est possible.
- Dépassement : maximum de `max(0, signe(consigne − mesure initiale) *
  (mesure − consigne))` parmi les publications retenues. Si le départ est
  exactement à la cible, aucun sens de trajet initial n’est défini et le
  dépassement est zéro selon cette définition, sans conclusion sur la régulation.
- Plage mesurée : extrema des mesures retenues ; aucun extrema intermédiaire
  n’est reconstruit.
- Durée encadrée : somme des intervalles entre publications consécutives retenues
  du segment (maximum 10 minutes par intervalle), pas une durée prouvée de confort
  continu. Le nombre de publications est affiché séparément.

Les 20 derniers segments sont présentés avec leur motif de fin. Aucun temps de
stabilisation, gain énergétique ou effet causal d’un réglage n’en est déduit.

## Carnet Twin

L’ETA est figée à son émission, avec cible, unité, température et conditions
publiées déjà conservées par l’observatoire. Le graphique place le meilleur cas
annoncé et la première publication confirmant l’atteinte sur une échelle propre
à chaque épisode. Les épisodes interrompus restent visibles ; ils ne sont pas
des réussites. Le délai observé n’est pas corrigé de la cadence de publication.

L’ETA sous commande maximale et le trajet réel du PI ne sont pas des scénarios
équivalents. Aucun score de précision ne les compare. Les sorties instantanées
`twin_T_hat`/`twin_T_pred` ne permettent pas de constituer rétroactivement une
prévision à horizon fixe. Leur horizon cible n’étant pas publié dans le contrat
utilisé, cette évaluation est explicitement non disponible. Aucun intervalle de
confiance n’est fabriqué à partir d’un drapeau de fiabilité. Une future évaluation
exigerait prévisions figées, horizon/scénario comparables, population éligible et
exclusions définies avant observation des résultats.

## Fondements et limites

Ces choix d’affichage sont des applications de principes, pas une réplication
des études ni une validation utilisateur du panneau :

- Cleveland & McGill (1984), *Graphical Perception*, [DOI](https://doi.org/10.1080/01621459.1984.10478080) : fondement expérimental de la lecture graphique. Les axes communs sont ici un choix de conception à tester.
- Bacher & Madsen (2011), *Identifying suitable models for the heat dynamics of buildings*, [DOI](https://doi.org/10.1016/j.enbuild.2011.02.005) : confronter modèle physique, information disponible et validation statistique ; l’étude ne valide pas SmartPI.
- Gneiting & Raftery (2007), *Strictly Proper Scoring Rules, Prediction, and Estimation*, [DOI](https://doi.org/10.1198/016214506000001437) : évaluation des distributions et intervalles prédictifs. Cela ne justifie pas un intervalle ou un score lorsque les prévisions comparables manquent.

Les contrôles automatisés utilisent des fixtures synthétiques. Ils vérifient
les calculs descriptifs, refus, bornes, séparation des contextes et interactions,
sans certifier précision physique, confort ni accessibilité générale.
