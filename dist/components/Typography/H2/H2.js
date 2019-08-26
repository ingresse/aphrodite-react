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

/* Component Styles */
var H2Styled = (0, _styledBase.default)("h2", {
  target: "e1knkmrf0"
})("font-weight:", function (props) {
  return _constants.SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT;
}, ";font-size:", function (props) {
  return _constants.SIZES.XL.FONT_SIZE;
}, ";line-height:", function (props) {
  return _constants.SIZES.XL.LINE_HEIGHT;
}, ";padding:0;margin:", function (props) {
  return props.margin;
}, ";text-align:", function (props) {
  return props.center ? 'center' : props.align || null;
}, ";text-transform:", function (props) {
  return props.upper ? 'uppercase' : null;
}, ";color:", function (props) {
  return !props.color && !props.link && !props.helper ? null : _utils.colors.getFromTheme(props, props.link ? 'link' : props.helper ? 'helper' : props.color);
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSDIvSDIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUwQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0gyL0gyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IENPTE9SUywgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIMlN0eWxlZCA9IHN0eWxlZC5oMmBcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiAoU0laRVNbcHJvcHMuYm9sZCA/ICdYTCcgOiAnTUQnXS5GT05UX1dFSUdIVCl9O1xuICAgIGZvbnQtc2l6ZSAgOiAke3Byb3BzID0+IChTSVpFUy5YTC5GT05UX1NJWkUpfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiAoU0laRVMuWEwuTElORV9IRUlHSFQpfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW59O1xuXG4gICAgdGV4dC1hbGlnbiAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICdjZW50ZXInIDogKHByb3BzLmFsaWduIHx8IG51bGwpKX07XG4gICAgdGV4dC10cmFuc2Zvcm06ICR7cHJvcHMgPT4gKHByb3BzLnVwcGVyID8gJ3VwcGVyY2FzZScgOiBudWxsKX07XG5cblxuICAgIGNvbG9yOiAke3Byb3BzID0+IChcbiAgICAgICAgKCFwcm9wcy5jb2xvciAmJiAhcHJvcHMubGluayAmJiAhcHJvcHMuaGVscGVyKSA/IG51bGwgOlxuICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMubGluayA/ICdsaW5rJyA6IChwcm9wcy5oZWxwZXIgPyAnaGVscGVyJyA6IHByb3BzLmNvbG9yKSlcbiAgICApfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgyID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIMlN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaDIgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDIuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgaGVscGVyOiBmYWxzZSxcbiAgICBtYXJnaW46ICcyNXB4IDAgMTVweCcsXG4gICAgY29sb3IgOiAnJyxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSDIucHJvcFR5cGVzID0ge1xuICAgIGxpbmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVscGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgyO1xuIl19 */"));
/* Component Itself */

var H2 = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(H2Styled, _extends({}, props, {
    ref: ref,
    className: "aph-h2 " + (className || '')
  }));
});
/* Default Properties */

H2.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
/* Properties Types */

H2.propTypes = {
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

var _default = H2;
exports.default = _default;