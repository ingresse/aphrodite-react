"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLORS = void 0;

/* Color Base */
var _COLORS = {
  DARK_BLACK: 'rgb(0, 0, 0)',
  // #000000
  BLACK: 'rgb(45, 45, 45)',
  // #2D2D2D
  WHITE: 'rgb(255, 255, 255)',
  // #FFFFFF
  SMOKE: 'rgb(248, 248, 248)',
  // #F8F8F8
  DARK_SMOKE: 'rgb(242, 242, 242)',
  // #F2F2F2
  GREY_SMOKE: 'rgb(238, 238, 238)',
  // #EEEEEE
  LIGHT_GREY: 'rgb(212, 215, 217)',
  // #D4D7D9
  GREY: 'rgb(157, 166, 173)',
  // #9DA6AD
  DARK_GREY: 'rgb(122, 128, 133)',
  // #7A8085
  YELLOW: 'rgb(255, 198, 30)',
  // #FFC61E
  ORANGE: 'rgb(252, 163, 17)',
  // #FCA311
  ORANGE_RED: 'rgb(255, 141, 80)',
  // #FF8D50
  RED: 'rgb(241, 51, 53)',
  // #F13335
  GREEN: 'rgb(96,198,89)',
  // #60C659
  BLUE: 'rgb(0, 165, 219)',
  // #00A5DB
  PURPLE: 'rgb(172, 108, 184)',
  // #AC6CB8
  LIGHT_PINK: 'rgb(248, 130, 184)' // #F882B8

};
/* Segmented Colors */

var _SEGMENTED = Object.assign({}, _COLORS, {
  PRIMARY: _COLORS.BLUE,
  SECONDARY: _COLORS.ORANGE,
  ERROR: _COLORS.RED,
  WARNING: _COLORS.YELLOW,
  SUCCESS: _COLORS.GREEN,
  INFO: _COLORS.BLUE,
  INVERSE: _COLORS.WHITE
});
/* Exporting */


var COLORS = Object.assign({}, _SEGMENTED, {
  /**
   * Get an catalog color in different opacity
   * or can apply opacity to the color from param
   *
   * @return {string} selected color
   */
  GET: function GET() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'BLACK';
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (!color || typeof color !== 'string') {
      return _COLORS.BLACK;
    }

    var selected = _SEGMENTED[color.toUpperCase()];

    if (!selected && !color.includes('rgb(')) {
      return _COLORS.BLACK;
    }

    if (!selected && color.includes('rgb(')) {
      selected = color;
    }

    if (!isNaN(opacity) && opacity >= 0 && opacity <= 1) {
      selected = selected.replace('rgb', 'rgba');
      selected = selected.replace(')', ", ".concat(opacity, ")"));
    }

    return selected;
  }
});
exports.COLORS = COLORS;