const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000/api';

// Fonction pour tester l'API
async function testAPI() {
    console.log('🧪 Test de l\'API RoadTrip Connect...\n');
    
    try {
        // Test 1: Vérifier que l'API est accessible
        console.log('1️⃣ Test de l\'endpoint de test...');
        const testResponse = await axios.get(`${API_BASE_URL}/test-users`);
        console.log('✅ API accessible:', testResponse.data.message);
        
        // Test 2: Créer un utilisateur de test
        console.log('\n2️⃣ Test de création d\'utilisateur...');
        const newUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        };
        
        const createResponse = await axios.post(`${API_BASE_URL}/users/register`, newUser);
        console.log('✅ Utilisateur créé:', createResponse.data.message);
        console.log('   ID:', createResponse.data.user.id);
        
        // Test 3: Récupérer tous les utilisateurs
        console.log('\n3️⃣ Test de récupération des utilisateurs...');
        const usersResponse = await axios.get(`${API_BASE_URL}/users`);
        console.log('✅ Utilisateurs récupérés:', usersResponse.data.count, 'utilisateur(s)');
        
        // Test 4: Récupérer un utilisateur spécifique
        if (usersResponse.data.users.length > 0) {
            const userId = usersResponse.data.users[0].id;
            console.log('\n4️⃣ Test de récupération d\'un utilisateur spécifique...');
            const userResponse = await axios.get(`${API_BASE_URL}/users/${userId}`);
            console.log('✅ Utilisateur récupéré:', userResponse.data.user.username);
        }
        
        // Test 5: Test de connexion
        console.log('\n5️⃣ Test de connexion...');
        const loginResponse = await axios.post(`${API_BASE_URL}/users/login`, {
            email: 'test@example.com',
            password: 'password123'
        });
        console.log('✅ Connexion réussie:', loginResponse.data.message);
        
        console.log('\n🎉 Tous les tests sont passés avec succès !');
        
    } catch (error) {
        console.error('\n❌ Erreur lors du test:', error.message);
        
        if (error.response) {
            console.error('   Détails:', error.response.data);
            console.error('   Status:', error.response.status);
        }
        
        console.log('\n💡 Assurez-vous que :');
        console.log('   - Le serveur backend est lancé (node index.js)');
        console.log('   - La base de données est initialisée (node init-db.js)');
        console.log('   - MAMP/XAMPP est démarré');
    }
}

// Lancer les tests
testAPI();
