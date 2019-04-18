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

/* Component Itself */
var AphListItemStyled = (0, _styledBase.default)("li", {
  target: "e6wegxb0"
})("box-sizing:border-box;display:block;margin:0;padding:10px;background-color:transparent;transition:background-color 0.25s linear;will-change:background-color;", function (props) {
  return props.hover ? {
    '&:hover': {
      backgroundColor: _constants.COLORS.GET('PRIMARY', 0.1)
    }
  } : null;
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVSSBGcmFtZXdvcmsgVXRpbHMgKi9cbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIHRyYW5zaXRpb24gOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuaG92ZXIgPyB7XG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuR0VUKCdQUklNQVJZJywgMC4xKSxcbiAgICAgICAgfVxuICAgIH0gOiBudWxsfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEl0ZW1TdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0X19pdGVtICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIGhvdmVyIDogZmFsc2UsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBob3ZlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXX0= */"));
/* Component Itself */

var ListItem = function ListItem(props) {
  var className = props.className;
  return _react.default.createElement(AphListItemStyled, _extends({}, props, {
    className: "aph-list__item ".concat(className || '')
  }));
};
/* Default Properties */


ListItem.defaultProps = {
  hover: false,
  styles: {}
};
/* Properties Types */

ListItem.propTypes = {
  hover: _propTypes.default.bool,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = ListItem;
exports.default = _default;