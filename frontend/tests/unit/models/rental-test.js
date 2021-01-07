import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | rental', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it has the right rental type', function(assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 1,
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      rental_type: 'Standalone',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.equal(rental.rental_type, 'Standalone');
  });
});
