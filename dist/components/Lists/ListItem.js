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
  return !props.borderBottom ? null : "inset 0 1px 0 0 " + _utils.colors.getFromTheme(props, 'helper', 'original', 0.25);
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
      backgroundColor: _utils.colors.getFromTheme(props, 'helper', 'original', 0.25)
    }
  } : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93ICAgICAgOiAke3Byb3BzID0+ICghcHJvcHMuYm9yZGVyQm90dG9tID8gbnVsbCA6IGBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJywgJ29yaWdpbmFsJywgMC4yNSl9YCl9O1xuXG4gICAgdHJhbnNpdGlvbiA6XG4gICAgICAgIGNvbG9yIDAuMTVzIGxpbmVhcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBsaW5lYXJcbiAgICA7XG4gICAgd2lsbC1jaGFuZ2U6XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yXG4gICAgO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScsICdjcnlzdGFsJyl9O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gKHByb3BzLm9uQ2xpY2spID8ge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgY29sb3IgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5JyksXG5cbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvciAgICAgICAgICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScsICdjcnlzdGFsJyksXG4gICAgICAgIH1cbiAgICB9IDogbnVsbH07XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5ob3ZlcmFibGUpID8ge1xuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicsICdvcmlnaW5hbCcsIDAuMjUpLFxuICAgICAgICB9XG4gICAgfSA6IG51bGx9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgTGlzdEl0ZW0gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgaG92ZXJhYmxlLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IEFwaExpc3RJdGVtID0gKGNvbXBvbmVudCA/IEFwaExpc3RJdGVtU3R5bGVkLndpdGhDb21wb25lbnQoY29tcG9uZW50KSA6IEFwaExpc3RJdGVtU3R5bGVkKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0SXRlbVxuICAgICAgICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0X19pdGVtICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkxpc3RJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBob3ZlcmFibGU6IGZhbHNlLFxuICAgIHN0eWxlcyAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJhYmxlOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcbiJdfQ== */"));
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