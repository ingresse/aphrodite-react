"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _ = require("../");

var _ModalStyles = _interopRequireDefault(require("./ModalStyles"));

var _ModalOverlayStyles = _interopRequireDefault(require("./ModalOverlayStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}"
} : {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTjJDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7XG4gICAgSDEsXG4gICAgRmxleCxcbiAgICBBY3Rpb25CYXIsXG59IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmltcG9ydCBNb2RhbFN0eWxlZCBmcm9tICcuL01vZGFsU3R5bGVzJztcbmltcG9ydCBNb2RhbE92ZXJsYXlTdHlsZWQgZnJvbSAnLi9Nb2RhbE92ZXJsYXlTdHlsZXMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBNb2RhbCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcblxuICAgIC8qKlxuICAgICAqIEdsb2JhbCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgICB9ID0gZG9jdW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBJbmhlcml0IFByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjb250ZW50SnVzdGlmeSxcbiAgICAgICAgYWxpZ25JdGVtcyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgZm9vdGVyUHJvcHMsXG4gICAgICAgIG92ZXJsYXlQcm9wcyxcblxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICBvcGVuZWQsXG4gICAgICAgIG9wZW5lZENhbGxiYWNrLFxuICAgICAgICBjbG9zZU9uRXNjYXBlLFxuICAgICAgICBjbG9zZUJ5RXNjYXBlLFxuICAgICAgICB1bmJsb2NrU2Nyb2xsaW5nLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIGFjdGl2ZSwgc2V0QWN0aXZlIF0gICAgICAgICAgICAgPSB1c2VTdGF0ZShvcGVuZWQpO1xuICAgIGNvbnN0IFsgdmlzaWJsZSwgc2V0VmlzaWJsZSBdICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB1bm1vdW50ZWQsIHNldFVubW91bnRlZCBdICAgICAgID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgYWN0aXZlVGltZXIsIHNldEFjdGl2ZVRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgdmlzaWJsZVRpbWVyLCBzZXRWaXNpYmxlVGltZXIgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogU3RhdGUgcmVmZXJlbmNlXG4gICAgICovXG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBXYXRjaCBmb3IgYG9wZW5lZGAgcHJvcCBjaGFuZ2VzXG4gICAgICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gdW5saXN0ZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlbmVkIHx8IGFjdGl2ZSkge1xuICAgICAgICAgICAgaGFuZGxlT3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVubGlzdGVuO1xuICAgIH0sIFsgb3BlbmVkIF0pO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggY2xvc2UgYnkgZXNjYXBlIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dCAtIERPTSBjbGljayBldmVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlT25TY2FwZSAoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBrZXlDb2RlLCB0YXJnZXQgfSA9IChldnQgfHwge30pO1xuICAgICAgICBjb25zdCB7IG5vZGVOYW1lIH0gPSAodGFyZ2V0IHx8IHt9KTtcbiAgICAgICAgY29uc3QgaXNFc2NQcmVzc2VkID0gKGtleSA9PT0gJ0VzY2FwZScgfHwga2V5ID09PSAnRXNjJyB8fCBrZXlDb2RlID09PSAyNyk7XG5cbiAgICAgICAgaWYgKCFpc0VzY1ByZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gaGFuZGxlIHdpdGggbW9kYWwgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbiAoKSB7XG4gICAgICAgIGlmIChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDbG9zZU9uU2NhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50IExpc3RlbmVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVubGlzdGVuICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gY2xvc2UgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCB8fFxuICAgICAgICAgICAgKGV2dCAmJlxuICAgICAgICAgICAgZXZ0LnRhcmdldCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldFZpc2libGVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgb3BlbmVkQ2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9LCAxMDApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBEcm9wZG93biBvcGVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlT3BlbihldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcblxuICAgICAgICBpZiAodW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldEFjdGl2ZVRpbWVyKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgbGlzdGVuKCk7XG4gICAgICAgIH0sIDUwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsoIWFjdGl2ZSB8fCAhdmlzaWJsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgPE1vZGFsT3ZlcmxheVN0eWxlZFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiAoY2xvc2VPbkVzY2FwZSB8fCBjbG9zZUJ5RXNjYXBlKSAmJiBoYW5kbGVDbG9zZShldnQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWwtb3ZlcmxheSAke2FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfSR7dmlzaWJsZSA/ICcgdmlzaWJsZScgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3ZlcmxheVByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPE1vZGFsU3R5bGVkXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgb3BlbmVkPXthY3RpdmUgJiYgdmlzaWJsZX1cbiAgICAgICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgICBoYXNGb290ZXI9eyhmb290ZXIgfHwgT2JqZWN0LmtleXMoZm9vdGVyUHJvcHMpLmxlbmd0aCkgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLW1vZGFsICR7Y2xhc3NOYW1lIHx8ICcnfSR7YWN0aXZlID8gJyBhY3RpdmUnIDogJyd9JHt2aXNpYmxlID8gJyB2aXNpYmxlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIHsoIWFjdGl2ZSB8fCAhdmlzaWJsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dW5ibG9ja1Njcm9sbGluZyA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1tb2RhbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghdGl0bGUpID8gKG51bGwpIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SDEgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX3RpdGxlXCIgYm9sZCBjZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFoZWFkZXIpID8gKG51bGwpIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFwaC1tb2RhbF9fY29udGFpbmVyX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2NvbnRlbnRKdXN0aWZ5IHx8ICdzdGFydCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17eyBmbGV4OiAxLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBzdHlsZXM9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25CYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZm9vdGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLW1vZGFsX19jb250ZW50X19mb290ZXIgJHtmb290ZXJQcm9wcy5jbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmb290ZXJQcm9wcy52aXNpYmxlIHx8ICh0eXBlb2YgZm9vdGVyUHJvcHMudmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgJiYgZm9vdGVyID8gdHJ1ZSA6IGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9vdGVyUHJvcHMuc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICA6ICcxMHB4IDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdpbml0aWFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTW9kYWxTdHlsZWQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBwcm9wcyAqL1xuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlIDogJycsXG4gICAgaGVhZGVyOiB1bmRlZmluZWQsXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBmYWxzZSxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiAoKSA9PiB7fSxcbiAgICBjbG9zZU9uRXNjYXBlICAgOiBmYWxzZSxcbiAgICB1bmJsb2NrU2Nyb2xsaW5nOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEZsZXggYGp1c3RpZnktY29udGVudGBcbiAgICAgKiBmbGV4LXN0YXJ0IHx8IGNlbnRlciB8fCBmbGV4LWVuZFxuICAgICAqL1xuICAgIGNvbnRlbnRKdXN0aWZ5OiAnZmxleC1zdGFydCcsXG5cbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb290ZXJQcm9wczoge30sXG4gICAgc3R5bGVzICAgICA6IHt9LFxuXG4gICAgb3ZlcmxheVByb3BzOiB7fSxcbn07XG5cbi8qIFByb3AgVHlwZXMgKi9cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWxpZ25JdGVtczogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0= */"
};

/* Component Itself */
var Modal = (0, _react.forwardRef)(function (props, ref) {
  /**
   * Global props
   */
  var _document = document,
      addEventListener = _document.addEventListener,
      removeEventListener = _document.removeEventListener;
  /**
   * Inherit Props
   */

  var title = props.title,
      header = props.header,
      contentJustify = props.contentJustify,
      alignItems = props.alignItems,
      children = props.children,
      footer = props.footer,
      footerProps = props.footerProps,
      overlayProps = props.overlayProps,
      className = props.className,
      styles = props.styles,
      opened = props.opened,
      openedCallback = props.openedCallback,
      closeOnEscape = props.closeOnEscape,
      closeByEscape = props.closeByEscape,
      unblockScrolling = props.unblockScrolling,
      rest = _objectWithoutPropertiesLoose(props, ["title", "header", "contentJustify", "alignItems", "children", "footer", "footerProps", "overlayProps", "className", "styles", "opened", "openedCallback", "closeOnEscape", "closeByEscape", "unblockScrolling"]);
  /**
   * State values
   */


  var _useState = (0, _react.useState)(opened),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0, _react.useState)(opened),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      unmounted = _useState3[0],
      setUnmounted = _useState3[1];

  var _useState4 = (0, _react.useState)(null),
      activeTimer = _useState4[0],
      setActiveTimer = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      visibleTimer = _useState5[0],
      setVisibleTimer = _useState5[1];
  /**
   * State reference
   */


  var modalRef = (0, _react.useRef)(null);
  /**
   * Watch for `opened` prop changes
   */

  (0, _react.useEffect)(function () {
    if (!opened) {
      handleClose();
      unlisten();
      return unlisten;
    }

    if (opened || active) {
      handleOpen();
    }

    return unlisten;
  }, [opened]);
  /**
   * Handle with close by escape key
   *
   * @param {object} evt - DOM click event
   */

  function handleCloseOnScape(evt) {
    var _ref2 = evt || {},
        key = _ref2.key,
        keyCode = _ref2.keyCode,
        target = _ref2.target;

    var _ref3 = target || {},
        nodeName = _ref3.nodeName;

    var isEscPressed = key === 'Escape' || key === 'Esc' || keyCode === 27;

    if (!isEscPressed) {
      return;
    }

    handleClose();
    return;
  }
  /**
   * Add Event Listeners to handle with modal visibility
   */


  function listen() {
    if (closeOnEscape || closeByEscape) {
      addEventListener('keydown', handleCloseOnScape);
    }
  }
  /**
   * Remove Event Listeners
   */


  function unlisten() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
    removeEventListener('keydown', handleCloseOnScape);
  }
  /**
   * Handle with Dropdown close event
   *
   * @param {object} evt - DOM click event
   */


  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && modalRef && modalRef.current && modalRef.current.contains(evt.target)) {
      return;
    }

    unlisten();
    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
      openedCallback(false);
      modalRef.current.focus();
    }, 100));
  }
  /**
   * Handle with Dropdown open event
   *
   * @param {object} evt - DOM click event
   */


  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (unmounted) {
      return;
    }

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setActive(true);
      listen();
    }, 50));
  }
  /**
   * Render
   */


  return _react.default.createElement(_react.default.Fragment, null, !active || !visible ? null : _react.default.createElement(_ModalOverlayStyles.default, _extends({
    onClick: function onClick(evt) {
      return (closeOnEscape || closeByEscape) && handleClose(evt);
    },
    className: "aph-modal-overlay " + (active ? ' active' : '') + (visible ? ' visible' : '')
  }, overlayProps)), _react.default.createElement(_ModalStyles.default, _extends({}, rest, {
    ref: modalRef,
    open: true,
    opened: active && visible,
    role: "dialog",
    styles: styles,
    hasFooter: footer || Object.keys(footerProps).length ? true : false,
    className: "aph-modal " + (className || '') + (active ? ' active' : '') + (visible ? ' visible' : '')
  }), !active || !visible ? null : _react.default.createElement(_react.default.Fragment, null, unblockScrolling ? null : _react.default.createElement(_core.Global, {
    styles: _ref
  }), _react.default.createElement(_.Flex, {
    flex: true,
    flexDirection: "column",
    className: "aph-modal__container"
  }, !title ? null : _react.default.createElement(_.H1, {
    className: "aph-modal__container__title",
    bold: true,
    center: true
  }, title), !header ? null : _react.default.createElement("header", {
    className: "aph-modal__container__header"
  }, header), _react.default.createElement(_.Flex, {
    flex: true,
    alignItems: "center",
    justifyContent: contentJustify || 'start',
    styles: {
      flex: 1,
      width: '100%'
    },
    flexDirection: "column",
    className: "aph-modal__container__content"
  }, _react.default.createElement(_.Flex, {
    styles: {
      width: '100%'
    }
  }, children))), _react.default.createElement(_.ActionBar, _extends({}, footerProps, {
    className: "aph-modal__content__footer " + (footerProps.className || ''),
    visible: footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false),
    styles: _objectSpread({}, footerProps.styles, {
      padding: '10px 0',
      minHeight: 'initial'
    })
  }), footer))));
});
/* Default props */

Modal.defaultProps = {
  title: '',
  header: undefined,
  opened: false,
  openedCallback: function openedCallback() {},
  closeOnEscape: false,
  unblockScrolling: false,

  /**
   * Flex `justify-content`
   * flex-start || center || flex-end
   */
  contentJustify: 'flex-start',
  alignItems: 'center',
  footerProps: {},
  styles: {},
  overlayProps: {}
};
/* Prop Types */

Modal.propTypes = {
  title: _propTypes.default.string,
  header: _propTypes.default.any,
  opened: _propTypes.default.bool,
  openedCallback: _propTypes.default.func.isRequired,
  closeOnEscape: _propTypes.default.bool,
  unblockScrolling: _propTypes.default.bool,
  contentJustify: _propTypes.default.string,
  alignItems: _propTypes.default.string,
  overlayProps: _propTypes.default.object
};
/* Exporting */

var _default = Modal;
exports.default = _default;