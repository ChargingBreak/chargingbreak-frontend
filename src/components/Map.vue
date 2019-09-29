<template>
  <div>
    <l-map :zoom="zoom" :center="center" ref="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <div v-for="charger in chargers" :key="charger.id">
        <l-marker
          :lat-lng="[charger.latitude, charger.longitude]"
          :icon="chargerIcon" v-on:click="handleChargerClicked(charger.id)"
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
      url: 'https://maps.geocod.io/tiles/geocodio/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            ' Supercharger data graciously provided by Blueshift @ <a href="https://supercharge.info">supercharge.info</a>',
      chargerIcon: L.icon({ iconUrl: '/img/charger.png', iconSize: [42, 56], iconAnchor: [42, 56] }),
    };
  },
};
</script>
