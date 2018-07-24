<template>
  <div class="container">
    <h2>Submit tip</h2>
    <div v-if="user">
      <button v-on:click="submit()">Submit</button>
    </div>
    <div v-else>
      <router-link to="/">Please log in</router-link> before submitting a tip
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'submittip',
  computed: mapState({
    user: state => state.auth.user,
  }),
  created() {
    this.$store.dispatch('auth/tryAutoSignIn');
  },
  methods: {
    submit() {
      this.$store.dispatch('chargers/submitTip', { id: this.$route.params.chargerId, text: 'Lorem ipsum dolor sit amet...', 'theme': 'FOOD' });
    }
  }
};
</script>
