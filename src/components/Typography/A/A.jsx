/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { colors } from '../../../utils';

/* Component Styles */
const AStyled = styled.a`
    box-sizing: border-box;

    margin: ${props => props.margin};

    cursor         : pointer;
    text-decoration: none;
    text-transform : ${props => (props.upper ? 'uppercase' : null)};

    color: ${props => (colors.getFromTheme(props, (props.aphcolor || 'link')))};

    border : 0;
    outline: 0;

    &:active,
    &:focus,
    &:hover,
    &:visited {
        border : 0;
        outline: 0;
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
            aphcolor={color}
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
    margin: '10px 0',
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
