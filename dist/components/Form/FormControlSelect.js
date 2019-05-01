"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

var _utils = require("../../utils");

var _FormControlInput = _interopRequireDefault(require("./FormControlInput"));

var _IconArrowDownCircle = _interopRequireDefault(require("../Icons/IconArrowDownCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var FormControlSelect = function FormControlSelect(props) {
  var styles = "\n        height: 50px;\n        cursor: pointer;\n\n        ".concat(function (props) {
    return props.styles;
  }, ";\n    ");
  return _react.default.createElement(_FormControlInput.default, _extends({
    icon: "arrow-down"
  }, props, {
    styles: styles,
    tag: "select",
    btn: {
      children: _react.default.createElement(_IconArrowDownCircle.default, {
        size: 10,
        color: _utils.colors.get('black')
      })
    }
  }));
};
/* Exporting */


var _default = FormControlSelect;
exports.default = _default;