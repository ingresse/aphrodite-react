"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

var _IconArrowDownCircle = _interopRequireDefault(require("./IconArrowDownCircle"));

var _IconArrowLeftCircle = _interopRequireDefault(require("./IconArrowLeftCircle"));

var _IconArrowRightCircle = _interopRequireDefault(require("./IconArrowRightCircle"));

var _IconArrowUpCircle = _interopRequireDefault(require("./IconArrowUpCircle"));

var _IconCheck = _interopRequireDefault(require("./IconCheck"));

var _IconCheckCircle = _interopRequireDefault(require("./IconCheckCircle"));

var _IconCheckThin = _interopRequireDefault(require("./IconCheckThin"));

var _IconInfoCircle = _interopRequireDefault(require("./IconInfoCircle"));

var _IconLoading = _interopRequireDefault(require("./IconLoading"));

var _IconPencil = _interopRequireDefault(require("./IconPencil"));

var _IconQuestionCircle = _interopRequireDefault(require("./IconQuestionCircle"));

var _IconTimesCircle = _interopRequireDefault(require("./IconTimesCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Mapper */

/* Should be mapped into 'icons.constants' too */
var ICONS = {
  'arrow-down-circle': _IconArrowDownCircle.default,
  'arrow-left-circle': _IconArrowLeftCircle.default,
  'arrow-right-circle': _IconArrowRightCircle.default,
  'arrow-up-circle': _IconArrowUpCircle.default,
  'check': _IconCheck.default,
  'check-circle': _IconCheckCircle.default,
  'check-thin': _IconCheckThin.default,
  'info-circle': _IconInfoCircle.default,
  'loading': _IconLoading.default,
  'pencil': _IconPencil.default,
  'question-circle': _IconQuestionCircle.default,
  'times-circle': _IconTimesCircle.default
};
/* Component Wrapper styles */

var IconWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('span', {
  target: "e34a6r20"
})(function (props) {
  return {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0
  };
});
/* Component it self */

var Icon = function Icon(props) {
  var ICON = ICONS[props.slug];

  if (!ICON) {
    return null;
  }

  return _react.default.createElement(IconWrapper, {
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, props, {
    color: props.color || _constants.COLORS.PRIMARY,
    className: "aph-icon ".concat(props.className || '')
  })));
};
/* Default Properties */


Icon.defaultProps = {
  slug: undefined,
  size: 20,
  color: _constants.COLORS.PRIMARY,
  width: undefined,
  Height: undefined
};
/* Properties Types */

Icon.propTypes = {
  slug: _propTypes.default.string.isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.string,
  width: _propTypes.default.number,
  height: _propTypes.default.number
};
/* Exporting */

var _default = Icon;
exports.default = _default;