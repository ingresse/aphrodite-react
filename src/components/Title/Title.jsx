/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Utils from Aphrodite */
import { TITLE } from './title.constants';
import { COLORS } from 'aphrodite-react';

/* Component */
const Title = (props) => {
    const {
        children,

        bold,
        color,
        margin,

        size,
        height,
        type,

        center,
        right,

        styles,
    } = props;

    const _TYPE   = type ? (TITLE.TYPES.includes(type.toLowerCase()) ? type.toLowerCase() : 'h2') : 'h2';
    const _STYLES = type ? (TITLE.TYPES.includes(type.toLowerCase()) ? TITLE[type.toUpperCase()] : TITLE.H2) : TITLE.H2;

    const Wrapper = styled(_TYPE)(props => (Object.assign(_STYLES, {
        fontWeight: (bold ? '900' : '400'),
        fontSize  : (size ? `${size}px` : null),
        lineHeight: (height ? `${height}px` : null),
        textAlign : (center ? 'center' : (right ? 'right' : null)),

        color: COLORS.GET(color),

        padding: (margin ? '0' : null),
        margin : (margin ? `${margin}px` : '0'),

        ...styles,
    })));

    return (
        <Wrapper
            {...props}
            className={`title ${props.className || ''}`}>
            {children}
        </Wrapper>
    );
};

/* Default props */
Title.defaultProps = {
    type : 'h2',
    color: COLORS.DARK_GREY,
};

/* Exporting */
export default Title;
