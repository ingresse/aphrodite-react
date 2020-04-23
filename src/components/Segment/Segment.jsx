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
    margin : ${props => props.aphmargin  || null};
    padding: ${props => props.aphpadding || '20px 10px'};

    ${props => text(props, props.textSize)};

    border-radius: ${props => props.aphradius ? `${props.aphradius}px` : null};
    box-shadow   : ${props => props.aphshadow ?
        `0 0 3px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)}` : (
            (props.borderTop || props.borderBottom) ? `inset 0 ${props.borderBottom ? '-' : ''}1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))}` : null
        )
    };

    color           : ${props => props.aphcolor ? colors.getFromTheme(props, props.aphcolor) : null};
    background-color: ${props => props.aphbackground ? colors.getFromTheme(props, props.aphbackground) : null};

    ${props => !props.aphhoverable ? null : `
        outline: 0;
        border : 0;

        border-radius: ${RADIUS.LG}px;
        box-shadow   : ${props => !props.aphshadow ? null : `0 0 3px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)}`};
        transition   : box-shadow 0.15s linear;

        &:hover,
        &:focus {
            box-shadow: 0 0 10px ${colors.getFromTheme(props, 'oil', 'dark', 0.25)};
        }
    `}

    ${props => props.aphstyles};
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
            aphmargin={margin}
            aphpadding={padding}
            aphhoverable={hoverable}
            aphcolor={color}
            aphbackground={background}
            aphradius={radius}
            aphshadow={shadow}
            aphstyles={styles}
            className={`aph-segment ${className || ''}`}
        />
    );
});

/* Default Properties */
Segment.defaultProps = {
    textAlign : '',
    margin    : '',
    padding   : '20px 10px',
    hoverable : false,

    /**
     * Text color
     */
    color: '',

    /**
     * Background color
     */
    background: '',

    radius: 0,
    shadow: false,
    styles: {},
};

/* Properties Types */
Segment.propTypes = {
    textAlign : propTypes.string,
    margin    : propTypes.string,
    padding   : propTypes.string,
    hoverable : propTypes.bool,
    color     : propTypes.string,
    background: propTypes.string,
    radius    : propTypes.number,
    shadow    : propTypes.bool,
    styles    : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Segment;
