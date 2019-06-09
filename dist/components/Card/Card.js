"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Styles */
var AphCardStyled = (0, _styledBase.default)("div", {
  target: "ef3ubj80"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.margin || null;
}, ";padding:", function (props) {
  return props.padding || '10px';
}, ";border-radius:", _constants.RADIUS.SM, "px;color:", _utils.colors.get('black'), ";background:", _utils.colors.get('white'), ";transition:background-color 0.25s linear,box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 5px ".concat(_utils.colors.get('black', 'original', 0.25))
  } : null;
}, ";", function (props) {
  return props.onClick ? {
    '&:hover': {
      background: _utils.colors.get('smoke')
    }
  } : null;
}, ";&.active,&:hover{", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 20px ".concat(_utils.colors.get('black', 'original', 0.25))
  } : null;
}, ";}.aph-card{box-shadow:none !important;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaENhcmRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbiB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgJzEwcHgnfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuXG4gICAgY29sb3IgICAgIDogJHtjb2xvcnMuZ2V0KCdibGFjaycpfTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuXG4gICAgdHJhbnNpdGlvbiA6IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyLCBib3gtc2hhZG93IDAuMjVzIGxpbmVhciwgcGFkZGluZyAwLjI1cyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHBhZGRpbmc7XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmJveFNoYWRvdyA/ICh7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCA1cHggJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfWAsXG4gICAgfSkgOiBudWxsfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMub25DbGljayA/ICh7XG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmdldCgnc21va2UnKSxcbiAgICAgICAgfVxuICAgIH0pIDogbnVsbH07XG5cbiAgICAmLmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy5ib3hTaGFkb3cgPyAoe1xuICAgICAgICAgICAgYm94U2hhZG93OiBgMCAwIDIwcHggJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfWAsXG4gICAgICAgIH0pIDogbnVsbH07XG4gICAgfVxuXG4gICAgLmFwaC1jYXJkIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENhcmQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENhcmRTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWNhcmQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbWFyZ2luICAgOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZyAgOiAnMTBweCcsXG4gICAgc3R5bGVzICAgOiB7fSxcbiAgICBib3hTaGFkb3c6IGZhbHNlLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBhZGRpbmcgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgYm94U2hhZG93OiBwcm9wVHlwZXMuYm9vbCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */"));
/* Component Itself */

var Card = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className;
  return _react.default.createElement(AphCardStyled, _extends({}, props, {
    ref: ref,
    className: "aph-card ".concat(className || '')
  }));
});
/* Default Properties */

Card.defaultProps = {
  margin: undefined,
  padding: '10px',
  styles: {},
  boxShadow: false
};
/* Properties Types */

Card.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  styles: _propTypes.default.object,
  boxShadow: _propTypes.default.bool
};
/* Exporting */

var _default = Card;
exports.default = _default;