"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Framework Definitions */

/* Component Styles */
var AphFormControlButtonStyled = (0, _styledBase.default)("button", {
  target: "ect8n7f0"
})("box-sizing:border-box;position:absolute;display:block;padding:0;margin:0;width:30px;height:30px;top:10px;z-index:10;font-size:30px;line-height:30px;border:0;outline:0;background:transparent;text-align:center;&:active,&:focus,&:hover{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'base');
}, ";border:0;outline:0;background:transparent;}", function (props) {
  return props.left ? 'left' : 'right';
}, ":5px;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xCdXR0b25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWdEIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybUNvbnRyb2xCdXR0b25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xCdXR0b25TdHlsZWQgPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb24gIDogYWJzb2x1dGU7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcGFkZGluZyAgIDogMDtcbiAgICBtYXJnaW4gICAgOiAwO1xuICAgIHdpZHRoICAgICA6IDMwcHg7XG4gICAgaGVpZ2h0ICAgIDogMzBweDtcbiAgICB0b3AgICAgICAgOiAxMHB4O1xuICAgIHotaW5kZXggICA6IDEwO1xuXG4gICAgZm9udC1zaXplICA6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG5cbiAgICBib3JkZXIgICAgOiAwO1xuICAgIG91dGxpbmUgICA6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcblxuICAgICAgICBib3JkZXIgICAgOiAwO1xuICAgICAgICBvdXRsaW5lICAgOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5sZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0Jyl9OiA1cHg7XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Db250cm9sQnV0dG9uU3R5bGVkO1xuIl19 */"));
/* Exporting */

var _default = AphFormControlButtonStyled;
exports.default = _default;