import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  sessionAccount: service(),
  ajax: service(),

  actions: {
    async signUp(event) {
      event.preventDefault();
      let { email, password } = this;
      let user = this.store.createRecord('user', { email, password });
      await user.save();
      await this.get('session').authenticate('authenticator:oauth2', email, password)
        .then(() => {
          this.get('sessionAccount').loadCurrentUser();
        });
    }
  }
})
