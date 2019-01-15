"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
    borderRadius: '10px',
    background: _constants.COLORS.LIGHT_GREY
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIHdpZHRoIDogKCgocHJvcHMucGVyY2VudCAmJiBwcm9wcy5wZXJjZW50ID4gMTAwKSA/IDEwMCA6IHByb3BzLnBlcmNlbnQgfHwgMCkgKyAnJScpLFxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7cHJvcHMuZ3JhZGllbnRTdGFydH0gMCUsICR7cHJvcHMuZ3JhZGllbnRFbmR9IDEwMCUpYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzIwMCUgMTAwJScsXG5cbiAgICBhbmltYXRpb246IGAke2JnQW5pbWF0ZWR9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgIHdpbGxDaGFuZ2U6ICd3aWR0aCcsXG4gICAgdHJhbnNpdGlvbjogJ3dpZHRoIC4xNXMgZWFzZS1pbicsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcGVyY2VudCxcbiAgICAgICAgZ3JhZGllbnQsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuXG4gICAgICAgIHdyYXBwZXJTdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaFByb2dyZXNzQmFyV3JhcHBlclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgcGVyY2VudD17cGVyY2VudH1cbiAgICAgICAgICAgICAgICBncmFkaWVudFN0YXJ0PXtncmFkaWVudCAmJiBncmFkaWVudC5zdGFydH1cbiAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIGdyYWRpZW50ICAgICA6IHtcbiAgICAgICAgc3RhcnQ6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgICAgICBlbmQgIDogQ09MT1JTLkJMVUUsXG4gICAgfSxcbiAgICBzdHlsZXMgICAgICAgOiB7fSxcblxuICAgIHdpZHRoICAgICAgICA6ICcxMDAlJyxcbiAgICBoZWlnaHQgICAgICAgOiAnMTBweCcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgcGVyY2VudCAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB3aWR0aCAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlaWdodCAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");
/* Filler Styles */

var AphProgressBar = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1pp9vj71"
})(function (props) {
  return _objectSpread({}, defaultStyles, {
    width: (props.percent && props.percent > 100 ? 100 : props.percent || 0) + '%',
    height: props.height || '10px',
    background: "linear-gradient(270deg, ".concat(props.gradientStart, " 0%, ").concat(props.gradientEnd, " 100%)"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgAnimated, " .9s ease infinite"),
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIHdpZHRoIDogKCgocHJvcHMucGVyY2VudCAmJiBwcm9wcy5wZXJjZW50ID4gMTAwKSA/IDEwMCA6IHByb3BzLnBlcmNlbnQgfHwgMCkgKyAnJScpLFxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICR7cHJvcHMuZ3JhZGllbnRTdGFydH0gMCUsICR7cHJvcHMuZ3JhZGllbnRFbmR9IDEwMCUpYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzIwMCUgMTAwJScsXG5cbiAgICBhbmltYXRpb246IGAke2JnQW5pbWF0ZWR9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgIHdpbGxDaGFuZ2U6ICd3aWR0aCcsXG4gICAgdHJhbnNpdGlvbjogJ3dpZHRoIC4xNXMgZWFzZS1pbicsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcGVyY2VudCxcbiAgICAgICAgZ3JhZGllbnQsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuXG4gICAgICAgIHdyYXBwZXJTdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaFByb2dyZXNzQmFyV3JhcHBlclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgcGVyY2VudD17cGVyY2VudH1cbiAgICAgICAgICAgICAgICBncmFkaWVudFN0YXJ0PXtncmFkaWVudCAmJiBncmFkaWVudC5zdGFydH1cbiAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIGdyYWRpZW50ICAgICA6IHtcbiAgICAgICAgc3RhcnQ6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgICAgICBlbmQgIDogQ09MT1JTLkJMVUUsXG4gICAgfSxcbiAgICBzdHlsZXMgICAgICAgOiB7fSxcblxuICAgIHdpZHRoICAgICAgICA6ICcxMDAlJyxcbiAgICBoZWlnaHQgICAgICAgOiAnMTBweCcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgcGVyY2VudCAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB3aWR0aCAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlaWdodCAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");
/* Component it self */

var ProgressBar = function ProgressBar(props) {
  var percent = props.percent,
      gradient = props.gradient,
      styles = props.styles,
      width = props.width,
      height = props.height,
      wrapperStyles = props.wrapperStyles;
  return _react.default.createElement(AphProgressBarWrapper, {
    width: width,
    height: height,
    styles: wrapperStyles
  }, _react.default.createElement(AphProgressBar, {
    percent: percent,
    gradientStart: gradient && gradient.start,
    gradientEnd: gradient && gradient.end,
    height: height,
    styles: styles
  }));
};
/* Default Props */


ProgressBar.defaultProps = {
  percent: 0,
  gradient: {
    start: _constants.COLORS.LIGHT_BLUE,
    end: _constants.COLORS.BLUE
  },
  styles: {},
  width: '100%',
  height: '10px',
  wrapperStyles: {}
};
/* Props Types */

ProgressBar.propTypes = {
  percent: _propTypes.default.number,
  grandient: _propTypes.default.object,
  styles: _propTypes.default.object,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  wrapperStyles: _propTypes.default.object
};
/* Exporting */

var _default = ProgressBar;
exports.default = _default;