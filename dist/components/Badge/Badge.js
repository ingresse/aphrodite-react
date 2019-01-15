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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgR1JJRCwgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQmFkZ2VXcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmcgICAgOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb24gICAgIDogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5ICAgICAgOiBwcm9wcy5ibG9jayA/ICdibG9jaycgOiAnaW5saW5lLWJsb2NrJyxcbiAgICBtaW5XaWR0aCAgICAgOiAoIWlzTmFOKHByb3BzLndpZHRoKSA/IChwYXJzZUludChwcm9wcy53aWR0aCwgMTApICsgR1JJRC5VTklUKSA6IChwcm9wcy53aWR0aCB8fCBudWxsKSksXG4gICAgcGFkZGluZyAgICAgIDogJzVweCAxNXB4JyxcbiAgICBtYXJnaW4gICAgICAgOiAwLFxuICAgIG1pbkhlaWdodCAgICA6ICczMHB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcblxuICAgIGZvbnRTaXplICAgICA6ICcxMnB4JyxcbiAgICBsaW5lSGVpZ2h0ICAgOiAnMjBweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgdGV4dEFsaWduICAgIDogKHByb3BzLnByZWZpeCA/ICdsZWZ0JyA6ICdjZW50ZXInKSxcblxuICAgIGJveFNoYWRvdyAgIDogYDAgMCAxcHggMCAke0NPTE9SUy5HRVQoJ0RBUktfQkxBQ0snLCAwLjIpfWAsXG4gICAgYm9yZGVyUmFkaXVzOiAoUkFESVVTLlhTICsgR1JJRC5VTklUKSxcblxuICAgICcmOmFmdGVyJzoge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgICBjbGVhciAgOiAnYm90aCcsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBkaXNwbGF5ICAgOiAocHJvcHMuYmxvY2tYcyA/ICdibG9jaycgOiBudWxsKSxcbiAgICAgICAgZm9udFNpemUgIDogJzE2cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTVweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzE1cHgnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogUkFESVVTLlhYUyArIEdSSUQuVU5JVCxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgQ2hpbGRyZW4gU3R5bGUgKi9cbmNvbnN0IEJhZGdlUHJlZml4V3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICBwYWRkaW5nICA6ICc1cHggMTVweCcsXG4gICAgbWFyZ2luICAgOiAnLTVweCAxMHB4IC01cHggLTE1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG5cbiAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhTICsgR1JJRC5VTklUfWAsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgZm9udFNpemUgIDogJzE2cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgbWFyZ2luIDogJy0xMHB4IDEwcHggLTEwcHggLTE1cHgnLFxuICAgICAgICBwYWRkaW5nOiAnNXB4IDZweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgQmFkZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmaWxsZWQgICA9IENPTE9SUy5GSUxMKHByb3BzLmNvbG9yKTtcbiAgICBjb25zdCBtb2RpZmllciA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBtaW5IZWlnaHQgOiAnMjBweCcsXG4gICAgICAgIGZvbnRTaXplICA6ICcxMHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzEwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzhweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBSQURJVVMuWFhTICsgR1JJRC5VTklULFxuICAgIH07XG4gICAgbGV0IHByZWZpeCA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICc4cHgnLFxuICAgICAgICBtYXJnaW5MZWZ0ICA6ICctOHB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQgOiAnNnB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfWAsXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggOHB4JyxcblxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgbGV0IHRvbmVkID0gKENPTE9SUy5UT05FU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSk7XG5cbiAgICAgICAgaWYgKHRvbmVkKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFkZ2VXcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBzdHlsZXM9e09iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLCBmaWxsZWQsIHByb3BzLnN0eWxlcyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYmFkZ2UgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7KCFwcm9wcy5wcmVmaXgpID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VQcmVmaXhXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5wcmVmaXhQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHByb3BzLnByZWZpeFN0eWxlcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1iYWRnZV9fcHJlZml4ICR7cHJvcHMucHJlZml4Q2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJlZml4fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2VQcmVmaXhXcmFwcGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9CYWRnZVdyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkJhZGdlLnByb3BUeXBlcyA9IHtcbiAgICBibG9jayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBibG9ja1hzOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzbSAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHdpZHRoICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgcHJlZml4U3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHByZWZpeENsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXX0= */");
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEJhZGdlV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uICAgICA6ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheSAgICAgIDogcHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jaycsXG4gICAgbWluV2lkdGggICAgIDogKCFpc05hTihwcm9wcy53aWR0aCkgPyAocGFyc2VJbnQocHJvcHMud2lkdGgsIDEwKSArIEdSSUQuVU5JVCkgOiAocHJvcHMud2lkdGggfHwgbnVsbCkpLFxuICAgIHBhZGRpbmcgICAgICA6ICc1cHggMTVweCcsXG4gICAgbWFyZ2luICAgICAgIDogMCxcbiAgICBtaW5IZWlnaHQgICAgOiAnMzBweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG5cbiAgICBmb250U2l6ZSAgICAgOiAnMTJweCcsXG4gICAgbGluZUhlaWdodCAgIDogJzIwcHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHRleHRBbGlnbiAgICA6IChwcm9wcy5wcmVmaXggPyAnbGVmdCcgOiAnY2VudGVyJyksXG5cbiAgICBib3hTaGFkb3cgICA6IGAwIDAgMXB4IDAgJHtDT0xPUlMuR0VUKCdEQVJLX0JMQUNLJywgMC4yKX1gLFxuICAgIGJvcmRlclJhZGl1czogKFJBRElVUy5YUyArIEdSSUQuVU5JVCksXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgICAgY2xlYXIgIDogJ2JvdGgnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgZGlzcGxheSAgIDogKHByb3BzLmJsb2NrWHMgPyAnYmxvY2snIDogbnVsbCksXG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzE1cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICcxNXB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IFJBRElVUy5YWFMgKyBHUklELlVOSVQsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IENoaWxkcmVuIFN0eWxlICovXG5jb25zdCBCYWRnZVByZWZpeFdyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZyAgOiAnNXB4IDE1cHgnLFxuICAgIG1hcmdpbiAgIDogJy01cHggMTBweCAtNXB4IC0xNXB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzVweCA2cHgnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEJhZGdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZmlsbGVkICAgPSBDT0xPUlMuRklMTChwcm9wcy5jb2xvcik7XG4gICAgY29uc3QgbW9kaWZpZXIgPSAhcHJvcHMuc20gPyB7fSA6IHtcbiAgICAgICAgbWluSGVpZ2h0IDogJzIwcHgnLFxuICAgICAgICBmb250U2l6ZSAgOiAnMTBweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxMHB4JyxcblxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICc4cHgnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogUkFESVVTLlhYUyArIEdSSUQuVU5JVCxcbiAgICB9O1xuICAgIGxldCBwcmVmaXggPSAhcHJvcHMuc20gPyB7fSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAnOHB4JyxcbiAgICAgICAgbWFyZ2luTGVmdCAgOiAnLThweCcsXG4gICAgICAgIG1hcmdpblJpZ2h0IDogJzZweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhYUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhYUyArIEdSSUQuVU5JVH1gLFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICAgICAgZm9udFNpemUgIDogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgICAgICBtYXJnaW4gOiAnLTEwcHggMTBweCAtMTBweCAtMTVweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDhweCcsXG5cbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIGxldCB0b25lZCA9IChDT0xPUlMuVE9ORVNbcHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV0pO1xuXG4gICAgICAgIGlmICh0b25lZCkge1xuICAgICAgICAgICAgcHJlZml4ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJlZml4LCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b25lZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJhZGdlV3JhcHBlclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgc3R5bGVzPXtPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllciwgZmlsbGVkLCBwcm9wcy5zdHlsZXMpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWJhZGdlICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAgeyghcHJvcHMucHJlZml4KSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPEJhZGdlUHJlZml4V3JhcHBlclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHMucHJlZml4UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17T2JqZWN0LmFzc2lnbih7fSwgcHJlZml4LCBwcm9wcy5wcmVmaXhTdHlsZXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYmFkZ2VfX3ByZWZpeCAke3Byb3BzLnByZWZpeENsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByZWZpeH1cbiAgICAgICAgICAgICAgICA8L0JhZGdlUHJlZml4V3JhcHBlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQmFkZ2VXcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5CYWRnZS5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2tYczogcHJvcFR5cGVzLmJvb2wsXG4gICAgc20gICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHByZWZpeFN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBwcmVmaXhDbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIl19 */");
/* Component */

var Badge = function Badge(props) {
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
};
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