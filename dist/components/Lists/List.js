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

/* Component Itself */
var AphListStyled = (0, _styledBase.default)("ul", {
  target: "e32bd8t0"
})("box-sizing:border-box;display:block;margin:0;padding:0;list-style-type:", function (props) {
  return props.type || 'none';
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MaXN0cy9MaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBcGhMaXN0U3R5bGVkID0gc3R5bGVkLnVsYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBsaXN0LXN0eWxlLXR5cGU6ICR7cHJvcHMgPT4gcHJvcHMudHlwZSB8fCAnbm9uZSd9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0U3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbGlzdCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGhvdmVyIDogZmFsc2UsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxpc3QucHJvcFR5cGVzID0ge1xuICAgIGhvdmVyIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19 */"));
/* Component Itself */

var List = function List(props) {
  var className = props.className;
  return _react.default.createElement(AphListStyled, _extends({}, props, {
    className: "aph-list ".concat(className || '')
  }));
};
/* Default Properties */


List.defaultProps = {
  hover: false,
  styles: {}
};
/* Properties Types */

List.propTypes = {
  hover: _propTypes.default.bool,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = List;
exports.default = _default;