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
var AphListGroupItem = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "evs8czu0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: _constants.GRID.CONTAINER_PADDING / 2 + _constants.GRID.UNIT + ' ' + (_constants.GRID.CONTAINER_PADDING + _constants.GRID.UNIT),
    margin: 0
  }, _constants.MEDIA_QUERIES.LT.SM, {
    paddingRight: _constants.GRID.CONTAINER_PADDING - 5 + _constants.GRID.UNIT,
    paddingLeft: _constants.GRID.CONTAINER_PADDING - 5 + _constants.GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MaXN0cy9MaXN0R3JvdXBJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgR1JJRCwgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEFwaExpc3RHcm91cEl0ZW0gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb24gOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93IDogJ2hpZGRlbicsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuICAgIHBhZGRpbmcgIDogKCgoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCkgKyAnICcgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgKyBHUklELlVOSVQpKSxcbiAgICBtYXJnaW4gICA6IDAsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC0gNSkgKyBHUklELlVOSVQpLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICgoR1JJRC5DT05UQUlORVJfUEFERElORyAgLSA1KSArIEdSSUQuVU5JVCksXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBMaXN0R3JvdXBJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0R3JvdXBJdGVtXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmhlYWRlciA/ICdhcGgtbGlzdC1ncm91cF9faGVhZGVyICcgOiAnYXBoLWxpc3QtZ3JvdXBfX2l0ZW0gJ30ke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BcGhMaXN0R3JvdXBJdGVtPlxuICAgICk7XG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cEl0ZW07XG4iXX0= */");
/* Component */

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(AphListGroupItem, _extends({}, props, {
    className: "".concat(props.header ? 'aph-list-group__header ' : 'aph-list-group__item ').concat(className || '')
  }), children);
};
/* Exporting */


var _default = ListGroupItem;
exports.default = _default;