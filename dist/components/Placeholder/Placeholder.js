"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = require('tinycolor2');
/* Constants */


var _ref = "0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}";

/* Component it self */
var Placeholder = function Placeholder(props) {
  var bgPlaceholder =
  /*#__PURE__*/
  (0, _reactEmotion.keyframes)(_ref);
  var StyledPlaceholder =
  /*#__PURE__*/
  (0, _reactEmotion.default)('div', {
    target: "ejqn05n0"
  })(_objectSpread({
    fontSize: '0px',
    lineHeight: '0px'
  }, props.styles, {
    display: "".concat(props.block ? 'block' : 'inline-block'),
    width: "".concat(props.block && props.width ? props.width + 'px' : '100%'),
    maxWidth: "".concat(props.width ? props.width + 'px' : '100%'),
    minHeight: "".concat(props.height, "px"),
    border: "".concat(props.border),
    borderRadius: "".concat(props.radius, "px"),
    color: _constants.COLORS.LIGHT_GREY,
    background: "linear-gradient(90deg, ".concat(color(_constants.COLORS.SMOKE).toString(), ", ").concat(color(_constants.COLORS.SMOKE).darken(4).toString(), ")"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgPlaceholder, " .9s ease infinite"),
    '.aph-placeholder': {
      background: "".concat(color(_constants.COLORS.LIGHT_GREY).lighten(8).toString()),
      backgroundSize: '200% 100%'
    }
  }));

  var _props = Object.assign({}, props);

  delete _props.styles;
  return _react.default.createElement(StyledPlaceholder, _extends({}, _props, {
    className: "aph-placeholder ".concat(props.className || '')
  }), props.children);
};
/* Default Properties */


Placeholder.defaultProps = {
  block: false,
  height: 20,
  radius: 4,
  styles: {}
};
/* Properties Types */

Placeholder.propTypes = {
  block: _propTypes.default.bool,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  radius: _propTypes.default.number,
  style: _propTypes.default.object
};
/* Exporting Component */

var _default = Placeholder;
exports.default = _default;