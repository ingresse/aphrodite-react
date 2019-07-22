"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _ = require("../");

var _ModalStyles = _interopRequireDefault(require("./ModalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}"
} : {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2THVDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEgxLCBBY3Rpb25CYXIgfSBmcm9tICcuLi8nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5pbXBvcnQgTW9kYWxTdHlsZWQgZnJvbSAnLi9Nb2RhbFN0eWxlcyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IE1vZGFsID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyLFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyLFxuICAgIH0gPSBkb2N1bWVudDtcblxuICAgIC8qKlxuICAgICAqIEluaGVyaXQgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBmb290ZXIsXG4gICAgICAgIGZvb3RlclByb3BzLFxuXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIG9wZW5lZCxcbiAgICAgICAgb3BlbmVkQ2FsbGJhY2ssXG4gICAgICAgIGNsb3NlT25Fc2NhcGUsXG4gICAgICAgIGNsb3NlQnlFc2NhcGUsXG4gICAgICAgIHVuYmxvY2tTY3JvbGxpbmcsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSAgICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gICAgICAgICAgID0gdXNlU3RhdGUob3BlbmVkKTtcbiAgICBjb25zdCBbIHVubW91bnRlZCwgc2V0VW5tb3VudGVkIF0gICAgICAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyBhY3RpdmVUaW1lciwgc2V0QWN0aXZlVGltZXIgXSAgID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB2aXNpYmxlVGltZXIsIHNldFZpc2libGVUaW1lciBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIC8qKlxuICAgICAqIFdhdGNoIGZvciBgb3BlbmVkYCBwcm9wIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmxpc3RlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuZWQgfHwgYWN0aXZlKSB7XG4gICAgICAgICAgICBoYW5kbGVPcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5saXN0ZW47XG4gICAgfSwgWyBvcGVuZWQgXSk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBjbG9zZSBieSBlc2NhcGUga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VPblNjYXBlIChldnQpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIGtleUNvZGUsIHRhcmdldCB9ID0gKGV2dCB8fCB7fSk7XG4gICAgICAgIGNvbnN0IHsgbm9kZU5hbWUgfSA9ICh0YXJnZXQgfHwge30pO1xuICAgICAgICBjb25zdCBpc0VzY1ByZXNzZWQgPSAoa2V5ID09PSAnRXNjYXBlJyB8fCBrZXkgPT09ICdFc2MnIHx8IGtleUNvZGUgPT09IDI3KTtcblxuICAgICAgICBpZiAoaXNFc2NQcmVzc2VkKSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIEV2ZW50IExpc3RlbmVycyB0byBoYW5kbGUgd2l0aCBtb2RhbCB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlzdGVuICgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSk7XG5cbiAgICAgICAgaWYgKGNsb3NlT25Fc2NhcGUgfHwgY2xvc2VCeUVzY2FwZSkge1xuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnQgTGlzdGVuZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5saXN0ZW4gKCkge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gY2xvc2UgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCB8fFxuICAgICAgICAgICAgKGV2dCAmJlxuICAgICAgICAgICAgZXZ0LnRhcmdldCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldFZpc2libGVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgb3BlbmVkQ2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9LCAyNTApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBEcm9wZG93biBvcGVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlT3BlbihldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcblxuICAgICAgICBpZiAodW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldEFjdGl2ZVRpbWVyKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgbGlzdGVuKCk7XG4gICAgICAgIH0sIDUwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsU3R5bGVkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17bW9kYWxSZWZ9XG4gICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICBvcGVuZWQ9e2FjdGl2ZSAmJiB2aXNpYmxlfVxuICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIGhhc0Zvb3Rlcj17KGZvb3RlciB8fCBPYmplY3Qua2V5cyhmb290ZXJQcm9wcykubGVuZ3RoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbCAke2NsYXNzTmFtZSB8fCAnJ30ke2FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfSR7dmlzaWJsZSA/ICcgdmlzaWJsZScgOiAnJ31gfT5cbiAgICAgICAgICAgIHsoIWFjdGl2ZSB8fCAhdmlzaWJsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge3VuYmxvY2tTY3JvbGxpbmcgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFwaC1tb2RhbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SDEgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX3RpdGxlXCIgYm9sZCBjZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8QWN0aW9uQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZm9vdGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWxfX2Zvb3RlciAke2Zvb3RlclByb3BzLmNsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17Zm9vdGVyUHJvcHMudmlzaWJsZSB8fCAodHlwZW9mIGZvb3RlclByb3BzLnZpc2libGUgPT09ICd1bmRlZmluZWQnICYmIGZvb3RlciA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb290ZXJQcm9wcy5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgOiAnMTBweCAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdpbml0aWFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyfVxuICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTW9kYWxTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IHByb3BzICovXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGUgOiAnJyxcbiAgICBoZWFkZXI6IHVuZGVmaW5lZCxcblxuICAgIG9wZW5lZCAgICAgICAgICA6IGZhbHNlLFxuICAgIG9wZW5lZENhbGxiYWNrICA6ICgpID0+IHt9LFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IGZhbHNlLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IGZhbHNlLFxuXG4gICAgZm9vdGVyUHJvcHM6IHt9LFxuICAgIHN0eWxlcyAgICAgOiB7fSxcbn07XG5cbi8qIFByb3AgVHlwZXMgKi9cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ== */"
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
      children = props.children,
      footer = props.footer,
      footerProps = props.footerProps,
      className = props.className,
      styles = props.styles,
      opened = props.opened,
      openedCallback = props.openedCallback,
      closeOnEscape = props.closeOnEscape,
      closeByEscape = props.closeByEscape,
      unblockScrolling = props.unblockScrolling,
      rest = _objectWithoutPropertiesLoose(props, ["title", "header", "children", "footer", "footerProps", "className", "styles", "opened", "openedCallback", "closeOnEscape", "closeByEscape", "unblockScrolling"]);
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

    if (isEscPressed) {
      handleClose();
      return false;
    }
  }
  /**
   * Add Event Listeners to handle with modal visibility
   */


  function listen() {
    addEventListener('click', handleClose);

    if (closeOnEscape || closeByEscape) {
      addEventListener('keydown', handleCloseOnScape);
    }
  }
  /**
   * Remove Event Listeners
   */


  function unlisten() {
    removeEventListener('click', handleClose);
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
    }, 250));
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


  return _react.default.createElement(_ModalStyles.default, _extends({}, rest, {
    ref: modalRef,
    open: true,
    opened: active && visible,
    role: "dialog",
    styles: styles,
    hasFooter: footer || Object.keys(footerProps).length,
    className: "aph-modal " + (className || '') + (active ? ' active' : '') + (visible ? ' visible' : '')
  }), !active || !visible ? null : _react.default.createElement(_react.default.Fragment, null, unblockScrolling ? null : _react.default.createElement(_core.Global, {
    styles: _ref
  }), _react.default.createElement("section", {
    className: "aph-modal__container"
  }, title && _react.default.createElement(_.H1, {
    className: "aph-modal__container__title",
    bold: true,
    center: true
  }, title), header && _react.default.createElement("header", {
    className: "aph-modal__container__header"
  }, header), _react.default.createElement("section", {
    className: "aph-modal__container__content"
  }, children)), _react.default.createElement(_.ActionBar, _extends({}, footerProps, {
    className: "aph-modal__footer " + (footerProps.className || ''),
    visible: footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false),
    styles: _objectSpread({}, footerProps.styles, {
      padding: '10px 0',
      minHeight: 'initial'
    })
  }), footer)));
});
/* Default props */

Modal.defaultProps = {
  title: '',
  header: undefined,
  opened: false,
  openedCallback: function openedCallback() {},
  closeOnEscape: false,
  unblockScrolling: false,
  footerProps: {},
  styles: {}
};
/* Prop Types */

Modal.propTypes = {
  title: _propTypes.default.string,
  header: _propTypes.default.any,
  opened: _propTypes.default.bool,
  openedCallback: _propTypes.default.func.isRequired,
  closeOnEscape: _propTypes.default.bool,
  unblockScrolling: _propTypes.default.bool
};
/* Exporting */

var _default = Modal;
exports.default = _default;