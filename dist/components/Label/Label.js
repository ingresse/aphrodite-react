"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _P = _interopRequireDefault(require("../Typography/P/P"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
function Label(props) {
  /**
   * Inherit props
   */
  var className = props.className,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["className", "styles"]);
  /**
   * Render
   */


  return _react.default.createElement(_P.default, _extends({
    bold: true,
    small: true,
    upper: true,
    margin: "5px 0",
    color: "helper",
    as: "label",
    className: "aph-label " + (className || ''),
    styles: Object.assign({
      display: 'block'
    }, styles || {})
  }, rest));
}
/* Exporting */


var _default = Label;
exports.default = _default;