/* Core Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import HoverActionsStyled from './HoverActionsStyled';

/* Component Itself */
function HoverActions (props) {

    /**
     * Inherit props
     */
    const {
        actions,
        className,
        children,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <HoverActionsStyled
            hasActions={actions ? true : false}
            className={`aph-hover-actions ${className || ''}`}
            {...rest}>
            <span className="aph-hover-actions__content">
                {children}
            </span>
            <span className="aph-hover-actions__items">
                {actions}
            </span>
        </HoverActionsStyled>
    );
}

/* Default Props */
HoverActions.defaultProps = {
    actions: undefined,
    styles : {},
};

/* Properties Types */
HoverActions.propTypes = {
    /**
     * On hover, display components, such as `HoverActionsItem`
     */
    actions: propTypes.any,

    /**
     * Custom Styles
     */
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default HoverActions;
