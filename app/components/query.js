import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { load } from 'ember-async-data/helpers/load';

export default class QueryComponent extends Component {
  @service('store') store;

  get query() {
    console.log('QueryComponent -> query');
    return this.store.query('user', { filter: { id: this.args.ids } });
  }

  get users() {
    console.log('QueryComponent -> users');
    return load(this.query);
  }
}
