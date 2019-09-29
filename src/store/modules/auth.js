import { CognitoAuth } from 'amazon-cognito-auth-js';
import { AWS_COGNITO_CONFIG } from '../../constants';

const state = {
  auth: createCognitoAuth(),
  user: null,
  jwt: null,
  isAuthenticating: false,
};

function createCognitoAuth() {
  const auth = new CognitoAuth(AWS_COGNITO_CONFIG);

  auth.userhandler = {
    onSuccess: (result) => {
      console.log('Sign in success', result);
      /* this is already done but, make sure? */
      state.auth.cacheTokensScopes();

      console.log(`Is there a session: ${state.auth.isUserSignedIn()}`);

      // Handle post-SSO authentication
      if (window.location.search.indexOf('code=') !== -1) {
      	window.location.href = '/';
      }
    },
    onFailure: (err) => {
      console.log('Authentication failure', err);
    },
  };

  return auth;
}

const actions = {
  tryAutoSignIn({ commit }) {
    /* do we need to hand sso? */
    state.auth.parseCognitoWebResponse(window.location.href);

    /* do we have a username? if so try to refresh the session */
    if (state.auth.getUsername()) {
      state.auth.refreshSession(state.auth.signInUserSession.getRefreshToken().getToken());

      const user = state.auth.getCurrentUser();

      commit('setUser', user);

      const jwt = state.auth.signInUserSession.getIdToken().getJwtToken();
      if (jwt) {
        commit('setJWT', jwt);
      }
    }
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  isAuthenticating(state) {
    state.isAuthenticating = true;
  },
  setUser(state, user) {
    state.user = user;
    state.isAuthenticating = false;
  },
  setJWT(state, jwt) {
    state.jwt = jwt;
  },
};
/* eslint-enable no-param-reassign, no-shadow */

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
