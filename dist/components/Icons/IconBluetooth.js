"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconBluetooth = function IconBluetooth(props) {
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
    id: "aph-icon-bluetooth-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M16.9725,15.1440782 L20.5925,11.5240782 C20.7825,11.3340782 20.8825,11.0840782 20.8825,10.8140782 C20.8825,10.5440782 20.7725,10.2940782 20.5925,10.1040782 L16.2625,5.79407822 C15.9725,5.50407822 15.5425,5.42407822 15.1725,5.57407822 C14.8025,5.72407822 14.5625,6.09407822 14.5625,6.49407822 L14.5625,12.7240782 L10.7025,8.87407822 C10.3125,8.48407822 9.6825,8.48407822 9.2925,8.87407822 C8.9025,9.26407822 8.9025,9.89407822 9.2925,10.2840782 L14.1425,15.1440782 L9.2925,19.9940782 C8.9025,20.3840782 8.9025,21.0140782 9.2925,21.4040782 C9.6825,21.7940782 10.3125,21.7940782 10.7025,21.4040782 L14.5625,17.5540782 L14.5625,23.7840782 C14.5625,24.1840782 14.8025,24.5540782 15.1825,24.7040782 C15.3025,24.7540782 15.4325,24.7840782 15.5625,24.7840782 C15.8225,24.7840782 16.0825,24.6840782 16.2725,24.4940782 L20.5925,20.1740782 C20.7825,19.9840782 20.8825,19.7340782 20.8825,19.4640782 C20.8825,19.1940782 20.7725,18.9440782 20.5925,18.7540782 L16.9725,15.1440782 Z M16.5625,8.91407822 L18.4725,10.8240782 L16.5625,12.7240782 L16.5625,8.91407822 Z M16.5625,21.3740782 L16.5625,17.5540782 L18.4725,19.4640782 L16.5625,21.3740782 Z",
    id: "aph-icon-bluetooth-shape",
    fill: color
  })));
};
/* Exporting */


var _default = IconBluetooth;
exports.default = _default;