import React from 'react';
import Select from 'react-select';
import "react-select/dist/react-select.css";
import PropTypes from 'prop-types';

const BandC = props => {

	return (<Select
			{...props}

			onChange={props.changed}
			options={props.options}
			selectValue={props.selectValue}
			placeholder={props.placeholder}
			searchable={props.searchable}
			clearable={props.clearable}
			pageSize={props.pageSize}
		/>

	);
}

BandC.propTypes = {
	changed: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	selectValue: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	searchable: PropTypes.bool.isRequired,
	clearable: PropTypes.bool.isRequired,
	pageSize: PropTypes.number.isRequired
}

export default BandC;