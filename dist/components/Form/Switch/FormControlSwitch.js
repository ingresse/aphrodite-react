"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControlSwitchStyles = _interopRequireDefault(require("./FormControlSwitchStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Switch = function Switch(props) {
  var id = props.id,
      className = props.className,
      children = props.children,
      styles = props.styles,
      textAlign = props.textAlign,
      textSmall = props.textSmall,
      toggleAlign = props.toggleAlign;
  var newProps = Object.assign({}, props, {
    children: undefined,
    styles: undefined,
    textAlign: undefined,
    textSmall: undefined,
    toggleAlign: undefined
  });
  return _react.default.createElement(_FormControlSwitchStyles.default.Wrapper, {
    htmlFor: id,
    className: "aph-form-switch ".concat(className || ''),
    styles: styles,
    textAlign: textAlign,
    textSmall: textSmall,
    toggleAlign: toggleAlign
  }, children && toggleAlign === 'right' ? _react.default.createElement(_FormControlSwitchStyles.default.Content, {
    htmlFor: id,
    hasChildren: children ? true : false,
    toggleAlign: toggleAlign
  }, children) : null, _react.default.createElement(_FormControlSwitchStyles.default.ToggleWrapper, {
    htmlFor: id,
    className: "aph-form-switch__wrapper"
  }, _react.default.createElement(_FormControlSwitchStyles.default.Input, _extends({}, newProps, {
    id: id,
    type: "checkbox",
    className: "aph-form-switch__input"
  })), _react.default.createElement(_FormControlSwitchStyles.default.Toggle, {
    htmlFor: id,
    className: "aph-form-switch__toggle"
  })), children && (!toggleAlign || toggleAlign === 'left') ? _react.default.createElement(_FormControlSwitchStyles.default.Content, {
    htmlFor: id,
    hasChildren: children ? true : false,
    toggleAlign: toggleAlign
  }, children) : null);
};
/* Default Properties */


Switch.defaultProps = {
  id: "formControlRandomID".concat(Math.random())
};
/* Exporting */

var _default = Switch;
exports.default = _default;