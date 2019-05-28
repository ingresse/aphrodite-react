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
var AphCardStyled = (0, _styledBase.default)("div", {
  target: "ef3ubj80"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.margin || null;
}, ";padding:", function (props) {
  return props.padding || '10px';
}, ";border-radius:", _constants.RADIUS.SM, "px;color:", _utils.colors.get('black'), ";background:", _utils.colors.get('white'), ";transition:box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 5px ".concat(_utils.colors.get('black', 'original', 0.25))
  } : null;
}, ";&.active,&:hover{", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 20px ".concat(_utils.colors.get('black', 'original', 0.25))
  } : null;
}, ";}.aph-card{box-shadow:none !important;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaENhcmRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbiB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgJzEwcHgnfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuXG4gICAgY29sb3IgICAgIDogJHtjb2xvcnMuZ2V0KCdibGFjaycpfTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuXG4gICAgdHJhbnNpdGlvbiA6IGJveC1zaGFkb3cgMC4yNXMgbGluZWFyLCBwYWRkaW5nIDAuMjVzIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgcGFkZGluZztcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYm94U2hhZG93ID8gKHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDVweCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9YCxcbiAgICB9KSA6IG51bGx9O1xuXG4gICAgJi5hY3RpdmUsXG4gICAgJjpob3ZlciB7XG4gICAgICAgICR7cHJvcHMgPT4gcHJvcHMuYm94U2hhZG93ID8gKHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAyMHB4ICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX1gLFxuICAgICAgICB9KSA6IG51bGx9O1xuICAgIH1cblxuICAgIC5hcGgtY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBDYXJkID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhDYXJkU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jYXJkICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcmdpbiAgIDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmcgIDogJzEwcHgnLFxuICAgIHN0eWxlcyAgIDoge30sXG4gICAgYm94U2hhZG93OiBmYWxzZSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkNhcmQucHJvcFR5cGVzID0ge1xuICAgIG1hcmdpbiAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWRkaW5nICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGJveFNoYWRvdzogcHJvcFR5cGVzLmJvb2wsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */"));
/* Component Itself */

var Card = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(AphCardStyled, _extends({}, props, {
    ref: ref,
    className: "aph-card ".concat(className || '')
  }));
});
/* Default Properties */

Card.defaultProps = {
  margin: undefined,
  padding: '10px',
  styles: {},
  boxShadow: false
};
/* Properties Types */

Card.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  styles: _propTypes.default.object,
  boxShadow: _propTypes.default.bool
};
/* Exporting */

var _default = Card;
exports.default = _default;