"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        0% {\n            background-position: 0% 50%;\n        }\n\n        50% {\n            background-position: 100% 50%;\n        }\n\n        100% {\n            background-position: 0% 50%;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var color = require('tinycolor2');
/* Constants */


/* Component it self */
var Placeholder = function Placeholder(props) {
  var bgPlaceholder = (0, _core.keyframes)(_templateObject());
  var StyledPlaceholder = (
  /*#__PURE__*/
  0, _styledBase.default)('div', {
    target: "ejqn05n0"
  })(_objectSpread({
    fontSize: '0px',
    lineHeight: '0px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: "".concat(props.block ? 'block' : 'inline-block'),
    width: "".concat(props.width ? props.width + 'px' : '100%'),
    maxWidth: "".concat(props.width ? props.width + 'px' : '100%'),
    minHeight: "".concat(props.height, "px"),
    border: props.border || null,
    borderRadius: "".concat(props.radius, "px"),
    color: _constants.COLORS.LIGHT_GREY,
    background: "linear-gradient(90deg, ".concat(color(_constants.COLORS.SMOKE).toString(), ", ").concat(color(_constants.COLORS.SMOKE).darken(4).toString(), ")"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgPlaceholder, " .9s ease infinite"),
    '.aph-placeholder': {
      background: "linear-gradient(90deg, ".concat(color(_constants.COLORS.SMOKE).darken(2).toString(), ", ").concat(color(_constants.COLORS.SMOKE).darken(5).toString(), ")")
    }
  }, props.styles), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnOyBpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmNvbnN0IGNvbG9yID0gcmVxdWlyZSgndGlueWNvbG9yMicpO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBQbGFjZWhvbGRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGJnUGxhY2Vob2xkZXIgPSBrZXlmcmFtZXNgXG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIGZvbnRTaXplICA6ICcwcHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMHB4JyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgb3ZlcmZsb3cgOiAnaGlkZGVuJyxcblxuICAgICAgICBkaXNwbGF5ICA6IGAke3Byb3BzLmJsb2NrID8gJ2Jsb2NrJyA6ICdpbmxpbmUtYmxvY2snfWAsXG4gICAgICAgIHdpZHRoICAgIDogYCR7cHJvcHMud2lkdGggPyAocHJvcHMud2lkdGggKyAncHgnKSA6ICcxMDAlJ31gLFxuICAgICAgICBtYXhXaWR0aCA6IGAke3Byb3BzLndpZHRoID8gKHByb3BzLndpZHRoICsgJ3B4JykgOiAnMTAwJSd9YCxcbiAgICAgICAgbWluSGVpZ2h0OiBgJHtwcm9wcy5oZWlnaHR9cHhgLFxuXG4gICAgICAgIGJvcmRlciAgICAgIDogKHByb3BzLmJvcmRlciB8fCBudWxsKSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtwcm9wcy5yYWRpdXN9cHhgLFxuXG4gICAgICAgIGNvbG9yICAgICAgICAgOiBDT0xPUlMuTElHSFRfR1JFWSxcbiAgICAgICAgYmFja2dyb3VuZCAgICA6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7Y29sb3IoQ09MT1JTLlNNT0tFKS50b1N0cmluZygpfSwgJHtjb2xvcihDT0xPUlMuU01PS0UpLmRhcmtlbig0KS50b1N0cmluZygpfSlgLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzIwMCUgMTAwJScsXG5cbiAgICAgICAgYW5pbWF0aW9uOiBgJHtiZ1BsYWNlaG9sZGVyfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICAgICAgJy5hcGgtcGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2NvbG9yKENPTE9SUy5TTU9LRSkuZGFya2VuKDIpLnRvU3RyaW5nKCl9LCAke2NvbG9yKENPTE9SUy5TTU9LRSkuZGFya2VuKDUpLnRvU3RyaW5nKCl9KWAsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLi4ucHJvcHMuc3R5bGVzLFxuICAgIH0pO1xuXG4gICAgbGV0IF9wcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcblxuICAgIGRlbGV0ZSBfcHJvcHMuc3R5bGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFBsYWNlaG9sZGVyIHsuLi5fcHJvcHN9IGNsYXNzTmFtZT17YGFwaC1wbGFjZWhvbGRlciAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9TdHlsZWRQbGFjZWhvbGRlcj5cbiAgICApO1xufVxuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9jayA6IGZhbHNlLFxuICAgIGhlaWdodDogMjAsXG4gICAgcmFkaXVzOiA0LFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHJhZGl1czogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZSA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgQ29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlcjtcbiJdfQ== */");

  var _props = Object.assign({}, props);

  delete _props.styles;
  return _react.default.createElement(StyledPlaceholder, _extends({}, _props, {
    className: "aph-placeholder ".concat(props.className || '')
  }), props.children);
};
/* Default Properties */


Placeholder.defaultProps = {
  block: false,
  height: 20,
  radius: 4,
  styles: {}
};
/* Properties Types */

Placeholder.propTypes = {
  block: _propTypes.default.bool,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  radius: _propTypes.default.number,
  style: _propTypes.default.object
};
/* Exporting Component */

var _default = Placeholder;
exports.default = _default;