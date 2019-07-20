"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _NumberFormatStyled = _interopRequireDefault(require("./NumberFormatStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component */
var NumberFormat = (0, _react.forwardRef)(function (props, ref) {
  /**
   * Inherit Props
   */
  var className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);
  /**
   * Render
   */


  return _react.default.createElement(_NumberFormatStyled.default, _extends({}, rest, {
    className: "aph-number-format " + (className || ''),
    as: _reactNumberFormat.default,
    ref: ref
  }));
});
/* Default Props */

NumberFormat.defaultProps = {
  thousandSeparator: '.',
  decimalSeparator: ',',
  displayType: 'text',
  value: 0,
  styles: {}
};
/* Properties Types */

NumberFormat.propTypes = {
  thousandSeparator: _propTypes.default.string,
  decimalSeparator: _propTypes.default.string,
  displayType: _propTypes.default.string,
  value: _propTypes.default.number,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting Component */

var _default = NumberFormat;
exports.default = _default;