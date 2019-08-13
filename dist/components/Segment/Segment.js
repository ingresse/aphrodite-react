"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var SegmentStyled = (0, _styledBase.default)("div", {
  target: "e1pevrxj0"
})("box-sizing:border-box;display:block;color:", function (props) {
  return props.color || null;
}, ";margin:", function (props) {
  return props.margin || null;
}, ";padding:", function (props) {
  return props.padding || '20px 10px';
}, ";", function (props) {
  return !props.hoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        border-radius: " + _constants.RADIUS.LG + "px;\n        box-shadow   : none;\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px " + _utils.colors.get('oil', 'dark', 0.25) + ";\n        }\n    ";
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTZWdtZW50U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgY29sb3IgIDogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciAgIHx8IG51bGx9O1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2luICB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgJzIwcHggMTBweCd9O1xuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaG92ZXJhYmxlID8gbnVsbCA6IGBcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyIDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAke1JBRElVUy5MR31weDtcbiAgICAgICAgYm94LXNoYWRvdyAgIDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbiAgIDogYm94LXNoYWRvdyAwLjE1cyBsaW5lYXI7XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAke2NvbG9ycy5nZXQoJ29pbCcsICdkYXJrJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlZ21lbnRTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXNlZ21lbnQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblNlZ21lbnQucHJvcFR5cGVzID0ge1xuICAgIG1hcmdpbiA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGFkZGluZzogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXMgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgU2VnbWVudDtcbiJdfQ== */"));
/* Component Itself */

var Segment = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(SegmentStyled, _extends({}, props, {
    ref: ref,
    className: "aph-segment " + (className || '')
  }));
});
/* Properties Types */

Segment.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Segment;
exports.default = _default;