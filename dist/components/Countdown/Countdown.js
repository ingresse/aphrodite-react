"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _CountdownStyled = _interopRequireDefault(require("./CountdownStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Constants */
var SELECTOR = 'aph-countdown';
var LOG_PREFIX = 'Aphrodite Countdown:';
var RADIUS = 54;
var VIEW_BOX = 120;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
/* Component Itself */

function Countdown(props) {
  /**
   * Inherit props
   */
  var background = props.background,
      className = props.className,
      color = props.color,
      log = props.log,
      size = props.size,
      seconds = props.seconds,
      strokeWidth = props.strokeWidth,
      styles = props.styles,
      onFinishCallback = props.onFinishCallback,
      rest = _objectWithoutPropertiesLoose(props, ["background", "className", "color", "log", "size", "seconds", "strokeWidth", "styles", "onFinishCallback"]);
  /**
   * Local values
   */


  var _useState = (0, _react.useState)(seconds),
      countdown = _useState[0],
      setCountdown = _useState[1];

  var _useState2 = (0, _react.useState)(0),
      dashoffset = _useState2[0],
      setDashoffset = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      timer = _useState3[0],
      setTimer = _useState3[1];
  /**
   * Handle with countdown progress
   *
   * @param {number} value
   */


  function handleProgress(value) {
    var _progress = value / 100;

    var _dashoffset = CIRCUMFERENCE * (1 - _progress);

    setDashoffset(_dashoffset);

    if (log) {
      console.log(LOG_PREFIX, value + '%', '|', 'offset:', _dashoffset + ';');
    }
  }
  /**
   * Handle with Start
   */


  function handleStart() {
    var _timer = null;
    var _count = 0;
    var _current = seconds;

    var _progress = _current / seconds * 100;

    var miliseconds = 1000;

    if (log) {
      console.log(LOG_PREFIX, seconds, 'seconds to decrease;');
    }

    function _decrease() {
      if (_count > seconds) {
        if (typeof onFinishCallback === 'function') {
          onFinishCallback(seconds, log);
        }

        clearInterval(timer);
        clearInterval(_timer);
        return;
      }

      handleProgress(_progress);
      setCountdown(seconds - _count);
      _count = _count + 1;
      _current = _current - 1;
      _progress = _current / seconds * 100;
    }

    clearInterval(timer);
    clearInterval(_timer);

    _decrease();

    _timer = setInterval(_decrease, miliseconds);
    setTimer(_timer);
    return _timer;
  }
  /**
   * Mount
   */


  (0, _react.useEffect)(function () {
    var interval = handleStart();
    return function cleanup() {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [seconds]);
  /**
   * Unmount
   */

  (0, _react.useEffect)(function () {
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  /**
   * Render
   */

  return _react.default.createElement(_CountdownStyled.default, _extends({}, rest, {
    aphBackground: background,
    aphColor: color,
    aphSelector: SELECTOR,
    aphSize: size,
    aphStyles: styles,
    className: SELECTOR + "-wrapper " + (className || '')
  }), _react.default.createElement("svg", {
    className: SELECTOR + " " + (className || ''),
    width: size,
    height: size,
    viewBox: "0 0 " + VIEW_BOX + " " + VIEW_BOX
  }, _react.default.createElement("circle", {
    className: SELECTOR + "__trace",
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS,
    strokeWidth: strokeWidth
  }), _react.default.createElement("circle", {
    className: SELECTOR + "__line",
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS,
    strokeWidth: strokeWidth,
    style: {
      strokeDasharray: CIRCUMFERENCE,
      strokeDashoffset: dashoffset
    }
  })), _react.default.createElement("h4", {
    className: SELECTOR + "__count"
  }, countdown));
}
/* Default Props */


Countdown.defaultProps = {
  color: _utils.colors.get('helper'),
  background: 'transparent',
  seconds: 10,
  size: 32,
  strokeWidth: 8,
  onFinishCallback: function onFinishCallback(seconds, log) {
    return log && console.log(LOG_PREFIX, seconds, 'seconds finished;');
  }
};
/* Exporting */

var _default = Countdown;
exports.default = _default;