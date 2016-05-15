import React from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';


class DayForecast extends React.Component {
  render() {
	  let forecast = this.props.forecast;
	  return <header className={styles.main}>
		<h1 className={styles.title}>Some day</h1>

	    <div className={styles.wrap}>
	      <ul>
	      	<li>{forecast.desc}</li>
	      	<li>high: {forecast.high}</li>
	      	<li>low: {forecast.low}</li>
	      </ul>
	      
	    </div>
	  </header>;
  }
}

// DayForecast.displayName = 'DayForecast';

export default DayForecast;
