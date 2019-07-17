"use strict";

exports.__esModule = true;
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
  return (props.radius || 25) + ((props.radius + '').includes('px') ? '' : 'px');
}, ";border:0;outline:0;-webkit-tap-highlight-color:", function (props) {
  return _utils.colors.get(props.color || 'secondary', 'crystal', 0.5);
}, ";color:", function (props) {
  return props.link ? _utils.colors.get(props.color || 'secondary') : _utils.colors.get(['white', 'smoke'].includes(props.color) ? 'secondary' : 'white');
}, ";background-color:", function (props) {
  return props.link ? 'transparent' : _utils.colors.get(props.color || 'secondary');
}, ";transition-timing-function:ease;transition-duration:0.25s;transition-property:background-color,color,width;&:hover{background-color:", function (props) {
  return props.link ? _utils.colors.get('smoke') : _utils.colors.get(props.color || 'secondary', 'light');
}, ";}&:active,&:focus{background-color:", function (props) {
  return props.link ? _utils.colors.get('smoke') : _utils.colors.get(props.color || 'secondary', 'dark');
}, ";}&:disabled{cursor:not-allowed;color:", _utils.colors.get('mercury', 'light'), ";background-color:", _utils.colors.get('mercury', 'crystal'), ";}.aph-btn{&__content{opacity:1;}&__loader{position:absolute;top:calc(50% - 11.5px);left:50%;transform:translate(-50%);opacity:0;}}&.aph-btn--loading{&:hover,&:disabled{background-color:", function (props) {
  return props.link ? 'transparent' : _utils.colors.get(props.color || 'secondary');
}, ";}.aph-btn{&__content{opacity:0;}&__loader{opacity:1;.aph-icon-wrapper{", _utils.animations.spin(), ";}}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3FDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIExpYnJhcnkgZGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IGFuaW1hdGlvbnMsIGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG4gICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiBwcm9wcy5ibG9jayA/ICcnIDogJ2lubGluZS0nfWJsb2NrO1xuXG4gICAgd2lkdGggICAgOiAke3Byb3BzID0+IHByb3BzLmJsb2NrID8gJzEwMCUnIDogJ2F1dG8nfTtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmcgIDogJHtwcm9wcyA9PiAoKHByb3BzLnNtIHx8IHByb3BzLnNtYWxsKSA/ICc1cHggMTVweCcgOiAnMTBweCAyMHB4Jyl9O1xuICAgIG1hcmdpbiAgIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgZm9udC1zaXplICA6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+ICgocHJvcHMucmFkaXVzIHx8IDI1KSArICgocHJvcHMucmFkaXVzICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXQoKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2NyeXN0YWwnLCAwLjUpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzLmxpbmsgP1xuICAgICAgICAgICAgY29sb3JzLmdldCgocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKSA6XG4gICAgICAgICAgICBjb2xvcnMuZ2V0KChbJ3doaXRlJywgJ3Ntb2tlJ10uaW5jbHVkZXMocHJvcHMuY29sb3IpKSA/ICdzZWNvbmRhcnknIDogJ3doaXRlJylcbiAgICB9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMubGluayA/XG4gICAgICAgICAgICAndHJhbnNwYXJlbnQnIDpcbiAgICAgICAgICAgIGNvbG9ycy5nZXQoKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSlcbiAgICB9O1xuXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgd2lkdGg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHMubGluayA/XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldCgnc21va2UnKSA6XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldCgocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnbGlnaHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wcy5saW5rID9cbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0KCdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0KChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JyksICdkYXJrJylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5JywgJ2xpZ2h0Jyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5nZXQoJ21lcmN1cnknLCAnY3J5c3RhbCcpfTtcbiAgICB9XG5cbiAgICAuYXBoLWJ0biB7XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xvYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wICAgICAgOiBjYWxjKDUwJSAtIDExLjVweCk7XG4gICAgICAgICAgICBsZWZ0ICAgICA6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgICAgICAgb3BhY2l0eSAgOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hcGgtYnRuLS1sb2FkaW5nIHtcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgcHJvcHMubGluayA/XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc3BhcmVudCcgOlxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0KChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwaC1idG4ge1xuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fbG9hZGVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICAgICAgLmFwaC1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAke2FuaW1hdGlvbnMuc3BpbigpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEJ1dHRvblN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = AphButtonStyled;
exports.default = _default;