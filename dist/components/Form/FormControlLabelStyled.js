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
var AphFormControlLabelStyled = (0, _styledBase.default)("label", {
  target: "e17pdeij0"
})("box-sizing:border-box;position:absolute;top:15px;left:10px;display:inline-block;color:", _utils.colors.get('mercury'), ";font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";text-transform:uppercase;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;&.aph-form-label--top{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xMYWJlbFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFROEMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udHJvbExhYmVsU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Db250cm9sTGFiZWxTdHlsZWQgPSBzdHlsZWQubGFiZWxgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICAgOiAxNXB4O1xuICAgIGxlZnQgICAgICA6IDEwcHg7XG4gICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuXG4gICAgY29sb3I6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScpfTtcblxuICAgIGZvbnQtc2l6ZSAgOiAke1NJWkVTLk1ELkZPTlRfU0laRX07XG4gICAgbGluZS1oZWlnaHQ6ICR7U0laRVMuTUQuTElORV9IRUlHSFR9O1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4xNXM7XG5cbiAgICAmLmFwaC1mb3JtLWxhYmVsLS10b3Age1xuICAgICAgICB0b3AgICAgICA6IDIuNXB4O1xuICAgICAgICBmb250LXNpemU6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Db250cm9sTGFiZWxTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = AphFormControlLabelStyled;
exports.default = _default;