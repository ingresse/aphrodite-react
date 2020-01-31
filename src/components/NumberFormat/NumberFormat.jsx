/* Packages */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Formatter from 'react-number-format';

/* Component Styles */
import NumberFormatStyled from './NumberFormatStyled';

/* Component */
const NumberFormat = forwardRef((props, ref) => {

    /**
     * Inherit Props
     */
    const {
        className,
        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <NumberFormatStyled
            {...rest}
            className={`aph-number-format ${className || ''}`}
            as={Formatter}
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
    styles           : {},
};

/* Properties Types */
NumberFormat.propTypes = {
    thousandSeparator: PropTypes.string,
    decimalSeparator : PropTypes.string,
    displayType      : PropTypes.string,
    value            : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    styles           : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

/* Exporting Component */
export default NumberFormat;
