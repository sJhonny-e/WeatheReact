'use strict'
const express = require('express');
const app = express();
// Further Configuration here...
const WeatherRepository = require('./repository/weatherRepository').WeatherRepository;
const repository = new WeatherRepository();

// routes
app.get('/api/weather/:location', function (req, res) {
  let location = req.params.location;
  let daysAhead = req.query.daysAhead || 0;
  repository.getWeather(location, daysAhead)
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
