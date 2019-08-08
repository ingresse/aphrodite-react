"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component Itself */
var AphFlex = (0, _styledBase.default)("div", {
  target: "ek8mijm0"
})("box-sizing:border-box;display:flex;min-height:100%;flex-wrap:nowrap;flex-flow:", function (props) {
  return props.flexFlow;
}, ";align-items:", function (props) {
  return props.flexStretch ? 'stretch' : props.flexAlign;
}, ";justify-content:", function (props) {
  return props.flexJustify;
}, ";", function (props) {
  return props.flexItem && "\n        height        : auto;\n        flex          : 1 1 auto;\n        flex-direction: column;\n    ";
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmxleC9GbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBcGhGbGV4ID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcblxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtZmxvdzogJHtwcm9wcyA9PiBwcm9wcy5mbGV4Rmxvd307XG5cbiAgICBhbGlnbi1pdGVtcyAgICA6ICR7cHJvcHMgPT4gcHJvcHMuZmxleFN0cmV0Y2ggPyAnc3RyZXRjaCcgOiBwcm9wcy5mbGV4QWxpZ259O1xuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wcy5mbGV4SnVzdGlmeX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmZsZXhJdGVtICYmIGBcbiAgICAgICAgaGVpZ2h0ICAgICAgICA6IGF1dG87XG4gICAgICAgIGZsZXggICAgICAgICAgOiAxIDEgYXV0bztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"));
/* Exporting */

var _default = AphFlex;
exports.default = _default;