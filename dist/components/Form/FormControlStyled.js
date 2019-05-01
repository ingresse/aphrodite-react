"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled2 = _interopRequireDefault(require("@emotion/styled"));

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
var FormControlStyled = function FormControlStyled() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var tag = properties.tag;

  var AphFormControlStyled = _styled2.default[tag || 'input']("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";color:", _utils.colors.get('black'), ";background-color:", _utils.colors.get('smoke'), ";border-radius:", _constants.RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;&::placeholder{color:", _utils.colors.get('mercury', 'light'), ";}&:active,&:focus{background-color:", function (props) {
    return _utils.colors.get(props.error ? 'error' : props.color || 'secondary', 'crystal');
  }, ";+ .aph-form-label{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
    return _utils.colors.get(props.error ? 'error' : props.color || 'secondary');
  }, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", _utils.colors.get('mercury'), ";background-color:", _utils.colors.get('mercury', 'crystal'), ";}&.aph-form-control--middle{padding:10px;}", function (props) {
    return !props.error ? null : "\n            color: ".concat(_utils.colors.get('error'), ";\n\n            + .aph-form-label {\n                color: ").concat(_utils.colors.get('error'), ";\n            }\n        ");
  }, " ", function (props) {
    return props.styles;
  }, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xTdHlsZWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCdUQiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udHJvbFN0eWxlZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBSQURJVVMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBDb21wb25lbnQgU3R5bGVkXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgLSBjb21wb25lbnQgcHJvcHNcbiAqL1xuY29uc3QgRm9ybUNvbnRyb2xTdHlsZWQgPSAocHJvcGVydGllcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyB0YWcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBjb25zdCBBcGhGb3JtQ29udHJvbFN0eWxlZCA9IHN0eWxlZFt0YWcgfHwgJ2lucHV0J11gXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgICAgICB3aWR0aCAgICAgOiAxMDAlO1xuICAgICAgICBtYXJnaW4gICAgOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nICAgOiAyMHB4IDEwcHggMDtcblxuICAgICAgICBmb250LXNpemUgIDogJHtTSVpFUy5NRC5GT05UX1NJWkV9O1xuICAgICAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5NRC5MSU5FX0hFSUdIVH07XG5cbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtjb2xvcnMuZ2V0KCdibGFjaycpfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCdzbW9rZScpfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAgIDogJHtSQURJVVMuWFN9cHg7XG5cbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgcGFkZGluZztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuXG4gICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBwYWRkaW5nO1xuXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5JywgJ2xpZ2h0Jyl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0KHByb3BzLmVycm9yID8gJ2Vycm9yJyA6IChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JyksICdjcnlzdGFsJyl9O1xuXG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgdG9wICAgICAgOiAyLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldChwcm9wcy5lcnJvciA/ICdlcnJvcicgOiAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmRpc2FibGVkLFxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScsICdjcnlzdGFsJyl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hcGgtZm9ybS1jb250cm9sLS1taWRkbGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICR7cHJvcHMgPT4gIXByb3BzLmVycm9yID8gbnVsbCA6IGBcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5nZXQoJ2Vycm9yJyl9O1xuXG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnZXJyb3InKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG5cbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoRm9ybUNvbnRyb2xTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wZXJ0aWVzfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sU3R5bGVkO1xuIl19 */"));

  return _react.default.createElement(AphFormControlStyled, properties);
};
/* Exporting */


var _default = FormControlStyled;
exports.default = _default;