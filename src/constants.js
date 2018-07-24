import { CookieStorage } from 'amazon-cognito-identity-js';

/* eslint-disable import/prefer-default-export */

export const API_BASE_URL = 'https://api.chargingbreak.com';
export const AUTH_REDIRECT_URL = window.location.hostname.indexOf('localhost') !== -1 ? window.location.href : 'https://chargingbreak.com';

export const AWS_COGNITO_CONFIG = {
  UserPoolId: 'us-east-1_Ki4TpCVjN',
  ClientId: '3791tctvhu1p5hb9tqitstbmqi',
  AppWebDomain: 'auth.chargingbreak.com',
  RedirectUriSignIn: AUTH_REDIRECT_URL,
  RedirectUriSignOut: AUTH_REDIRECT_URL,
  TokenScopesArray: ['email', 'openid', 'profile'],
  Storage: new CookieStorage({
    domain: '.chargingbreak.com',
  }),
};

export const LOGIN_URL = `https://auth.chargingbreak.com/login?response_type=code&client_id=${AWS_COGNITO_CONFIG.ClientId}&redirect_uri=${AWS_COGNITO_CONFIG.RedirectUriSignIn}`;

/* eslint-enable import/prefer-default-export */
