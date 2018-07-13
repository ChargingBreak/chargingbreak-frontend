<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <Map :chargers="chargers" :handleChargerClicked="onChargerClicked" class="map" />
      </div>
      <div class="col-md-6 bg-white">
        <Charger v-if="hasSelectedCharger()" :chargerId="parseInt($route.params.chargerId)" :users="users" :chargers="chargers" :reviews="reviews" class="charger" />
        <About v-else />
      </div>
    </div>
  </div>
</template>

<style>
.map {
  position: fixed;
  width: 50vw !important;
  height: 100vh !important;

  transition: width 1s, height 1s;
}
</style>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import Map from '@/components/Map.vue';
import Charger from '@/components/Charger.vue';
import About from '@/components/About.vue';

export default {
  name: 'home',
  components: {
    Map,
    Charger,
    About,
  },
  computed: mapState({
    chargers: state => state.chargers.all,
    users: state => state.users.all,
    reviews: state => state.reviews.all
  }),
  created() {
    this.$store.dispatch('chargers/getAllChargers');
    this.$store.dispatch('users/getAllUsers');

    if (this.hasSelectedCharger()) {
      this.$store.dispatch('reviews/getReviewsForCharger', { id: this.$route.params.chargerId });
    }
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
