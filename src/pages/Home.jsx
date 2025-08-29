import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import '../styles/Header.css';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
      <div className="auth-container">
        <div className="auth-card" style={{maxWidth: '600px'}}>
          <div className="auth-header">
            <h1 className="auth-title">Bienvenue sur RoadTrip Connect 🚗</h1>
            <p className="auth-subtitle">Organisez et partagez vos road trips entre passionnés de voiture.</p>
          </div>

          <div className="card" style={{marginBottom: 'var(--spacing-xl)'}}>
            <h2 className="roadtrip-title" style={{marginBottom: 'var(--spacing-md)'}}>Ce que vous pouvez faire :</h2>
            <div className="grid grid-2" style={{gap: 'var(--spacing-md)'}}>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <p>Proposer et découvrir des itinéraires</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🗳️</span>
                <p>Voter pour les meilleurs parcours</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚘</span>
                <p>Rejoindre des groupes par type de véhicule</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <p>Partager des trajets et réduire les coûts</p>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/roadtrips">
              <button className="btn btn-primary" style={{backgroundColor: '#667eea', borderColor: '#667eea'}}>
                🚗 Voir les trajets
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary">
                Se connecter
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-secondary">
                S'inscrire
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Ajout des styles spécifiques pour la page d'accueil
const styles = `
  .feature-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background-color: var(--light);
    border-radius: var(--radius-md);
    transition: transform 0.3s ease;
  }

  .feature-item:hover {
    transform: translateY(-2px);
  }

  .feature-icon {
    font-size: 1.5rem;
  }
`;

// Ajout des styles au document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

