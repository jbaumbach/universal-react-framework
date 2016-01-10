class Config {
  constructor(props) {
    this.FB_URL = 'react-demo-ergosoft.firebaseIO.com';
  }
  
  firebaseUrl() {
    return this.FB_URL;
  }
  
  firebaseCollectionUrl(collection) {
    return `${this.FB_URL}/${collection}`;
  }
}

export default new Config;
