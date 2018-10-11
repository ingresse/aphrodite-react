"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _constants2 = require("../../constants");

var _Bordered = _interopRequireDefault(require("./Bordered/Bordered"));

var _Regular = _interopRequireDefault(require("./Regular/Regular"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* Component */
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          block = _this$props.block,
          bordered = _this$props.bordered,
          size = _this$props.size,
          styles = _this$props.styles;

      var _styles = Object.assign({}, _constants.BUTTON_STYLES);

      if (block) {
        _styles.display = 'block';
        _styles.width = '100%';
      }

      switch (size) {
        case 'xs':
          _styles.fontSize = '9px';
          _styles.minHeight = '20px';
          _styles.lineHeight = '18px';
          _styles[_constants2.MEDIA_QUERIES.XS] = {
            minHeight: '30px',
            lineHeight: '28px'
          };
          break;

        case 'sm':
          _styles.fontSize = '13px';
          _styles.minHeight = '30px';
          _styles.lineHeight = '28px';
          _styles[_constants2.MEDIA_QUERIES.XS] = {
            minHeight: '40px',
            lineHeight: '38px'
          };
          break;

        default:
          _styles.minHeight = '40px';
          _styles.lineHeight = '38px';
          _styles[_constants2.MEDIA_QUERIES.XS] = {
            minHeight: '50px',
            lineHeight: '48px'
          };
      }

      _styles = Object.assign(_styles, styles);

      if (bordered) {
        return _react.default.createElement(_Bordered.default, _extends({}, this.props, {
          styles: _styles
        }));
      }

      return _react.default.createElement(_Regular.default, _extends({}, this.props, {
        styles: _styles
      }));
    }
  }]);

  return Button;
}(_react.default.Component);
/* Default Properties */


Button.defaultProps = {
  type: 'button',
  disabled: false,
  color: 'primary',
  bordered: false,
  block: false,
  size: ''
};
/* Properties Types */

Button.propTypes = {
  /**
  * Button Type.
  * Button, Reset, Submit
  */
  type: _propTypes.default.string,

  /**
  * Should the Button be disabled?
  */
  disabled: _propTypes.default.bool,

  /**
  * Renders the button using an alternative color.
  * Secondary, Warning, Error, Success
  */
  color: _propTypes.default.string,

  /**
  * Should the Button be bordered?
  */
  bordered: _propTypes.default.bool,

  /**
  * Should the Button be block?
  */
  block: _propTypes.default.bool,

  /**
  * Size of the button. Use the Button's xs or sm.
  */
  size: _propTypes.default.string
};
var _default = Button;
exports.default = _default;