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
})("box-sizing:border-box;position:relative;display:block;width:auto;margin:40px auto;padding:10px 60px;max-width:460px;min-height:50px;list-style-type:none;text-align:center;user-select:none;border-radius:5px;background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'background');
}, ";transition:background-color .2s linear;*{box-sizing:border-box;user-select:none;}.rc-pagination{&-prev,&-next,&-jump-next,&-jump-prev,&-item{display:inline-block;vertical-align:middle;text-align:center;min-width:30px;font-weight:bold;font-size:16px;line-height:20px;border-radius:5px;transition:background-color 0.2s linear;outline:0;border:0;&:not(.rc-pagination-item-active){cursor:pointer;}}&-prev,&-next{position:absolute;padding:2px 2.5px 2.5px;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary');
}, ";}&-prev{left:15px;}&-next{right:15px;padding-left:1.5px;}&-disabled{background-color:", function (props) {
  return _utils.colors.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'disabled');
}, ";}&-item,&-jump-prev,&-jump-next{padding:5px;margin:0 5px;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary');
}, ";background-color:transparent;&-active{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";}&:active,&:hover{outline:0;border:0;&:not(.rc-pagination-item-active){background-color:", function (props) {
  return _utils.colors.getOpacity(0.5, _utils.colors.getFromTheme(props, 'disabled'));
}, ";}}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvblN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMEMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIFBhZ2luYXRpb24gU3R5bGVzICovXG5jb25zdCBBcGhQYWdpbmF0aW9uU3R5bGVkID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICB3aWR0aCAgICAgOiBhdXRvO1xuICAgIG1hcmdpbiAgICA6IDQwcHggYXV0bztcbiAgICBwYWRkaW5nICAgOiAxMHB4IDYwcHg7XG4gICAgbWF4LXdpZHRoIDogNDYwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcblxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICB0cmFuc2l0aW9uICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXI7XG5cbiAgICAqIHtcbiAgICAgICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5yYy1wYWdpbmF0aW9uIHtcbiAgICAgICAgJi1wcmV2LFxuICAgICAgICAmLW5leHQsXG4gICAgICAgICYtanVtcC1uZXh0LFxuICAgICAgICAmLWp1bXAtcHJldixcbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcblxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemUgIDogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XG5cbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3JkZXIgOiAwO1xuXG4gICAgICAgICAgICAmOm5vdCgucmMtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJldixcbiAgICAgICAgJi1uZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmcgOiAycHggMi41cHggMi41cHg7XG5cbiAgICAgICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgIH1cblxuICAgICAgICAmLXByZXYge1xuICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbmV4dCB7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLWRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLmlzRGFya01vZGUgPyAnaW52ZXJzZScgOiAnZGlzYWJsZWQnKSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pdGVtLFxuICAgICAgICAmLWp1bXAtcHJldixcbiAgICAgICAgJi1qdW1wLW5leHQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luIDogMCA1cHg7XG5cbiAgICAgICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAmLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnKX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBib3JkZXIgOiAwO1xuXG4gICAgICAgICAgICAgICAgJjpub3QoLnJjLXBhZ2luYXRpb24taXRlbS1hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0T3BhY2l0eSgwLjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhQYWdpbmF0aW9uU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = AphPaginationStyled;
exports.default = _default;