"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var SegmentStyled = (0, _styledBase.default)("div", {
  target: "e1pevrxj0"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.margin || null;
}, ";padding:", function (props) {
  return props.padding || '20px 10px';
}, ";", function (props) {
  return !props.hoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        border-radius: ".concat(_constants.RADIUS.LG, "px;\n        box-shadow   : none;\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px ").concat(_utils.colors.get('oil', 'dark', 0.25), ";\n        }\n    ");
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbiB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgJzIwcHggMTBweCd9O1xuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaG92ZXJhYmxlID8gbnVsbCA6IGBcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyIDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAke1JBRElVUy5MR31weDtcbiAgICAgICAgYm94LXNoYWRvdyAgIDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbiAgIDogYm94LXNoYWRvdyAwLjE1cyBsaW5lYXI7XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAke2NvbG9ycy5nZXQoJ29pbCcsICdkYXJrJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VnbWVudFN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXNlZ21lbnQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuU2VnbWVudC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWRkaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQ7XG4iXX0= */"));
/* Component Itself */

var Segment = function Segment(props) {
  var className = props.className;
  return _react.default.createElement(SegmentStyled, _extends({}, props, {
    className: "aph-segment ".concat(className || '')
  }));
};
/* Properties Types */


Segment.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = Segment;
exports.default = _default;