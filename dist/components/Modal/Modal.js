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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTXVDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEgxLCBBY3Rpb25CYXIgfSBmcm9tICcuLi8nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5pbXBvcnQgTW9kYWxTdHlsZWQgZnJvbSAnLi9Nb2RhbFN0eWxlcyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IE1vZGFsID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyLFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyLFxuICAgIH0gPSBkb2N1bWVudDtcblxuICAgIC8qKlxuICAgICAqIEluaGVyaXQgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBmb290ZXIsXG4gICAgICAgIGZvb3RlclByb3BzLFxuXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIG9wZW5lZCxcbiAgICAgICAgb3BlbmVkQ2FsbGJhY2ssXG4gICAgICAgIGNsb3NlT25Fc2NhcGUsXG4gICAgICAgIGNsb3NlQnlFc2NhcGUsXG4gICAgICAgIHVuYmxvY2tTY3JvbGxpbmcsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSAgICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gICAgICAgICAgID0gdXNlU3RhdGUob3BlbmVkKTtcbiAgICBjb25zdCBbIHVubW91bnRlZCwgc2V0VW5tb3VudGVkIF0gICAgICAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyBhY3RpdmVUaW1lciwgc2V0QWN0aXZlVGltZXIgXSAgID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB2aXNpYmxlVGltZXIsIHNldFZpc2libGVUaW1lciBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIC8qKlxuICAgICAqIFdhdGNoIGZvciBgb3BlbmVkYCBwcm9wIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmxpc3RlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuZWQgfHwgYWN0aXZlKSB7XG4gICAgICAgICAgICBoYW5kbGVPcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5saXN0ZW47XG4gICAgfSwgWyBvcGVuZWQgXSk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBjbG9zZSBieSBlc2NhcGUga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VPblNjYXBlIChldnQpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIGtleUNvZGUsIHRhcmdldCB9ID0gKGV2dCB8fCB7fSk7XG4gICAgICAgIGNvbnN0IHsgbm9kZU5hbWUgfSA9ICh0YXJnZXQgfHwge30pO1xuICAgICAgICBjb25zdCBpc0VzY1ByZXNzZWQgPSAoa2V5ID09PSAnRXNjYXBlJyB8fCBrZXkgPT09ICdFc2MnIHx8IGtleUNvZGUgPT09IDI3KTtcblxuICAgICAgICBpZiAoaXNFc2NQcmVzc2VkKSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIEV2ZW50IExpc3RlbmVycyB0byBoYW5kbGUgd2l0aCBtb2RhbCB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlzdGVuICgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSk7XG5cbiAgICAgICAgaWYgKGNsb3NlT25Fc2NhcGUgfHwgY2xvc2VCeUVzY2FwZSkge1xuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnQgTGlzdGVuZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5saXN0ZW4gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoYWN0aXZlVGltZXIpO1xuICAgICAgICBjbGVhclRpbWVvdXQodmlzaWJsZVRpbWVyKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDbG9zZU9uU2NhcGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aXRoIERyb3Bkb3duIGNsb3NlIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh2aXNpYmxlVGltZXIpO1xuXG4gICAgICAgIGlmICh1bm1vdW50ZWQgfHxcbiAgICAgICAgICAgIChldnQgJiZcbiAgICAgICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0ICYmXG4gICAgICAgICAgICBtb2RhbFJlZiAmJlxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5jb250YWlucyhldnQuY3VycmVudFRhcmdldCkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgc2V0VmlzaWJsZVRpbWVyKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICBvcGVuZWRDYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH0sIDI1MCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aXRoIERyb3Bkb3duIG9wZW4gZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVPcGVuKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoYWN0aXZlVGltZXIpO1xuXG4gICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldnQgJiYgZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgc2V0QWN0aXZlVGltZXIoc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBsaXN0ZW4oKTtcbiAgICAgICAgfSwgNTApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxTdHlsZWRcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgIG9wZW5lZD17YWN0aXZlICYmIHZpc2libGV9XG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgaGFzRm9vdGVyPXsoZm9vdGVyIHx8IE9iamVjdC5rZXlzKGZvb3RlclByb3BzKS5sZW5ndGgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLW1vZGFsICR7Y2xhc3NOYW1lIHx8ICcnfSR7YWN0aXZlID8gJyBhY3RpdmUnIDogJyd9JHt2aXNpYmxlID8gJyB2aXNpYmxlJyA6ICcnfWB9PlxuICAgICAgICAgICAgeyghYWN0aXZlIHx8ICF2aXNpYmxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7dW5ibG9ja1Njcm9sbGluZyA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIMSBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9fdGl0bGVcIiBib2xkIGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpb25CYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5mb290ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbF9fZm9vdGVyICR7Zm9vdGVyUHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmb290ZXJQcm9wcy52aXNpYmxlIHx8ICh0eXBlb2YgZm9vdGVyUHJvcHMudmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgJiYgZm9vdGVyID8gdHJ1ZSA6IGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvb3RlclByb3BzLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICA6ICcxMHB4IDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2luaXRpYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb2RhbFN0eWxlZD5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgcHJvcHMgKi9cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZSA6ICcnLFxuICAgIGhlYWRlcjogdW5kZWZpbmVkLFxuXG4gICAgb3BlbmVkICAgICAgICAgIDogZmFsc2UsXG4gICAgb3BlbmVkQ2FsbGJhY2sgIDogKCkgPT4ge30sXG4gICAgY2xvc2VPbkVzY2FwZSAgIDogZmFsc2UsXG4gICAgdW5ibG9ja1Njcm9sbGluZzogZmFsc2UsXG5cbiAgICBmb290ZXJQcm9wczoge30sXG4gICAgc3R5bGVzICAgICA6IHt9LFxufTtcblxuLyogUHJvcCBUeXBlcyAqL1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueSxcblxuICAgIG9wZW5lZCAgICAgICAgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wZW5lZENhbGxiYWNrICA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2VPbkVzY2FwZSAgIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdW5ibG9ja1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19 */"
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
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
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

    if (unmounted || evt && evt.currentTarget && modalRef && modalRef.current && modalRef.current.contains(evt.currentTarget)) {
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