import axios from 'axios';

export default {
  getUser(userId, callback) {
    // TODO: Error handling
    axios.get('/data/user.json')
      .then((user) => {
        callback(user);
      });
  },
};
