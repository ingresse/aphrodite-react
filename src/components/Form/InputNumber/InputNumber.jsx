/* Core Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import LibInputNumber from 'react-input-number';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const InputNumber = memo(forwardRef((props, ref) => {
    const {
        id,
        error,
        errorMessage,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        ...rest
    } = props;

    const [ hasValue, setHasValue ] = useState(typeof value === 'number');

    /**
     * Trigger
     */
    useEffect(() => {
        setHasValue(typeof value === 'number');
    }, [ value ]);

    /**
     * Handle with input changes
     *
     * @param {object} inputValue - input change synthetic event
     */
    function handleChange(inputValue) {
        setHasValue(typeof inputValue === 'number');

        if (typeof onChange === 'function') {
            onChange(inputValue);
        }
    }

    return (
        <AphFormControlWrapperStyled
            error={!!error}
            hasLabel={!!label}>
            <AphFormControlStyled
                {...rest}
                as={LibInputNumber}
                ref={ref}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                enableMobileNumericKeyboard
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
InputNumber.defaultProps = {
    id: '',

    label     : '',
    labelProps: {},

    type  : 'tel',
    styles: {},
};

/* Properties Types */
InputNumber.propTypes = {
    id: propTypes.string.isRequired,

    label     : propTypes.string,
    labelProps: propTypes.object,

    type  : propTypes.string,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default InputNumber;
