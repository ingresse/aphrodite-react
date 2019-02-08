/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants */
import { COLORS, MEDIA_QUERIES } from '../../constants';

/* Styles */
const ActionBarStyled = styled('div')(props => ({
    boxSizing: 'border-box',

    display  : 'block',
    width    : '100%',
    minHeight: '80px',

    zIndex   : 100,
    position : 'fixed',
    right    : 0,
    bottom   : 0,
    left     : 0,
    padding  : '20px 0',

    background: COLORS.WHITE,
    boxShadow : `0 0 4px 0 ${COLORS.GET('BLACK', 0.2)}`,

    transform : `translateY(160px)`,
    willChange: 'transform',
    transition: '-webkit-transform 0.3s ease-out 0s',

    '&.action-bar--visible': {
        transform: 'translateY(0)',
    },

    [MEDIA_QUERIES.LT.SM]: {
        padding: '15px 0',
    },

    ...props.styles,
}));

/* Component */
const ActionBar = (props) => {
    const {
        className,
        children,
        styles,
        visible,
    } = props;

    return (
        <ActionBarStyled
            className={`action-bar ${visible ? 'action-bar--visible' : ''} ${className || ''}`}
            styles={styles}>
            {children}
        </ActionBarStyled>
    );
};

/* Default Properties */
ActionBar.defaultProps = {
    styles : {},
    visible: false,
};

/* Properties Types */
ActionBar.propTypes = {
    children: propTypes.any,
    styles  : propTypes.object,
    visible : propTypes.bool,
};

/* Exporting */
export default ActionBar;
