import React from 'react';
import DayForecast from '../index.js';
import styles from '../style.sass';
import { shallow } from 'enzyme';


describe('DayForecast', function() {
	const forecast = { desc: 'kuku', high: 5, low: 7, dayOffset: 5};
	const averages = {high: 15, low: 12};

	it('displays the component', () => {
		const dayForecast = shallow(<DayForecast forecast={forecast} averages={averages}/>);
    	expect(dayForecast.find(`.${styles.main}`)).to.have.length(1);
	});

	it('displays the children', () => {
		const dayForecast = shallow(<DayForecast forecast={forecast} averages={averages}/>);

		//has a first li with the description
    	expect(dayForecast.find('li').first().text()).to.eql('kuku');
    	
    	// has 2 Temperature children with proper values
    	expect(dayForecast.find('Temperature[type="Low"][val=7][average=12]')).to.have.length(1);
    	expect(dayForecast.find('Temperature[type="High"][val=5][average=15]')).to.have.length(1);
	});

	// TODO: tests for 'today', 'Sunday' etc..
});
