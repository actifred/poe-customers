# NatCustomerManager

Ce projet a été généré par [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Installation

Après avoir récupéré le projet via la commande `git clone` (voir bouton en haut à droite), les dépendances s'intallent via la commande standard :

`npm install`

## Serveur de développement (live server)

Lancez votre serveur de développement avec la commande `ng serve`. L'interface de votre web app sera servie sur `http://localhost:4200/`. Si les sources sont modifiées, une mise à jour automatique sera faite par le serveur. La web app Angular fera ses appels vers l'API REST exposée sur le port 3000.

## Serveur d'API (backend)

Pour la partie serveur (contenant les données et adressable en REST), installez séparément le [fake JSON server](https://github.com/actifred/poe-fakeserver) en suivant les instructions.
Le serveur d'API doit être lancé afin que l'appli Angular puisse intéragir avec les données des utilisateurs.

## Objectifs du TP

L'objectif de ce TP est de développer une première application permettant la gestion d'utilisateurs à travers un backend.
L'appli devrait implémenter un maximum de fonctionnalités parmi les suivantes:
* Un écran de bienvenue
* Un menu latéral
* Une liste d'utilisateurs pourvue d'un bouton de suppression et d'un lien vers une vue détaillée
* Une vue détaillée des utilisateurs (l'usage de pipes réutilisable peut aider)
* Un formulaire d'ajout
* Un formulaire de modification
* Un service de gestion des utilisateurs encapsulant les appels HTTP. Les appels peuvent être effectués en direct sur le backend ou bien mis en cache (niveau plus complexe car il nécessite de produire des Observables)

La bibliothèque de composants [PrimeNG](https://www.primefaces.org/primeng/) étant déjà intégrée aux dépendances du projet, vous êtes encouragés à l'utiliser pour tout élément qui vous paraîtrait pertinent.

Vous êtes encouragé à créer votre propre branche depuis le projet de départ pour me permettre de vous aider lorsque vous rencontrez un problème.

## Génération de code de départ (scaffolding)

Pour créer des composants, utilisez la commande ng avec la syntaxe suivante: `ng generate component component-name`. Il est possible de créer d'autres éléments comme par exemple `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Pour générer un build déployable, lancez la commande `ng build`. Le projet généré se trouvera dans le répertoire `dist/`. Utilisez le flag `--prod` pour une version de prod.

## Tests unitaires

Lancez `ng test` pour les tests unitaires via [Karma](https://karma-runner.github.io).

## Tests end-to-end

Lancez `ng e2e` pour les tests e2e via [Protractor](http://www.protractortest.org/).

