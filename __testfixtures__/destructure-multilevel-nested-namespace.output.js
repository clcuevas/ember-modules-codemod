import { oneWay, alias, bool } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  anotherRouter: alias('router'),
  truthy: bool(),
  myProperty: oneWay('truthy')
});
