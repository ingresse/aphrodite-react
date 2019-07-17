"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
})("box-sizing:border-box;position:relative;display:block;width:100%;z-index:2;-webkit-box-orient:vertical;-webkit-box-direction:normal;.aph{&-dropdown{&__toggle,&__content{box-sizing:border-box;}&__toggle{display:", function (props) {
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
}, ";will-change:z-index,opacity;transition:display 0.1s linear,opacity 0.25s linear;color:", _utils.colors.get('black'), ";background:", _utils.colors.get('white'), ";box-shadow:0 0 5px ", _utils.colors.get('black', '', 0.25), ";padding:", function (props) {
  return props.thin ? '0' : '15px 10px';
}, ";border-radius:", _constants.RADIUS.XS, "px;text-align:", function (props) {
  return props.right ? 'left' : null;
}, ";align-self:center;overflow:hidden;&.visible{display:block;}&.active{opacity:1;}}}&-list{&__item{padding-right:20px;padding-left:20px;}}}&.up{.aph-dropdown{&__content{top:auto;bottom:100%;}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdpQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93blN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyBIZWxwZXJzICovXG5jb25zdCBESVNUQU5DRSA9ICdjYWxjKDEwMCUgKyAxMHB4KSc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IERyb3Bkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICB3aWR0aCAgIDogMTAwJTtcbiAgICB6LWluZGV4IDogMjtcblxuICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG5cbiAgICAuYXBoIHtcbiAgICAgICAgJi1kcm9wZG93biB7XG4gICAgICAgICAgICAmX190b2dnbGUsXG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkgICA6ICR7cHJvcHMgPT4gKHByb3BzLnRvZ2dsZUJsb2NrID8gJycgOiAnaW5saW5lLScpfWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoICAgICA6ICR7cHJvcHMgPT4gKHByb3BzLnRvZ2dsZUJsb2NrID8gJzEwMCUnIDogbnVsbCl9O1xuICAgICAgICAgICAgICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyICAgIDogMDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lICAgOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yICAgICA6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkgIDogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcCAgICAgIDogJHtwcm9wcyA9PiAocHJvcHMudXAgPyBudWxsIDogRElTVEFOQ0UpfTtcbiAgICAgICAgICAgICAgICBib3R0b20gICA6ICR7cHJvcHMgPT4gKHByb3BzLnVwID8gRElTVEFOQ0UgOiBudWxsKX07XG4gICAgICAgICAgICAgICAgbGVmdCAgICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnNTAlJyA6IHByb3BzLnJpZ2h0ID8gbnVsbCA6ICcwJyl9O1xuICAgICAgICAgICAgICAgIHJpZ2h0ICAgIDogJHtwcm9wcyA9PiAoKHByb3BzLnJpZ2h0ICYmICFwcm9wcy5jZW50ZXIpID8gJzAnIDogbnVsbCl9O1xuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAndHJhbnNsYXRlWCgtNTAlKScgOiBudWxsKX07XG5cbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoICA6ICR7cHJvcHMgPT4gKHByb3BzLmNvbnRlbnRXaWR0aCB8fCBudWxsKX07XG5cbiAgICAgICAgICAgICAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSAwLjFzIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAwLjI1cyBsaW5lYXJcbiAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICAgICBjb2xvciAgICAgOiAke2NvbG9ycy5nZXQoJ2JsYWNrJyl9O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdldCgnd2hpdGUnKX07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJycsIDAuMjUpfTtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gKHByb3BzLnRoaW4gPyAnMCcgOiAnMTVweCAxMHB4Jyl9O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlhTfXB4O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHMucmlnaHQpID8gJ2xlZnQnIDogbnVsbH07XG5cbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgIDogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtbGlzdCB7XG4gICAgICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnVwIHtcbiAgICAgICAgLmFwaC1kcm9wZG93biB7XG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICB0b3AgICA6IGF1dG87XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = DropdownStyled;
exports.default = _default;