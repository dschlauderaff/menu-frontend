import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grand';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://localhost:3000/oauth/token'
});
