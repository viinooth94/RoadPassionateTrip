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

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd roadtrip-connect-website

# Installer les dépendances
npm install
```

### Lancement du projet
```bash
# Démarrer le frontend (développement)
npm run dev

# Le projet sera accessible sur http://localhost:5173
```

### Lancement du backend (optionnel)
```bash
# Dans un autre terminal
cd backend
node index.js
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
