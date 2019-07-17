"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../constants");

var _utils = require("../../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Styles */
var H3Styled = (0, _styledBase.default)("h3", {
  target: "e181c9j70"
})("font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES.LG.FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES.LG.LINE_HEIGHT;
}, ";padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return !props.color && !props.link ? null : _utils.colors.get(props.link ? 'secondary' : props.color);
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSDMvSDMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUwQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0gzL0gzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IENPTE9SUywgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIM1N0eWxlZCA9IHN0eWxlZC5oM2BcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiAoU0laRVNbcHJvcHMuYm9sZCA/ICdYTCcgOiAnTUQnXS5GT05UX1dFSUdIVCl9O1xuICAgIGZvbnQtc2l6ZSAgOiAke3Byb3BzID0+IChTSVpFUy5MRy5GT05UX1NJWkUpfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiAoU0laRVMuTEcuTElORV9IRUlHSFQpfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICdjZW50ZXInIDogbnVsbCl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy51cHBlciA/ICd1cHBlcmNhc2UnIDogbnVsbCl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKFxuICAgICAgICAoIXByb3BzLmNvbG9yICYmICFwcm9wcy5saW5rKSA/IG51bGwgOlxuICAgICAgICAgICAgY29sb3JzLmdldChwcm9wcy5saW5rID8gJ3NlY29uZGFyeScgOiBwcm9wcy5jb2xvcilcbiAgICApfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgzID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIM1N0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaDMgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDMuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgbWFyZ2luOiAnMTVweCAwIDVweCcsXG4gICAgY29sb3I6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMy5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgzO1xuIl19 */"));
/* Component Itself */

var H3 = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(H3Styled, _extends({}, props, {
    ref: ref,
    className: "aph-h3 " + (className || '')
  }));
});
/* Default Properties */

H3.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  margin: '15px 0 5px',
  color: '',
  styles: {}
};
/* Properties Types */

H3.propTypes = {
  link: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  margin: _propTypes.default.string,
  color: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = H3;
exports.default = _default;