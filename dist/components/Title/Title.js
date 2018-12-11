"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _title = require("./title.constants");

var _aphroditeReact = require("aphrodite-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Component */
var Title = function Title(props) {
  var children = props.children,
      bold = props.bold,
      color = props.color,
      margin = props.margin,
      size = props.size,
      height = props.height,
      type = props.type,
      center = props.center,
      right = props.right,
      styles = props.styles;

  var _TYPE = type ? _title.TITLE.TYPES.includes(type.toLowerCase()) ? type.toLowerCase() : 'h2' : 'h2';

  var _STYLES = type ? _title.TITLE.TYPES.includes(type.toLowerCase()) ? _title.TITLE[type.toUpperCase()] : _title.TITLE.H2 : _title.TITLE.H2;

  var Wrapper =
  /*#__PURE__*/
  (0, _reactEmotion.default)(_TYPE, {
    target: "e8n1ao50"
  })(function (props) {
    return Object.assign(_STYLES, _objectSpread({
      fontWeight: bold ? '900' : '400',
      fontSize: size ? "".concat(size, "px") : null,
      lineHeight: height ? "".concat(height, "px") : null,
      textAlign: center ? 'center' : right ? 'right' : null,
      color: _aphroditeReact.COLORS.GET(color),
      padding: margin ? '0' : null,
      margin: margin ? "".concat(margin, "px") : '0'
    }, styles));
  });
  return _react.default.createElement(Wrapper, _extends({}, props, {
    className: "title ".concat(props.className || '')
  }), children);
};
/* Default props */


Title.defaultProps = {
  type: 'h2',
  color: _aphroditeReact.COLORS.DARK_GREY
};
/* Exporting */

var _default = Title;
exports.default = _default;