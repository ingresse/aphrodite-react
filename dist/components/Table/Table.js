"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableStyled = _interopRequireDefault(require("./TableStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Table = function Table(props) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(_TableStyled.default, _extends({}, props, {
    className: "aph-table ".concat(className || '')
  }), children);
};
/* Default Properties */


Table.defaultProps = {
  bordered: false,
  condensed: false,
  hoverable: false,
  striped: false
};
/* Properties Types */

Table.propTypes = {
  bordered: _propTypes.default.bool,
  condensed: _propTypes.default.bool,
  hoverable: _propTypes.default.bool,
  striped: _propTypes.default.bool
};
/* Exporting */

var _default = Table;
exports.default = _default;