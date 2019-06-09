"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBHUklELCBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEFwaENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG4gICAgbWFyZ2luICAgOiAnMCBhdXRvJyxcbiAgICBwYWRkaW5nICA6IGAwICR7KEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgKyBHUklELlVOSVQpfWAsXG4gICAgd2lkdGggICAgOiAnMTAwJScsXG5cbiAgICBtYXhXaWR0aCA6IChcbiAgICAgICAgKHByb3BzLmZsdWlkID8gJzEwMCUnIDpcbiAgICAgICAgICAgIChwcm9wcy54cyA/IChHUklELkNPTlRBSU5FUi5YUyArIEdSSUQuVU5JVCkgOlxuICAgICAgICAgICAgICAgIChwcm9wcy5zbSA/IChHUklELkNPTlRBSU5FUi5TTSArIEdSSUQuVU5JVCkgOlxuICAgICAgICAgICAgICAgICAgICAocHJvcHMubWQgPyAoR1JJRC5DT05UQUlORVIuTUQgKyBHUklELlVOSVQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy54bCA/IChHUklELkNPTlRBSU5FUi5YTCArIEdSSUQuVU5JVCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChHUklELkNPTlRBSU5FUi5MRyArIEdSSUQuVU5JVClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICksXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAoR1JJRC5DT05UQUlORVJfUEFERElOR19YUyArIEdSSUQuVU5JVCksXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogKEdSSUQuQ09OVEFJTkVSX1BBRERJTkdfWFMgKyBHUklELlVOSVQpLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBDb250YWluZXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENvbnRhaW5lclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY29udGFpbmVyICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwaENvbnRhaW5lcj5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgeHMgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzbSAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIG1kICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbGcgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB4bCAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGZsdWlkIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */");
/* Component it self */

var Container = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(AphContainer, _extends({}, props, {
    ref: ref,
    className: "aph-container ".concat(props.className || '')
  }), props.children);
});
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