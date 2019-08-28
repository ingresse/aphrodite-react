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
  return _utils.colors.getFromTheme(props, 'background');
}, ";border-radius:", _constants.RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury', 'light');
}, ";font-weight:300;}&:active,&:focus{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, props.error ? 'error' : props.color || 'secondary', 'crystal');
}, ";+ .aph-form-label{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";transform:translateY(0);}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return _utils.colors.getFromTheme(props, props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'disabled');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'disabled', 'crystal');
}, ";&:hover,&:active,&:focus{+ .aph-form-label{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'disabled');
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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xTdHlsZWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFzQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm1Db250cm9sU3R5bGVkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBTdHlsZWRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyAtIGNvbXBvbmVudCBwcm9wc1xuICovXG5jb25zdCBGb3JtQ29udHJvbFN0eWxlZCA9IHN0eWxlZC5pbnB1dGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IDEwMCU7XG4gICAgbWFyZ2luICAgIDogMDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmcgICA6IDIwcHggMTBweCAwO1xuXG4gICAgZm9udC13ZWlnaHQ6ICR7U0laRVMuTUQuRk9OVF9XRUlHSFR9O1xuICAgIGZvbnQtc2l6ZSAgOiAke1NJWkVTLk1ELkZPTlRfU0laRX07XG4gICAgbGluZS1oZWlnaHQ6ICR7U0laRVMuTUQuTElORV9IRUlHSFR9O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICA6ICR7UkFESVVTLlhTfXB4O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIHBhZGRpbmc7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4xNXM7XG5cbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvciwgcGFkZGluZztcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdsaWdodCcpfTtcblxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5lcnJvciA/ICdlcnJvcicgOiAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKSwgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgdG9wICAgICAgOiAyLjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtTSVpFUy5TTS5GT05UX1NJWkV9O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuZXJyb3IgPyAnZXJyb3InIDogKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSkpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZGlzYWJsZWQsXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJywgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYXBoLWZvcm0tY29udHJvbC0tbWlkZGxlIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+ICFwcm9wcy5lcnJvciA/IG51bGwgOiBgXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdlcnJvcicpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = FormControlStyled;
exports.default = _default;