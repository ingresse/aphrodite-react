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
  var _objectSpread2, _objectSpread3;

  var first = props.first,
      last = props.last,
      width = props.width,
      styles = props.styles,
      xxs = props.xxs,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl;
  var ORDER = first === 'xxs' || first === 'xs' ? -1 : last === 'xxs' || last === 'xs' ? 1 : null;
  /**
   * Get CSS Flex order property, based on Component Prop
   *
   * @param {string} size
   */

  function getOrder() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xs';
    return first === size ? -1 : last === size ? 1 : null;
  }

  return _objectSpread((_objectSpread2 = {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    order: ORDER,
    paddingRight: _constants.GRID.COLUMNS_PADDING,
    paddingLeft: _constants.GRID.COLUMNS_PADDING
  }, _defineProperty(_objectSpread2, "flexBasis", width || _constants.GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'), _defineProperty(_objectSpread2, "maxWidth", width || _constants.GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'), _objectSpread2), styles, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _constants.MEDIA_QUERIES.LT.SM, {
    flexBasis: _constants.GRID.COLUMNS_GET_WIDTH(xs),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(xs),
    order: getOrder('xs')
  }), _defineProperty(_objectSpread3, _constants.MEDIA_QUERIES.GT.SM, {
    flexBasis: _constants.GRID.COLUMNS_GET_WIDTH(sm),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(sm),
    order: getOrder('sm')
  }), _defineProperty(_objectSpread3, _constants.MEDIA_QUERIES.GT.MD, {
    flexBasis: _constants.GRID.COLUMNS_GET_WIDTH(md),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(md),
    order: getOrder('md')
  }), _defineProperty(_objectSpread3, _constants.MEDIA_QUERIES.GT.LG, {
    flexBasis: _constants.GRID.COLUMNS_GET_WIDTH(lg),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(lg),
    order: getOrder('lg')
  }), _defineProperty(_objectSpread3, _constants.MEDIA_QUERIES.GT.XL, {
    flexBasis: _constants.GRID.COLUMNS_GET_WIDTH(xl),
    maxWidth: _constants.GRID.COLUMNS_GET_WIDTH(xl),
    order: getOrder('xl')
  }), _objectSpread3));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sdW1uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2x1bW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBDb2x1bW5XcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGZpcnN0LFxuICAgICAgICBsYXN0LFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgeHhzLFxuICAgICAgICB4cyxcbiAgICAgICAgc20sXG4gICAgICAgIG1kLFxuICAgICAgICBsZyxcbiAgICAgICAgeGwsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgT1JERVIgPSAoXG4gICAgICAgIChmaXJzdCA9PT0gJ3h4cycgfHwgZmlyc3QgPT09ICd4cycpID8gLTEgOiAoXG4gICAgICAgICAgICAobGFzdCA9PT0gJ3h4cycgfHwgbGFzdCA9PT0gJ3hzJykgPyAxIDogbnVsbFxuICAgICAgICApXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBDU1MgRmxleCBvcmRlciBwcm9wZXJ0eSwgYmFzZWQgb24gQ29tcG9uZW50IFByb3BcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaXplXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXIgKHNpemUgPSAneHMnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoZmlyc3QgPT09IHNpemUpID8gLTEgOiAoXG4gICAgICAgICAgICAgICAgKGxhc3QgPT09IHNpemUpID8gMSA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHtcbiAgICAgICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAwIGF1dG8nLFxuICAgICAgICBmbGV4R3JvdyAgICAgOiAxLFxuICAgICAgICBmbGV4QmFzaXMgICAgOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICAgICBvcmRlcjogT1JERVIsXG5cbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBHUklELkNPTFVNTlNfUEFERElORyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiBHUklELkNPTFVNTlNfUEFERElORyxcblxuICAgICAgICBmbGV4QmFzaXM6ICh3aWR0aCB8fCBHUklELkNPTFVNTlNfR0VUX1dJRFRIKHh4cyB8fCB4cykgfHwgJzEwMCUnKSxcbiAgICAgICAgbWF4V2lkdGggOiAod2lkdGggfHwgR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4eHMgfHwgeHMpIHx8ICcxMDAlJyksXG5cbiAgICAgICAgLi4uc3R5bGVzLFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICAgICAgZmxleEJhc2lzOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4cykpLFxuICAgICAgICAgICAgbWF4V2lkdGggOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4cykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcigneHMnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5TTV06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoc20pKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoc20pKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ3NtJyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuR1QuTURdOiB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKG1kKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKG1kKSksXG4gICAgICAgICAgICBvcmRlciAgICA6IGdldE9yZGVyKCdtZCcpLFxuICAgICAgICB9LFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkdULkxHXToge1xuICAgICAgICAgICAgZmxleEJhc2lzOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChsZykpLFxuICAgICAgICAgICAgbWF4V2lkdGggOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChsZykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignbGcnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5YTF06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeGwpKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeGwpKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ3hsJyksXG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBDb2x1bW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtbldyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb2wgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sdW1uV3JhcHBlcj5cbiAgICApO1xufTtcblxuLyogU2l6ZXMgVHlwZXMgKi9cbmNvbnN0IHNpemVzVHlwZXMgPSBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb3BUeXBlcy5udW1iZXJcbl0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICAgIHhzcyAgIDogc2l6ZXNUeXBlcyxcbiAgICB4cyAgICA6IHNpemVzVHlwZXMsXG4gICAgc20gICAgOiBzaXplc1R5cGVzLFxuICAgIG1kICAgIDogc2l6ZXNUeXBlcyxcbiAgICBsZyAgICA6IHNpemVzVHlwZXMsXG4gICAgeGwgICAgOiBzaXplc1R5cGVzLFxuXG4gICAgZmlyc3QgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhc3QgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdpZHRoIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl19 */");
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
  first: _propTypes.default.string,
  last: _propTypes.default.string,
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