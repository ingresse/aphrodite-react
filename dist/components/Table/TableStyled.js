"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Utils */

/* Component Styles */
var AphTableStyled = (0, _styledBase.default)("table", {
  target: "e10yuwue0"
})("box-sizing:border-box;min-width:100%;border-collapse:collapse;border-style:hidden;", function (props) {
  return props.styles;
}, ";", function (props) {
  return !props.rounded ? null : "\n        position     : relative;\n        overflow     : hidden;\n        border-radius: " + _constants.RADIUS.SM + "px;\n    ";
}, " ", function (props) {
  return !props.striped ? null : "\n        tbody {\n            tr:nth-child(even) {\n                background-color: " + _constants.COLORS.SMOKE + ";\n            }\n        }\n    ";
}, " thead,tfoot{background-color:", _constants.COLORS.LIGHT_GREY, ";text-align:left;}th{font-weight:700;padding:", function (props) {
  return props.condensed ? '6px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? '4px' : '9px';
}, ";}td{padding:", function (props) {
  return props.condensed ? '5px' : props.bordered ? '10px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? props.bordered ? '4px' : '5px' : '9px';
}, ";", function (props) {
  return !props.bordered ? null : "\n            border-top: 1px solid " + _constants.COLORS.LIGHT_GREY + ";\n        ";
}, "}tbody{", function (props) {
  return !props.hoverable ? null : "\n            tr {\n                background-color: transparent;\n                transition: background-color 0.25s linear;\n\n                &:hover {\n                    background-color: " + _constants.COLORS.SMOKE + ";\n                }\n            }\n        ";
}, "}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZVN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBDT0xPUlMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaFRhYmxlU3R5bGVkID0gc3R5bGVkLnRhYmxlYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWluLXdpZHRoIDogMTAwJTtcblxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXN0eWxlICAgOiBoaWRkZW47XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMucm91bmRlZCA/IG51bGwgOiBgXG4gICAgICAgIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuICAgIGApfVxuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLnN0cmlwZWQgPyBudWxsIDogYFxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q09MT1JTLlNNT0tFfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGApfVxuXG4gICAgdGhlYWQsXG4gICAgdGZvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5MSUdIVF9HUkVZfTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNnB4JyA6ICcxMXB4Jyl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNHB4JyA6ICc5cHgnKX1cbiAgICAgICAgO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICR7cHJvcHMgPT4gKHByb3BzLmNvbmRlbnNlZCA/ICc1cHgnIDogKHByb3BzLmJvcmRlcmVkID8gJzEwcHgnIDogJzExcHgnKSl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAocHJvcHMuYm9yZGVyZWQgPyAnNHB4JyA6ICc1cHgnKSA6ICc5cHgnKX1cbiAgICAgICAgO1xuXG4gICAgICAgICR7cHJvcHMgPT4gKCFwcm9wcy5ib3JkZXJlZCA/IG51bGwgOiBgXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDT0xPUlMuTElHSFRfR1JFWX07XG4gICAgICAgIGApfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgICAgJHtwcm9wcyA9PiAoIXByb3BzLmhvdmVyYWJsZSA/IG51bGwgOiBgXG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuU01PS0V9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYCl9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhUYWJsZVN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = AphTableStyled;
exports.default = _default;