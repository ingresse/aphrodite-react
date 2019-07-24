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
})("box-sizing:border-box;position:relative;display:inline-block;z-index:1;", selector, "{&__content{z-index:1;filter:none;display:block;transition:filter 0.15s linear;}&__items{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;display:flex;z-index:-1;justify-content:space-evenly;align-items:center;transition:opacity 0.25s linear,z-index 0.25s linear;text-align:center;vertical-align:middle;}}", function (props) {
  return !props.hasActions ? null : "\n        &:hover,\n        &:active,\n        &:focus {\n            " + selector + " {\n                &__content {\n                    filter: blur(1px);\n\n                }\n\n                &__items {\n                    opacity: 1;\n                    z-index: 10;\n                }\n            }\n        }\n    ";
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvdmVyQWN0aW9ucy9Ib3ZlckFjdGlvbnNTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvdmVyQWN0aW9ucy9Ib3ZlckFjdGlvbnNTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbXBvbmVudCBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1ob3Zlci1hY3Rpb25zJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSG92ZXJBY3Rpb25zU3R5bGVkID0gc3R5bGVkLnNwYW5gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXggOiAxO1xuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmaWx0ZXIgOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjE1cyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pdGVtcyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3AgICAgIDogMDtcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAwO1xuICAgICAgICAgICAgYm90dG9tICA6IDA7XG4gICAgICAgICAgICBsZWZ0ICAgIDogMDtcbiAgICAgICAgICAgIG9wYWNpdHkgOiAwO1xuICAgICAgICAgICAgZGlzcGxheSA6IGZsZXg7XG4gICAgICAgICAgICB6LWluZGV4IDogLTE7XG5cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMjVzIGxpbmVhcixcbiAgICAgICAgICAgICAgICB6LWluZGV4IDAuMjVzIGxpbmVhclxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+ICFwcm9wcy5oYXNBY3Rpb25zID8gbnVsbCA6IGBcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX2l0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEhvdmVyQWN0aW9uc1N0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = HoverActionsStyled;
exports.default = _default;