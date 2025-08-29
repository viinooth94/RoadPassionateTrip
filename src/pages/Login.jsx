import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import { authService } from '../services/api';
import '../styles/Auth.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    try {
      // Appel à l'API de connexion
      const response = await authService.login({
        email,
        password
      });

      // Connexion réussie
      console.log("Connexion réussie:", response);
      
      // Stocker les informations de l'utilisateur dans localStorage
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Rediriger vers la page des trajets
      navigate('/roadtrips');
      
    } catch (error) {
      setError(error.message || "Erreur lors de la connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Connexion</h1>
          <p className="auth-subtitle">Heureux de vous revoir !</p>
        </div>

        {/* Messages d'erreur */}
        {error && (
          <div className="auth-error">
            <span className="error-icon">❌</span>
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="auth-separator">ou</div>

        <div className="auth-social-buttons">
          <button className="auth-social-button">
            <img src="/google-icon.png" alt="Google" style={{width: '24px'}} />
            Google
          </button>
          <button className="auth-social-button">
            <img src="/facebook-icon.png" alt="Facebook" style={{width: '24px'}} />
            Facebook
          </button>
        </div>

        <div className="auth-footer">
          Pas encore de compte ?{" "}
          <Link to="/register" className="auth-link">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
