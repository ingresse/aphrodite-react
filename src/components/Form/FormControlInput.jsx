/* Packages */
import React, { forwardRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Component Variations */
import Checkbox from './FormControlCheckbox';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from './FormControlWrapperStyled';
import AphFormControlLabelStyled    from './FormControlLabelStyled';
import AphFormControlStyled         from './FormControlStyled';
import AphFormControlButtonStyled   from './FormControlButtonStyled';
import AphFormControlErrorMsgStyled from './FormControlErrorMsgStyled';

/* Component Itself */
const Input = forwardRef((props, ref) => {
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
        error,
        errorMessage,
        color,
    } = props;

    const inputId = `${id || 'formControl'}`;
    const [hasValue, setHasValue] = useState(value ? true : false);

    if (type === 'checkbox') {
        return (
            <Checkbox
                {...props}
                color={error ? 'error' : color}
                id={inputId}
            />
        );
    }

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
            onChange(Object.assign({}, evt));
        }
    }

    return (
        <AphFormControlWrapperStyled>
            <AphFormControlStyled
                {...props}
                ref={ref}
                id={inputId}
                onChange={handleChange}
                className={`aph-form-control ${(!label || (!label && hasValue)) ? 'aph-form-control--middle' : ''} ${className || ''}`}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    htmlFor={inputId}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            {(!btn) ? (null) : (
                <AphFormControlButtonStyled
                    {...btn}
                />
            )}
            <AphFormControlErrorMsgStyled
                htmlFor={inputId}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
});

/* Default Properties */
Input.defaultProps = {
    id    : `formControlRandomID${Math.random()}`,
    label : '',
    btn   : null,
    styles: {},
};

/* Properties Types */
Input.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    styles: propTypes.any,
};

/* Exporting */
export default Input;
