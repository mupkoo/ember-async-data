import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { load } from 'ember-async-data/helpers/load';

export default class DemoComponent extends Component {
  @tracked propertyResult;
  @tracked helperResult;
  @tracked queryComponent;
  @tracked queryWithHelper;

  @service('store') store;

  get findAll() {
    console.log('DemoComponent -> findAll');
    return this.store.findAll('user');
  }

  get users() {
    console.log('DemoComponent -> users');
    return load(this.findAll);
  }

  @action
  toggle(property) {
    this[property] = !this[property];
  }
}
