"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    background: _utils.colors.get('white'),
    boxShadow: "0 0 4px 0 ".concat(_utils.colors.get('black', null, 0.2)),
    transform: "translateY(110%)",
    willChange: 'transform',
    transition: '-webkit-transform 0.3s ease-out 0s',
    '&.aph-action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, _constants.MEDIA_QUERIES.LT.SM, {
    padding: '15px 0'
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbkJhci9BY3Rpb25CYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlcyAqL1xuY29uc3QgQWN0aW9uQmFyU3R5bGVkID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuICAgIHdpZHRoICAgIDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzgwcHgnLFxuXG4gICAgekluZGV4ICAgOiAxMDAsXG4gICAgcG9zaXRpb24gOiAnZml4ZWQnLFxuICAgIHJpZ2h0ICAgIDogMCxcbiAgICBib3R0b20gICA6IDAsXG4gICAgbGVmdCAgICAgOiAwLFxuICAgIHBhZGRpbmcgIDogJzIwcHggMCcsXG5cbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZ2V0KCd3aGl0ZScpLFxuICAgIGJveFNoYWRvdyA6IGAwIDAgNHB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsIG51bGwsIDAuMil9YCxcblxuICAgIHRyYW5zZm9ybSA6IGB0cmFuc2xhdGVZKDExMCUpYCxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICB0cmFuc2l0aW9uOiAnLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCAwcycsXG5cbiAgICAnJi5hcGgtYWN0aW9uLWJhci0tdmlzaWJsZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nOiAnMTVweCAwJyxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEFjdGlvbkJhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdmlzaWJsZSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QWN0aW9uQmFyU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1hY3Rpb24tYmFyJHt2aXNpYmxlID8gJyBhcGgtYWN0aW9uLWJhci0tdmlzaWJsZScgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BY3Rpb25CYXJTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkFjdGlvbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgc3R5bGVzIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY3Rpb25CYXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuYW55LFxuICAgIHZpc2libGUgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXMgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJhcjtcbiJdfQ== */");
/* Component */

var ActionBar = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children,
      styles = props.styles,
      visible = props.visible;
  return _react.default.createElement(ActionBarStyled, _extends({}, props, {
    ref: ref,
    className: "aph-action-bar".concat(visible ? ' aph-action-bar--visible' : '', " ").concat(className || ''),
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