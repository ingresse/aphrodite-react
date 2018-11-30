"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICONS = void 0;

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Export */
var ICONS = Object.assign(['arrow-down-circle', 'arrow-left-circle', 'arrow-right-circle', 'arrow-up-circle', 'info-circle', 'check', 'check-circle', 'check-thin', 'question-circle', 'times-circle', 'loading'], {
  ENCODE_SVG: function ENCODE_SVG(reactElement) {
    return 'data:image/svg+xml,' + escape(_server.default.renderToStaticMarkup(reactElement));
  }
});
exports.ICONS = ICONS;