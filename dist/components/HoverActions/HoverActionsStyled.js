"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component Selector */
var selector = '.aph-hover-actions';
/* Component Styles */

var HoverActionsStyled = (0, _styledBase.default)("span", {
  target: "ez3ukd00"
})("box-sizing:border-box;position:relative;display:inline-block;z-index:1;", selector, "{&__content{z-index:1;filter:none;transition:filter 0.15s linear;}&__items{position:absolute;display:flex;top:0;right:0;bottom:0;left:0;opacity:0;z-index:-1;justify-content:space-evenly;align-items:center;transition:opacity 0.25s linear,z-index 0.25s linear;text-align:center;vertical-align:middle;}}", function (props) {
  return !props.hasActions ? null : "\n        &:hover,\n        &:active,\n        &:focus {\n            " + selector + " {\n                &__content {\n                    filter: blur(1px);\n\n                }\n\n                &__items {\n                    opacity: 1;\n                    z-index: 10;\n                }\n            }\n        }\n    ";
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvdmVyQWN0aW9ucy9Ib3ZlckFjdGlvbnNTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvdmVyQWN0aW9ucy9Ib3ZlckFjdGlvbnNTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbXBvbmVudCBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1ob3Zlci1hY3Rpb25zJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSG92ZXJBY3Rpb25zU3R5bGVkID0gc3R5bGVkLnNwYW5gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXggOiAxO1xuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmaWx0ZXIgOiBub25lO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faXRlbXMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheSA6IGZsZXg7XG4gICAgICAgICAgICB0b3AgICAgIDogMDtcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAwO1xuICAgICAgICAgICAgYm90dG9tICA6IDA7XG4gICAgICAgICAgICBsZWZ0ICAgIDogMDtcbiAgICAgICAgICAgIG9wYWNpdHkgOiAwO1xuICAgICAgICAgICAgei1pbmRleCA6IC0xO1xuXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjI1cyBsaW5lYXIsXG4gICAgICAgICAgICAgICAgei1pbmRleCAwLjI1cyBsaW5lYXJcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaGFzQWN0aW9ucyA/IG51bGwgOiBgXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDFweCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmX19pdGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIb3ZlckFjdGlvbnNTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = HoverActionsStyled;
exports.default = _default;