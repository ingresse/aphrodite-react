"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component Styles */
var CountdownStyled = (0, _styledBase.default)("div", {
  target: "e1mleeg60"
})("box-sizing:border-box;position:relative;display:block;margin:0 auto;width:", function (props) {
  return props.aphSize;
}, "px;height:", function (props) {
  return props.aphSize;
}, "px;.", function (props) {
  return props.aphSelector;
}, "{box-sizing:border-box;position:relative;transform:rotate(-90deg) scaleY(-1);&__trace,&__line{fill:none;}&__trace{stroke:", function (props) {
  return props.aphBackground;
}, ";}&__line{stroke:", function (props) {
  return props.aphColor;
}, ";stroke-linecap:round;transition:stroke-dashoffset 0.1s linear;}&__count{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;display:block;text-align:center;font-weight:normal;font-size:", function (props) {
  return props.aphSize / 2;
}, "px;line-height:", function (props) {
  return props.aphSize;
}, "px;color:", function (props) {
  return props.aphColor;
}, ";}}", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IENvdW50ZG93blN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBtYXJnaW4gICAgOiAwIGF1dG87XG4gICAgd2lkdGggICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaXplfXB4O1xuICAgIGhlaWdodCAgICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoU2l6ZX1weDtcblxuICAgIC4ke3Byb3BzID0+IHByb3BzLmFwaFNlbGVjdG9yfSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgc2NhbGVZKC0xKTtcblxuICAgICAgICAmX190cmFjZSxcbiAgICAgICAgJl9fbGluZSB7XG4gICAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fdHJhY2Uge1xuICAgICAgICAgICAgc3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLmFwaEJhY2tncm91bmR9O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGluZSB7XG4gICAgICAgICAgICBzdHJva2UgICAgICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhDb2xvcn07XG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uICAgIDogc3Ryb2tlLWRhc2hvZmZzZXQgMC4xcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb3VudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3AgICAgIDogMDtcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAwO1xuICAgICAgICAgICAgYm90dG9tICA6IDA7XG4gICAgICAgICAgICBsZWZ0ICAgIDogMDtcbiAgICAgICAgICAgIG1hcmdpbiAgOiAwO1xuICAgICAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAke3Byb3BzID0+IHByb3BzLmFwaFNpemUgLyAyfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuYXBoU2l6ZX1weDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXBoQ29sb3J9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hcGhTdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25TdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = CountdownStyled;
exports.default = _default;