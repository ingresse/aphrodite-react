/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

/* Constants */
import { SIZES, ZINDEX } from '../../constants';

/* Styles */
const ActionBarStyled = styled('div')(props => ({
    boxSizing: 'border-box',

    display  : 'block',
    width    : '100%',
    minHeight: SIZES.ACTION_BAR_HEIGHT,

    zIndex   : ZINDEX.ACTION_BAR,
    position : 'fixed',
    right    : 0,
    bottom   : 0,
    left     : 0,
    padding  : '20px 0',

    backgroundColor: colors.getFromTheme(props, 'inverse'),
    boxShadow      : `0 0 4px 0 ${colors.getFromTheme(props, 'shadow')}`,

    transform : `translateY(110%)`,
    willChange: 'transform',
    transition: 'transform 0.3s ease-out 0s, background-color 0.2s linear',

    '&.aph-action-bar--visible': {
        transform: 'translateY(0)',
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
    visible: false,
    styles : {},
};

/* Properties Types */
ActionBar.propTypes = {
    children: propTypes.any,
    visible : propTypes.bool,
    styles  : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default ActionBar;
