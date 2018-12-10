import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export default class TestAlbum {
  static getArtist() {
    let url = `${BASE_URL}posts`;
    return axios.get(url);
  }
}
