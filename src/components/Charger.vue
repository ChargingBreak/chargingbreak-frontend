<template>
  <div class="container-fluid">
    <h1 class="display-3">{{ details.charger.name }}</h1>

    <div class="row my-4">
      <div class="col-md-6">
        <div class="card bg-light">
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

    <div class="card-deck ratings  my-4">
      <div v-for="rating in ratings" class="card text-center">
        <div class="card-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" x="0px" y="0px"><path d="M40.61328,47.59375l-3.83887-.55762-1.71631-3.47852a.99984.99984,0,0,0-1.79346,0l-1.71729,3.47852-3.83887.55762a1.00028,1.00028,0,0,0-.55469,1.70605l2.77783,2.70752-.65576,3.82373a1.00019,1.00019,0,0,0,1.45117,1.0542l3.43408-1.80518,3.43359,1.80518a1.00019,1.00019,0,0,0,1.45117-1.0542l-.65576-3.82373L41.168,49.2998a1.00028,1.00028,0,0,0-.55469-1.70605Zm-3.99609,3.34814a1.00281,1.00281,0,0,0-.2876.88525l.40234,2.34473-2.10547-1.10693a.999.999,0,0,0-.93066,0l-2.106,1.10742.40234-2.34521a1.00281,1.00281,0,0,0-.2876-.88525L30.001,49.28174l2.354-.3418a.99961.99961,0,0,0,.75293-.54736l1.05322-2.13281,1.05225,2.13281a1.00041,1.00041,0,0,0,.75342.54736l2.354.3418ZM24.77441,47.59375l-3.83887-.55762-1.71729-3.47852a1.04131,1.04131,0,0,0-1.79346,0L15.7085,47.03613l-3.83887.55762a1.00028,1.00028,0,0,0-.55469,1.70605l2.77783,2.70752L13.437,55.83105a1.00019,1.00019,0,0,0,1.45117,1.0542l3.43359-1.80518,3.43359,1.80518a1.00019,1.00019,0,0,0,1.45117-1.0542l-.65576-3.82373,2.77783-2.70752a1,1,0,0,0-.5542-1.70605Zm-3.99609,3.34814a1.00177,1.00177,0,0,0-.28809.88525l.40234,2.34473-2.10547-1.10693a1.00091,1.00091,0,0,0-.93066,0L15.751,54.17188l.40234-2.34473a1.00281,1.00281,0,0,0-.2876-.88525l-1.70361-1.66016,2.354-.3418a1.00041,1.00041,0,0,0,.75342-.54736l1.05225-2.13281L19.375,48.39258a.99961.99961,0,0,0,.75293.54736l2.35352.3418ZM72.2915,47.59375l-3.83887-.55762-1.71729-3.47852a1.04131,1.04131,0,0,0-1.79346,0l-1.71631,3.47852-3.83887.55762A1.00028,1.00028,0,0,0,58.832,49.2998l2.77783,2.70752-.65576,3.82373a1.00031,1.00031,0,0,0,1.45117,1.0542l3.43359-1.80518,3.43408,1.80518a1.00019,1.00019,0,0,0,1.45117-1.0542l-.65576-3.82373,2.77783-2.70752a1.00028,1.00028,0,0,0-.55469-1.70605Zm-3.99609,3.34814a1.00281,1.00281,0,0,0-.2876.88525l.40234,2.34521-2.106-1.10742a1.00091,1.00091,0,0,0-.93066,0l-2.10547,1.10693.40234-2.34473a1.00281,1.00281,0,0,0-.2876-.88525L61.6792,49.28174l2.354-.3418a1.00041,1.00041,0,0,0,.75342-.54736l1.05225-2.13281,1.05322,2.13281a.99961.99961,0,0,0,.75293.54736l2.354.3418Zm19.835-3.34814-3.83887-.55762L82.5752,43.55762a.99984.99984,0,0,0-1.79346,0l-1.71729,3.47852-3.83887.55762a1,1,0,0,0-.5542,1.70605l2.77783,2.70752-.65576,3.82373a1.00019,1.00019,0,0,0,1.45117,1.0542l3.43359-1.80518,3.43359,1.80518a1.00019,1.00019,0,0,0,1.45117-1.0542l-.65576-3.82373,2.77783-2.70752a1.00028,1.00028,0,0,0-.55469-1.70605Zm-3.99609,3.34814a1.00281,1.00281,0,0,0-.2876.88525l.40234,2.34473-2.10547-1.10693a.999.999,0,0,0-.93066,0l-2.10547,1.10693.40234-2.34473a1.00177,1.00177,0,0,0-.28809-.88525l-1.70312-1.66016,2.35352-.3418a.99961.99961,0,0,0,.75293-.54736l1.05322-2.13281,1.05225,2.13281a1.00041,1.00041,0,0,0,.75342.54736l2.354.3418ZM56.45215,47.59375l-3.83838-.55762-1.71729-3.47852a1.04089,1.04089,0,0,0-1.793,0l-1.71729,3.47852-3.83838.55762a1.00028,1.00028,0,0,0-.55469,1.70605L45.771,52.00732l-.65576,3.82373a1.00019,1.00019,0,0,0,1.45117,1.0542L50,55.08008l3.43359,1.80518a1.00019,1.00019,0,0,0,1.45117-1.0542L54.229,52.00732l2.77783-2.70752a1.00028,1.00028,0,0,0-.55469-1.70605Zm-3.99609,3.34814a1.00281,1.00281,0,0,0-.2876.88525l.40234,2.34473-2.10547-1.10693a1.00091,1.00091,0,0,0-.93066,0L47.4292,54.17188l.40234-2.34473a1.00281,1.00281,0,0,0-.2876-.88525l-1.70361-1.66016,2.35352-.3418a.99878.99878,0,0,0,.75293-.54736L50,46.25928l1.05322,2.1333a.99878.99878,0,0,0,.75293.54736l2.35352.3418ZM92,37H8a3.00328,3.00328,0,0,0-3,3V60a3.00328,3.00328,0,0,0,3,3H42.88721l6.26318,10.084a1.00047,1.00047,0,0,0,1.69922,0L57.1123,63H92a3.00328,3.00328,0,0,0,3-3V40A3.00328,3.00328,0,0,0,92,37Zm1,23a1.0013,1.0013,0,0,1-1,1H57.1123a1.98694,1.98694,0,0,0-1.69873.94434L50,70.66064l-5.41357-8.71631v.00049A1.9863,1.9863,0,0,0,42.8877,61H8a1.0013,1.0013,0,0,1-1-1V40a1.0013,1.0013,0,0,1,1-1H92a1.0013,1.0013,0,0,1,1,1Z"></path></svg>
          
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
            <h4 class="card-title">
              <img :src="'/img/symbols/' + tip.theme.toLowerCase() + '.svg'" :alt="tip.theme.toLowerCase()" />
              {{ tip.theme.toLowerCase() }}
            </h4>

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
.card .simple-svg {
  height: 32px;
  position: relative;
  top: 7px;
}

.card .simple-svg-wrapper {
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

.ratings .card-title {
  text-transform: capitalize;
}

.tips .card-img-top {
  height: 320px;
}

.tips .card-body {
  height: 220px;
}

.tips .card-title {
  text-transform: capitalize;
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
