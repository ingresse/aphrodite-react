/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { COLORS, SIZES } from '../../constants';

/* Component Styles */
const H3Styled = styled.h3`
    font-weight: ${props => (props.bold ? SIZES.XL.FONT_WEIGHT : SIZES.MD.FONT_WEIGHT)};
    font-size  : 20px;
    line-height: 30px;

    padding: 0;
    margin : ${props => props.margin};

    text-align    : ${props => (props.center ? 'center' : null)};
    text-transform: ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (props.primary ? COLORS.PRIMARY : (props.secondary ? COLORS.DARK_GREY : null))};

    ${props => props.styles};
`;

/* Component Itself */
const H3 = (props) => {
    const { className } = props;

    return (
        <H3Styled
            {...props}
            className={`aph-h3 ${className || ''}`}
        />
    );
};

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
