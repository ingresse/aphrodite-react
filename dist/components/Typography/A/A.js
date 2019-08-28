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

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Styles */
var AStyled = (0, _styledBase.default)("a", {
  target: "e93yvql0"
})("box-sizing:border-box;margin:", function (props) {
  return props.margin;
}, ";cursor:pointer;text-decoration:none;text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return _utils.colors.getFromTheme(props, props.aphcolor || 'link');
}, ";border:0;outline:0;&:active,&:focus,&:hover,&:visited{border:0;outline:0;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQS9BLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTd0IiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9BL0EuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBU3R5bGVkID0gc3R5bGVkLmFgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgY3Vyc29yICAgICAgICAgOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybSA6ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiAoY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdsaW5rJykpKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIsXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFTdHlsZWRcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBhcGhjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5BLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5rICA6IGZhbHNlLFxuICAgIGJvbGQgIDogZmFsc2UsXG4gICAgY2VudGVyOiBmYWxzZSxcbiAgICB1cHBlciA6IGZhbHNlLFxuICAgIHNtYWxsIDogZmFsc2UsXG4gICAgaGVscGVyOiBmYWxzZSxcbiAgICBtYXJnaW46ICcxMHB4IDAnLFxuICAgIGNvbG9yIDogJycsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkEucHJvcFR5cGVzID0ge1xuICAgIGxpbmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVscGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEE7XG4iXX0= */"));
/* Component Itself */

var A = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      color = props.color,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color"]);

  return _react.default.createElement(AStyled, _extends({}, rest, {
    ref: ref,
    aphcolor: color,
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