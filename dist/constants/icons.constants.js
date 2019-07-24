"use strict";

exports.__esModule = true;
exports.ICONS = void 0;

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Export */
var ICONS = Object.assign(['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'bluetooth', 'camera', 'check', 'check-thin', 'external-ticket', 'eye', 'flash', 'flash-off', 'info', 'list', 'loader', 'loading', 'lock', 'unlock', 'search', 'times', 'arrow-down-circle', 'arrow-left-circle', 'arrow-right-circle', 'arrow-up-circle', 'check-circle', 'info-circle', 'question-circle', 'times-circle'], {
  ENCODE_SVG: function ENCODE_SVG(reactElement) {
    return 'data:image/svg+xml,' + escape(_server.default.renderToStaticMarkup(reactElement));
  }
});
exports.ICONS = ICONS;