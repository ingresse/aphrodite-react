"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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
    background: _constants.COLORS.LIGHT_GREY
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAoKChwcm9wcy5yYWRpdXMgfHwgcHJvcHMucmFkaXVzID09PSAwKSAmJiB0eXBlb2YgcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgPT09ICdudW1iZXInKSA/IHBhcnNlSW50KHByb3BzLnJhZGl1cywgMTApICsgKHByb3BzLnJhZGl1cy50b1N0cmluZygpLmluY2x1ZGVzKCclJykgPyAnJScgOiAncHgnKSA6ICcxMHB4JyksXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuICAgIHdpZHRoIDogKHByb3BzLnNpemUgfHwgKChwcm9wcy5wZXJjZW50dWFsICYmIHByb3BzLnBlcmNlbnR1YWwgPiAxMDApID8gMTAwIDogcHJvcHMucGVyY2VudHVhbCB8fCAwKSArICclJyksXG5cbiAgICBiYWNrZ3JvdW5kOiAocHJvcHMuY29sb3IgPyBDT0xPUlMuR0VUKHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IENPTE9SUy5CTFVFIDogYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7cHJvcHMuZ3JhZGllbnRTdGFydCB8fCBDT0xPUlMuQkxVRX0gMCUsICR7cHJvcHMuZ3JhZGllbnRFbmQgfHwgQ09MT1JTLkxJR0hUX0JMVUV9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGVyY2VudHVhbDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gNTAwO1xuICAgICAgICB0aGlzLmludGVydmFsICA9IG51bGw7XG4gICAgfVxuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIHBlcmNlbnQsXG4gICAgICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICAgICAgZ3JhZGllbnQsXG4gICAgICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgcmFkaXVzLFxuXG4gICAgICAgICAgICBjb2xvcixcblxuICAgICAgICAgICAgd3JhcHBlclN0eWxlcyxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt3cmFwcGVyU3R5bGVzfT5cbiAgICAgICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudHVhbD17KHBlcmNlbnQgfHwgcGVyY2VudHVhbCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsoY29sb3IgfHwgJycpfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50U3RhcnQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LnN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBzaXplICAgICAgICAgOiAnJyxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBDT0xPUlMuQkxVRSxcbiAgICAgICAgZW5kICA6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHNpemUgICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudHVhbCAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");
/* Filler Styles */

var AphProgressBar = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1pp9vj71"
})(function (props) {
  return _objectSpread({}, defaultStyles, {
    height: props.height || '10px',
    width: props.size || (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + '%',
    background: props.color ? _constants.COLORS.GET(props.color) : !props.animated ? _constants.COLORS.BLUE : "linear-gradient(270deg, " + (props.gradientStart || _constants.COLORS.BLUE) + " 0%, " + (props.gradientEnd || _constants.COLORS.LIGHT_BLUE) + " 100%)",
    backgroundSize: '200% 100%',
    animation: bgAnimated + " .9s ease infinite",
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAoKChwcm9wcy5yYWRpdXMgfHwgcHJvcHMucmFkaXVzID09PSAwKSAmJiB0eXBlb2YgcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgPT09ICdudW1iZXInKSA/IHBhcnNlSW50KHByb3BzLnJhZGl1cywgMTApICsgKHByb3BzLnJhZGl1cy50b1N0cmluZygpLmluY2x1ZGVzKCclJykgPyAnJScgOiAncHgnKSA6ICcxMHB4JyksXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuICAgIHdpZHRoIDogKHByb3BzLnNpemUgfHwgKChwcm9wcy5wZXJjZW50dWFsICYmIHByb3BzLnBlcmNlbnR1YWwgPiAxMDApID8gMTAwIDogcHJvcHMucGVyY2VudHVhbCB8fCAwKSArICclJyksXG5cbiAgICBiYWNrZ3JvdW5kOiAocHJvcHMuY29sb3IgPyBDT0xPUlMuR0VUKHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IENPTE9SUy5CTFVFIDogYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7cHJvcHMuZ3JhZGllbnRTdGFydCB8fCBDT0xPUlMuQkxVRX0gMCUsICR7cHJvcHMuZ3JhZGllbnRFbmQgfHwgQ09MT1JTLkxJR0hUX0JMVUV9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGVyY2VudHVhbDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gNTAwO1xuICAgICAgICB0aGlzLmludGVydmFsICA9IG51bGw7XG4gICAgfVxuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIHBlcmNlbnQsXG4gICAgICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICAgICAgZ3JhZGllbnQsXG4gICAgICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgcmFkaXVzLFxuXG4gICAgICAgICAgICBjb2xvcixcblxuICAgICAgICAgICAgd3JhcHBlclN0eWxlcyxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt3cmFwcGVyU3R5bGVzfT5cbiAgICAgICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudHVhbD17KHBlcmNlbnQgfHwgcGVyY2VudHVhbCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsoY29sb3IgfHwgJycpfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50U3RhcnQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LnN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBzaXplICAgICAgICAgOiAnJyxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBDT0xPUlMuQkxVRSxcbiAgICAgICAgZW5kICA6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHNpemUgICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudHVhbCAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");
/* Component it self */

var ProgressBar =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ProgressBar, _Component);

  /**
   * Constructor
   *
   * @param {object} props
   */
  function ProgressBar(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.props = props;
    _this.state = {
      percentual: undefined
    };
    _this.increment = 500;
    _this.interval = null;
    return _this;
  }
  /* Render */


  var _proto = ProgressBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        animated = _this$props.animated,
        size = _this$props.size,
        percent = _this$props.percent,
        percentual = _this$props.percentual,
        gradient = _this$props.gradient,
        styles = _this$props.styles,
        width = _this$props.width,
        height = _this$props.height,
        radius = _this$props.radius,
        color = _this$props.color,
        wrapperStyles = _this$props.wrapperStyles;
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
  };

  return ProgressBar;
}(_react.Component);

;
/* Default Props */

ProgressBar.defaultProps = {
  animated: false,
  percent: 0,
  percentual: 0,
  size: '',
  gradient: {
    start: _constants.COLORS.BLUE,
    end: _constants.COLORS.LIGHT_BLUE
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