"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  return props.link ? _utils.colors.get('secondary') : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0gyL0gyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSDIvSDIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEgyU3R5bGVkID0gc3R5bGVkLmgyYFxuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5ib2xkID8gJ1hMJyA6ICdNRCddLkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC1zaXplICA6ICR7cHJvcHMgPT4gKFNJWkVTLlhMLkZPTlRfU0laRSl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChTSVpFUy5YTC5MSU5FX0hFSUdIVCl9O1xuXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbn07XG5cbiAgICB0ZXh0LWFsaWduICAgIDogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBudWxsKX07XG4gICAgdGV4dC10cmFuc2Zvcm06ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMubGluayA/IGNvbG9ycy5nZXQoJ3NlY29uZGFyeScpIDogbnVsbCl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgSDIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgyU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMiAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJpbWFyeSAgOiBmYWxzZSxcbiAgICBzZWNvbmRhcnk6IGZhbHNlLFxuICAgIGJvbGQgICAgIDogZmFsc2UsXG4gICAgY2VudGVyICAgOiBmYWxzZSxcbiAgICB1cHBlciAgICA6IGZhbHNlLFxuICAgIG1hcmdpbiAgIDogJzI1cHggMCAxNXB4JyxcbiAgICBzdHlsZXMgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSDIucHJvcFR5cGVzID0ge1xuICAgIHByaW1hcnkgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc2Vjb25kYXJ5OiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlciAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW4gICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIMjtcbiJdfQ== */"));
/* Component Itself */

var H2 = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(H2Styled, _extends({}, props, {
    ref: ref,
    className: "aph-h2 ".concat(className || '')
  }));
});
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