/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import chroma from 'chroma-js';

/* Utils */
import { colors } from '../../utils';

/* Constants */
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

/* Component Itself */
const Placeholder = forwardRef((props, ref) => {
    const {
        className,
        styles,

        ...rest
    } = (props || {});

    const isDarkMode = ((props.theme && props.theme.isDarkMode) ? true : false);
    const colorTheme = colors.getFromTheme(props, 'helper');
    const colorBase  = chroma(colorTheme);
    const colorStart = colorBase.alpha(isDarkMode ? 0.5 : 0.05).css();
    const colorEnd   = colorBase.alpha(isDarkMode ? 0.75 : 0.15).css();

    const StyledPlaceholder = styled('div')({
        fontSize  : '0',
        lineHeight: '0',

        boxSizing: 'border-box',
        overflow : 'hidden',

        display  : `${props.block ? 'block' : 'inline-block'}`,
        width    : `${props.width ? (props.width + 'px') : '100%'}`,
        maxWidth : `${props.width ? (props.width + 'px') : '100%'}`,
        minHeight: `${props.height}px`,

        border      : (props.border || null),
        borderRadius: `${props.radius}px`,

        color         : colorBase.rgb(),
        background    : `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
        backgroundSize: '200% 100%',

        animation: `${bgPlaceholder} .9s ease infinite`,

        ...styles,
    });

    return (
        <StyledPlaceholder
            {...rest}
            ref={ref}
            className={`aph-placeholder ${className || ''}`}>
            {props.children}
        </StyledPlaceholder>
    );
});

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
    style : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting Component */
export default Placeholder;
