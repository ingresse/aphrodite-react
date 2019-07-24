"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _ = require("../");

var _ButtonStyled = _interopRequireDefault(require("./ButtonStyled"));

var _ButtonItemStyled = _interopRequireDefault(require("./ButtonItemStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Button = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      color = props.color,
      children = props.children,
      loading = props.loading,
      disabled = props.disabled;
  var childrenRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(140),
      childrenWidth = _useState[0],
      setChildrenWidth = _useState[1];
  /**
   * Children Did Update
   */


  (0, _react.useEffect)(function () {
    if (typeof loading !== 'boolean' || !childrenRef || !childrenRef.current || !childrenRef.current.offsetWidth || childrenRef.current.offsetWidth === childrenWidth) {
      return;
    }

    setChildrenWidth(childrenRef.current.offsetWidth);
  }, [children]);
  return _react.default.createElement(_ButtonStyled.default, _extends({}, props, {
    ref: ref,
    disabled: disabled || loading,
    className: "aph-btn" + (loading ? ' aph-btn--loading' : '') + " " + className
  }), typeof loading !== 'boolean' ? children : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ButtonItemStyled.default, {
    className: "aph-btn__loader",
    childrenWidth: childrenWidth ? childrenWidth + "px" : null
  }, _react.default.createElement(_.Icon, {
    size: 30,
    slug: "loader",
    color: ['white', 'smoke'].includes(color) ? 'secondary' : 'white'
  })), _react.default.createElement(_ButtonItemStyled.default, {
    ref: childrenRef,
    className: "aph-btn__content"
  }, children)));
});
/* Default Properties */

Button.defaultProps = {
  as: 'button',
  type: 'button',
  role: 'button',
  color: 'secondary',
  className: '',
  margin: null,
  small: false,
  block: false,
  disabled: false,
  loading: undefined,
  styles: {}
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
   * Loading state, replacing text by a donut spinning
   */
  loading: _propTypes.default.bool,

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
  as: _propTypes.default.elementType,

  /**
   * Custom Styles
   */
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Button;
exports.default = _default;