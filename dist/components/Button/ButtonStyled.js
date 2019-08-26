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
}, ";min-width:140px;padding:", function (props) {
  return props.aphsm || props.aphsmall ? '5px 15px' : '10px 20px';
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
}, ";transition-timing-function:ease;transition-duration:0.25s;transition-property:background-color,color,width;&:hover{background-color:", function (props) {
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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3FDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIExpYnJhcnkgZGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IGFuaW1hdGlvbnMsIGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG4gICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhibG9jayA/ICcnIDogJ2lubGluZS0nfWJsb2NrO1xuXG4gICAgd2lkdGggICAgOiAke3Byb3BzID0+IHByb3BzLmFwaGJsb2NrID8gJzEwMCUnIDogJ2F1dG8nfTtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmcgIDogJHtwcm9wcyA9PiAoKHByb3BzLmFwaHNtIHx8IHByb3BzLmFwaHNtYWxsKSA/ICc1cHggMTVweCcgOiAnMTBweCAyMHB4Jyl9O1xuICAgIG1hcmdpbiAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhtYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgZm9udC1zaXplICA6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+ICgocHJvcHMuYXBocmFkaXVzIHx8IDI1KSArICgocHJvcHMuYXBocmFkaXVzICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JyksICdjcnlzdGFsJywgMC41KX07XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpIDpcbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChbJ3doaXRlJywgJ3Ntb2tlJ10uaW5jbHVkZXMocHJvcHMuYXBoY29sb3IpKSA/ICdzZWNvbmRhcnknIDogJ3doaXRlJylcbiAgICB9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuYXBobGluayA/XG4gICAgICAgICAgICAndHJhbnNwYXJlbnQnIDpcbiAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgfTtcblxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIHdpZHRoO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnbGlnaHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnKSA6XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2RhcmsnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsXG4gICAgICAgICAgICAnbWVyY3VyeScsXG4gICAgICAgICAgICAocHJvcHMuYXBodHJhbnNsdWNpZCA/ICdjcnlzdGFsJyA6ICdsaWdodCcpXG4gICAgICAgICl9O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYXBodHJhbnNsdWNpZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnLCAnJywgMC41KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLmFwaC1idG4ge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmX19sb2FkZXIge1xuICAgICAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcCAgICAgIDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgICAgICAgICAgIGxlZnQgICAgIDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgICBvcGFjaXR5ICA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFwaC1idG4tLWxvYWRpbmcge1xuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zcGFyZW50JyA6XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwaC1idG4ge1xuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fbG9hZGVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICAgICAgLmFwaC1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAke2FuaW1hdGlvbnMuc3BpbignNHMnKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hcGhzdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhCdXR0b25TdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = AphButtonStyled;
exports.default = _default;