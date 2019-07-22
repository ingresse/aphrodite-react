"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Utils */

/* Constants */

/* CSS Selector */
var selector = '.aph-modal';
/* Modal Styled */

var ModalStyled = (0, _styledBase.default)("dialog", {
  target: "e173h3s00"
})("position:fixed;display:none;opacity:0;z-index:1001;width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:", _constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT, " 0 ", function (props) {
  return props.hasFooter ? _constants.SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '110%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.45 : 0.3;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear;background-color:", _utils.colors.get('white'), ";box-shadow:0 0 10px 0 ", _utils.colors.get('black', 'original', 0.25), ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}", selector, "{&__title{margin:20px 0 15px;}}", function (props) {
  return props.styles;
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__title{margin:15px 0;}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDU1MgU2VsZWN0b3IgKi9cbmNvbnN0IHNlbGVjdG9yID0gJy5hcGgtbW9kYWwnO1xuXG4vKiBNb2RhbCBTdHlsZWQgKi9cbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkLmRpYWxvZ2BcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6IDEwMDE7XG4gICAgd2lkdGggICA6IGF1dG87XG4gICAgaGVpZ2h0ICA6IGF1dG87XG4gICAgdG9wICAgICA6IDQwcHg7XG4gICAgcmlnaHQgICA6IDQwcHg7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDQwcHg7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgcGFkZGluZyA6XG4gICAgICAgICR7KEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgKyBHUklELlVOSVQpfVxuICAgICAgICAwXG4gICAgICAgICR7cHJvcHMgPT4gcHJvcHMuaGFzRm9vdGVyID8gU0laRVMuQUNUSU9OX0JBUl9IRUlHSFQgOiAwfVxuICAgIDtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICcxMTAlJ30pO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHotaW5kZXgsIG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uIDpcbiAgICAgICAgZGlzcGxheSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuNDUgOiAwLjN9cyBsaW5lYXIsXG4gICAgICAgIG9wYWNpdHkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjM1IDogMC40NX1zIGxpbmVhcixcbiAgICAgICAgdHJhbnNmb3JtICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4zNSA6IDAuNDV9cyBsaW5lYXJcbiAgICA7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCAxMHB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcbiAgICBib3JkZXItcmFkaXVzICAgOiAke1NJWkVTLkxHLlJBRElVU30gJHtTSVpFUy5MRy5SQURJVVN9IDAgMDtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAke3NlbGVjdG9yfSB7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5cbiAgICAke01FRElBX1FVRVJJRVMuTFQuU019IHtcbiAgICAgICAgcGFkZGluZzogJHsoR1JJRC5DT05UQUlORVJfUEFERElOR19YUyArIEdSSUQuVU5JVCl9IDA7XG4gICAgICAgIHJpZ2h0ICA6IDA7XG4gICAgICAgIGxlZnQgICA6IDA7XG5cbiAgICAgICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;