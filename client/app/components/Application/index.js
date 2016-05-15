import React from 'react';
import DayForecast from '../DayForecast';
import WeatherRepositoryFactory from './WeatherRepository';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

class Application extends React.Component {
  constructor() {
  	super();
	this.repository = WeatherRepositoryFactory.createWeatherRepository();
	this.state = {forecasts: [], averages: {}};
  }

  componentDidMount = function() {
  	this.repository.getWeather('UKXX0085', 4)
  		.then((data) => {
  			this.setState({forecasts: data.forecast, averages: data.averages});
  		});
  }

  render = function() {
  	const forecasts = this.state.forecasts;
  	const averages = this.state.averages;	

	return <div className={styles.main}>
	{ forecasts.map(f => {
	    return <div key={f.dayOffset} className={styles.wrap}>
	    	<DayForecast forecast = {f} averages= {averages}/>
	    </div>
	})}
	</div>;
  }
};

Application.displayName = 'Application';

export default Application;
