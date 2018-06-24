import React from 'react';
import  './Resistor.css';
import PropTypes from 'prop-types';

 const Resistor = (props) => {

        return (
          <img src={props.source} className={props.cla} alt={props.alt} />
        );
};

Resistor.propTypes = {
	source: PropTypes.string.isRequired,
	cla: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired


}

export default Resistor;