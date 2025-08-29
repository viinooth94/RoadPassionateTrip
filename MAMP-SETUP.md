# 🐘 Configuration MAMP pour RoadTrip Connect

Ce guide vous aidera à configurer MAMP pour que votre application RoadTrip Connect fonctionne correctement.

## 📋 Prérequis

- ✅ MAMP installé sur votre machine
- ✅ Node.js installé (version 18+)
- ✅ npm ou yarn installé

## 🚀 Configuration MAMP

### 1. **Démarrer MAMP**
- Lancez l'application MAMP
- Cliquez sur "Start Servers"
- Attendez que les indicateurs Apache et MySQL deviennent verts

### 2. **Vérifier les ports**
- **Apache** : Port 8888 (ou 80)
- **MySQL** : Port 8889 (ou 3306)
- **URLs** : http://localhost:8888 et http://localhost:8889

### 3. **Accéder à phpMyAdmin**
- Ouvrez votre navigateur
- Allez sur : http://localhost:8888/phpMyAdmin
- Connectez-vous avec :
  - **Utilisateur** : `root`
  - **Mot de passe** : `root`

## 🔧 Configuration de la base de données

### Option 1 : Script automatique (recommandé)
```bash
# Depuis la racine du projet
cd backend
npm run init-db
npm run seed
```

### Option 2 : Manuel via phpMyAdmin
1. **Créer la base de données**
   - Dans phpMyAdmin, cliquez sur "Nouvelle base de données"
   - Nom : `road_passionate`
   - Interclassement : `utf8mb4_unicode_ci`
   - Cliquez sur "Créer"

2. **Importer le schéma**
   - Sélectionnez la base `roadtrip_connect`
   - Cliquez sur "Importer"
   - Choisissez le fichier `backend/database.sql`
   - Cliquez sur "Exécuter"

## 🧪 Test de la connexion

### Test rapide
```bash
# Depuis la racine du projet
node test-connection.js
```

### Test complet de l'API
```bash
cd backend
npm run test
```

## 🔍 Dépannage MAMP

### Problème : Ports déjà utilisés
```bash
# Vérifier les ports utilisés
lsof -i :8888
lsof -i :8889

# Arrêter les processus si nécessaire
kill -9 [PID]
```

### Problème : MySQL ne démarre pas
1. Vérifiez que le port 8889 est libre
2. Redémarrez MAMP
3. Vérifiez les logs MAMP

### Problème : Accès refusé à la base
1. Vérifiez les identifiants (root/root)
2. Vérifiez que MySQL est démarré
3. Vérifiez que le port 8889 est accessible

## 📊 Vérification dans phpMyAdmin

Après l'initialisation, vous devriez voir :

### Tables créées
- ✅ `users` - Utilisateurs de la plateforme
- ✅ `roadtrips` - Road trips disponibles
- ✅ `participants` - Participants aux road trips
- ✅ `tags` - Tags de catégorisation
- ✅ `roadtrips_tags` - Liaison road trips/tags

### Données de démonstration
- ✅ 3 utilisateurs de test
- ✅ 3 road trips de démonstration
- ✅ Participants de test
- ✅ Tags prédéfinis

## 🌐 URLs d'accès

- **Frontend** : http://localhost:5173/
- **Backend API** : http://localhost:3000/
- **phpMyAdmin** : http://localhost:8888/phpMyAdmin
- **Test API** : http://localhost:3000/api/test-users

## 🔄 Redémarrage complet

Si vous rencontrez des problèmes :
```bash
# 1. Arrêter MAMP
# 2. Arrêter tous les processus Node.js
pkill -f node

# 3. Redémarrer MAMP
# 4. Attendre que les services soient verts
# 5. Relancer l'application
cd backend && npm run dev
# Dans un autre terminal
npm run dev
```

## 📱 Test de l'interface

1. **Page d'accueil** : http://localhost:5173/
2. **Navigation** : Vérifiez que la barre de navigation s'affiche
3. **Page des trajets** : http://localhost:5173/roadtrips
4. **Inscription** : Testez la création d'un compte
5. **Connexion** : Testez la connexion avec le compte créé

## 🎯 Prochaines étapes

Une fois MAMP configuré :
- [ ] Connecter le frontend au backend
- [ ] Tester l'inscription d'utilisateurs
- [ ] Vérifier que les données s'affichent dans phpMyAdmin
- [ ] Implémenter l'authentification JWT
- [ ] Ajouter la gestion des sessions

---

**🎉 Votre environnement MAMP est maintenant configuré pour RoadTrip Connect !**
