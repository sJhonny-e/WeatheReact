'use strict'
var express = require('express');
var app = express();
// Further Configuration here...

// routes
app.get('/api/weather/:location', function (req, res) {
  let location = req.params.location;
  let daysAhead = req.query.daysAhead;
  res.send(`Hello! your location is ${location} and daysAhead is ${daysAhead}`);
});


function start() {
  //routes.setup(app, handlers);
  var port = process.env.PORT || 3000;
  app.listen(port, function() {
  	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
  });
}

start();
