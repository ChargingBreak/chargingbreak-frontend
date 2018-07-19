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

    <div v-if="isAuthenticating" class="btn btn-primary btn-lg mr-3">
      <i class="fa fa-refresh fa-spin"></i>
    </div>

    <a
      v-if="!isAuthenticating && !isAuthenticated"
      :href="loginUrl"
      class="btn btn-primary btn-lg mr-3"
    >Log in</a>
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
import { LOGIN_URL } from '../constants';

export default {
  name: 'about',
  props: {
    isAuthenticating: Boolean,
    isAuthenticated: Boolean,
  },
  data() {
    return {
      loginUrl: LOGIN_URL,
    };
  },
};
</script>
