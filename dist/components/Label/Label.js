"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _P = _interopRequireDefault(require("../Typography/P/P"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
function Label(props) {
  /**
   * Render
   */
  return _react.default.createElement(_P.default, _extends({
    bold: true,
    small: true,
    upper: true,
    margin: "5px 0",
    color: "mercury"
  }, props));
}
/* Exporting */


var _default = Label;
exports.default = _default;