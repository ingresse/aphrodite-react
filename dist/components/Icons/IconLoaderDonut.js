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
})(_utils.animations.spin(), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb25Mb2FkZXJEb251dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzZCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb25Mb2FkZXJEb251dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogSWNvbiBzdHlsZXMgKi9cbmNvbnN0IEljb25TdHlsZWQgPSBzdHlsZWQuc3ZnYFxuICAgICR7YW5pbWF0aW9ucy5zcGluKCl9O1xuYDtcblxuLyogSWNvbiBJdHNlbGYgKi9cbmNvbnN0IEljb25Mb2FkZXJEb251dCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIHNpemUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25TdHlsZWRcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICB3aWR0aD17YCR7c2l6ZX1weGB9XG4gICAgICAgICAgICAgaGVpZ2h0PXtgJHtzaXplfXB4YH1cbiAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOS41IDE3LjVBNy41IDcuNSAwIDEgMCAyIDEwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSWNvblN0eWxlZD5cbiAgICApO1xufTtcblxuLyogSWNvbiBEZWZhdWx0IFByb3BzICovXG5JY29uTG9hZGVyRG9udXQuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHNpemUgOiAyMCxcbn07XG5cbi8qIEljb24gUHJvcGVydGllcyBUeXBlcyAqL1xuSWNvbkxvYWRlckRvbnV0LnByb3BUeXBlcyA9IHtcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplIDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSWNvbkxvYWRlckRvbnV0O1xuIl19 */"));
/* Icon Itself */

var IconLoaderDonut = function IconLoaderDonut(props) {
  var color = props.color,
      size = props.size;
  return _react.default.createElement(IconStyled, {
    xmlns: "http://www.w3.org/2000/svg",
    width: size + "px",
    height: size + "px",
    viewBox: "0 0 20 20"
  }, _react.default.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M9.5 17.5A7.5 7.5 0 1 0 2 10"
  }));
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