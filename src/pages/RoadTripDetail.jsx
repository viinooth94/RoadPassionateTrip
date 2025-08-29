import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/RoadTripDetail.css';

export default function RoadTripDetail() {
  const { id } = useParams();
  const [roadTrip, setRoadTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [isParticipating, setIsParticipating] = useState(false);

  // Données de démonstration (à remplacer par l'API plus tard)
  useEffect(() => {
    const mockRoadTrips = [
      {
        id: 1,
        title: "Route des Alpes Françaises",
        description: "Découvrez les plus beaux cols alpins en passant par la Route des Grandes Alpes. Ce parcours légendaire vous emmène de la Méditerranée aux sommets enneigés des Alpes, traversant des paysages à couper le souffle et des routes mythiques pour les amateurs de conduite sportive.",
        longDescription: `La Route des Grandes Alpes est l'un des plus beaux itinéraires de montagne au monde. Sur 684 kilomètres, elle traverse 6 départements, 16 cols alpins et 2 parcs nationaux. Vous découvrirez des paysages variés : des oliviers de la Côte d'Azur aux glaciers des Alpes du Nord, en passant par les forêts de mélèzes et les alpages fleuris.

        Cette route historique, créée au début du XXe siècle, était à l'origine destinée au tourisme militaire. Aujourd'hui, elle est devenue un parcours de légende pour les passionnés de moto et de voiture sportive. Chaque col offre son lot de virages en épingle et de vues panoramiques exceptionnelles.

        Le parcours est divisé en 3 étapes principales :
        • Étape 1 : Nice - Barcelonnette (cols de la Cayolle, d'Allos, de la Bonette)
        • Étape 2 : Barcelonnette - Briançon (cols de Vars, d'Izoard, du Galibier)
        • Étape 3 : Briançon - Chamonix (cols du Télégraphe, de la Madeleine, des Aravis)`,
        startLocation: "Nice",
        endLocation: "Chamonix",
        distance: "684 km",
        duration: "3 jours",
        date: "15-18 Juin 2024",
        participants: 8,
        maxParticipants: 12,
        cars: ["BMW M3", "Porsche 911", "Audi RS4", "Mercedes AMG GT", "Ferrari 488"],
        difficulty: "Intermédiaire",
        price: "450€",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=1200&h=600&fit=crop"
        ],
        tags: ["Montagne", "Virages", "Paysages", "Sport", "Aventure"],
        highlights: [
          "Col de la Bonette (2802m) - Plus haute route d'Europe",
          "Col d'Izoard - Légendaire pour le Tour de France",
          "Col du Galibier - Vue panoramique sur les glaciers",
          "Route des Grandes Alpes - Patrimoine historique"
        ],
        itinerary: [
          {
            day: 1,
            title: "Nice → Barcelonnette",
            distance: "180 km",
            description: "Départ de la Côte d'Azur, montée progressive vers les premiers cols alpins",
            stops: ["Col de la Cayolle", "Col d'Allos", "Col de la Bonette"],
            accommodation: "Hôtel 4* à Barcelonnette"
          },
          {
            day: 2,
            title: "Barcelonnette → Briançon",
            distance: "220 km",
            description: "Traversée des plus beaux cols des Alpes du Sud",
            stops: ["Col de Vars", "Col d'Izoard", "Col du Galibier"],
            accommodation: "Chalet de montagne à Briançon"
          },
          {
            day: 3,
            title: "Briançon → Chamonix",
            distance: "284 km",
            description: "Dernière étape vers les Alpes du Nord et le Mont-Blanc",
            stops: ["Col du Télégraphe", "Col de la Madeleine", "Col des Aravis"],
            accommodation: "Hôtel de luxe à Chamonix"
          }
        ],
        requirements: [
          "Permis de conduire valide",
          "Assurance tous risques recommandée",
          "Équipement de sécurité (gilets, triangles)",
          "Véhicule en bon état technique"
        ],
        included: [
          "Hébergement 3 nuits en chambre double",
          "Petits-déjeuners et dîners",
          "Guide professionnel",
          "Support technique",
          "Photos souvenir",
          "Certificat de participation"
        ],
        organizer: {
          name: "Alpine Road Adventures",
          experience: "15 ans d'expérience",
          rating: 4.9,
          reviews: 127
        }
      },
      {
        id: 2,
        title: "Côte d'Azur - Provence",
        description: "Balade côtière le long de la Méditerranée avec arrêts dans les villages provençaux et dégustation de vins locaux.",
        longDescription: `Découvrez la magie de la Côte d'Azur et de la Provence en parcourant 320 kilomètres de routes côtières spectaculaires. Ce road trip vous emmène de Marseille, ville portuaire historique, jusqu'à Monaco, principauté de luxe, en passant par les plus beaux villages de la région.

        Le parcours suit la mythique Route des Crêtes, offrant des vues panoramiques sur la Méditerranée et les îles du Frioul. Vous traverserez des paysages variés : calanques sauvages, villages perchés, vignobles renommés et plages de sable fin.

        Chaque étape est l'occasion de découvrir la culture provençale : marchés colorés, cuisine méditerranéenne, vins AOC et artisanat local. Les routes sinueuses longeant la côte offrent des sensations de conduite uniques avec la mer en toile de fond.`,
        startLocation: "Marseille",
        endLocation: "Monaco",
        distance: "320 km",
        duration: "2 jours",
        date: "22-23 Juin 2024",
        participants: 5,
        maxParticipants: 8,
        cars: ["Mercedes AMG", "Ferrari F8", "Lamborghini Huracan", "Porsche 911", "Aston Martin DB11"],
        difficulty: "Facile",
        price: "280€",
        images: [
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=600&fit=crop"
        ],
        tags: ["Côte", "Villages", "Vins", "Méditerranée", "Luxe"],
        highlights: [
          "Calanques de Marseille - Patrimoine naturel",
          "Village de Cassis - Capitale du vin blanc",
          "Route des Crêtes - Vues panoramiques",
          "Monaco - Principauté de luxe"
        ],
        itinerary: [
          {
            day: 1,
            title: "Marseille → Cassis",
            distance: "160 km",
            description: "Découverte des calanques et des villages côtiers",
            stops: ["Calanques de Marseille", "Village de Cassis", "Route des Crêtes"],
            accommodation: "Hôtel de charme à Cassis"
          },
          {
            day: 2,
            title: "Cassis → Monaco",
            distance: "160 km",
            description: "Continuation le long de la côte vers la principauté",
            stops: ["Antibes", "Cap d'Antibes", "Monaco"],
            accommodation: "Hôtel 5* à Monaco"
          }
        ],
        requirements: [
          "Permis de conduire valide",
          "Tenue décontractée",
          "Maillot de bain",
          "Appareil photo"
        ],
        included: [
          "Hébergement 2 nuits en chambre double",
          "Dégustation de vins",
          "Guide local",
          "Dîner gastronomique",
          "Croisière côtière"
        ],
        organizer: {
          name: "Provence Road Tours",
          experience: "12 ans d'expérience",
          rating: 4.8,
          reviews: 89
        }
      },
      {
        id: 3,
        title: "Route des Châteaux de la Loire",
        description: "Voyage culturel à travers l'histoire de France en visitant les plus beaux châteaux de la vallée de la Loire.",
        longDescription: `Plongez dans l'histoire de France en parcourant la majestueuse vallée de la Loire, classée au patrimoine mondial de l'UNESCO. Sur 180 kilomètres, découvrez les plus beaux châteaux de la Renaissance française, témoins de la grandeur et de l'élégance du XVIe siècle.

        Cette route culturelle vous emmène de Tours, capitale historique de la Touraine, jusqu'à Angers, ville médiévale aux portes de l'Anjou. Chaque château raconte une histoire : celle des rois de France, des reines et des favorites, des artistes et des architectes qui ont façonné le style Renaissance français.

        Le parcours suit la Loire, dernier fleuve sauvage d'Europe, et traverse des paysages bucoliques : vignobles renommés, forêts domaniales, jardins à la française et villages de caractère. Les routes départementales offrent une conduite agréable entre les sites historiques.`,
        startLocation: "Tours",
        endLocation: "Angers",
        distance: "180 km",
        duration: "2 jours",
        date: "29-30 Juin 2024",
        participants: 6,
        maxParticipants: 10,
        cars: ["Peugeot 508", "Renault Megane RS", "Citroën C5", "DS 7", "Alpine A110"],
        difficulty: "Facile",
        price: "220€",
        images: [
          "https://images.unsplash.com/photo-1542314831401-41d2bd2722f3?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1542314831401-41d2bd2722f3?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop"
        ],
        tags: ["Culture", "Histoire", "Châteaux", "Renaissance", "Patrimoine"],
        highlights: [
          "Château de Chambord - Chef-d'œuvre de la Renaissance",
          "Château de Chenonceau - Le château des Dames",
          "Château de Villandry - Jardins exceptionnels",
          "Château d'Angers - Forteresse médiévale"
        ],
        itinerary: [
          {
            day: 1,
            title: "Tours → Chambord",
            distance: "90 km",
            description: "Découverte des châteaux de la Touraine",
            stops: ["Château de Chenonceau", "Château de Chambord", "Château de Cheverny"],
            accommodation: "Château-hôtel à Chambord"
          },
          {
            day: 2,
            title: "Chambord → Angers",
            distance: "90 km",
            description: "Continuation vers l'Anjou",
            stops: ["Château de Villandry", "Château d'Ussé", "Château d'Angers"],
            accommodation: "Hôtel de charme à Angers"
          }
        ],
        requirements: [
          "Permis de conduire valide",
          "Tenue correcte pour les visites",
          "Passion pour l'histoire",
          "Temps pour les visites"
        ],
        included: [
          "Hébergement 2 nuits en chambre double",
          "Visites guidées des châteaux",
          "Dégustation de vins de Loire",
          "Dîner dans un château",
          "Guide culturel"
        ],
        organizer: {
          name: "Loire Valley Heritage",
          experience: "20 ans d'expérience",
          rating: 4.9,
          reviews: 156
        }
      }
    ];

    // Simuler un chargement
    setTimeout(() => {
      const foundTrip = mockRoadTrips.find(trip => trip.id === parseInt(id));
      if (foundTrip) {
        setRoadTrip(foundTrip);
        // Simuler des participants
        setParticipants([
          { id: 1, name: "John Doe", car: "BMW M3", joinedAt: "2024-01-15" },
          { id: 2, name: "Jane Smith", car: "Porsche 911", joinedAt: "2024-01-16" },
          { id: 3, name: "Mike Wilson", car: "Audi RS4", joinedAt: "2024-01-17" }
        ]);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleJoinTrip = () => {
    if (roadTrip.participants < roadTrip.maxParticipants) {
      setIsParticipating(true);
      // Ici vous pourriez appeler votre API backend
      console.log(`Rejoindre le road trip ${roadTrip.id}`);
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="roadtrip-detail-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Chargement du road trip...</p>
          </div>
        </div>
      </>
    );
  }

  if (!roadTrip) {
    return (
      <>
        <Navigation />
        <div className="roadtrip-detail-container">
          <div className="error-message">
            <h2>Road trip non trouvé</h2>
            <p>Le road trip que vous recherchez n'existe pas.</p>
            <Link to="/roadtrips" className="btn btn-primary">
              Retour aux road trips
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="roadtrip-detail-container">
        {/* En-tête avec image principale */}
        <div className="hero-section">
          <div className="hero-image">
            <img src={roadTrip.images[0]} alt={roadTrip.title} />
            <div className="hero-overlay">
              <div className="hero-content">
                <div className="breadcrumb">
                  <Link to="/roadtrips">Road Trips</Link> / {roadTrip.title}
                </div>
                <h1>{roadTrip.title}</h1>
                <p className="hero-subtitle">{roadTrip.description}</p>
                <div className="hero-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📍</span>
                    {roadTrip.startLocation} → {roadTrip.endLocation}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">📏</span>
                    {roadTrip.distance}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    {roadTrip.duration}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">📅</span>
                    {roadTrip.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="main-content">
          <div className="content-grid">
            {/* Colonne principale */}
            <div className="main-column">
              {/* Description détaillée */}
              <section className="detail-section">
                <h2>À propos de ce road trip</h2>
                <p className="long-description">{roadTrip.longDescription}</p>
              </section>

              {/* Itinéraire détaillé */}
              <section className="detail-section">
                <h2>Itinéraire détaillé</h2>
                <div className="itinerary">
                  {roadTrip.itinerary.map((day, index) => (
                    <div key={index} className="itinerary-day">
                      <div className="day-header">
                        <span className="day-number">Jour {day.day}</span>
                        <h3>{day.title}</h3>
                        <span className="day-distance">{day.distance}</span>
                      </div>
                      <p className="day-description">{day.description}</p>
                      <div className="day-stops">
                        <strong>Arrêts :</strong> {day.stops.join(', ')}
                      </div>
                      <div className="day-accommodation">
                        <strong>Hébergement :</strong> {day.accommodation}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Points forts */}
              <section className="detail-section">
                <h2>Points forts</h2>
                <div className="highlights-grid">
                  {roadTrip.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <span className="highlight-icon">⭐</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Galerie d'images */}
              <section className="detail-section">
                <h2>Galerie photos</h2>
                <div className="image-gallery">
                  {roadTrip.images.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img src={image} alt={`${roadTrip.title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Barre latérale */}
            <div className="sidebar">
              {/* Carte de réservation */}
              <div className="booking-card">
                <div className="price-section">
                  <span className="price">{roadTrip.price}</span>
                  <span className="price-label">par personne</span>
                </div>
                
                <div className="participants-info">
                  <div className="participants-count">
                    <span className="count">{roadTrip.participants}</span>
                    <span className="separator">/</span>
                    <span className="max">{roadTrip.maxParticipants}</span>
                    <span className="label">participants</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(roadTrip.participants / roadTrip.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button 
                  className={`join-button ${isParticipating ? 'participating' : ''}`}
                  onClick={handleJoinTrip}
                  disabled={roadTrip.participants >= roadTrip.maxParticipants || isParticipating}
                >
                  {isParticipating ? 'Participation confirmée !' : 
                   roadTrip.participants >= roadTrip.maxParticipants ? 'Complet' : 
                   'Rejoindre ce road trip'}
                </button>

                <div className="trip-meta">
                  <div className="meta-row">
                    <span className="meta-label">Difficulté</span>
                    <span className={`difficulty-badge ${roadTrip.difficulty.toLowerCase()}`}>
                      {roadTrip.difficulty}
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">{roadTrip.date}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Durée</span>
                    <span className="meta-value">{roadTrip.duration}</span>
                  </div>
                </div>
              </div>

              {/* Organisateur */}
              <div className="organizer-card">
                <h3>Organisateur</h3>
                <div className="organizer-info">
                  <div className="organizer-name">{roadTrip.organizer.name}</div>
                  <div className="organizer-rating">
                    <span className="stars">{'★'.repeat(Math.floor(roadTrip.organizer.rating))}</span>
                    <span className="rating">{roadTrip.organizer.rating}</span>
                    <span className="reviews">({roadTrip.organizer.reviews} avis)</span>
                  </div>
                  <div className="organizer-experience">
                    {roadTrip.organizer.experience} d'expérience
                  </div>
                </div>
              </div>

              {/* Voitures participantes */}
              <div className="cars-card">
                <h3>Voitures participantes</h3>
                <div className="cars-list">
                  {roadTrip.cars.map((car, index) => (
                    <div key={index} className="car-item">
                      <span className="car-icon">🚗</span>
                      <span className="car-name">{car}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="tags-card">
                <h3>Tags</h3>
                <div className="tags-list">
                  {roadTrip.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ce qui est inclus */}
              <div className="included-card">
                <h3>Ce qui est inclus</h3>
                <ul className="included-list">
                  {roadTrip.included.map((item, index) => (
                    <li key={index} className="included-item">
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prérequis */}
              <div className="requirements-card">
                <h3>Prérequis</h3>
                <ul className="requirements-list">
                  {roadTrip.requirements.map((requirement, index) => (
                    <li key={index} className="requirement-item">
                      <span className="info-icon">ℹ️</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
