import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // CSS spécifique

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Bienvenue sur <span>RoadTrip Connect</span> !</h1>
      <p>Organisez, partagez et vivez des road trips inoubliables avec d'autres passionnés.</p>

      <div className="home-buttons">
        <button className="btn-primary" onClick={() => navigate('/login')}>Se connecter</button>
        <button className="btn-secondary" onClick={() => navigate('/signup')}>S'inscrire</button>
      </div>

      <img src="/assets/roadtrip.jpg" alt="Road trip illustration" className="home-image" />
    </div>
  );
}

export default Home;
