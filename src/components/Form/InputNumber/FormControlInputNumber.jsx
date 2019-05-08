/* Core Packages */
import React, { forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import InputNumber from 'react-input-number';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Styled */
const AphFormControlInputNumber = AphFormControlStyled.withComponent(InputNumber);

/* Component Itself */
const FormControlInputNumber = forwardRef((props, ref) => {
    const {
        id,
        className,
        label,
        labelProps,
        placeholder,

        value,
        onChange,

        prefix,
        error,
        errorMessage,
    } = props;

    const [ hasValue, setHasValue ] = useState(typeof value === 'number');

    /* Inherit Props */
    let inheritProps  = Object.assign({}, props);
    let excludedProps = [
        'label',
        'labelProps',

        'errorMessage',
    ];

    excludedProps.map((excludedProp) => {
        delete inheritProps[excludedProp];

        return true;
    });

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
        <AphFormControlWrapperStyled>
            <AphFormControlInputNumber
                {...inheritProps}
                ref={ref}
                onChange={handleChange}
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
});

/* Default Properties */
FormControlInputNumber.defaultProps = {
    id: '',

    label     : '',
    labelProps: {},

    type  : 'tel',
    styles: {},
};

/* Properties Types */
FormControlInputNumber.propTypes = {
    id: propTypes.string.isRequired,

    label     : propTypes.string,
    labelProps: propTypes.object,

    type  : propTypes.string,
    styles: propTypes.object,
};

/* Exporting */
export default FormControlInputNumber;
