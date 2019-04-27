"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Styles */
var H1Styled = (0, _styledBase.default)("h1", {
  target: "e172qzn90"
})("font-weight:", function (props) {
  return props.bold ? _constants.SIZES.XL.FONT_WEIGHT : _constants.SIZES.MD.FONT_WEIGHT;
}, ";font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES.XXL.FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES.XXL.LINE_HEIGHT;
}, ";padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return props.primary ? _constants.COLORS.PRIMARY : props.secondary ? _constants.COLORS.DARK_GREY : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0gxL0gxLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSDEvSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBDT0xPUlMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSDFTdHlsZWQgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmJvbGQgPyBTSVpFUy5YTC5GT05UX1dFSUdIVCA6IFNJWkVTLk1ELkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLmJvbGQgPyAnWEwnIDogJ01EJ10uRk9OVF9XRUlHSFQpfTtcbiAgICBmb250LXNpemUgIDogJHtwcm9wcyA9PiAoU0laRVMuWFhMLkZPTlRfU0laRSl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChTSVpFUy5YWEwuTElORV9IRUlHSFQpfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICdjZW50ZXInIDogbnVsbCl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy51cHBlciA/ICd1cHBlcmNhc2UnIDogbnVsbCl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnByaW1hcnkgPyBDT0xPUlMuUFJJTUFSWSA6IChwcm9wcy5zZWNvbmRhcnkgPyBDT0xPUlMuREFSS19HUkVZIDogbnVsbCkpfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgxID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgxU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaDEgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJpbWFyeSAgOiBmYWxzZSxcbiAgICBzZWNvbmRhcnk6IGZhbHNlLFxuICAgIGJvbGQgICAgIDogZmFsc2UsXG4gICAgY2VudGVyICAgOiBmYWxzZSxcbiAgICB1cHBlciAgICA6IGZhbHNlLFxuICAgIG1hcmdpbiAgIDogJzI1cHggMCAxNXB4JyxcbiAgICBzdHlsZXMgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSDEucHJvcFR5cGVzID0ge1xuICAgIHByaW1hcnkgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc2Vjb25kYXJ5OiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlciAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW4gICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIMTtcbiJdfQ== */"));
/* Component Itself */

var H1 = function H1(props) {
  var className = props.className;
  return _react.default.createElement(H1Styled, _extends({}, props, {
    className: "aph-h1 ".concat(className || '')
  }));
};
/* Default Properties */


H1.defaultProps = {
  primary: false,
  secondary: false,
  bold: false,
  center: false,
  upper: false,
  margin: '25px 0 15px',
  styles: {}
};
/* Properties Types */

H1.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  margin: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = H1;
exports.default = _default;