<template>
  <div class="wrapper" v-if="details">
    <h3 class="display-3 mt-2 mb-4">{{ details.name }}</h3>

    <nav class="navbar navbar-dark bg-primary mb-2">
      <span class="navbar-brand mb-0 h1">Details</span>
    </nav>

    <div class="card-deck details text-center">
      <div class="card bg-light stalls">
        <div class="card-body">
          <simple-svg v-for="n in details.stallCount" filepath="/img/symbols/supercharger.svg" />
          <h2><span class="badge">{{ details.stallCount }} stalls</span></h2>
        </div>
      </div>

      <div class="card bg-light">
        <div class="card-body text-center">
          <simple-svg filepath="/img/symbols/calendar.svg" />
          <p class="mt-2">Opened {{ formatDuration(details.dateOpened) }}</p>
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
    </nav>

    <div class="card-deck ratings">
      <div v-for="rating in ratings" class="card border-light text-center">
        <div class="card-body px-0 py-2">
          <simple-svg filepath="/img/symbols/ratings.svg" :class="'rating-' + rating.rating + ' mx-4'" />
          
          <img :src="'/img/symbols/' + rating.theme.toLowerCase() + '.svg'" :alt="rating.theme.toLowerCase()" />

          <strong>
            {{ rating.theme.toLowerCase() }}
          </strong>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-dark bg-primary mt-4 mb-2">
      <span class="navbar-brand mb-0 h1">Tips</span>
    </nav>

    <div class="card-columns tips">
      <div class="card" v-for="tip in tips">
        <img v-if="tip.photoUrl" class="card-img-top" :src="tip.photoUrl" alt="Photo">
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-md-8">
              <h4 class="card-title">
                <img :src="'/img/symbols/' + tip.theme.toLowerCase() + '.svg'" :alt="tip.theme.toLowerCase()" />
                {{ tip.theme.toLowerCase() }}
              </h4>
            </div>

            <div class="col-md-4">
              <div class="float-right text-center">
                <simple-svg filepath="/img/symbols/upvote.svg" class="upvote" />
                <h4>2</h4>
              </div>
            </div>
          </div>

          <p class="card-text">{{ tip.description }}</p>
          <p class="card-text">
            <small class="text-muted">
              <b-img :src="getUser(tip.userId).photoUrl" rounded width="32" height="32" alt="img" class="m-1" />
              {{ getUser(tip.userId).name }}, 1 week ago
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

.details .simple-svg {
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

.ratings .simple-svg-wrapper.rating-1 #rating_2, .ratings .simple-svg-wrapper.rating-1 #rating_3, .ratings .simple-svg-wrapper.rating-1 #rating_4, .ratings .simple-svg-wrapper.rating-1 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-2 #rating_1, .ratings .simple-svg-wrapper.rating-2 #rating_3, .ratings .simple-svg-wrapper.rating-2 #rating_4, .ratings .simple-svg-wrapper.rating-2 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-3 #rating_1, .ratings .simple-svg-wrapper.rating-3 #rating_2, .ratings .simple-svg-wrapper.rating-3 #rating_4, .ratings .simple-svg-wrapper.rating-3 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-4 #rating_1, .ratings .simple-svg-wrapper.rating-4 #rating_2, .ratings .simple-svg-wrapper.rating-4 #rating_3, .ratings .simple-svg-wrapper.rating-4 #rating_5 {
  display: none;
}

.ratings .simple-svg-wrapper.rating-5 #rating_1, .ratings .simple-svg-wrapper.rating-5 #rating_2, .ratings .simple-svg-wrapper.rating-5 #rating_3, .ratings .simple-svg-wrapper.rating-5 #rating_4 {
  display: none;
}

.upvote svg {
  height: 32px;
}

.tips .card-title {
  text-transform: capitalize;
  line-height: 62px;
}

.tips .card-title img {
  height: 48px;
}
</style>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  props: {
    users: Array,
    chargers: Array,
    reviews: Array,
    chargerId: Number,
  },
  data() {
    return {
    };
  },
  computed: {
    details() {
      return _.find(this.chargers, item => item.id === this.chargerId);
    },
    ratings() {
      return this.reviews.filter(review => review.chargerId === this.chargerId && review.type === 'RATING');
    },
    tips() {
      return this.reviews.filter(review => review.type === 'TIP');
    }
  },
  methods: {
    getUser(userId) {
      return _.find(this.users, user => user.id === userId);
    },
    formatDuration(date) {
      return moment.duration(moment(date).diff(moment())).humanize(true);
    }
  },
};
</script>
