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

/* Component Styles */
var BadgeWrapper = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e483s4c0"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    display: props.block ? 'block' : 'inline-block',
    minWidth: !isNaN(props.width) ? parseInt(props.width, 10) + _constants.GRID.UNIT : props.width || null,
    padding: '5px 15px',
    margin: 0,
    minHeight: '30px',
    verticalAlign: 'top',
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    textAlign: props.prefix ? 'left' : 'center',
    boxShadow: "0 0 1px 0 ".concat(_constants.COLORS.GET('DARK_BLACK', 0.2)),
    borderRadius: _constants.RADIUS.XS + _constants.GRID.UNIT,
    '&:after': {
      display: 'table',
      clear: 'both'
    }
  }, _constants.MEDIA_QUERIES.LT.SM, {
    display: props.blockXs ? 'block' : null,
    fontSize: '16px',
    lineHeight: '20px',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius: _constants.RADIUS.XXS + _constants.GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEJhZGdlV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uICAgICA6ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheSAgICAgIDogcHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jaycsXG4gICAgbWluV2lkdGggICAgIDogKCFpc05hTihwcm9wcy53aWR0aCkgPyAocGFyc2VJbnQocHJvcHMud2lkdGgsIDEwKSArIEdSSUQuVU5JVCkgOiAocHJvcHMud2lkdGggfHwgbnVsbCkpLFxuICAgIHBhZGRpbmcgICAgICA6ICc1cHggMTVweCcsXG4gICAgbWFyZ2luICAgICAgIDogMCxcbiAgICBtaW5IZWlnaHQgICAgOiAnMzBweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG5cbiAgICBmb250U2l6ZSAgICAgOiAnMTJweCcsXG4gICAgbGluZUhlaWdodCAgIDogJzIwcHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHRleHRBbGlnbiAgICA6IChwcm9wcy5wcmVmaXggPyAnbGVmdCcgOiAnY2VudGVyJyksXG5cbiAgICBib3hTaGFkb3cgICA6IGAwIDAgMXB4IDAgJHtDT0xPUlMuR0VUKCdEQVJLX0JMQUNLJywgMC4yKX1gLFxuICAgIGJvcmRlclJhZGl1czogKFJBRElVUy5YUyArIEdSSUQuVU5JVCksXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgICAgY2xlYXIgIDogJ2JvdGgnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgZGlzcGxheSAgIDogKHByb3BzLmJsb2NrWHMgPyAnYmxvY2snIDogbnVsbCksXG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzE1cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICcxNXB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IFJBRElVUy5YWFMgKyBHUklELlVOSVQsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IENoaWxkcmVuIFN0eWxlICovXG5jb25zdCBCYWRnZVByZWZpeFdyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZyAgOiAnNXB4IDE1cHgnLFxuICAgIG1hcmdpbiAgIDogJy01cHggMTBweCAtNXB4IC0xNXB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzVweCA2cHgnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEJhZGdlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IGZpbGxlZCAgID0gQ09MT1JTLkZJTEwocHJvcHMuY29sb3IpO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gIXByb3BzLnNtID8ge30gOiB7XG4gICAgICAgIG1pbkhlaWdodCA6ICcyMHB4JyxcbiAgICAgICAgZm9udFNpemUgIDogJzEwcHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTBweCcsXG5cbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAnOHB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IFJBRElVUy5YWFMgKyBHUklELlVOSVQsXG4gICAgfTtcbiAgICBsZXQgcHJlZml4ID0gIXByb3BzLnNtID8ge30gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzhweCcsXG4gICAgICAgIG1hcmdpbkxlZnQgIDogJy04cHgnLFxuICAgICAgICBtYXJnaW5SaWdodCA6ICc2cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YWFMgKyBHUklELlVOSVR9YCxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICAgICAgbWFyZ2luIDogJy0xMHB4IDEwcHggLTEwcHggLTE1cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzVweCA4cHgnLFxuXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhTICsgR1JJRC5VTklUfWAsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5jb2xvcikge1xuICAgICAgICBsZXQgdG9uZWQgPSAoQ09MT1JTLlRPTkVTW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldKTtcblxuICAgICAgICBpZiAodG9uZWQpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IE9iamVjdC5hc3NpZ24oe30sIHByZWZpeCwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9uZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCYWRnZVdyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHN0eWxlcz17T2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIsIGZpbGxlZCwgcHJvcHMuc3R5bGVzKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1iYWRnZSAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHsoIXByb3BzLnByZWZpeCkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxCYWRnZVByZWZpeFdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzLnByZWZpeFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e09iamVjdC5hc3NpZ24oe30sIHByZWZpeCwgcHJvcHMucHJlZml4U3R5bGVzKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWJhZGdlX19wcmVmaXggJHtwcm9wcy5wcmVmaXhDbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcmVmaXh9XG4gICAgICAgICAgICAgICAgPC9CYWRnZVByZWZpeFdyYXBwZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0JhZGdlV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkJhZGdlLnByb3BUeXBlcyA9IHtcbiAgICBibG9jayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBibG9ja1hzOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzbSAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHdpZHRoICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgcHJlZml4U3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHByZWZpeENsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXX0= */");
/* Component Children Style */

var BadgePrefixWrapper = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e483s4c1"
})(function (props) {
  return _objectSpread(_defineProperty({
    boxSizing: 'border-box',
    display: 'inline-block',
    padding: '5px 15px',
    margin: '-5px 10px -5px -15px',
    textAlign: 'center',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  }, _constants.MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 6px',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBNRURJQV9RVUVSSUVTLCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBCYWRnZVdyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbiAgICAgOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXkgICAgICA6IHByb3BzLmJsb2NrID8gJ2Jsb2NrJyA6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1pbldpZHRoICAgICA6ICghaXNOYU4ocHJvcHMud2lkdGgpID8gKHBhcnNlSW50KHByb3BzLndpZHRoLCAxMCkgKyBHUklELlVOSVQpIDogKHByb3BzLndpZHRoIHx8IG51bGwpKSxcbiAgICBwYWRkaW5nICAgICAgOiAnNXB4IDE1cHgnLFxuICAgIG1hcmdpbiAgICAgICA6IDAsXG4gICAgbWluSGVpZ2h0ICAgIDogJzMwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXG4gICAgZm9udFNpemUgICAgIDogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQgICA6ICcyMHB4JyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB0ZXh0QWxpZ24gICAgOiAocHJvcHMucHJlZml4ID8gJ2xlZnQnIDogJ2NlbnRlcicpLFxuXG4gICAgYm94U2hhZG93ICAgOiBgMCAwIDFweCAwICR7Q09MT1JTLkdFVCgnREFSS19CTEFDSycsIDAuMil9YCxcbiAgICBib3JkZXJSYWRpdXM6IChSQURJVVMuWFMgKyBHUklELlVOSVQpLFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICAgIGNsZWFyICA6ICdib3RoJyxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIGRpc3BsYXkgICA6IChwcm9wcy5ibG9ja1hzID8gJ2Jsb2NrJyA6IG51bGwpLFxuICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxNXB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAnMTVweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBSQURJVVMuWFhTICsgR1JJRC5VTklULFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBDaGlsZHJlbiBTdHlsZSAqL1xuY29uc3QgQmFkZ2VQcmVmaXhXcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmcgIDogJzVweCAxNXB4JyxcbiAgICBtYXJnaW4gICA6ICctNXB4IDEwcHggLTVweCAtMTVweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICBtYXJnaW4gOiAnLTEwcHggMTBweCAtMTBweCAtMTVweCcsXG4gICAgICAgIHBhZGRpbmc6ICc1cHggNnB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhTICsgR1JJRC5VTklUfWAsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBCYWRnZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBmaWxsZWQgICA9IENPTE9SUy5GSUxMKHByb3BzLmNvbG9yKTtcbiAgICBjb25zdCBtb2RpZmllciA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBtaW5IZWlnaHQgOiAnMjBweCcsXG4gICAgICAgIGZvbnRTaXplICA6ICcxMHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzEwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzhweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBSQURJVVMuWFhTICsgR1JJRC5VTklULFxuICAgIH07XG4gICAgbGV0IHByZWZpeCA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICc4cHgnLFxuICAgICAgICBtYXJnaW5MZWZ0ICA6ICctOHB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQgOiAnNnB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfWAsXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggOHB4JyxcblxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgbGV0IHRvbmVkID0gKENPTE9SUy5UT05FU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSk7XG5cbiAgICAgICAgaWYgKHRvbmVkKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFkZ2VXcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBzdHlsZXM9e09iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLCBmaWxsZWQsIHByb3BzLnN0eWxlcyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYmFkZ2UgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7KCFwcm9wcy5wcmVmaXgpID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VQcmVmaXhXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5wcmVmaXhQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHByb3BzLnByZWZpeFN0eWxlcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1iYWRnZV9fcHJlZml4ICR7cHJvcHMucHJlZml4Q2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJlZml4fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2VQcmVmaXhXcmFwcGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9CYWRnZVdyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5CYWRnZS5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2tYczogcHJvcFR5cGVzLmJvb2wsXG4gICAgc20gICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHByZWZpeFN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBwcmVmaXhDbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIl19 */");
/* Component */

var Badge = (0, _react.forwardRef)(function (props, ref) {
  var filled = _constants.COLORS.FILL(props.color);

  var modifier = !props.sm ? {} : {
    minHeight: '20px',
    fontSize: '10px',
    lineHeight: '10px',
    paddingRight: '8px',
    paddingLeft: '8px',
    borderRadius: _constants.RADIUS.XXS + _constants.GRID.UNIT
  };
  var prefix = !props.sm ? {} : _defineProperty({
    paddingRight: '8px',
    paddingLeft: '8px',
    marginLeft: '-8px',
    marginRight: '6px',
    borderRadius: "".concat(_constants.RADIUS.XXS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XXS + _constants.GRID.UNIT)
  }, _constants.MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 8px',
    borderRadius: "".concat(_constants.RADIUS.XS + _constants.GRID.UNIT, " 0 0 ").concat(_constants.RADIUS.XS + _constants.GRID.UNIT)
  });

  if (props.color) {
    var toned = _constants.COLORS.TONES[props.color.toUpperCase()];

    if (toned) {
      prefix = Object.assign({}, prefix, {
        backgroundColor: toned
      });
    }
  }

  return _react.default.createElement(BadgeWrapper, _extends({}, props, {
    styles: Object.assign({}, modifier, filled, props.styles),
    className: "aph-badge ".concat(props.className || '')
  }), !props.prefix ? null : _react.default.createElement(BadgePrefixWrapper, _extends({}, props.prefixProps, {
    styles: Object.assign({}, prefix, props.prefixStyles),
    className: "aph-badge__prefix ".concat(props.prefixClassName || '')
  }), props.prefix), props.children);
});
/* Properties Types */

Badge.propTypes = {
  block: _propTypes.default.bool,
  blockXs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  width: _propTypes.default.any,
  styles: _propTypes.default.object,
  className: _propTypes.default.string,
  prefixStyles: _propTypes.default.object,
  prefixClassName: _propTypes.default.string
};
/* Exporting */

var _default = Badge;
exports.default = _default;