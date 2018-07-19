import axios from 'axios';

export default {
  getChargers(callback) {
    // TODO: Error handling
    axios.get('https://api.chargingbreak.com/charger')
      .then((chargers) => {
        callback(chargers.data);
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
