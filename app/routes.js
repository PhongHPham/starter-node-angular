// grab the nerd model we jsut created 
var Nerd = require(__dirname + '/models/nerd');

module.exports = function(app) {

  // server routes ==================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/nerds', function(req, res) {
    // use mongoose to get all nerds in the database
    Nerd.find(function(err, nerds) {

      // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(nerds); //return all nerds in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete) 

  // frontend routes =================================
  // route to handle all angular requests

  /* 
    this is wher eyou can handle your API route. for all other (*),
    we will send the user to our frontend application where Angular 
    can handle routing them from there
  */
  app.get('*', function(req, res) {
    res.sendFile('/Users/Hobbes/Desktop/hr/practice/starter-node-angular/public/views/index.html'); //load our public/index.html file
  });

};
