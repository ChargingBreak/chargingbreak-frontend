<template>
  <div class="text-center">
    <div class="logo mx-auto mt-5">
      <simple-svg class="hammock" filepath="/img/symbols/hammock.svg" />
      <simple-svg class="sun" filepath="/img/symbols/sun.svg" />
    </div>

    <h1 class="display-3">Charging Break</h1>

    <p class="lead mx-5 my-4">
      Let's help you get the most out of your charging stop, with
      <strong>tips</strong>, <strong>ratings</strong> and other details.

      Carefully curated by other EV owners like you.
    </p>

    <button type="button" class="btn btn-primary btn-lg mr-3"
      v-on:click="onLoginClicked">Log in</button>
  </div>
</template>

<style>
.logo {
  width: 256px;
  height: 256px;
  position: relative;
}

.sun {
  position: absolute;
  top: 10px;
  left: 55px;
  width: 80px;
  height: 80px;
  animation: spin 7s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: 'about',
  methods: {
    onLoginClicked() {
      const domain = 'https://chargingbreak.com';
      const clientid = '4i246thk15heml2i4o4dn7fmr0';
      window.location.href = `https://auth.chargingbreak.com/login?response_type=code&client_id=${clientid}&redirect_uri=${domain}`;
    },
  },
};
</script>
