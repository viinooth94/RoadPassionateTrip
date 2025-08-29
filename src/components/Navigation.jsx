import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Navigation.css';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Vérifier l'état de connexion au chargement
  useEffect(() => {
    const userData = localStorage.getItem('user');
    const loginStatus = localStorage.getItem('isLoggedIn');
    
    if (userData && loginStatus === 'true') {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    }
  }, []);
  
  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🚗 RoadTrip Connect
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/roadtrips" 
            className={`nav-link ${isActive('/roadtrips') ? 'active' : ''}`}
          >
            Trajets
          </Link>
          
          {/* Affichage conditionnel selon l'état de connexion */}
          {isLoggedIn ? (
            <div className="user-section">
              <div className="user-info">
                <div className="user-avatar">
                  {user?.username?.charAt(0).toUpperCase() || '👤'}
                </div>
                <span className="username">{user?.username}</span>
              </div>
              <button className="logout-button" onClick={handleLogout}>
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <Link 
                to="/login" 
                className={`nav-link ${isActive('/login') ? 'active' : ''}`}
              >
                Connexion
              </Link>
              <Link 
                to="/register" 
                className={`nav-link ${isActive('/register') ? 'active' : ''}`}
              >
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
