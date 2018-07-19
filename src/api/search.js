import axios from 'axios';

export default {
  search(query, callback) {
    // TODO: Error handling
    axios.get('/data/search.json')
      .then((search) => {
        callback(search);
      });
  },
};
