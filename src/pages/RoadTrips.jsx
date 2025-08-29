import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import RoadTripCard from '../components/RoadTripCard';
import '../styles/RoadTrips.css';

export default function RoadTrips() {
  const [roadTrips, setRoadTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Données de démonstration pour les trajets
  useEffect(() => {
    const mockRoadTrips = [
      {
        id: 1,
        title: "Route des Alpes Françaises",
        description: "Découvrez les plus beaux cols alpins en passant par la Route des Grandes Alpes. Parfait pour les amateurs de virages et de paysages montagneux.",
        startLocation: "Nice",
        endLocation: "Chamonix",
        distance: "684 km",
        duration: "3 jours",
        date: "15-18 Juin 2024",
        participants: 8,
        maxParticipants: 12,
        cars: ["BMW M3", "Porsche 911", "Audi RS4"],
        difficulty: "Intermédiaire",
        price: "450€",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        tags: ["Montagne", "Virages", "Paysages"]
      },
      {
        id: 2,
        title: "Côte d'Azur - Provence",
        description: "Balade côtière le long de la Méditerranée avec arrêts dans les villages provençaux et dégustation de vins locaux.",
        startLocation: "Marseille",
        endLocation: "Monaco",
        distance: "320 km",
        duration: "2 jours",
        date: "22-23 Juin 2024",
        participants: 5,
        maxParticipants: 8,
        cars: ["Mercedes AMG", "Ferrari F8", "Lamborghini Huracan"],
        difficulty: "Facile",
        price: "280€",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        tags: ["Côte", "Villages", "Vins"]
      },
      {
        id: 3,
        title: "Route des Châteaux de la Loire",
        description: "Voyage culturel à travers l'histoire de France en visitant les plus beaux châteaux de la vallée de la Loire.",
        startLocation: "Tours",
        endLocation: "Angers",
        distance: "180 km",
        duration: "2 jours",
        date: "29-30 Juin 2024",
        participants: 6,
        maxParticipants: 10,
        cars: ["Peugeot 508", "Renault Megane RS", "Citroën C5"],
        difficulty: "Facile",
        price: "220€",
        image: "https://images.unsplash.com/photo-1542314831401-41d2bd2722f3?w=800&h=400&fit=crop",
        tags: ["Culture", "Histoire", "Châteaux"]
      },
      {
        id: 4,
        title: "Route des Vins d'Alsace",
        description: "Parcours œnologique à travers les vignobles alsaciens avec dégustations et visites de caves traditionnelles.",
        startLocation: "Strasbourg",
        endLocation: "Colmar",
        distance: "75 km",
        duration: "1 jour",
        date: "6 Juillet 2024",
        participants: 4,
        maxParticipants: 6,
        cars: ["Volkswagen Golf GTI", "Audi A3", "BMW Série 1"],
        difficulty: "Facile",
        price: "120€",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=400&fit=crop",
        tags: ["Vins", "Gastronomie", "Tradition"]
      }
    ];

    // Simuler un chargement
    setTimeout(() => {
      setRoadTrips(mockRoadTrips);
      setLoading(false);
    }, 1000);
  }, []);

  const handleJoinTrip = (tripId) => {
    // Logique pour rejoindre un trajet
    console.log(`Rejoindre le trajet ${tripId}`);
    // Ici vous pourriez appeler votre API backend
  };

  if (loading) {
    return (
      <div className="roadtrips-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Chargement des trajets...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="roadtrips-container">
      <div className="roadtrips-header">
        <h1>🚗 Découvrez nos Road Trips</h1>
        <p>Rejoignez des aventures automobiles uniques et partagez votre passion avec d'autres conducteurs</p>
      </div>

      <div className="roadtrips-grid">
        {roadTrips.map((trip) => (
          <RoadTripCard 
            key={trip.id} 
            trip={trip} 
            onJoin={handleJoinTrip}
          />
        ))}
      </div>

      {roadTrips.length === 0 && (
        <div className="no-trips">
          <p>Aucun trajet disponible pour le moment.</p>
        </div>
      )}
    </div>
    </>
  );
}
