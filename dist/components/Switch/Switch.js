"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = require('tinycolor2');
/* Constants */


/* Component */
var StyledSwitch =
/*#__PURE__*/
(0, _reactEmotion.default)('label', {
  target: "e1w6oslt0"
})(function (props) {
  return _objectSpread({}, props.styles, {
    position: 'relative',
    display: 'inline-block',
    minHeight: "".concat(props.xs ? '20px' : '30px'),
    margin: '0',
    padding: "".concat(props.right ? '6px 60px 6px 0' : '6px 0 6px 60px'),
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '2.5',
    textTransform: 'uppercase',
    color: _constants.COLORS.DARK_GREY,
    cursor: 'pointer',
    '&:after': {
      content: 'no-open-quote',
      display: 'block'
    },
    '.aph-switch-check': {
      display: 'inline-block',
      position: 'absolute',
      top: '-1px',
      opacity: '0',
      right: "".concat(props.right ? 0 : 'auto'),
      left: "".concat(props.right ? 'auto!important' : 0),
      ':checked': {
        backgroundColor: _constants.COLORS.GREEN,
        ':before': {
          transform: "".concat(props.xs ? 'translateX(13px)' : 'translateX(20px)'),
          borderColor: _constants.COLORS.GREEN,
          boxShadow: '1px 0 2px -1px rgba(45,45,45,.25)'
        }
      }
    },
    '.aph-switch-slide': {
      position: 'absolute',
      cursor: "".concat(props.disabled ? 'not-allowed' : 'pointer'),
      top: '49%',
      bottom: '0',
      right: "".concat(props.right ? 0 : 'auto'),
      left: "".concat(props.right ? 'auto!important' : 0),
      transform: 'translateY(-49%)',
      backgroundColor: props.disabled ? _constants.COLORS.LIGHT_GREY : _constants.COLORS.GREY,
      borderRadius: '2px',
      transition: '.1s',
      ':before': {
        position: 'absolute',
        content: 'no-open-quote',
        width: "".concat(props.xs ? '18px' : '28px'),
        height: "".concat(props.xs ? '18px' : '28px'),
        top: '0',
        left: '0',
        backgroundColor: props.disabled ? _constants.COLORS.SMOKE : _constants.COLORS.WHITE,
        border: "1px solid ".concat(props.disabled ? _constants.COLORS.LIGHT_GREY : _constants.COLORS.GREY),
        borderRadius: '3px',
        boxShadow: "1px 0 2px -1px rgba( ".concat(color(_constants.COLORS.BLACK).toString, ",.25)"),
        transition: '.1s'
      }
    },
    'input:checked + .aph-switch-slide': {
      backgroundColor: props.disabled ? color(_constants.COLORS.GREEN).lighten(30).toString() : _constants.COLORS.GREEN,
      ':before': {
        transform: "".concat(props.xs ? 'translateX(13px)' : 'translateX(20px)'),
        borderColor: props.disabled ? color(_constants.COLORS.GREEN).lighten(30).toString() : _constants.COLORS.GREEN
      }
    },
    '.aph-switch-check, .aph-switch-slide': {
      width: "".concat(props.xs ? '33px' : '50px'),
      height: "".concat(props.xs ? '20px' : '30px'),
      left: '0'
    }
  });
});

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));
    _this.props = props;
    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _props = Object.assign({}, this.props);

      delete _props.onChange;
      return _react.default.createElement(StyledSwitch, _extends({
        htmlFor: this.props.inputId
      }, _props, {
        className: "".concat(this.props.right && 'aph-switch-right', " ").concat(this.props.className || '')
      }), _react.default.createElement("input", {
        className: "aph-switch-check",
        id: this.props.inputId,
        type: "checkbox",
        defaultChecked: this.props.checked,
        checked: this.props.checked,
        onChange: this.props.onChange,
        disabled: this.props.disabled
      }), _react.default.createElement("div", {
        className: "aph-switch-slide"
      }), this.props.message);
    }
  }]);

  return Switch;
}(_react.default.Component);
/* Default Properties */


Switch.defaultProps = {
  checked: false,
  disabled: false,
  inputId: null,
  message: '',
  onChange: null,
  right: false,
  xs: false
};
/* Properties Types */

Switch.propTypes = {
  /**
  * Should call when input change
  */
  onChange: _propTypes.default.func,

  /**
  * Should the Switch be checked?
  */
  checked: _propTypes.default.bool,

  /**
  * Should the Switch be disabled?
  */
  disabled: _propTypes.default.bool,

  /**
  * Add an id for input
  */
  inputId: _propTypes.default.string,

  /**
  * Add a message with switch
  */
  message: _propTypes.default.string,

  /**
  * Should the Switch render in righ side?
  */
  right: _propTypes.default.bool,

  /**
  * Should the Switch render small size?
  */
  xs: _propTypes.default.bool
};
var _default = Switch;
exports.default = _default;