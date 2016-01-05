React Demo Project

Babel
  query: {
    presets: ['es2015', 'react']
  }

Hot Reload
  Uses node.js
  $ npm install -g webpack-dev-server 
  $ npm install react-hot-loader --save
  Bunch of changes to webpack.config.js, "loader" being the weirdest.  These are semi-documented. 
  // This creates a simlink to the global thing you installed
  $ npm link webpack-dev-server --save
  
  $ webpack-dev-server --progress --colors
  

