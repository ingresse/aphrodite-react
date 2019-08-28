/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { COLORS, SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Component Styles */
const H3Styled = styled.h3`
    box-sizing: border-box;
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES.LG.FONT_SIZE)};
    line-height: ${props => (SIZES.LG.LINE_HEIGHT)};

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
const H3 = forwardRef((props, ref) => {
    const {
        className,
        color,

        ...rest
    } = props;

    return (
        <H3Styled
            {...rest}
            ref={ref}
            aphcolor={color}
            className={`aph-h3 ${className || ''}`}
        />
    );
});

/* Default Properties */
H3.defaultProps = {
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    helper: false,
    margin: '15px 0 5px',
    color: '',
    styles: {},
};

/* Properties Types */
H3.propTypes = {
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
export default H3;
