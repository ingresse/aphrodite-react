/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { COLORS, SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Component Styles */
const H2Styled = styled.h2`
    box-sizing: border-box;
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES.XL.FONT_SIZE)};
    line-height: ${props => (SIZES.XL.LINE_HEIGHT)};

    padding: 0;
    margin : ${props => props.margin};

    text-align    : ${props => (props.center ? 'center' : (props.align || null))};
    text-transform: ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (
        (!props.aphcolor && !props.link && !props.helper) ? null :
            colors.getFromTheme(props, props.link ? 'link' : (props.helper ? 'helper' : props.aphcolor))
    )};

    ${props => props.styles};
`;

/* Component Itself */
const H2 = forwardRef((props, ref) => {
    const {
        className,
        color,

        ...rest
    } = props;

    return (
        <H2Styled
            {...rest}
            ref={ref}
            aphcolor={color}
            className={`aph-h2 ${className || ''}`}
        />
    );
});

/* Default Properties */
H2.defaultProps = {
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    helper: false,
    margin: '25px 0 15px',
    color : '',
    styles: {},
};

/* Properties Types */
H2.propTypes = {
    link  : propTypes.bool,
    bold  : propTypes.bool,
    center: propTypes.bool,
    upper : propTypes.bool,
    helper: propTypes.bool,
    margin: propTypes.string,
    color : propTypes.string,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default H2;
