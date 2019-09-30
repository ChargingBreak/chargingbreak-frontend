<template>
  <div class="container">
    <h2>Submit tip</h2>
    <div v-if="user">
      <div class="form-group">
        <label>What kind of tip do you have for this charger?</label>
        <textarea name="text" class="form-control" v-model="formText"></textarea>
      </div>

      <div class="form-group">
        <label>What is the category for this tip?</label>
        <select name="theme" v-model="formTheme" class="form-control">
          <option value="FOOD">Food</option>
          <option value="KIDS">Kids</option>
          <option value="RESTROOMS">Restrooms</option>
          <option value="SHOPPING">Shopping</option>
          <option value="ATMOSPHERE">Atmosphere</option>
          <option value="DIRECTIONS">Directions</option>
        </select>
      </div>

      <button v-on:click="submit()" class="btn btn-primary" :disabled="!formIsValid()">
        Submit
      </button>
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
  data() {
    return {
      formTheme: 'FOOD',
      formText: '',
    };
  },
  computed: mapState({
    user: state => state.auth.user,
  }),
  created() {
    this.$store.dispatch('auth/tryAutoSignIn');
  },
  methods: {
    formIsValid() {
      return this.formText.length > 0 && this.formTheme.length > 2;
    },
    submit() {
      if (this.formIsValid()) {
        const parameters = {
          id: this.$route.params.chargerId,
          text: this.formText,
          theme: this.formTheme,
        };

        this.$store.dispatch('chargers/submitTip', parameters);
        this.$router.push({ path: `/charger/${this.$route.params.chargerId}` });
      }
    },
  },
};
</script>
