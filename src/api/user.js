import axios from 'axios';
import { API_BASE_URL } from '../constants';

export default {
  getUser(userId, callback) {
    axios.get(`${API_BASE_URL}/user/${userId}`)
      .then((user) => {
        callback(user.data);
      })
      .catch((error) => {
        callback(null, error);
      });
  },
};
