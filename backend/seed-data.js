const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.database
});

console.log('🌱 Insertion des données de démonstration...');

// Données de démonstration
const demoUsers = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123'
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password123'
    },
    {
        username: 'mike_wilson',
        email: 'mike@example.com',
        password: 'password123'
    }
];

const demoRoadTrips = [
    {
        title: "Route des Alpes Françaises",
        description: "Découvrez les plus beaux cols alpins en passant par la Route des Grandes Alpes. Parfait pour les amateurs de virages et de paysages montagneux.",
        start_location: "Nice",
        end_location: "Chamonix",
        distance: "684 km",
        duration: "3 jours",
        date: "15-18 Juin 2024",
        participants: 8,
        max_participants: 12,
        difficulty: "Intermédiaire",
        price: "450€",
        image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
    },
    {
        title: "Côte d'Azur - Provence",
        description: "Balade côtière le long de la Méditerranée avec arrêts dans les villages provençaux et dégustation de vins locaux.",
        start_location: "Marseille",
        end_location: "Monaco",
        distance: "320 km",
        duration: "2 jours",
        date: "22-23 Juin 2024",
        participants: 5,
        max_participants: 8,
        difficulty: "Facile",
        price: "280€",
        image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
    },
    {
        title: "Route des Châteaux de la Loire",
        description: "Voyage culturel à travers l'histoire de France en visitant les plus beaux châteaux de la vallée de la Loire.",
        start_location: "Tours",
        end_location: "Angers",
        distance: "180 km",
        duration: "2 jours",
        date: "29-30 Juin 2024",
        participants: 6,
        max_participants: 10,
        difficulty: "Facile",
        price: "220€",
        image_url: "https://images.unsplash.com/photo-1542314831401-41d2bd2722f3?w=800&h=400&fit=crop"
    }
];

// Insérer les utilisateurs de démonstration
async function insertDemoUsers() {
    console.log('👥 Insertion des utilisateurs de démonstration...');
    
    for (const user of demoUsers) {
        try {
            const [result] = await connection.promise().query(
                'INSERT IGNORE INTO users (username, email, password) VALUES (?, ?, ?)',
                [user.username, user.email, user.password]
            );
            
            if (result.affectedRows > 0) {
                console.log(`✅ Utilisateur créé: ${user.username}`);
            } else {
                console.log(`ℹ️ Utilisateur déjà existant: ${user.username}`);
            }
        } catch (error) {
            console.error(`❌ Erreur lors de la création de ${user.username}:`, error.message);
        }
    }
}

// Insérer les road trips de démonstration
async function insertDemoRoadTrips() {
    console.log('\n🚗 Insertion des road trips de démonstration...');
    
    // Récupérer l'ID du premier utilisateur
    const [users] = await connection.promise().query('SELECT id FROM users LIMIT 1');
    
    if (users.length === 0) {
        console.log('❌ Aucun utilisateur trouvé. Créez d\'abord des utilisateurs.');
        return;
    }
    
    const userId = users[0].id;
    
    for (const roadtrip of demoRoadTrips) {
        try {
            const [result] = await connection.promise().query(
                `INSERT IGNORE INTO roadtrips 
                (title, description, user_id, start_location, end_location, distance, duration, date, participants, max_participants, difficulty, price, image_url) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    roadtrip.title,
                    roadtrip.description,
                    userId,
                    roadtrip.start_location,
                    roadtrip.end_location,
                    roadtrip.distance,
                    roadtrip.duration,
                    roadtrip.date,
                    roadtrip.participants,
                    roadtrip.max_participants,
                    roadtrip.difficulty,
                    roadtrip.price,
                    roadtrip.image_url
                ]
            );
            
            if (result.affectedRows > 0) {
                console.log(`✅ Road trip créé: ${roadtrip.title}`);
            } else {
                console.log(`ℹ️ Road trip déjà existant: ${roadtrip.title}`);
            }
        } catch (error) {
            console.error(`❌ Erreur lors de la création du road trip ${roadtrip.title}:`, error.message);
        }
    }
}

// Insérer des participants de démonstration
async function insertDemoParticipants() {
    console.log('\n👥 Insertion des participants de démonstration...');
    
    try {
        // Récupérer les road trips et utilisateurs
        const [roadtrips] = await connection.promise().query('SELECT id FROM roadtrips LIMIT 3');
        const [users] = await connection.promise().query('SELECT id FROM users LIMIT 3');
        
        if (roadtrips.length === 0 || users.length === 0) {
            console.log('ℹ️ Pas assez de données pour créer des participants.');
            return;
        }
        
        // Ajouter quelques participants
        for (let i = 0; i < Math.min(roadtrips.length, users.length); i++) {
            try {
                await connection.promise().query(
                    'INSERT IGNORE INTO participants (roadtrip_id, user_id, car_model) VALUES (?, ?, ?)',
                    [roadtrips[i].id, users[i].id, `Voiture ${i + 1}`]
                );
                console.log(`✅ Participant ajouté au road trip ${i + 1}`);
            } catch (error) {
                console.error(`❌ Erreur lors de l'ajout du participant:`, error.message);
            }
        }
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des données:', error.message);
    }
}

// Fonction principale
async function seedDatabase() {
    try {
        await insertDemoUsers();
        await insertDemoRoadTrips();
        await insertDemoParticipants();
        
        console.log('\n🎉 Base de données remplie avec succès !');
        console.log('\n📊 Données insérées :');
        console.log('   - Utilisateurs de démonstration');
        console.log('   - Road trips de démonstration');
        console.log('   - Participants de démonstration');
        
    } catch (error) {
        console.error('❌ Erreur lors du remplissage de la base de données:', error.message);
    } finally {
        connection.end();
    }
}

// Lancer le script
seedDatabase();
