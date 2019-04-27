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

/* Component Styles */
var AphCardStyled = (0, _styledBase.default)("div", {
  target: "ef3ubj80"
})("display:block;padding:10px;border-radius:", _constants.RADIUS.SM, "px;color:", _constants.COLORS.BLACK, ";background:", _constants.COLORS.WHITE, ";box-shadow:0 0 5px ", _constants.COLORS.GET('BLACK', 0.25), ";transition:box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;&.active,&:hover{box-shadow:0 0 20px ", _constants.COLORS.GET('BLACK', 0.25), ";}.aph-card{box-shadow:none !important;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhDYXJkU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuICAgIGNvbG9yICAgICAgOiAke0NPTE9SUy5CTEFDS307XG4gICAgYmFja2dyb3VuZCA6ICR7Q09MT1JTLldISVRFfTtcbiAgICBib3gtc2hhZG93IDogMCAwIDVweCAke0NPTE9SUy5HRVQoJ0JMQUNLJywgMC4yNSl9O1xuICAgIHRyYW5zaXRpb24gOiBib3gtc2hhZG93IDAuMjVzIGxpbmVhciwgcGFkZGluZyAwLjI1cyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHBhZGRpbmc7XG5cbiAgICAmLmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggJHtDT0xPUlMuR0VUKCdCTEFDSycsIDAuMjUpfTtcbiAgICB9XG5cbiAgICAuYXBoLWNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhDYXJkU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY2FyZCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */"));
/* Component Itself */

var Card = function Card(props) {
  var className = props.className;
  return _react.default.createElement(AphCardStyled, _extends({}, props, {
    className: "aph-card ".concat(className || '')
  }));
};
/* Default Properties */


Card.defaultProps = {
  styles: {}
};
/* Properties Types */

Card.propTypes = {
  styles: _propTypes.default.object
};
/* Exporting */

var _default = Card;
exports.default = _default;