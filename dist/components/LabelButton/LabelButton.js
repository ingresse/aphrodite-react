"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Style Wrapper */
var StyledLabelWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "eofkjt00"
})(function (props) {
  return _objectSpread({}, props.styles, {
    position: 'relative'
  });
});
/* Styled Button Label */

var StyledLabelButton = Object.assign(_constants.ANIMATIONS.PULL_UP, _defineProperty({
  borderRadius: '8px',
  paddingRight: '5px',
  paddingLeft: '5px',
  '*': {
    fontSize: '12px',
    lineHeight: '10px',
    margin: '0 0 10px'
  }
}, _constants.MEDIA_QUERIES.XS, {
  minHeight: '38px',
  maxHeight: '40px',
  '*': {
    display: 'none'
  }
}));
/* Styled Input */

var StyledLabelInput =
/*#__PURE__*/
(0, _reactEmotion.default)('input', {
  target: "eofkjt01"
})(function (props) {
  return {
    position: 'absolute',
    opacity: 0,
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:disabled': {
      cursor: 'not-allowed'
    }
  };
});
/* Component it self */

var LabelButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LabelButton, _React$Component);

  /**
   * Component Constructor
   *
   * @param {object} props - Component Inherit Props
   */
  function LabelButton(props) {
    var _this;

    _classCallCheck(this, LabelButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabelButton).call(this, props));
    _this.props = props;
    _this.state = {
      checked: props.checked || false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Handle Input Change
   *
   * @param {object} evt - DOM element click event
   */


  _createClass(LabelButton, [{
    key: "handleChange",
    value: function handleChange(evt) {
      if (!evt || !evt.target) {
        return;
      }

      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      evt.persist();
      this.setState({
        checked: evt.target.checked
      }, function () {
        onChange(evt);
      });
    }
    /**
     * Component Render
     */

  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var labelInputId = "labelBtnInput".concat(props.id);
      var labelDisabled = props.disabled ? true : false;
      return _react.default.createElement(StyledLabelWrapper, {
        styles: {
          display: props.hasOwnProperty('block') ? 'block' : 'inline-block'
        }
      }, _react.default.createElement(StyledLabelInput, {
        type: "checkbox",
        id: labelInputId,
        name: props.name,
        onChange: this.handleChange,
        disabled: labelDisabled,
        value: props.value,
        checked: state.checked
      }), _react.default.createElement(_.Button, {
        type: "button",
        id: "labelBtn".concat(props.id),
        styles: StyledLabelButton,
        disabled: labelDisabled,
        bordered: !state.checked,
        color: props.color,
        block: props.block
      }, props.children));
    }
  }]);

  return LabelButton;
}(_react.default.Component);
/* Default Properties */


LabelButton.defaultProps = {
  id: "random-".concat(Math.random()),
  name: '',
  value: '',
  onChange: function onChange() {}
};
/* Properties Types */

LabelButton.propTypes = {
  /**
  * Should the Input/Button checked?
  */
  checked: _propTypes.default.bool,

  /**
  * Should the Input/Button be disabled?
  */
  disabled: _propTypes.default.bool,

  /**
  * Renders the button using an alternative color.
  * Secondary, Warning, Error, Success
  */
  color: _propTypes.default.string,

  /**
  * Should the Button be block?
  */
  block: _propTypes.default.bool
};
/* Export Component */

var _default = LabelButton;
exports.default = _default;