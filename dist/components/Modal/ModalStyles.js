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
})("box-sizing:border-box;position:fixed;display:none;opacity:0;z-index:", _constants.ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function (props) {
  return props.hasFooter ? _constants.SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '110%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.45 : 0.3;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear;background-color:", _utils.colors.get('white'), ";box-shadow:0 0 10px 0 ", _utils.colors.get('black', 'original', 0.25), ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector, "{&__container{max-height:100%;overflow:auto;&__title,&__header{padding-top:10px;}}&__footer{max-height:", _constants.SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__container{&__title,&__header{padding-top:0;}&__title{margin:15px 0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXkgOiBub25lO1xuICAgIG9wYWNpdHkgOiAwO1xuICAgIHotaW5kZXggOiAke1pJTkRFWC5NT0RBTH07XG4gICAgd2lkdGggICA6IGF1dG87XG4gICAgaGVpZ2h0ICA6IGF1dG87XG4gICAgdG9wICAgICA6IDQwcHg7XG4gICAgcmlnaHQgICA6IDQwcHg7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDQwcHg7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgcGFkZGluZyA6IDAgMCAke3Byb3BzID0+IHByb3BzLmhhc0Zvb3RlciA/IFNJWkVTLkFDVElPTl9CQVJfSEVJR0hUIDogMH07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAnMCcgOiAnMTEwJSd9KTtcblxuICAgIHdpbGwtY2hhbmdlOiB6LWluZGV4LCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbiA6XG4gICAgICAgIGRpc3BsYXkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjQ1IDogMC4zfXMgbGluZWFyLFxuICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4zNSA6IDAuNDV9cyBsaW5lYXIsXG4gICAgICAgIHRyYW5zZm9ybSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMzUgOiAwLjQ1fXMgbGluZWFyXG4gICAgO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCd3aGl0ZScpfTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgMTBweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtTSVpFUy5MRy5SQURJVVN9ICR7U0laRVMuTEcuUkFESVVTfSAwIDA7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93ICA6IGF1dG87XG5cbiAgICAgICAgICAgICZfX3RpdGxlLFxuICAgICAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Zvb3RlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAke1NJWkVTLkFDVElPTl9CQVJfSEVJR0hUfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcblxuICAgICR7TUVESUFfUVVFUklFUy5MVC5TTX0ge1xuICAgICAgICBwYWRkaW5nOiAkeyhHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKX0gMDtcbiAgICAgICAgcmlnaHQgIDogMDtcbiAgICAgICAgbGVmdCAgIDogMDtcblxuICAgICAgICAke3NlbGVjdG9yfSB7XG4gICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICZfX3RpdGxlLFxuICAgICAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;