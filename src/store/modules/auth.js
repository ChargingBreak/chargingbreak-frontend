import router from '../../router';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const AmazonCognitoAuth = require('amazon-cognito-auth-js');

const awsConfig = {
  UserPoolId: 'us-east-1_Rtshp0rgF',
  ClientId: '4i246thk15heml2i4o4dn7fmr0',
  AppWebDomain: 'auth.chargingbreak.com',
  RedirectUriSignIn: 'https://chargingbreak.com',
  RedirectUriSignOut: 'https://chargingbreak.com',
  TokenScopesArray: ['email', 'openid', 'profile'],
  Storage: new AmazonCognitoIdentity.CookieStorage({
    domain: '.chargingbreak.com',
  }),
};

const state = {
  auth: new AmazonCognitoAuth.CognitoAuth(awsConfig),
};

state.auth.userhandler = {
  onSuccess: () => {
    console.log('Sign in success');
    /* this is already done but, make sure? */
    state.auth.cacheTokensScopes();

    /* should we push a / route? */
    router.push({ path: '/' });
    console.log(`Is there a session: ${state.auth.isUserSignedIn()}`);
  },
  onFailure: (err) => {
    console.log(err);
  },
};

const actions = {
  tryAutoSignIn() {
    /* do we need to hand sso? */
    state.auth.parseCognitoWebResponse(window.location.href);

    /* do we have a username? if so try to refresh the session */
    if (state.auth.getUsername()) {
      state.auth.refreshSession(state.auth.signInUserSession.getRefreshToken().getToken());
    }
  },
};

export default {
  state,
  actions,
};
