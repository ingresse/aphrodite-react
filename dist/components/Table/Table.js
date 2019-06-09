"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableStyled = _interopRequireDefault(require("./TableStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Table = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(_TableStyled.default, _extends({}, props, {
    ref: ref,
    className: "aph-table ".concat(className || '')
  }), children);
});
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