"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../constants");

var _utils = require("../../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Styles */
var H3Styled = (0, _styledBase.default)("h3", {
  target: "e181c9j70"
})("box-sizing:border-box;font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES.LG.FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES.LG.LINE_HEIGHT;
}, ";padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : props.align || null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return !props.aphcolor && !props.link && !props.helper ? null : _utils.colors.getFromTheme(props, props.link ? 'link' : props.helper ? 'helper' : props.aphcolor);
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSDMvSDMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUwQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0gzL0gzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IENPTE9SUywgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIM1N0eWxlZCA9IHN0eWxlZC5oM2BcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChTSVpFU1twcm9wcy5ib2xkID8gJ1hMJyA6ICdNRCddLkZPTlRfV0VJR0hUKX07XG4gICAgZm9udC1zaXplICA6ICR7cHJvcHMgPT4gKFNJWkVTLkxHLkZPTlRfU0laRSl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IChTSVpFUy5MRy5MSU5FX0hFSUdIVCl9O1xuXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbn07XG5cbiAgICB0ZXh0LWFsaWduICAgIDogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiAocHJvcHMuYWxpZ24gfHwgbnVsbCkpfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMudXBwZXIgPyAndXBwZXJjYXNlJyA6IG51bGwpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IChcbiAgICAgICAgKCFwcm9wcy5hcGhjb2xvciAmJiAhcHJvcHMubGluayAmJiAhcHJvcHMuaGVscGVyKSA/IG51bGwgOlxuICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMubGluayA/ICdsaW5rJyA6IChwcm9wcy5oZWxwZXIgPyAnaGVscGVyJyA6IHByb3BzLmFwaGNvbG9yKSlcbiAgICApfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgzID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgzU3R5bGVkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgYXBoY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWgzICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkgzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5rICA6IGZhbHNlLFxuICAgIGJvbGQgIDogZmFsc2UsXG4gICAgY2VudGVyOiBmYWxzZSxcbiAgICB1cHBlciA6IGZhbHNlLFxuICAgIGhlbHBlcjogZmFsc2UsXG4gICAgbWFyZ2luOiAnMTVweCAwIDVweCcsXG4gICAgY29sb3I6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMy5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDM7XG4iXX0= */"));
/* Component Itself */

var H3 = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      color = props.color,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color"]);

  return _react.default.createElement(H3Styled, _extends({}, rest, {
    ref: ref,
    aphcolor: color,
    className: "aph-h3 " + (className || '')
  }));
});
/* Default Properties */

H3.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '15px 0 5px',
  color: '',
  styles: {}
};
/* Properties Types */

H3.propTypes = {
  link: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  center: _propTypes.default.bool,
  upper: _propTypes.default.bool,
  helper: _propTypes.default.bool,
  margin: _propTypes.default.string,
  color: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = H3;
exports.default = _default;