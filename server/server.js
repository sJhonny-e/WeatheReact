'use strict'
const express = require('express');
const app = express();
// Further Configuration here...

const WeatherService = require('./services/weatherService').WeatherService;
var service = new WeatherService();

// routes
app.get('/api/weather/:location', function (req, res) {
  let location = req.params.location;
  let daysAhead = Number.parseInt(req.query.daysAhead) || 3;
  let historyLengthDays = req.query.history || 28;

  service.getTemperaturesWithDifferences(location, daysAhead, historyLengthDays)
  	.then(function(result) {
  		res.send(result);
  	});
});


function start() {
  //routes.setup(app, handlers);
  let port = process.env.PORT || 3000;
  app.listen(port, function() {
  	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
  });
}

start();
