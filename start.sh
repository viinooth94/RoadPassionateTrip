#!/bin/bash

echo "🚗 Démarrage de RoadTrip Connect..."
echo "=================================="

# Vérifier que MAMP est démarré
echo "🔍 Vérification de MAMP..."
if ! lsof -i :8889 > /dev/null 2>&1; then
    echo "❌ MAMP n'est pas démarré ou MySQL n'est pas accessible sur le port 8889"
    echo "💡 Veuillez démarrer MAMP et vérifier que MySQL est actif"
    exit 1
fi

echo "✅ MAMP est démarré et MySQL est accessible"

# Vérifier la connexion à la base de données
echo "🔍 Test de la connexion à la base de données..."
if node test-connection.js; then
    echo "✅ Connexion à la base de données réussie"
else
    echo "❌ Erreur de connexion à la base de données"
    echo "💡 Vérifiez que la base 'roadtrip_connect' existe"
    echo "   Exécutez : cd backend && npm run init-db"
    exit 1
fi

# Démarrer le backend
echo "🚀 Démarrage du backend..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Attendre que le backend soit prêt
echo "⏳ Attente du démarrage du backend..."
sleep 3

# Vérifier que le backend fonctionne
if curl -s http://localhost:3000/api/test-users > /dev/null; then
    echo "✅ Backend démarré avec succès sur http://localhost:3000"
else
    echo "❌ Le backend n'a pas démarré correctement"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Démarrer le frontend
echo "🚀 Démarrage du frontend..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "🎉 RoadTrip Connect est maintenant en cours d'exécution !"
echo ""
echo "📱 Frontend : http://localhost:5173/"
echo "🔌 Backend  : http://localhost:3000/"
echo "🗄️ phpMyAdmin : http://localhost:8888/phpMyAdmin"
echo ""
echo "💡 Pour arrêter l'application, appuyez sur Ctrl+C"
echo ""

# Fonction de nettoyage
cleanup() {
    echo ""
    echo "🛑 Arrêt de RoadTrip Connect..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Application arrêtée"
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT

# Attendre indéfiniment
wait
