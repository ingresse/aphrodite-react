"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* UI Library Definitions */

/* Component Styles Helpers */
var DISTANCE = 'calc(100% + 10px)';
/* Component Styles */

var DropdownStyled = (0, _styledBase.default)("div", {
  target: "e14owjh0"
})("box-sizing:border-box;position:relative;display:block;width:100%;z-index:901;-webkit-box-orient:vertical;-webkit-box-direction:normal;.aph{&-dropdown{&__toggle,&__content{box-sizing:border-box;}&__toggle{display:", function (props) {
  return props.toggleBlock ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.toggleBlock ? '100%' : null;
}, ";cursor:pointer;border:0;outline:0;color:inherit;background:transparent;}&__content{display:none;position:absolute;top:", function (props) {
  return props.up ? null : DISTANCE;
}, ";bottom:", function (props) {
  return props.up ? DISTANCE : null;
}, ";left:", function (props) {
  return props.center ? '50%' : props.right ? null : '0';
}, ";right:", function (props) {
  return props.right && !props.center ? '0' : null;
}, ";transform:", function (props) {
  return props.center ? 'translateX(-50%)' : null;
}, ";opacity:0;width:", function (props) {
  return props.contentWidth || null;
}, ";will-change:z-index,opacity;transition:display ", function (props) {
  return props.opened ? 0.25 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.15 : 0.25;
}, "s linear;color:", _utils.colors.get('black'), ";background:", _utils.colors.get('white'), ";box-shadow:0 0 5px ", _utils.colors.get('black', '', 0.25), ";padding:", function (props) {
  return props.thin ? '0' : '15px 10px';
}, ";border-radius:", _constants.RADIUS.XS, "px;text-align:", function (props) {
  return props.right ? 'left' : null;
}, ";align-self:center;overflow:hidden;&.visible{display:block;}&.active{opacity:1;}}}&-list{&__item{padding-right:20px;padding-left:20px;}}}&.up{.aph-dropdown{&__content{top:auto;bottom:100%;}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93blN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyBIZWxwZXJzICovXG5jb25zdCBESVNUQU5DRSA9ICdjYWxjKDEwMCUgKyAxMHB4KSc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IERyb3Bkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICB3aWR0aCAgIDogMTAwJTtcbiAgICB6LWluZGV4IDogOTAxO1xuXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcblxuICAgIC5hcGgge1xuICAgICAgICAmLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSxcbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnJyA6ICdpbmxpbmUtJyl9YmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGggICAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnMTAwJScgOiBudWxsKX07XG4gICAgICAgICAgICAgICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgOiAwO1xuICAgICAgICAgICAgICAgIG91dGxpbmUgICA6IDA7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgOiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wICAgICAgOiAke3Byb3BzID0+IChwcm9wcy51cCA/IG51bGwgOiBESVNUQU5DRSl9O1xuICAgICAgICAgICAgICAgIGJvdHRvbSAgIDogJHtwcm9wcyA9PiAocHJvcHMudXAgPyBESVNUQU5DRSA6IG51bGwpfTtcbiAgICAgICAgICAgICAgICBsZWZ0ICAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICc1MCUnIDogcHJvcHMucmlnaHQgPyBudWxsIDogJzAnKX07XG4gICAgICAgICAgICAgICAgcmlnaHQgICAgOiAke3Byb3BzID0+ICgocHJvcHMucmlnaHQgJiYgIXByb3BzLmNlbnRlcikgPyAnMCcgOiBudWxsKX07XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICd0cmFuc2xhdGVYKC01MCUpJyA6IG51bGwpfTtcblxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGggIDogJHtwcm9wcyA9PiAocHJvcHMuY29udGVudFdpZHRoIHx8IG51bGwpfTtcblxuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB6LWluZGV4LCBvcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gOlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4yNSA6IDAuMX1zIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMTUgOiAwLjI1fXMgbGluZWFyXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogJHtjb2xvcnMuZ2V0KCdibGFjaycpfTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggJHtjb2xvcnMuZ2V0KCdibGFjaycsICcnLCAwLjI1KX07XG5cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAke3Byb3BzID0+IChwcm9wcy50aGluID8gJzAnIDogJzE1cHggMTBweCcpfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke1JBRElVUy5YU31weDtcblxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0KSA/ICdsZWZ0JyA6IG51bGx9O1xuXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWxpc3Qge1xuICAgICAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQgOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi51cCB7XG4gICAgICAgIC5hcGgtZHJvcGRvd24ge1xuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgdG9wICAgOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25TdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = DropdownStyled;
exports.default = _default;