"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/* Constants */
var bgPlaceholder = (0, _core.keyframes)(_templateObject());
/* Component Itself */

var Placeholder = (0, _react.forwardRef)(function (props, ref) {
  var _ref = props || {},
      className = _ref.className,
      styles = _ref.styles,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "styles"]);

  var isDarkMode = props.theme && props.theme.isDarkMode ? true : false;

  var colorTheme = _utils.colors.getFromTheme(props, 'helper');

  var colorBase = (0, _chromaJs.default)(colorTheme);
  var colorStart = colorBase.alpha(isDarkMode ? 0.5 : 0.05).css();
  var colorEnd = colorBase.alpha(isDarkMode ? 0.75 : 0.15).css();
  var StyledPlaceholder = (
  /*#__PURE__*/
  0, _styledBase.default)('div', {
    target: "ejqn05n0"
  })(_objectSpread({
    fontSize: '0',
    lineHeight: '0',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: "" + (props.block ? 'block' : 'inline-block'),
    width: "" + (props.width ? props.width + 'px' : '100%'),
    maxWidth: "" + (props.width ? props.width + 'px' : '100%'),
    minHeight: props.height + "px",
    border: props.border || null,
    borderRadius: props.radius + "px",
    color: colorBase.rgb(),
    background: "linear-gradient(90deg, " + colorStart + ", " + colorEnd + ")",
    backgroundSize: '200% 100%',
    animation: bgPlaceholder + " .9s ease infinite"
  }, styles), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5jb25zdCBiZ1BsYWNlaG9sZGVyID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgUGxhY2Vob2xkZXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IChwcm9wcyB8fCB7fSk7XG5cbiAgICBjb25zdCBpc0RhcmtNb2RlID0gKChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5pc0RhcmtNb2RlKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgY29uc3QgY29sb3JUaGVtZSA9IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKTtcbiAgICBjb25zdCBjb2xvckJhc2UgID0gY2hyb21hKGNvbG9yVGhlbWUpO1xuICAgIGNvbnN0IGNvbG9yU3RhcnQgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNSA6IDAuMDUpLmNzcygpO1xuICAgIGNvbnN0IGNvbG9yRW5kICAgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNzUgOiAwLjE1KS5jc3MoKTtcblxuICAgIGNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIGZvbnRTaXplICA6ICcwJyxcbiAgICAgICAgbGluZUhlaWdodDogJzAnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuXG4gICAgICAgIGRpc3BsYXkgIDogYCR7cHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jayd9YCxcbiAgICAgICAgd2lkdGggICAgOiBgJHtwcm9wcy53aWR0aCA/IChwcm9wcy53aWR0aCArICdweCcpIDogJzEwMCUnfWAsXG4gICAgICAgIG1heFdpZHRoIDogYCR7cHJvcHMud2lkdGggPyAocHJvcHMud2lkdGggKyAncHgnKSA6ICcxMDAlJ31gLFxuICAgICAgICBtaW5IZWlnaHQ6IGAke3Byb3BzLmhlaWdodH1weGAsXG5cbiAgICAgICAgYm9yZGVyICAgICAgOiAocHJvcHMuYm9yZGVyIHx8IG51bGwpLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3Byb3BzLnJhZGl1c31weGAsXG5cbiAgICAgICAgY29sb3IgICAgICAgICA6IGNvbG9yQmFzZS5yZ2IoKSxcbiAgICAgICAgYmFja2dyb3VuZCAgICA6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7Y29sb3JTdGFydH0sICR7Y29sb3JFbmR9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgICAgICBhbmltYXRpb246IGAke2JnUGxhY2Vob2xkZXJ9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgICAgICAuLi5zdHlsZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcGxhY2Vob2xkZXIgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvU3R5bGVkUGxhY2Vob2xkZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9jayA6IGZhbHNlLFxuICAgIGhlaWdodDogMjAsXG4gICAgcmFkaXVzOiA0LFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHJhZGl1czogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZSA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nIENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXI7XG4iXX0= */");
  return _react.default.createElement(StyledPlaceholder, _extends({}, rest, {
    ref: ref,
    className: "aph-placeholder " + (className || '')
  }), props.children);
});
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
  style: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting Component */

var _default = Placeholder;
exports.default = _default;