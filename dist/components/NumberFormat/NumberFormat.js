"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* Packages */

/* Component */
var NumberFormat = function NumberFormat(props) {
  return _react.default.createElement(_reactNumberFormat.default, props);
};
/* Default Props */


NumberFormat.defaultProps = {
  thousandSeparator: '.',
  decimalSeparator: ',',
  displayType: 'text',
  value: 0
};
/* Properties Types */

NumberFormat.propTypes = {
  thousandSeparator: _propTypes.default.string,
  decimalSeparator: _propTypes.default.string,
  displayType: _propTypes.default.string,
  value: _propTypes.default.number
};
/* Exporting Component */

var _default = NumberFormat;
exports.default = _default;