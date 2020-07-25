/* Packages */
import React, { memo, forwardRef } from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import SwitchStyled from './SwitchStyled';

/* Component Itself */
const Switch = forwardRef((props, ref) => {
    const {
        id,
        className,
        children,
        styles,
        textAlign,
        textSmall,
        toggleAlign,
        ...rest
    } = props;

    return (
        <SwitchStyled.Wrapper
            htmlFor={id}
            className={`aph-form-switch ${className || ''}`}
            styles={styles}
            textAlign={textAlign}
            textSmall={textSmall}
            toggleAlign={toggleAlign}>
            <SwitchStyled.ToggleWrapper
                htmlFor={id}
                className="aph-form-switch__wrapper">
                <SwitchStyled.Input
                    {...rest}
                    ref={ref}
                    id={id}
                    type="checkbox"
                    className="aph-form-switch__input"
                />
                <SwitchStyled.Toggle
                    htmlFor={id}
                    className="aph-form-switch__toggle"
                />
            </SwitchStyled.ToggleWrapper>
            {(!children) ? (null) : (
                <SwitchStyled.Content
                    htmlFor={id}
                    hasChildren={children ? true : false}
                    toggleAlign={toggleAlign}>
                    {children}
                </SwitchStyled.Content>
            )}
        </SwitchStyled.Wrapper>
    );
});

/* Default Properties */
Switch.defaultProps = {
    id: '',

    className: '',
    styles   : {},

    textSmall  : false,
    textAlign  : 'left',
    toggleAlign: 'left',
};

/* Properties Types */
Switch.propTypes = {
    id: propTypes.string.isRequired,

    className: propTypes.string,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    textSmall  : propTypes.bool,
    textAlign  : propTypes.string,
    toggleAlign: propTypes.string,
};

/* Exporting */
export default Switch;
