"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _utils = require("../../utils");

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
  return props.primary ? _utils.colors.get('primary') : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0gxL0gxLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSDEvSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBDT0xPUlMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSDFTdHlsZWQgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmJvbGQgPyBTSVpFUy5YTC5GT05UX1dFSUdIVCA6IFNJWkVTLk1ELkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLmJvbGQgPyAnWEwnIDogJ01EJ10uRk9OVF9XRUlHSFQpfTtcbiAgICBmb250LXNpemUgIDogJHtwcm9wcyA9PiAoU0laRVMuWFhMLkZPTlRfU0laRSl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChTSVpFUy5YWEwuTElORV9IRUlHSFQpfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICdjZW50ZXInIDogbnVsbCl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy51cHBlciA/ICd1cHBlcmNhc2UnIDogbnVsbCl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnByaW1hcnkgPyBjb2xvcnMuZ2V0KCdwcmltYXJ5JykgOiBudWxsKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBIMSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIMVN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWgxICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDEuZGVmYXVsdFByb3BzID0ge1xuICAgIHByaW1hcnkgIDogZmFsc2UsXG4gICAgc2Vjb25kYXJ5OiBmYWxzZSxcbiAgICBib2xkICAgICA6IGZhbHNlLFxuICAgIGNlbnRlciAgIDogZmFsc2UsXG4gICAgdXBwZXIgICAgOiBmYWxzZSxcbiAgICBtYXJnaW4gICA6ICcyNXB4IDAgMTVweCcsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkgxLnByb3BUeXBlcyA9IHtcbiAgICBwcmltYXJ5ICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNlY29uZGFyeTogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXIgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDE7XG4iXX0= */"));
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