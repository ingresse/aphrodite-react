/* Packages */
import React from 'react';
import styled, { keyframes } from 'react-emotion';
import propTypes from 'prop-types';
const color = require('tinycolor2');

/* Constants */
import { COLORS } from '../../constants';

/* Component it self */
const Placeholder = (props) => {
    const bgPlaceholder = keyframes`
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    `;

    const StyledPlaceholder = styled('div')({
        fontSize  : '0px',
        lineHeight: '0px',

        ...props.styles,

        display  : `${props.block ? 'block' : 'inline-block'}`,
        width    : `${props.block && props.width ? (props.width + 'px') : '100%' }`,
        maxWidth : `${props.width ? (props.width + 'px') : '100%'}`,
        minHeight: `${props.height}px`,

        border      : `${props.border}`,
        borderRadius: `${props.radius}px`,

        color         : COLORS.LIGHT_GREY,
        background    : `linear-gradient(90deg, ${color(COLORS.SMOKE).toString()}, ${color(COLORS.SMOKE).darken(4).toString()})`,
        backgroundSize: '200% 100%',

        animation: `${bgPlaceholder} .9s ease infinite`,

        '.aph-placeholder': {
            background    : `${color(COLORS.LIGHT_GREY).lighten(8).toString()}`,
            backgroundSize: '200% 100%',
        }
    });

    let _props = Object.assign({}, props);

    delete _props.styles;

    return (
        <StyledPlaceholder {..._props} className={`aph-placeholder ${props.className || ''}`}>
            {props.children}
        </StyledPlaceholder>
    );
}

/* Default Properties */
Placeholder.defaultProps = {
    block : false,
    height: 20,
    radius: 4,
    styles: {},
};

/* Properties Types */
Placeholder.propTypes = {
    block : propTypes.bool,
    width : propTypes.number,
    height: propTypes.number,
    radius: propTypes.number,
    style : propTypes.object,
};

/* Exporting Component */
export default Placeholder;
