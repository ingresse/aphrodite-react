/* Packages */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Component Variations */
import Checkbox from './Checkbox';

/* Component Helpers */
import AphInputLabelStyled from './InputLabelStyled';
import AphInputStyled from './InputStyled';
import AphInputErrorMsgStyled from './InputErrorMsgStyled';

/* Component Wrapper */
const AphInputWrapperStyled = styled.div`
    box-sizing: border-box;
    position  : relative;
    display   : block;
`;

/* Component Itself */
const Input = (props) => {
    const {
        id,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        type,
        error,
        errorMessage,
        color,
    } = props;

    const inputId = `AphFormField${id || Math.random()}`;
    const [hasValue, setHasValue] = useState(value ? true : false);

    if (type === 'checkbox') {
        return (
            <Checkbox
                {...props}
                color={error ? 'error' : color}
                id={id}
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
        <AphInputWrapperStyled>
            <AphInputStyled
                {...props}
                id={inputId}
                onChange={handleChange}
                className={`aph-form-control ${(!label || (!label && hasValue)) ? 'aph-form-control--middle' : ''} ${className || ''}`}
            />
            {(!label) ? (null) : (
                <AphInputLabelStyled
                    {...labelProps}
                    htmlFor={inputId}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphInputLabelStyled>
            )}
            <AphInputErrorMsgStyled
                htmlFor={inputId}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphInputErrorMsgStyled>
        </AphInputWrapperStyled>
    );
};

/* Default Properties */
Input.defaultProps = {
    id        : '',
    labelProps: {},
    labelRight: false,
    right     : false,
    styles    : {},
}

/* Properties Types */
Input.propTypes = {
    id        : propTypes.string.isRequired,
    labelProps: propTypes.object,
    labelRight: propTypes.bool,
    right     : propTypes.bool,
    styles    : propTypes.object,
};

/* Exporting */
export default Input;
