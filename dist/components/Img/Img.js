"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  }, styles, {}, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltZy9JbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbWcvSW1nLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGVkICovXG5jb25zdCBJbWdTdHlsZWQgPSBzdHlsZWQoJ2ltZycpKChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2lyY2xlLFxuICAgICAgICByb3VuZGVkLFxuICAgICAgICByYWRpdXMsXG5cbiAgICAgICAgbWF4V2lkdGhYUyxcblxuICAgICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgbGV0IF9leHRyYVN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKG1heFdpZHRoWFMpIHtcbiAgICAgICAgX2V4dHJhU3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IG1heFdpZHRoWFMsXG4gICAgICAgICAgICB9LCBzdHlsZXMgJiYgc3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dID8gc3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dIDoge31cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib3hTaXppbmcgICAgOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aCAgICAgOiAnMTAwJScsXG4gICAgICAgIGhlaWdodCAgICAgICA6ICdhdXRvJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiAoY2lyY2xlID8gJzUwJScgOiByb3VuZGVkID8gKFJBRElVUyArICdweCcpIDogKHJhZGl1cyB8fCBudWxsKSksXG5cbiAgICAgICAgLi4uc3R5bGVzLFxuXG4gICAgICAgIC4uLl9leHRyYVN0eWxlc1xuICAgIH07XG59KTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEltZ1N0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaW1nICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkltZy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2lyY2xlICAgIDogZmFsc2UsXG4gICAgcm91bmRlZCAgIDogZmFsc2UsXG5cbiAgICByYWRpdXMgICAgOiAnJyxcbiAgICBtYXhXaWR0aFhTOiAnJyxcblxuICAgIHN0eWxlcyAgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSW1nLnByb3BUeXBlcyA9IHtcbiAgICBjaXJjbGUgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICByb3VuZGVkICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHJhZGl1cyAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4V2lkdGhYUzogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJbWc7XG4iXX0= */");
/* Component */

var Img = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(ImgStyled, _extends({}, props, {
    ref: ref,
    className: "aph-img " + (className || '')
  }));
});
/* Default Properties */

Img.defaultProps = {
  circle: false,
  rounded: false,
  radius: '',
  maxWidthXS: '',
  styles: {}
};
/* Properties Types */

Img.propTypes = {
  circle: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  radius: _propTypes.default.string,
  maxWidthXS: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Img;
exports.default = _default;