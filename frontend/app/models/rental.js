import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr rental_type;
  @attr image;
  @attr bedrooms;
  @attr description;
}
