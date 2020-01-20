/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

/* Framework Helpers */
import { colors } from '../../utils';

/* Animation */
const bgAnimated = keyframes`
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

/* Default Styles */
const defaultStyles = {
    boxSizing: 'border-box',
    display  : 'block',
};

/* Wrapper Styles */
const AphProgressBarWrapper = styled('div')(props => ({
    ...defaultStyles,

    height: (props.height || '10px'),

    overflow   : 'hidden',
    width      : '100%',
    maxWidth   : (props.width || '100%'),
    marginRight: 'auto',
    marginLeft : 'auto',

    borderRadius: (((props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number') ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px'),
    background  : colors.getFromTheme(props, 'disabled'),

    ...props.styles,
}));

/* Filler Styles */
const AphProgressBar = styled('div')(props => ({
    ...defaultStyles,

    height: (props.height || '10px'),
    width : (props.size || ((props.percentual && props.percentual > 100) ? 100 : props.percentual || 0) + '%'),

    background: (props.color ? colors.getFromTheme(props, props.color) : !props.animated ? colors.getFromTheme(props, 'secondary') : `linear-gradient(270deg, ${colors.getFromTheme(props, props.gradientStart || 'secondary')} 0%, ${colors.getFromTheme(props, props.gradientEnd || 'secondary')} 100%)`),
    backgroundSize: '200% 100%',

    animation: `${bgAnimated} .9s ease infinite`,

    willChange: 'width',
    transition: 'width .15s ease-in',

    ...props.styles,
}));

/* Component itself */
function ProgressBar(props) {
    /**
     * Inherit props
     */
    const {
        animated,

        size,
        percent,
        percentual,
        gradient,
        styles,

        width,
        height,
        radius,

        color,

        wrapperStyles,
    } = props;

    /**
     * Render
     */
    return (
        <AphProgressBarWrapper
            width={width}
            height={height}
            radius={radius}
            styles={wrapperStyles}>
            <AphProgressBar
                size={size}
                percentual={(percent || percentual)}
                color={(color || '')}
                animated={animated}
                gradientStart={gradient && gradient.start}
                gradientEnd={gradient && gradient.end}
                height={height}
                styles={styles}
            />
        </AphProgressBarWrapper>
    );
};

/* Default Props */
ProgressBar.defaultProps = {
    animated     : false,

    percent      : 0,
    percentual   : 0,
    size         : '',
    gradient     : {
        start: colors.get('secondary'),
        end  : colors.get('secondary', 'light'),
    },
    styles       : {},

    width        : '100%',
    height       : 10,

    color        : '',
    colorful     : false,

    wrapperStyles: {},
};

/* Props Types */
ProgressBar.propTypes = {
    animated     : propTypes.bool,

    size         : propTypes.string,
    percentual   : propTypes.number,
    grandient    : propTypes.object,
    styles       : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    width        : propTypes.any,
    height       : propTypes.number,

    color        : propTypes.string,

    wrapperStyles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default ProgressBar;
