/* Core Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { formatNumberRound, patterns } from '../../../utils';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled from '../FormControlWrapperStyled';
import AphFormControlStyled from '../FormControlStyled';
import AphFormControlLabelStyled from '../FormControlLabelStyled';
import AphFormControlButtonStyled from '../FormControlButtonStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const InputNumeric = memo(forwardRef(({
    id,
    accept,
    className,
    label,
    labelProps,
    placeholder,
    error,
    errorMessage,
    posfix,
    suggestions,
    onChange,
    onBlur,
    onFocus,
    before,
    after,
    doubleDecimal,
    ...props
}, ref) => {
    const [ inFocus, setInFocus ] = useState(false);
    const hasValue = !!(props.value || (typeof props.value === 'number'));
    const hasSuggestions = !!(suggestions && suggestions.length);
    const list = !hasSuggestions ? {} : {
        list: `${id}-suggestions`,
    };

    function getInRange(newValue) {
        if (!newValue) {
            return newValue;
        }

        const parsed    = parseFloat(newValue, 10);
        const parsedMin = parseFloat(props.min, 10);
        const parsedMax = parseFloat(props.max, 10);

        if ((typeof parsedMin === 'number') && (parsedMin > parsed)) {
            return parsedMin;
        }

        if ((typeof parsedMax === 'number') && (parsedMax < parsed)) {
            return parsedMax;
        }

        return newValue;
    }

    function handleEvt(evt, shouldRound = false) {
        const { target } = evt;
        const { value }  = target;
        const rangeValue = getInRange(value);
        const filtered   = patterns.numeric(rangeValue, accept);
        const newValue   = (shouldRound && doubleDecimal ? formatNumberRound(parseFloat(filtered, 10)) : filtered);

        return Object.assign({}, evt, {
            target: Object.assign({}, evt.target, {
                id,
                value: newValue,
            }),
        });
    }

    function handleChange(evt, shouldRound = false) {
        const newEvt = handleEvt(evt, shouldRound);

        onChange(newEvt, newEvt.target.value);
    }

    function handleBlur(evt) {
        setInFocus(false);
        onBlur(handleEvt(evt, true));
        handleChange(evt, true);
    }

    function handleFocus(evt) {
        setInFocus(true);
        onFocus(handleEvt(evt));
    }

    return (
        <AphFormControlWrapperStyled
            hasError={!!error}
            hasLabel={!!label}>
            {hasValue && before && (
                <AphFormControlButtonStyled
                    left
                    as="label"
                    htmlFor={id}
                    textColor={(inFocus || hasValue) ? 'base' : (props.disabled ? 'disabled' : 'helper')}
                    styles={{
                        fontSize: '16px',
                        ...(label ? {
                            top: '20px',
                        } : {}),
                    }}>
                    {before}
                </AphFormControlButtonStyled>
            )}
            <AphFormControlStyled
                {...props}
                {...list}
                id={id}
                ref={ref}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className={`aph-form-control ${(!label || (!label && hasValue)) ? 'aph-form-control--middle' : ''} ${className || ''}`}
                placeholder={placeholder}
                hasLabel={!!label}
                hasPosfix={!!posfix}
                hasBefore={!!before && hasValue}
                hasAfter={!!after && hasValue}
            />
            {label && (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={id}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            {hasValue && after && (
                <AphFormControlButtonStyled
                    as="label"
                    htmlFor={id}
                    textColor={(inFocus || hasValue) ? 'base' : (props.disabled ? 'disabled' : 'helper')}
                    styles={{
                        fontSize: '16px',
                        ...((label && inFocus || (label && hasValue)) ? {
                            top: '20px',
                        } : {}),
                    }}>
                    {after}
                </AphFormControlButtonStyled>
            )}
            {errorMessage && (
                <AphFormControlErrorMsgStyled
                    htmlFor={id}
                    className="aph-form-error">
                    {errorMessage || ''}
                </AphFormControlErrorMsgStyled>
            )}
            {hasSuggestions && (
                <datalist id={list.list}>
                    {suggestions.map((suggestion, index) => (
                        <option
                            key={`suggestion-${index}`}
                            value={suggestion}
                        />
                    ))}
                </datalist>
            )}
        </AphFormControlWrapperStyled>
    );
}));

/* Default Properties */
InputNumeric.defaultProps = {
    id: '',
    label: '',
    labelProps: {},
    accept: [],
    min: undefined,
    max: undefined,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    step: 0.1,
    styles: {},
    suggestions: [],
    type: 'text',
    inputMode: 'numeric',
    value: undefined,
    before: '',
    after: '',
    doubleDecimal: false,
    defaultPadding: '10px',
};

const valueTypes = propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
]);

/* Properties Types */
InputNumeric.propTypes = {
    id: propTypes.string.isRequired,
    label: propTypes.string,
    labelProps: propTypes.object,
    accept: propTypes.array,
    min: valueTypes,
    max: valueTypes,
    onChange: propTypes.func.isRequired,
    step: valueTypes,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
    suggestions: propTypes.array,
    value: valueTypes,
    before: propTypes.string,
    after: propTypes.string,
    doubleDecimal: propTypes.bool,
};

/* Exporting */
export default InputNumeric;
