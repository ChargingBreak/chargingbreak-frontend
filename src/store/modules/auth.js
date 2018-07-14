import router from '../../router';

const AmazonCognitoIdentity = require('amazon-cognito-auth-js');

const awsConfig = {
  UserPoolId: 'us-east-1_Rtshp0rgF',
  ClientId: '4i246thk15heml2i4o4dn7fmr0',
  AppWebDomain: 'auth.chargingbreak.com',
  RedirectUriSignIn: 'https://chargingbreak.com',
  RedirectUriSignOut: 'https://chargingbreak.com',
  TokenScopesArray: ['email', 'openid', 'profile'],
};

const state = {
  auth: new AmazonCognitoIdentity.CognitoAuth(awsConfig),
};

state.auth.userhandler = {
  onSuccess: () => {
    console.log('Sign in success');
    /* this is already done but, make sure? */
    state.auth.cacheTokensScopes();

    /* should we push a / route? */
    router.push({ path: '/' });
  },
  onFailure: (err) => {
    console.log(err);
  },
};

const actions = {
  tryAutoSignIn() {
    state.auth.parseCognitoWebResponse(window.location.href);
    console.log(`Is there a session: ${state.auth.isUserSignedIn()}`);
  },
};

export default {
  state,
  actions,
};
