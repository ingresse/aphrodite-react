/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

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

    background: colors.get('white'),
    boxShadow : `0 0 4px 0 ${colors.get('black', null, 0.2)}`,

    transform : `translateY(110%)`,
    willChange: 'transform',
    transition: '-webkit-transform 0.3s ease-out 0s',

    '&.aph-action-bar--visible': {
        transform: 'translateY(0)',
    },

    [MEDIA_QUERIES.LT.SM]: {
        padding: '15px 0',
    },

    ...props.styles,
}));

/* Component */
const ActionBar = forwardRef((props, ref) => {
    const {
        className,
        children,
        styles,
        visible,
    } = props;

    return (
        <ActionBarStyled
            {...props}
            ref={ref}
            className={`aph-action-bar${visible ? ' aph-action-bar--visible' : ''} ${className || ''}`}
            styles={styles}>
            {children}
        </ActionBarStyled>
    );
});

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
