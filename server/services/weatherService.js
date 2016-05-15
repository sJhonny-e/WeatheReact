'use strict'

const WeatherRepository = require('../repositories/weatherRepository').WeatherRepository;
const HistoryRepository = require('../repositories/randomHistoricalWeatherRepository').HistoryRepository;

const weatherRepository = new WeatherRepository();
const historyRepository = new HistoryRepository();

class WeatherService {
	getTemperaturesWithDifferences(location, daysAhead, historyLength) {
	  return Promise.all([
	  	weatherRepository.getWeather(location, daysAhead),
	  	historyRepository.getHistoricalWeather(location, historyLength)
	  ])
	  .then(function(resultArr) {
	  	let forecast = resultArr[0];
	  	let historicalData = resultArr[1];
	  	let averages = {high: 0, low: 0};
	  	
	  	historicalData.map(temps => {
	  		averages.high += temps.high;
	  		averages.low += temps.low;
	  	});
	  	averages.high = Math.round(averages.high / historicalData.length);
	  	averages.low = Math.round(averages.low / historicalData.length);
	  	
	  	return {forecast: forecast, averages: averages};
	  });
	}
}

module.exports.WeatherService = WeatherService;