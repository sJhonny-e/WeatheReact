'use strict'
const express = require('express');
const WeatherService = require('./services/weatherService').WeatherService;
const app = express();

//CORS middleware
function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

var service = new WeatherService();

// routes
app.get('/api/weather/:location', function (req, res) {
  let location = req.params.location;
  let daysAhead = Number.parseInt(req.query.daysAhead) || 3;
  let historyLengthDays = req.query.history || 28;

  service.getTemperaturesWithDifferences(location, daysAhead, historyLengthDays)
  	.then(res.send.bind(res));
});


function start() {
  
  let port = process.env.PORT || 3000;
  app.listen(port, function() {
  	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
  });
}

start();
