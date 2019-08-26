"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Aphrodite Helpers */

/* Component Styles */
var SidePillStyled = (0, _styledBase.default)("aside", {
  target: "e1pc5nzq0"
})("box-sizing:border-box;display:flex;align-items:center;justify-content:", function (props) {
  return props.center ? 'center' : props.right ? 'flex-end' : 'flex-start';
}, ";min-width:70px;min-height:60px;padding:", function (props) {
  return props.right ? '0 15px 0 25px' : '0 20px';
}, ";position:absolute;top:10px;left:", function (props) {
  return props.center ? '50%' : props.right ? null : '-15%';
}, ";right:", function (props) {
  return props.right && !props.center ? '-15%' : null;
}, ";flex-direction:", function (props) {
  return props.right ? 'row-reverse' : null;
}, ";font-weight:500;font-size:20px;line-height:30px;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'background');
}, ";box-shadow:0 0 5px 0 ", function (props) {
  return _utils.colors.getFromTheme(props, 'black', 'original', 0.25);
}, ";border-radius:", function (props) {
  return props.center ? '30px' : props.right ? '30px 0 0 30px' : '0 30px 30px 0';
}, ";transition:all 0.15s linear 0s;img{margin-left:", function (props) {
  return props.right ? 0 : '20px';
}, ";margin-right:", function (props) {
  return props.right ? '20px' : 0;
}, ";}.aph-sidepill{&__content,&__hoverable{display:flex;align-items:center;padding:0;margin:0;}}&:hover{left:", function (props) {
  return props.right ? null : '0';
}, ";right:", function (props) {
  return !props.right ? null : '0';
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGVQaWxsL1NpZGVQaWxsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaWRlUGlsbC9TaWRlUGlsbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQXBocm9kaXRlIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgU2lkZVBpbGxTdHlsZWQgPSBzdHlsZWQuYXNpZGVgXG4gICAgYm94LXNpemluZyAgICAgOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBwcm9wcy5yaWdodCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9O1xuICAgIG1pbi13aWR0aCAgICAgIDogNzBweDtcbiAgICBtaW4taGVpZ2h0ICAgICA6IDYwcHg7XG4gICAgcGFkZGluZyAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJzAgMTVweCAwIDI1cHgnIDogJzAgMjBweCd9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICA6IDEwcHg7XG4gICAgbGVmdCAgICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnNTAlJyA6IHByb3BzLnJpZ2h0ID8gbnVsbCA6ICctMTUlJyl9O1xuICAgIHJpZ2h0ICAgIDogJHtwcm9wcyA9PiAocHJvcHMucmlnaHQgJiYgIXByb3BzLmNlbnRlciA/ICctMTUlJyA6IG51bGwpfTtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5yaWdodCA/ICdyb3ctcmV2ZXJzZScgOiBudWxsKX07XG5cbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZSAgOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJzMwcHgnIDogcHJvcHMucmlnaHQgPyAnMzBweCAwIDAgMzBweCcgOiAnMCAzMHB4IDMwcHggMCd9O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhciAwcztcblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0IDogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/IDAgOiAnMjBweCd9O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMucmlnaHQgPyAnMjBweCcgOiAwfTtcbiAgICB9XG5cbiAgICAuYXBoLXNpZGVwaWxsIHtcbiAgICAgICAgJl9fY29udGVudCxcbiAgICAgICAgJl9faG92ZXJhYmxlIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgbGVmdCA6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ICA/IG51bGwgOiAnMCcpfTtcbiAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKCFwcm9wcy5yaWdodCA/IG51bGwgOiAnMCcpfTtcbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFNpZGVQaWxsU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = SidePillStyled;
exports.default = _default;