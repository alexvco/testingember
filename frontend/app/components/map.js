import { computed } from '@ember/object';
import Component from '@ember/component';
import ENV from 'frontend/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static'

export default class MapComponent extends Component {
  // src is a computed property and has (lng, lat, width, height, zoom) as dependencies
  @computed('lng', 'lat', 'width', 'height', 'zoom')
  get src() {
    let { lng, lat, width, height, zoom } = this;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}