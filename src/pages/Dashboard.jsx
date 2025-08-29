import { useState } from 'react';
import Navigation from '../components/Navigation';
import '../styles/RoadTrip.css';

export default function Dashboard() {
  const [imageLoadStatus, setImageLoadStatus] = useState({});
  const [trips] = useState([
    {
      id: 1,
      title: "Route des Vins d'Alsace",
      description: "Un magnifique parcours à travers les vignobles alsaciens, en passant par les plus beaux villages.",
      image: "https://images.unsplash.com/photo-1590077428593-55e04b7f4b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "3 jours",
      start_location: "Strasbourg",
      end_location: "Colmar"
    },
    {
      id: 2,
      title: "Côte d'Azur en Cabriolet",
      description: "De Nice à Saint-Tropez, profitez du soleil et des routes côtières spectaculaires.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "4 jours",
      start_location: "Nice",
      end_location: "Saint-Tropez"
    }
  ]);

  const handleImageLoad = (id) => {
    setImageLoadStatus(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <>
      <Navigation />
      <div className="container">
      <div style={{ padding: 'var(--spacing-xl) 0' }}>
        <h1 className="auth-title" style={{ marginBottom: 'var(--spacing-xl)' }}>
          Tableau de bord
        </h1>

        <div className="grid grid-2">
          {trips.map(trip => (
            <div key={trip.id} className="roadtrip-card card">
              <div className="roadtrip-image-container">
                {!imageLoadStatus[trip.id] && (
                  <div className="image-skeleton"></div>
                )}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className={`roadtrip-image ${imageLoadStatus[trip.id] ? 'loaded' : ''}`}
                  onLoad={() => handleImageLoad(trip.id)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/800x400?text=Road+Trip+Image";
                  }}
                />
              </div>
              <div className="roadtrip-content">
                <h3 className="roadtrip-title">{trip.title}</h3>
                <p className="roadtrip-description">{trip.description}</p>
                
                <div className="roadtrip-meta">
                  <div className="roadtrip-duration">
                    <span>⏱️</span>
                    <span>{trip.duration}</span>
                  </div>
                </div>

                <div className="roadtrip-locations">
                  <span className="location-dot"></span>
                  <span>{trip.start_location}</span>
                  <span className="location-arrow">→</span>
                  <span>{trip.end_location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <button className="btn btn-primary">
            Créer un nouveau Road Trip
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
  