'use strict'

const minHigh = 15;
const maxHigh = 25;
const minLow = 5;
const maxLow = 15;

class RandomHistoricalWeatherRepository {
	//TODO: get this from an actual database; possibly using mongoose or some ORM
	getHistoricalWeather(location, daysBack) {
		var temps = [];
		for (var i = 0; i < daysBack; i++) {
			temps.push({
				high: random(minHigh, maxHigh),
				low: random(minLow, maxLow)
			})
		}

		return temps;
	}
}

module.exports.HistoryRepository = RandomHistoricalWeatherRepository;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}