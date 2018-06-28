import React from 'react';
import {number} from 'prop-types';

const ResultOhmValue = (props) => {

		return (
		<div>
			<h1>Resistance Values</h1>
			<p>Resistance : {props.value}  &#8486;</p>
			<p>Minimum value: {props.min} &#8486;</p>
			<p>Maximum  value: {props.max} &#8486;</p>
		</div>
	);

}

export default ResultOhmValue;

ResultOhmValue.propTypes = {
	value: number.isRequired,
	min: number.isRequired,
	max: number.isRequired
}
