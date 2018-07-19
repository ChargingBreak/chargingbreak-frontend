import { CognitoAuth } from 'amazon-cognito-auth-js';
import { AWS_COGNITO_CONFIG } from '../../constants';

const state = {
  auth: new CognitoAuth(AWS_COGNITO_CONFIG),
  user: null,
  isAuthenticating: false,
};

state.auth.userhandler = {
  onSuccess: () => {
    console.log('Sign in success');
    /* this is already done but, make sure? */
    state.auth.cacheTokensScopes();

    console.log(`Is there a session: ${state.auth.isUserSignedIn()}`);
  },
  onFailure: (err) => {
    console.log('Authentication failure', err);
  },
};

const actions = {
  tryAutoSignIn({ commit }) {
    /* do we need to hand sso? */
    state.auth.parseCognitoWebResponse(window.location.href);

    /* do we have a username? if so try to refresh the session */
    if (state.auth.getUsername()) {
      state.auth.refreshSession(state.auth.signInUserSession.getRefreshToken().getToken());

      const user = state.auth.getCurrentUser();

      commit('setUser', user);
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
};
/* eslint-enable no-param-reassign, no-shadow */

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
