"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconList = function IconList(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height,
      color = props.color;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    id: "aph-icon-list-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-list-group",
    fill: color,
    d: "M7,11 C5.8954305,11 5,10.1045695 5,9 C5,7.8954305 5.8954305,7 7,7 C8.1045695,7 9,7.8954305 9,9 C9,10.1045695 8.1045695,11 7,11 Z M7,17 C5.8954305,17 5,16.1045695 5,15 C5,13.8954305 5.8954305,13 7,13 C8.1045695,13 9,13.8954305 9,15 C9,16.1045695 8.1045695,17 7,17 Z M7,23 C5.8954305,23 5,22.1045695 5,21 C5,19.8954305 5.8954305,19 7,19 C8.1045695,19 9,19.8954305 9,21 C9,22.1045695 8.1045695,23 7,23 Z M12.5,7.5 L23.5,7.5 C24.3284271,7.5 25,8.17157288 25,9 C25,9.82842712 24.3284271,10.5 23.5,10.5 L12.5,10.5 C11.6715729,10.5 11,9.82842712 11,9 C11,8.17157288 11.6715729,7.5 12.5,7.5 Z M12.5,13.5 L23.5,13.5 C24.3284271,13.5 25,14.1715729 25,15 C25,15.8284271 24.3284271,16.5 23.5,16.5 L12.5,16.5 C11.6715729,16.5 11,15.8284271 11,15 C11,14.1715729 11.6715729,13.5 12.5,13.5 Z M12.5,19.5 L23.5,19.5 C24.3284271,19.5 25,20.1715729 25,21 C25,21.8284271 24.3284271,22.5 23.5,22.5 L12.5,22.5 C11.6715729,22.5 11,21.8284271 11,21 C11,20.1715729 11.6715729,19.5 12.5,19.5 Z"
  })));
};
/* Exporting */


var _default = IconList;
exports.default = _default;