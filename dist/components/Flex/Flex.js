"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component Itself */
var AphFlex = (0, _styledBase.default)("div", {
  target: "e7a2zex0"
})("box-sizing:border-box;display:flex;min-height:100%;flex-wrap:nowrap;flex-flow:", function (props) {
  return props.flexFlow;
}, ";align-items:", function (props) {
  return props.flexAlign;
}, ";justify-content:", function (props) {
  return props.flexJustify;
}, ";", function (props) {
  return props.flexItem && "\n        height        : auto;\n        flex          : 1 1 auto;\n        flex-direction: column;\n    ";
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJMEIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRmxleC9GbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBcGhGbGV4ID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcblxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtZmxvdzogJHtwcm9wcyA9PiBwcm9wcy5mbGV4Rmxvd307XG5cbiAgICBhbGlnbi1pdGVtcyAgICA6ICR7cHJvcHMgPT4gcHJvcHMuZmxleEFsaWdufTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuZmxleEp1c3RpZnl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5mbGV4SXRlbSAmJiBgXG4gICAgICAgIGhlaWdodCAgICAgICAgOiBhdXRvO1xuICAgICAgICBmbGV4ICAgICAgICAgIDogMSAxIGF1dG87XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYH07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BcGhGbGV4LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmbGV4RmxvdyAgIDogJ2NvbHVtbicsXG4gICAgZmxleEFsaWduICA6IG51bGwsXG4gICAgZmxleEp1c3RpZnk6ICdzdGFydCcsXG5cbiAgICBmbGV4SXRlbSAgIDogZmFsc2UsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
/* Default Props */

AphFlex.defaultProps = {
  flexFlow: 'column',
  flexAlign: null,
  flexJustify: 'start',
  flexItem: false
};
/* Exporting */

var _default = AphFlex;
exports.default = _default;