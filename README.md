# 🚗 RoadTrip Connect

Une plateforme moderne pour organiser et partager des road trips entre passionnés de voiture.

## ✨ Fonctionnalités

- **Page d'accueil** : Présentation du projet et navigation
- **Page des trajets** : Liste des road trips disponibles avec cartes détaillées
- **Système d'authentification** : Connexion et inscription
- **Tableau de bord** : Gestion des trajets personnels
- **Design responsive** : Interface moderne et adaptée à tous les écrans

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn
- **MAMP/XAMPP** installé et configuré
- MySQL accessible sur le port 8889

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd roadtrip-connect-website

# Installer les dépendances frontend
npm install

# Installer les dépendances backend
cd backend
npm install
cd ..
```

### Configuration de la base de données
```bash
# 1. Démarrer MAMP/XAMPP et vérifier que MySQL est accessible

# 2. Initialiser la base de données
cd backend
npm run init-db

# 3. Remplir avec des données de démonstration
npm run seed
```

### Lancement du projet
```bash
# Terminal 1 : Backend
cd backend
npm run dev

# Terminal 2 : Frontend
npm run dev
```

### Test de la connexion
```bash
# Tester la connexion à la base de données
node test-connection.js

# Tester l'API
cd backend
npm run test
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navigation.jsx  # Barre de navigation
│   └── RoadTripCard.jsx # Carte de trajet
├── pages/              # Pages de l'application
│   ├── Home.jsx        # Page d'accueil
│   ├── RoadTrips.jsx   # Liste des trajets
│   ├── Login.jsx       # Page de connexion
│   ├── Register.jsx    # Page d'inscription
│   └── Dashboard.jsx   # Tableau de bord
├── styles/             # Fichiers CSS
│   ├── global.css      # Styles globaux et variables
│   ├── RoadTrips.css   # Styles de la page des trajets
│   ├── Navigation.css  # Styles de la navigation
│   └── ...
└── router/             # Configuration du routage
    └── AppRouter.jsx   # Routes de l'application
```

## 🎨 Technologies utilisées

- **Frontend** : React 19, Vite, Tailwind CSS
- **Routage** : React Router DOM
- **Backend** : Express.js, MySQL
- **Styling** : CSS personnalisé avec variables CSS

## 🗄️ Base de données

### Configuration
- **Système** : MySQL (via MAMP/XAMPP)
- **Port** : 8889 (port par défaut MAMP)
- **Utilisateur** : root
- **Mot de passe** : root
- **Base de données** : road_passionate

### Tables principales
- **users** : Gestion des comptes utilisateurs
- **roadtrips** : Road trips créés par les utilisateurs
- **participants** : Participants aux road trips
- **tags** : Catégorisation des road trips
- **roadtrips_tags** : Liaison entre road trips et tags

### Scripts de gestion
```bash
# Initialiser la base de données
npm run init-db

# Remplir avec des données de démonstration
npm run seed

# Tester la connexion
node test-connection.js
```

## 🛣️ Routes disponibles

- `/` - Page d'accueil
- `/roadtrips` - Liste des trajets
- `/login` - Page de connexion
- `/register` - Page d'inscription
- `/dashboard` - Tableau de bord

## 🎯 Fonctionnalités de la page des trajets

La page des trajets (`/roadtrips`) affiche :

- **Cartes de trajets** avec images et informations détaillées
- **Informations clés** : titre, description, lieux de départ/arrivée
- **Métadonnées** : distance, durée, date, difficulté
- **Voitures participantes** : liste des véhicules du trajet
- **Gestion des participants** : nombre actuel/maximum avec barre de progression
- **Bouton de participation** : pour rejoindre un trajet
- **Tags** : catégorisation des trajets
- **Design responsive** : adapté à tous les écrans

## 🔧 Développement

### Ajouter un nouveau trajet
Les trajets sont actuellement gérés dans le composant `RoadTrips.jsx` avec des données de démonstration. Pour ajouter de vrais trajets, vous devrez :

1. Connecter l'API backend
2. Modifier la fonction `handleJoinTrip` pour appeler votre API
3. Gérer l'état de connexion de l'utilisateur

### Personnalisation des styles
Les styles utilisent des variables CSS définies dans `src/styles/global.css` pour une cohérence visuelle.

## �� Responsive Design

L'application est entièrement responsive avec :
- Grilles adaptatives
- Navigation mobile-friendly
- Cartes qui s'adaptent à la taille d'écran
- Breakpoints pour mobile, tablette et desktop

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

---

**RoadTrip Connect** - Connectez-vous avec d'autres passionnés de voiture ! 🚗✨
