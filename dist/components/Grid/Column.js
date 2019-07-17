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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sdW1uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2x1bW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzIEhlbHBlcnMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQ29sdW1uV3JhcHBlciA9IHN0eWxlZCgnZGl2JykoKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBmaXJzdCxcbiAgICAgICAgbGFzdCxcblxuICAgICAgICB3aWR0aCxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHh4cyxcbiAgICAgICAgeHMsXG4gICAgICAgIHNtLFxuICAgICAgICBtZCxcbiAgICAgICAgbGcsXG4gICAgICAgIHhsLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IE9SREVSID0gKFxuICAgICAgICAoZmlyc3QgPT09ICd4eHMnIHx8IGZpcnN0ID09PSAneHMnKSA/IC0xIDogKFxuICAgICAgICAgICAgKGxhc3QgPT09ICd4eHMnIHx8IGxhc3QgPT09ICd4cycpID8gMSA6IG51bGxcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQ1NTIEZsZXggb3JkZXIgcHJvcGVydHksIGJhc2VkIG9uIENvbXBvbmVudCBQcm9wXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2l6ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE9yZGVyIChzaXplID0gJ3hzJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGZpcnN0ID09PSBzaXplKSA/IC0xIDogKFxuICAgICAgICAgICAgICAgIChsYXN0ID09PSBzaXplKSA/IDEgOiBudWxsXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleCAgICAgICAgIDogJzAgMCBhdXRvJyxcbiAgICAgICAgZmxleEdyb3cgICAgIDogMSxcbiAgICAgICAgZmxleEJhc2lzICAgIDogMCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cbiAgICAgICAgb3JkZXI6IE9SREVSLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogR1JJRC5DT0xVTU5TX1BBRERJTkcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogR1JJRC5DT0xVTU5TX1BBRERJTkcsXG5cbiAgICAgICAgZmxleEJhc2lzOiAod2lkdGggfHwgR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4eHMgfHwgeHMpIHx8ICcxMDAlJyksXG4gICAgICAgIG1heFdpZHRoIDogKHdpZHRoIHx8IEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeHhzIHx8IHhzKSB8fCAnMTAwJScpLFxuXG4gICAgICAgIC4uLnN0eWxlcyxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeHMpKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeHMpKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ3hzJyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuR1QuU01dOiB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHNtKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHNtKSksXG4gICAgICAgICAgICBvcmRlciAgICA6IGdldE9yZGVyKCdzbScpLFxuICAgICAgICB9LFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkdULk1EXToge1xuICAgICAgICAgICAgZmxleEJhc2lzOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChtZCkpLFxuICAgICAgICAgICAgbWF4V2lkdGggOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChtZCkpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignbWQnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5MR106IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgobGcpKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgobGcpKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ2xnJyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuR1QuWExdOiB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHhsKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKHhsKSksXG4gICAgICAgICAgICBvcmRlciAgICA6IGdldE9yZGVyKCd4bCcpLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgQ29sdW1uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sdW1uV3JhcHBlclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY29sICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbHVtbldyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBTaXplcyBUeXBlcyAqL1xuY29uc3Qgc2l6ZXNUeXBlcyA9IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJvcFR5cGVzLm51bWJlclxuXSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gICAgeHNzICAgOiBzaXplc1R5cGVzLFxuICAgIHhzICAgIDogc2l6ZXNUeXBlcyxcbiAgICBzbSAgICA6IHNpemVzVHlwZXMsXG4gICAgbWQgICAgOiBzaXplc1R5cGVzLFxuICAgIGxnICAgIDogc2l6ZXNUeXBlcyxcbiAgICB4bCAgICA6IHNpemVzVHlwZXMsXG5cbiAgICBmaXJzdCA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFzdCAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgd2lkdGggOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl19 */");
/* Component */

var Column = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(ColumnWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-col ".concat(className || '')
  }), children);
});
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
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Default Properties */

Column.defaultProps = {
  styles: {}
};
/* Exporting */

var _default = Column;
exports.default = _default;