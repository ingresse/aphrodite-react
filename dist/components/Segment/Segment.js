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
}, ";box-shadow:", function (props) {
  return props.aphshadow ? "0 0 3px " + _utils.colors.getFromTheme(props, 'oil', 'dark', 0.25) : props.borderBottom ? "inset 0 1px 0 0 " + _utils.colors.getFromTheme(props, 'helper', 'original', 0.25) : null;
}, ";color:", function (props) {
  return props.aphcolor ? _utils.colors.getFromTheme(props, props.aphcolor) : null;
}, ";background-color:", function (props) {
  return props.aphbackground ? _utils.colors.getFromTheme(props, props.aphbackground) : null;
}, ";", function (props) {
  return !props.aphhoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        border-radius: " + _constants.RADIUS.LG + "px;\n        box-shadow   : " + function (props) {
    return !props.aphshadow ? null : "0 0 3px " + _utils.colors.getFromTheme(props, 'oil', 'dark', 0.25);
  } + ";\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px " + _utils.colors.getFromTheme(props, 'oil', 'dark', 0.25) + ";\n        }\n    ";
}, " ", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQvU2VnbWVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTZWdtZW50U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMuYXBobWFyZ2luICB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLmFwaHBhZGRpbmcgfHwgJzIwcHggMTBweCd9O1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy5hcGhyYWRpdXMgPyBgJHtwcm9wcy5hcGhyYWRpdXN9cHhgIDogbnVsbH07XG4gICAgYm94LXNoYWRvdyAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhzaGFkb3cgP1xuICAgICAgICBgMCAwIDNweCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdvaWwnLCAnZGFyaycsIDAuMjUpfWAgOiAoXG4gICAgICAgICAgICBwcm9wcy5ib3JkZXJCb3R0b20gPyBgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicsICdvcmlnaW5hbCcsIDAuMjUpfWAgOiBudWxsXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhjb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmFwaGNvbG9yKSA6IG51bGx9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXBoYmFja2dyb3VuZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmFwaGJhY2tncm91bmQpIDogbnVsbH07XG5cbiAgICAke3Byb3BzID0+ICFwcm9wcy5hcGhob3ZlcmFibGUgPyBudWxsIDogYFxuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBib3JkZXIgOiAwO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLkxHfXB4O1xuICAgICAgICBib3gtc2hhZG93ICAgOiAke3Byb3BzID0+ICFwcm9wcy5hcGhzaGFkb3cgPyBudWxsIDogYDAgMCAzcHggJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnb2lsJywgJ2RhcmsnLCAwLjI1KX1gfTtcbiAgICAgICAgdHJhbnNpdGlvbiAgIDogYm94LXNoYWRvdyAwLjE1cyBsaW5lYXI7XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdvaWwnLCAnZGFyaycsIDAuMjUpfTtcbiAgICAgICAgfVxuICAgIGB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmFwaHN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTZWdtZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICAgIG1hcmdpbixcbiAgICAgICAgcGFkZGluZyxcblxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgaG92ZXJhYmxlLFxuICAgICAgICByYWRpdXMsXG4gICAgICAgIHNoYWRvdyxcblxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWdtZW50U3R5bGVkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgYXBobWFyZ2luPXttYXJnaW59XG4gICAgICAgICAgICBhcGhwYWRkaW5nPXtwYWRkaW5nfVxuICAgICAgICAgICAgYXBoaG92ZXJhYmxlPXtob3ZlcmFibGV9XG4gICAgICAgICAgICBhcGhjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICBhcGhiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfVxuICAgICAgICAgICAgYXBocmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBhcGhzaGFkb3c9e3NoYWRvd31cbiAgICAgICAgICAgIGFwaHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXNlZ21lbnQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblNlZ21lbnQucHJvcFR5cGVzID0ge1xuICAgIG1hcmdpbiAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGFkZGluZyAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBob3ZlcmFibGUgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjb2xvciAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhY2tncm91bmQ6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmFkaXVzICAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzaGFkb3cgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXMgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgU2VnbWVudDtcbiJdfQ== */"));
/* Component Itself */

var Segment = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      margin = props.margin,
      padding = props.padding,
      color = props.color,
      background = props.background,
      hoverable = props.hoverable,
      radius = props.radius,
      shadow = props.shadow,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["className", "margin", "padding", "color", "background", "hoverable", "radius", "shadow", "styles"]);

  return _react.default.createElement(SegmentStyled, _extends({}, rest, {
    ref: ref,
    aphmargin: margin,
    aphpadding: padding,
    aphhoverable: hoverable,
    aphcolor: color,
    aphbackground: background,
    aphradius: radius,
    aphshadow: shadow,
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
  shadow: _propTypes.default.bool,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Segment;
exports.default = _default;