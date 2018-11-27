"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphListItem =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "e6wegxb0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: _constants.GRID.PADDING / 2 + _constants.GRID.UNIT + ' ' + (_constants.GRID.PADDING + _constants.GRID.UNIT),
    margin: 0
  }, _constants.MEDIA_QUERIES.LT.SM, {
    paddingRight: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT
  }), props.style);
});
/* Component */

var ListItem = function ListItem(props) {
  return _react.default.createElement(AphListItem, _extends({}, props, {
    className: "".concat(props.header ? 'aph-list__header ' : 'aph-list__item ').concat(props.className || '')
  }), props.children);
};
/* Exporting */


var _default = ListItem;
exports.default = _default;