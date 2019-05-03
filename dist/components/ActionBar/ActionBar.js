"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGVzICovXG5jb25zdCBBY3Rpb25CYXJTdHlsZWQgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG4gICAgd2lkdGggICAgOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnODBweCcsXG5cbiAgICB6SW5kZXggICA6IDEwMCxcbiAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXG4gICAgcmlnaHQgICAgOiAwLFxuICAgIGJvdHRvbSAgIDogMCxcbiAgICBsZWZ0ICAgICA6IDAsXG4gICAgcGFkZGluZyAgOiAnMjBweCAwJyxcblxuICAgIGJhY2tncm91bmQ6IENPTE9SUy5XSElURSxcbiAgICBib3hTaGFkb3cgOiBgMCAwIDRweCAwICR7Q09MT1JTLkdFVCgnQkxBQ0snLCAwLjIpfWAsXG5cbiAgICB0cmFuc2Zvcm0gOiBgdHJhbnNsYXRlWSgxNjBweClgLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgIHRyYW5zaXRpb246ICctd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0IDBzJyxcblxuICAgICcmLmFjdGlvbi1iYXItLXZpc2libGUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgcGFkZGluZzogJzE1cHggMCcsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBBY3Rpb25CYXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHZpc2libGUsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFjdGlvbkJhclN0eWxlZFxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhY3Rpb24tYmFyICR7dmlzaWJsZSA/ICdhY3Rpb24tYmFyLS12aXNpYmxlJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FjdGlvbkJhclN0eWxlZD5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQWN0aW9uQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXMgOiB7fSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkFjdGlvbkJhci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IHByb3BUeXBlcy5hbnksXG4gICAgc3R5bGVzICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgdmlzaWJsZSA6IHByb3BUeXBlcy5ib29sLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CYXI7XG4iXX0= */");
/* Component */

var ActionBar = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children,
      styles = props.styles,
      visible = props.visible;
  return _react.default.createElement(ActionBarStyled, {
    ref: ref,
    className: "action-bar ".concat(visible ? 'action-bar--visible' : '', " ").concat(className || ''),
    styles: styles
  }, children);
});
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