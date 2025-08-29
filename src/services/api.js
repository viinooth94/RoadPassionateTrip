const API_BASE_URL = 'http://localhost:3000/api';

// Fonction utilitaire pour les appels API
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Une erreur est survenue');
    }

    return data;
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

// Service d'authentification
export const authService = {
  // Inscription d'un nouvel utilisateur
  async register(userData) {
    return apiCall('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Connexion d'un utilisateur
  async login(credentials) {
    return apiCall('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  // Récupération de tous les utilisateurs
  async getUsers() {
    return apiCall('/users');
  },

  // Récupération d'un utilisateur par ID
  async getUserById(id) {
    return apiCall(`/users/${id}`);
  },
};

// Service des road trips
export const roadTripService = {
  // Récupération de tous les road trips
  async getRoadTrips() {
    return apiCall('/trips');
  },

  // Récupération d'un road trip par ID
  async getRoadTripById(id) {
    return apiCall(`/trips/${id}`);
  },

  // Création d'un nouveau road trip
  async createRoadTrip(tripData) {
    return apiCall('/trips', {
      method: 'POST',
      body: JSON.stringify(tripData),
    });
  },
};

export default apiCall;
