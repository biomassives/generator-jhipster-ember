var ApplicationController = Ember.ObjectController.extend({
  error: '',

  hasError: function() {
    return this.get('error').toString().length > 0;
  }.property('error'),

  hasRootRole: function () {
    var roles = this.get('session.roles');
    if (!Ember.isEmpty(roles)) {
      if (roles instanceof Array) {
        return roles.contains('ROOT');
      } else {
        return roles.split(',').contains('ROOT');
      }
    }
  }.property('session.roles'),

  hasAdminRole: function () {
    var roles = this.get('session.roles');
    if (!Ember.isEmpty(roles)) {
      if (roles instanceof Array) {
        return roles.contains('ADMIN');
      } else {
        return roles.split(',').contains('ADMIN');
      }
    }
  }.property('session.roles')
});

export default ApplicationController;
