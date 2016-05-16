const $ = require('jquery');

class WeatherRepository {
	constructor(baseUrl = 'http://localhost:3000') {
		this.baseUrl = baseUrl;
	}

	getWeather(locationCode, daysAhead) {
		let url = `${this.baseUrl}/api/weather/${locationCode}?`;
		if (daysAhead) url += `daysAhead=${daysAhead}`;
		
		return $.getJSON(url)
			.then(kuku => {
				console.log(`got ${kuku}`);
				return kuku;
			});
	}
}

// TODO: returning a factory object because we need to mock this in our tests, and this is the most convenient way to do it.
// change this to something more reasonable in a real-world scenario
export default {
	createWeatherRepository(...args) {
		return new WeatherRepository(...args);
	}
};