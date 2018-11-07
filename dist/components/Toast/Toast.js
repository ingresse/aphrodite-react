"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _IconClose = _interopRequireDefault(require("../IconClose/IconClose"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var StyledWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "ekba7oa0"
})(function (props) {
  return _objectSpread({}, props.styles, _defineProperty({
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: 'rgba(45,45,45,0.95)',
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
    color: 'white',
    bottom: '0px',
    display: 'flex',
    minHeight: '50px!important',
    maxHeight: '50px!important',
    minWidth: '380px!important',
    maxWidth: '380px!important',
    justifyContent: 'space-between',
    top: '10%',
    right: '10%',
    padding: '0 20px',
    position: 'fixed',
    transform: 'translateX(260%)',
    transition: 'transform .35s ease',
    zIndex: '2000',
    '.toast__link': {
      cursor: 'pointer'
    },
    '&.visible': {
      transform: 'translateX(40%)'
    },
    '&.static': {
      position: 'static'
    }
  }, _constants.MEDIA_QUERIES.XS, {
    '&.visible': {
      transform: 'translateX(10%)'
    }
  }));
});
/* Component it self */

var Toast =
/*#__PURE__*/
function (_Component) {
  _inherits(Toast, _Component);

  /**
   * Constructor
   *
   * @param {object} props
   */
  function Toast(props) {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, props));
    _this.props = props;
    _this.state = {
      close: false,
      visible: false
    };
    _this.setTimeout = '';
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Show the toast.
   *
   * @param {object} props
   * @param {object} state - Current state data
   *
   * @return {Object}
   */


  _createClass(Toast, [{
    key: "componentDidUpdate",

    /**
     * Update the toast state.
     *
     * @param {object} prevProps - The previous props
     * @param {object} prevState - The previous state
     */
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!this.state.visible && prevState.close) {
        this.setState(_objectSpread({}, this.state, {
          close: false
        }));
      }

      if (this.state.visible && !this.state.close) {
        this.setTimeout = setTimeout(function () {
          _this2.handleClose();
        }, prevProps.timeout);
      }
    }
    /**
     * Close the toast.
     *
     * @param {object} evt - Event DOM.
     */

  }, {
    key: "handleClose",
    value: function handleClose(evt) {
      var _this3 = this;

      if (evt) {
        evt.preventDefault();
      }

      this.setState({
        visible: false,
        close: true
      }, function () {
        clearTimeout(_this3.setTimeout);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledWrapper, {
        className: "toast ".concat(this.props.className || '', " ").concat(this.state.visible && 'visible')
      }, _react.default.createElement("p", {
        className: "aph font-weight-500"
      }, this.props.message), _react.default.createElement("span", {
        className: "toast__link",
        onClick: this.handleClose
      }, _react.default.createElement(_IconClose.default, null)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.visible !== state.visible && !state.close) {
        return {
          visible: props.visible
        };
      }

      return null;
    }
  }]);

  return Toast;
}(_react.Component);
/* Default Properties */


Toast.defaultProps = {
  className: '',
  message: '',
  timeout: 3000,
  visible: false
  /* Properties Types */

};
Toast.propTypes = {
  /**
  * Toast Messager.
  */
  message: _propTypes.default.string,

  /**
  * Toast timeout. Default 3000ms
  */
  timeout: _propTypes.default.number,

  /**
   * Show/Hide the Toast.
  */
  visible: _propTypes.default.bool
}; // Polyfill the component to work with older versions of React

(0, _reactLifecyclesCompat.polyfill)(Toast);
/* Export Component */

var _default = Toast;
exports.default = _default;