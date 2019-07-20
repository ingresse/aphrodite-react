/* Packages */
import React, { memo, forwardRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Component Variations */
import Checkbox from '../Checkbox/FormControlCheckbox';
import InputNumber from '../InputNumber/FormControlInputNumber';
import InputCurrency from '../InputCurrency/FormControlInputCurrency';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlButtonStyled   from '../FormControlButtonStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const Input = memo(forwardRef((props, ref) => {
    if (type === 'checkbox') {
        return (
            <Checkbox
                {...props}
                color={props.error ? 'error' : props.color}
                ref={ref}
            />
        );
    }

    if (type === 'number') {
        return (
            <InputNumber
                {...props}
                ref={ref}
            />
        );
    }

    if (type === 'currency') {
        return (
            <InputCurrency
                {...props}
                ref={ref}
            />
        );
    }

    const {
        id,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        type,
        btn,
        button,
        error,
        errorMessage,
        color,
    } = props;

    const [ hasValue, setHasValue ] = useState(value ? true : false);

    /**
     * Trigger
     */
    useEffect(() => {
        setHasValue(value ? true : false);
    }, [ value ]);

    /**
     * Handle with input changes
     *
     * @param {object} evt - input change synthetic event
     */
    function handleChange(evt) {
        const { target } = evt;
        const inputValue = target.value;

        setHasValue(inputValue ? true : false);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt), inputValue);
        }
    }

    return (
        <AphFormControlWrapperStyled
            hasButton={(btn || button) ? true : false}
            buttonAlign={((btn && btn.align) ? btn.align : (button && button.align) ? button.align : '')}>
            <AphFormControlStyled
                name={id}
                {...props}
                ref={ref}
                onChange={handleChange}
                className={`aph-form-control ${(!label || (!label && hasValue)) ? 'aph-form-control--middle' : ''} ${className || ''}`}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={id}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            {(!btn && !button) ? (null) : (
                <AphFormControlButtonStyled>
                    <span
                        {...btn}
                        {...button}
                    />
                </AphFormControlButtonStyled>
            )}
            <AphFormControlErrorMsgStyled
                htmlFor={id}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
}));

/* Default Properties */
Input.defaultProps = {
    id    : `formControlRandomID${Math.random()}`,
    label : '',
    btn   : null,
    button: null,
    styles: {},
};

/* Properties Types */
Input.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    button: propTypes.object,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Input;
