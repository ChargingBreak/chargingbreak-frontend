import axios from 'axios';

export default {
  getChargers(callback) {
    // TODO: Error handling
    axios.get('/data/chargers.json')
      .then((chargers) => {
        callback(chargers.data.filter(charger => charger.status === 'OPEN'));
      });
  },
  getChargerDetails(chargerId, callback) {
    // TODO: Error handling
    axios.get('/data/charger.json')
      .then((charger) => {
        callback(charger.data);
      });
  },
};
