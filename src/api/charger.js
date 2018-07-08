import axios from 'axios';

export default {
  getChargers(callback) {
    // TODO: Error handling
    axios.get('/data/chargers.json')
      .then((chargers) => {
        callback(chargers.data.filter(charger => charger.status === 'OPEN'));
      });
  },
};
