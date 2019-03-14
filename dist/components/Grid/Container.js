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

/* Wrapper styles */
var AphContainer = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1js7dhi0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    display: 'block',
    margin: '0 auto',
    padding: "0 ".concat(_constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT),
    width: '100%',
    maxWidth: props.fluid ? '100%' : props.xs ? _constants.GRID.CONTAINER.XS + _constants.GRID.UNIT : props.sm ? _constants.GRID.CONTAINER.SM + _constants.GRID.UNIT : props.md ? _constants.GRID.CONTAINER.MD + _constants.GRID.UNIT : props.xl ? _constants.GRID.CONTAINER.XL + _constants.GRID.UNIT : _constants.GRID.CONTAINER.LG + _constants.GRID.UNIT
  }, _constants.MEDIA_QUERIES.LT.SM, {
    paddingRight: _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.CONTAINER_PADDING_XS + _constants.GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICBtYXJnaW4gICA6ICcwIGF1dG8nLFxuICAgIHBhZGRpbmcgIDogYDAgJHsoR1JJRC5DT05UQUlORVJfUEFERElORyArIEdSSUQuVU5JVCl9YCxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcblxuICAgIG1heFdpZHRoIDogKFxuICAgICAgICAocHJvcHMuZmx1aWQgPyAnMTAwJScgOlxuICAgICAgICAgICAgKHByb3BzLnhzID8gKEdSSUQuQ09OVEFJTkVSLlhTICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgKHByb3BzLnNtID8gKEdSSUQuQ09OVEFJTkVSLlNNICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy5tZCA/IChHUklELkNPTlRBSU5FUi5NRCArIEdSSUQuVU5JVCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnhsID8gKEdSSUQuQ09OVEFJTkVSLlhMICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEdSSUQuQ09OVEFJTkVSLkxHICsgR1JJRC5VTklUKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IChHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKSxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAoR1JJRC5DT05UQUlORVJfUEFERElOR19YUyArIEdSSUQuVU5JVCksXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhDb250YWluZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb250YWluZXIgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Db250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIHhzICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc20gICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtZCAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGxnICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgeGwgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBmbHVpZCA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXX0= */");
/* Component it self */

var Container = function Container(props) {
  return _react.default.createElement(AphContainer, _extends({}, props, {
    className: "aph-container ".concat(props.className || '')
  }), props.children);
};
/* Properties Types */


Container.propTypes = {
  xs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  md: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  xl: _propTypes.default.bool,
  fluid: _propTypes.default.bool,
  styles: _propTypes.default.object
};
/* Default Properties */

Container.defaultProps = {
  styles: {}
};
/* Exporting */

var _default = Container;
exports.default = _default;