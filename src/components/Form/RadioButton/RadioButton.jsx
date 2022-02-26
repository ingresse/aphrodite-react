import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Helper Components
 */
import Styled from '../../Styled/Styled';

/* Component Styles */
import { RadioButtonWrapper, RadioButtonInput, } from './RadioButtonStyled.js';

/* Component it self */
const RadioButton = forwardRef(({
    id,
    name,
    children,
    type,
    value,
    disabled,
    description,
    ...rest
}, ref) => {
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
                type={type}
                value={value}
                disabled={disabled}
                ref={ref}
                {...rest}
            />
            <i />
            <span>
                {children}
                {description && (
                <Styled
                    textColor={disabled ? 'disabled' : 'helper'}
                    textSize="sm"
                >
                    {description}
                </Styled>
                )}
            </span>
        </RadioButtonWrapper>
    );
});

/* Default props */
RadioButton.defaultProps = {
    type       : 'radio',
    disabled   : false,
    description: '',
};

/* Prop Types */
RadioButton.propTypes = {
    id      : PropTypes.string.isRequired,
    type    : PropTypes.string,
    name    : PropTypes.string.isRequired,
    value   : PropTypes.any,
    children: PropTypes.any,
    onChange: PropTypes.func,

    checked    : PropTypes.bool,
    disabled   : PropTypes.bool,
    description: PropTypes.string,
};

export default RadioButton;
