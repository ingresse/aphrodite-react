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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Styled */
var ImgStyled = (
/*#__PURE__*/
0, _styledBase.default)('img', {
  target: "essx23r0"
})(function (props) {
  var circle = props.circle,
      rounded = props.rounded,
      radius = props.radius,
      maxWidthXS = props.maxWidthXS,
      styles = props.styles;
  var _extraStyles = {};

  if (maxWidthXS) {
    _extraStyles[_constants.MEDIA_QUERIES.LT.SM] = Object.assign({
      maxWidth: maxWidthXS
    }, styles && styles[_constants.MEDIA_QUERIES.LT.SM] ? styles[_constants.MEDIA_QUERIES.LT.SM] : {});
  }

  return _objectSpread({
    boxSizing: 'border-box',
    display: 'inline-block',
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    borderRadius: circle ? '50%' : rounded ? _constants.RADIUS + 'px' : radius || null
  }, styles, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltZy9JbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbWcvSW1nLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBNRURJQV9RVUVSSUVTLCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZWQgKi9cbmNvbnN0IEltZ1N0eWxlZCA9IHN0eWxlZCgnaW1nJykoKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjaXJjbGUsXG4gICAgICAgIHJvdW5kZWQsXG4gICAgICAgIHJhZGl1cyxcblxuICAgICAgICBtYXhXaWR0aFhTLFxuXG4gICAgICAgIHN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBsZXQgX2V4dHJhU3R5bGVzID0ge307XG5cbiAgICBpZiAobWF4V2lkdGhYUykge1xuICAgICAgICBfZXh0cmFTdHlsZXNbTUVESUFfUVVFUklFUy5MVC5TTV0gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogbWF4V2lkdGhYUyxcbiAgICAgICAgICAgIH0sIHN0eWxlcyAmJiBzdHlsZXNbTUVESUFfUVVFUklFUy5MVC5TTV0gPyBzdHlsZXNbTUVESUFfUVVFUklFUy5MVC5TTV0gOiB7fVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoICAgICA6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogJ2F1dG8nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IChjaXJjbGUgPyAnNTAlJyA6IHJvdW5kZWQgPyAoUkFESVVTICsgJ3B4JykgOiAocmFkaXVzIHx8IG51bGwpKSxcblxuICAgICAgICAuLi5zdHlsZXMsXG5cbiAgICAgICAgLi4uX2V4dHJhU3R5bGVzXG4gICAgfTtcbn0pO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEltZyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbWdTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pbWcgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSW1nLnByb3BUeXBlcyA9IHtcbiAgICBjaXJjbGUgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICByb3VuZGVkICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHJhZGl1cyAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4V2lkdGhYUzogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkltZy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2lyY2xlICAgIDogZmFsc2UsXG4gICAgcm91bmRlZCAgIDogZmFsc2UsXG5cbiAgICByYWRpdXMgICAgOiAnJyxcbiAgICBtYXhXaWR0aFhTOiAnJyxcblxuICAgIHN0eWxlcyAgICA6IHt9LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJbWc7XG4iXX0= */");
/* Component */

var Img = function Img(props) {
  var className = props.className;
  return _react.default.createElement(ImgStyled, _extends({}, props, {
    className: "aph-img ".concat(className || '')
  }));
};
/* Properties Types */


Img.propTypes = {
  circle: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  radius: _propTypes.default.string,
  maxWidthXS: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Default Properties */

Img.defaultProps = {
  circle: false,
  rounded: false,
  radius: '',
  maxWidthXS: '',
  styles: {}
};
/* Exporting */

var _default = Img;
exports.default = _default;