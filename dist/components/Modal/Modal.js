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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTzJDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7XG4gICAgSDEsXG4gICAgRmxleCxcbiAgICBBY3Rpb25CYXIsXG59IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmltcG9ydCBNb2RhbFN0eWxlZCBmcm9tICcuL01vZGFsU3R5bGVzJztcbmltcG9ydCBNb2RhbE92ZXJsYXlTdHlsZWQgZnJvbSAnLi9Nb2RhbE92ZXJsYXlTdHlsZXMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBNb2RhbCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcblxuICAgIC8qKlxuICAgICAqIEdsb2JhbCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgICB9ID0gZG9jdW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBJbmhlcml0IFByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjb250ZW50SnVzdGlmeSxcbiAgICAgICAgYWxpZ25JdGVtcyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgZm9vdGVyUHJvcHMsXG4gICAgICAgIG92ZXJsYXlQcm9wcyxcblxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICBvcGVuZWQsXG4gICAgICAgIG9wZW5lZENhbGxiYWNrLFxuICAgICAgICBjbG9zZU9uRXNjYXBlLFxuICAgICAgICBjbG9zZUJ5RXNjYXBlLFxuICAgICAgICB1bmJsb2NrU2Nyb2xsaW5nLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIGFjdGl2ZSwgc2V0QWN0aXZlIF0gICAgICAgICAgICAgPSB1c2VTdGF0ZShvcGVuZWQpO1xuICAgIGNvbnN0IFsgdmlzaWJsZSwgc2V0VmlzaWJsZSBdICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB1bm1vdW50ZWQsIHNldFVubW91bnRlZCBdICAgICAgID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgYWN0aXZlVGltZXIsIHNldEFjdGl2ZVRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgdmlzaWJsZVRpbWVyLCBzZXRWaXNpYmxlVGltZXIgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogU3RhdGUgcmVmZXJlbmNlXG4gICAgICovXG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBjbG9zZSBieSBlc2NhcGUga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VPblNjYXBlIChldnQpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIGtleUNvZGUsIHRhcmdldCB9ID0gKGV2dCB8fCB7fSk7XG4gICAgICAgIGNvbnN0IGlzRXNjUHJlc3NlZCA9IChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5Q29kZSA9PT0gMjcpO1xuXG4gICAgICAgIGlmICghaXNFc2NQcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiZcbiAgICAgICAgICAgICh0eXBlb2YgZXZ0LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gaGFuZGxlIHdpdGggbW9kYWwgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbiAoKSB7XG4gICAgICAgIGlmIChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDbG9zZU9uU2NhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50IExpc3RlbmVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVubGlzdGVuICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gY2xvc2UgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCB8fFxuICAgICAgICAgICAgKGV2dCAmJlxuICAgICAgICAgICAgZXZ0LnRhcmdldCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldFZpc2libGVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgb3BlbmVkQ2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9LCAxMDApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBEcm9wZG93biBvcGVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlT3BlbihldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcblxuICAgICAgICBpZiAodW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldEFjdGl2ZVRpbWVyKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgbGlzdGVuKCk7XG4gICAgICAgIH0sIDUwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2F0Y2ggZm9yIGBvcGVuZWRgIHByb3AgY2hhbmdlc1xuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlbmVkIHx8IGFjdGl2ZSkge1xuICAgICAgICAgICAgaGFuZGxlT3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgIH0sIFsgb3BlbmVkIF0pO1xuXG4gICAgLyoqXG4gICAgICogVW5tb3VudFxuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgeyghYWN0aXZlIHx8ICF2aXNpYmxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICA8TW9kYWxPdmVybGF5U3R5bGVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpICYmIGhhbmRsZUNsb3NlKGV2dCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbC1vdmVybGF5ICR7YWN0aXZlID8gJyBhY3RpdmUnIDogJyd9JHt2aXNpYmxlID8gJyB2aXNpYmxlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdmVybGF5UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TW9kYWxTdHlsZWRcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICByZWY9e21vZGFsUmVmfVxuICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICBvcGVuZWQ9e2FjdGl2ZSAmJiB2aXNpYmxlfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgICAgIGhhc0Zvb3Rlcj17KGZvb3RlciB8fCBPYmplY3Qua2V5cyhmb290ZXJQcm9wcykubGVuZ3RoKSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWwgJHtjbGFzc05hbWUgfHwgJyd9JHthY3RpdmUgPyAnIGFjdGl2ZScgOiAnJ30ke3Zpc2libGUgPyAnIHZpc2libGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgeyghYWN0aXZlIHx8ICF2aXNpYmxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1bmJsb2NrU2Nyb2xsaW5nID8gKG51bGwpIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCF0aXRsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIMSBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9fdGl0bGVcIiBib2xkIGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWhlYWRlcikgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17Y29udGVudEp1c3RpZnkgfHwgJ3N0YXJ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7IGZsZXg6IDEsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1tb2RhbF9fY29udGFpbmVyX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHN0eWxlcz17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5mb290ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWxfX2NvbnRlbnRfX2Zvb3RlciAke2Zvb3RlclByb3BzLmNsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2Zvb3RlclByb3BzLnZpc2libGUgfHwgKHR5cGVvZiBmb290ZXJQcm9wcy52aXNpYmxlID09PSAndW5kZWZpbmVkJyAmJiBmb290ZXIgPyB0cnVlIDogZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb290ZXJQcm9wcy5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgIDogJzEwcHggMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2luaXRpYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Nb2RhbFN0eWxlZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IHByb3BzICovXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGUgOiAnJyxcbiAgICBoZWFkZXI6IHVuZGVmaW5lZCxcblxuICAgIG9wZW5lZCAgICAgICAgICA6IGZhbHNlLFxuICAgIG9wZW5lZENhbGxiYWNrICA6ICgpID0+IHt9LFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IGZhbHNlLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogRmxleCBganVzdGlmeS1jb250ZW50YFxuICAgICAqIGZsZXgtc3RhcnQgfHwgY2VudGVyIHx8IGZsZXgtZW5kXG4gICAgICovXG4gICAgY29udGVudEp1c3RpZnk6ICdmbGV4LXN0YXJ0JyxcblxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvb3RlclByb3BzOiB7fSxcbiAgICBzdHlsZXMgICAgIDoge30sXG5cbiAgICBvdmVybGF5UHJvcHM6IHt9LFxufTtcblxuLyogUHJvcCBUeXBlcyAqL1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlIDogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWxpZ25JdGVtczogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0= */"
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
   * Handle with close by escape key
   *
   * @param {object} evt - DOM click event
   */

  function handleCloseOnScape(evt) {
    var _ref2 = evt || {},
        key = _ref2.key,
        keyCode = _ref2.keyCode,
        target = _ref2.target;

    var isEscPressed = key === 'Escape' || key === 'Esc' || keyCode === 27;

    if (!isEscPressed) {
      return;
    }

    if (evt && evt.stopPropagation && typeof evt.stopPropagation === 'function') {
      evt.stopPropagation();
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
   * Watch for `opened` prop changes
   */


  (0, _react.useEffect)(function () {
    if (!opened) {
      handleClose();
      unlisten();
      return function cleanup() {
        unlisten();
      };
    }

    if (opened || active) {
      handleOpen();
    }

    return function cleanup() {
      unlisten();
    };
  }, [opened]);
  /**
   * Unmount
   */

  (0, _react.useEffect)(function () {
    return function cleanup() {
      unlisten();
    };
  }, []);
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
  title: _propTypes.default.any,
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