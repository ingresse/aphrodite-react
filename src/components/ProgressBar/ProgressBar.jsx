/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

/* Framework Helpers */
import { COLORS } from '../../constants';

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

    borderRadius: '10px',
    background  : COLORS.LIGHT_GREY,

    ...props.styles,
}));

/* Filler Styles */
const AphProgressBar = styled('div')(props => ({
    ...defaultStyles,

    width : (((props.percent && props.percent > 100) ? 100 : props.percent || 0) + '%'),
    height: (props.height || '10px'),

    background: `linear-gradient(270deg, ${props.gradientStart} 0%, ${props.gradientEnd} 100%)`,
    backgroundSize: '200% 100%',

    animation: `${bgAnimated} .9s ease infinite`,

    willChange: 'width',
    transition: 'width .15s ease-in',

    ...props.styles,
}));

/* Component it self */
const ProgressBar = (props) => {
    const {
        percent,
        gradient,
        styles,

        width,
        height,

        wrapperStyles,
    } = props;

    return (
        <AphProgressBarWrapper
            width={width}
            height={height}
            styles={wrapperStyles}>
            <AphProgressBar
                percent={percent}
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
    percent      : 0,
    gradient     : {
        start: COLORS.LIGHT_BLUE,
        end  : COLORS.BLUE,
    },
    styles       : {},

    width        : '100%',
    height       : '10px',

    wrapperStyles: {},
};

/* Props Types */
ProgressBar.propTypes = {
    percent      : propTypes.number,
    grandient    : propTypes.object,
    styles       : propTypes.object,

    width        : propTypes.string,
    height       : propTypes.string,

    wrapperStyles: propTypes.object,
};

/* Exporting */
export default ProgressBar;
