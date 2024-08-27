import axios from 'axios';

const API_URL = 'https://api.lemon.com/earn'; // URL ficticia de la API

/**
 * Función para obtener tasas de interés
 * 
 * Realiza una petición GET a la API para obtener las tasas de interés actuales.
 * 
 * @returns {Promise<Object>} Los datos de las tasas de interés.
 */
export const fetchRates = async () => {
    try {
        const response = await axios.get(`${API_URL}/rates`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rates:", error);
        throw error;
    }
};
