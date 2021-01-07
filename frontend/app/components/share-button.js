import Component from '@ember/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  get currentURL() {
    return window.location.href;
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.attrs.text) {
      url.searchParams.set('text', this.attrs.text);
    }

    if (this.attrs.hashtags) {
      url.searchParams.set('hashtags', this.attrs.hashtags);
    }

    if (this.attrs.via) {
      url.searchParams.set('via', this.attrs.via);
    }

    return url;
  }
}