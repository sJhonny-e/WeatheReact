import React from 'react';
import Temperature from '../Temperature.js';
import styles from '../style.sass';
import { shallow } from 'enzyme';


describe('Temperature', function() {
	
	function createTemperature({val =8, average = 10, type = 'hello'}) {
		return shallow(<Temperature type={type} val={val} average={average} />);
	}

	it('displays the component', () => {
		const temperature = createTemperature({});

		expect(temperature.find(`p`)).to.have.length(1);
	});

	it('displays the temperature value', () => {
		const temperature = createTemperature({});
		expect(temperature.find(`span`).first().text()).to.eql('hello: 8');
	});

	it('displays a minus value when difference is negative', () => {
		const temperature = createTemperature({});
		expect(temperature.find(`span`).last().text()).to.eql('(-2)');
	});

	it('displays a plus value when difference is positive', () => {
		const temperature = createTemperature({val: 13});
		expect(temperature.find(`span`).last().text()).to.eql('(+3)');
	});

	it('doesnt display anything when theres no difference', () => {
		const temperature = createTemperature({val: 6, average: 6});
		expect(temperature.find(`span`)).to.have.length(1);		// just 1 span, containing the temperature
	});
});