/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Component Styles */
const PStyled = styled.p`
    font-weight: ${props => (SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${props => (SIZES[props.small ? 'SM' : 'MD'].FONT_SIZE)};
    line-height: ${props => (SIZES[props.small ? 'SM' : 'MD'].LINE_HEIGHT)};

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
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    small : false,
    helper: false,
    margin: '10px 0',
    color : '',
    styles: {},
};

/* Properties Types */
P.propTypes = {
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
export default P;
