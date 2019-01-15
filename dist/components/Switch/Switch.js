"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = require('tinycolor2');
/* Constants */


/* Component */
var StyledSwitch = (
/*#__PURE__*/
0, _styledBase.default)('label', {
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaC9Td2l0Y2guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdxQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Td2l0Y2gvU3dpdGNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnOyBpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmNvbnN0IGNvbG9yID0gcmVxdWlyZSgndGlueWNvbG9yMicpO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgU3R5bGVkU3dpdGNoID0gc3R5bGVkKCdsYWJlbCcpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgcG9zaXRpb24gIDogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5ICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICBtaW5IZWlnaHQgOiBgJHtwcm9wcy54cyA/ICcyMHB4JyA6ICczMHB4J31gLFxuICAgIG1hcmdpbiAgICA6ICcwJyxcbiAgICBwYWRkaW5nICAgOiBgJHtwcm9wcy5yaWdodCA/ICc2cHggNjBweCA2cHggMCcgOiAnNnB4IDAgNnB4IDYwcHgnfWAsXG5cbiAgICBmb250U2l6ZSAgICAgOiAnMTNweCcsXG4gICAgZm9udFdlaWdodCAgIDogJzUwMCcsXG4gICAgbGluZUhlaWdodCAgIDogJzIuNScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG5cbiAgICBjb2xvciA6IENPTE9SUy5EQVJLX0dSRVksXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogJ25vLW9wZW4tcXVvdGUnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG5cbiAgICAnLmFwaC1zd2l0Y2gtY2hlY2snOiB7XG4gICAgICAgIGRpc3BsYXkgOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcCAgICAgOiAnLTFweCcsXG4gICAgICAgIG9wYWNpdHkgOiAnMCcsXG4gICAgICAgIHJpZ2h0ICAgOiBgJHtwcm9wcy5yaWdodCA/IDAgOiAnYXV0byd9YCxcbiAgICAgICAgbGVmdCAgICA6IGAke3Byb3BzLnJpZ2h0ID8gJ2F1dG8haW1wb3J0YW50JyA6IDB9YCxcblxuICAgICAgICAnOmNoZWNrZWQnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5HUkVFTixcblxuICAgICAgICAgICAgJzpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgJHtwcm9wcy54cyA/ICd0cmFuc2xhdGVYKDEzcHgpJyA6ICd0cmFuc2xhdGVYKDIwcHgpJ31gLFxuXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IENPTE9SUy5HUkVFTixcbiAgICAgICAgICAgICAgICBib3hTaGFkb3cgIDogJzFweCAwIDJweCAtMXB4IHJnYmEoNDUsNDUsNDUsLjI1KScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgICcuYXBoLXN3aXRjaC1zbGlkZSc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG5cbiAgICAgICAgdG9wICAgOiAnNDklJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgIHJpZ2h0ICAgOiBgJHtwcm9wcy5yaWdodCA/IDAgOiAnYXV0byd9YCxcbiAgICAgICAgbGVmdCAgICA6IGAke3Byb3BzLnJpZ2h0ID8gJ2F1dG8haW1wb3J0YW50JyA6IDB9YCxcblxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC00OSUpJyxcblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmRpc2FibGVkID8gQ09MT1JTLkxJR0hUX0dSRVkgOiBDT0xPUlMuR1JFWSxcblxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuXG4gICAgICAgIHRyYW5zaXRpb246ICcuMXMnLFxuXG4gICAgICAgICc6YmVmb3JlJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBjb250ZW50IDogJ25vLW9wZW4tcXVvdGUnLFxuXG4gICAgICAgICAgICB3aWR0aCA6IGAke3Byb3BzLnhzID8gJzE4cHgnIDogJzI4cHgnfWAsXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3Byb3BzLnhzID8gJzE4cHgnIDogJzI4cHgnfWAsXG4gICAgICAgICAgICB0b3AgICA6ICcwJyxcbiAgICAgICAgICAgIGxlZnQgIDogJzAnLFxuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmRpc2FibGVkID8gQ09MT1JTLlNNT0tFIDogQ09MT1JTLldISVRFLFxuICAgICAgICAgICAgYm9yZGVyICAgICAgICAgOiBgMXB4IHNvbGlkICR7cHJvcHMuZGlzYWJsZWQgPyBDT0xPUlMuTElHSFRfR1JFWSA6IENPTE9SUy5HUkVZfWAsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXMgICA6ICczcHgnLFxuICAgICAgICAgICAgYm94U2hhZG93ICAgICAgOiBgMXB4IDAgMnB4IC0xcHggcmdiYSggJHtjb2xvcihDT0xPUlMuQkxBQ0spLnRvU3RyaW5nfSwuMjUpYCxcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJy4xcycsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgJ2lucHV0OmNoZWNrZWQgKyAuYXBoLXN3aXRjaC1zbGlkZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGNvbG9yKENPTE9SUy5HUkVFTikubGlnaHRlbigzMCkudG9TdHJpbmcoKSA6IENPTE9SUy5HUkVFTixcblxuICAgICAgICAnOmJlZm9yZSc6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYCR7cHJvcHMueHMgPyAndHJhbnNsYXRlWCgxM3B4KScgOiAndHJhbnNsYXRlWCgyMHB4KSd9YCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGNvbG9yKENPTE9SUy5HUkVFTikubGlnaHRlbigzMCkudG9TdHJpbmcoKSA6IENPTE9SUy5HUkVFTixcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAnLmFwaC1zd2l0Y2gtY2hlY2ssIC5hcGgtc3dpdGNoLXNsaWRlJzoge1xuICAgICAgICB3aWR0aCA6IGAke3Byb3BzLnhzID8gJzMzcHgnIDogJzUwcHgnfWAsXG4gICAgICAgIGhlaWdodDogYCR7cHJvcHMueHMgPyAnMjBweCcgOiAnMzBweCd9YCxcbiAgICAgICAgbGVmdCAgOiAnMCcsXG5cbiAgICB9LFxufSkpO1xuXG5cbmNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgX3Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBfcHJvcHMub25DaGFuZ2U7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZWRTd2l0Y2ggaHRtbEZvcj17dGhpcy5wcm9wcy5pbnB1dElkfSB7Li4uX3Byb3BzfSBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMucmlnaHQgJiYgJ2FwaC1zd2l0Y2gtcmlnaHQnfSAkeyB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyB9YH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1zd2l0Y2gtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pbnB1dElkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBoLXN3aXRjaC1zbGlkZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L1N0eWxlZFN3aXRjaD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQgOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaW5wdXRJZCA6IG51bGwsXG4gICAgbWVzc2FnZSA6ICcnLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIHJpZ2h0ICAgOiBmYWxzZSxcbiAgICB4cyAgICAgIDogZmFsc2UsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuXG4gICAgLyoqXG4gICAgKiBTaG91bGQgY2FsbCB3aGVuIGlucHV0IGNoYW5nZVxuICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgKiBTaG91bGQgdGhlIFN3aXRjaCBiZSBjaGVja2VkP1xuICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAqIFNob3VsZCB0aGUgU3dpdGNoIGJlIGRpc2FibGVkP1xuICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgKiBBZGQgYW4gaWQgZm9yIGlucHV0XG4gICAgKi9cbiAgICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgKiBBZGQgYSBtZXNzYWdlIHdpdGggc3dpdGNoXG4gICAgKi9cbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgKiBTaG91bGQgdGhlIFN3aXRjaCByZW5kZXIgaW4gcmlnaCBzaWRlP1xuICAgICovXG4gICAgcmlnaHQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgKiBTaG91bGQgdGhlIFN3aXRjaCByZW5kZXIgc21hbGwgc2l6ZT9cbiAgICAqL1xuICAgIHhzOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiJdfQ== */");

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