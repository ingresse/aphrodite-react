"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Component Itself */
var Button = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      color = props.color,
      children = props.children,
      component = props.component,
      loading = props.loading;

  var AphButton = _ButtonStyled.default.withComponent(component || 'button', {
    target: "e1y3cl570"
  });

  var childrenRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(140),
      _useState2 = _slicedToArray(_useState, 2),
      childrenWidth = _useState2[0],
      setChildrenWidth = _useState2[1];
  /**
   * Children Did Update
   */


  (0, _react.useEffect)(function () {
    if (!childrenRef || !childrenRef.current || !childrenRef.current.offsetWidth || childrenRef.current.offsetWidth === childrenWidth) {
      return;
    }

    setChildrenWidth(childrenRef.current.offsetWidth);
  }, [children]);
  return _react.default.createElement(AphButton, _extends({}, props, {
    ref: ref,
    className: "aph-btn ".concat(className, " ").concat(loading ? 'aph-btn--loading' : '')
  }), _react.default.createElement(_ButtonItemStyled.default, {
    ref: childrenRef,
    className: "aph-btn__content"
  }, children), _react.default.createElement(_ButtonItemStyled.default, {
    className: "aph-btn__loader",
    childrenWidth: "".concat(childrenWidth, "px")
  }, _react.default.createElement(_.Icon, {
    size: 15,
    slug: "loader",
    color: ['white', 'smoke'].includes(color) ? 'secondary' : 'white'
  })));
});
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