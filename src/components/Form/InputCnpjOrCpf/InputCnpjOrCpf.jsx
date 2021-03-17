/* eslint-disable prefer-object-spread */
import React, { useEffect, useState } from 'react';
import { documents, patterns } from '../../../utils';
import Input from '../Input/Input';

export default function InputCnpjOrCpf({
  value: srcValue = '',
  onBlur = () => {},
  onChange = () => {},
  validationDelay = 1000,
  ...props
}) {
  const [timer, setTimer] = useState(null);
  const [value, setValue] = useState(srcValue);

  function handleEvent(evt, optValue) {
    const { target } = evt;
    const { id: inputId, value: inputValue } = target;
    const valueToFilter = (typeof optValue === 'string') ? optValue : inputValue;
    const filteredValue = patterns.numeric(valueToFilter, ['-', '.', '/', ' ']);

    setValue(filteredValue);

    return Object.assign({}, evt, {
      target: Object.assign({}, evt.target, {
        id: inputId,
        value: filteredValue,
      }),
    });
  }

  function handleValidation(evt, callback = () => {}) {
    const { target } = evt;
    const { value: inputValue } = target;
    const isValid = documents.valid(inputValue);
    const optValue = (isValid ? documents.format(inputValue) : undefined);

    callback(handleEvent(evt, optValue));
  }

  function handleBlur(evt) {
    clearTimeout(timer);
    handleValidation(handleEvent(evt), onBlur);
  }

  function handleChange(evt) {
    const newEvt = handleEvent(evt);

    clearTimeout(timer);
    onChange(newEvt);
    setTimer(setTimeout(() => {
      handleValidation(newEvt, onChange);
    }, validationDelay));
  }

  useEffect(() => {
    setValue(srcValue);

    return () => {
      clearTimeout(timer);
    };
  }, [srcValue, timer]);

  return (
    <Input
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      inputMode="numeric"
      {...props}
    />
  );
}
