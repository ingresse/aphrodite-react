"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphListGroupItem = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "evs8czu0"
})(function (props) {
  var _objectSpread2;

  return _objectSpread((_objectSpread2 = {
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: _constants.GRID.CONTAINER_PADDING / 2 + _constants.GRID.UNIT + ' ' + (_constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT),
    margin: 0
  }, _objectSpread2[_constants.MEDIA_QUERIES.LT.SM] = {
    paddingRight: _constants.GRID.CONTAINER_PADDING - 5 + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.CONTAINER_PADDING - 5 + _constants.GRID.UNIT
  }, _objectSpread2), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MaXN0cy9MaXN0R3JvdXBJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBBcGhMaXN0R3JvdXBJdGVtID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nICA6ICgoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC8gMikgKyBHUklELlVOSVQpICsgJyAnICsgKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgICsgR1JJRC5VTklUKSksXG4gICAgbWFyZ2luICAgOiAwLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogKChHUklELkNPTlRBSU5FUl9QQURESU5HICAtIDUpICsgR1JJRC5VTklUKSxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC0gNSkgKyBHUklELlVOSVQpLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgTGlzdEdyb3VwSXRlbSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RHcm91cEl0ZW1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17Zm9yd2FyZFJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuaGVhZGVyID8gJ2FwaC1saXN0LWdyb3VwX19oZWFkZXIgJyA6ICdhcGgtbGlzdC1ncm91cF9faXRlbSAnfSR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RHcm91cEl0ZW0+XG4gICAgKTtcbn0pO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cEl0ZW07XG4iXX0= */");
/* Component */

var ListGroupItem = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(AphListGroupItem, _extends({}, props, {
    ref: _react.forwardRef,
    className: "" + (props.header ? 'aph-list-group__header ' : 'aph-list-group__item ') + (className || '')
  }), children);
});
/* Exporting */

var _default = ListGroupItem;
exports.default = _default;