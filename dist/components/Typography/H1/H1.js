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
var H1Styled = (0, _styledBase.default)("h1", {
  target: "ezvpeh30"
})("box-sizing:border-box;font-weight:", function (props) {
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
  return props.center ? 'center' : props.align || null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return !props.color && !props.link && !props.helper ? null : _utils.colors.getFromTheme(props, props.link ? 'link' : props.helper ? 'helper' : props.color);
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSDEvSDEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUwQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0gxL0gxLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IENPTE9SUywgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIMVN0eWxlZCA9IHN0eWxlZC5oMWBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5ib2xkID8gU0laRVMuWEwuRk9OVF9XRUlHSFQgOiBTSVpFUy5NRC5GT05UX1dFSUdIVCl9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5ib2xkID8gJ1hMJyA6ICdNRCddLkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC1zaXplICA6ICR7cHJvcHMgPT4gKFNJWkVTLlhYTC5GT05UX1NJWkUpfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiAoU0laRVMuWFhMLkxJTkVfSEVJR0hUKX07XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2lufTtcblxuICAgIHRleHQtYWxpZ24gICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnY2VudGVyJyA6IChwcm9wcy5hbGlnbiB8fCBudWxsKSl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy51cHBlciA/ICd1cHBlcmNhc2UnIDogbnVsbCl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKFxuICAgICAgICAoIXByb3BzLmNvbG9yICYmICFwcm9wcy5saW5rICYmICFwcm9wcy5oZWxwZXIpID8gbnVsbCA6XG4gICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5saW5rID8gJ2xpbmsnIDogKHByb3BzLmhlbHBlciA/ICdoZWxwZXInIDogcHJvcHMuY29sb3IpKVxuICAgICl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgSDEgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgxU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzI1cHggMCAxNXB4JyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMS5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDE7XG4iXX0= */"));
/* Component Itself */

var H1 = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(H1Styled, _extends({}, props, {
    ref: ref,
    className: "aph-h1 " + (className || '')
  }));
});
/* Default Properties */

H1.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
/* Properties Types */

H1.propTypes = {
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

var _default = H1;
exports.default = _default;