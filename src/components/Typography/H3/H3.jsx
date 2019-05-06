/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { COLORS, SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Component Styles */
const H3Styled = styled.h3`
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES.LG.FONT_SIZE)};
    line-height: ${props => (SIZES.LG.LINE_HEIGHT)};

    padding: 0;
    margin : ${props => props.margin};

    text-align    : ${props => (props.center ? 'center' : null)};
    text-transform: ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (props.link ? colors.get('secondary') : null)};

    ${props => props.styles};
`;

/* Component Itself */
const H3 = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <H3Styled
            {...props}
            ref={ref}
            className={`aph-h3 ${className || ''}`}
        />
    );
});

/* Default Properties */
H3.defaultProps = {
    primary  : false,
    secondary: false,
    bold     : false,
    center   : false,
    upper    : false,
    margin   : '15px 0 5px',
    styles   : {},
};

/* Properties Types */
H3.propTypes = {
    primary  : propTypes.bool,
    secondary: propTypes.bool,
    bold     : propTypes.bool,
    center   : propTypes.bool,
    upper    : propTypes.bool,
    margin   : propTypes.string,
    styles   : propTypes.object,
};

/* Exporting */
export default H3;
