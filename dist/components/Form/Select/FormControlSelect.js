"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../constants");

var _utils = require("../../../utils");

var _IconArrowDown = _interopRequireDefault(require("../../Icons/IconArrowDown"));

var _FormControlWrapperStyled = _interopRequireDefault(require("../FormControlWrapperStyled"));

var _FormControlLabelStyled = _interopRequireDefault(require("../FormControlLabelStyled"));

var _FormControlStyled = _interopRequireDefault(require("../FormControlStyled"));

var _FormControlButtonStyled = _interopRequireDefault(require("../FormControlButtonStyled"));

var _FormControlErrorMsgStyled = _interopRequireDefault(require("../FormControlErrorMsgStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Component Itself */
var FormControlSelect = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
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

  var _useState = (0, _react.useState)(typeof value === 'number' || value ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];

  var styles = "\n        height: 50px;\n        cursor: pointer;\n    ";
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
    setHasValue(typeof inputValue === 'number' || inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }

  return _react.default.createElement(_FormControlWrapperStyled.default, null, _react.default.createElement(_FormControlStyled.default, _extends({}, props, {
    as: "select",
    ref: ref,
    onChange: handleChange,
    styles: Object.assign({}, styles, props.styles)
  })), !label ? null : _react.default.createElement(_FormControlLabelStyled.default, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), _react.default.createElement(_FormControlButtonStyled.default, {
    type: "button"
  }, _react.default.createElement(_IconArrowDown.default, {
    color: _utils.colors.get('black')
  })), _react.default.createElement(_FormControlErrorMsgStyled.default, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

FormControlSelect.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  label: '',
  btn: null,
  styles: {}
};
/* Properties Types */

FormControlSelect.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  btn: _propTypes.default.object,
  styles: _propTypes.default.any
};
/* Exporting */

var _default = FormControlSelect;
exports.default = _default;