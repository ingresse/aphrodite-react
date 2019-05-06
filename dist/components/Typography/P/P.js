"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var PStyled = (0, _styledBase.default)("h1", {
  target: "enm91qe0"
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
  return props.link ? _utils.colors.get('secondary') : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvUC9QLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVeUIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9QL1AuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBQU3R5bGVkID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5ib2xkID8gJ1hMJyA6ICdNRCddLkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC1zaXplICA6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLnNtYWxsID8gJ1NNJyA6ICdNRCddLkZPTlRfU0laRSl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5zbWFsbCA/ICdTTScgOiAnTUQnXS5MSU5FX0hFSUdIVCl9O1xuXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbn07XG5cbiAgICB0ZXh0LWFsaWduICAgIDogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBudWxsKX07XG4gICAgdGV4dC10cmFuc2Zvcm06ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMubGluayA/IGNvbG9ycy5nZXQoJ3NlY29uZGFyeScpIDogbnVsbCl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgUCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UFN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5QLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmltYXJ5ICA6IGZhbHNlLFxuICAgIHNlY29uZGFyeTogZmFsc2UsXG4gICAgYm9sZCAgICAgOiBmYWxzZSxcbiAgICBjZW50ZXIgICA6IGZhbHNlLFxuICAgIHVwcGVyICAgIDogZmFsc2UsXG4gICAgc21hbGwgICAgOiBmYWxzZSxcbiAgICBtYXJnaW4gICA6ICcxMHB4IDAnLFxuICAgIHN0eWxlcyAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QLnByb3BUeXBlcyA9IHtcbiAgICBwcmltYXJ5ICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNlY29uZGFyeTogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXIgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc21hbGwgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW4gICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQO1xuIl19 */"));
/* Component Itself */

var P = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(PStyled, _extends({}, props, {
    ref: ref,
    className: "aph-p ".concat(className || '')
  }));
});
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