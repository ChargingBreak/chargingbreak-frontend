const AmazonCognitoIdentity = require('amazon-cognito-auth-js');

const awsConfig = {
  UserPoolId: 'us-east-1_Rtshp0rgF',
  ClientId: '4i246thk15heml2i4o4dn7fmr0',
  AppWebDomain: 'auth.chargingbreak.com',
  RedirectUriSignIn: 'https://chargingbreak.com',
  RedirectUriSignOut: 'https://chargingbreak.com',
  TokenScopesArray: ['email', 'openid', 'profile'],
};

const auth = new AmazonCognitoIdentity.CognitoAuth(awsConfig);

auth.userhandler = {
  onSuccess: () => {
    console.log('Sign in success');
  },
  onFailure: (err) => {
    console.log(err);
  },
};

const actions = {
  tryAutoSignIn() {
    auth.parseCognitoWebResponse(window.location.href);
  },
};

export default {
  actions,
};
