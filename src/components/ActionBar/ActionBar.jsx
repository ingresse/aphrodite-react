/* Core Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import ActionBarStyled from './ActionBarStyled';

/* Component */
const ActionBar = forwardRef(({
    className,
    visible,

    ...rest
}, ref) => {
    /**
     * Render
     */
    return (
        <ActionBarStyled
            {...rest}
            ref={ref}
            className={`aph-action-bar${visible ? ' aph-action-bar--visible' : ''} ${className || ''}`}
        />
    );
});

/* Default Properties */
ActionBar.defaultProps = {
    /**
     * Action bar visibility
     */
    visible: false,

    /**
     * Custom styles
     */
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
