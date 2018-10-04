"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLORS = void 0;
var _COLORS = {
  BLACK: 'rgb(42, 42, 42)',
  WHITE: 'rgb(255, 255, 255)',
  ORANGE: 'rgb(252, 163, 17)',
  YELLOW: 'rgb(255, 198, 30)',
  RED: 'rgb(241, 51, 53)',
  GREEN: 'rgb(96,198,89)',
  BLUE: 'rgb(0, 165, 219)'
};
var COLORS = Object.assign({}, _COLORS, {
  PRIMARY: _COLORS.BLUE,
  SECONDARY: _COLORS.ORANGE,
  ERROR: _COLORS.RED,
  WARNING: _COLORS.YELLOW,
  SUCCESS: _COLORS.GREEN,
  INVERSE: _COLORS.WHITE
});
exports.COLORS = COLORS;