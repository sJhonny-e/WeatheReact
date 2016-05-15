'use strict'
const requestify = require('requestify');
const parser = require('xml2json'); 

const baseUrl = 'http://wxdata.weather.com/wxdata/weather/local/';
const queryStringOptions = 'cc=*&unit=m';	// get full info, in metric units

class WeatherRepository {

	getWeather(locationCode, daysAhead) {
		return requestify.get(`${baseUrl}/${locationCode}?${queryStringOptions}&dayf=${daysAhead + 1}`)
			.then(function(res) {
				let fullResult = parser.toJson(res.body, { object: true });

				//now parsing the JSON to return just the fields we're interested in
				let daysArr = fullResult.weather.dayf.day;
				return daysArr.map( day => { 
					return {
						dayOffset: day.d,
						high: day.hi,
						low: day.low ,
						desc: day.part[0].t
					}
				});
			});
	}
}

module.exports.WeatherRepository = WeatherRepository;