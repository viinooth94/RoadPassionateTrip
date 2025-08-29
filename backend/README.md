# 🚗 Backend RoadTrip Connect

API backend pour la plateforme RoadTrip Connect, construite avec Express.js et MySQL.

## 🚀 Installation et configuration

### Prérequis
- Node.js (version 18 ou supérieure)
- MySQL (via MAMP/XAMPP)
- npm ou yarn

### 1. Installation des dépendances
```bash
cd backend
npm install
```

### 2. Configuration de la base de données
Assurez-vous que MAMP/XAMPP est démarré et que MySQL est accessible sur le port 8889.

### 3. Initialisation de la base de données
```bash
npm run init-db
```
Cette commande va :
- Créer la base de données `road_passionate`
- Créer toutes les tables nécessaires
- Insérer des tags de démonstration

### 4. Lancement du serveur
```bash
# Mode développement (avec rechargement automatique)
npm run dev

# Mode production
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

## 📊 Structure de la base de données

### Tables créées :
- **users** : Utilisateurs de la plateforme
- **roadtrips** : Road trips créés par les utilisateurs
- **participants** : Participants aux road trips
- **tags** : Tags pour catégoriser les road trips
- **roadtrips_tags** : Liaison entre road trips et tags

## 🔌 API Endpoints

### Utilisateurs
- `GET /api/users` - Récupérer tous les utilisateurs
- `GET /api/users/:id` - Récupérer un utilisateur par ID
- `POST /api/users/register` - Créer un nouvel utilisateur
- `POST /api/users/login` - Se connecter

### Road Trips
- `GET /api/trips` - Récupérer tous les road trips
- `POST /api/trips` - Créer un nouveau road trip

## 🧪 Tests

Pour tester l'API :
```bash
npm run test
```

Ce script va tester tous les endpoints de l'API.

## 🔧 Configuration

Les paramètres de connexion à la base de données sont dans `config.js` :
- Host : localhost
- Port : 8889 (port MAMP par défaut)
- Utilisateur : root
- Mot de passe : root
- Base de données : road_passionate

## 📝 Exemple d'utilisation

### Créer un utilisateur
```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Se connecter
```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

## 🚨 Sécurité

⚠️ **Important** : Cette version utilise des mots de passe en clair pour la démonstration. En production, utilisez bcrypt pour le hachage des mots de passe.

## 🔄 Développement

Pour le développement, le serveur redémarre automatiquement grâce à nodemon.

## 📞 Support

En cas de problème, vérifiez :
1. Que MAMP/XAMPP est démarré
2. Que MySQL est accessible sur le port 8889
3. Que la base de données est initialisée
4. Les logs du serveur pour les erreurs
