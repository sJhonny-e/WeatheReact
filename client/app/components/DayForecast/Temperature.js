import React from 'react';

class Temperature extends React.Component {
	render() {
		let change = this.props.val - this.props.average;
		if (change > 0) change = `+${change}`;
		return <p><span>{this.props.type}: {this.props.val}</span> { (change !== 0)? <span>({change})</span> : null }</p> ;
			
	}
}

export default Temperature;