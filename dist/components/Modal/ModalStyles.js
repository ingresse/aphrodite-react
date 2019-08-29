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
})("box-sizing:border-box;overflow:hidden;position:fixed;display:none;opacity:0;z-index:", _constants.ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function (props) {
  return props.hasFooter ? _constants.SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '50%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.1 : 0.2;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'inverse');
}, ";box-shadow:0 0 10px 0 ", function (props) {
  return _utils.colors.getFromTheme(props, 'shadow');
}, ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector, "{&__container{min-height:100%;max-height:100%;overflow:auto;&__title{padding-top:20px;}&__header{padding-top:5px;padding-bottom:5px;}&__content{width:100%;}}&__footer{max-height:", _constants.SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__container{&__title,&__header{padding-top:0;}&__title{margin:15px 0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMfTtcbiAgICB3aWR0aCAgIDogYXV0bztcbiAgICBoZWlnaHQgIDogYXV0bztcbiAgICB0b3AgICAgIDogNDBweDtcbiAgICByaWdodCAgIDogNDBweDtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogNDBweDtcbiAgICBtYXJnaW4gIDogMDtcbiAgICBwYWRkaW5nIDogMCAwICR7cHJvcHMgPT4gcHJvcHMuaGFzRm9vdGVyID8gU0laRVMuQUNUSU9OX0JBUl9IRUlHSFQgOiAwfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICc1MCUnfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4yIDogMC4xfXMgbGluZWFyLFxuICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4xIDogMC4yfXMgbGluZWFyLFxuICAgICAgICB0cmFuc2Zvcm0gJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjIgOiAwLjF9cyBsaW5lYXJcbiAgICA7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDEwcHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtTSVpFUy5MRy5SQURJVVN9ICR7U0laRVMuTEcuUkFESVVTfSAwIDA7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdyAgOiBhdXRvO1xuXG4gICAgICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3AgICA6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Zvb3RlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAke1NJWkVTLkFDVElPTl9CQVJfSEVJR0hUfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcblxuICAgICR7TUVESUFfUVVFUklFUy5MVC5TTX0ge1xuICAgICAgICBwYWRkaW5nOiAkeyhHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKX0gMDtcbiAgICAgICAgcmlnaHQgIDogMDtcbiAgICAgICAgbGVmdCAgIDogMDtcblxuICAgICAgICAke3NlbGVjdG9yfSB7XG4gICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICZfX3RpdGxlLFxuICAgICAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;