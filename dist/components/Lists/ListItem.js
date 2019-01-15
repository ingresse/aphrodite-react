"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphListItem = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e6wegxb0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: _constants.GRID.PADDING / 2 + _constants.GRID.UNIT + ' ' + (_constants.GRID.PADDING + _constants.GRID.UNIT),
    margin: 0
  }, _constants.MEDIA_QUERIES.LT.SM, {
    paddingRight: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.PADDING - 5 + _constants.GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBNRURJQV9RVUVSSUVTLCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoTGlzdEl0ZW0gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb24gOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93IDogJ2hpZGRlbicsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuICAgIHBhZGRpbmcgIDogKCgoR1JJRC5QQURESU5HIC8gMikgKyBHUklELlVOSVQpICsgJyAnICsgKEdSSUQuUEFERElORyArIEdSSUQuVU5JVCkpLFxuICAgIG1hcmdpbiAgIDogMCxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICgoR1JJRC5QQURESU5HIC0gNSkgKyBHUklELlVOSVQpLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICgoR1JJRC5QQURESU5HIC0gNSkgKyBHUklELlVOSVQpLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEl0ZW1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuaGVhZGVyID8gJ2FwaC1saXN0X19oZWFkZXIgJyA6ICdhcGgtbGlzdF9faXRlbSAnfSR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RJdGVtPlxuICAgICk7XG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19 */");
/* Component */

var ListItem = function ListItem(props) {
  return _react.default.createElement(AphListItem, _extends({}, props, {
    className: "".concat(props.header ? 'aph-list__header ' : 'aph-list__item ').concat(props.className || '')
  }), props.children);
};
/* Exporting */


var _default = ListItem;
exports.default = _default;