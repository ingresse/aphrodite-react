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
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";color:", _utils.colors.get('black'), ";background-color:", _utils.colors.get('smoke'), ";border-radius:", _constants.RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", _utils.colors.get('mercury', 'light'), ";}&:active,&:focus{background-color:", function (props) {
  return _utils.colors.get(props.error ? 'error' : props.color || 'secondary', 'crystal');
}, ";+ .aph-form-label{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return _utils.colors.get(props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", _utils.colors.get('mercury'), ";background-color:", _utils.colors.get('mercury', 'crystal'), ";&:hover,&:active,&:focus{+ .aph-form-label{color:", _utils.colors.get('mercury'), ";}}}&.aph-form-control--middle{padding:10px;}", function (props) {
  return !props.error ? null : "\n        color: " + _utils.colors.get('error') + ";\n\n        + .aph-form-label {\n            color: " + _utils.colors.get('error') + ";\n        }\n\n        &:hover,\n        &:active,\n        &:focus {\n            + .aph-form-label {\n                color: " + _utils.colors.get('error') + ";\n            }\n        }\n    ";
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xTdHlsZWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFzQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm1Db250cm9sU3R5bGVkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBTdHlsZWRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyAtIGNvbXBvbmVudCBwcm9wc1xuICovXG5jb25zdCBGb3JtQ29udHJvbFN0eWxlZCA9IHN0eWxlZC5pbnB1dGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IDEwMCU7XG4gICAgbWFyZ2luICAgIDogMDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmcgICA6IDIwcHggMTBweCAwO1xuXG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuTUQuRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5NRC5MSU5FX0hFSUdIVH07XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke2NvbG9ycy5nZXQoJ2JsYWNrJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnc21va2UnKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgcGFkZGluZztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcblxuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBwYWRkaW5nO1xuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlICAgICAgICAgOiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5nZXQoJ21lcmN1cnknLCAnbGlnaHQnKX07XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldChwcm9wcy5lcnJvciA/ICdlcnJvcicgOiAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnY3J5c3RhbCcpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICB0b3AgICAgICA6IDIuNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke1NJWkVTLlNNLkZPTlRfU0laRX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXIgOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgICsgLmFwaC1mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXQocHJvcHMuZXJyb3IgPyAnZXJyb3InIDogKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAke2NvbG9ycy5nZXQoJ21lcmN1cnknKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScsICdjcnlzdGFsJyl9O1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICsgLmFwaC1mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5Jyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hcGgtZm9ybS1jb250cm9sLS1taWRkbGUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gIXByb3BzLmVycm9yID8gbnVsbCA6IGBcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnZXJyb3InKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnZXJyb3InKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnZXJyb3InKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbFN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = FormControlStyled;
exports.default = _default;