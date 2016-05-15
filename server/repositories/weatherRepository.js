'use strict'
const requestify = require('requestify');
const parser = require('xml2json'); 

const baseUrl = 'http://wxdata.weather.com/wxdata/weather/local/';
const queryStringOptions = 'cc=*&unit=m';	// get full info, in metric units

class WeatherRepository {

	getWeather(locationCode, daysAhead) {
		// TODO: handle errors
		return requestify.get(`${baseUrl}/${locationCode}?${queryStringOptions}&dayf=${daysAhead + 1}`)
			.then(function(res) {
				// TODO: handle errors
				let fullResult = parser.toJson(res.body, { 
					object: true,
					coerce: true 
				});

				//now parsing the JSON to return just the fields we're interested in
				let daysArr = fullResult.weather.dayf.day;
				return daysArr.map( day => { 
					// TODO: move this to a factory
					return {
						dayOffset: day.d,
						high: day.hi,
						low: day.low ,
						desc: day.part[0].t.length? day.part[0].t : day.part[1].t
					}
				});
			});
	}
}

module.exports.WeatherRepository = WeatherRepository;