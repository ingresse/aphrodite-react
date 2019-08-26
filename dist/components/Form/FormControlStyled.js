"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Framework Definitions */

/**
 * Component Styled
 *
 * @param {object} properties - component props
 */
var FormControlStyled = (0, _styledBase.default)("input", {
  target: "eub2l8f0"
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-weight:", _constants.SIZES.MD.FONT_WEIGHT, ";font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'smoke');
}, ";border-radius:", _constants.RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury', 'light');
}, ";font-weight:300;}&:active,&:focus{background-color:", function (props) {
  return _utils.colors.getFromTheme(props, props.error ? 'error' : props.color || 'secondary', 'crystal');
}, ";+ .aph-form-label{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";transform:translateY(0);}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return _utils.colors.getFromTheme(props, props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury', 'crystal');
}, ";&:hover,&:active,&:focus{+ .aph-form-label{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury');
}, ";}}}&.aph-form-control--middle{padding:10px;}", function (props) {
  return !props.error ? null : "\n        color: " + function (props) {
    return _utils.colors.getFromTheme(props, 'error');
  } + ";\n\n        + .aph-form-label {\n            color: " + function (props) {
    return _utils.colors.getFromTheme(props, 'error');
  } + ";\n        }\n\n        &:hover,\n        &:active,\n        &:focus {\n            + .aph-form-label {\n                color: " + function (props) {
    return _utils.colors.getFromTheme(props, 'error');
  } + ";\n            }\n        }\n    ";
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xTdHlsZWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFzQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm1Db250cm9sU3R5bGVkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBTdHlsZWRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyAtIGNvbXBvbmVudCBwcm9wc1xuICovXG5jb25zdCBGb3JtQ29udHJvbFN0eWxlZCA9IHN0eWxlZC5pbnB1dGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IDEwMCU7XG4gICAgbWFyZ2luICAgIDogMDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmcgICA6IDIwcHggMTBweCAwO1xuXG4gICAgZm9udC13ZWlnaHQ6ICR7U0laRVMuTUQuRk9OVF9XRUlHSFR9O1xuICAgIGZvbnQtc2l6ZSAgOiAke1NJWkVTLk1ELkZPTlRfU0laRX07XG4gICAgbGluZS1oZWlnaHQ6ICR7U0laRVMuTUQuTElORV9IRUlHSFR9O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpfTtcbiAgICBib3JkZXItcmFkaXVzICAgOiAke1JBRElVUy5YU31weDtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yLCBwYWRkaW5nO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuXG4gICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtY29sb3IsIHBhZGRpbmc7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuZXJyb3IgPyAnZXJyb3InIDogKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSksICdjcnlzdGFsJyl9O1xuXG4gICAgICAgICsgLmFwaC1mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgIHRvcCAgICAgIDogMi41cHg7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmVycm9yID8gJ2Vycm9yJyA6IChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpKX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpfTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFwaC1mb3JtLWNvbnRyb2wtLW1pZGRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuZXJyb3IgPyBudWxsIDogYFxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdlcnJvcicpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = FormControlStyled;
exports.default = _default;