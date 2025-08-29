const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',  // Mot de passe par défaut de MAMP
    port: 8889,        // Port par défaut de MAMP pour MySQL
    database: 'roadtrip_connect'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
