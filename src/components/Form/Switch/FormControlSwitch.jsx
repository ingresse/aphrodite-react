/* Packages */
import React from 'react';

/* Component Styles */
import SwitchStyles from './FormControlSwitchStyles';

/* Component Itself */
const Switch = (props) => {
    const {
        id,
        className,
        children,
        styles,
        textAlign,
        textSmall,
        toggleAlign,
    } = props;

    let newProps = Object.assign({}, props, {
        children   : undefined,
        styles     : undefined,
        textAlign  : undefined,
        textSmall  : undefined,
        toggleAlign: undefined,
    });

    return (
        <SwitchStyles.Wrapper
            htmlFor={id}
            className={`aph-form-switch ${className || ''}`}
            styles={styles}
            textAlign={textAlign}
            textSmall={textSmall}
            toggleAlign={toggleAlign}>
            {(children && (toggleAlign === 'right')) ? (
                <SwitchStyles.Content
                    htmlFor={id}
                    hasChildren={children ? true : false}
                    toggleAlign={toggleAlign}>
                    {children}
                </SwitchStyles.Content>
            ) : (null)}
            <SwitchStyles.ToggleWrapper
                htmlFor={id}
                className="aph-form-switch__wrapper">
                <SwitchStyles.Input
                    {...newProps}
                    id={id}
                    type="checkbox"
                    className="aph-form-switch__input"
                />
                <SwitchStyles.Toggle
                    htmlFor={id}
                    className="aph-form-switch__toggle"
                />
            </SwitchStyles.ToggleWrapper>
            {(children && (!toggleAlign || toggleAlign === 'left')) ? (
                <SwitchStyles.Content
                    htmlFor={id}
                    hasChildren={children ? true : false}
                    toggleAlign={toggleAlign}>
                    {children}
                </SwitchStyles.Content>
            ) : (null)}
        </SwitchStyles.Wrapper>
    );
};

/* Default Properties */
Switch.defaultProps = {
    id: `formControlRandomID${Math.random()}`,
};

/* Exporting */
export default Switch;
