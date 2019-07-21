"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Utils */

/* Constants */

/* Modal Styled */
var ModalStyled = (0, _styledBase.default)("dialog", {
  target: "e173h3s00"
})("position:fixed;display:none;opacity:0;z-index:1001;width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:", _constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '110%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.25 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.15 : 0.25;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.15 : 0.25;
}, "s linear;background-color:", _utils.colors.get('white'), ";box-shadow:0 0 10px 0 ", _utils.colors.get('black', 'original', 0.25), ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBNb2RhbCBTdHlsZWQgKi9cbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkLmRpYWxvZ2BcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6IDEwMDE7XG4gICAgd2lkdGggICA6IGF1dG87XG4gICAgaGVpZ2h0ICA6IGF1dG87XG4gICAgdG9wICAgICA6IDQwcHg7XG4gICAgcmlnaHQgICA6IDQwcHg7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDQwcHg7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgcGFkZGluZyA6ICR7KEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgKyBHUklELlVOSVQpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICcxMTAlJ30pO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHotaW5kZXgsIG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uIDpcbiAgICAgICAgZGlzcGxheSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMjUgOiAwLjF9cyBsaW5lYXIsXG4gICAgICAgIG9wYWNpdHkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjE1IDogMC4yNX1zIGxpbmVhcixcbiAgICAgICAgdHJhbnNmb3JtICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4xNSA6IDAuMjV9cyBsaW5lYXJcbiAgICA7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCAxMHB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcbiAgICBib3JkZXItcmFkaXVzICAgOiAke1NJWkVTLkxHLlJBRElVU30gJHtTSVpFUy5MRy5SQURJVVN9IDAgMDtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IE1vZGFsU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;