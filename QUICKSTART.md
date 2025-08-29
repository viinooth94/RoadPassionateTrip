# 🚀 Guide de démarrage rapide - RoadTrip Connect

Ce guide vous permettra de configurer et tester votre plateforme RoadTrip Connect en quelques minutes !

## 📋 Prérequis

- ✅ Node.js installé (version 18+)
- ✅ MAMP/XAMPP installé et démarré
- ✅ MySQL accessible sur le port 8889

## 🚀 Configuration en 5 étapes

### 1. **Démarrer MAMP/XAMPP**
- Lancez MAMP/XAMPP
- Démarrez les services Apache et MySQL
- Vérifiez que MySQL est accessible sur le port 8889

### 2. **Initialiser la base de données**
```bash
cd backend
npm run init-db
```
✅ Vous devriez voir : "Base de données 'road_passionate' initialisée avec succès !"

### 3. **Remplir avec des données de démonstration**
```bash
npm run seed
```
✅ Vous devriez voir : "Base de données remplie avec succès !"

### 4. **Lancer le backend**
```bash
npm run dev
```
✅ Vous devriez voir : "✅ Backend lancé sur le port 3000"

### 5. **Lancer le frontend** (dans un autre terminal)
```bash
# Depuis la racine du projet
npm run dev
```
✅ Vous devriez voir : "Local: http://localhost:5173/"

## 🧪 Tester l'API

### Test automatique
```bash
cd backend
npm run test
```

### Test manuel avec curl
```bash
# Créer un utilisateur
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'

# Se connecter
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 🌐 Accès à l'application

- **Frontend** : http://localhost:5173/
- **Backend API** : http://localhost:3000/
- **Test API** : http://localhost:3000/api/test-users

## 📊 Vérifier dans phpMyAdmin

1. Ouvrez phpMyAdmin (généralement http://localhost/phpmyadmin)
2. Connectez-vous avec `root` / `root`
3. Sélectionnez la base `roadtrip_connect`
4. Vérifiez les tables :
   - `users` - Utilisateurs créés
   - `roadtrips` - Road trips de démonstration
   - `participants` - Participants aux road trips
   - `tags` - Tags de catégorisation

## 🔍 Dépannage

### Erreur de connexion à la base de données
- ✅ MAMP/XAMPP est-il démarré ?
- ✅ MySQL est-il accessible sur le port 8889 ?
- ✅ Les identifiants sont-ils corrects (root/root) ?

### Erreur "Cannot find module"
```bash
cd backend
npm install
```

### Port déjà utilisé
- Changez le port dans `backend/config.js`
- Ou arrêtez le processus qui utilise le port

## 📱 Test de l'interface

1. **Page d'accueil** : http://localhost:5173/
2. **Page des trajets** : http://localhost:5173/roadtrips
3. **Inscription** : http://localhost:5173/register
4. **Connexion** : http://localhost:5173/login

## 🎯 Prochaines étapes

- [ ] Connecter le frontend au backend
- [ ] Implémenter l'authentification JWT
- [ ] Ajouter la gestion des sessions
- [ ] Créer un vrai système de hachage des mots de passe
- [ ] Ajouter la validation côté client

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs du serveur backend
2. Vérifiez la console du navigateur
3. Vérifiez que tous les services sont démarrés
4. Consultez le README du backend pour plus de détails

---

**🎉 Félicitations ! Votre plateforme RoadTrip Connect est maintenant opérationnelle !**
