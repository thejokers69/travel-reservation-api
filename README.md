# Travel Reservation API

Une API REST développée avec Node.js et Express.js pour gérer une plateforme de réservation de voyages. Cette API utilise MongoDB comme base de données et permet de gérer les destinations, les voyageurs, et les réservations.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Endpoints de l’API](#endpoints-de-lapi)
  - [Destinations](#destinations)
  - [Voyageurs](#voyageurs)
  - [Réservations](#réservations)
- [Tests](#tests)
  - [Exemple de test avec Postman](#exemple-de-test-avec-postman)
- [Contributions](#contributions)
- [Licence](#licence)

## Fonctionnalités

- **CRUD pour les destinations** : Ajouter, consulter, modifier et supprimer des destinations.
- **CRUD pour les voyageurs** : Ajouter, consulter, modifier et supprimer des voyageurs.
- **CRUD pour les réservations** : Créer des réservations avec calcul automatique du prix total en fonction du nombre de nuits et du prix par nuit de la destination.
- **Stockage de données** : Utilisation de MongoDB pour la base de données, avec Mongoose pour la gestion des modèles et des relations.

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB Atlas pour la base de données en ligne, ou une instance locale de MongoDB.
- Git pour le contrôle de version.

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/travel-reservation-api.git
   cd travel-reservation-api
   ```

2. **Installer les dépendances**

	```bash
	npm install
	```

## Configuration

 1. **Créer un fichier .env à la racine du projet et y ajouter les variables suivantes :**

MONGODB_URI=mongodb+srv://<username>:<password>@clusterXXXX.mongodb.net/travel_reservation_db?retryWrites=true&w=majority

Remplacez <username>, <password>, et clusterXXXX par vos informations de connexion MongoDB Atlas. Assurez-vous que travel_reservation_db est le nom de votre base de données.

 2. **Configurer la connexion MongoDB : Le fichier index.js utilise Mongoose pour se connecter à MongoDB via l’URI définie dans le fichier .env.**

## Utilisation

 1. **Lancer le serveur**:

	```bash
	npm start
	```

Par défaut, le serveur sera accessible sur <http://localhost:3000>.

 2. **Lancer en mode développement (avec nodemon pour un rechargement automatique)** :

	```bash
	npm run dev
	```

## Endpoints de l’API

### Destinations

- **GET /api/destinations** : Obtenir toutes les destinations.

**Exemple de réponse** : 
```json
[
  {
    "id": "1",
    "nom": "Paris",
    "pays": "France",
    "prixParNuit": 150,
    "description": "Ville des lumières"
  }
]
```

- GET /api/destinations/:id : Obtenir une destination par ID.
- POST /api/destinations : Créer une nouvelle destination.

**Corps de la requête** :

```json
{
  "nom": "Tokyo",
  "pays": "Japon",
  "prixParNuit": 200,
  "description": "Ville moderne avec des traditions profondes"
}
```

- PUT /api/destinations/:id : Mettre à jour une destination.
- DELETE /api/destinations/:id : Supprimer une destination.

### Voyageurs

- GET /api/voyageurs : Obtenir tous les voyageurs.
- GET /api/voyageurs/:id : Obtenir un voyageur par ID.
- POST /api/voyageurs : Créer un nouveau voyageur.
**Corps de la requête** :
```json
{
  "nom": "Alice Dupont",
  "email": "<alice@example.com>"
}
````

- PUT /api/voyageurs/:id : Mettre à jour un voyageur.
- DELETE /api/voyageurs/:id : Supprimer un voyageur.

### Réservations

- GET /api/reservations : Obtenir toutes les réservations.
- GET /api/reservations/:id : Obtenir une réservation par ID.
- POST /api/reservations : Créer une nouvelle réservation.

**Corps de la requête** :

```json
{
  "voyageurId": "1",
  "destinationId": "1",
  "nombreDeNuits": 3
}
```

**Exemple de réponse** :

```json
{
  "reservationId": "12345",
  "voyageurId": "1",
  "destinationId": "1",
  "prixTotal": 450
}
```

- DELETE /api/reservations/:id : Supprimer une réservation.

## Tests

### Exemple de test avec Postman

Pour tester l’API, vous pouvez utiliser des outils comme Postman ou Insomnia pour envoyer des requêtes HTTP aux différents endpoints.

- Exemple : Test de création de destination
- URL : <http://localhost:3000/api/destinations>
- Méthode : POST
- Corps de la requête :

```json
{
  "nom": "Paris",
  "pays": "France",
  "prixParNuit": 150,
  "description": "Ville des lumières"
}
```

## Contributions

Les contributions sont les bienvenues ! Pour contribuer :

 1. Forkez le projet.
 2. Créez une branche pour votre fonctionnalité (git checkout -b ma-fonctionnalite).
 3. Commitez vos changements (git commit -m 'Ajout d'une fonctionnalité').
 4. Poussez la branche (git push origin ma-fonctionnalite).
 5. Ouvrez une Pull Request.

