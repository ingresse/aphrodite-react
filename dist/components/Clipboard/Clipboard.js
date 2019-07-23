"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactClipboard = _interopRequireDefault(require("react-clipboard.js"));

var _ClipboardStyled = _interopRequireDefault(require("./ClipboardStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
   * Common Props
   */


  var clipboardProps = _objectSpread({}, rest, {
    onError: _onError,
    onSuccess: _onSuccess
  });
  /**
   * Render
   */


  if (!styled) {
    return _react.default.createElement(_reactClipboard.default, _extends({}, clipboardProps, {
      className: "aph-clipboard " + (className || '')
    }));
  }

  return _react.default.createElement(_ClipboardStyled.default, _extends({}, clipboardProps, {
    as: _reactClipboard.default,
    styles: styles,
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
   * Should have custom styles?
   */
  styled: _propTypes.default.bool,

  /**
   * Only applied with `styled`
   */
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Clipboard;
exports.default = _default;