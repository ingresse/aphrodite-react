"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _FormControlCheckbox = _interopRequireDefault(require("../Checkbox/FormControlCheckbox"));

var _FormControlInputNumber = _interopRequireDefault(require("../InputNumber/FormControlInputNumber"));

var _FormControlInputCurrency = _interopRequireDefault(require("../InputCurrency/FormControlInputCurrency"));

var _FormControlWrapperStyled = _interopRequireDefault(require("../FormControlWrapperStyled"));

var _FormControlLabelStyled = _interopRequireDefault(require("../FormControlLabelStyled"));

var _FormControlStyled = _interopRequireDefault(require("../FormControlStyled"));

var _FormControlButtonStyled = _interopRequireDefault(require("../FormControlButtonStyled"));

var _FormControlErrorMsgStyled = _interopRequireDefault(require("../FormControlErrorMsgStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Input = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  if (type === 'checkbox') {
    return _react.default.createElement(_FormControlCheckbox.default, _extends({}, props, {
      color: props.error ? 'error' : props.color,
      ref: ref
    }));
  }

  if (type === 'number') {
    return _react.default.createElement(_FormControlInputNumber.default, _extends({}, props, {
      ref: ref
    }));
  }

  if (type === 'currency') {
    return _react.default.createElement(_FormControlInputCurrency.default, _extends({}, props, {
      ref: ref
    }));
  }

  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      btn = props.btn,
      button = props.button,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;

  var _useState = (0, _react.useState)(value ? true : false),
      hasValue = _useState[0],
      setHasValue = _useState[1];
  /**
   * Trigger
   */


  (0, _react.useEffect)(function () {
    setHasValue(value ? true : false);
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} evt - input change synthetic event
   */

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }

  return _react.default.createElement(_FormControlWrapperStyled.default, {
    hasButton: btn || button ? true : false,
    buttonAlign: btn && btn.align ? btn.align : button && button.align ? button.align : ''
  }, _react.default.createElement(_FormControlStyled.default, _extends({
    name: id
  }, props, {
    ref: ref,
    onChange: handleChange,
    className: "aph-form-control " + (!label || !label && hasValue ? 'aph-form-control--middle' : '') + " " + (className || '')
  })), !label ? null : _react.default.createElement(_FormControlLabelStyled.default, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), !btn && !button ? null : _react.default.createElement(_FormControlButtonStyled.default, _extends({}, btn, button)), _react.default.createElement(_FormControlErrorMsgStyled.default, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

Input.defaultProps = {
  id: "formControlRandomID" + Math.random(),
  label: '',
  btn: null,
  button: null,
  styles: {}
};
/* Properties Types */

Input.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  btn: _propTypes.default.object,
  button: _propTypes.default.object,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Input;
exports.default = _default;