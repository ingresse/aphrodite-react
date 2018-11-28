"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Component Styles */
var BadgeWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('span', {
  target: "e483s4c0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    display: props.block ? 'block' : 'inline-block',
    minWidth: !isNaN(props.width) ? parseInt(props.width, 10) + _constants.GRID.UNIT : props.width || null,
    padding: '5px 15px',
    margin: 0,
    minHeight: '30px',
    verticalAlign: 'top',
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    textAlign: props.prefix ? 'left' : 'center',
    boxShadow: "0 0 1px 0 ".concat(_constants.COLORS.GET('DARK_BLACK', 0.2)),
    borderRadius: _constants.RADIUS.XS + _constants.GRID.UNIT,
    '&:after': {
      display: 'table',
      clear: 'both'
    }
  }, _constants.MEDIA_QUERIES.LT.SM, {
    display: props.blockXs ? 'block' : null,
    fontSize: '16px',
    lineHeight: '20px',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius: _constants.RADIUS.XXS + _constants.GRID.UNIT
  }), props.styles);
});
/* Component Children Style */

var BadgePrefixWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('span', {
  target: "e483s4c1"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    display: 'inline-block',
    padding: '5px 15px',
    margin: '-5px 10px -5px -15px',
    textAlign: 'center',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  }, _constants.MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 6px',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  }), props.styles);
});
/* Component */

var Badge = function Badge(props) {
  var filled = _constants.COLORS.FILL(props.color);

  var modifier = !props.sm ? {} : {
    minHeight: '20px',
    fontSize: '10px',
    lineHeight: '10px',
    paddingRight: '8px',
    paddingLeft: '8px',
    borderRadius: _constants.RADIUS.XXS + _constants.GRID.UNIT
  };
  var prefix = !props.sm ? {} : _defineProperty({
    paddingRight: '8px',
    paddingLeft: '8px',
    marginLeft: '-8px',
    marginRight: '6px',
    borderRadius: "".concat(_constants.RADIUS.XXS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XXS + _constants.GRID.UNIT)
  }, _constants.MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 8px',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  });

  if (props.color) {
    var toned = _constants.COLORS.TONES[props.color.toUpperCase()];

    if (toned) {
      prefix = Object.assign({}, prefix, {
        backgroundColor: toned
      });
    }
  }

  return _react.default.createElement(BadgeWrapper, _extends({}, props, {
    styles: Object.assign({}, modifier, filled),
    className: "aph-badge ".concat(props.className || '')
  }), !props.prefix ? null : _react.default.createElement(BadgePrefixWrapper, _extends({}, props.prefixProps, {
    styles: Object.assign({}, prefix, props.prefixStyles),
    className: "aph-badge__prefix ".concat(props.prefixClassName || '')
  }), props.prefix), props.children);
};
/* Properties Types */


Badge.propTypes = {
  block: _propTypes.default.bool,
  blockXs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  width: _propTypes.default.any,
  styles: _propTypes.default.object,
  className: _propTypes.default.string,
  prefixStyles: _propTypes.default.object,
  prefixClassName: _propTypes.default.string
};
/* Exporting */

var _default = Badge;
exports.default = _default;