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
})("position:fixed;display:none;opacity:0;z-index:10001;width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:", _constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT, " 0 ", function (props) {
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
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__title{margin:15px 0;}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDU1MgU2VsZWN0b3IgKi9cbmNvbnN0IHNlbGVjdG9yID0gJy5hcGgtbW9kYWwnO1xuXG4vKiBNb2RhbCBTdHlsZWQgKi9cbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkLmRpYWxvZ2BcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6IDEwMDAxO1xuICAgIHdpZHRoICAgOiBhdXRvO1xuICAgIGhlaWdodCAgOiBhdXRvO1xuICAgIHRvcCAgICAgOiA0MHB4O1xuICAgIHJpZ2h0ICAgOiA0MHB4O1xuICAgIGJvdHRvbSAgOiAwO1xuICAgIGxlZnQgICAgOiA0MHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIHBhZGRpbmcgOlxuICAgICAgICAkeyhHUklELkNPTlRBSU5FUl9QQURESU5HICsgR1JJRC5VTklUKX1cbiAgICAgICAgMFxuICAgICAgICAke3Byb3BzID0+IHByb3BzLmhhc0Zvb3RlciA/IFNJWkVTLkFDVElPTl9CQVJfSEVJR0hUIDogMH1cbiAgICA7XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAnMCcgOiAnMTEwJSd9KTtcblxuICAgIHdpbGwtY2hhbmdlOiB6LWluZGV4LCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbiA6XG4gICAgICAgIGRpc3BsYXkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjQ1IDogMC4zfXMgbGluZWFyLFxuICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4zNSA6IDAuNDV9cyBsaW5lYXIsXG4gICAgICAgIHRyYW5zZm9ybSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMzUgOiAwLjQ1fXMgbGluZWFyXG4gICAgO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCd3aGl0ZScpfTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgMTBweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtTSVpFUy5MRy5SQURJVVN9ICR7U0laRVMuTEcuUkFESVVTfSAwIDA7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAxNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuXG4gICAgJHtNRURJQV9RVUVSSUVTLkxULlNNfSB7XG4gICAgICAgIHBhZGRpbmc6ICR7KEdSSUQuQ09OVEFJTkVSX1BBRERJTkdfWFMgKyBHUklELlVOSVQpfSAwO1xuICAgICAgICByaWdodCAgOiAwO1xuICAgICAgICBsZWZ0ICAgOiAwO1xuXG4gICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;