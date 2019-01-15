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
  target: "e1mq6gx80"
})(function (props) {
  return _objectSpread({}, props.styles, {
    borderColor: props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY,
    color: props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY,
    background: 'transparent',
    '&:hover,&:focus,&:active': {
      borderColor: color(props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY).darken().toString(),
      color: color(props.color ? _constants.COLORS[props.color.toUpperCase()] : _constants.COLORS.PRIMARY).darken().toString()
    },
    '&:disabled': {
      cursor: 'not-allowed',
      color: _constants.COLORS.GREY,
      borderColor: _constants.COLORS.GREY
    }
  });
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9Cb3JkZXJlZC9Cb3JkZXJlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3FCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9Cb3JkZXJlZC9Cb3JkZXJlZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmNvbnN0IGNvbG9yID0gcmVxdWlyZSgndGlueWNvbG9yMicpO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlZCAqL1xuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKShwcm9wcyA9PiAoe1xuICAgIC4uLnByb3BzLnN0eWxlcyxcblxuICAgIGJvcmRlckNvbG9yOiAocHJvcHMuY29sb3IgPyBDT0xPUlNbcHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV0gOiBDT0xPUlMuUFJJTUFSWSksXG4gICAgY29sb3IgICAgICA6IChwcm9wcy5jb2xvciA/IENPTE9SU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSA6IENPTE9SUy5QUklNQVJZKSxcbiAgICBiYWNrZ3JvdW5kIDogJ3RyYW5zcGFyZW50JyxcblxuICAgICcmOmhvdmVyLCY6Zm9jdXMsJjphY3RpdmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcihwcm9wcy5jb2xvciA/IENPTE9SU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSA6IENPTE9SUy5QUklNQVJZKS5kYXJrZW4oKS50b1N0cmluZygpLFxuICAgICAgICBjb2xvciAgICAgIDogY29sb3IocHJvcHMuY29sb3IgPyBDT0xPUlNbcHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV0gOiBDT0xPUlMuUFJJTUFSWSkuZGFya2VuKCkudG9TdHJpbmcoKSxcbiAgICB9LFxuXG4gICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGN1cnNvciAgICAgOiAnbm90LWFsbG93ZWQnLFxuICAgICAgICBjb2xvciAgICAgIDogQ09MT1JTLkdSRVksXG4gICAgICAgIGJvcmRlckNvbG9yOiBDT0xPUlMuR1JFWSxcbiAgICB9LFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlcmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3R5bGVkQnV0dG9uIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */");
/* Component */

var Bordered =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bordered, _React$Component);

  function Bordered() {
    _classCallCheck(this, Bordered);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bordered).apply(this, arguments));
  }

  _createClass(Bordered, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledButton, this.props, this.props.children);
    }
  }]);

  return Bordered;
}(_react.default.Component);

exports.default = Bordered;