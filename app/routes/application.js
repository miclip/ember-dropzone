import Ember from 'ember';

export default Ember.Route.extend({
 
 

  actions: {
    reloadModels: function(file, res) {
      Ember.Logger.info('reloadModels', file, res);
      this.refresh();
    }
  }
});
