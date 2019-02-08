"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Styles */
var ActionBarStyled = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ef9z5pb0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    minHeight: '80px',
    zIndex: 100,
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '20px 0',
    background: _constants.COLORS.WHITE,
    boxShadow: "0 0 4px 0 ".concat(_constants.COLORS.GET('BLACK', 0.2)),
    transform: "translateY(160px)",
    willChange: 'transform',
    transition: '-webkit-transform 0.3s ease-out 0s',
    '&.action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, _constants.MEDIA_QUERIES.LT.SM, {
    padding: '15px 0'
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZXMgKi9cbmNvbnN0IEFjdGlvbkJhclN0eWxlZCA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcblxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICc4MHB4JyxcblxuICAgIHpJbmRleCAgIDogMTAwLFxuICAgIHBvc2l0aW9uIDogJ2ZpeGVkJyxcbiAgICByaWdodCAgICA6IDAsXG4gICAgYm90dG9tICAgOiAwLFxuICAgIGxlZnQgICAgIDogMCxcbiAgICBwYWRkaW5nICA6ICcyMHB4IDAnLFxuXG4gICAgYmFja2dyb3VuZDogQ09MT1JTLldISVRFLFxuICAgIGJveFNoYWRvdyA6IGAwIDAgNHB4IDAgJHtDT0xPUlMuR0VUKCdCTEFDSycsIDAuMil9YCxcblxuICAgIHRyYW5zZm9ybSA6IGB0cmFuc2xhdGVZKDE2MHB4KWAsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgdHJhbnNpdGlvbjogJy13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQgMHMnLFxuXG4gICAgJyYuYWN0aW9uLWJhci0tdmlzaWJsZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nOiAnMTVweCAwJyxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEFjdGlvbkJhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB2aXNpYmxlLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBY3Rpb25CYXJTdHlsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFjdGlvbi1iYXIgJHt2aXNpYmxlID8gJ2FjdGlvbi1iYXItLXZpc2libGUnIDogJyd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICBzdHlsZXM9e3N0eWxlc30+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQWN0aW9uQmFyU3R5bGVkPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkFjdGlvbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzIDoge30sXG4gICAgdmlzaWJsZTogZmFsc2UsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY3Rpb25CYXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuYW55LFxuICAgIHN0eWxlcyAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHZpc2libGUgOiBwcm9wVHlwZXMuYm9vbCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQmFyO1xuIl19 */");
/* Component */

var ActionBar = function ActionBar(props) {
  var className = props.className,
      children = props.children,
      styles = props.styles,
      visible = props.visible;
  return _react.default.createElement(ActionBarStyled, {
    className: "action-bar ".concat(visible ? 'action-bar--visible' : '', " ").concat(className || ''),
    styles: styles
  }, children);
};
/* Default Properties */


ActionBar.defaultProps = {
  styles: {},
  visible: false
};
/* Properties Types */

ActionBar.propTypes = {
  children: _propTypes.default.any,
  styles: _propTypes.default.object,
  visible: _propTypes.default.bool
};
/* Exporting */

var _default = ActionBar;
exports.default = _default;