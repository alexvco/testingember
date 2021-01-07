import { inject as service } from '@ember/service';
import Component from '@ember/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router
  get currentURL() {
    // this.router.currentURL is an ember thing that returns the path,
    // the following command returns a url object (it takes 2 args: the path and the origin)
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.text) {
      url.searchParams.set('text', this.text);
    }

    if (this.hashtags) {
      url.searchParams.set('hashtags', this.hashtags);
    }

    if (this.via) {
      url.searchParams.set('via', this.via);
    }

    return url;
  }
}