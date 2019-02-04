/* Packages */
import React, { Component } from 'react';
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

    borderRadius: (((props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number') ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px'),
    background  : COLORS.LIGHT_GREY,

    ...props.styles,
}));

/* Filler Styles */
const AphProgressBar = styled('div')(props => ({
    ...defaultStyles,

    width : (((props.percentual && props.percentual > 100) ? 100 : props.percentual || 0) + '%'),
    height: (props.height || '10px'),

    background: (props.color ? COLORS.GET(props.color) : !props.animated ? COLORS.BLUE : `linear-gradient(270deg, ${props.gradientStart || COLORS.BLUE} 0%, ${props.gradientEnd || COLORS.LIGHT_BLUE} 100%)`),
    backgroundSize: '200% 100%',

    animation: `${bgAnimated} .9s ease infinite`,

    willChange: 'width',
    transition: 'width .15s ease-in',

    ...props.styles,
}));

/* Component it self */
class ProgressBar extends Component {
    /**
     * Constructor
     *
     * @param {object} props
     */
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            percentual: undefined,
        };

        this.increment = 500;
        this.interval  = null;
    }

    /**
     *
     */
    increasePercentual(increment = 1) {
        const { percentual } = this.state;

        if (percentual >= 100) {
            return false;
        }

        this.setState({
            percentual: (percentual + increment),
        }, () => {
            return true;
        });
    }

    /**
     *
     */
    handlePromise() {
        const { promise, promiseDone } = this.props;

        if (!promise) {
            return;
        }

        let response  = null;
        let error     = null;
        let increment = 0;
        this.interval =
            setInterval(() => {
                increment += 15;

                this.increaseProgress(increment);
            }, this.increment);

        promise
        .then((response) => {
            response = response;
        })
        .catch((error) => {
            error = error;
        })
        .finally(() => {
            clearInterval(this.interval);
        });
    }

    /* Render */
    render() {
        const {
            animated,

            percent,
            percentual,
            gradient,
            styles,

            width,
            height,
            radius,

            color,

            wrapperStyles,
        } = this.props;

        const _color      = (color || '');
        const _percentual = (this.state.percentual || percent || percentual);

        return (
            <AphProgressBarWrapper
                width={width}
                height={height}
                radius={radius}
                styles={wrapperStyles}>
                <AphProgressBar
                    percentual={_percentual}
                    color={_color}
                    animated={animated}
                    gradientStart={gradient && gradient.start}
                    gradientEnd={gradient && gradient.end}
                    height={height}
                    styles={styles}
                />
            </AphProgressBarWrapper>
        );
    }
};

/* Default Props */
ProgressBar.defaultProps = {
    animated     : false,

    percent      : 0,
    percentual   : 0,
    gradient     : {
        start: COLORS.BLUE,
        end  : COLORS.LIGHT_BLUE,
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

    percentual   : propTypes.number,
    grandient    : propTypes.object,
    styles       : propTypes.object,

    width        : propTypes.any,
    height       : propTypes.number,

    color        : propTypes.string,

    wrapperStyles: propTypes.object,
};

/* Exporting */
export default ProgressBar;
