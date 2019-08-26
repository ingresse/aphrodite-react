"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Framework Definitions */

/* Component Styles */
var AphFormControlErrorMsgStyled = (0, _styledBase.default)("label", {
  target: "epzfivm0"
})("box-sizing:border-box;display:block;padding:0 10px;max-height:0;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'error');
}, ";font-size:", _constants.SIZES.SM.FONT_SIZE, ";line-height:", _constants.SIZES.SM.LINE_HEIGHT, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;transition-property:max-height;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xFcnJvck1zZ1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRaUQiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udHJvbEVycm9yTXNnU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Db250cm9sRXJyb3JNc2dTdHlsZWQgPSBzdHlsZWQubGFiZWxgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwYWRkaW5nICAgOiAwIDEwcHg7XG4gICAgbWF4LWhlaWdodDogMDtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdlcnJvcicpfTtcblxuICAgIGZvbnQtc2l6ZSAgOiAke1NJWkVTLlNNLkZPTlRfU0laRX07XG4gICAgbGluZS1oZWlnaHQ6ICR7U0laRVMuU00uTElORV9IRUlHSFR9O1xuXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNCwwLC4yLDEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogbWF4LWhlaWdodDtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRm9ybUNvbnRyb2xFcnJvck1zZ1N0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = AphFormControlErrorMsgStyled;
exports.default = _default;