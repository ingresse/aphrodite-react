import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import dayjsParseFormat from 'dayjs/plugin/customParseFormat';
import { hasDatePickerSupport } from '../../../utils';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Input from '../Input/Input';
import InputMask from '../InputMask/InputMask';
import Styled from '../../Styled/Styled';

dayjs.extend(dayjsParseFormat);

const formatBR  = 'DD/MM/YYYY';
const formatSYS = 'YYYY-MM-DD';

const DatePicker = memo(forwardRef(({
    id = '',
    name = '',
    min: dateMin = '',
    max: dateMax = '',
    value: original,
    onChange = () => {},
    formatReturn = formatSYS,
    formatDisplay = formatBR,
    placeholder = formatBR,
    erasable = true,
    disableNative = false,
    label = '',
    messageErase = 'Limpar data',
    messageInvalid = 'Data inválida',
    messageMin = 'Data mínima: #min',
    messageMax = 'Data máxima: #max',
    messageWrapper = {},
    styles = {},
    dateLib = dayjs,
    disabled,
    ...props
}, ref) => {
    const [ evt, setEvt ] = useState(null);
    const [ value, setValue ] = useState('');
    const [ display, setDisplay ] = useState('');
    const [ erased, setErased ] = useState(false);
    const inputRef = useRef(ref || null);
    const asNativeDP = !!(hasDatePickerSupport() && !disableNative);
    const type = (asNativeDP ? 'date' : 'tel');
    const maskFormat = (asNativeDP ? '' : formatDisplay.replace(/D|M|Y/g, '9'));
    const formatDisplayInput = formatDisplay.replace(/_| |\//g, '');
    const minRef = (!dateMin ? null : dateLib(dateMin));
    const maxRef = (!dateMax ? null : dateLib(dateMax));
    const dateRef = (!value ? null : dateLib(value));
    const inputMin = minRef && minRef.isValid() ? minRef.format(formatSYS) : '';
    const inputMax = maxRef && maxRef.isValid() ? maxRef.format(formatSYS) : '';
    const fits = useCallback((someDate, compare) => ((someDate || '').length === (compare || formatReturn).length), [formatReturn]);

    const handleValidation = useCallback((optValue, optDisplay) => {
        const newValue       = (typeof optValue !== 'undefined' ? optValue : value);
        const newDisplay     = (!optValue && typeof optDisplay !== 'undefined' ? optDisplay : display);
        const displayDigits  = asNativeDP ? null : (newDisplay || '').replace(/_| |\//g, '');
        const dontFitDisplay = !!(!asNativeDP && !fits(newDisplay, formatDisplay));
        const dontFitValue   = !!(asNativeDP && !fits(newValue, formatSYS));
        const dontFit        = !newValue || dontFitDisplay || dontFitValue;
        const newRef         = asNativeDP ? dateLib(newValue || undefined) : dateLib((displayDigits || undefined), formatDisplayInput, true);
        const isInvalidValue = (dontFit ? false : (
            (asNativeDP ? (!newRef ? false : !newRef.isValid()) : !dateLib(newDisplay, formatDisplay).isValid())
        ));
        const isInvalidMin = ((dontFit || (!newRef || !minRef)) ? false : (
            !minRef.subtract(1, 'days').isBefore(newRef)
        ));
        const isInvalidMax = ((dontFit || (!newRef || !maxRef)) ? false : (
            !maxRef.add(1, 'days').isAfter(newRef)
        ));
        const isInvalid = !!(isInvalidValue || isInvalidMin || isInvalidMax);

        return {
            isInvalid: !!isInvalid,
            isInvalidMin: !!isInvalidMin,
            isInvalidMax: !!isInvalidMax,
            isInvalidValue: !!isInvalidValue
        };
    }, [ original, value, display, dateRef, maxRef, minRef, asNativeDP, formatDisplay ]);

    const {
        isInvalid,
        isInvalidMin,
        isInvalidMax,
        isInvalidValue,
    } = handleValidation(value, display);

    const handleChange = useCallback((evt) => {
        const { target } = evt;
        const { value: updatedValue } = target;
        const displayDigits = asNativeDP ? null : (updatedValue || '').replace(/_| |\//g, '');
        const newRef        = asNativeDP ? dateLib(updatedValue || undefined) : dateLib((displayDigits || undefined), formatDisplayInput, true);
        const newRefValid   = newRef.isValid();
        const newValue      = (!updatedValue || !newRefValid ? '' : newRef.format(formatSYS));
        const returnValue   = (!updatedValue || !newRefValid ? '' : newRef.format(formatReturn));
        const { isInvalid, isInvalidMin, isInvalidMax, isInvalidValue } = handleValidation((updatedValue || undefined), (displayDigits || undefined));
        const newEvt        = Object.assign(evt, {
            target: Object.assign(
                {
                    isInvalid, isInvalidMin, isInvalidMax, isInvalidValue,
                },
                target, {
                    date: dateLib(returnValue || undefined),
                    value: asNativeDP ? updatedValue : newValue,
                },
            ),
        });

        setValue(newValue);
        setDisplay(updatedValue || null);
        setErased(!returnValue);
        setEvt(newEvt);
        onChange(newEvt);
    }, [asNativeDP, formatDisplay, formatDisplayInput, formatReturn, handleValidation]);

    const handleErase = useCallback((btnEvt) => {
        handleChange(Object.assign((evt || btnEvt || {}), {
            target: Object.assign((evt || btnEvt || {}).target, {
                id,
                name,
                value: '',
                isInvalid: false,
                isInvalidMin: false,
                isInvalidMax: false,
                isInvalidValue: false,
            }),
        }));

        setValue('');
        setDisplay('');
        setErased(true);

        try {
            if (!asNativeDP) {
                inputRef.current.value = '';
            }
        } catch (e) {};
    }, [id, name, handleChange, inputRef]);

    useEffect(() => {
        const orUndefined   = (original || undefined);
        const parsedDisplay = dateLib(orUndefined, formatDisplay, true);
        const parsedValue   = dateLib(orUndefined);
        const nDisplay      = original && parsedDisplay.isValid() ? parsedDisplay.format(formatReturn) : undefined;
        const nValue        = original && parsedValue.isValid() ? parsedValue.format(formatReturn) : undefined;
        const parsed        = (nDisplay || nValue);

        if (erased || !parsed || (parsed === value)) {
            return;
        }

        const newValueRef   = dateLib(parsed);
        const newDisplay    = newValueRef.format(formatDisplay);
        const newValue      = newValueRef.format(formatReturn);
        const { isInvalid } = handleValidation(newValue, newDisplay);
        const { target }    = evt || {};
        const { isInvalid: isInvalidOnTarget } = target || {};

        setEvt(null);
        setValue(newValue);
        setDisplay(newDisplay);

        if (isInvalid !== isInvalidOnTarget) {
            onChange({ target: { id, name, value: newValue || undefined, isInvalid }});
        }
    }, [ value, evt, original, formatDisplay, formatReturn, erased, id, name, handleChange, handleValidation ]);

    const inputProps = {
        id,
        name,
        type,
        label,
        disabled,
        onChange: handleChange,
        min: inputMin,
        max: inputMax,
        error: !!isInvalid,
        placeholder: (placeholder || (!asNativeDP ? formatDisplay : '')),
        ...props,
        value: (asNativeDP ? (value || '') : (display || '')),
        styles: {
            fontFamily: 'monospace',
            ...styles,
        },
    };

    return (
        <Styled styles={{ position: 'relative' }}>
            {asNativeDP ? (
                <Input
                    ref={inputRef}
                    {...inputProps}
                />
            ) : (
                <InputMask
                    inputMode="decimal"
                    mask={maskFormat}
                    maskChar={' '}
                    inputRef={inputRef}
                    {...inputProps}
                />
            )}
            {erasable && ((value || display) && !disabled) && (
                <ButtonIcon
                    type="button"
                    tabIndex="-1"
                    radius="0 10px 10px 0"
                    title={messageErase}
                    onClick={handleErase}
                    size={30}
                    styles={{
                        position: 'absolute',
                        top: '19px',
                        right: asNativeDP ? '40px' : 0,
                    }}
                    icon={{
                        slug: 'times',
                        color: 'base',
                    }}
                />
            )}
            {isInvalid && (
                <Styled
                    as="label"
                    htmlFor={id}
                    padding="0 10px"
                    textSize="sm"
                    textColor="error"
                    {...messageWrapper}
                    styles={{
                        display: 'block',
                        ...(messageWrapper.styles || {}),
                    }}
                >
                    {minRef && isInvalidMin && messageMin.replace('#min', minRef.format(formatDisplay))}
                    {maxRef && isInvalidMax && messageMax.replace('#max', maxRef.format(formatDisplay))}
                    {isInvalidValue && messageInvalid}
                </Styled>
            )}
        </Styled>
    );
}));

const valueTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.instanceOf(Date),
    propTypes.instanceOf(dayjs),
]);

DatePicker.propTypes = {
    /**
     * Day.js is the default, or you can pass Moment.js
     */
    dateLib: propTypes.func,

    /**
     * Don't use it. haha
     */
    disableNative: propTypes.bool,

    /**
     * Only to `disableNative` cases or browsers without default datepicker.
     */
    formatDisplay: propTypes.string,

    /**
     * Maximum date limit
     */
    max: valueTypes,

    /**
     * Message to maximum date limit
     */
    messageMax: propTypes.string,

    /**
     * Message to minimum date limit
     */
    messageMin: propTypes.string,

    /**
     * Props of message wrapper component. The "Styled" component props.
     */
    messageWrapper: propTypes.object,

    /**
     * Minimum date limit
     */
    min: valueTypes,

    /**
     * To update the input `value`
     */
    onChange: propTypes.func,

    /**
     * If you need a specific format, try this.
     * Eg.: 'DD/MM/YYYY'
     */
    formatReturn: propTypes.string,

    /**
     * Input value
     */
    value: valueTypes,
};

export default DatePicker;
