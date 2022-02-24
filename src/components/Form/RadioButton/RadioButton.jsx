import React from 'react';
import PropTypes from 'prop-types';

/* Styled Components */
import {
    RadioButtonWrapper,
    RadioButtonInput,
} from './RadioButtonStyled.js';

/* Component it self */
function RadioButton({
    id,
    name,
    children,
    checked,
    type,
    value,
    disabled,

    ...rest
}) {
    return (
        <RadioButtonWrapper
            htmlFor={id}
            disabled={disabled}
            hasChildren={!!children}
            {...rest}
        >
            <RadioButtonInput
                id={id}
                name={name}
                checked={checked}
                type={type}
                value={value}
                disabled={disabled}
                {...rest}
            />
            <i />
            {children && (
                <span>
                    {children}
                </span>
            )}
        </RadioButtonWrapper>
    );
}

/* Default props */
RadioButton.defaultProps = {
    id      : null,
    type    : 'radio',
    name    : null,
    value   : '',
    children: '',
    onChange: () => null,

    checked : false,
    disabled: false,
};

/* Prop Types */
RadioButton.propTypes = {
    id      : PropTypes.string.isRequired,
    type    : PropTypes.string,
    name    : PropTypes.string.isRequired,
    value   : PropTypes.any,
    children: PropTypes.any,
    onChange: PropTypes.func,

    checked : PropTypes.bool,
    disabled: PropTypes.bool,
};

export default RadioButton;
