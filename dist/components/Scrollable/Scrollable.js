"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* Style Wrapper */
var StyledWrapper =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "e19gg4i70"
})(function (props) {
  return _objectSpread({}, props.styles, _defineProperty({
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '-10px',
    marginLeft: '-10px',
    '&:before,&:after': {
      content: '" "',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '15px'
    },
    '&:before': {
      left: 0,
      background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 80%)'
    },
    '&:after': {
      right: 0,
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)'
    },
    '&.scrollable--xs': {
      '&:before,&:after': {
        content: 'initial'
      }
    }
  }, _constants.MEDIA_QUERIES.XS, {
    marginRight: '-20px',
    marginLeft: '-20px',
    '&.scrollable--xs:before,&.scrollable--xs:after': {
      content: '" "'
    }
  }));
});
/* Styled Scroll */

var StyledScrollable =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "e19gg4i71"
})(_defineProperty({
  overflow: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '.scrollable__item': {
    display: 'inline-block',
    margin: '0 10px',
    verticalAlign: 'middle'
  }
}, _constants.MEDIA_QUERIES.XS, {
  textAlign: 'left',
  '.scrollable__item': {
    '&:first-of-type': {
      marginLeft: '20px'
    },
    '&:last-child': {
      marginRight: '20px'
    }
  }
}));
/* Component it self */

var Scrollable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scrollable, _React$Component);

  function Scrollable() {
    _classCallCheck(this, Scrollable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scrollable).apply(this, arguments));
  }

  _createClass(Scrollable, [{
    key: "render",

    /**
     * Component Render
     */
    value: function render() {
      var props = this.props;
      var children = props.children;
      return _react.default.createElement(StyledWrapper, {
        className: (props.className || '') + (props.onlyXS ? ' scrollable--xs' : '')
      }, _react.default.createElement(StyledScrollable, null, children));
    }
  }]);

  return Scrollable;
}(_react.default.Component);
/* Export Component */


var _default = Scrollable;
exports.default = _default;