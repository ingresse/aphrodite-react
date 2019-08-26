"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Constants */

/* Utilities */

/* Component Styles */
var NavbarStyled = (0, _styledBase.default)("nav", {
  target: "ebhw23p0"
})("box-sizing:border-box;z-index:", _constants.ZINDEX.NAVBAR, ";display:block;position:", function (props) {
  return props.position || 'static';
}, ";top:", function (props) {
  return props.bottom ? null : 0;
}, ";right:0;left:0;bottom:", function (props) {
  return !props.bottom ? null : 0;
}, ";min-height:", function (props) {
  return props.bottom ? 6 : 8;
}, "0px;padding:0;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, props.background);
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVStCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgWklOREVYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogVXRpbGl0aWVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IE5hdmJhclN0eWxlZCA9IHN0eWxlZC5uYXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHotaW5kZXggOiAke1pJTkRFWC5OQVZCQVJ9O1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICBwb3NpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiB8fCAnc3RhdGljJ307XG4gICAgdG9wICAgICA6ICR7cHJvcHMgPT4gcHJvcHMuYm90dG9tID8gbnVsbCA6IDB9O1xuICAgIHJpZ2h0ICAgOiAwO1xuICAgIGxlZnQgICAgOiAwO1xuICAgIGJvdHRvbSAgOiAke3Byb3BzID0+ICFwcm9wcy5ib3R0b20gPyBudWxsIDogMH07XG5cbiAgICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmJvdHRvbSA/IDYgOiA4fTBweDtcblxuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYmFja2dyb3VuZCl9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = NavbarStyled;
exports.default = _default;