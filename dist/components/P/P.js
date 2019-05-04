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
var PStyled = (0, _styledBase.default)("h1", {
  target: "ezs6n7j0"
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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1AvUC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXlCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1AvUC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IFBTdHlsZWQgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLmJvbGQgPyAnWEwnIDogJ01EJ10uRk9OVF9XRUlHSFQpfTtcbiAgICBmb250LXNpemUgIDogJHtwcm9wcyA9PiAoU0laRVNbcHJvcHMuc21hbGwgPyAnU00nIDogJ01EJ10uRk9OVF9TSVpFKX07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gKFNJWkVTW3Byb3BzLnNtYWxsID8gJ1NNJyA6ICdNRCddLkxJTkVfSEVJR0hUKX07XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2lufTtcblxuICAgIHRleHQtYWxpZ24gICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnY2VudGVyJyA6IG51bGwpfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMudXBwZXIgPyAndXBwZXJjYXNlJyA6IG51bGwpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5saW5rID8gY29sb3JzLmdldCgnc2Vjb25kYXJ5JykgOiBudWxsKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBQID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1wICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblAuZGVmYXVsdFByb3BzID0ge1xuICAgIHByaW1hcnkgIDogZmFsc2UsXG4gICAgc2Vjb25kYXJ5OiBmYWxzZSxcbiAgICBib2xkICAgICA6IGZhbHNlLFxuICAgIGNlbnRlciAgIDogZmFsc2UsXG4gICAgdXBwZXIgICAgOiBmYWxzZSxcbiAgICBzbWFsbCAgICA6IGZhbHNlLFxuICAgIG1hcmdpbiAgIDogJzEwcHggMCcsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblAucHJvcFR5cGVzID0ge1xuICAgIHByaW1hcnkgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc2Vjb25kYXJ5OiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlciAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzbWFsbCAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbiAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFA7XG4iXX0= */"));
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