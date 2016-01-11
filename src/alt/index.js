// The convention for Alt (Flux) is to create an /alt folder and put an index.js file in it so
// the folder can be imported.

// There may be multiple alt instances if you have multiple separate sections of your app. 
// That cuts down on noise if the app gets big.

import Alt from 'alt';

export default new Alt();

