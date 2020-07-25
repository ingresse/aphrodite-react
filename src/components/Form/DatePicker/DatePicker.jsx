/* Core Packages */
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';

/* Utilities */
import { date, hasDatePickerSupport } from '../../../utils';

/* Composition */
import { Input, InputMask, Segment } from '../../';

/* Component Itself */
const DatePicker = forwardRef(({
    id              = '',
    name            = '',
    min  : dateMin  = '',
    max  : dateMax  = '',
    value: original = '',
    onChange        = () => {},
    returnFormat    = 'YYYY-MM-DD',
    displayFormat   = 'DD/MM/YYYY',
    placeholder     = '',
    disableNative   = false,
    label           = '',
    styles: css     = {},
    errors          = {
        min  : 'Data mínima: #min',
        max  : 'Data máxima: #max',
        value: 'Data inválida',
        props: {},
    },
    ...props
}, ref) => {
    const [ evt, setEvt ]         = useState(null);
    const [ value, setValue ]     = useState('');
    const [ display, setDisplay ] = useState(null);

    const asNativeDP = !!(hasDatePickerSupport() && !disableNative);
    const type       = (asNativeDP ? 'date' : 'tel');
    const maskFormat = (asNativeDP ? '' : displayFormat.replace(/D|M|Y/g, '9'));
    const minRef     = (!dateMin ? null : date(dateMin));
    const maxRef     = (!dateMax ? null : date(dateMax));
    const dateRef    = (!value ? null : date(value));

    const {
        isInvalid,
        isInvalidMin,
        isInvalidMax,
        isInvalidValue,
    } = useMemo(() => {
        const displayStriped = (asNativeDP ? '' : (display || '').replace(/_| /g, ''));
        const isInvalidValue = (
            (asNativeDP ? (!dateRef ? false : !dateRef.isValid()) : !!(
                (displayStriped.length === displayFormat.length) &&
                !date(display, displayFormat).isValid()
            ))
        );
        const isInvalidMin = (
            (isInvalidValue || !dateRef || !minRef) ? false : (
                !minRef.subtract(1, 'days').isBefore(dateRef)
            )
        );
        const isInvalidMax = (
            (isInvalidValue || !dateRef || isInvalidMin || !maxRef) ? false : (
                !maxRef.add(1, 'days').isAfter(dateRef)
            )
        );
        const isInvalid = !!(isInvalidValue || isInvalidMin || isInvalidMax);

        return {
            isInvalid,
            isInvalidMin,
            isInvalidMax,
            isInvalidValue
        };
    }, [ value, display ]);

    const styles = {
        lineHeight: (!label ? '50px' : '30px'),
        '&.aph-form-control, &.aph-form-control--middle': {
            padding: (!label ? '0 10px' : '18px 10px 0'),
        },
        ...(!label || (label && !asNativeDP) ? {} : {
            '+ .aph-form-label': {
                top: '0',
                fontSize: '14px',
            }
        }),
        ...css,
    };
    const inputProps = {
        id         : id,
        name       : name,
        ref        : ref,
        type       : type,
        onChange   : handleChange,
        min        : ((minRef && minRef.isValid()) ? minRef.format('YYYY-MM-DD') : ''),
        max        : ((maxRef && maxRef.isValid()) ? maxRef.format('YYYY-MM-DD') : ''),
        label      : label,
        styles     : styles,
        error      : !!isInvalid,
        placeholder: (placeholder || (!asNativeDP ? displayFormat : '')),
        ...props,
    };

    function dateFormat(_date = '', _format = '') {
        if (!date) {
            return '';
        }

        const _sys = date(_date);
        const _br  = date(_date, displayFormat);

        if (_br.isValid()) {
            return _br.format(_format);
        }

        if (_sys.isValid()) {
            return _sys.format(_format);
        }

        return '';
    }

    function handleChange(evt) {
        const { target } = evt;
        const { value }  = target;
        const newDisplay = (value || '').replace(/_| /g, '');
        const newValue   = (asNativeDP ?
            (!value ? '' : date(value).format('YYYY-MM-DD')) : (
                ((newDisplay || '').length !== displayFormat.length) ?
                    '' : date(newDisplay, displayFormat).format('YYYY-MM-DD')
            )
        );

        setValue(newValue);
        setDisplay(newDisplay);
        setEvt(Object.assign(evt, {
            target: Object.assign(evt.target, {
                value: newValue,
            }),
        }));
    }

    useEffect(() => {
        if (isInvalid || !evt || (original === value) ||
            ((value || '').length !== returnFormat.length)) {
            return;
        }

        onChange(Object.assign(evt, {
            target: Object.assign(evt.target, {
                value: value,
            }),
        }), value);
    }, [ original, value, isInvalid, evt, returnFormat ]);

    useEffect(() => {
        setEvt(null);
        setValue(!original ? '' : dateFormat(original, 'YYYY-MM-DD'));
        setDisplay(!original ? null : dateFormat(original, displayFormat));
    }, [ original ]);

    return (
        <>
            {asNativeDP ? (
                <Input
                    value={value}
                    {...inputProps}
                />
            ) : (
                <InputMask
                    value={display || null}
                    mask={maskFormat}
                    {...inputProps}
                />
            )}
            {!isInvalid ? null : (
                <Segment
                    as="label"
                    htmlFor={id}
                    padding="0 10px"
                    textSize="SM"
                    textColor="error"
                    {...(errors.props || {})}>
                    {minRef && isInvalidMin && errors.min.replace('#min', minRef.format(displayFormat))}
                    {maxRef && isInvalidMax && errors.max.replace('#max', maxRef.format(displayFormat))}
                    {isInvalidValue && errors.value}
                </Segment>
            )}
        </>
    );
});

const valueTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.instanceOf(date),
    propTypes.instanceOf(Date),
]);

/* Properties types */
DatePicker.propTypes = {
    /**
     * Minimum date. String, Date or dayjs object
     */
    min: valueTypes,

    /**
     * Maximum date. String, Date or dayjs object
     */
    max: valueTypes,

    /**
     * Value. String, Date or dayjs object
     */
    value: valueTypes,

    /**
     * Changes handler
     */
    onChange: propTypes.func.isRequired,

    /**
     * Not shure if works properly.
     */
    returnFormat: propTypes.string,

    /**
     * Not shure if works properly.
     */
    displayFormat: propTypes.string,


    /**
     * Not shure if works properly.
     */
    disableNative: propTypes.bool,

    /**
     * Errors Messages
     */
    errors: propTypes.object,
};

/* Exporting */
export default DatePicker;
