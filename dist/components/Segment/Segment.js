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

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
var SegmentStyled = (0, _styledBase.default)("div", {
  target: "e1pevrxj0"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.aphmargin || null;
}, ";padding:", function (props) {
  return props.aphpadding || '20px 10px';
}, ";border-radius:", function (props) {
  return props.aphradius ? props.aphradius + "px" : null;
}, ";color:", function (props) {
  return props.aphcolor ? _utils.colors.getFromTheme(props, props.aphcolor) : null;
}, ";background-color:", function (props) {
  return props.aphbackground ? _utils.colors.getFromTheme(props, props.aphbackground) : null;
}, ";", function (props) {
  return !props.aphhoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        border-radius: " + _constants.RADIUS.LG + "px;\n        box-shadow   : none;\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px " + _utils.colors.get('oil', 'dark', 0.25) + ";\n        }\n    ";
}, " ", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTZWdtZW50U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMuYXBobWFyZ2luICB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLmFwaHBhZGRpbmcgfHwgJzIwcHggMTBweCd9O1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy5hcGhyYWRpdXMgPyBgJHtwcm9wcy5hcGhyYWRpdXN9cHhgIDogbnVsbH07XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLmFwaGNvbG9yID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoY29sb3IpIDogbnVsbH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcGhiYWNrZ3JvdW5kID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoYmFja2dyb3VuZCkgOiBudWxsfTtcblxuICAgICR7cHJvcHMgPT4gIXByb3BzLmFwaGhvdmVyYWJsZSA/IG51bGwgOiBgXG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuTEd9cHg7XG4gICAgICAgIGJveC1zaGFkb3cgICA6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb24gICA6IGJveC1zaGFkb3cgMC4xNXMgbGluZWFyO1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJHtjb2xvcnMuZ2V0KCdvaWwnLCAnZGFyaycsIDAuMjUpfTtcbiAgICAgICAgfVxuICAgIGB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmFwaHN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTZWdtZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICAgIG1hcmdpbixcbiAgICAgICAgcGFkZGluZyxcblxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgaG92ZXJhYmxlLFxuICAgICAgICByYWRpdXMsXG5cbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VnbWVudFN0eWxlZFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGFwaG1hcmdpbj17bWFyZ2lufVxuICAgICAgICAgICAgYXBocGFkZGluZz17cGFkZGluZ31cbiAgICAgICAgICAgIGFwaGhvdmVyYWJsZT17aG92ZXJhYmxlfVxuICAgICAgICAgICAgYXBoY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgYXBoYmFja2dyb3VuZD17YmFja2dyb3VuZH1cbiAgICAgICAgICAgIGFwaHJhZGl1cz17cmFkaXVzfVxuICAgICAgICAgICAgYXBoc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtc2VnbWVudCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuU2VnbWVudC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWRkaW5nICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhvdmVyYWJsZSA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNvbG9yICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFja2dyb3VuZDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICByYWRpdXMgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50O1xuIl19 */"));
/* Component Itself */

var Segment = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      margin = props.margin,
      padding = props.padding,
      color = props.color,
      background = props.background,
      hoverable = props.hoverable,
      radius = props.radius,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["className", "margin", "padding", "color", "background", "hoverable", "radius", "styles"]);

  return _react.default.createElement(SegmentStyled, _extends({}, rest, {
    ref: ref,
    aphmargin: margin,
    aphpadding: padding,
    aphhoverable: hoverable,
    aphcolor: color,
    aphbackground: background,
    aphradius: radius,
    aphstyles: styles,
    className: "aph-segment " + (className || '')
  }));
});
/* Properties Types */

Segment.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  hoverable: _propTypes.default.bool,
  color: _propTypes.default.string,
  background: _propTypes.default.string,
  radius: _propTypes.default.number,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Segment;
exports.default = _default;