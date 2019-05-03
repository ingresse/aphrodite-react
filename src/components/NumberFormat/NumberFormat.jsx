/* Packages */
import React, { Component, forwardRef } from 'react';
import propTypes from 'prop-types';
import Formatter from 'react-number-format';

/* Component */
const NumberFormat = forwardRef((props, ref) => {
    return (
        <Formatter
            {...props}
            ref={ref}
        />
    );
});

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
