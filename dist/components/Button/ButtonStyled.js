"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* UI Library definitions */

/* Component Itself */
var AphButtonStyled = (0, _styledBase.default)("button", {
  target: "ebr9uys0"
})("box-sizing:border-box;position:relative;overflow:hidden;cursor:pointer;display:", function (props) {
  return props.block ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.block ? '100%' : 'auto';
}, ";min-width:140px;padding:", function (props) {
  return props.sm || props.small ? '5px 15px' : '10px 20px';
}, ";margin:", function (props) {
  return props.margin;
}, ";text-align:center;text-transform:uppercase;font-size:16px;line-height:20px;border-radius:", function (props) {
  return (props.radius || 0) + ((props.radius + '').includes('px') ? '' : 'px');
}, ";border:0;outline:0;color:", function (props) {
  return _utils.colors.get(['white', 'smoke'].includes(props.color) ? 'secondary' : 'white');
}, ";background-color:", function (props) {
  return _utils.colors.get(props.color || 'secondary');
}, ";transition-timing-function:ease;transition-duration:0.25s;transition-property:background-color,color,width;&:hover{background-color:", function (props) {
  return _utils.colors.get(props.color || 'secondary', 'light');
}, ";}&:active,&:focus{background-color:", function (props) {
  return _utils.colors.get(props.color || 'secondary', 'dark');
}, ";}&:disabled{cursor:not-allowed;color:", _utils.colors.get('mercury', 'light'), ";background-color:", _utils.colors.get('mercury', 'crystal'), ";}.aph-btn{&__content{transform:translate(0);}&__loader{position:absolute;left:50%;transform:translate(-50%,100px);}}&.aph-btn--loading{.aph-btn{&__content{position:absolute;left:50%;transform:translate(-50%,-100px);}&__loader{position:relative;left:0;transform:translate(0);}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3FDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIExpYnJhcnkgZGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG4gICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiBwcm9wcy5ibG9jayA/ICcnIDogJ2lubGluZS0nfWJsb2NrO1xuXG4gICAgd2lkdGggICAgOiAke3Byb3BzID0+IHByb3BzLmJsb2NrID8gJzEwMCUnIDogJ2F1dG8nfTtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmcgIDogJHtwcm9wcyA9PiAoKHByb3BzLnNtIHx8IHByb3BzLnNtYWxsKSA/ICc1cHggMTVweCcgOiAnMTBweCAyMHB4Jyl9O1xuICAgIG1hcmdpbiAgIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgZm9udC1zaXplICA6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+ICgocHJvcHMucmFkaXVzIHx8IDApICsgKChwcm9wcy5yYWRpdXMgKyAnJykuaW5jbHVkZXMoJ3B4JykgPyAnJyA6ICdweCcpKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0KChbJ3doaXRlJywgJ3Ntb2tlJ10uaW5jbHVkZXMocHJvcHMuY29sb3IpKSA/ICdzZWNvbmRhcnknIDogJ3doaXRlJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgY29sb3JzLmdldCgocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKVxuICAgIH07XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCB3aWR0aDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBjb2xvcnMuZ2V0KChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JyksICdsaWdodCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIGNvbG9ycy5nZXQoKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2RhcmsnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5nZXQoJ21lcmN1cnknLCAnbGlnaHQnKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnbWVyY3VyeScsICdjcnlzdGFsJyl9O1xuICAgIH1cblxuICAgIC5hcGgtYnRuIHtcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xvYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdCAgICAgOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDBweCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFwaC1idG4tLWxvYWRpbmcge1xuICAgICAgICAuYXBoLWJ0biB7XG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQgICAgIDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2xvYWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0ICAgICA6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEJ1dHRvblN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = AphButtonStyled;
exports.default = _default;