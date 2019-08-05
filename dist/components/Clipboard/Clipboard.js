"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactClipboard = _interopRequireDefault(require("react-clipboard.js"));

var _ClipboardStyled = _interopRequireDefault(require("./ClipboardStyled"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AphClipboardWrapper = (
/*#__PURE__*/
0, _styledBase.default)(_reactClipboard.default, {
  target: "e1icbit10"
})("box-sizing:border-box;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NsaXBib2FyZC9DbGlwYm9hcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFrRCIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DbGlwYm9hcmQvQ2xpcGJvYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdENsaXBib2FyZCBmcm9tICdyZWFjdC1jbGlwYm9hcmQuanMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5pbXBvcnQgQ2xpcGJvYXJkU3R5bGVkIGZyb20gJy4vQ2xpcGJvYXJkU3R5bGVkJztcbmNvbnN0IEFwaENsaXBib2FyZFdyYXBwZXIgPSBzdHlsZWQoUmVhY3RDbGlwYm9hcmQpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQ2xpcGJvYXJkID0gKHByb3BzKSA9PiB7XG5cbiAgICAvKipcbiAgICAgKiBHbG9iYWwgdmFsdWVzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBzdHlsZWQsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIG9uU3VjY2VzcyxcbiAgICAgICAgb25FcnJvcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgLyoqXG4gICAgICogTG9jYWwgdmFsdWVzXG4gICAgICovXG4gICAgY29uc3QgWyB0aW1lciwgc2V0VGltZXIgXSAgID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgU3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3N0YXR1c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hcHBseVN0YXR1cyAoX3N0YXR1cykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICBzZXRTdGF0dXMoX3N0YXR1cyk7XG4gICAgICAgIHNldFRpbWVyKFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKCcnKTtcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gZXJyb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb25FcnJvciAoZXZ0KSB7XG4gICAgICAgIF9hcHBseVN0YXR1cygnZXJyb3InKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoeyAuLi5ldnQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBzdWNjZXNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0XG4gICAgICovXG4gICAgZnVuY3Rpb24gX29uU3VjY2VzcyAoZXZ0KSB7XG4gICAgICAgIF9hcHBseVN0YXR1cygnc3VjY2VzcycpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MoeyAuLi5ldnQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWxsIFVubW91bnRcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIC8qKlxuICAgICAqIENvbW1vbiBQcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IGNsaXBib2FyZFByb3BzID0ge1xuICAgICAgICAuLi5yZXN0LFxuXG4gICAgICAgIHN0eWxlcyAgIDogc3R5bGVzLFxuICAgICAgICBvbkVycm9yICA6IF9vbkVycm9yLFxuICAgICAgICBvblN1Y2Nlc3M6IF9vblN1Y2Nlc3MsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIGlmICghc3R5bGVkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoQ2xpcGJvYXJkV3JhcHBlclxuICAgICAgICAgICAgICAgIHsuLi5jbGlwYm9hcmRQcm9wc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY2xpcGJvYXJkICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDbGlwYm9hcmRTdHlsZWRcbiAgICAgICAgICAgIHsuLi5jbGlwYm9hcmRQcm9wc31cbiAgICAgICAgICAgIGFzPXtSZWFjdENsaXBib2FyZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jbGlwYm9hcmQke3N0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJyBzdWNjZXNzJyA6ICcnfSR7c3RhdHVzID09PSAnZXJyb3InID8gJyBlcnJvcicgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuLyogRGVmYXVsdCBQcm9wcyAqL1xuQ2xpcGJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZWQ6IGZhbHNlLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5DbGlwYm9hcmQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3R5bGVzXG4gICAgICovXG4gICAgc3R5bGVkOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bGwgY3VzdG9tIHN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENsaXBib2FyZDtcbiJdfQ== */"));
/* Component Itself */

var Clipboard = function Clipboard(props) {
  /**
   * Global values
   */
  var styled = props.styled,
      styles = props.styles,
      className = props.className,
      onSuccess = props.onSuccess,
      onError = props.onError,
      rest = _objectWithoutPropertiesLoose(props, ["styled", "styles", "className", "onSuccess", "onError"]);
  /**
   * Local values
   */


  var _useState = (0, _react.useState)(null),
      timer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = (0, _react.useState)(''),
      status = _useState2[0],
      setStatus = _useState2[1];
  /**
   * Apply Status
   *
   * @param {string} _status
   */


  function _applyStatus(_status) {
    clearTimeout(timer);
    setStatus(_status);
    setTimer(setTimeout(function () {
      setStatus('');
    }, 1000));
  }
  /**
   * On error
   *
   * @param {object} evt
   */


  function _onError(evt) {
    _applyStatus('error');

    if (typeof onError === 'function') {
      onError(_objectSpread({}, evt));
    }
  }
  /**
   * On success
   *
   * @param {object} evt
   */


  function _onSuccess(evt) {
    _applyStatus('success');

    if (typeof onSuccess === 'function') {
      onSuccess(_objectSpread({}, evt));
    }
  }
  /**
   * Will Unmount
   */


  (0, _react.useEffect)(function () {
    return function () {
      clearTimeout(timer);
    };
  }, []);
  /**
   * Common Props
   */

  var clipboardProps = _objectSpread({}, rest, {
    styles: styles,
    onError: _onError,
    onSuccess: _onSuccess
  });
  /**
   * Render
   */


  if (!styled) {
    return _react.default.createElement(AphClipboardWrapper, _extends({}, clipboardProps, {
      className: "aph-clipboard " + (className || '')
    }));
  }

  return _react.default.createElement(_ClipboardStyled.default, _extends({}, clipboardProps, {
    as: _reactClipboard.default,
    className: "aph-clipboard" + (status === 'success' ? ' success' : '') + (status === 'error' ? ' error' : '') + " " + (className || '')
  }));
};
/* Default Props */


Clipboard.defaultProps = {
  styled: false,
  styles: {}
};
/* Properties Types */

Clipboard.propTypes = {
  /**
   * Default styles
   */
  styled: _propTypes.default.bool,

  /**
   * Full custom styles
   */
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Clipboard;
exports.default = _default;