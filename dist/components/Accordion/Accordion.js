"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _ref = function _ref(props) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: 0
  };
};

/* Component */
var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  /**
   * Constructor
   *
   * @param {object} props - react component default props
   */
  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.props = props;
    _this.state = {
      opened: props.opened || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Toggle childrens visibility
   */


  _createClass(Accordion, [{
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      var toggleCallback = this.props.toggleCallback;
      this.setState({
        opened: !this.state.opened
      }, function () {
        if (!toggleCallback) {
          return;
        }

        var opened = _this2.state.opened;
        toggleCallback(opened);
      });
    }
    /* Render */

  }, {
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      var _this$props = this.props,
          header = _this$props.header,
          headerDark = _this$props.headerDark,
          headerProps = _this$props.headerProps,
          headerStyles = _this$props.headerStyles,
          children = _this$props.children,
          className = _this$props.className,
          styles = _this$props.styles,
          iconSize = _this$props.iconSize,
          iconProps = _this$props.iconProps,
          iconStyles = _this$props.iconStyles;
      /* Component Sizes */

      var _iconSize = iconSize || (window.innerWidth > _constants.SCREEN_SIZES.SM ? 18 : 30);

      var iconColumn = _iconSize + _constants.GRID.PADDING / 2 + _constants.GRID.UNIT;
      /* Component Styles */

      var AphAccordion =
      /*#__PURE__*/
      (0, _reactEmotion.default)('div', {
        target: "e869uf0"
      })(function (props) {
        return _objectSpread({
          boxSizing: 'border-box',
          display: 'block',
          fontSize: _constants.SIZES.MD.FONT_SIZE,
          lineHeight: _constants.SIZES.MD.LINE_HEIGHT
        }, styles);
      });
      /* Component Header Styles */

      var Header =
      /*#__PURE__*/
      (0, _reactEmotion.default)('div', {
        target: "e869uf1"
      })(_ref);
      /* Component Header Column Styles */

      var columnStyles = {
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'middle'
      };
      /* Component Header Icon Column Styles */

      var IconColumn =
      /*#__PURE__*/
      (0, _reactEmotion.default)('div', {
        target: "e869uf2"
      })(function (props) {
        return _objectSpread({}, columnStyles, {
          width: iconColumn,
          lineHeight: 0
        });
      });
      /* Component Header Content Column Styles */

      var ContentColumn =
      /*#__PURE__*/
      (0, _reactEmotion.default)('div', {
        target: "e869uf3"
      })(function (props) {
        return _objectSpread({}, columnStyles, {
          width: "calc(100% - ".concat(iconColumn, ")"),
          lineHeight: '20px'
        });
      });
      return _react.default.createElement(AphAccordion, {
        className: "aph-accordion ".concat(className)
      }, _react.default.createElement(_.ListItem, _extends({}, headerProps, {
        header: headerDark ? true : false,
        styles: _objectSpread({
          cursor: 'pointer',
          paddingRight: '15px',
          paddingLeft: '15px'
        }, headerStyles),
        onClick: this.toggle,
        className: "aph-accordion__header"
      }), children ? _react.default.createElement(Header, {
        className: "aph-accordion__header-row"
      }, _react.default.createElement(IconColumn, {
        className: "aph-accordion__header__col-icon"
      }, _react.default.createElement(_.Icon, _extends({
        size: _iconSize,
        slug: "arrow-".concat(opened ? 'up' : 'down', "-circle")
      }, iconProps, {
        styles: iconStyles
      }))), _react.default.createElement(ContentColumn, {
        className: "aph-accordion__header__col-content"
      }, header)) : header), opened && children);
    }
  }]);

  return Accordion;
}(_react.Component);

;
/* Default Props */

Accordion.defaultProps = {
  opened: false,
  header: 'Accordion Header',
  className: ''
};
/* Properties Types */

Accordion.propTypes = {
  opened: _propTypes.default.bool,
  header: _propTypes.default.any,
  headerDark: _propTypes.default.bool,
  headerStyles: _propTypes.default.object,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  styles: _propTypes.default.object,
  iconSize: _propTypes.default.number,
  iconStyles: _propTypes.default.object,
  toggleCallback: _propTypes.default.func
};
/* Exporting */

var _default = Accordion;
exports.default = _default;