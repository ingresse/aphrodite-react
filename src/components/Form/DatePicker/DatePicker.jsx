import React, { Fragment, useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import { hasDatePickerSupport } from '../../../utils';
import Input from '../Input/Input';
import InputMask from '../InputMask/InputMask';
import Segment from '../../Segment/Segment';

const formatBR  = 'DD/MM/YYYY';
const formatSYS = 'YYYY-MM-DD';

function DatePicker({
    id = '',
    min: dateMin = '',
    max: dateMax = '',
    value: original = '',
    onChange = () => {},
    returnFormat = formatSYS,
    displayFormat = formatBR,
    placeholder = formatBR,
    disableNative = false,
    changeOnInvalid = true,
    label = '',
    styles: css = {},
    errors = {
        min: 'Data mínima: #min',
        max: 'Data máxima: #max',
        value: 'Data inválida',
        props: {},
    },
    dateLib = () => ({
        format: () => 'you should pass "dateLib" as prop to DatePicker works',
        isValid: () => false,
    }),
    ...props
}) {
    const [ evt, setEvt ] = useState(null);
    const [ value, setValue ] = useState('');
    const [ display, setDisplay ] = useState(null);

    const asNativeDP = !!(hasDatePickerSupport() && !disableNative);
    const type = (asNativeDP ? 'date' : 'tel');
    const maskFormat = (asNativeDP ? '' : displayFormat.replace(/D|M|Y/g, '9'));
    const minRef = (!dateMin ? null : dateLib(dateMin));
    const maxRef = (!dateMax ? null : dateLib(dateMax));
    const dateRef = (!value ? null : dateLib(value));

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
                !dateLib(display, displayFormat).isValid()
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

        // eslint-disable-next-line
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
        id,
        type: type,
        onChange: handleChange,
        min: dateMin,
        max: dateMax,
        label: label,
        styles: styles,
        error: !!isInvalid,
        placeholder: (placeholder || (!asNativeDP ? displayFormat : '')),
        ...props,
    };

    function dateFormat(_date = '', _format = '') {
        if (!_date) {
            return '';
        }

        const _sys     = dateLib(_date);
        const _display = dateLib(_date, displayFormat);

        if (_display.isValid()) {
            return _display.format(_format);
        }

        if (_sys.isValid()) {
            return _sys.format(_format);
        }

        return '';
    }

    function handleChange(evt) {
        const { target } = evt;
        const { value } = target;
        const newDisplay = (value || '').replace(/_| /g, '');
        const newValue = (asNativeDP ?
            dateFormat(value, formatSYS) : (
                ((newDisplay || '').length !== returnFormat.length) ?
                    '' : dateFormat(newDisplay, formatSYS)
            )
        );

        setValue(newValue);
        setDisplay(newDisplay);
        setEvt(Object.assign(evt, {
            target: Object.assign(target, {
                value: newValue,
            }),
        }));
    }

    useEffect(() => {
        if (!evt ||
            (original === value) ||
            (!changeOnInvalid && isInvalid) ||
            ((value || '').length !== returnFormat.length)) {
            return;
        }

        onChange(evt, value);
    }, [ original, value, isInvalid, evt, returnFormat ]);

    useEffect(() => {
        setEvt(null);
        setValue(!original ? '' : dateFormat(original, returnFormat));
        setDisplay(!original ? null : dateFormat(original, displayFormat));
    }, [ original ]);

    return (
        <Fragment>
            {asNativeDP ? (
                <Input
                    value={value}
                    {...inputProps}
                />
            ) : (
                <InputMask
                    value={display || null}
                    mask={maskFormat}
                    inputMode="decimal"
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
        </Fragment>
    );
}

const valueTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.instanceOf(Date),
]);

DatePicker.propTypes = {
    min: valueTypes,
    max: valueTypes,
    value: valueTypes,
    onChange: propTypes.func.isRequired,
    changeOnInvalid: propTypes.bool,
    returnFormat: propTypes.string,
    displayFormat: propTypes.string,
    disableNative: propTypes.bool,
    errors: propTypes.object,
    dateLib: propTypes.func.isRequired,
};

export default DatePicker;
