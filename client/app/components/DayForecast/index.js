import React from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';


const DayForecast = () => {
  return <header className={styles.main}>
	<h1 className={styles.title}>Some day</h1>

    <div className={styles.wrap}>
      <ul>
      	<li>Some description</li>
      	<li>some high</li>
      	<li>some low</li>
      </ul>
      
    </div>
  </header>;
};

DayForecast.displayName = 'DayForecast';

export default DayForecast;
