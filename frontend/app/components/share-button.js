import Component from '@ember/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  get currentURL() {
    return window.location.href;
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