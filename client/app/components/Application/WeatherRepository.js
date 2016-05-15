const $ = require('jquery');

class WeatherRepository {
	constructor(baseUrl = 'http://localhost:3000') {
		this.baseUrl = baseUrl;
	}

	getWeather(locationCode, daysAhead) {
		let url = `${this.baseUrl}/api/weather/${locationCode}?`;
		if (daysAhead) url += `daysAhead=${daysAhead}`;
		console.log(`getting json from ${url}`);
		return $.getJSON(url)
			.then(kuku => {
				console.log(`got ${kuku}`);
				return kuku;
			});

	}
}

export default WeatherRepository;