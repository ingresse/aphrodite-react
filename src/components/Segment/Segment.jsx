/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { RADIUS } from '../../constants';
import { colors, text } from '../../utils';

/* Component Itself */
const SegmentStyled = styled.div`
    box-sizing: border-box;
    display: block;
    margin : ${props => props.aphMargin || null};
    padding: ${props => props.withLink ? null : props.aphPadding};
    transition: color

    ${props => text(props, props.textSize)};

    border-radius: ${props => !props.aphRadius ? null : ((typeof props.aphRadius === 'number') ? `${props.aphRadius}px` : props.aphRadius)};
    box-shadow   : ${props => props.aphShadow ?
        (typeof props.aphShadow === 'string' ? props.aphShadow : `0 0 3px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)}`) : (
            (props.borderTop || props.borderBottom) ? `iwnset 0 ${props.borderBottom ? '-' : ''}1px 0 0 ${colors.getFromTheme(props, 'helper', 'original', 0.25)}` : null
        )
    };

    color           : ${props => props.aphColor ? colors.getFromTheme(props, props.aphColor) : null};
    background-color: ${props => props.aphBackground ? colors.getFromTheme(props, props.aphBackground) : null};

    ${props => !props.aphHoverable ? null : `
        outline: 0;
        border : 0;

        box-shadow: ${!props.aphShadow ? '' : `0 0 3px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)}`};
        transition: box-shadow 0.15s linear;

        &:active, &:hover, &:focus {
            box-shadow: 0 0 10px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)};
        }
    `}

    ${props => !props.withLink ? null : `
        > a {
            border-radius: ${!props.aphRadius ? '' : ((typeof props.aphRadius === 'number') ? `${props.aphRadius}px` : props.aphRadius)};
            color: inherit;
            display: block;
            padding: ${props.aphPadding};
            text-decoration: none;
        }
    `}

    ${props => props.aphStyles};
`;

/* Component Itself */
const Segment = forwardRef((props, ref) => {
    const {
        className,

        margin,
        padding,

        color,
        background,
        hoverable,
        radius,
        shadow,

        styles,
        ...rest
    } = props;

    return (
        <SegmentStyled
            {...rest}
            ref={ref}
            aphMargin={margin}
            aphPadding={padding}
            aphHoverable={hoverable}
            aphColor={color}
            aphBackground={background}
            aphRadius={radius}
            aphShadow={shadow}
            aphStyles={styles}
            className={`aph-segment ${className || ''}`}
        />
    );
});

/* Default Properties */
Segment.defaultProps = {
    textAlign: '',
    textColor: '',
    color: '',
    background: '',
    margin: '',
    padding: '20px 10px',
    hoverable: false,
    radius: 0,
    shadow: false,
    styles: {},
    withLink: false,
};

/* Properties Types */
Segment.propTypes = {
    /**
     * Text align
     */
    textAlign : propTypes.string,

    /**
     * Text color
     */
    textColor: propTypes.string,

    /**
     * Text color
     */
    color: propTypes.string,

    /**
     * Background color
     */
    background: propTypes.string,

    /**
     * External Distance to other elements
     */
    margin: propTypes.string,

    /**
     * Internal spacement
     */
    padding: propTypes.string,

    /**
     * Background color changes on hover event
     */
    hoverable: propTypes.bool,

    /**
     * Custom border radius
     */
    radius: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
    ]),

    /**
     * Enable or customize box-shadow
     */
    shadow: propTypes.oneOfType([
        propTypes.bool,
        propTypes.string,
    ]),

    /**
     * Custom styles
     */
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    /**
     * Use it when you need a link inside, such as React Router Link
     */
    withLink: propTypes.bool,
};

/* Exporting */
export default Segment;
