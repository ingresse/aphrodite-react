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
}, "s linear;background-color:", _utils.colors.get('white'), ";box-shadow:0 0 10px 0 ", _utils.colors.get('black', 'original', 0.25), ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector, "{&__container{min-height:100%;max-height:100%;overflow:auto;&__title{padding-top:20px;}&__header{padding-top:5px;padding-bottom:5px;}&__content{width:100%;}}&__footer{max-height:", _constants.SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__container{&__title,&__header{padding-top:0;}&__title{margin:15px 0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMfTtcbiAgICB3aWR0aCAgIDogYXV0bztcbiAgICBoZWlnaHQgIDogYXV0bztcbiAgICB0b3AgICAgIDogNDBweDtcbiAgICByaWdodCAgIDogNDBweDtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogNDBweDtcbiAgICBtYXJnaW4gIDogMDtcbiAgICBwYWRkaW5nIDogMCAwICR7cHJvcHMgPT4gcHJvcHMuaGFzRm9vdGVyID8gU0laRVMuQUNUSU9OX0JBUl9IRUlHSFQgOiAwfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICc1MCUnfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4yIDogMC4xfXMgbGluZWFyLFxuICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4xIDogMC4yfXMgbGluZWFyLFxuICAgICAgICB0cmFuc2Zvcm0gJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjIgOiAwLjF9cyBsaW5lYXJcbiAgICA7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCAxMHB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcbiAgICBib3JkZXItcmFkaXVzICAgOiAke1NJWkVTLkxHLlJBRElVU30gJHtTSVpFUy5MRy5SQURJVVN9IDAgMDtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICAke3NlbGVjdG9yfSB7XG4gICAgICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93ICA6IGF1dG87XG5cbiAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcCAgIDogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fZm9vdGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7U0laRVMuQUNUSU9OX0JBUl9IRUlHSFR9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuXG4gICAgJHtNRURJQV9RVUVSSUVTLkxULlNNfSB7XG4gICAgICAgIHBhZGRpbmc6ICR7KEdSSUQuQ09OVEFJTkVSX1BBRERJTkdfWFMgKyBHUklELlVOSVQpfSAwO1xuICAgICAgICByaWdodCAgOiAwO1xuICAgICAgICBsZWZ0ICAgOiAwO1xuXG4gICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgJl9fdGl0bGUsXG4gICAgICAgICAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IE1vZGFsU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;