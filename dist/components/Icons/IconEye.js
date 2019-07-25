"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconEye = function IconEye(props) {
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
    id: "aph-icon-eye-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-eye-path",
    d: "M5.34544747,14.7030573 C8.56363164,11.5676858 11.7818158,10 15,10 C18.2181923,10 21.4363846,11.5676937 24.6545769,14.7030811 L24.6545535,14.7031051 C25.0946794,15.1319063 25.1038597,15.8363109 24.6750585,16.2764368 C24.6683125,16.2833609 24.6614766,16.2901967 24.6545525,16.2969427 C21.4363684,19.4323142 18.2181842,21 15,21 C11.7818077,21 8.5636154,19.4323063 5.34542309,16.2969189 L5.34544646,16.2968949 C4.90532063,15.8680937 4.89614027,15.1636891 5.32494155,14.7235632 C5.33168748,14.7166391 5.33852337,14.7098033 5.34544747,14.7030573 Z M15,18.25 C16.5362373,18.25 17.7816037,17.0187831 17.7816037,15.5 C17.7816037,13.9812169 16.5362373,12.75 15,12.75 C13.4637627,12.75 12.2183963,13.9812169 12.2183963,15.5 C12.2183963,17.0187831 13.4637627,18.25 15,18.25 Z",
    fill: color
  })));
};
/* Exporting */


var _default = IconEye;
exports.default = _default;