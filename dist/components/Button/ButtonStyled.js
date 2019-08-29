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
  return props.aphblock ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.aphblock ? '100%' : 'auto';
}, ";min-width:", function (props) {
  return props.aphcircle ? props.aphsm || props.aphsmall ? '30px' : '40px' : '140px';
}, ";padding:", function (props) {
  return props.aphsm || props.aphsmall ? "5px " + (props.aphcircle ? 0 : '15px') : "10px  " + (props.aphcircle ? 0 : '20px');
}, ";margin:", function (props) {
  return props.aphmargin;
}, ";text-align:center;text-transform:uppercase;font-size:16px;line-height:20px;border-radius:", function (props) {
  return (props.aphradius || 25) + ((props.aphradius + '').includes('px') ? '' : 'px');
}, ";border:0;outline:0;-webkit-tap-highlight-color:", function (props) {
  return _utils.colors.getFromTheme(props, props.aphcolor || 'secondary', 'crystal', 0.5);
}, ";color:", function (props) {
  return props.aphlink ? _utils.colors.getFromTheme(props, props.aphcolor || 'secondary') : _utils.colors.getFromTheme(props, ['white', 'smoke'].includes(props.aphcolor) ? 'secondary' : 'white');
}, ";background-color:", function (props) {
  return props.aphlink ? 'transparent' : _utils.colors.getFromTheme(props, props.aphcolor || 'secondary');
}, ";transition-timing-function:ease;transition-duration:0.2s;transition-property:background-color,color,width;&:hover{background-color:", function (props) {
  return props.aphlink ? _utils.colors.getFromTheme(props, 'smoke') : _utils.colors.getFromTheme(props, props.aphcolor || 'secondary', 'light');
}, ";}&:active,&:focus{background-color:", function (props) {
  return props.aphlink ? _utils.colors.getFromTheme(props, 'smoke') : _utils.colors.getFromTheme(props, props.aphcolor || 'secondary', 'dark');
}, ";}&:disabled{cursor:not-allowed;color:", function (props) {
  return _utils.colors.getFromTheme(props, 'mercury', props.aphtranslucid ? 'crystal' : 'light');
}, ";background-color:", function (props) {
  return props.aphlink ? _utils.colors.getFromTheme(props, 'smoke') : props.aphtranslucid ? _utils.colors.getFromTheme(props, 'smoke', '', 0.5) : _utils.colors.getFromTheme(props, 'mercury', 'crystal');
}, ";}.aph-btn{&__content{opacity:1;}&__loader{position:absolute;top:calc(50% - 15px);left:50%;transform:translate(-50%);opacity:0;}}&.aph-btn--loading{&:hover,&:disabled{background-color:", function (props) {
  return props.aphlink ? 'transparent' : _utils.colors.getFromTheme(props, props.aphcolor || 'secondary');
}, ";}.aph-btn{&__content{opacity:0;}&__loader{opacity:1;.aph-icon-wrapper{", _utils.animations.spin('4s'), ";}}}}", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3FDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIExpYnJhcnkgZGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IGFuaW1hdGlvbnMsIGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG4gICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhibG9jayA/ICcnIDogJ2lubGluZS0nfWJsb2NrO1xuXG4gICAgd2lkdGggICAgOiAke3Byb3BzID0+IHByb3BzLmFwaGJsb2NrID8gJzEwMCUnIDogJ2F1dG8nfTtcbiAgICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMuYXBoY2lyY2xlID8gKChwcm9wcy5hcGhzbSB8fCBwcm9wcy5hcGhzbWFsbCkgPyAnMzBweCcgOiAnNDBweCcpIDogJzE0MHB4J307XG4gICAgcGFkZGluZyAgOiAke3Byb3BzID0+ICgocHJvcHMuYXBoc20gfHwgcHJvcHMuYXBoc21hbGwpID8gYDVweCAke3Byb3BzLmFwaGNpcmNsZSA/IDAgOiAnMTVweCd9YCA6IGAxMHB4ICAke3Byb3BzLmFwaGNpcmNsZSA/IDAgOiAnMjBweCd9YCl9O1xuICAgIG1hcmdpbiAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhtYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgZm9udC1zaXplICA6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+ICgocHJvcHMuYXBocmFkaXVzIHx8IDI1KSArICgocHJvcHMuYXBocmFkaXVzICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JyksICdjcnlzdGFsJywgMC41KX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpIDpcbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChbJ3doaXRlJywgJ3Ntb2tlJ10uaW5jbHVkZXMocHJvcHMuYXBoY29sb3IpKSA/ICdzZWNvbmRhcnknIDogJ3doaXRlJylcbiAgICB9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuYXBobGluayA/XG4gICAgICAgICAgICAndHJhbnNwYXJlbnQnIDpcbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgfTtcblxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgd2lkdGg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHMuYXBobGluayA/XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3Ntb2tlJykgOlxuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JyksICdsaWdodCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnZGFyaycpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcyxcbiAgICAgICAgICAgICdtZXJjdXJ5JyxcbiAgICAgICAgICAgIChwcm9wcy5hcGh0cmFuc2x1Y2lkID8gJ2NyeXN0YWwnIDogJ2xpZ2h0JylcbiAgICAgICAgKX07XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHMuYXBobGluayA/XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3Ntb2tlJykgOlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hcGh0cmFuc2x1Y2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScsICcnLCAwLjUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAuYXBoLWJ0biB7XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xvYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wICAgICAgOiBjYWxjKDUwJSAtIDE1cHgpO1xuICAgICAgICAgICAgbGVmdCAgICAgOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgIG9wYWNpdHkgIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYXBoLWJ0bi0tbG9hZGluZyB7XG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNwYXJlbnQnIDpcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAuYXBoLWJ0biB7XG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19sb2FkZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgICAgICAuYXBoLWljb24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICR7YW5pbWF0aW9ucy5zcGluKCc0cycpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmFwaHN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEJ1dHRvblN0eWxlZDtcbiJdfQ== */"));
/* Exporting */

var _default = AphButtonStyled;
exports.default = _default;