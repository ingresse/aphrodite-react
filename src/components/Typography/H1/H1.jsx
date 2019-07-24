/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { COLORS, SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Component Styles */
const H1Styled = styled.h1`
    font-weight: ${props => (props.bold ? SIZES.XL.FONT_WEIGHT : SIZES.MD.FONT_WEIGHT)};
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES.XXL.FONT_SIZE)};
    line-height: ${props => (SIZES.XXL.LINE_HEIGHT)};

    padding: 0;
    margin : ${props => props.margin};

    text-align    : ${props => (props.center ? 'center' : (props.align || null))};
    text-transform: ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (
        (!props.color && !props.link && !props.helper) ? null :
            colors.get(props.link ? 'secondary' : (props.helper ? 'mercury' : props.color))
    )};

    ${props => props.styles};
`;

/* Component Itself */
const H1 = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <H1Styled
            {...props}
            ref={ref}
            className={`aph-h1 ${className || ''}`}
        />
    );
});

/* Default Properties */
H1.defaultProps = {
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
H1.propTypes = {
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
export default H1;
