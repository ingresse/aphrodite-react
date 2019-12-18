/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { colors, textColorfull } from '../../../utils';

/* Component Styles */
const AStyled = styled.a`
    box-sizing: border-box;

    cursor         : pointer;
    text-decoration: none;

    ${props => textColorfull(props)};

    border : 0;
    outline: 0;

    &:active,
    &:focus,
    &:hover,
    &:visited {
        border : 0;
        outline: 0;
        color  : ${(props) => props.textColor || null};
    }

    ${props => props.styles};
`;

/* Component Itself */
const A = forwardRef((props, ref) => {
    const {
        className,
        color,

        ...rest
    } = props;

    return (
        <AStyled
            {...rest}
            ref={ref}
            textColor={color}
            className={`aph-a ${className || ''}`}
        />
    );
});

/* Default Properties */
A.defaultProps = {
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    small : false,
    helper: false,
    color : '',
    styles: {},
};

/* Properties Types */
A.propTypes = {
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
export default A;
