// modules ========

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ======


var db = require('.no-/config/db');

// set our port

var port = process.env.PORT || 8080;

//mongoose.connect(db.url); // enter my own credentials; uncomment after
//you enter in your own credentials in config/db.js

// get all data/stuff of the body (POST) parameters
// parse application/json

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes =================

require('./app/routes')(app); //conigure our routes

// start app =================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
module.exports = app;
