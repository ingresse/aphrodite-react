import React, { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import dayjsCustomParsePlugin from 'dayjs/plugin/customParseFormat';
import propTypes from 'prop-types';
import InputMask from '../InputMask/InputMask';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Styled from '../../Styled/Styled';
import { MEDIA_QUERIES } from '../../../constants';

dayjs.extend(dayjsCustomParsePlugin);

function InputDateFallback({
    id,
    formatDisplay,
    formatReturn,
    placeholder,
    onChange,
    min,
    max,
    maskChar,
    disabled,
    erasable,
    messageErase,
    messageInvalid,
    messageMin,
    messageMax,
    error,
    errorMessage,
    ...props
}) {
    const minRef = !min || !dayjs(min).isValid() ? null : dayjs(min).set('second', 0).set('minute', 0).set('hour', 0);
    const maxRef = !max || !dayjs(max).isValid() ? null : dayjs(max).set('second', 59).set('minute', 59).set('hour', 23);
    const maskFormat = formatDisplay.replace(/D|M|Y/g, '9');
    const [value, setValue] = useState(!props.value ? '' : dayjs(props.value).format(formatDisplay));

    const validate = useCallback((newValue = '') => {
        const dateRef = dayjs(newValue, formatDisplay).isValid() ? dayjs(newValue, formatDisplay) : null;
        const dateMinRef = (!min || !dayjs(min).isValid()) ? null : dayjs(min).set('second', 0).set('minute', 0).set('hour', 0);
        const dateMaxRef = (!max || !dayjs(max).isValid()) ? null : dayjs(max).set('second', 59).set('minute', 59).set('hour', 23);
        const dateInvalid = !!(!dateRef || !dateRef.isValid());
        const valueDigits = newValue.replace(/\D/g, '');
        const formatDisplayDigits = formatDisplay.replace(/\/|-| /g, '');
        const isInvalidValue = (
            (valueDigits.length === formatDisplayDigits.length) && dateInvalid
        );
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
    }, [formatDisplay, min, max]);

    const handleChange = useCallback((evt) => {
        const { target, ...srcEvt } = evt;
        const { value: targetValue, ...srcTarget } = target;
        const normalized = dayjs(targetValue, formatDisplay);
        const newValue = normalized.isValid() ? normalized.format(formatReturn) : '';
        const { isInvalid } = validate(targetValue);

        setValue(targetValue);

        if (props.value !== newValue) {
            onChange(Object.assign(srcEvt, {
                target: Object.assign(srcTarget, {
                    id,
                    value: isInvalid ? '' : newValue,
                }),
            }));
        }
    }, [id, onChange, formatDisplay, formatReturn, validate, props.value]);

    const handleErase = useCallback((btnEvt) => {
        handleChange(Object.assign((btnEvt || {}), {
            target: Object.assign((btnEvt || {}).target, {
                id,
                value: '',
            }),
        }));
    }, [id, handleChange]);

    useEffect(() => {
        const normalized = dayjs(props.value);

        if (!props.value || !normalized.isValid()) {
            return;
        }

        setValue(normalized.format(formatDisplay));
    }, [props.value, formatDisplay, formatReturn]);

    const {
        isInvalid,
        isInvalidMin,
        isInvalidMax,
    } = validate(value);

    const errorMessageFinal = (
        errorMessage || (
            isInvalidMin ? messageMin.replace('#min', minRef.format(formatDisplay)) : (
                isInvalidMax ? messageMax.replace('#max', maxRef.format(formatDisplay)) : (
                    isInvalid ? messageInvalid : ''
                )
            )
        )
    );

    return (
        <Styled styles={{ position: 'relative' }}>
            <InputMask
                inputMode="decimal"
                type="text"
                {...props}
                id={id}
                mask={maskFormat}
                disabled={disabled}
                value={value || ''}
                onChange={handleChange}
                placeholder={placeholder || formatDisplay}
                error={error || isInvalid}
                errorMessage={errorMessageFinal}
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
                        right: 0,
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
        </Styled>
    );
}

const valueTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.instanceOf(Date),
    propTypes.instanceOf(dayjs),
]);

InputDateFallback.defaultProps = {
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

InputDateFallback.propTypes = {
    /**
     * Date instance, DayJS instance or a String with date format 'YYYY-MM-DD'
     */
    onChange: propTypes.func,
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
    maskChar: propTypes.string,
    formatDisplay: propTypes.string,
    formatReturn: propTypes.string,
};

export default InputDateFallback;
