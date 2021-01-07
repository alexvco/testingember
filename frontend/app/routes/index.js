import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:3001/rentals.json');
    let rentals = await response.json();

    return rentals;
  }
}