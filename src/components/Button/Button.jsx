/* Core Packages */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Component Helpers */
import { colors } from '../../utils';
import { Icon } from '../';

/* Component Styles */
import AphButtonStyled from './ButtonStyled';
import AphButtonItemStyled from './ButtonItemStyled';

/* Component Itself */
const Button = forwardRef((props, ref) => {
    const { className, color, children, loading, disabled } = props;

    const childrenRef = useRef(null);
    const [ childrenWidth, setChildrenWidth ] = useState(140);

    /**
     * Children Did Update
     */
    useEffect(() => {
        if (!childrenRef ||
            !childrenRef.current ||
            !childrenRef.current.offsetWidth ||
            childrenRef.current.offsetWidth === childrenWidth) {
            return;
        }

        setChildrenWidth(childrenRef.current.offsetWidth);
    }, [ children ]);

    return (
        <AphButtonStyled
            {...props}
            ref={ref}
            disabled={disabled || loading}
            className={`aph-btn ${className} ${loading ? 'aph-btn--loading' : ''}`}>
            <AphButtonItemStyled
                ref={childrenRef}
                className="aph-btn__content">
                {children}
            </AphButtonItemStyled>
            <AphButtonItemStyled
                className="aph-btn__loader"
                childrenWidth={childrenWidth ? `${childrenWidth}px` : null}>
                <Icon
                    size={19}
                    slug="loader"
                    color={['white', 'smoke'].includes(color) ? 'secondary' : 'white'}
                />
            </AphButtonItemStyled>
        </AphButtonStyled>
    );
});

/* Default Properties */
Button.defaultProps = {
    as       : 'button',
    type     : 'button',
    role     : 'button',
    color    : 'secondary',
    className: '',
    margin   : null,
    small    : false,
    block    : false,
    disabled : false,
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
    as: PropTypes.elementType,
};

/* Exporting */
export default Button;
