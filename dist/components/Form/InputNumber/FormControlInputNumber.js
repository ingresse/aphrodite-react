"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInputNumber = _interopRequireDefault(require("react-input-number"));

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
      prefix = props.prefix,
      error = props.error,
      errorMessage = props.errorMessage;

  var _useState = (0, _react.useState)(typeof value === 'number'),
      hasValue = _useState[0],
      setHasValue = _useState[1];
  /* Inherit Props */


  var inheritProps = Object.assign({}, props);
  var excludedProps = ['label', 'labelProps', 'errorMessage'];
  excludedProps.map(function (excludedProp) {
    delete inheritProps[excludedProp];
    return true;
  });
  /**
   * Trigger
   */

  (0, _react.useEffect)(function () {
    setHasValue(typeof value === 'number');
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} inputValue - input change synthetic event
   */

  function handleChange(inputValue) {
    setHasValue(typeof inputValue === 'number');

    if (typeof onChange === 'function') {
      onChange(inputValue);
    }
  }

  return _react.default.createElement(_FormControlWrapperStyled.default, null, _react.default.createElement(_FormControlStyled.default, _extends({}, inheritProps, {
    as: _reactInputNumber.default,
    ref: ref,
    onChange: handleChange,
    enableMobileNumericKeyboard: true,
    className: "aph-form-control " + (!label || !label && hasValue ? 'aph-form-control--middle' : '') + " " + (className || '')
  })), !label ? null : _react.default.createElement(_FormControlLabelStyled.default, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
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
  labelProps: {},
  type: 'tel',
  styles: {}
};
/* Properties Types */

FormControlInputNumber.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  type: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = FormControlInputNumber;
exports.default = _default;