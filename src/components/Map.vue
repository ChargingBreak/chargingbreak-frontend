<template>
  <div>
    <l-map :zoom="zoom" :center="center" ref="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <div v-for="charger in chargers" :key="charger.location_id">
        <l-marker
          :lat-lng="charger.coordinate"
          :icon="chargerIcon" v-on:click="handleChargerClicked(charger.location_id)"
        ></l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet';
import 'leaflet.locatecontrol';

export default {
  name: 'charger-map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    chargers: Array,
    handleChargerClicked: Function,
  },
  mounted() {
    const map = this.$refs.map.mapObject;
    L.control.locate({
      locateOptions: {
        maxZoom: 10,
      },
    }).addTo(map);
  },
  data() {
    return {
      zoom: 8,
      center: L.latLng(38.911936, -77.016719),
      url: 'https://tile-cdn.geocod.io/tiles/geocodio/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            ' Supercharger data graciously provided by Blueshift @ <a href="https://supercharge.info">supercharge.info</a>',
      chargerIcon: L.icon({ iconUrl: '/img/supercharger.png', iconSize: [29, 30], iconAnchor: [29, 30] }),
    };
  },
};
</script>
