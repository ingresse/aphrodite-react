"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _ = require("../");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Component Styles */
var _iconSize = window.innerWidth > _constants.SCREEN_SIZES.SM ? 22 : 30;

var iconColumn = _iconSize + _constants.GRID.CONTAINER_PADDING / 2 + _constants.GRID.UNIT;
/* Component Styles */

var AphAccordion = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e869uf0"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    display: 'block',
    fontSize: _constants.SIZES.MD.FONT_SIZE,
    lineHeight: _constants.SIZES.MD.LINE_HEIGHT
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCcUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uL0FjY29yZGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlciBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMsIFNDUkVFTl9TSVpFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBIZWxwZXIgQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTGlzdEl0ZW0sIEljb24gfSBmcm9tICcuLi8nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBfaWNvblNpemUgICA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TSVpFUy5TTSA/IDIyIDogMzApO1xuY29uc3QgaWNvbkNvbHVtbiAgPSAoX2ljb25TaXplICsgKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC8gMikgKyBHUklELlVOSVQpO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhBY2NvcmRpb24gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuXG4gICAgZm9udFNpemUgIDogU0laRVMuTUQuRk9OVF9TSVpFLFxuICAgIGxpbmVIZWlnaHQ6IFNJWkVTLk1ELkxJTkVfSEVJR0hULFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIFN0eWxlcyAqL1xuY29uc3QgSGVhZGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZyA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgOiAnYmxvY2snLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29sdW1uIFN0eWxlcyAqL1xuY29uc3QgY29sdW1uU3R5bGVzID0ge1xuICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn07XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgSWNvbiBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBJY29uQ29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogaWNvbkNvbHVtbixcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICAgIG1hcmdpbjogJy0ycHggMCcsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29udGVudCBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBDb250ZW50Q29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7aWNvbkNvbHVtbn0pYCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gcmVhY3QgY29tcG9uZW50IGRlZmF1bHQgcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkOiAocHJvcHMub3BlbmVkIHx8IGZhbHNlKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB7IHRvZ2dsZUNhbGxiYWNrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICB0b2dnbGVDYWxsYmFjayhvcGVuZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICAgICAgaGVhZGVyUHJvcHMsXG4gICAgICAgICAgICBoZWFkZXJTdHlsZXMsXG5cbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgICAgIGljb25TdHlsZXMsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoQWNjb3JkaW9uIGNsYXNzTmFtZT17YGFwaC1hY2NvcmRpb24gJHtjbGFzc05hbWV9YH0gc3R5bGVzPXtzdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB7Li4uaGVhZGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyRGFyayA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25Db2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemUgfHwgX2ljb25TaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17YGFycm93LSR7b3BlbmVkID8gJ3VwJyA6ICdkb3duJ30tY2lyY2xlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pY29uUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGhlYWRlcn1cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgICAgICA8L0FwaEFjY29yZGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgaWNvblNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBpY29uU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgdG9nZ2xlQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0= */");
/* Component Header Styles */

var Header = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e869uf1"
})(function (props) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: 0
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVyIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIEhlbHBlciBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMaXN0SXRlbSwgSWNvbiB9IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IF9pY29uU2l6ZSAgID0gKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NJWkVTLlNNID8gMjIgOiAzMCk7XG5jb25zdCBpY29uQ29sdW1uICA9IChfaWNvblNpemUgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCk7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEFjY29yZGlvbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG5cbiAgICBmb250U2l6ZSAgOiBTSVpFUy5NRC5GT05UX1NJWkUsXG4gICAgbGluZUhlaWdodDogU0laRVMuTUQuTElORV9IRUlHSFQsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgU3R5bGVzICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICA6ICdibG9jaycsXG4gICAgbGluZUhlaWdodDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBjb2x1bW5TdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBJY29uIENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IEljb25Db2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBpY29uQ29sdW1uLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgbWFyZ2luOiAnLTJweCAwJyxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb250ZW50IENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IENvbnRlbnRDb2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtpY29uQ29sdW1ufSlgLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4Jyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgLSByZWFjdCBjb21wb25lbnQgZGVmYXVsdCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IChwcm9wcy5vcGVuZWQgfHwgZmFsc2UpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2hpbGRyZW5zIHZpc2liaWxpdHlcbiAgICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGNvbnN0IHsgdG9nZ2xlQ2FsbGJhY2sgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0b2dnbGVDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBvcGVuZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICAgIHRvZ2dsZUNhbGxiYWNrKG9wZW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGhlYWRlckRhcmssXG4gICAgICAgICAgICBoZWFkZXJQcm9wcyxcbiAgICAgICAgICAgIGhlYWRlclN0eWxlcyxcblxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgICAgIGljb25TaXplLFxuICAgICAgICAgICAgaWNvblByb3BzLFxuICAgICAgICAgICAgaWNvblN0eWxlcyxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcGhBY2NvcmRpb24gY2xhc3NOYW1lPXtgYXBoLWFjY29yZGlvbiAke2NsYXNzTmFtZX1gfSBzdHlsZXM9e3N0eWxlc30+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJEYXJrID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3sgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmdSaWdodDogJzE1cHgnLCBwYWRkaW5nTGVmdDogJzE1cHgnLCAuLi5oZWFkZXJTdHlsZXMgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkNvbHVtbiBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXJfX2NvbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpY29uU2l6ZSB8fCBfaWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtgYXJyb3ctJHtvcGVuZWQgPyAndXAnIDogJ2Rvd24nfS1jaXJjbGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtpY29uU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmljb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRDb2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudENvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogaGVhZGVyfVxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAge29wZW5lZCAmJiBjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQXBoQWNjb3JkaW9uPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb3BlbmVkICAgOiBmYWxzZSxcbiAgICBoZWFkZXIgICA6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICBoZWFkZXIgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyRGFyayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWFkZXJTdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICBjaGlsZHJlbiA6IHByb3BUeXBlcy5hbnksXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBpY29uU2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGljb25TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB0b2dnbGVDYWxsYmFjazogcHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ== */");
/* Component Header Column Styles */

var columnStyles = {
  boxSizing: 'border-box',
  display: 'inline-block',
  verticalAlign: 'middle'
};
/* Component Header Icon Column Styles */

var IconColumn = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e869uf2"
})(function (props) {
  return _objectSpread({}, columnStyles, _defineProperty({
    width: iconColumn,
    lineHeight: 0,
    margin: '-2px 0'
  }, _constants.MEDIA_QUERIES.LT.SM, {
    margin: 0
  }));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDbUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uL0FjY29yZGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlciBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMsIFNDUkVFTl9TSVpFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBIZWxwZXIgQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTGlzdEl0ZW0sIEljb24gfSBmcm9tICcuLi8nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBfaWNvblNpemUgICA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TSVpFUy5TTSA/IDIyIDogMzApO1xuY29uc3QgaWNvbkNvbHVtbiAgPSAoX2ljb25TaXplICsgKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC8gMikgKyBHUklELlVOSVQpO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhBY2NvcmRpb24gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuXG4gICAgZm9udFNpemUgIDogU0laRVMuTUQuRk9OVF9TSVpFLFxuICAgIGxpbmVIZWlnaHQ6IFNJWkVTLk1ELkxJTkVfSEVJR0hULFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIFN0eWxlcyAqL1xuY29uc3QgSGVhZGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZyA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgOiAnYmxvY2snLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29sdW1uIFN0eWxlcyAqL1xuY29uc3QgY29sdW1uU3R5bGVzID0ge1xuICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn07XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgSWNvbiBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBJY29uQ29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogaWNvbkNvbHVtbixcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICAgIG1hcmdpbjogJy0ycHggMCcsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29udGVudCBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBDb250ZW50Q29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7aWNvbkNvbHVtbn0pYCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gcmVhY3QgY29tcG9uZW50IGRlZmF1bHQgcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkOiAocHJvcHMub3BlbmVkIHx8IGZhbHNlKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB7IHRvZ2dsZUNhbGxiYWNrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICB0b2dnbGVDYWxsYmFjayhvcGVuZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICAgICAgaGVhZGVyUHJvcHMsXG4gICAgICAgICAgICBoZWFkZXJTdHlsZXMsXG5cbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgICAgIGljb25TdHlsZXMsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoQWNjb3JkaW9uIGNsYXNzTmFtZT17YGFwaC1hY2NvcmRpb24gJHtjbGFzc05hbWV9YH0gc3R5bGVzPXtzdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB7Li4uaGVhZGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyRGFyayA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25Db2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemUgfHwgX2ljb25TaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17YGFycm93LSR7b3BlbmVkID8gJ3VwJyA6ICdkb3duJ30tY2lyY2xlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pY29uUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGhlYWRlcn1cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgICAgICA8L0FwaEFjY29yZGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgaWNvblNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBpY29uU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgdG9nZ2xlQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0= */");
/* Component Header Content Column Styles */

var ContentColumn = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e869uf3"
})(function (props) {
  return _objectSpread({}, columnStyles, {
    width: "calc(100% - ".concat(iconColumn, ")"),
    lineHeight: '20px'
  });
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uL0FjY29yZGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlciBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMsIFNDUkVFTl9TSVpFUywgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBIZWxwZXIgQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTGlzdEl0ZW0sIEljb24gfSBmcm9tICcuLi8nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBfaWNvblNpemUgICA9ICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TSVpFUy5TTSA/IDIyIDogMzApO1xuY29uc3QgaWNvbkNvbHVtbiAgPSAoX2ljb25TaXplICsgKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC8gMikgKyBHUklELlVOSVQpO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhBY2NvcmRpb24gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuXG4gICAgZm9udFNpemUgIDogU0laRVMuTUQuRk9OVF9TSVpFLFxuICAgIGxpbmVIZWlnaHQ6IFNJWkVTLk1ELkxJTkVfSEVJR0hULFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIFN0eWxlcyAqL1xuY29uc3QgSGVhZGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZyA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgOiAnYmxvY2snLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29sdW1uIFN0eWxlcyAqL1xuY29uc3QgY29sdW1uU3R5bGVzID0ge1xuICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn07XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgSWNvbiBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBJY29uQ29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogaWNvbkNvbHVtbixcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICAgIG1hcmdpbjogJy0ycHggMCcsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgQ29udGVudCBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBDb250ZW50Q29sdW1uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmNvbHVtblN0eWxlcyxcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7aWNvbkNvbHVtbn0pYCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gcmVhY3QgY29tcG9uZW50IGRlZmF1bHQgcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkOiAocHJvcHMub3BlbmVkIHx8IGZhbHNlKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB7IHRvZ2dsZUNhbGxiYWNrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICB0b2dnbGVDYWxsYmFjayhvcGVuZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICAgICAgaGVhZGVyUHJvcHMsXG4gICAgICAgICAgICBoZWFkZXJTdHlsZXMsXG5cbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgICAgIGljb25TdHlsZXMsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBoQWNjb3JkaW9uIGNsYXNzTmFtZT17YGFwaC1hY2NvcmRpb24gJHtjbGFzc05hbWV9YH0gc3R5bGVzPXtzdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB7Li4uaGVhZGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyRGFyayA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25Db2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemUgfHwgX2ljb25TaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17YGFycm93LSR7b3BlbmVkID8gJ3VwJyA6ICdkb3duJ30tY2lyY2xlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pY29uUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGhlYWRlcn1cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgICAgICA8L0FwaEFjY29yZGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgaWNvblNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBpY29uU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgdG9nZ2xlQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0= */");
/* Component */

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  /**
   * Constructor
   *
   * @param {object} props - react component default props
   */
  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.props = props;
    _this.state = {
      opened: props.opened || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Toggle childrens visibility
   */


  _createClass(Accordion, [{
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      var toggleCallback = this.props.toggleCallback;
      this.setState({
        opened: !this.state.opened
      }, function () {
        if (!toggleCallback) {
          return;
        }

        var opened = _this2.state.opened;
        toggleCallback(opened);
      });
    }
    /* Render */

  }, {
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      var _this$props = this.props,
          header = _this$props.header,
          headerDark = _this$props.headerDark,
          headerProps = _this$props.headerProps,
          headerStyles = _this$props.headerStyles,
          children = _this$props.children,
          className = _this$props.className,
          styles = _this$props.styles,
          iconSize = _this$props.iconSize,
          iconProps = _this$props.iconProps,
          iconStyles = _this$props.iconStyles;
      return _react.default.createElement(AphAccordion, {
        className: "aph-accordion ".concat(className),
        styles: styles
      }, _react.default.createElement(_.ListItem, _extends({}, headerProps, {
        header: headerDark ? true : false,
        styles: _objectSpread({
          cursor: 'pointer',
          paddingRight: '15px',
          paddingLeft: '15px'
        }, headerStyles),
        onClick: this.toggle,
        className: "aph-accordion__header"
      }), children ? _react.default.createElement(Header, {
        className: "aph-accordion__header-row"
      }, _react.default.createElement(IconColumn, {
        className: "aph-accordion__header__col-icon"
      }, _react.default.createElement(_.Icon, _extends({
        size: iconSize || _iconSize,
        slug: "arrow-".concat(opened ? 'up' : 'down', "-circle"),
        styles: iconStyles
      }, iconProps))), _react.default.createElement(ContentColumn, {
        className: "aph-accordion__header__col-content"
      }, header)) : header), opened && children);
    }
  }]);

  return Accordion;
}(_react.Component);

;
/* Default Props */

Accordion.defaultProps = {
  opened: false,
  header: '',
  className: ''
};
/* Properties Types */

Accordion.propTypes = {
  opened: _propTypes.default.bool,
  header: _propTypes.default.any,
  headerDark: _propTypes.default.bool,
  headerStyles: _propTypes.default.object,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  styles: _propTypes.default.object,
  iconSize: _propTypes.default.number,
  iconStyles: _propTypes.default.object,
  toggleCallback: _propTypes.default.func
};
/* Exporting */

var _default = Accordion;
exports.default = _default;