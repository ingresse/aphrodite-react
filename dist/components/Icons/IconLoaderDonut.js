"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Core Packages */

/* Helpers */

/* Icon styles */
var IconStyled = (0, _styledBase.default)("svg", {
  target: "edz3eco0"
})(_utils.animations.spin(), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb25Mb2FkZXJEb251dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzZCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb25Mb2FkZXJEb251dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogSWNvbiBzdHlsZXMgKi9cbmNvbnN0IEljb25TdHlsZWQgPSBzdHlsZWQuc3ZnYFxuICAgICR7YW5pbWF0aW9ucy5zcGluKCl9O1xuYDtcblxuLyogSWNvbiBJdHNlbGYgKi9cbmNvbnN0IEljb25Mb2FkZXJEb251dCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25TdHlsZWRcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICB3aWR0aD17YCR7d2lkdGggfHwgc2l6ZX1weGB9XG4gICAgICAgICAgICAgaGVpZ2h0PXtgJHtoZWlnaHQgfHwgc2l6ZX1weGB9XG4gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cImFwaC1pY29uLWxvYWRlci1ncm91cFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cImFwaC1pY29uLWxvYWRlci1wYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSwyMi41IEMxOS4xNDIxMzU2LDIyLjUgMjIuNSwxOS4xNDIxMzU2IDIyLjUsMTUgQzIyLjUsMTAuODU3ODY0NCAxOS4xNDIxMzU2LDcuNSAxNSw3LjUgQzEwLjg1Nzg2NDQsNy41IDcuNSwxMC44NTc4NjQ0IDcuNSwxNVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9JY29uU3R5bGVkPlxuICAgICk7XG59O1xuXG4vKiBJY29uIERlZmF1bHQgUHJvcHMgKi9cbkljb25Mb2FkZXJEb251dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZSA6IDIwLFxufTtcblxuLyogSWNvbiBQcm9wZXJ0aWVzIFR5cGVzICovXG5JY29uTG9hZGVyRG9udXQucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemUgOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJY29uTG9hZGVyRG9udXQ7XG4iXX0= */"));
/* Icon Itself */

var IconLoaderDonut = function IconLoaderDonut(props) {
  var color = props.color,
      size = props.size,
      width = props.width,
      height = props.height;
  return _react.default.createElement(IconStyled, {
    xmlns: "http://www.w3.org/2000/svg",
    width: (width || size) + "px",
    height: (height || size) + "px",
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    id: "aph-icon-loader-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("path", {
    id: "aph-icon-loader-path",
    stroke: color,
    strokeWidth: "4",
    d: "M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
  })));
};
/* Icon Default Props */


IconLoaderDonut.defaultProps = {
  color: 'white',
  size: 20
};
/* Icon Properties Types */

IconLoaderDonut.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
/* Exporting */

var _default = IconLoaderDonut;
exports.default = _default;