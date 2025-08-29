const express = require('express');
const router = express.Router();
const db = require('../db');

// Route pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
    db.query('SELECT id, username, email, created_at FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
            return;
        }
        res.json(results);
    });
});

// Route pour créer un nouvel utilisateur
router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
                return;
            }
            res.status(201).json({ id: result.insertId, username, email });
        }
    );
});

module.exports = router;
