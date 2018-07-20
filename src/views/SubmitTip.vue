<template>
  <div>
    <h2>Submit tip</h2>
    <button v-on:click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'submittip',
  created() {
    this.$store.dispatch('auth/tryAutoSignIn');
  },
  methods: {
    submit() {
      this.$store.dispatch('chargers/submitTip', { id: this.$route.params.chargerId, text: 'Lorem ipsum dolor sit amet...', 'category': 'FOOD' });
    }
  }
};
</script>
