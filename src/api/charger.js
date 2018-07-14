import axios from 'axios';

export default {
  getChargers(callback) {
    // TODO: Error handling
    axios.get('https://api.chargingbreak.com/charger')
      .then((chargers) => {
        callback(chargers.data.filter(charger => charger.status === 'OPEN'));
      });
  },
};
