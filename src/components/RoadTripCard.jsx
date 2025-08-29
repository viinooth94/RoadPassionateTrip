import { useState } from 'react';

export default function RoadTripCard({ trip, onJoin }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleJoinClick = (e) => {
    e.stopPropagation();
    onJoin(trip.id);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'facile':
        return 'var(--success)';
      case 'intermédiaire':
        return 'var(--warning)';
      case 'difficile':
        return 'var(--danger)';
      default:
        return 'var(--primary)';
    }
  };

  return (
    <div 
      className={`roadtrip-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image du trajet */}
      <div className="card-image">
        <img src={trip.image} alt={trip.title} />
        <div className="card-overlay">
          <div className="difficulty-badge" style={{ backgroundColor: getDifficultyColor(trip.difficulty) }}>
            {trip.difficulty}
          </div>
          <div className="price-badge">
            {trip.price}
          </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="card-content">
        <h3 className="trip-title">{trip.title}</h3>
        
        <div className="trip-meta">
          <div className="meta-item">
            <span className="meta-icon">📍</span>
            <span>{trip.startLocation} → {trip.endLocation}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📏</span>
            <span>{trip.distance}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span>{trip.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span>{trip.date}</span>
          </div>
        </div>

        <p className="trip-description">{trip.description}</p>

        {/* Tags */}
        <div className="trip-tags">
          {trip.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Voitures participantes */}
        <div className="cars-section">
          <h4>🚗 Voitures participantes :</h4>
          <div className="cars-list">
            {trip.cars.map((car, index) => (
              <span key={index} className="car-item">
                {car}
              </span>
            ))}
          </div>
        </div>

        {/* Participants */}
        <div className="participants-section">
          <div className="participants-info">
            <span className="participants-count">
              {trip.participants}/{trip.maxParticipants} participants
            </span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(trip.participants / trip.maxParticipants) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bouton participer */}
        <button 
          className="join-button"
          onClick={handleJoinClick}
          disabled={trip.participants >= trip.maxParticipants}
        >
          {trip.participants >= trip.maxParticipants ? 'Complet' : 'Rejoindre ce trajet'}
        </button>
      </div>
    </div>
  );
}
