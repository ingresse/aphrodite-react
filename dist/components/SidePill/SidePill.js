"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SidePillStyled = _interopRequireDefault(require("./SidePillStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var SidePill = (0, _react.memo)(function (props) {
  /**
   * Inherit props
   */
  var className = props.className,
      children = props.children,
      right = props.right,
      hoverable = props.hoverable;
  /**
   * Render
   */

  return _react.default.createElement(_SidePillStyled.default, _extends({}, props, {
    className: "aph-sidepill " + (className || '')
  }), !hoverable ? null : _react.default.createElement("span", {
    className: "aph-sidepill__hoverable " + (right ? 'aph-sidepill__hoverable--right' : '')
  }, hoverable), _react.default.createElement("span", {
    className: "aph-sidepill__content"
  }, children));
});
/* Component Default Properties */

SidePill.defaultProps = {
  right: false
};
/* Component Properties Types */

SidePill.propTypes = {
  right: _propTypes.default.bool
};
/* Exporting */

var _default = SidePill;
exports.default = _default;