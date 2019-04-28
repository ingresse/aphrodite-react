"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Framework Definitions */

/* Component Styles */
var AphInputStyled = (0, _styledBase.default)("input", {
  target: "etrsp950"
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";color:", _utils.colors.get('black'), ";background-color:", _utils.colors.get('smoke'), ";border-radius:", _constants.RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;&::placeholder{color:", _utils.colors.get('mercury', 'light'), ";}&:active,&:focus{background-color:", function (props) {
  return _utils.colors.get(props.error ? 'error' : props.color || 'secondary', 'crystal');
}, ";+ .aph-form-label{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return _utils.colors.get(props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", _utils.colors.get('mercury'), ";background-color:", _utils.colors.get('mercury', 'crystal'), ";}&.aph-form-control--middle{padding:10px;}", function (props) {
  return !props.error ? null : "\n        color: ".concat(_utils.colors.get('error'), ";\n\n        + .aph-form-label {\n            color: ").concat(_utils.colors.get('error'), ";\n        }\n    ");
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSW5wdXRTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW1DIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSW5wdXRTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhJbnB1dFN0eWxlZCA9IHN0eWxlZC5pbnB1dGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IDEwMCU7XG4gICAgbWFyZ2luICAgIDogMDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmcgICA6IDIwcHggMTBweCAwO1xuXG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuTUQuRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5NRC5MSU5FX0hFSUdIVH07XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke2NvbG9ycy5nZXQoJ2JsYWNrJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnc21va2UnKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgcGFkZGluZztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcblxuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBwYWRkaW5nO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5JywgJ2xpZ2h0Jyl9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXQocHJvcHMuZXJyb3IgPyAnZXJyb3InIDogKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgdG9wICAgICAgOiAyLjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtTSVpFUy5TTS5GT05UX1NJWkV9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0KHByb3BzLmVycm9yID8gJ2Vycm9yJyA6IChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZGlzYWJsZWQsXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5Jyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5nZXQoJ21lcmN1cnknLCAnY3J5c3RhbCcpfTtcbiAgICB9XG5cbiAgICAmLmFwaC1mb3JtLWNvbnRyb2wtLW1pZGRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuZXJyb3IgPyBudWxsIDogYFxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdlcnJvcicpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdlcnJvcicpfTtcbiAgICAgICAgfVxuICAgIGB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaElucHV0U3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = AphInputStyled;
exports.default = _default;