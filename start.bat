@echo off
chcp 65001 >nul
echo 🚗 Démarrage de RoadTrip Connect...
echo ==================================

REM Vérifier que MAMP est démarré
echo 🔍 Vérification de MAMP...
netstat -an | findstr ":8889" >nul
if %errorlevel% neq 0 (
    echo ❌ MAMP n'est pas démarré ou MySQL n'est pas accessible sur le port 8889
    echo 💡 Veuillez démarrer MAMP et vérifier que MySQL est actif
    pause
    exit /b 1
)

echo ✅ MAMP est démarré et MySQL est accessible

REM Vérifier la connexion à la base de données
echo 🔍 Test de la connexion à la base de données...
node test-connection.js
if %errorlevel% neq 0 (
    echo ❌ Erreur de connexion à la base de données
    echo 💡 Vérifiez que la base 'roadtrip_connect' existe
    echo    Exécutez : cd backend ^&^& npm run init-db
    pause
    exit /b 1
)

echo ✅ Connexion à la base de données réussie

REM Démarrer le backend
echo 🚀 Démarrage du backend...
cd backend
start "Backend RoadTrip Connect" cmd /k "npm run dev"
cd ..

REM Attendre que le backend soit prêt
echo ⏳ Attente du démarrage du backend...
timeout /t 5 /nobreak >nul

REM Démarrer le frontend
echo 🚀 Démarrage du frontend...
start "Frontend RoadTrip Connect" cmd /k "npm run dev"

echo.
echo 🎉 RoadTrip Connect est maintenant en cours d'exécution !
echo.
echo 📱 Frontend : http://localhost:5173/
echo 🔌 Backend  : http://localhost:3000/
echo 🗄️ phpMyAdmin : http://localhost:8888/phpMyAdmin
echo.
echo 💡 Les fenêtres de terminal restent ouvertes pour surveiller les logs
echo    Fermez-les manuellement pour arrêter l'application
echo.
pause
