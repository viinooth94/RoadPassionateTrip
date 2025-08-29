const mysql = require('mysql2');

console.log('🔍 Test de connexion à la base de données...');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'road_passionate'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion à la base de données:', err.message);
        console.log('\n💡 Vérifiez que :');
        console.log('   - MAMP/XAMPP est démarré');
        console.log('   - MySQL est accessible sur le port 8889');
        console.log('   - La base de données "road_passionate" existe');
        return;
    }
    
    console.log('✅ Connexion à la base de données réussie !');
    
    // Tester une requête simple
    connection.query('SELECT COUNT(*) as userCount FROM users', (err, results) => {
        if (err) {
            console.error('❌ Erreur lors de la requête:', err.message);
        } else {
            console.log(`📊 Nombre d'utilisateurs dans la base : ${results[0].userCount}`);
        }
        
        connection.end();
    });
});
