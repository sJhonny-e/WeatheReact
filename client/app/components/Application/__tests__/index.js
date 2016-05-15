import React from 'react';
import Application from '../index.js';
import styles from '../style.sass';
import { shallow, mount } from 'enzyme';
import WeatherRepositoryFactory from '../WeatherRepository';


describe('Application', function() {
  
  function mockForecast(i) {
  	return {dayOffset: i, high: 15 + i, low: 13 - i, desc: 'kuku'};
  }

  it('displays the component', () => {
    const application = shallow(<Application />);

    expect(application.find(`.${styles.main}`)).to.have.length(1);
  });

  it('gets the forecasts from the repository and create child elements', () => {
    // mock the repository. In the real world, we'd use something like sinon for this
    WeatherRepositoryFactory.createWeatherRepository = () => {
    	return { 
    		getWeather() {
		    	let result = {forecast: [], averages: {high: 20, low: 10}};
		    	for (var i = 0; i < 7; i++) {
		    		result.forecast.push(mockForecast(i));
		    	}

		    	// for some goddamn reason, Promise.resolve does NOT work in phantomjs and never returns! 
		    	// so doing this hack...
		    	return {
		    		then: function(callback) {
		    			callback(result);
		    		}
		    	};
    		}
    	}
    };
    const application = mount(<Application />);
    expect(application.find(`.${styles.wrap}`)).to.have.length(7);
  });
});
