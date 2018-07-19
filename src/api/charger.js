import axios from 'axios';
import { API_BASE_URL } from '../constants';

export default {
  getChargers(callback) {
    axios.get(`${API_BASE_URL}/charger`)
      .then((chargers) => {
        callback(chargers.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
  getChargerDetails(chargerId, callback) {
    axios.get(`${API_BASE_URL}/charger/${chargerId}`)
      .then((charger) => {
        callback(charger.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
};
