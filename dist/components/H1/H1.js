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
}, ";font-size:36px;line-height:40px;padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return props.primary ? _constants.COLORS.PRIMARY : props.secondary ? _constants.COLORS.DARK_GREY : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0gxL0gxLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSDEvSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBDT0xPUlMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSDFTdHlsZWQgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmJvbGQgPyBTSVpFUy5YTC5GT05UX1dFSUdIVCA6IFNJWkVTLk1ELkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC1zaXplICA6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2lufTtcblxuICAgIHRleHQtYWxpZ24gICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnY2VudGVyJyA6IG51bGwpfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMudXBwZXIgPyAndXBwZXJjYXNlJyA6IG51bGwpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5wcmltYXJ5ID8gQ09MT1JTLlBSSU1BUlkgOiAocHJvcHMuc2Vjb25kYXJ5ID8gQ09MT1JTLkRBUktfR1JFWSA6IG51bGwpKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBIMSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIMVN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWgxICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDEuZGVmYXVsdFByb3BzID0ge1xuICAgIHByaW1hcnkgIDogZmFsc2UsXG4gICAgc2Vjb25kYXJ5OiBmYWxzZSxcbiAgICBib2xkICAgICA6IGZhbHNlLFxuICAgIGNlbnRlciAgIDogZmFsc2UsXG4gICAgdXBwZXIgICAgOiBmYWxzZSxcbiAgICBtYXJnaW4gICA6ICcyNXB4IDAgMTVweCcsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkgxLnByb3BUeXBlcyA9IHtcbiAgICBwcmltYXJ5ICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNlY29uZGFyeTogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXIgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDE7XG4iXX0= */"));
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