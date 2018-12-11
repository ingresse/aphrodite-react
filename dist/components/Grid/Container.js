"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphContainer =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "e1js7dhi0"
})(function (props) {
  return _defineProperty({
    boxSizing: 'border-box',
    display: 'block',
    margin: '0 auto',
    padding: "0 ".concat(_constants.GRID.PADDING + _constants.GRID.UNIT),
    width: '100%',
    maxWidth: props.fluid ? '100%' : props.xs ? _constants.GRID.CONTAINER.XS + _constants.GRID.UNIT : props.sm ? _constants.GRID.CONTAINER.SM + _constants.GRID.UNIT : props.md ? _constants.GRID.CONTAINER.MD + _constants.GRID.UNIT : props.xl ? _constants.GRID.CONTAINER.XL + _constants.GRID.UNIT : _constants.GRID.CONTAINER.LG + _constants.GRID.UNIT
  }, _constants.MEDIA_QUERIES.LT.SM, {
    paddingRight: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT
  });
});
/* Component it self */

var Container = function Container(props) {
  return _react.default.createElement(AphContainer, _extends({}, props, {
    className: "aph-container ".concat(props.className || '')
  }), props.children);
};
/* Properties Types */


Container.propTypes = {
  xs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  md: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  xl: _propTypes.default.bool,
  fluid: _propTypes.default.bool
};
/* Exporting */

var _default = Container;
exports.default = _default;