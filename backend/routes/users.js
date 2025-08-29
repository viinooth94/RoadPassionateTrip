const express = require('express');
const router = express.Router();
const db = require('../db');

// Validation des données d'entrée
const validateUserData = (userData) => {
  const errors = [];
  
  if (!userData.username || userData.username.length < 3) {
    errors.push('Le nom d\'utilisateur doit contenir au moins 3 caractères');
  }
  
  if (!userData.email || !userData.email.includes('@')) {
    errors.push('L\'email doit être valide');
  }
  
  if (!userData.password || userData.password.length < 6) {
    errors.push('Le mot de passe doit contenir au moins 6 caractères');
  }
  
  return errors;
};

// Route pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
    db.query('SELECT id, username, email, created_at FROM users ORDER BY created_at DESC', (err, results) => {
        if (err) {
            console.error('Erreur DB:', err);
            res.status(500).json({ 
                error: 'Erreur lors de la récupération des utilisateurs',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined
            });
            return;
        }
        res.json({
            success: true,
            count: results.length,
            users: results
        });
    });
});

// Route pour récupérer un utilisateur par ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    
    db.query('SELECT id, username, email, created_at FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error('Erreur DB:', err);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
            return;
        }
        
        if (results.length === 0) {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
            return;
        }
        
        res.json({
            success: true,
            user: results[0]
        });
    });
});

// Route pour créer un nouvel utilisateur
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // Validation des données
    const validationErrors = validateUserData({ username, email, password });
    if (validationErrors.length > 0) {
        return res.status(400).json({ 
            error: 'Données invalides',
            details: validationErrors
        });
    }
    
    // Vérifier si l'utilisateur existe déjà
    db.query('SELECT id FROM users WHERE email = ? OR username = ?', [email, username], (err, results) => {
        if (err) {
            console.error('Erreur DB:', err);
            res.status(500).json({ error: 'Erreur lors de la vérification de l\'utilisateur' });
            return;
        }
        
        if (results.length > 0) {
            res.status(409).json({ 
                error: 'Un utilisateur avec cet email ou nom d\'utilisateur existe déjà' 
            });
            return;
        }
        
        // Créer l'utilisateur (pour l'instant sans hachage du mot de passe)
        db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password],
            (err, result) => {
                if (err) {
                    console.error('Erreur DB:', err);
                    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
                    return;
                }
                
                res.status(201).json({ 
                    success: true,
                    message: 'Utilisateur créé avec succès',
                    user: {
                        id: result.insertId,
                        username,
                        email,
                        created_at: new Date()
                    }
                });
            }
        );
    });
});

// Route pour la connexion
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ 
            error: 'Email et mot de passe requis' 
        });
    }
    
    // Vérifier les identifiants
    db.query('SELECT id, username, email, password FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Erreur DB:', err);
            res.status(500).json({ error: 'Erreur lors de la connexion' });
            return;
        }
        
        if (results.length === 0) {
            res.status(401).json({ error: 'Email ou mot de passe incorrect' });
            return;
        }
        
        const user = results[0];
        
        // Pour l'instant, comparaison simple (à améliorer avec bcrypt plus tard)
        if (password !== user.password) {
            res.status(401).json({ error: 'Email ou mot de passe incorrect' });
            return;
        }
        
        // Connexion réussie
        res.json({
            success: true,
            message: 'Connexion réussie',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    });
});

module.exports = router;
