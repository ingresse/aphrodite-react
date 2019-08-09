"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FlexStyles = _interopRequireDefault(require("./FlexStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
function Flex(props) {
  /**
   * Inherit props,
   */
  var className = props.className;
  /**
   * Render
   */

  return _react.default.createElement(_FlexStyles.default, _extends({}, props, {
    className: "aph-flex " + className
  }));
}
/* Component Props */


Flex.defaultProps = {
  className: '',
  flexWrap: '',
  alignSelf: '',
  alignItems: '',
  alignContent: '',
  flexDirection: '',
  justifyContent: '',
  order: '',
  flexGrow: '',
  flexShrink: '',
  styles: {}
};
/* Component properties types */

Flex.propTypes = {
  className: _propTypes.default.string,
  flexWrap: _propTypes.default.string,
  alignSelf: _propTypes.default.string,
  alignItems: _propTypes.default.string,
  alignContent: _propTypes.default.string,
  flexDirection: _propTypes.default.string,
  justifyContent: _propTypes.default.string,
  order: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  flexGrow: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  flexShrink: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  styles: _propTypes.default.any
};
/* Exporting */

var _default = Flex;
exports.default = _default;