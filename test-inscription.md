# 🧪 Test de l'inscription connectée au backend

## ✅ Ce qui a été implémenté

### 1. **Service API** (`src/services/api.js`)
- Fonctions pour l'inscription et la connexion
- Gestion des erreurs et des réponses
- Appels vers `http://localhost:3000/api`

### 2. **Page d'inscription mise à jour**
- Appel réel à l'API d'inscription
- Validation des données côté client
- Messages d'erreur et de succès
- État de chargement
- Redirection automatique après inscription

### 3. **Page de connexion mise à jour**
- Appel réel à l'API de connexion
- Gestion des erreurs
- État de chargement

### 4. **Composant de notification**
- Affichage élégant des messages
- Animations d'entrée/sortie
- Auto-fermeture après 5 secondes

## 🚀 Comment tester

### 1. **Vérifier que le backend fonctionne**
```bash
# Dans un terminal
cd backend
npm run dev
```
✅ Vous devriez voir : "✅ Backend lancé sur le port 3000"

### 2. **Tester l'API directement**
```bash
# Dans un autre terminal
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```
✅ Vous devriez recevoir une réponse de succès

### 3. **Tester l'inscription via l'interface**
- Allez sur http://localhost:5174/register
- Remplissez le formulaire avec :
  - Username : `testuser2`
  - Email : `test2@example.com`
  - Password : `password123`
  - Confirm Password : `password123`
- Cliquez sur "S'inscrire"

### 4. **Vérifier dans phpMyAdmin**
- Ouvrez http://localhost:8888/phpMyAdmin
- Connectez-vous avec `root` / `root`
- Sélectionnez la base `road_passionate`
- Vérifiez la table `users`
- Vous devriez voir votre nouvel utilisateur !

## 🎯 Ce qui devrait se passer

### ✅ **Inscription réussie**
1. **Bouton** : Devient "Inscription en cours..." et se désactive
2. **Message de succès** : "Inscription réussie ! Vous allez être redirigé..."
3. **Redirection** : Après 2 secondes, vers la page de connexion
4. **Base de données** : Nouvel utilisateur ajouté dans la table `users`

### ❌ **Gestion des erreurs**
- **Mots de passe différents** : Message d'erreur affiché
- **Username trop court** : Validation côté client
- **Email invalide** : Validation côté client
- **Erreur serveur** : Message d'erreur de l'API

## 🔧 Dépannage

### Problème : "Erreur API: fetch failed"
- ✅ Vérifiez que le backend est lancé sur le port 3000
- ✅ Vérifiez que MAMP est démarré
- ✅ Vérifiez la console du navigateur

### Problème : "Cannot find module"
- ✅ Vérifiez que le fichier `src/services/api.js` existe
- ✅ Vérifiez les imports dans les pages

### Problème : L'utilisateur n'apparaît pas dans la base
- ✅ Vérifiez que la base `road_passionate` est sélectionnée
- ✅ Vérifiez que la table `users` existe
- ✅ Vérifiez les logs du backend

## 📊 Vérification dans la base de données

Après une inscription réussie, vous devriez voir dans phpMyAdmin :

```sql
-- Table users
id | username    | email              | password     | created_at
1  | john_doe    | john@example.com   | password123  | 2024-01-15 10:30:00
2  | jane_smith  | jane@example.com   | password123  | 2024-01-15 10:31:00
3  | mike_wilson | mike@example.com   | password123  | 2024-01-15 10:32:00
4  | testuser2   | test2@example.com  | password123  | 2024-01-15 10:35:00  ← Votre nouvel utilisateur !
```

## 🎉 Résultat attendu

Après avoir testé l'inscription :
- ✅ **Formulaire fonctionnel** avec validation
- ✅ **Appel API** vers le backend
- ✅ **Utilisateur créé** dans la base de données
- ✅ **Messages d'interface** clairs et informatifs
- ✅ **Redirection automatique** vers la connexion

**🚗 Votre système d'inscription est maintenant entièrement fonctionnel et connecté à la base de données !**
