"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../constants");

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

var color = require('tinycolor2');
/* Constants */


/* Styled */
var StyledButton = (
/*#__PURE__*/
0, _styledBase.default)('button', {
  target: "e1bfgx1g0"
})(function (props) {
  return _objectSpread({}, props.styles, {
    color: props.color && props.color !== 'white' ? _constants.COLORS.WHITE : _constants.COLORS.BLACK,
    background: props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY,
    borderColor: props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY,
    '&:hover,&:focus,&:active': {
      borderColor: color(props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY).darken(5).toString(),
      background: color(props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY).darken(5).toString()
    },
    '&:disabled': {
      cursor: 'not-allowed',
      color: _constants.COLORS.GREY,
      background: _constants.COLORS.LIGHT_GREY,
      borderColor: _constants.COLORS.LIGHT_GREY
    }
  });
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9SZWd1bGFyL1JlZ3VsYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNxQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24vUmVndWxhci9SZWd1bGFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuY29uc3QgY29sb3IgPSByZXF1aXJlKCd0aW55Y29sb3IyJyk7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGVkICovXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgY29sb3IgICAgICA6IChwcm9wcy5jb2xvciAmJiBwcm9wcy5jb2xvciAhPT0gJ3doaXRlJyA/IENPTE9SUy5XSElURSA6IENPTE9SUy5CTEFDSyksXG4gICAgYmFja2dyb3VuZCA6IChwcm9wcy5jb2xvciA/IENPTE9SU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSA6IENPTE9SUy5QUklNQVJZKSxcbiAgICBib3JkZXJDb2xvcjogKHByb3BzLmNvbG9yID8gQ09MT1JTW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldIDogQ09MT1JTLlBSSU1BUlkpLFxuXG4gICAgJyY6aG92ZXIsJjpmb2N1cywmOmFjdGl2ZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yKHByb3BzLmNvbG9yID8gQ09MT1JTW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldIDogQ09MT1JTLlBSSU1BUlkpLmRhcmtlbig1KS50b1N0cmluZygpLFxuICAgICAgICBiYWNrZ3JvdW5kIDogY29sb3IocHJvcHMuY29sb3IgPyBDT0xPUlNbcHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV0gOiBDT0xPUlMuUFJJTUFSWSkuZGFya2VuKDUpLnRvU3RyaW5nKCksXG4gICAgfSxcblxuICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBjdXJzb3IgICAgIDogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgY29sb3IgICAgICA6IENPTE9SUy5HUkVZLFxuICAgICAgICBiYWNrZ3JvdW5kIDogQ09MT1JTLkxJR0hUX0dSRVksXG4gICAgICAgIGJvcmRlckNvbG9yOiBDT0xPUlMuTElHSFRfR1JFWSxcbiAgICB9LFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ3VsYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9TdHlsZWRCdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */");
/* Component */

var Regular =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Regular, _React$Component);

  function Regular() {
    _classCallCheck(this, Regular);

    return _possibleConstructorReturn(this, _getPrototypeOf(Regular).apply(this, arguments));
  }

  _createClass(Regular, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledButton, this.props, this.props.children);
    }
  }]);

  return Regular;
}(_react.default.Component);

exports.default = Regular;