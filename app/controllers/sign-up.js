import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  session: service(),
  sessionAccount: service(),
  ajax: service(),

  showErrors: computed('_showErrors', {
    get() {
      return this._showErrors || { email: false, password: false };
    },
    set(key, value) {
      this.set('_showErrors', value);
      return this._showErrors;
    }
  }),

  actions: {
    async signUp(event) {
      event.preventDefault();
      await this.model.save();
      await this.get('session').authenticate('authenticator:oauth2', email, password)
        .then(() => {
          this.get('sessionAccount').loadCurrentUser();
        });
    }
  }
})
