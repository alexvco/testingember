import { computed } from '@ember/object';
import Component from '@ember/component';

export default class RentalsFilterComponent extends Component {
  @computed('rentals', 'query')
  get results() {
    let { rentals, query } = this;

    if (query) {
      rentals = rentals.filter(rental => rental.title.includes(query));
    }

    return rentals;
  }
}
