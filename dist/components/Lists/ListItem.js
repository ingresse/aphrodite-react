"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var AphListItemStyled = (0, _styledBase.default)("li", {
  target: "e6wegxb0"
})("box-sizing:border-box;display:block;margin:0;padding:10px;background-color:transparent;box-shadow:", function (props) {
  return !props.borderTop && !props.borderBottom ? null : "inset 0 " + (props.borderBottom ? '-' : '') + "1px 0 0 " + _utils.colors.getOpacity(_utils.colors.getFromTheme(props, 'helper'), 0.25);
}, ";transition:color 0.15s linear,background-color 0.15s linear;will-change:color,background-color;&.active{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary', 'crystal');
}, ";}", function (props) {
  return props.onClick ? {
    cursor: 'pointer',
    color: _utils.colors.getFromTheme(props, 'secondary'),
    '&:hover': {
      color: _utils.colors.getFromTheme(props, 'secondary'),
      backgroundColor: _utils.colors.getFromTheme(props, 'secondary', 'crystal')
    }
  } : null;
}, ";", function (props) {
  return props.hoverable ? {
    '&:hover': {
      backgroundColor: _utils.colors.getOpacity(_utils.colors.getFromTheme(props, 'helper'), 0.25)
    }
  } : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93ICAgICAgOiAke3Byb3BzID0+ICgoIXByb3BzLmJvcmRlclRvcCAmJiAhcHJvcHMuYm9yZGVyQm90dG9tKSA/IG51bGwgOiBgaW5zZXQgMCAke3Byb3BzLmJvcmRlckJvdHRvbSA/ICctJyA6ICcnfTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eShjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJyksIDAuMjUpfWApfTtcblxuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBjb2xvciAwLjE1cyBsaW5lYXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMgbGluZWFyXG4gICAgO1xuICAgIHdpbGwtY2hhbmdlOlxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvclxuICAgIDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknLCAnY3J5c3RhbCcpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5vbkNsaWNrKSA/IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGNvbG9yIDogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpLFxuXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5JyksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknLCAnY3J5c3RhbCcpLFxuICAgICAgICB9XG4gICAgfSA6IG51bGx9O1xuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuaG92ZXJhYmxlKSA/IHtcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRPcGFjaXR5KGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSwgMC4yNSksXG4gICAgICAgIH1cbiAgICB9IDogbnVsbH07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBMaXN0SXRlbSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBob3ZlcmFibGUsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgQXBoTGlzdEl0ZW0gPSAoY29tcG9uZW50ID8gQXBoTGlzdEl0ZW1TdHlsZWQud2l0aENvbXBvbmVudChjb21wb25lbnQpIDogQXBoTGlzdEl0ZW1TdHlsZWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RJdGVtXG4gICAgICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWxpc3RfX2l0ZW0gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIGhvdmVyYWJsZTogZmFsc2UsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBob3ZlcmFibGU6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19 */"));
/* Component Itself */

var ListItem = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      component = props.component,
      hoverable = props.hoverable;
  var AphListItem = component ? AphListItemStyled.withComponent(component, {
    target: "e6wegxb1"
  }) : AphListItemStyled;
  return _react.default.createElement(AphListItem, _extends({
    role: "option"
  }, props, {
    ref: ref,
    className: "aph-list__item " + (className || '')
  }));
});
/* Default Properties */

ListItem.defaultProps = {
  hoverable: false,
  styles: {}
};
/* Properties Types */

ListItem.propTypes = {
  hoverable: _propTypes.default.bool,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = ListItem;
exports.default = _default;