"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Modules */
var IconClose = function IconClose(props) {
  return _react.default.createElement("svg", {
    width: "12px",
    height: "12px",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    id: "layer1",
    transform: "matrix(0.70710678,0.70710678,-0.70710678,0.70710678,741.64716,-738.13245)"
  }, _react.default.createElement("rect", {
    style: {
      fill: props.color,
      fillOpacity: 1,
      fillRule: 'evenodd',
      stroke: 'none',
      strokeWidth: '1px',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeOpacity: 1
    },
    id: "rect3336",
    width: "2.0000002",
    height: "12.000004",
    x: "5",
    y: "1040.3622"
  }), _react.default.createElement("rect", {
    style: {
      fill: props.color,
      fillOpacity: 1,
      fillRule: 'evenodd',
      stroke: 'none',
      strokeWidth: '1px',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeOpacity: 1
    },
    id: "rect3336-3",
    width: "2.0000002",
    height: "12.000004",
    x: "1045.3622",
    y: "-12.000002",
    transform: "matrix(0,1,-1,0,0,0)"
  })));
};
/* Component default properties */


IconClose.defaultProps = {
  color: '#FFFFFF'
  /* Map State to Props */

};
var _default = IconClose;
exports.default = _default;