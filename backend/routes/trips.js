const express = require('express');
const router = express.Router();
const db = require('../db');

// Route pour récupérer tous les road trips
router.get('/', (req, res) => {
    db.query('SELECT * FROM roadtrips', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des road trips' });
            return;
        }
        res.json(results);
    });
});

// Route pour créer un nouveau road trip
router.post('/', (req, res) => {
    const { title, description, user_id, start_location, end_location, duration } = req.body;
    db.query(
        'INSERT INTO roadtrips (title, description, user_id, start_location, end_location, duration) VALUES (?, ?, ?, ?, ?, ?)',
        [title, description, user_id, start_location, end_location, duration],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erreur lors de la création du road trip' });
                return;
            }
            res.status(201).json({ id: result.insertId, ...req.body });
        }
    );
});

module.exports = router;
