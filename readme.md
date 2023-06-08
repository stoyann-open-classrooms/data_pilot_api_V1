<!-- PROJECT LOGO -->
<p align="center">
  <img src="./images/JPMB_icon.png" alt="Logo" width="80" height="80">
</p>

<!-- PROJECT TITLE -->
<h1 align="center">Data Pilot API V1</h1>

<!-- PROJECT DESCRIPTION -->
<p align="center">
  Backend API de l'application Data Pilot NC.
</p>

<!-- TABLE OF CONTENTS -->
## Table des matières

- [Table des matières](#table-des-matières)
- [À propos du projet](#à-propos-du-projet)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)

<!-- ABOUT THE PROJECT -->
## À propos du projet

La Data Pilot API V1 est le backend de l'application Data Pilot NC. Cette API permet de gérer les données de l'application et de fournir des fonctionnalités avancées aux utilisateurs.

<!-- PRÉREQUIS -->
## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js
- NPM (Node Package Manager)

<!-- INSTALLATION -->
## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/stoyann-open-classrooms/data_pilot_api_V1.git
   ```

2. Accédez au répertoire du projet : `cd data_pilot_api_v1`
3. Installez les dépendances : `npm install`

## Configuration
1. Créez un fichier `.env` à la racine du projet.
2. Définissez les variables d'environnement suivantes dans le fichier `.env` :
   - `MONGODB_URI` : URL de connexion à votre base de données MongoDB.
   - `NODE_ENV` : developement ou production.
   - `PORT` : Port de l'application



<!-- UTILISATION -->
## Utilisation

Pour lancer l'API en mode de développement, utilisez la commande suivante :

```sh
npm run dev
```

Pour lancer l'API en mode de production, utilisez la commande suivante :

```sh
npm run start
```





Lien vers le projet : https://github.com/stoyann-open-classrooms/data_pilot_api_V1