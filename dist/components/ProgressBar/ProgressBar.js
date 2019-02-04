"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    borderRadius: (props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number' ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px',
    background: _constants.COLORS.LIGHT_GREY
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAoKChwcm9wcy5yYWRpdXMgfHwgcHJvcHMucmFkaXVzID09PSAwKSAmJiB0eXBlb2YgcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgPT09ICdudW1iZXInKSA/IHBhcnNlSW50KHByb3BzLnJhZGl1cywgMTApICsgKHByb3BzLnJhZGl1cy50b1N0cmluZygpLmluY2x1ZGVzKCclJykgPyAnJScgOiAncHgnKSA6ICcxMHB4JyksXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIHdpZHRoIDogKCgocHJvcHMucGVyY2VudHVhbCAmJiBwcm9wcy5wZXJjZW50dWFsID4gMTAwKSA/IDEwMCA6IHByb3BzLnBlcmNlbnR1YWwgfHwgMCkgKyAnJScpLFxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuXG4gICAgYmFja2dyb3VuZDogKHByb3BzLmNvbG9yID8gQ09MT1JTLkdFVChwcm9wcy5jb2xvcikgOiAhcHJvcHMuYW5pbWF0ZWQgPyBDT0xPUlMuQkxVRSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke3Byb3BzLmdyYWRpZW50U3RhcnQgfHwgQ09MT1JTLkJMVUV9IDAlLCAke3Byb3BzLmdyYWRpZW50RW5kIHx8IENPTE9SUy5MSUdIVF9CTFVFfSAxMDAlKWApLFxuICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgIGFuaW1hdGlvbjogYCR7YmdBbmltYXRlZH0gLjlzIGVhc2UgaW5maW5pdGVgLFxuXG4gICAgd2lsbENoYW5nZTogJ3dpZHRoJyxcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggLjE1cyBlYXNlLWluJyxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBlcmNlbnR1YWw6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluY3JlbWVudCA9IDUwMDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCAgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5jcmVhc2VQZXJjZW50dWFsKGluY3JlbWVudCA9IDEpIHtcbiAgICAgICAgY29uc3QgeyBwZXJjZW50dWFsIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChwZXJjZW50dWFsID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwZXJjZW50dWFsOiAocGVyY2VudHVhbCArIGluY3JlbWVudCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGhhbmRsZVByb21pc2UoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgcHJvbWlzZURvbmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2UgID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yICAgICA9IG51bGw7XG4gICAgICAgIGxldCBpbmNyZW1lbnQgPSAwO1xuICAgICAgICB0aGlzLmludGVydmFsID1cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgKz0gMTU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlUHJvZ3Jlc3MoaW5jcmVtZW50KTtcbiAgICAgICAgICAgIH0sIHRoaXMuaW5jcmVtZW50KTtcblxuICAgICAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICAgICAgcGVyY2VudCxcbiAgICAgICAgICAgIHBlcmNlbnR1YWwsXG4gICAgICAgICAgICBncmFkaWVudCxcbiAgICAgICAgICAgIHN0eWxlcyxcblxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICByYWRpdXMsXG5cbiAgICAgICAgICAgIGNvbG9yLFxuXG4gICAgICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBfY29sb3IgICAgICA9IChjb2xvciB8fCAnJyk7XG4gICAgICAgIGNvbnN0IF9wZXJjZW50dWFsID0gKHRoaXMuc3RhdGUucGVyY2VudHVhbCB8fCBwZXJjZW50IHx8IHBlcmNlbnR1YWwpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJXcmFwcGVyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHJhZGl1cz17cmFkaXVzfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17d3JhcHBlclN0eWxlc30+XG4gICAgICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnR1YWw9e19wZXJjZW50dWFsfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17X2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50U3RhcnQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LnN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBDT0xPUlMuQkxVRSxcbiAgICAgICAgZW5kICA6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19 */");
/* Filler Styles */

var AphProgressBar = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1pp9vj71"
})(function (props) {
  return _objectSpread({}, defaultStyles, {
    width: (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + '%',
    height: props.height || '10px',
    background: props.color ? _constants.COLORS.GET(props.color) : !props.animated ? _constants.COLORS.BLUE : "linear-gradient(270deg, ".concat(props.gradientStart || _constants.COLORS.BLUE, " 0%, ").concat(props.gradientEnd || _constants.COLORS.LIGHT_BLUE, " 100%)"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgAnimated, " .9s ease infinite"),
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQW5pbWF0aW9uICovXG5jb25zdCBiZ0FuaW1hdGVkID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxufTtcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaFByb2dyZXNzQmFyV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG5cbiAgICBvdmVyZmxvdyAgIDogJ2hpZGRlbicsXG4gICAgd2lkdGggICAgICA6ICcxMDAlJyxcbiAgICBtYXhXaWR0aCAgIDogKHByb3BzLndpZHRoIHx8ICcxMDAlJyksXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAoKChwcm9wcy5yYWRpdXMgfHwgcHJvcHMucmFkaXVzID09PSAwKSAmJiB0eXBlb2YgcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgPT09ICdudW1iZXInKSA/IHBhcnNlSW50KHByb3BzLnJhZGl1cywgMTApICsgKHByb3BzLnJhZGl1cy50b1N0cmluZygpLmluY2x1ZGVzKCclJykgPyAnJScgOiAncHgnKSA6ICcxMHB4JyksXG4gICAgYmFja2dyb3VuZCAgOiBDT0xPUlMuTElHSFRfR1JFWSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogRmlsbGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcblxuICAgIHdpZHRoIDogKCgocHJvcHMucGVyY2VudHVhbCAmJiBwcm9wcy5wZXJjZW50dWFsID4gMTAwKSA/IDEwMCA6IHByb3BzLnBlcmNlbnR1YWwgfHwgMCkgKyAnJScpLFxuICAgIGhlaWdodDogKHByb3BzLmhlaWdodCB8fCAnMTBweCcpLFxuXG4gICAgYmFja2dyb3VuZDogKHByb3BzLmNvbG9yID8gQ09MT1JTLkdFVChwcm9wcy5jb2xvcikgOiAhcHJvcHMuYW5pbWF0ZWQgPyBDT0xPUlMuQkxVRSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke3Byb3BzLmdyYWRpZW50U3RhcnQgfHwgQ09MT1JTLkJMVUV9IDAlLCAke3Byb3BzLmdyYWRpZW50RW5kIHx8IENPTE9SUy5MSUdIVF9CTFVFfSAxMDAlKWApLFxuICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgIGFuaW1hdGlvbjogYCR7YmdBbmltYXRlZH0gLjlzIGVhc2UgaW5maW5pdGVgLFxuXG4gICAgd2lsbENoYW5nZTogJ3dpZHRoJyxcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggLjE1cyBlYXNlLWluJyxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBlcmNlbnR1YWw6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluY3JlbWVudCA9IDUwMDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCAgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5jcmVhc2VQZXJjZW50dWFsKGluY3JlbWVudCA9IDEpIHtcbiAgICAgICAgY29uc3QgeyBwZXJjZW50dWFsIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChwZXJjZW50dWFsID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwZXJjZW50dWFsOiAocGVyY2VudHVhbCArIGluY3JlbWVudCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGhhbmRsZVByb21pc2UoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgcHJvbWlzZURvbmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2UgID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yICAgICA9IG51bGw7XG4gICAgICAgIGxldCBpbmNyZW1lbnQgPSAwO1xuICAgICAgICB0aGlzLmludGVydmFsID1cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgKz0gMTU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlUHJvZ3Jlc3MoaW5jcmVtZW50KTtcbiAgICAgICAgICAgIH0sIHRoaXMuaW5jcmVtZW50KTtcblxuICAgICAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICAgICAgcGVyY2VudCxcbiAgICAgICAgICAgIHBlcmNlbnR1YWwsXG4gICAgICAgICAgICBncmFkaWVudCxcbiAgICAgICAgICAgIHN0eWxlcyxcblxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICByYWRpdXMsXG5cbiAgICAgICAgICAgIGNvbG9yLFxuXG4gICAgICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBfY29sb3IgICAgICA9IChjb2xvciB8fCAnJyk7XG4gICAgICAgIGNvbnN0IF9wZXJjZW50dWFsID0gKHRoaXMuc3RhdGUucGVyY2VudHVhbCB8fCBwZXJjZW50IHx8IHBlcmNlbnR1YWwpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJXcmFwcGVyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHJhZGl1cz17cmFkaXVzfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17d3JhcHBlclN0eWxlc30+XG4gICAgICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnR1YWw9e19wZXJjZW50dWFsfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17X2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50U3RhcnQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LnN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBDT0xPUlMuQkxVRSxcbiAgICAgICAgZW5kICA6IENPTE9SUy5MSUdIVF9CTFVFLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19 */");
/* Component it self */

var ProgressBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressBar, _Component);

  /**
   * Constructor
   *
   * @param {object} props
   */
  function ProgressBar(props) {
    var _this;

    _classCallCheck(this, ProgressBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).call(this, props));
    _this.props = props;
    _this.state = {
      percentual: undefined
    };
    _this.increment = 500;
    _this.interval = null;
    return _this;
  }
  /**
   *
   */


  _createClass(ProgressBar, [{
    key: "increasePercentual",
    value: function increasePercentual() {
      var increment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var percentual = this.state.percentual;

      if (percentual >= 100) {
        return false;
      }

      this.setState({
        percentual: percentual + increment
      }, function () {
        return true;
      });
    }
    /**
     *
     */

  }, {
    key: "handlePromise",
    value: function handlePromise() {
      var _this2 = this;

      var _this$props = this.props,
          promise = _this$props.promise,
          promiseDone = _this$props.promiseDone;

      if (!promise) {
        return;
      }

      var response = null;
      var error = null;
      var increment = 0;
      this.interval = setInterval(function () {
        increment += 15;

        _this2.increaseProgress(increment);
      }, this.increment);
      promise.then(function (response) {
        response = response;
      }).catch(function (error) {
        error = error;
      }).finally(function () {
        clearInterval(_this2.interval);
      });
    }
    /* Render */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          animated = _this$props2.animated,
          percent = _this$props2.percent,
          percentual = _this$props2.percentual,
          gradient = _this$props2.gradient,
          styles = _this$props2.styles,
          width = _this$props2.width,
          height = _this$props2.height,
          radius = _this$props2.radius,
          color = _this$props2.color,
          wrapperStyles = _this$props2.wrapperStyles;

      var _color = color || '';

      var _percentual = this.state.percentual || percent || percentual;

      return _react.default.createElement(AphProgressBarWrapper, {
        width: width,
        height: height,
        radius: radius,
        styles: wrapperStyles
      }, _react.default.createElement(AphProgressBar, {
        percentual: _percentual,
        color: _color,
        animated: animated,
        gradientStart: gradient && gradient.start,
        gradientEnd: gradient && gradient.end,
        height: height,
        styles: styles
      }));
    }
  }]);

  return ProgressBar;
}(_react.Component);

;
/* Default Props */

ProgressBar.defaultProps = {
  animated: false,
  percent: 0,
  percentual: 0,
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
  percentual: _propTypes.default.number,
  grandient: _propTypes.default.object,
  styles: _propTypes.default.object,
  width: _propTypes.default.any,
  height: _propTypes.default.number,
  color: _propTypes.default.string,
  wrapperStyles: _propTypes.default.object
};
/* Exporting */

var _default = ProgressBar;
exports.default = _default;