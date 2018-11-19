/* Packages */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Formatter from 'react-number-format';

/* Component */
const NumberFormat = (props) => {
    return <Formatter {...props} />;
};

/* Default Props */
NumberFormat.defaultProps = {
    thousandSeparator: '.',
    decimalSeparator : ',',
    displayType      : 'text',
    value            : 0,
};

/* Properties Types */
NumberFormat.propTypes = {
    thousandSeparator: propTypes.string,
    decimalSeparator : propTypes.string,
    displayType      : propTypes.string,
    value            : propTypes.number,
};

/* Exporting Component */
export default NumberFormat;
