"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentElo = function IconPaymentElo(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), _react.default.createElement("g", {
    id: "Pagamento-/-Elo",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, _react.default.createElement("use", {
    xlinkHref: "#path-1"
  })), _react.default.createElement("use", {
    id: "Fundo",
    fill: "#000000",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "Elo",
    mask: "url(#mask-2)"
  }, _react.default.createElement("g", {
    transform: "translate(6.750000, 7.000000)"
  }, _react.default.createElement("path", {
    d: "M6.77271739,3.64757702 C7.26080435,3.48604504 7.78258696,3.39912924 8.32571739,3.39912924 C10.6947174,3.39912924 12.6724783,5.06631854 13.1255,7.28253133 L16.483587,6.60387728 C15.7129783,2.8377846 12.353913,0.00348955614 8.32571739,0.00348955614 C7.40271739,0.00348955614 6.51604348,0.152484987 5.68632609,0.427082898 L6.77271739,3.64757702",
    id: "Fill-1",
    fill: "#F9C623"
  }), _react.default.createElement("path", {
    d: "M2.80971739,14.4310809 L5.08056522,11.8870868 C4.06682609,10.9971854 3.42736957,9.69853198 3.42736957,8.25174478 C3.42736957,6.80601305 4.06606522,5.50800587 5.07917391,4.61911684 L2.80778261,2.07495039 C1.08636957,3.58616514 0,5.79365405 0,8.25174478 C0,10.7115157 1.08680435,12.9196723 2.80971739,14.4310809",
    id: "Fill-3",
    fill: "#009ACB"
  }), _react.default.createElement("path", {
    d: "M13.1245217,9.22563251 C12.6696739,11.4405529 10.6938696,13.1045757 8.32571739,13.1045757 C7.78215217,13.1045757 7.259,13.0178753 6.77121739,12.8552879 L5.68343478,16.0770313 C6.51315217,16.3514354 7.40163043,16.5 8.32571739,16.5 C12.3500652,16.5 15.7084783,13.6704008 16.4821957,9.90771149 L13.1245217,9.22563251",
    id: "Fill-4",
    fill: "#DC3E2A"
  })))));
};
/* Exporting */


var _default = IconPaymentElo;
exports.default = _default;