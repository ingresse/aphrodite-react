import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks';
import { colors, focus, patterns } from '../../../utils';
import Col from '../../Grid/Column';
import Icon from '../../Icons/Icon';
import Label from '../../Typography/Label/Label';
import Segment from '../../Segment/Segment';
import Row from '../../Grid/Row';
import Tooltip from '../../Tooltip/Tooltip';
import InputNumeric from '../InputNumeric/InputNumeric';

export default function InputOneTimePassword({
  id = 'otp',
  size = 6,
  label = '',
  labelTooltip = '',
  labelTooltipIcon = 'help',
  placeholder = '',
  value = '',
  onChange = () => {},
  onKeyPress = () => {},
  onKeyUp = () => {},
  onKeyDown = () => {},
  getPrefix = (fieldId = '') => `${id}_${fieldId}`,
  getElementSelector = (inputIndex) => `#${getPrefix(inputIndex)}`,
  autoFocus = false,
  center = false,
  disabled = false,
  disableds = [],
  wrapper = {},
  color = colors.get('secondary'),
  ...props
}) {
  const { xs } = useWindowSize();
  const [composed, setComposed] = useState({});
  const alignment = !center ? '' : 'center';

  function handleFilteredEvt(evt, otpIndexId, shouldUpdate = false, optValue = '', emptyValue = false) {
    const filteredValue = patterns.numeric(`${emptyValue ? '' : (optValue || evt.target.value || '')}`, []);
    const newComposed = {
      ...composed,
      [otpIndexId]: filteredValue,
    };
    const fullValue = Object.values(newComposed).join('');
    const evtUpdated = Object.assign({}, evt, {
      target: Object.assign({}, evt.target, {
        id,
        value: fullValue,
      }),
    });

    if (shouldUpdate) {
      setComposed(newComposed);
      onChange(evtUpdated);
    }

    return evtUpdated;
  }

  function focusNext(inputIndex) {
    const nextIndex = (inputIndex + 1);

    if (nextIndex > (size - 1)) {
      return;
    }

    focus(getElementSelector(nextIndex));
  }

  function focusPrev(inputIndex) {
    const previousIndex = (inputIndex - 1);

    if (previousIndex < 0) {
      return;
    }

    focus(getElementSelector(previousIndex));
  }

  function isValid(keyCode) {
    return keyCode >= 48 && keyCode <= 57;
  }

  function handleBackspace(evt, inputIndex) {
    if (evt.target.value === '') {
      focusPrev(inputIndex);
    } else {
      handleFilteredEvt(evt, getPrefix(inputIndex), true, '', true);
    }
  }

  function handleKeyPress(evt, inputIndex) {
    if (!isValid(evt.keyCode) && (evt.charCode !== 13)) {
      evt.preventDefault();
    }

    onKeyPress(handleFilteredEvt(evt, getPrefix(inputIndex)));
  }

  function handleKeyUp(evt, inputIndex) {
    if (isValid(evt.keyCode)) {
      handleFilteredEvt(evt, getPrefix(inputIndex), true, String.fromCharCode(evt.keyCode));
      focusNext(inputIndex);

      return;
    }

    onKeyUp(handleFilteredEvt(evt, getPrefix(inputIndex), true));
  }

  function handleKeyDown(evt, inputIndex) {
    switch (evt.keyCode) {
      case 8:
        handleBackspace(evt, inputIndex);
        break;

      case 37:
        focusPrev(inputIndex);
        break;

      case 39:
        focusNext(inputIndex);
        break;

      default:
    }

    onKeyDown(handleFilteredEvt(evt, getPrefix(inputIndex)));
  }

  useEffect(() => {
    const updatedValue = (value || '');
    const notChanged = (Object.values(composed).join('') === updatedValue);

    if (notChanged) {
      return;
    }

    if ((typeof value !== 'string') || !value) {
      setComposed({});
    } else {
      const newComposed = {};

      value.split('').forEach((otpIndexValue, otpIndex) => {
        newComposed[getPrefix(otpIndex)] = otpIndexValue;
      });

      setComposed(newComposed);
    }
  }, [composed, getPrefix, value]);

  return (
    <Segment
      padding="0"
      {...wrapper}
    >
      {label && (
        <Label
          id={getPrefix('label')}
          textAlign={alignment}
          margin="0"
        >
          <span style={!labelTooltip ? {} : { padding: '0 5px 0 20px' }}>
            {label}
          </span>
          {labelTooltip && (
            <span style={{ fontWeight: 'normal', textTransform: 'none' }}>
              <Tooltip tip={labelTooltip}>
                <Icon
                  slug={labelTooltipIcon}
                  size={20}
                  styles={{
                    cursor: 'help',
                    display: 'inline-block',
                    margin: '-4px 0 0 0',
                  }}
                />
              </Tooltip>
            </span>
          )}
        </Label>
      )}
      <Row
        horizontal={alignment}
        vertical={alignment}
        style={{
          marginRight: '-5px',
          marginLeft: '-5px',
        }}
      >
        {Array.from({ length: size }, (v, k) => k).map((otpIndex) => {
          const inputId = getPrefix(otpIndex);

          return (
            <Col
              width={`${xs ? 5 : 6}0px`}
              key={inputId}
              styles={{
                padding: '5px',
              }}
            >
              <InputNumeric
                {...props}
                id={inputId}
                required
                inputMode="numeric"
                min={0}
                max={9}
                step={1}
                autoComplete="off"
                placeholder={placeholder[otpIndex] || ''}
                autoFocus={otpIndex !== 0 ? false : autoFocus}
                disabled={disabled || disableds.includes(otpIndex)}
                value={composed[inputId] || ''}
                onKeyUp={(evt) => handleKeyUp(evt, otpIndex)}
                onKeyDown={(evt) => handleKeyDown(evt, otpIndex)}
                onKeyPress={(evt) => handleKeyPress(evt, otpIndex)}
                styles={{
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  fontSize: '20px',
                  lineHeight: '20px',
                  boxShadow: '0 2px transparent',
                  transition: 'box-shadow 0.1s linear',
                  MozAppearance: 'textfield',
                  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: '0',
                  },
                  '&:focus': {
                    boxShadow: `0 2px 0 ${color}`,
                  },
                }}
              />
            </Col>
          );
        })}
      </Row>
    </Segment>
  );
}
