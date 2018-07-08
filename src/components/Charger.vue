<template>
  <div class="container">
    <h1><img src="/img/charger.png" alt="Charger" /> {{ details.charger.name }}</h1>
    <h2>Stalls: {{ details.charger.stallCount }}</h2>
    <h2>Date opened: {{ details.charger.dateOpened }}</h2>

    <ul v-for="review in details.reviews" class="list-group">
      <li class="list-group-item">{{ review.description }}</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
}
</style>

<script>
export default {
  props: {
    details: Object,
  },
  data() {
    return {

    };
  },
};
</script>
