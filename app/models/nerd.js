// grab the mongoose module
var mongoose = require('mongoose');

// this is all we need to create records in our database

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
  name: {
    type: String,
    default: ''
  }
});

/*
  use the app folder to add more models, controllers, routes, and 
  anything backend (Node) specific to app


*/
