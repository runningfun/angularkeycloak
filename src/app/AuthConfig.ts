import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/users',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'publicclient',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',

  oidc: true,

  loginUrl: 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm/account',

  tokenEndpoint: 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm/protocol/openid-connect/token',
};
