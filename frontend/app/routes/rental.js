import Route from '@ember/routing/route';

export default class RentalRoute extends Route {
  async model(params) {
    let response = await fetch(`http://localhost:3001/rentals/${params.rental_id}.json`);
    let rental = await response.json();

    return rental;
  }
}