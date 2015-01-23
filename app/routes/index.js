import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [{
      name: "yes",
      type: "thing"
    }]
  }
});
