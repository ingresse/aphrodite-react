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
    backgroundColor: _utils.colors.getFromTheme(props, 'inverse'),
    boxShadow: "0 0 4px 0 " + _utils.colors.getFromTheme(props, 'shadow'),
    transform: "translateY(110%)",
    willChange: 'transform',
    transition: 'transform 0.3s ease-out 0s, background-color 0.2s linear',
    '&.aph-action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IFNJWkVTLCBaSU5ERVggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZXMgKi9cbmNvbnN0IEFjdGlvbkJhclN0eWxlZCA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcblxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6IFNJWkVTLkFDVElPTl9CQVJfSEVJR0hULFxuXG4gICAgekluZGV4ICAgOiBaSU5ERVguQUNUSU9OX0JBUixcbiAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXG4gICAgcmlnaHQgICAgOiAwLFxuICAgIGJvdHRvbSAgIDogMCxcbiAgICBsZWZ0ICAgICA6IDAsXG4gICAgcGFkZGluZyAgOiAnMjBweCAwJyxcblxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKSxcbiAgICBib3hTaGFkb3cgICAgICA6IGAwIDAgNHB4IDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2hhZG93Jyl9YCxcblxuICAgIHRyYW5zZm9ybSA6IGB0cmFuc2xhdGVZKDExMCUpYCxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQgMHMsIGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXInLFxuXG4gICAgJyYuYXBoLWFjdGlvbi1iYXItLXZpc2libGUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgQWN0aW9uQmFyID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB2aXNpYmxlLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBY3Rpb25CYXJTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWFjdGlvbi1iYXIke3Zpc2libGUgPyAnIGFwaC1hY3Rpb24tYmFyLS12aXNpYmxlJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FjdGlvbkJhclN0eWxlZD5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQWN0aW9uQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBzdHlsZXMgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkFjdGlvbkJhci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IHByb3BUeXBlcy5hbnksXG4gICAgdmlzaWJsZSA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQmFyO1xuIl19 */");
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