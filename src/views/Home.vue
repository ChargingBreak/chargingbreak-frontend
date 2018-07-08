<template>
  <div>
    <Map :chargers="chargers" :handleChargerClicked="onChargerClicked" class="map" :class="{ minimized: typeof selectedCharger === 'object' }" />
    <Charger v-if="selectedCharger" :details="selectedCharger" />
  </div>
</template>

<style>
.map {
  width: 100vw !important;
  height: 100vh !important;
  position: relative;

  transition: width 1s, height 1s, left 1s, top 1s;
}

.map.minimized {
  width: 256px !important;
  height: 256px !important;

  position: absolute;
  right: 0;
  bottom: 0;
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
      selectedCharger: state => _.find(state.chargers.all, charger => charger.id === state.chargers.selectedChargerId),
    }),
  },
  created() {
    this.$store.dispatch('chargers/getAllChargers');
  },
  methods: {
    onChargerClicked(chargerId) {
      this.$store.dispatch('chargers/setSelectedCharger', { id: chargerId });
    },
  },
};
</script>
