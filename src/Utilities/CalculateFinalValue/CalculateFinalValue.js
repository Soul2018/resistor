import PropTypes from 'prop-types';

  const CalculateOhmValue = ([bandAValue=0, bandBValue=0, bandCValue=1, bandDValue=20]) => {

	const initialValue = ((bandAValue * 10) + bandBValue) * bandCValue;
	const currentTol = initialValue * bandDValue/100;
	const minValue = initialValue - currentTol;
	const maxValue = initialValue + currentTol;

	return {
		 minValue,
		 maxValue,
		 initialValue
	};
}

CalculateOhmValue.propTypes = {
	bandAValue: PropTypes.number.isRequired,
	bandBValue: PropTypes.number.isRequired,
	bandCValue: PropTypes.number.isRequired,
	bandDValue: PropTypes.string.isRequired,

}

export default CalculateOhmValue;