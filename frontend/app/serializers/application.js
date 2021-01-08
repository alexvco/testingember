import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  // Error: Assertion Failed: Your payload for 'rental' contains 'rental_type', but your serializer is setup to look for 'rental-type' 
  // We add/overwrite this method in order to prevent Ember Data from customizing our attribute keys and prevent the error above 
  keyForAttribute(key) { 
    return key; 
  }
}
