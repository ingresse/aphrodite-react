"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Styles */
var AStyled = (0, _styledBase.default)("a", {
  target: "e93yvql0"
})("box-sizing:border-box;margin:", function (props) {
  return props.margin;
}, ";cursor:pointer;text-decoration:none;text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return _utils.colors.getFromTheme(props, props.color || 'link');
}, ";border:0;outline:0;&:active,&:focus,&:hover,&:visited{border:0;outline:0;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQS9BLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTd0IiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9BL0EuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBU3R5bGVkID0gc3R5bGVkLmFgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgY3Vyc29yICAgICAgICAgOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybSA6ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiAoY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdsaW5rJykpKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIsXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1hICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkEuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgc21hbGwgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgY29sb3IgOiAnJyxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQS5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQTtcbiJdfQ== */"));
/* Component Itself */

var A = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(AStyled, _extends({}, props, {
    ref: ref,
    className: "aph-a " + (className || '')
  }));
});
/* Default Properties */

A.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  helper: false,
  margin: '10px 0',
  color: '',
  styles: {}
};
/* Properties Types */

A.propTypes = {
  link: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  helper: _propTypes.default.bool,
  margin: _propTypes.default.string,
  color: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = A;
exports.default = _default;