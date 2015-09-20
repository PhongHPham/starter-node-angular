module.exports = {
  url: 'mongodb://localhost/stencil-dev'
};


/* 
  we're only putting db.js in our config folder but in the future
  you may want to add more config files and call the in server.js

  now that this file is defined and we've called it in our server.js
  using var db = require('./config/db'); you can call items inside of
  it using db.url
*/
