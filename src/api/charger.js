import axios from 'axios';
import { API_BASE_URL } from '../constants';

export default {
  getChargers(jwt, callback) {
    axios.get(`${API_BASE_URL}/chargers`, { headers: { Authorization: jwt } })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
  getChargerDetails(jwt, chargerId, callback) {
    axios.get(`${API_BASE_URL}/chargers/${chargerId}`, { headers: { Authorization: jwt } })
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
