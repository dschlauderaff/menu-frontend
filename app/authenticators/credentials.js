import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import config from '../config/environment'

export default Base.extend({
  ajax: service(),

  async authenticate(email, password) {
    let response = await this.ajax.post('/login', {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      data: JSON.stringify({
        email,
        password
      })
    })
    let { user_email: userEmail, token } = response;
    return { userEmail, token };
  },

  async restore(data) {
    return data;
  }
});
