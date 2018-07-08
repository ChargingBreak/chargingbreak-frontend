<template>
  <div class="container">
    <h1><img src="/img/charger.png" alt="Charger" /> {{ details.charger.name }}</h1>
    <h2>Stalls: {{ details.charger.stallCount }}</h2>
    <h2>Date opened: {{ details.charger.dateOpened }}</h2>

    <ul v-for="review in details.reviews" class="list-group">
      <li class="list-group-item">
        <b-img :src="getUser(review.userId).photoUrl" rounded width="75" height="75" alt="img" class="m-1" />
        {{ review.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
}
</style>

<script>
import _ from 'lodash';

export default {
  props: {
    details: Object,
    users: Array,
  },
  data() {
    return {

    };
  },
  methods: {
    getUser(userId) {
      return _.find(this.users, user => user.id === userId);
    }
  },
};
</script>
