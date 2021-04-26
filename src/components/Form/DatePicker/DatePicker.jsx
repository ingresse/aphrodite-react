import React, { useCallback, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { MEDIA_QUERIES } from '../../../constants';
import { hasDatePickerSupport } from '../../../utils';
import Input from '../Input/Input';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Styled from '../../Styled/Styled';
import InputDateFallback from '../InputDateFallback/InputDateFallback';

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
    if (!hasDatePickerSupport()) {
        return (
            <InputDateFallback
                id={id}
                min={dateMin}
                max={dateMax}
                value={original}
                onChange={onChange}
                formatDisplay={formatDisplay}
                formatReturn={formatReturn}
                placeholder={placeholder}
                label={label}
                disabled={disabled}
                erasable={erasable}
                messageErase={messageErase}
                messageInvalid={messageInvalid}
                messageMin={messageMin}
                messageMax={messageMax}
                styles={css}
                {...props}
            />
        );
    }

    const type = 'date';
    const minRef = (!dateMin ? null : dateLib(dateMin).set('second', 0).set('minute', 0).set('hour', 0));
    const maxRef = (!dateMax ? null : dateLib(dateMax).set('second', 59).set('minute', 59).set('hour', 23));
    const min = minRef && minRef.isValid() ? minRef.format(formatSYS) : '';
    const max = maxRef && maxRef.isValid() ? maxRef.format(formatSYS) : '';
    const [value, setValue] = useState(!original ? '' : dateLib(original).format(formatSYS));

    const validate = useCallback((newValue = '') => {
        const dateRef = dateLib(newValue).isValid() ? dateLib(newValue) : null;
        const dateMinRef = (!min || !dateLib(min).isValid()) ? null : dateLib(min).set('second', 0).set('minute', 0).set('hour', 0);
        const dateMaxRef = (!max || !dateLib(max).isValid()) ? null : dateLib(max).set('second', 59).set('minute', 59).set('hour', 23);
        const dateInvalid = !!(!dateRef || !dateRef.isValid());
        const isInvalidValue = !!(newValue && dateInvalid);
        const isInvalidMin = (
            (dateInvalid || isInvalidValue || !dateRef || !dateMinRef) ? false : (
                dateRef.set('second', 1).set('minute', 0).set('hour', 0).isBefore(dateMinRef)
            )
        );
        const isInvalidMax = (
            (dateInvalid || isInvalidValue || !dateRef || !dateMaxRef) ? false : (
                dateRef.set('second', 58).set('minute', 59).set('hour', 23).isAfter(dateMaxRef)
            )
        );
        const isInvalid = !!(isInvalidValue || isInvalidMin || isInvalidMax);

        return {
            isInvalid,
            isInvalidMin,
            isInvalidMax,
            isInvalidValue
        };
    }, [min, max]);

    const handleChange = useCallback((evt) => {
        const { target, ...srcEvt } = evt;
        const { value: targetValue, ...srcTarget } = target;
        const normalized = dateLib(targetValue);
        const newValue = normalized.isValid() ? normalized.format(formatSYS) : '';
        const returnValue = normalized.isValid() ? normalized.format(formatReturn) : '';
        const { isInvalid } = validate(newValue);

        setValue(newValue);

        if (original !== returnValue) {
            onChange(Object.assign({}, srcEvt, {
                target: Object.assign({}, srcTarget, {
                    id,
                    value: isInvalid ? '' : returnValue,
                }),
            }));
        }
    }, [onChange, id, formatReturn, validate, original]);

    const handleErase = useCallback((btnEvt) => {
        handleChange(Object.assign((btnEvt || {}), {
            target: Object.assign((btnEvt || {}).target, {
                id,
                value: '',
            }),
        }));
    }, [id, handleChange]);

    useEffect(() => {
        const normalized = dateLib(original);

        if (!original || !normalized.isValid()) {
            return;
        }

        setValue(normalized.format(formatSYS));
    }, [original]);

    const {
        isInvalid,
        isInvalidMin,
        isInvalidMax,
        isInvalidValue,
    } = validate(value);

    const styles = {
        lineHeight: (!label ? '50px' : '30px'),
        '&.aph-form-control, &.aph-form-control--middle': {
            padding: (!label ? '0 10px' : '18px 10px 0'),
        },
        ...(!label? {} : {
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
        placeholder,
        onChange: handleChange,
        error: !!isInvalid,
        disabled: disabled,
        ...props,
        min,
        max,
    };

    return (
        <Styled styles={{ position: 'relative' }}>
            <Input
                value={value}
                {...inputProps}
            />
            {erasable && value && !disabled && (
                <ButtonIcon
                    type="button"
                    tabIndex="-1"
                    radius="10px"
                    title={messageErase}
                    onClick={handleErase}
                    size={30}
                    styles={{
                        position: 'absolute',
                        top: '19px',
                        right: '40px',
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

DatePicker.defaultProps = {
    formatDisplay: 'DD/MM/YYYY',
    formatReturn: 'YYYY-MM-DD',
    onChange: () => {},
    value: '',
    min: '',
    max: '',
    maskChar: '_',
    disabled: false,
    erasable: true,
    messageErase: 'Limpar data',
    messageInvalid: 'Data inválida',
    messageMin: 'Data mínima: #min',
    messageMax: 'Data máxima: #max',
};

DatePicker.propTypes = {
    /**
     * Date instance, DayJS instance or a String with date format 'YYYY-MM-DD'
     */
    value: valueTypes.isRequired,
    onChange: propTypes.func.isRequired,
    min: valueTypes,
    max: valueTypes,
    disabled: propTypes.bool,
    erasable: propTypes.bool,
    messageErase: propTypes.string,
    messageInvalid: propTypes.string,
    messageMin: propTypes.string,
    messageMax: propTypes.string,
    /**
     * `InputDateFallback` prop
     */
    formatDisplay: propTypes.string,
    /**
     * `InputDateFallback` prop
     */
    formatReturn: propTypes.string,
    /**
     * `InputDateFallback` prop
     */
    maskChar: propTypes.string,
};

export default DatePicker;