<template>
  <div>
    <div class="row">
      <div :class="(shouldShowChargerDetails() ? 'd-sm-none d-md-block' : '') + ' col-md-6 col-sm-12'">
        <Map :chargers="chargers" :handleChargerClicked="onChargerClicked" class="map d-sm-block d-md-fixed" />
      </div>
      <div class="col-md-6 col-sm-12 bg-white">
        <Charger
          v-if="shouldShowChargerDetails()"
          :chargerId="parseInt($route.params.chargerId)"
          :users="users"
          :chargerDetails="chargerDetails"
          class="charger"
        />
        <div v-else-if="chargersAreLoading">Loading...</div>
        <About
          v-else
          :isAuthenticating="isAuthenticating"
          :isAuthenticated="user !== null"
        />
      </div>
    </div>
  </div>
</template>

<style>
.map {
  transition: width 1s, height 1s;

  width: 100vw !important;
  height: 50vh !important;
}

@media (min-width: 544px) {
  .map {
    width: 50vw !important;
    height: 100vh !important;
  }
}
</style>

<script>
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
    chargerDetails: state => state.chargers.details,
    chargersAreLoading: state => state.chargers.isLoading,
    users: state => state.users.all,
    isAuthenticating: state => state.auth.isAuthenticating,
    user: state => state.auth.user,
  }),
  created() {
    this.$store.dispatch('auth/tryAutoSignIn');
    this.$store.dispatch('chargers/getAllChargers');

    if (this.hasSelectedCharger()) {
      this.$store.dispatch('chargers/getChargerDetails', { id: this.$route.params.chargerId });
    }
  },
  methods: {
    onChargerClicked(chargerId) {
      this.$router.push({ path: `/charger/${chargerId}` });
      this.$store.dispatch('chargers/getChargerDetails', { id: chargerId });
    },
    hasSelectedCharger() {
      return typeof this.$route.params.chargerId !== 'undefined';
    },
    shouldShowChargerDetails() {
      return this.hasSelectedCharger() && this.chargerDetails && !this.chargersAreLoading;
    },
  },
};
</script>
