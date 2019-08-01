"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Framework Definitions */

/* Component Styles */
var AphFormControlLabelStyled = (0, _styledBase.default)("label", {
  target: "e17pdeij0"
})("box-sizing:border-box;position:absolute;top:", function (props) {
  return props.textArea ? '15px' : '50%';
}, ";left:10px;display:inline-block;pointer-events:none;color:", _utils.colors.get('mercury'), ";font-size:", _constants.SIZES.MD.FONT_SIZE, ";line-height:", _constants.SIZES.MD.LINE_HEIGHT, ";text-transform:uppercase;transform:", function (props) {
  return props.textArea ? null : 'translateY(-50%)';
}, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;&.aph-form-label--top{top:2.5px;font-size:", _constants.SIZES.SM.FONT_SIZE, ";transform:translateY(0);}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xMYWJlbFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFROEMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtQ29udHJvbExhYmVsU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Db250cm9sTGFiZWxTdHlsZWQgPSBzdHlsZWQubGFiZWxgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICAgOiAke3Byb3BzID0+IHByb3BzLnRleHRBcmVhID8gJzE1cHgnIDogJzUwJSd9O1xuICAgIGxlZnQgICAgICA6IDEwcHg7XG4gICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5Jyl9O1xuXG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuTUQuRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5NRC5MSU5FX0hFSUdIVH07XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgdHJhbnNmb3JtOiAke3Byb3BzID0+IHByb3BzLnRleHRBcmVhID8gbnVsbCA6ICd0cmFuc2xhdGVZKC01MCUpJ307XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuXG4gICAgJi5hcGgtZm9ybS1sYWJlbC0tdG9wIHtcbiAgICAgICAgdG9wICAgICAgOiAyLjVweDtcbiAgICAgICAgZm9udC1zaXplOiAke1NJWkVTLlNNLkZPTlRfU0laRX07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Db250cm9sTGFiZWxTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = AphFormControlLabelStyled;
exports.default = _default;