import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  session: service(),
  store: service(),

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('store')
        .queryRecord('user', { me: true })
        .then((user) => {
          this.set('currentUser', user);
        })
    }
  }


});
