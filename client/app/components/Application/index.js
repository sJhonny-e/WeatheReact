import React from 'react';
import Header from '../Header';
import DayForecast from '../DayForecast';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

//fake data for now
let forecasts = [{"dayOffset":0,"high":16,"low":7,"desc":"Partly Cloudy"},{"dayOffset":1,"high":18,"low":8,"desc":"Mostly Cloudy"},{"dayOffset":2,"high":19,"low":11,"desc":"Mostly Sunny"},{"dayOffset":3,"high":15,"low":9,"desc":"T-Storms"}];
let averages = {"high":20,"low":9};

const Application = () => {
  return <div className={styles.main}>
    { forecasts.map(f => {
	    return <div className={styles.wrap}>
	    	<DayForecast forecast = {f} averages= {averages}/>
	    </div>
    })}
  </div>;
};

Application.displayName = 'Application';

export default Application;
