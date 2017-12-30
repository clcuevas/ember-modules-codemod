import Ember from 'ember';

const { Controller, computed } = Ember;
const { alias, oneWay } = computed;

export default Controller.extend({
  anotherRouter: alias('router'),
  truthy: computed.bool(),
  myProperty: oneWay('truthy')
});
