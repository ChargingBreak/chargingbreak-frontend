import axios from 'axios';
import { API_BASE_URL } from '../constants';

export default {
  search(query, callback) {
    axios.get(`${API_BASE_URL}/search`)
      .then((searchResults) => {
        callback(searchResults.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
};
