<template>
  <div class="container">
    <h2>Submit rating</h2>
    <div v-if="user">
      <div class="card-deck ratings">
        <div
          v-for="theme in themes"
          :key="theme"
          class="card border-light text-center"
        >
          <div class="card-body px-0 py-2">
            <simple-svg
              :filepath="'/img/symbols/' + theme.toLowerCase() + '.svg'"
            />

            <strong>
              {{ theme.toLowerCase() }}
            </strong>

            <div class="btn-group">
              <button
                v-on:click="saveRating(theme, 1)"
                class="btn btn-primary"
                :disabled="savedThemes.indexOf(theme) !== -1">
                1
              </button>

              <button
                v-on:click="saveRating(theme, 2)"
                class="btn btn-primary"
                :disabled="savedThemes.indexOf(theme) !== -1">
                2
              </button>

              <button
                v-on:click="saveRating(theme, 3)"
                class="btn btn-primary"
                :disabled="savedThemes.indexOf(theme) !== -1">
                3
              </button>

              <button
                v-on:click="saveRating(theme, 4)"
                class="btn btn-primary"
                :disabled="savedThemes.indexOf(theme) !== -1">
                4
              </button>

              <button
                v-on:click="saveRating(theme, 5)"
                class="btn btn-primary"
                :disabled="savedThemes.indexOf(theme) !== -1">
                5
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-link to="/">Please log in</router-link> before submitting a rating
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'submitrating',
  data() {
    return {
      themes: ['FOOD', 'KIDS', 'RESTROOMS', 'SHOPPING', 'ATMOSPHERE'],
      savedThemes: [],
    };
  },
  computed: mapState({
    user: state => state.auth.user,
  }),
  created() {
    this.$store.dispatch('auth/tryAutoSignIn');
  },
  methods: {
    saveRating(theme, rating) {
      this.$store.dispatch('chargers/submitRating', { id: this.$route.params.chargerId, theme, rating });
      this.savedThemes.push(theme);

      if (this.themes.length === this.savedThemes.length) {
        this.$router.push({ path: `/charger/${this.$route.params.chargerId}` });
      }
    },
  },
};
</script>
