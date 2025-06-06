// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css"; // on créera ce fichier pour styliser

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique d'authentification ici (ex: Firebase ou mock)
    if (email && password) {
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenue sur RoadTrip Connect</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
