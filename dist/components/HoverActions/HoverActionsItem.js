"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Constants */

/* Utilities */

/* Sizes */
var _SIZES$XS = _constants.SIZES.XS,
    FONT_SIZE = _SIZES$XS.FONT_SIZE,
    LINE_HEIGHT = _SIZES$XS.LINE_HEIGHT;
/* Component Styles */

var HoverActionItem = (0, _styledBase.default)("button", {
  target: "ezj1zsv0"
})("box-sizing:border-box;display:inline-block;padding:5px;margin:0;font-weight:bold;font-size:", FONT_SIZE, ";line-height:", LINE_HEIGHT, ";text-transform:uppercase;border:0;outline:0;text-decoration:none;border-radius:", _constants.RADIUS.XS, "px;cursor:pointer;color:", function (props) {
  return props.color ? _utils.colors.get(props.color) : 'inherit';
}, ";background-color:", _utils.colors.get('white', null, 0.75), ";box-shadow:0 0 5px ", _utils.colors.get('black', null, 0.25), ";transition:color 0.25s linear,background-color 0.25s linear;&:active,&:focus,&:hover{border:0;outline:0;background-color:", _utils.colors.get('white', null, 1), ";}&.success{color:", _utils.colors.get('success'), ";}&.error{color:", _utils.colors.get('error'), ";}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvdmVyQWN0aW9ucy9Ib3ZlckFjdGlvbnNJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFxQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ib3ZlckFjdGlvbnMvSG92ZXJBY3Rpb25zSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBSQURJVVMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogVXRpbGl0aWVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIFNpemVzICovXG5jb25zdCB7IEZPTlRfU0laRSwgTElORV9IRUlHSFQgfSA9IFNJWkVTLlhTO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIb3ZlckFjdGlvbkl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbiA6IDA7XG5cbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcbiAgICBmb250LXNpemUgICAgIDogJHtGT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0ICAgOiAke0xJTkVfSEVJR0hUfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gY29sb3JzLmdldChwcm9wcy5jb2xvcikgOiAnaW5oZXJpdCd9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnd2hpdGUnLCBudWxsLCAwLjc1KX07XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgbnVsbCwgMC4yNSl9O1xuXG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4yNXMgbGluZWFyLFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhclxuICAgIDtcblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnd2hpdGUnLCBudWxsLCAxKX07XG4gICAgfVxuXG4gICAgJi5zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnc3VjY2VzcycpfTtcbiAgICB9XG5cbiAgICAmLmVycm9yIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldCgnZXJyb3InKX07XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIb3ZlckFjdGlvbkl0ZW07XG4iXX0= */"));
/* Exporting */

var _default = HoverActionItem;
exports.default = _default;