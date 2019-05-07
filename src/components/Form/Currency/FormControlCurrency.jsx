/* Core Packages */
import React, { forwardRef, useState } from 'react';
import propTypes from 'prop-types';
import CurrencyInput from 'react-currency-input';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Styled */
const AphFormControlCurrency = AphFormControlStyled.withComponent(CurrencyInput);

/* Component Itself */
const FormControlCurrency = forwardRef((props, ref) => {
    const {
        id,
        className,
        label,
        labelProps,
        onChange,
        btn,
        error,
        errorMessage,
    } = props;

    /**
     * Handle with input changes
     *
     * @param {object} evt         - input change synthetic event
     * @param {string} maskedValue - input masked value
     * @param {string} floatValue  - input float value
     */
    function handleChange(evt, maskedValue, floatValue) {
        if (typeof onChange === 'function') {
            onChange(floatValue, maskedValue);
        }
    }

    return (
        <AphFormControlWrapperStyled>
            <AphFormControlCurrency
                {...props}
                ref={ref}
                onChange={() => {}}
                onChangeEvent={handleChange}
                className={`aph-form-control ${className || ''}`}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={id}
                    className="aph-form-label aph-form-label--top">
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
});

/* Default Properties */
FormControlCurrency.defaultProps = {
    id    : `formControlRandomID${Math.random()}`,
    label : '',
    btn   : null,
    styles: {},

    inputType        : 'tel',
    thousandSeparator: '.',
    decimalSeparator : ',',
    prefix           : 'R$ ',
    value            : 0,
    precision        : 2,
    allowNegative    : false,
};

/* Properties Types */
FormControlCurrency.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    styles: propTypes.object,
    type  : propTypes.string,

    thousandSeparator: propTypes.string,
    decimalSeparator : propTypes.string,
    displayType      : propTypes.string,
    prefix           : propTypes.string,
    value            : propTypes.number,
    precision        : propTypes.number,
    allowNegative    : propTypes.bool,
};

/* Exporting */
export default FormControlCurrency;
