/* Packages */
import React, { memo, forwardRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlButtonStyled   from '../FormControlButtonStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const Input = memo(forwardRef((props, ref) => {
    const {
        id,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        onPaste,
        preventPaste,
        btn,
        button,
        errorMessage,
    } = props;

    const [ hasValue, setHasValue ] = useState(!!value);

    /**
     * Trigger
     */
    useEffect(() => {
        setHasValue(!!value);
    }, [ value ]);

    /**
     * Handle with input changes
     *
     * @param {object} evt - input change synthetic event
     */
    function handleChange(evt) {
        const { target } = evt;
        const inputValue = target.value;

        setHasValue(!!inputValue);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt), inputValue);
        }
    }

    /**
     * Handle with input paste
     *
     * @param {object} evt - input change synthetic event
     */
    function handlePaste(evt) {
        const { target } = (evt || {});
        const inputValue = target.value;

        if (preventPaste) {
            evt.preventDefault();
        }

        if (typeof onPaste === 'function') {
            onPaste(Object.assign({}, evt), inputValue);
        }
    }

    return (
        <AphFormControlWrapperStyled
            hasButton={!!(btn || button)}
            buttonAlign={((btn && btn.align) ? btn.align : (button && button.align) ? button.align : '')}>
            <AphFormControlStyled
                name={id}
                {...props}
                ref={ref}
                hasLabel={!!label}
                onChange={handleChange}
                onPaste={handlePaste}
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
    id: `formControlRandomID${Math.random()}`,
    label: '',
    btn: null,
    button: null,
    styles: {},
    defaultPadding: '10px',
};

/* Properties Types */
Input.propTypes = {
    id: propTypes.string.isRequired,
    label: propTypes.string,
    btn: propTypes.object,
    button: propTypes.object,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Input;
