// Configuration de la base de données
const config = {
  database: {
    host: 'localhost',
    user: 'root',
    password: 'root',  // Mot de passe par défaut de MAMP
    port: 8889,        // Port par défaut de MAMP pour MySQL
    database: 'road_passionate'
  },
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  jwt: {
    secret: 'votre_cle_secrete_tres_longue_et_complexe_a_changer_en_production'
  }
};

module.exports = config;
