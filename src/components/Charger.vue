<template>
  <div class="wrapper" v-if="chargerDetails">
    <router-link to="/">&lsaquo; Go back</router-link>

    <h3 class="display-3 mt-2 mb-4">{{ chargerDetails.name }}</h3>

    <nav class="navbar navbar-dark bg-primary mb-2">
      <span class="navbar-brand mb-0 h1">Details</span>
    </nav>

    <div class="card-deck chargerDetails text-center">
      <div class="card bg-light stalls">
        <div class="card-body">
          <simple-svg
            v-for="n in chargerDetails.stallCount"
            :key="n"
            filepath="/img/symbols/supercharger.svg"
          />
          <h2><span class="badge">{{ chargerDetails.stallCount }} stalls</span></h2>
        </div>
      </div>

      <div class="card bg-light">
        <div class="card-body text-center">
          <simple-svg filepath="/img/symbols/calendar.svg" />
          <p class="mt-2">Opened {{ formatDuration(chargerDetails.dateOpened) }}</p>
        </div>
      </div>

      <div class="card bg-light">
        <div class="card-body text-center">
          <simple-svg filepath="/img/symbols/parking.svg" />
          <p class="mt-2">No parking fees</p>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-dark bg-primary mt-4 mb-2">
      <span class="navbar-brand mb-0 h1">Ratings</span>
      <router-link :to="'/charger/' + chargerDetails.id + '/rate'" class="btn btn-light">Submit rating</router-link>
    </nav>

    <div class="card-deck ratings">
      <div
        v-for="rating in chargerDetails.ratings"
        :key="rating.id"
        class="card border-light text-center"
      >
        <div class="card-body px-0 py-2">
          <simple-svg
            v-if="rating.rating > 0"
            filepath="/img/symbols/rating.svg"
            :class="'rating-' + rating.rating + ' mx-4'"
          />
          <span v-else>Rate me!</span>

          <simple-svg
            :filepath="'/img/symbols/' + rating.theme.toLowerCase() + '.svg'"
          />

          <strong>
            {{ rating.theme.toLowerCase() }}
          </strong>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-dark bg-primary mt-4 mb-2">
      <span class="navbar-brand mb-0 h1">Tips</span>
      <router-link :to="'/charger/' + chargerDetails.id + '/tip'" class="btn btn-light">Submit tip</router-link>
    </nav>

    <div v-if="chargerDetails.tips.length <= 0">
      No tips submitted yet for this charger. <router-link :to="'/charger/' + chargerDetails.id + '/tip'">Why don't you be the first?</router-link>
    </div>

    <div class="card-columns tips">
      <div class="card" v-for="tip in chargerDetails.tips" :key="tip.id">
        <img v-if="tip.photoUrl" class="card-img-top" :src="tip.photoUrl" alt="Photo">
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-md-8">
              <h6 class="card-title">
                <simple-svg
                  :filepath="'/img/symbols/' + tip.theme.toLowerCase() + '.svg'"
                  class="d-inline-block"
                />
                {{ tip.theme.toLowerCase() }}
              </h6>
            </div>

            <div class="col-md-4">
              <div class="float-right text-center">
                <simple-svg filepath="/img/symbols/upvote.svg" class="upvote" />
                <h4>2</h4>
              </div>
            </div>
          </div>

          <p class="card-text">{{ tip.description }}</p>
          <p class="card-text" v-if="users[tip.userId]">
            <small class="text-muted">
              <b-img
                :src="users[tip.userId].photoUrl"
                rounded
                width="32"
                height="32"
                alt="Photo"
                class="m-1"
              />
              {{ users[tip.userId].name }}, 1 week ago
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  margin: 0 20px;
}

.chargerDetails .simple-svg {
  height: 32px;
}

.stalls .simple-svg {
  height: 32px;
  position: relative;
  top: 7px;
}

.stalls .simple-svg-wrapper {
  display: inline-block;
}

.ratings .card-body img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 128px;
}

.ratings strong {
  text-transform: capitalize;
}

.ratings .simple-svg-wrapper.rating-1 #rating_2,
.ratings .simple-svg-wrapper.rating-1 #rating_3,
.ratings .simple-svg-wrapper.rating-1 #rating_4,
.ratings .simple-svg-wrapper.rating-1 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-2 #rating_1,
.ratings .simple-svg-wrapper.rating-2 #rating_3,
.ratings .simple-svg-wrapper.rating-2 #rating_4,
.ratings .simple-svg-wrapper.rating-2 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-3 #rating_1,
.ratings .simple-svg-wrapper.rating-3 #rating_2,
.ratings .simple-svg-wrapper.rating-3 #rating_4,
.ratings .simple-svg-wrapper.rating-3 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-4 #rating_1,
.ratings .simple-svg-wrapper.rating-4 #rating_2,
.ratings .simple-svg-wrapper.rating-4 #rating_3,
.ratings .simple-svg-wrapper.rating-4 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-5 #rating_1,
.ratings .simple-svg-wrapper.rating-5 #rating_2,
.ratings .simple-svg-wrapper.rating-5 #rating_3,
.ratings .simple-svg-wrapper.rating-5 #rating_4 {
  display: none;
}

.upvote svg {
  height: 32px;
}

.tips .card-title {
  text-transform: capitalize;
  line-height: 56px;
}

.tips .card-title img, .tips .card-title .simple-svg {
  height: 48px;
}
</style>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  props: {
    chargerId: Number,
    users: Object,
    chargerDetails: Object,
  },
  created() {
    _.union(this.chargerDetails.tips.map(tip => tip.user_id))
      .forEach(userId => this.$store.dispatch('users/getUser', userId));
  },
  methods: {
    formatDuration(date) {
      return moment.duration(moment(date).diff(moment())).humanize(true);
    },
  },
};
</script>
