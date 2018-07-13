<template>
  <div class="container-fluid">
    <h1 class="display-3">{{ details.charger.name }}</h1>

    <div class="row my-4">
      <div class="col-md-6">
        <div class="card bg-light stalls">
          <div class="card-body">
            <h2><simple-svg v-for="n in details.charger.stallCount" filepath="/img/symbols/supercharger.svg" /> <span class="badge">{{ details.charger.stallCount }} stalls</span></h2>
          </div>
        </div>
      </div>

      <div class="col-md-6 text-right">
        <p class="lead text-muted">
          Opened {{ formatDuration(details.charger.dateOpened) }}<br />
          No parking fees
        </p>
      </div>
    </div>

    <div class="card-deck ratings my-4">
      <div v-for="rating in ratings" class="card text-center">
        <div class="card-body">
          <simple-svg filepath="/img/symbols/ratings.svg" :class="'rating-' + rating.rating" />
          
          <img :src="'/img/symbols/' + rating.theme.toLowerCase() + '.svg'" :alt="rating.theme.toLowerCase()" />

          <h4 class="card-title">
            {{ rating.theme.toLowerCase() }}
          </h4>
        </div>
      </div>
    </div>

    <div class="row tips">
      <div class="col-sm-6 col-md-3" v-for="tip in tips">
        <div class="card">
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
  </div>
</template>

<style>
.stalls .simple-svg {
  height: 32px;
  position: relative;
  top: 7px;
}

.stalls .simple-svg-wrapper {
  display: inline-block;
}

.ratings .card-body svg {
  width: 70%;
}

.ratings .card-body img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 128px;
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

.ratings .card-title {
  text-transform: capitalize;
}

.upvote svg {
  height: 32px;
}

.tips .card-img-top {
  height: 320px;
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
    details: Object,
    users: Array,
  },
  data() {
    return {

    };
  },
  computed: {
    ratings() {
      return this.details.reviews.filter(review => review.type === 'RATING');
    },
    tips() {
      return this.details.reviews.filter(review => review.type === 'TIP');
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
