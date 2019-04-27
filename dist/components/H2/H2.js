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
var H2Styled = (0, _styledBase.default)("h2", {
  target: "e1p1j0qx0"
})("font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES.XL.FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES.XL.LINE_HEIGHT;
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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0gyL0gyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSDIvSDIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBDT0xPUlMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSDJTdHlsZWQgPSBzdHlsZWQuaDJgXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLmJvbGQgPyAnWEwnIDogJ01EJ10uRk9OVF9XRUlHSFQpfTtcbiAgICBmb250LXNpemUgIDogJHtwcm9wcyA9PiAoU0laRVMuWEwuRk9OVF9TSVpFKX07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTLlhMLkxJTkVfSEVJR0hUKX07XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2lufTtcblxuICAgIHRleHQtYWxpZ24gICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnY2VudGVyJyA6IG51bGwpfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMudXBwZXIgPyAndXBwZXJjYXNlJyA6IG51bGwpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5wcmltYXJ5ID8gY29sb3JzLmdldCgnb2NlYW4nKSA6IChwcm9wcy5zZWNvbmRhcnkgPyBjb2xvcnMuZ2V0KCdtZXJjdXJ5JykgOiBudWxsKSl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgSDIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SDJTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMiAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkgyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmltYXJ5ICA6IGZhbHNlLFxuICAgIHNlY29uZGFyeTogZmFsc2UsXG4gICAgYm9sZCAgICAgOiBmYWxzZSxcbiAgICBjZW50ZXIgICA6IGZhbHNlLFxuICAgIHVwcGVyICAgIDogZmFsc2UsXG4gICAgbWFyZ2luICAgOiAnMjVweCAwIDE1cHgnLFxuICAgIHN0eWxlcyAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMi5wcm9wVHlwZXMgPSB7XG4gICAgcHJpbWFyeSAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzZWNvbmRhcnk6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbiAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgyO1xuIl19 */"));
/* Component Itself */

var H2 = function H2(props) {
  var className = props.className;
  return _react.default.createElement(H2Styled, _extends({}, props, {
    className: "aph-h2 ".concat(className || '')
  }));
};
/* Default Properties */


H2.defaultProps = {
  primary: false,
  secondary: false,
  bold: false,
  center: false,
  upper: false,
  margin: '25px 0 15px',
  styles: {}
};
/* Properties Types */

H2.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  margin: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = H2;
exports.default = _default;