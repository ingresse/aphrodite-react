"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Utilities */

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
  return _utils.colors.getFromTheme(props, props.aphBackground);
}, ";}&__line{stroke:", function (props) {
  return _utils.colors.getFromTheme(props, props.aphColor);
}, ";stroke-linecap:round;transition:stroke-dashoffset 0.1s linear;}&__count{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;display:block;text-align:center;font-weight:normal;font-size:", function (props) {
  return props.aphSize / 2;
}, "px;line-height:", function (props) {
  return props.aphSize;
}, "px;color:", function (props) {
  return _utils.colors.getFromTheme(props, props.aphColor);
}, ";}}", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBDb3VudGRvd25TdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgbWFyZ2luICAgIDogMCBhdXRvO1xuICAgIHdpZHRoICAgICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoU2l6ZX1weDtcbiAgICBoZWlnaHQgICAgOiAke3Byb3BzID0+IHByb3BzLmFwaFNpemV9cHg7XG5cbiAgICAuJHtwcm9wcyA9PiBwcm9wcy5hcGhTZWxlY3Rvcn0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcblxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHNjYWxlWSgtMSk7XG5cbiAgICAgICAgJl9fdHJhY2UsXG4gICAgICAgICZfX2xpbmUge1xuICAgICAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3RyYWNlIHtcbiAgICAgICAgICAgIHN0cm9rZTogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5hcGhCYWNrZ3JvdW5kKX07XG4gICAgICAgIH1cblxuICAgICAgICAmX19saW5lIHtcbiAgICAgICAgICAgIHN0cm9rZSAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmFwaENvbG9yKX07XG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uICAgIDogc3Ryb2tlLWRhc2hvZmZzZXQgMC4xcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb3VudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3AgICAgIDogMDtcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAwO1xuICAgICAgICAgICAgYm90dG9tICA6IDA7XG4gICAgICAgICAgICBsZWZ0ICAgIDogMDtcbiAgICAgICAgICAgIG1hcmdpbiAgOiAwO1xuICAgICAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAke3Byb3BzID0+IHByb3BzLmFwaFNpemUgLyAyfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuYXBoU2l6ZX1weDtcblxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoQ29sb3IpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYXBoU3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = CountdownStyled;
exports.default = _default;