import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3001';
  headers = {
    'Content-Type': 'application/json'
  };

  // we will need to override Ember Data's buildURL method so we get a `.json` extension. 
  // Inside of buildURL, we will call super.buildURL(...args) to invoke the JSONAPIAdapter default implementation of buildURL
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
