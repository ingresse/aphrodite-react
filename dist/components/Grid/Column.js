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

/* Wrapper Styles */
var ColumnWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1fg9ilu0"
})(function (props) {
  var _objectSpread2;

  return _objectSpread({
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 0 auto',
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    paddingRight: _constants.GRID.COLUMNS_PADDING,
    paddingLeft: _constants.GRID.COLUMNS_PADDING,
    minWidth: props.width || _constants.GRID.COLUMNS_GET_WIDTH(props.xxs || props.xs || props.sm || props.md || props.lg || props.xl),
    maxWidth: props.width || _constants.GRID.COLUMNS_GET_WIDTH(props.xxs || props.xs || props.sm || props.md || props.lg || props.xl)
  }, props.styles, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.XSS, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xxs),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xxs)
  }), _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.GT.XXS, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xs),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xs)
  }), _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.SM, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.sm),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.sm)
  }), _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.GT.SM, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.md),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.md)
  }), _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.GT.MD, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.lg),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.lg)
  }), _defineProperty(_objectSpread2, _constants.MEDIA_QUERIES.XL, {
    minWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xl),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(props.xl)
  }), _objectSpread2));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sdW1uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2x1bW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBDb2x1bW5XcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+ICh7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICAgICA6ICdmbGV4JyxcbiAgICBmbGV4ICAgICAgICAgOiAnMCAwIGF1dG8nLFxuICAgIGZsZXhHcm93ICAgICA6IDEsXG4gICAgZmxleEJhc2lzICAgIDogMCxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgIHBhZGRpbmdSaWdodDogR1JJRC5DT0xVTU5TX1BBRERJTkcsXG4gICAgcGFkZGluZ0xlZnQgOiBHUklELkNPTFVNTlNfUEFERElORyxcblxuICAgIG1pbldpZHRoOiAocHJvcHMud2lkdGggfHwgKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMueHhzIHx8IHByb3BzLnhzIHx8IHByb3BzLnNtIHx8IHByb3BzLm1kIHx8IHByb3BzLmxnIHx8IHByb3BzLnhsKSkpLFxuICAgIG1heFdpZHRoOiAocHJvcHMud2lkdGggfHwgKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMueHhzIHx8IHByb3BzLnhzIHx8IHByb3BzLnNtIHx8IHByb3BzLm1kIHx8IHByb3BzLmxnIHx8IHByb3BzLnhsKSkpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNTXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMueHhzKSksXG4gICAgICAgIG1heFdpZHRoOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChwcm9wcy54eHMpKSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuR1QuWFhTXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMueHMpKSxcbiAgICAgICAgbWF4V2lkdGg6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHByb3BzLnhzKSksXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlNNXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMuc20pKSxcbiAgICAgICAgbWF4V2lkdGg6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHByb3BzLnNtKSksXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkdULlNNXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMubWQpKSxcbiAgICAgICAgbWF4V2lkdGg6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHByb3BzLm1kKSksXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkdULk1EXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMubGcpKSxcbiAgICAgICAgbWF4V2lkdGg6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHByb3BzLmxnKSksXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlhMXToge1xuICAgICAgICBtaW5XaWR0aDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgocHJvcHMueGwpKSxcbiAgICAgICAgbWF4V2lkdGg6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHByb3BzLnhsKSksXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBDb2x1bW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtbldyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb2wgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sdW1uV3JhcHBlcj5cbiAgICApO1xufTtcblxuLyogU2l6ZXMgVHlwZXMgKi9cbmNvbnN0IHNpemVzVHlwZXMgPSBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb3BUeXBlcy5udW1iZXJcbl0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICAgIHhzcyAgIDogc2l6ZXNUeXBlcyxcbiAgICB4cyAgICA6IHNpemVzVHlwZXMsXG4gICAgc20gICAgOiBzaXplc1R5cGVzLFxuICAgIG1kICAgIDogc2l6ZXNUeXBlcyxcbiAgICBsZyAgICA6IHNpemVzVHlwZXMsXG4gICAgeGwgICAgOiBzaXplc1R5cGVzLFxuICAgIHdpZHRoIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl19 */");
/* Component */

var Column = function Column(props) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(ColumnWrapper, _extends({}, props, {
    className: "aph-col ".concat(className || '')
  }), children);
};
/* Sizes Types */


var sizesTypes = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]);
/* Properties Types */


Column.propTypes = {
  xss: sizesTypes,
  xs: sizesTypes,
  sm: sizesTypes,
  md: sizesTypes,
  lg: sizesTypes,
  xl: sizesTypes,
  width: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Default Properties */

Column.defaultProps = {
  styles: {}
};
/* Exporting */

var _default = Column;
exports.default = _default;