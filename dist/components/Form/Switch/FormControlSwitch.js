"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControlSwitchStyles = _interopRequireDefault(require("./FormControlSwitchStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Switch = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
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
  }, _react.default.createElement(_FormControlSwitchStyles.default.ToggleWrapper, {
    htmlFor: id,
    className: "aph-form-switch__wrapper"
  }, _react.default.createElement(_FormControlSwitchStyles.default.Input, _extends({}, newProps, {
    ref: ref,
    id: id,
    type: "checkbox",
    className: "aph-form-switch__input"
  })), _react.default.createElement(_FormControlSwitchStyles.default.Toggle, {
    htmlFor: id,
    className: "aph-form-switch__toggle"
  })), !children ? null : _react.default.createElement(_FormControlSwitchStyles.default.Content, {
    htmlFor: id,
    hasChildren: children ? true : false,
    toggleAlign: toggleAlign
  }, children));
}));
/* Default Properties */

Switch.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  className: '',
  styles: {},
  textSmall: false,
  textAlign: 'left',
  toggleAlign: 'left'
};
/* Properties Types */

Switch.propTypes = {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  styles: _propTypes.default.object,
  textSmall: _propTypes.default.bool,
  textAlign: _propTypes.default.string,
  toggleAlign: _propTypes.default.string
};
/* Exporting */

var _default = Switch;
exports.default = _default;