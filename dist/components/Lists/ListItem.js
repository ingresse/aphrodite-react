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
})("box-sizing:border-box;display:block;margin:0;padding:10px;background-color:transparent;transition:color 0.15s linear,background-color 0.15s linear;will-change:color,background-color;&.active{color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary');
}, ";background-color:", function (props) {
  return _utils.colors.getFromTheme(props, 'secondary', 'crystal');
}, ";}", function (props) {
  return props.onClick ? {
    cursor: 'pointer',
    color: _utils.colors.getFromTheme(props, 'secondary')
  } : null;
}, ";", function (props) {
  return props.onClick || props.hoverable ? {
    '&:hover': {
      color: _utils.colors.getFromTheme(props, 'secondary'),
      backgroundColor: _utils.colors.getFromTheme(props, 'secondary', 'crystal')
    }
  } : null;
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBjb2xvciAwLjE1cyBsaW5lYXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMgbGluZWFyXG4gICAgO1xuICAgIHdpbGwtY2hhbmdlOlxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvclxuICAgIDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknLCAnY3J5c3RhbCcpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5vbkNsaWNrKSA/IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGNvbG9yIDogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpLFxuICAgIH0gOiBudWxsfTtcblxuICAgICR7cHJvcHMgPT4gKHByb3BzLm9uQ2xpY2sgfHwgcHJvcHMuaG92ZXJhYmxlKSA/IHtcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvciAgICAgICAgICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScsICdjcnlzdGFsJyksXG4gICAgICAgIH1cbiAgICB9IDogbnVsbH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IExpc3RJdGVtID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb21wb25lbnQsXG4gICAgICAgIGhvdmVyYWJsZSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBBcGhMaXN0SXRlbSA9IChjb21wb25lbnQgPyBBcGhMaXN0SXRlbVN0eWxlZC53aXRoQ29tcG9uZW50KGNvbXBvbmVudCkgOiBBcGhMaXN0SXRlbVN0eWxlZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEl0ZW1cbiAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbGlzdF9faXRlbSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5MaXN0SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaG92ZXJhYmxlOiBmYWxzZSxcbiAgICBzdHlsZXMgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGhvdmVyYWJsZTogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXX0= */"));
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