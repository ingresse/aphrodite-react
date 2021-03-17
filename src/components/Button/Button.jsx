import React, { Fragment, forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import AphButtonStyled from './ButtonStyled';
import AphButtonItemStyled from './ButtonItemStyled';

const Button = forwardRef(({
    block,
    circle,
    className,
    color,
    children,
    loading,
    disabled,
    margin,
    link,
    radius,
    sm,
    small,
    styles,
    translucid,
    weight,
    ...rest
}, ref) => {

    /**
     * Local values
     */
    const childrenRef = useRef(null);
    const [ childrenWidth, setChildrenWidth ] = useState(140);

    /**
     * Children Did Update
     */
    useEffect(() => {
        if ((typeof loading !== 'boolean') ||
            !childrenRef ||
            !childrenRef.current ||
            !childrenRef.current.offsetWidth ||
            childrenRef.current.offsetWidth === childrenWidth) {
            return;
        }

        setChildrenWidth(childrenRef.current.offsetWidth);
    }, [ children ]);

    /**
     * Render
     */
    return (
        <AphButtonStyled
            {...rest}
            ref={ref}
            aphsm={(sm || small) ? 1 : 0}
            aphblock={block ? 1 : 0}
            aphcircle={circle}
            aphcolor={color}
            aphlink={link ? 1 : 0}
            aphmargin={margin}
            aphradius={radius}
            aphstyles={styles}
            aphtranslucid={translucid ? 1 : 0}
            aphweight={weight}
            disabled={disabled}
            className={`aph-btn${loading ? ' aph-btn--loading' : ''} ${className}`}
        >
            {(typeof loading !== 'boolean') ? (children) : (
                <Fragment>
                    <AphButtonItemStyled
                        className="aph-btn__loader"
                        childrenWidth={childrenWidth ? `${childrenWidth}px` : null}
                    >
                        {(!loading) ? (null) : (
                            <Icon
                                size={30}
                                slug="loader"
                                color={['white', 'smoke'].includes(color) ? 'secondary' : 'white'}
                            />
                        )}
                    </AphButtonItemStyled>
                    <AphButtonItemStyled
                        ref={childrenRef}
                        className="aph-btn__content">
                        {children}
                    </AphButtonItemStyled>
                </Fragment>
            )}
        </AphButtonStyled>
    );
});

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
    loading  : false,
    styles   : {},
    weight   : 'bold',
};

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
     * Loading state, replacing text by a donut spinning
     */
    loading: PropTypes.bool,

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

    /**
     * Custom Styles
     */
    styles: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),

    /**
     * Font Weight
     */
    weight: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
};

/* Exporting */
export default Button;
