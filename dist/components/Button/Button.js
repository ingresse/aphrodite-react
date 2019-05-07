"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonStyled = _interopRequireDefault(require("./ButtonStyled.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Button = function Button(props) {
  var className = props.className,
      component = props.component;

  if (component) {
    var CustomButton = _ButtonStyled.default.withComponent(component, {
      target: "e1y3cl570"
    });

    return _react.default.createElement(CustomButton, _extends({}, props, {
      className: "aph-btn ".concat(className)
    }));
  }

  return _react.default.createElement(_ButtonStyled.default, _extends({}, props, {
    className: "aph-btn ".concat(className)
  }));
};
/* Default Properties */


Button.defaultProps = {
  type: 'button',
  color: 'secondary',
  radius: '25px',
  className: '',
  margin: null,
  small: false,
  block: false,
  disabled: false,
  component: null
};
/* Properties Types */

Button.propTypes = {
  /**
   * Button Type:
   * "button", "reset" or "submit"
   */
  type: _propTypes.default.string,

  /**
   * Should the Button be disabled?
   */
  disabled: _propTypes.default.bool,

  /**
   * Renders the button using an alternative color:
   * Primary, Warning, Error, Success
   */
  color: _propTypes.default.string,

  /**
   * Customized Border Radius
   */
  radius: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Customized Margin
   */
  margin: _propTypes.default.string,

  /**
   * Should the Button be block?
   */
  block: _propTypes.default.bool,

  /**
   * Alternative button size: small.
   */
  small: _propTypes.default.bool,

  /**
   * Custom Component
   *
   * Example: `Link` from react-router-dom
   */
  component: _propTypes.default.elementType
};
/* Exporting */

var _default = Button;
exports.default = _default;