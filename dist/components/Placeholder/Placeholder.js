"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        0% {\n            background-position: 0% 50%;\n        }\n\n        50% {\n            background-position: 100% 50%;\n        }\n\n        100% {\n            background-position: 0% 50%;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var color = require('tinycolor2');
/* Constants */


/* Component it self */
var Placeholder = (0, _react.forwardRef)(function (props, ref) {
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
    display: "" + (props.block ? 'block' : 'inline-block'),
    width: "" + (props.width ? props.width + 'px' : '100%'),
    maxWidth: "" + (props.width ? props.width + 'px' : '100%'),
    minHeight: props.height + "px",
    border: props.border || null,
    borderRadius: props.radius + "px",
    color: _constants.COLORS.LIGHT_GREY,
    background: "linear-gradient(90deg, " + color(_constants.COLORS.SMOKE).toString() + ", " + color(_constants.COLORS.SMOKE).darken(4).toString() + ")",
    backgroundSize: '200% 100%',
    animation: bgPlaceholder + " .9s ease infinite",
    '.aph-placeholder': {
      background: "linear-gradient(90deg, " + color(_constants.COLORS.SMOKE).darken(2).toString() + ", " + color(_constants.COLORS.SMOKE).darken(5).toString() + ")"
    }
  }, props.styles), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjhCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJzsgaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5jb25zdCBjb2xvciA9IHJlcXVpcmUoJ3Rpbnljb2xvcjInKTtcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY29uc3QgUGxhY2Vob2xkZXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgYmdQbGFjZWhvbGRlciA9IGtleWZyYW1lc2BcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgU3R5bGVkUGxhY2Vob2xkZXIgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICAgICAgZm9udFNpemUgIDogJzBweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcwcHgnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuXG4gICAgICAgIGRpc3BsYXkgIDogYCR7cHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jayd9YCxcbiAgICAgICAgd2lkdGggICAgOiBgJHtwcm9wcy53aWR0aCA/IChwcm9wcy53aWR0aCArICdweCcpIDogJzEwMCUnfWAsXG4gICAgICAgIG1heFdpZHRoIDogYCR7cHJvcHMud2lkdGggPyAocHJvcHMud2lkdGggKyAncHgnKSA6ICcxMDAlJ31gLFxuICAgICAgICBtaW5IZWlnaHQ6IGAke3Byb3BzLmhlaWdodH1weGAsXG5cbiAgICAgICAgYm9yZGVyICAgICAgOiAocHJvcHMuYm9yZGVyIHx8IG51bGwpLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3Byb3BzLnJhZGl1c31weGAsXG5cbiAgICAgICAgY29sb3IgICAgICAgICA6IENPTE9SUy5MSUdIVF9HUkVZLFxuICAgICAgICBiYWNrZ3JvdW5kICAgIDogYGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHtjb2xvcihDT0xPUlMuU01PS0UpLnRvU3RyaW5nKCl9LCAke2NvbG9yKENPTE9SUy5TTU9LRSkuZGFya2VuKDQpLnRvU3RyaW5nKCl9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgICAgICBhbmltYXRpb246IGAke2JnUGxhY2Vob2xkZXJ9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgICAgICAnLmFwaC1wbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7Y29sb3IoQ09MT1JTLlNNT0tFKS5kYXJrZW4oMikudG9TdHJpbmcoKX0sICR7Y29sb3IoQ09MT1JTLlNNT0tFKS5kYXJrZW4oNSkudG9TdHJpbmcoKX0pYCxcbiAgICAgICAgfSxcblxuICAgICAgICAuLi5wcm9wcy5zdHlsZXMsXG4gICAgfSk7XG5cbiAgICBsZXQgX3Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuXG4gICAgZGVsZXRlIF9wcm9wcy5zdHlsZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIHsuLi5fcHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1wbGFjZWhvbGRlciAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9TdHlsZWRQbGFjZWhvbGRlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuUGxhY2Vob2xkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2NrIDogZmFsc2UsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICByYWRpdXM6IDQsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblBsYWNlaG9sZGVyLnByb3BUeXBlcyA9IHtcbiAgICBibG9jayA6IHByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgcmFkaXVzOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgQ29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlcjtcbiJdfQ== */");

  var _props = Object.assign({}, props);

  delete _props.styles;
  return _react.default.createElement(StyledPlaceholder, _extends({}, _props, {
    ref: ref,
    className: "aph-placeholder " + (props.className || '')
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