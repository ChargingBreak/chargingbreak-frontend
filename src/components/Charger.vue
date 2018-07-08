<template>
  <div class="container">
    <img src="/img/charger.png" alt="Charger" />
    <h1>{{ details.name }}</h1>
    <h2>Stalls: {{ details.stallCount }}</h2>
    <h2>Date opened: {{ details.dateOpened }}</h2>
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
