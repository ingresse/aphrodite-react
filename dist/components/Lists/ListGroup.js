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
var AphListGroup =
/*#__PURE__*/
(0, _reactEmotion.default)('ul', {
  target: "ey9rber0"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    borderRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + _constants.GRID.UNIT,
    boxShadow: "\n        inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n        inset -1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n        inset 1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n        inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n    "),
    '.aph-list__header': {
      backgroundColor: _constants.COLORS.DARK_SMOKE,
      '&:first-of-type': {
        borderTopRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + 1 + _constants.GRID.UNIT,
        borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + 1 + _constants.GRID.UNIT
      }
    },
    '.aph-list__item': {
      backgroundColor: _constants.COLORS.SMOKE,
      '&:last-of-type': {
        borderBottomRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + 1 + _constants.GRID.UNIT,
        borderBottomLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + 1 + _constants.GRID.UNIT
      }
    }
  }, props.style);
});
/* Component */

var ListGroup = function ListGroup(props) {
  return _react.default.createElement(AphListGroup, _extends({}, props, {
    className: "aph-list-group ".concat(props.className || '')
  }), props.children);
};
/* Exporting */


var _default = ListGroup;
exports.default = _default;