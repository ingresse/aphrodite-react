import React, { useCallback, useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { MEDIA_QUERIES } from '../../../constants';
import { hasDatePickerSupport } from '../../../utils';
import Input from '../Input/Input';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Styled from '../../Styled/Styled';

const formatBR  = 'DD/MM/YYYY';
const formatSYS = 'YYYY-MM-DD';

function DatePicker({
    id = '',
    min: dateMin = '',
    max: dateMax = '',
    value: original = '',
    onChange = () => {},
    formatReturn = formatSYS,
    formatDisplay = formatBR,
    placeholder = formatBR,
    label = '',
    styles: css = {},
    disabled,
    erasable = true,
    messageErase = 'Limpar data',
    messageInvalid = 'Data inválida',
    messageMin = 'Data mínima: #min',
    messageMax = 'Data máxima: #max',
    messageWrapper = {},
    dateLib = dayjs,
    ...props
}) {
    const [ evt, setEvt ] = useState(null);
    const [ value, setValue ] = useState('');
    const [ display, setDisplay ] = useState(null);
    const [ , setErased ] = useState(false);

    const asNativeDP = hasDatePickerSupport();
    const type = (asNativeDP ? 'date' : 'tel');
    const minRef = (!dateMin ? null : dateLib(dateMin).set('second', 0).set('minute', 0).set('hour', 0));
    const maxRef = (!dateMax ? null : dateLib(dateMax).set('second', 59).set('minute', 59).set('hour', 23));
    const dateRef = (!value ? null : dateLib(value));
    const min = minRef && minRef.isValid() ? minRef.format(formatSYS) : '';
    const max = maxRef && maxRef.isValid() ? maxRef.format(formatSYS) : '';

    const {
        isInvalid,
        isInvalidMin,
        isInvalidMax,
        isInvalidValue,
    } = useMemo(() => {
        const displayStriped = (asNativeDP ? '' : (display || '').replace(/_| /g, ''));
        const isInvalidValue = (
            (asNativeDP ? (!dateRef ? false : !dateRef.isValid()) : !!(
                (displayStriped.length === formatDisplay.length) &&
                !dateLib(display, formatDisplay).isValid()
            ))
        );
        const isInvalidMin = (
            (isInvalidValue || !dateRef || !minRef) ? false : !minRef.subtract(1, 'days').isBefore(dateRef)
        );
        const isInvalidMax = (
            (isInvalidValue || !dateRef || isInvalidMin || !maxRef) ? false : !maxRef.isAfter(dateRef)
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
        type,
        label,
        styles,
        onChange: handleChange,
        error: !!isInvalid,
        disabled: !asNativeDP || disabled,
        placeholder: (!asNativeDP ? 'Navegador incompatível' : placeholder || ''),
        ...props,
        min,
        max,
    };

    function dateFormat(_date = '', _format = '') {
        if (!_date) {
            return '';
        }

        const _sys     = dateLib(_date);
        const _display = dateLib(_date, formatDisplay);

        if (_display.isValid()) {
            return _display.format(_format);
        }

        if (_sys.isValid()) {
            return _sys.format(_format);
        }

        return '';
    }

    function handleChange(evt) {
        const { target } = evt || {};
        const { value } = target || {};
        const newValue = !value ? '' : dateLib(value);
        const valueReturn = !newValue ? '' : newValue.format(formatReturn);

        setErased(!newValue);
        setValue(newValue.format(formatSYS));
        setEvt(Object.assign(evt, {
            target: Object.assign(target, {
                value: valueReturn,
            }),
        }));
    }

    const handleErase = useCallback((btnEvt) => {
        onChange(Object.assign((evt || btnEvt || {}), {
            target: Object.assign((evt || btnEvt || {}).target, {
                id,
                value: '',
            }),
        }));

        setValue('');
        setDisplay('');
        setErased(true);
    }, [id, handleChange]);

    useEffect(() => {
        if (!evt ||
            (original === value) ||
            (value && (value || '').length !== formatReturn.length)
        ) {
            return;
        }

        onChange(evt);
    }, [ original, value, isInvalid, evt, formatReturn ]);

    useEffect(() => {
        setEvt(null);
        setValue(!original ? '' : dateFormat(original, formatReturn));
        setDisplay(!original ? null : dateFormat(original, formatDisplay));
    }, [ original ]);

    return (
        <Styled styles={{ position: 'relative' }}>
            <Input
                value={!asNativeDP ? '' : value}
                {...inputProps}
            />
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
                        [MEDIA_QUERIES.LT.SM]: {
                            top: '15px',
                            right: 0,
                        },
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
}

const valueTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.instanceOf(Date),
    propTypes.instanceOf(dayjs),
]);

DatePicker.propTypes = {
    min: valueTypes,
    max: valueTypes,
    value: valueTypes,
    onChange: propTypes.func,
};

export default DatePicker;