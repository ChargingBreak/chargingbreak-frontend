import axios from 'axios';
import { API_BASE_URL } from '../constants';

export default {
  getChargers(jwt, callback) {
<<<<<<< HEAD
    axios.get(`${API_BASE_URL}/chargers`, { headers: { Authorization: jwt } })
=======
    axios.get(`${API_BASE_URL}/charger`, { headers: { Authorization: jwt } })
>>>>>>> 3d6f5fca74ca84a5abb80ca753f32b6c7e5a2b01
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
  getChargerDetails(jwt, chargerId, callback) {
<<<<<<< HEAD
    axios.get(`${API_BASE_URL}/chargers/${chargerId}`, { headers: { Authorization: jwt } })
=======
    axios.get(`${API_BASE_URL}/charger/${chargerId}`, { headers: { Authorization: jwt } })
>>>>>>> 3d6f5fca74ca84a5abb80ca753f32b6c7e5a2b01
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
  submitTip(jwt, chargerId, text, theme, callback) {
    const data = {
      text,
      theme,
    };

    axios.post(`${API_BASE_URL}/tip/${chargerId}`, data, { headers: { Authorization: jwt } })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
  submitRating(jwt, chargerId, rating, theme, callback) {
    const data = {
      rating,
      theme,
    };

    axios.post(`${API_BASE_URL}/rating/${chargerId}`, data, { headers: { Authorization: jwt } })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
};
