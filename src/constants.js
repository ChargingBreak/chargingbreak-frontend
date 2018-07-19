import { CookieStorage } from 'amazon-cognito-identity-js';

/* eslint-disable import/prefer-default-export */

export const API_BASE_URL = 'https://api.chargingbreak.com';

export const AWS_COGNITO_CONFIG = {
  UserPoolId: 'us-east-1_Rtshp0rgF',
  ClientId: '4i246thk15heml2i4o4dn7fmr0',
  AppWebDomain: 'auth.chargingbreak.com',
  RedirectUriSignIn: 'https://chargingbreak.com',
  RedirectUriSignOut: 'https://chargingbreak.com',
  TokenScopesArray: ['email', 'openid', 'profile'],
  Storage: new CookieStorage({
    domain: '.chargingbreak.com',
  }),
};

export const LOGIN_URL = `https://auth.chargingbreak.com/login?response_type=code&client_id=${AWS_COGNITO_CONFIG.ClientId}&redirect_uri=${AWS_COGNITO_CONFIG.RedirectUriSignIn}`;

/* eslint-enable import/prefer-default-export */
