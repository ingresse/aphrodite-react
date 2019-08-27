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
  return _utils.colors.getFromTheme(props, !props.color ? 'link' : props.color);
}, ";&:active,&:focus,&:hover,&:visited{color:", function (props) {
  return _utils.colors.getFromTheme(props, !props.color ? 'link' : props.color, 'dark');
}, ";}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQS9BLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTd0IiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9BL0EuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBU3R5bGVkID0gc3R5bGVkLmFgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgY3Vyc29yICAgICAgICAgOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybSA6ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiAoY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKCFwcm9wcy5jb2xvciA/ICdsaW5rJyA6IHByb3BzLmNvbG9yKSkpfTtcblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlcixcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiAoY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKCFwcm9wcy5jb2xvciA/ICdsaW5rJyA6IHByb3BzLmNvbG9yKSwgJ2RhcmsnKSl9O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEEgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWEgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBzbWFsbCA6IGZhbHNlLFxuICAgIGhlbHBlcjogZmFsc2UsXG4gICAgbWFyZ2luOiAnMTBweCAwJyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIGhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBO1xuIl19 */"));
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