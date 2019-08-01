"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormControlWrapperStyled = _interopRequireDefault(require("../FormControlWrapperStyled"));

var _FormControlLabelStyled = _interopRequireDefault(require("../FormControlLabelStyled"));

var _FormControlStyled = _interopRequireDefault(require("../FormControlStyled"));

var _FormControlErrorMsgStyled = _interopRequireDefault(require("../FormControlErrorMsgStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var FormControlTextArea = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      btn = props.btn,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;

  var _useState = (0, _react.useState)(value ? true : false),
      hasValue = _useState[0],
      setHasValue = _useState[1];

  var inputId = "" + (id || 'formControl');

  var styles = "\n        min-width : 100%;\n        min-height: 90px;\n        padding-bottom: 10px;\n\n        &[rows=\"4\"] {\n            min-height: 110px;\n        }\n\n        &[rows=\"5\"] {\n            min-height: 130px;\n        }\n\n        &[rows=\"6\"] {\n            min-height: 150px;\n        }\n\n        &[rows=\"7\"] {\n            min-height: 170px;\n        }\n\n        &[rows=\"8\"] {\n            min-height: 190px;\n        }\n\n        &[rows=\"9\"] {\n            min-height: 210px;\n        }\n\n        &[rows=\"10\"] {\n            min-height: 230px;\n        }\n\n        " + function (props) {
    return props.styles;
  } + ";\n    ";
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
      onChange(Object.assign({}, evt));
    }
  }

  return _react.default.createElement(_FormControlWrapperStyled.default, null, _react.default.createElement(_FormControlStyled.default, _extends({}, props, {
    as: "textarea",
    onChange: handleChange,
    styles: styles
  })), !label ? null : _react.default.createElement(_FormControlLabelStyled.default, _extends({}, labelProps, {
    htmlFor: inputId,
    textArea: true,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), _react.default.createElement(_FormControlErrorMsgStyled.default, {
    htmlFor: inputId,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Exporting */

var _default = FormControlTextArea;
exports.default = _default;