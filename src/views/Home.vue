<template>
  <div>
    <div class="row">
      <div :class="'col-md-' + (hasSelectedCharger() ? 6 : 12)">
        <Map :chargers="chargers" :handleChargerClicked="onChargerClicked" class="map" :class="{ minimized: typeof hasSelectedCharger() === 'object' }" />
      </div>
      <div class="col-md-6 bg-white" v-if="hasSelectedCharger()">
        <Charger :chargerId="parseInt($route.params.chargerId)" :users="users" :chargers="chargers" :reviews="reviews" class="charger" />
      </div>
    </div>
  </div>
</template>

<style>
.map {
  position: fixed;
  width: 100vw !important;
  height: 100vh !important;

  transition: width 1s, height 1s;
}

.map.minimized {
  width: 50vw !important;
}
</style>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import Map from '@/components/Map.vue';
import Charger from '@/components/Charger.vue';

export default {
  name: 'home',
  components: {
    Map,
    Charger,
  },
  computed: mapState({
    chargers: state => state.chargers.all,
    users: state => state.users.all,
    reviews: state => state.reviews.all
  }),
  created() {
    this.$store.dispatch('chargers/getAllChargers');
    this.$store.dispatch('users/getAllUsers');
  },
  methods: {
    onChargerClicked(chargerId) {
      this.$router.push({ path: '/charger/' + chargerId })
      this.$store.dispatch('reviews/getReviewsForCharger', { id: chargerId });
    },
    hasSelectedCharger() {
      return typeof this.$route.params.chargerId !== 'undefined';
    },
  },
};
</script>
