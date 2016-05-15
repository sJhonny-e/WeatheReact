import React from 'react';
import Temperature from './Temperature';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class DayForecast extends React.Component {

  render = function() {
	  let forecast = this.props.forecast;
	  let averages = this.props.averages;
	  return <header className={styles.main}>
		<h1 className={styles.title}>{ this._getDay() }</h1>

	    <div className={styles.wrap}>
	      <ul>
	      	<li>{forecast.desc}</li>
	      	<li><Temperature type="High" val={forecast.high} average={averages.high} /></li>
	      	<li><Temperature type="Low" val={forecast.low} average={averages.low} /></li>
	      </ul>
	      
	    </div>
	  </header>;
  }

  _getDay() {
  	if (this.props.forecast.dayOffset === 0)
  		return 'Today';

  	let date = new Date();
  	date.setDate(date.getDate() + this.props.forecast.dayOffset);
  	return DAYS_OF_WEEK[date.getDay()];
  }
}

// DayForecast.displayName = 'DayForecast';

export default DayForecast;
