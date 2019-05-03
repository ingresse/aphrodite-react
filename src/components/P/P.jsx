/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const PStyled = styled.h1`
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES[props.small ? 'SM' : 'MD'].FONT_SIZE)};
    line-height: ${props => (SIZES[props.small ? 'SM' : 'MD'].LINE_HEIGHT)};

    padding: 0;
    margin : ${props => props.margin};

    text-align    : ${props => (props.center ? 'center' : null)};
    text-transform: ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (props.primary ? colors.get('primary') : null)};

    ${props => props.styles};
`;

/* Component Itself */
const P = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <PStyled
            {...props}
            ref={ref}
            className={`aph-p ${className || ''}`}
        />
    );
});

/* Default Properties */
P.defaultProps = {
    primary  : false,
    secondary: false,
    bold     : false,
    center   : false,
    upper    : false,
    small    : false,
    margin   : '10px 0',
    styles   : {},
};

/* Properties Types */
P.propTypes = {
    primary  : propTypes.bool,
    secondary: propTypes.bool,
    bold     : propTypes.bool,
    center   : propTypes.bool,
    upper    : propTypes.bool,
    small    : propTypes.bool,
    margin   : propTypes.string,
    styles   : propTypes.object,
};

/* Exporting */
export default P;
