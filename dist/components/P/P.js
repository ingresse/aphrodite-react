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
var PStyled = (0, _styledBase.default)("h1", {
  target: "ezs6n7j0"
})("font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES[props.small ? 'SM' : 'MD'].FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES[props.small ? 'SM' : 'MD'].LINE_HEIGHT;
}, ";padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return props.primary ? _utils.colors.get('ocean') : props.secondary ? _utils.colors.get('mercury') : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1AvUC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXlCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1AvUC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgUFN0eWxlZCA9IHN0eWxlZC5oMWBcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiAoU0laRVNbcHJvcHMuYm9sZCA/ICdYTCcgOiAnTUQnXS5GT05UX1dFSUdIVCl9O1xuICAgIGZvbnQtc2l6ZSAgOiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5zbWFsbCA/ICdTTScgOiAnTUQnXS5GT05UX1NJWkUpfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiAoU0laRVNbcHJvcHMuc21hbGwgPyAnU00nIDogJ01EJ10uTElORV9IRUlHSFQpfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICdjZW50ZXInIDogbnVsbCl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy51cHBlciA/ICd1cHBlcmNhc2UnIDogbnVsbCl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnByaW1hcnkgPyBjb2xvcnMuZ2V0KCdvY2VhbicpIDogKHByb3BzLnNlY29uZGFyeSA/IGNvbG9ycy5nZXQoJ21lcmN1cnknKSA6IG51bGwpKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBQID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1wICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuUC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJpbWFyeSAgOiBmYWxzZSxcbiAgICBzZWNvbmRhcnk6IGZhbHNlLFxuICAgIGJvbGQgICAgIDogZmFsc2UsXG4gICAgY2VudGVyICAgOiBmYWxzZSxcbiAgICB1cHBlciAgICA6IGZhbHNlLFxuICAgIHNtYWxsICAgIDogZmFsc2UsXG4gICAgbWFyZ2luICAgOiAnMTBweCAwJyxcbiAgICBzdHlsZXMgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuUC5wcm9wVHlwZXMgPSB7XG4gICAgcHJpbWFyeSAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzZWNvbmRhcnk6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNtYWxsICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUDtcbiJdfQ== */"));
/* Component Itself */

var P = function P(props) {
  var className = props.className;
  return _react.default.createElement(PStyled, _extends({}, props, {
    className: "aph-p ".concat(className || '')
  }));
};
/* Default Properties */


P.defaultProps = {
  primary: false,
  secondary: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  margin: '10px 0',
  styles: {}
};
/* Properties Types */

P.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  small: _propTypes.default.bool,
  margin: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = P;
exports.default = _default;