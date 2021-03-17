/* Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const TextArea = memo(forwardRef((props, ref) => {
    const {
        id,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        errorMessage,
        styles,
    } = props;

    const [hasValue, setHasValue] = useState(value ? true : false);
    const inputId                 = `${id || 'formControl'}`;
    const customStyles            = {
        maxWidth : '100%',
        minWidth : '100%',
        minHeight: '100px',
        paddingTop   : '27.5px',
        paddingBottom: '10px',

        '&[rows="4"]': {
            minHeight: '120px',
        },

        '&[rows="5"]': {
            minHeight: '140px',
        },

        '&[rows="6"]': {
            minHeight: '160px',
        },

        '&[rows="7"]': {
            minHeight: '180px',
        },

        '&[rows="8"]': {
            minHeight: '200px',
        },

        '&[rows="9"]': {
            minHeight: '220px',
        },

        '&[rows="10"]': {
            minHeight: '240px',
        },

        ' + .aph-form-label': {
            display: 'block',
            top    : '0',
            backgroundColor: 'transparent',
        },

        ...(styles || {}),
    };

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
            onChange(Object.assign({}, evt));
        }
    }

    return (
        <AphFormControlWrapperStyled>
            <AphFormControlStyled
                {...props}
                ref={ref}
                as="textarea"
                hasLabel={!!label}
                onChange={handleChange}
                styles={customStyles}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={inputId}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            <AphFormControlErrorMsgStyled
                htmlFor={inputId}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
}));

TextArea.defaultProps = {
    defaultPadding: '10px',
};

/* Exporting */
export default TextArea;
