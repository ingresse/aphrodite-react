/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Component Styles */
import AphButtonStyled from './ButtonStyled.js';

/* Component Itself */
const Button = (props) => {
    const { className, component } = props;

    if (component) {
        const CustomButton = AphButtonStyled.withComponent(component);

        return (
            <CustomButton
                {...props}
                className={`aph-btn ${className}`}
            />
        );
    }

    return (
        <AphButtonStyled
            {...props}
            className={`aph-btn ${className}`}
        />
    );
};

/* Default Properties */
Button.defaultProps = {
    type     : 'button',
    color    : 'secondary',
    radius   : '25px',
    className: '',
    margin   : null,
    small    : false,
    block    : false,
    disabled : false,
    component: null,
};

/* Properties Types */
Button.propTypes = {
    /**
     * Button Type:
     * "button", "reset" or "submit"
     */
    type: PropTypes.string,

    /**
     * Should the Button be disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Renders the button using an alternative color:
     * Primary, Warning, Error, Success
     */
    color: PropTypes.string,

    /**
     * Customized Border Radius
     */
    radius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Customized Margin
     */
    margin: PropTypes.string,

    /**
     * Should the Button be block?
     */
    block: PropTypes.bool,

    /**
     * Alternative button size: small.
     */
    small: PropTypes.bool,

    /**
     * Custom Component
     *
     * Example: `Link` from react-router-dom
     */
    component: PropTypes.elementType,
};

/* Exporting */
export default Button;
