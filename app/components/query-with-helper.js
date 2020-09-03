import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class QueryWithHelperComponent extends Component {
  @service('store') store;

  get query() {
    console.log('QueryWithHelperComponent -> query');
    return this.store.query('user', { filter: { id: this.args.ids } });
  }
}
