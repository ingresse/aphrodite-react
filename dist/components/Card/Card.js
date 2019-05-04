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
}, ";border-radius:", _constants.RADIUS.SM, "px;color:", _utils.colors.get('black'), ";background:", _utils.colors.get('white'), ";box-shadow:0 0 5px ", _utils.colors.get('black', 'original', 0.25), ";transition:box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;&.active,&:hover{box-shadow:0 0 20px ", _utils.colors.get('black', 'original', 0.25), ";}.aph-card{box-shadow:none !important;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaENhcmRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbiB8fCBudWxsfTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgJzEwcHgnfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuXG4gICAgY29sb3IgICAgIDogJHtjb2xvcnMuZ2V0KCdibGFjaycpfTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5nZXQoJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcblxuICAgIHRyYW5zaXRpb24gOiBib3gtc2hhZG93IDAuMjVzIGxpbmVhciwgcGFkZGluZyAwLjI1cyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHBhZGRpbmc7XG5cbiAgICAmLmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcbiAgICB9XG5cbiAgICAuYXBoLWNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQ2FyZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoQ2FyZFN0eWxlZFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY2FyZCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXJnaW4gOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIHN0eWxlcyA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWRkaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */"));
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
  styles: {}
};
/* Properties Types */

Card.propTypes = {
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = Card;
exports.default = _default;