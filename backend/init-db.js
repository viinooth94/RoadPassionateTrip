const mysql = require('mysql2');
const config = require('./config');

// Créer une connexion sans spécifier la base de données
const connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port
});

console.log('🚀 Initialisation de la base de données...');

// Créer la base de données si elle n'existe pas
connection.query('CREATE DATABASE IF NOT EXISTS road_passionate', (err) => {
    if (err) {
        console.error('❌ Erreur lors de la création de la base de données:', err);
        connection.end();
        return;
    }
    
    console.log('✅ Base de données "road_passionate" créée ou déjà existante');
    
    // Utiliser la base de données
    connection.query('USE road_passionate', (err) => {
        if (err) {
            console.error('❌ Erreur lors de la sélection de la base de données:', err);
            connection.end();
            return;
        }
        
        console.log('✅ Base de données sélectionnée');
        
        // Créer la table des utilisateurs
        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `;
        
        connection.query(createUsersTable, (err) => {
            if (err) {
                console.error('❌ Erreur lors de la création de la table users:', err);
                connection.end();
                return;
            }
            
            console.log('✅ Table "users" créée ou déjà existante');
            
            // Créer la table des road trips
            const createRoadTripsTable = `
                CREATE TABLE IF NOT EXISTS roadtrips (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(100) NOT NULL,
                    description TEXT,
                    user_id INT,
                    start_location VARCHAR(100) NOT NULL,
                    end_location VARCHAR(100) NOT NULL,
                    distance VARCHAR(50),
                    duration VARCHAR(50),
                    date VARCHAR(100),
                    participants INT DEFAULT 0,
                    max_participants INT DEFAULT 10,
                    difficulty ENUM('Facile', 'Intermédiaire', 'Difficile') DEFAULT 'Facile',
                    price VARCHAR(50),
                    image_url TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
                )
            `;
            
            connection.query(createRoadTripsTable, (err) => {
                if (err) {
                    console.error('❌ Erreur lors de la création de la table roadtrips:', err);
                    connection.end();
                    return;
                }
                
                console.log('✅ Table "roadtrips" créée ou déjà existante');
                
                // Créer la table des participants
                const createParticipantsTable = `
                    CREATE TABLE IF NOT EXISTS participants (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        roadtrip_id INT NOT NULL,
                        user_id INT NOT NULL,
                        car_model VARCHAR(100),
                        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        FOREIGN KEY (roadtrip_id) REFERENCES roadtrips(id) ON DELETE CASCADE,
                        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                        UNIQUE KEY unique_participant (roadtrip_id, user_id)
                    )
                `;
                
                connection.query(createParticipantsTable, (err) => {
                    if (err) {
                        console.error('❌ Erreur lors de la création de la table participants:', err);
                        connection.end();
                        return;
                    }
                    
                    console.log('✅ Table "participants" créée ou déjà existante');
                    
                    // Créer la table des tags
                    const createTagsTable = `
                        CREATE TABLE IF NOT EXISTS tags (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(50) NOT NULL UNIQUE,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        )
                    `;
                    
                    connection.query(createTagsTable, (err) => {
                        if (err) {
                            console.error('❌ Erreur lors de la création de la table tags:', err);
                            connection.end();
                            return;
                        }
                        
                        console.log('✅ Table "tags" créée ou déjà existante');
                        
                        // Créer la table de liaison roadtrips_tags
                        const createRoadTripsTagsTable = `
                            CREATE TABLE IF NOT EXISTS roadtrips_tags (
                                roadtrip_id INT NOT NULL,
                                tag_id INT NOT NULL,
                                PRIMARY KEY (roadtrip_id, tag_id),
                                FOREIGN KEY (roadtrip_id) REFERENCES roadtrips(id) ON DELETE CASCADE,
                                FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
                            )
                        `;
                        
                        connection.query(createRoadTripsTagsTable, (err) => {
                            if (err) {
                                console.error('❌ Erreur lors de la création de la table roadtrips_tags:', err);
                                connection.end();
                                return;
                            }
                            
                            console.log('✅ Table "roadtrips_tags" créée ou déjà existante');
                            
                            // Insérer quelques tags de démonstration
                            const insertTags = `
                                INSERT IGNORE INTO tags (name) VALUES 
                                ('Montagne'), ('Virages'), ('Paysages'), ('Côte'), 
                                ('Villages'), ('Vins'), ('Culture'), ('Histoire'), 
                                ('Châteaux'), ('Gastronomie'), ('Tradition')
                            `;
                            
                            connection.query(insertTags, (err) => {
                                if (err) {
                                    console.error('❌ Erreur lors de l\'insertion des tags:', err);
                                } else {
                                    console.log('✅ Tags de démonstration insérés');
                                }
                                
                                console.log('\n🎉 Base de données initialisée avec succès !');
                                console.log('📊 Tables créées :');
                                console.log('   - users');
                                console.log('   - roadtrips');
                                console.log('   - participants');
                                console.log('   - tags');
                                console.log('   - roadtrips_tags');
                                console.log('\n🚀 Vous pouvez maintenant lancer votre serveur avec : node index.js');
                                
                                connection.end();
                            });
                        });
                    });
                });
            });
        });
    });
});
