"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Styles */
var ActionBarStyled = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ef9z5pb0"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    minHeight: _constants.SIZES.ACTION_BAR_HEIGHT,
    zIndex: _constants.ZINDEX.ACTION_BAR,
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '20px 0',
    backgroundColor: _utils.colors.getFromTheme(props, 'white'),
    boxShadow: "0 0 4px 0 " + _utils.colors.get('black', null, 0.2),
    transform: "translateY(110%)",
    willChange: 'transform',
    transition: 'transform 0.3s ease-out 0s, background-color 0.2s linear',
    '&.aph-action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IFNJWkVTLCBaSU5ERVggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZXMgKi9cbmNvbnN0IEFjdGlvbkJhclN0eWxlZCA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcblxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6IFNJWkVTLkFDVElPTl9CQVJfSEVJR0hULFxuXG4gICAgekluZGV4ICAgOiBaSU5ERVguQUNUSU9OX0JBUixcbiAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXG4gICAgcmlnaHQgICAgOiAwLFxuICAgIGJvdHRvbSAgIDogMCxcbiAgICBsZWZ0ICAgICA6IDAsXG4gICAgcGFkZGluZyAgOiAnMjBweCAwJyxcblxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3doaXRlJyksXG4gICAgYm94U2hhZG93ICAgICAgOiBgMCAwIDRweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCBudWxsLCAwLjIpfWAsXG5cbiAgICB0cmFuc2Zvcm0gOiBgdHJhbnNsYXRlWSgxMTAlKWAsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2Utb3V0IDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyJyxcblxuICAgICcmLmFwaC1hY3Rpb24tYmFyLS12aXNpYmxlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEFjdGlvbkJhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdmlzaWJsZSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QWN0aW9uQmFyU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1hY3Rpb24tYmFyJHt2aXNpYmxlID8gJyBhcGgtYWN0aW9uLWJhci0tdmlzaWJsZScgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BY3Rpb25CYXJTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkFjdGlvbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgc3R5bGVzIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY3Rpb25CYXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuYW55LFxuICAgIHZpc2libGUgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXMgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJhcjtcbiJdfQ== */");
/* Component */

var ActionBar = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children,
      styles = props.styles,
      visible = props.visible;
  return _react.default.createElement(ActionBarStyled, _extends({}, props, {
    ref: ref,
    className: "aph-action-bar" + (visible ? ' aph-action-bar--visible' : '') + " " + (className || ''),
    styles: styles
  }), children);
});
/* Default Properties */

ActionBar.defaultProps = {
  visible: false,
  styles: {}
};
/* Properties Types */

ActionBar.propTypes = {
  children: _propTypes.default.any,
  visible: _propTypes.default.bool,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = ActionBar;
exports.default = _default;