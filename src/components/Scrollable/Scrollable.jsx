/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

/* Constants */
import { MEDIA_QUERIES } from '../../constants';

/* Style Wrapper */
const StyledWrapper = styled('div')(props => ({
    ...props.styles,

    position: 'relative',

    paddingTop   : '10px',
    paddingBottom: '10px',
    marginRight  : '-10px',
    marginLeft   : '-10px',

    '&:before,&:after': {
        content : '" "',
        position: 'absolute',
        top     : '0',
        bottom  : '0',
        width   : '15px',
    },

    '&:before': {
        left: 0,
        background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 80%)',
    },

    '&:after': {
        right: 0,
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)',
    },

    '&.scrollable--xs': {
        '&:before,&:after': {
            content : 'initial',
        },
    },

    [MEDIA_QUERIES.XS]: {
        marginRight: '-20px',
        marginLeft : '-20px',

        '&.scrollable--xs:before,&.scrollable--xs:after': {
            content : '" "',
        }
    }
}));

/* Styled Scroll */
const StyledScrollable = styled('div')({
    overflow  : 'auto',
    overflowY : 'hidden',
    whiteSpace: 'nowrap',
    textAlign : 'center',

    '.scrollable__item': {
        display: 'inline-block',
        margin : '0 10px',
        verticalAlign: 'middle',
    },

    [MEDIA_QUERIES.XS]: {
        textAlign: 'left',

        '.scrollable__item': {
            '&:first-of-type': {
                marginLeft: '20px',
            },
            '&:last-child': {
                marginRight: '20px',
            },
        }
    },
});

/* Component Itself */
const Scrollable = forwardRef((props, ref) => {
    const {
        children,
        className,
        onlyXS,
        styles,
    } = props;

    return (
        <StyledWrapper
            ref={ref}
            styles={styles}
            className={(className || '') + (onlyXS ? ' scrollable--xs' : '')}>
            <StyledScrollable>
                {children}
            </StyledScrollable>
        </StyledWrapper>
    );
});

/* Export Component */
export default Scrollable;
