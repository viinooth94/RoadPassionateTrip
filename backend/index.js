const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const userRoutes = require('./routes/users');
const tripRoutes = require('./routes/trips');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Accepte les deux ports
    credentials: true
  }));
  
app.use(express.json());

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);

// Route pour tester l'API des utilisateurs
app.get('/api/test-users', (req, res) => {
    res.json({ 
        message: 'API des utilisateurs accessible',
        endpoints: {
            'GET /api/users': 'Récupérer tous les utilisateurs',
            'GET /api/users/:id': 'Récupérer un utilisateur par ID',
            'POST /api/users/register': 'Créer un nouvel utilisateur',
            'POST /api/users/login': 'Se connecter'
        }
    });
});

// Route de test
app.get('/test', (req, res) => {
    res.json({ message: 'Le serveur fonctionne correctement!' });
});

// Route de test de la base de données
app.get('/db-test', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur de connexion à la base de données' });
            return;
        }
        res.json({ message: 'Connexion à la base de données réussie', results });
    });
});

app.listen(port, () => {
    console.log(`✅ Backend lancé sur le port ${port}`);
});
