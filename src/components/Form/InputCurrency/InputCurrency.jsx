/* Core Packages */
import React, { memo, forwardRef } from 'react';
import propTypes from 'prop-types';
import CurrencyInput from 'react-currency-input';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const InputCurrency = memo(forwardRef((props, ref) => {
    const {
        id,
        className,
        label,
        labelProps,

        onChange,

        error,
        errorMessage,

        ...rest
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
            onChange(Object.assign({}, evt), floatValue, maskedValue);
        }
    }

    return (
        <AphFormControlWrapperStyled
            error={!!error}
            hasLabel={!!label}>
            <AphFormControlStyled
                {...rest}
                id={id}
                as={CurrencyInput}
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
}));

/* Default Properties */
InputCurrency.defaultProps = {
    id    : '',
    label : '',
    btn   : null,
    styles: {},

    inputType        : 'tel',
    thousandSeparator: '.',
    decimalSeparator : ',',
    prefix           : 'R$',
    value            : 0,
    precision        : 2,
    allowEmpty       : true,
    allowNegative    : true,
};

/* Properties Types */
InputCurrency.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    type  : propTypes.string,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    thousandSeparator: propTypes.string,
    decimalSeparator : propTypes.string,
    prefix           : propTypes.string,
    value            : propTypes.number,
    precision        : propTypes.number,
    allowEmpty       : propTypes.bool,
    allowNegative    : propTypes.bool,
};

/* Exporting */
export default InputCurrency;
