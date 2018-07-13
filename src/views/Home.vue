<template>
  <div>
    <div class="row">
      <div :class="'col-md-' + (selectedCharger ? 6 : 12)">
        <Map :chargers="chargers" :handleChargerClicked="onChargerClicked" class="map" :class="{ minimized: typeof selectedCharger === 'object' }" />
      </div>
      <div class="col-md-6" v-if="selectedCharger">
        <Charger :details="selectedCharger" :users="users" class="charger" />
      </div>
    </div>
  </div>
</template>

<style>
.charger {
  background: white;
}

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
  computed: {
    ...mapState({
      chargers: state => state.chargers.all,
      users: state => state.users.all,
      selectedCharger: (state) => {
        if (state.chargers.selectedChargerId) {
          const charger = _.find(state.chargers.all, item => item.id === state.chargers.selectedChargerId);
          const reviews = state.reviews.all.filter(item => item.chargerId === state.chargers.selectedChargerId);

          return {
            charger,
            reviews,
          };
        }
      },
    }),
  },
  created() {
    this.$store.dispatch('chargers/getAllChargers');
    this.$store.dispatch('users/getAllUsers');
  },
  methods: {
    onChargerClicked(chargerId) {
      this.$store.dispatch('chargers/setSelectedCharger', { id: chargerId });
      this.$store.dispatch('reviews/getReviewsForCharger', { id: chargerId });
    },
  },
};
</script>
