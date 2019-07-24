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
})("position:fixed;display:none;opacity:0;z-index:", _constants.ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function (props) {
  return props.hasFooter ? _constants.SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '110%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.45 : 0.3;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.35 : 0.45;
}, "s linear;background-color:", _utils.colors.get('white'), ";box-shadow:0 0 10px 0 ", _utils.colors.get('black', 'original', 0.25), ";border-radius:", _constants.SIZES.LG.RADIUS, " ", _constants.SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}", selector, "{&__container{max-height:100%;overflow:auto;&__title,&__header{padding-top:10px;}}&__footer{max-height:", _constants.SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", _constants.MEDIA_QUERIES.LT.SM, "{padding:", _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT, " 0;right:0;left:0;", selector, "{&__container{&__title,&__header{padding-top:0;}&__title{margin:15px 0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5IDogbm9uZTtcbiAgICBvcGFjaXR5IDogMDtcbiAgICB6LWluZGV4IDogJHtaSU5ERVguTU9EQUx9O1xuICAgIHdpZHRoICAgOiBhdXRvO1xuICAgIGhlaWdodCAgOiBhdXRvO1xuICAgIHRvcCAgICAgOiA0MHB4O1xuICAgIHJpZ2h0ICAgOiA0MHB4O1xuICAgIGJvdHRvbSAgOiAwO1xuICAgIGxlZnQgICAgOiA0MHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIHBhZGRpbmcgOiAwIDAgJHtwcm9wcyA9PiBwcm9wcy5oYXNGb290ZXIgPyBTSVpFUy5BQ1RJT05fQkFSX0hFSUdIVCA6IDB9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gJzAnIDogJzExMCUnfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC40NSA6IDAuM31zIGxpbmVhcixcbiAgICAgICAgb3BhY2l0eSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMzUgOiAwLjQ1fXMgbGluZWFyLFxuICAgICAgICB0cmFuc2Zvcm0gJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjM1IDogMC40NX1zIGxpbmVhclxuICAgIDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnd2hpdGUnKX07XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDEwcHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuICAgIGJvcmRlci1yYWRpdXMgICA6ICR7U0laRVMuTEcuUkFESVVTfSAke1NJWkVTLkxHLlJBRElVU30gMCAwO1xuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdyAgOiBhdXRvO1xuXG4gICAgICAgICAgICAmX190aXRsZSxcbiAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19mb290ZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogJHtTSVpFUy5BQ1RJT05fQkFSX0hFSUdIVH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5cbiAgICAke01FRElBX1FVRVJJRVMuTFQuU019IHtcbiAgICAgICAgcGFkZGluZzogJHsoR1JJRC5DT05UQUlORVJfUEFERElOR19YUyArIEdSSUQuVU5JVCl9IDA7XG4gICAgICAgIHJpZ2h0ICA6IDA7XG4gICAgICAgIGxlZnQgICA6IDA7XG5cbiAgICAgICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAgICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAmX190aXRsZSxcbiAgICAgICAgICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = ModalStyled;
exports.default = _default;