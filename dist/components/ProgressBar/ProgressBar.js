"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/* Animation */
var bgAnimated = (0, _core.keyframes)(_templateObject());
/* Default Styles */

var defaultStyles = {
  boxSizing: 'border-box',
  display: 'block'
};
/* Wrapper Styles */

var AphProgressBarWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1pp9vj70"
})(function (props) {
  return _objectSpread({}, defaultStyles, {
    height: props.height || '10px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: props.width || '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: (props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number' ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px',
    background: _utils.colors.getFromTheme(props, 'disabled')
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHMpIHtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICBzaXplLFxuICAgICAgICBwZXJjZW50LFxuICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICBncmFkaWVudCxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHJhZGl1cyxcblxuICAgICAgICBjb2xvcixcblxuICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICBwZXJjZW50dWFsPXsocGVyY2VudCB8fCBwZXJjZW50dWFsKX1cbiAgICAgICAgICAgICAgICBjb2xvcj17KGNvbG9yIHx8ICcnKX1cbiAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRTdGFydD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuc3RhcnR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRFbmQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LmVuZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogZmFsc2UsXG5cbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIHBlcmNlbnR1YWwgICA6IDAsXG4gICAgc2l6ZSAgICAgICAgIDogJycsXG4gICAgZ3JhZGllbnQgICAgIDoge1xuICAgICAgICBzdGFydDogY29sb3JzLmdldCgnc2Vjb25kYXJ5JyksXG4gICAgICAgIGVuZCAgOiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknLCAnbGlnaHQnKSxcbiAgICB9LFxuICAgIHN0eWxlcyAgICAgICA6IHt9LFxuXG4gICAgd2lkdGggICAgICAgIDogJzEwMCUnLFxuICAgIGhlaWdodCAgICAgICA6IDEwLFxuXG4gICAgY29sb3IgICAgICAgIDogJycsXG4gICAgY29sb3JmdWwgICAgIDogZmFsc2UsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICBzaXplICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcblxuICAgIHdpZHRoICAgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0ICAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcblxuICAgIGNvbG9yICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */");
/* Filler Styles */

var AphProgressBar = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1pp9vj71"
})(function (props) {
  return _objectSpread({}, defaultStyles, {
    height: props.height || '10px',
    width: props.size || (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + '%',
    background: props.color ? _utils.colors.getFromTheme(props, props.color) : !props.animated ? _utils.colors.getFromTheme(props, 'secondary') : "linear-gradient(270deg, " + _utils.colors.getFromTheme(props, props.gradientStart || 'secondary') + " 0%, " + _utils.colors.getFromTheme(props, props.gradientEnd || 'secondary') + " 100%)",
    backgroundSize: '200% 100%',
    animation: bgAnimated + " .9s ease infinite",
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHMpIHtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICBzaXplLFxuICAgICAgICBwZXJjZW50LFxuICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICBncmFkaWVudCxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHJhZGl1cyxcblxuICAgICAgICBjb2xvcixcblxuICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICBwZXJjZW50dWFsPXsocGVyY2VudCB8fCBwZXJjZW50dWFsKX1cbiAgICAgICAgICAgICAgICBjb2xvcj17KGNvbG9yIHx8ICcnKX1cbiAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRTdGFydD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuc3RhcnR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRFbmQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LmVuZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogZmFsc2UsXG5cbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIHBlcmNlbnR1YWwgICA6IDAsXG4gICAgc2l6ZSAgICAgICAgIDogJycsXG4gICAgZ3JhZGllbnQgICAgIDoge1xuICAgICAgICBzdGFydDogY29sb3JzLmdldCgnc2Vjb25kYXJ5JyksXG4gICAgICAgIGVuZCAgOiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknLCAnbGlnaHQnKSxcbiAgICB9LFxuICAgIHN0eWxlcyAgICAgICA6IHt9LFxuXG4gICAgd2lkdGggICAgICAgIDogJzEwMCUnLFxuICAgIGhlaWdodCAgICAgICA6IDEwLFxuXG4gICAgY29sb3IgICAgICAgIDogJycsXG4gICAgY29sb3JmdWwgICAgIDogZmFsc2UsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICBzaXplICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcblxuICAgIHdpZHRoICAgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0ICAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcblxuICAgIGNvbG9yICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */");
/* Component it self */

function ProgressBar(props) {
  /**
   * Inherit props
   */
  var animated = props.animated,
      size = props.size,
      percent = props.percent,
      percentual = props.percentual,
      gradient = props.gradient,
      styles = props.styles,
      width = props.width,
      height = props.height,
      radius = props.radius,
      color = props.color,
      wrapperStyles = props.wrapperStyles;
  /**
   * Render
   */

  return _react.default.createElement(AphProgressBarWrapper, {
    width: width,
    height: height,
    radius: radius,
    styles: wrapperStyles
  }, _react.default.createElement(AphProgressBar, {
    size: size,
    percentual: percent || percentual,
    color: color || '',
    animated: animated,
    gradientStart: gradient && gradient.start,
    gradientEnd: gradient && gradient.end,
    height: height,
    styles: styles
  }));
}

;
/* Default Props */

ProgressBar.defaultProps = {
  animated: false,
  percent: 0,
  percentual: 0,
  size: '',
  gradient: {
    start: _utils.colors.get('secondary'),
    end: _utils.colors.get('secondary', 'light')
  },
  styles: {},
  width: '100%',
  height: 10,
  color: '',
  colorful: false,
  wrapperStyles: {}
};
/* Props Types */

ProgressBar.propTypes = {
  animated: _propTypes.default.bool,
  size: _propTypes.default.string,
  percentual: _propTypes.default.number,
  grandient: _propTypes.default.object,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  width: _propTypes.default.any,
  height: _propTypes.default.number,
  color: _propTypes.default.string,
  wrapperStyles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = ProgressBar;
exports.default = _default;