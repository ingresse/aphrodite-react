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
  return props.center ? '50%' : props.right ? null : 0;
}, ";right:", function (props) {
  return props.right && !props.center ? 0 : null;
}, ";transform:", function (props) {
  return props.center ? 'translateX(-50%)' : null;
}, ";font-weight:500;font-size:20px;line-height:30px;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'background');
}, ";box-shadow:0 0 5px 0 ", function (props) {
  return _utils.colors.getFromTheme(props, 'black', 'original', 0.25);
}, ";border-radius:", function (props) {
  return props.center ? '30px' : props.right ? '30px 0 0 30px' : '0 30px 30px 0';
}, ";transition:all 0.15s linear 0s;.aph-sidepill{&__content,&__hoverable{display:flex;align-items:center;padding:0;margin:0;}&__hoverable{position:absolute;order:", function (props) {
  return props.right ? 200 : null;
}, ";left:", function (props) {
  return props.right ? null : '-100%';
}, ";right:", function (props) {
  return !props.right ? null : '-100%';
}, ";transition:position 0.15s linear,", function (props) {
  return props.right ? 'right' : 'left';
}, " 0.25s ease;}}&:hover{.aph-sidepill{&__hoverable{position:relative;left:", function (props) {
  return props.right ? null : '0';
}, ";right:", function (props) {
  return !props.right ? null : '0';
}, ";}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGVQaWxsL1NpZGVQaWxsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaWRlUGlsbC9TaWRlUGlsbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQXBocm9kaXRlIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgU2lkZVBpbGxTdHlsZWQgPSBzdHlsZWQuYXNpZGVgXG4gICAgYm94LXNpemluZyAgICAgOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBwcm9wcy5yaWdodCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9O1xuICAgIG1pbi13aWR0aCAgICAgIDogNzBweDtcbiAgICBtaW4taGVpZ2h0ICAgICA6IDYwcHg7XG4gICAgcGFkZGluZyAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJzAgMTVweCAwIDI1cHgnIDogJzAgMjBweCd9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICA6IDEwcHg7XG4gICAgbGVmdCAgICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnNTAlJyA6IHByb3BzLnJpZ2h0ID8gbnVsbCA6IDApfTtcbiAgICByaWdodCAgICA6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ICYmICFwcm9wcy5jZW50ZXIgPyAwIDogbnVsbCl9O1xuICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJ3RyYW5zbGF0ZVgoLTUwJSknIDogbnVsbCl9O1xuXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemUgIDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcblxuICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgNXB4IDAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLmNlbnRlciA/ICczMHB4JyA6IHByb3BzLnJpZ2h0ID8gJzMwcHggMCAwIDMwcHgnIDogJzAgMzBweCAzMHB4IDAnfTtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXIgMHM7XG5cbiAgICAuYXBoLXNpZGVwaWxsIHtcbiAgICAgICAgJl9fY29udGVudCxcbiAgICAgICAgJl9faG92ZXJhYmxlIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19ob3ZlcmFibGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3JkZXI6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ID8gMjAwIDogbnVsbCl9O1xuICAgICAgICAgICAgbGVmdCA6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ID8gbnVsbCA6ICctMTAwJScpfTtcbiAgICAgICAgICAgIHJpZ2h0OiAke3Byb3BzID0+ICghcHJvcHMucmlnaHQgPyBudWxsIDogJy0xMDAlJyl9O1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBwb3NpdGlvbiAwLjE1cyBsaW5lYXIsICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9IDAuMjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmFwaC1zaWRlcGlsbCB7XG4gICAgICAgICAgICAmX19ob3ZlcmFibGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0IDogJHtwcm9wcyA9PiAocHJvcHMucmlnaHQgPyBudWxsIDogJzAnKX07XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKCFwcm9wcy5yaWdodCA/IG51bGwgOiAnMCcpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgU2lkZVBpbGxTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = SidePillStyled;
exports.default = _default;