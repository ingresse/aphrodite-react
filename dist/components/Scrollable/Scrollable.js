"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _constants = require("../../constants");

var _styled2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Style Wrapper */
var StyledWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e19gg4i70"
})(function (props) {
  var _objectSpread2;

  return _objectSpread({}, props.styles, (_objectSpread2 = {
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '-10px',
    marginLeft: '-10px',
    '&:before,&:after': {
      content: '" "',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '15px',
      zIndex: 1
    },
    '&:before': {
      left: 0,
      background: "linear-gradient(to right, " + _utils.colors.getFromTheme(props, 'inverse') + " 50%, " + _utils.colors.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)') + " 80%)"
    },
    '&:after': {
      right: 0,
      background: "linear-gradient(to right, " + _utils.colors.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)') + " 0%, " + _utils.colors.getFromTheme(props, 'inverse') + " 50%)"
    },
    '&.scrollable--xs': {
      '&:before,&:after': {
        content: 'initial'
      }
    }
  }, _objectSpread2[_constants.MEDIA_QUERIES.XS] = {
    marginRight: '-20px',
    marginLeft: '-20px',
    '&.scrollable--xs:before,&.scrollable--xs:after': {
      content: '" "'
    }
  }, _objectSpread2));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlIFdyYXBwZXIgKi9cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICBwYWRkaW5nVG9wICAgOiAnMTBweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0ICA6ICctMTBweCcsXG4gICAgbWFyZ2luTGVmdCAgIDogJy0xMHB4JyxcblxuICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50IDogJ1wiIFwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcCAgICAgOiAnMCcsXG4gICAgICAgIGJvdHRvbSAgOiAnMCcsXG4gICAgICAgIHdpZHRoICAgOiAnMTVweCcsXG4gICAgICAgIHpJbmRleCAgOiAxLFxuICAgIH0sXG5cbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX0gNTAlLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSA4MCUpYCxcbiAgICB9LFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfSA1MCUpYCxcbiAgICB9LFxuXG4gICAgJyYuc2Nyb2xsYWJsZS0teHMnOiB7XG4gICAgICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdpbml0aWFsJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTIwcHgnLFxuICAgICAgICBtYXJnaW5MZWZ0IDogJy0yMHB4JyxcblxuICAgICAgICAnJi5zY3JvbGxhYmxlLS14czpiZWZvcmUsJi5zY3JvbGxhYmxlLS14czphZnRlcic6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICB9XG4gICAgfVxufSkpO1xuXG4vKiBTdHlsZWQgU2Nyb2xsICovXG5jb25zdCBTdHlsZWRTY3JvbGxhYmxlID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgb3ZlcmZsb3cgIDogJ2F1dG8nLFxuICAgIG92ZXJmbG93WSA6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuXG4gICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luIDogJzAgMTBweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG5cbiAgICAgICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICAgICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgU2Nyb2xsYWJsZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIG9ubHlYUyxcbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoY2xhc3NOYW1lIHx8ICcnKSArIChvbmx5WFMgPyAnIHNjcm9sbGFibGUtLXhzJyA6ICcnKX0+XG4gICAgICAgICAgICA8U3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1N0eWxlZFNjcm9sbGFibGU+XG4gICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydCBDb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGFibGU7XG4iXX0= */");
/* Styled Scroll */

var StyledScrollable = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e19gg4i71"
})((_styled2 = {
  overflow: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '.scrollable__item': {
    display: 'inline-block',
    margin: '0 10px',
    verticalAlign: 'middle'
  }
}, _styled2[_constants.MEDIA_QUERIES.XS] = {
  textAlign: 'left',
  '.scrollable__item': {
    '&:first-of-type': {
      marginLeft: '20px'
    },
    '&:last-child': {
      marginRight: '20px'
    }
  }
}, _styled2), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR5QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TY3JvbGxhYmxlL1Njcm9sbGFibGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRlcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBTdHlsZSBXcmFwcGVyICovXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLnByb3BzLnN0eWxlcyxcblxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgcGFkZGluZ1RvcCAgIDogJzEwcHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcbiAgICBtYXJnaW5SaWdodCAgOiAnLTEwcHgnLFxuICAgIG1hcmdpbkxlZnQgICA6ICctMTBweCcsXG5cbiAgICAnJjpiZWZvcmUsJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudCA6ICdcIiBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3AgICAgIDogJzAnLFxuICAgICAgICBib3R0b20gIDogJzAnLFxuICAgICAgICB3aWR0aCAgIDogJzE1cHgnLFxuICAgICAgICB6SW5kZXggIDogMSxcbiAgICB9LFxuXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9IDUwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpLnJlcGxhY2UoJ3JnYignLCAncmdiYSgnKS5yZXBsYWNlKCcpJywgJywgMCknKX0gODAlKWAsXG4gICAgfSxcblxuICAgICcmOmFmdGVyJzoge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpLnJlcGxhY2UoJ3JnYignLCAncmdiYSgnKS5yZXBsYWNlKCcpJywgJywgMCknKX0gMCUsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX0gNTAlKWAsXG4gICAgfSxcblxuICAgICcmLnNjcm9sbGFibGUtLXhzJzoge1xuICAgICAgICAnJjpiZWZvcmUsJjphZnRlcic6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnaW5pdGlhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlhTXToge1xuICAgICAgICBtYXJnaW5SaWdodDogJy0yMHB4JyxcbiAgICAgICAgbWFyZ2luTGVmdCA6ICctMjBweCcsXG5cbiAgICAgICAgJyYuc2Nyb2xsYWJsZS0teHM6YmVmb3JlLCYuc2Nyb2xsYWJsZS0teHM6YWZ0ZXInOiB7XG4gICAgICAgICAgICBjb250ZW50IDogJ1wiIFwiJyxcbiAgICAgICAgfVxuICAgIH1cbn0pKTtcblxuLyogU3R5bGVkIFNjcm9sbCAqL1xuY29uc3QgU3R5bGVkU2Nyb2xsYWJsZSA9IHN0eWxlZCgnZGl2Jykoe1xuICAgIG92ZXJmbG93ICA6ICdhdXRvJyxcbiAgICBvdmVyZmxvd1kgOiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcblxuICAgICcuc2Nyb2xsYWJsZV9faXRlbSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbiA6ICcwIDEwcHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuXG4gICAgICAgICcuc2Nyb2xsYWJsZV9faXRlbSc6IHtcbiAgICAgICAgICAgICcmOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNjcm9sbGFibGUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBvbmx5WFMsXG4gICAgICAgIHN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkV3JhcHBlclxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17KGNsYXNzTmFtZSB8fCAnJykgKyAob25seVhTID8gJyBzY3JvbGxhYmxlLS14cycgOiAnJyl9PlxuICAgICAgICAgICAgPFN0eWxlZFNjcm9sbGFibGU+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9TdHlsZWRTY3JvbGxhYmxlPlxuICAgICAgICA8L1N0eWxlZFdyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBFeHBvcnQgQ29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxhYmxlO1xuIl19 */");
/* Component Itself */

var Scrollable = (0, _react.forwardRef)(function (props, ref) {
  var children = props.children,
      className = props.className,
      onlyXS = props.onlyXS,
      styles = props.styles;
  return _react.default.createElement(StyledWrapper, {
    ref: ref,
    styles: styles,
    className: (className || '') + (onlyXS ? ' scrollable--xs' : '')
  }, _react.default.createElement(StyledScrollable, null, children));
});
/* Export Component */

var _default = Scrollable;
exports.default = _default;