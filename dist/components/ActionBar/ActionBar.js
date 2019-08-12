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
    zIndex: 100,
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '20px 0',
    background: _utils.colors.get('white'),
    boxShadow: "0 0 4px 0 " + _utils.colors.get('black', null, 0.2),
    transform: "translateY(110%)",
    willChange: 'transform',
    transition: '-webkit-transform 0.3s ease-out 0s',
    '&.aph-action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgTUVESUFfUVVFUklFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZXMgKi9cbmNvbnN0IEFjdGlvbkJhclN0eWxlZCA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcblxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6IFNJWkVTLkFDVElPTl9CQVJfSEVJR0hULFxuXG4gICAgekluZGV4ICAgOiAxMDAsXG4gICAgcG9zaXRpb24gOiAnZml4ZWQnLFxuICAgIHJpZ2h0ICAgIDogMCxcbiAgICBib3R0b20gICA6IDAsXG4gICAgbGVmdCAgICAgOiAwLFxuICAgIHBhZGRpbmcgIDogJzIwcHggMCcsXG5cbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZ2V0KCd3aGl0ZScpLFxuICAgIGJveFNoYWRvdyA6IGAwIDAgNHB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsIG51bGwsIDAuMil9YCxcblxuICAgIHRyYW5zZm9ybSA6IGB0cmFuc2xhdGVZKDExMCUpYCxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICB0cmFuc2l0aW9uOiAnLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCAwcycsXG5cbiAgICAnJi5hcGgtYWN0aW9uLWJhci0tdmlzaWJsZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBBY3Rpb25CYXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHZpc2libGUsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFjdGlvbkJhclN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYWN0aW9uLWJhciR7dmlzaWJsZSA/ICcgYXBoLWFjdGlvbi1iYXItLXZpc2libGUnIDogJyd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICBzdHlsZXM9e3N0eWxlc30+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQWN0aW9uQmFyU3R5bGVkPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5BY3Rpb25CYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIHN0eWxlcyA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWN0aW9uQmFyLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogcHJvcFR5cGVzLmFueSxcbiAgICB2aXNpYmxlIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CYXI7XG4iXX0= */");
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