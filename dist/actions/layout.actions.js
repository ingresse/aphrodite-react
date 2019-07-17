"use strict";

exports.__esModule = true;
exports.layoutActions = void 0;

var _constants = require("../constants");

/* Constant */

/**
 * Trigger to Resize window event
 *
 * @return {function} dispatch
 */
var resized = function resized() {
  return function (dispatch) {
    dispatch({
      type: _constants.LAYOUT.RESIZED
    });
  };
};
/* Exporting */


var layoutActions = {
  resized: resized
};
exports.layoutActions = layoutActions;