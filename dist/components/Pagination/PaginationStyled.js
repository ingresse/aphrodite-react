"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* UI Library Helpers */

/* Pagination Styles */
var AphPaginationStyled = (0, _styledBase.default)("section", {
  target: "e12zcqyq0"
})("box-sizing:border-box;position:relative;display:block;margin:40px auto;padding:10px 15px;max-width:460px;min-height:50px;list-style-type:none;text-align:center;border-radius:5px;background-color:", _utils.colors.get('smoke'), ";*{box-sizing:border-box;}.rc-pagination{&-prev,&-next,&-jump-next,&-jump-prev,&-item{display:inline-block;vertical-align:middle;text-align:center;min-width:30px;font-weight:bold;font-size:16px;line-height:20px;border-radius:5px;transition:background-color 0.25s linear;outline:0;border:0;&:not(.rc-pagination-item-active){cursor:pointer;}}&-prev,&-next{position:absolute;padding:2.5px;color:", _utils.colors.get('inverse'), ";background-color:", _utils.colors.get('secondary'), ";}&-prev{left:15px;}&-next{right:15px;}&-disabled{display:none;}&-item,&-jump-prev,&-jump-next{padding:5px;margin:0 5px;color:", _utils.colors.get('secondary'), ";background-color:transparent;&-active{color:", _utils.colors.get('black'), ";}&:active,&:hover{outline:0;border:0;&:not(.rc-pagination-item-active){background-color:", _utils.colors.get('mercury', 'crystal', 0.5), ";}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvblN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMEMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIFBhZ2luYXRpb24gU3R5bGVzICovXG5jb25zdCBBcGhQYWdpbmF0aW9uU3R5bGVkID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBtYXJnaW4gICAgOiA0MHB4IGF1dG87XG4gICAgcGFkZGluZyAgIDogMTBweCAxNXB4O1xuICAgIG1heC13aWR0aCA6IDQ2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG5cbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCdzbW9rZScpfTtcblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIC5yYy1wYWdpbmF0aW9uIHtcbiAgICAgICAgJi1wcmV2LFxuICAgICAgICAmLW5leHQsXG4gICAgICAgICYtanVtcC1uZXh0LFxuICAgICAgICAmLWp1bXAtcHJldixcbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcblxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemUgIDogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xuXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyIDogMDtcblxuICAgICAgICAgICAgJjpub3QoLnJjLXBhZ2luYXRpb24taXRlbS1hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLXByZXYsXG4gICAgICAgICYtbmV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nIDogMi41cHg7XG5cbiAgICAgICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7Y29sb3JzLmdldCgnaW52ZXJzZScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmV2IHtcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW5leHQge1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmLWl0ZW0sXG4gICAgICAgICYtanVtcC1wcmV2LFxuICAgICAgICAmLWp1bXAtbmV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4gOiAwIDVweDtcblxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtjb2xvcnMuZ2V0KCdzZWNvbmRhcnknKX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgJi1hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5nZXQoJ2JsYWNrJyl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyIDogMDtcblxuICAgICAgICAgICAgICAgICY6bm90KC5yYy1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScsICdjcnlzdGFsJywgMC41KX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhQYWdpbmF0aW9uU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = AphPaginationStyled;
exports.default = _default;