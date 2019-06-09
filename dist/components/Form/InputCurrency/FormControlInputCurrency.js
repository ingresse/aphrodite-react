"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCurrencyInput = _interopRequireDefault(require("react-currency-input"));

var _FormControlWrapperStyled = _interopRequireDefault(require("../FormControlWrapperStyled"));

var _FormControlLabelStyled = _interopRequireDefault(require("../FormControlLabelStyled"));

var _FormControlStyled = _interopRequireDefault(require("../FormControlStyled"));

var _FormControlErrorMsgStyled = _interopRequireDefault(require("../FormControlErrorMsgStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var FormControlInputNumber = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      error = props.error,
      errorMessage = props.errorMessage;
  /* Inherit Props */

  var inheritProps = Object.assign({}, props);
  var excludedProps = ['label', 'labelProps', 'errorMessage'];
  excludedProps.map(function (excludedProp) {
    delete inheritProps[excludedProp];
    return true;
  });
  /**
   * Handle with input changes
   *
   * @param {object} evt         - input change synthetic event
   * @param {string} maskedValue - input masked value
   * @param {string} floatValue  - input float value
   */

  function handleChange(evt, maskedValue, floatValue) {
    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), floatValue, maskedValue);
    }
  }

  return _react.default.createElement(_FormControlWrapperStyled.default, null, _react.default.createElement(_FormControlStyled.default, _extends({}, inheritProps, {
    as: _reactCurrencyInput.default,
    ref: ref,
    error: error ? 'true' : null,
    onChange: function onChange() {},
    onChangeEvent: handleChange,
    className: "aph-form-control ".concat(className || '')
  })), !label ? null : _react.default.createElement(_FormControlLabelStyled.default, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label aph-form-label--top"
  }), label), _react.default.createElement(_FormControlErrorMsgStyled.default, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

FormControlInputNumber.defaultProps = {
  id: '',
  label: '',
  btn: null,
  styles: {},
  inputType: 'tel',
  thousandSeparator: '.',
  decimalSeparator: ',',
  prefix: 'R$',
  value: 0,
  precision: 2,
  allowEmpty: true,
  allowNegative: true
};
/* Properties Types */

FormControlInputNumber.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  btn: _propTypes.default.object,
  styles: _propTypes.default.object,
  type: _propTypes.default.string,
  thousandSeparator: _propTypes.default.string,
  decimalSeparator: _propTypes.default.string,
  prefix: _propTypes.default.string,
  value: _propTypes.default.number,
  precision: _propTypes.default.number,
  allowEmpty: _propTypes.default.bool,
  allowNegative: _propTypes.default.bool
};
/* Exporting */

var _default = FormControlInputNumber;
exports.default = _default;