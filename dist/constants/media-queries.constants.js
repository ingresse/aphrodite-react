"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIA_QUERIES = void 0;

var _ = require("./");

/* Constants */

/* Media Queries */
var MEDIA_QUERIES = {
  PRINT: '@media print',
  XXS: "@media (max-width: ".concat(_.SCREEN_SIZES.XS - 1, "px)"),
  XS: "@media (min-width: ".concat(_.SCREEN_SIZES.XS, "px) and (max-width: ").concat(_.SCREEN_SIZES.SM - 1, "px)"),
  SM: "@media (min-width: ".concat(_.SCREEN_SIZES.SM, "px) and (max-width: ").concat(_.SCREEN_SIZES.MD - 1, "px)"),
  MD: "@media (min-width: ".concat(_.SCREEN_SIZES.MD, "px) and (max-width: ").concat(_.SCREEN_SIZES.LG - 1, "px)"),
  LG: "@media (min-width: ".concat(_.SCREEN_SIZES.LG, "px) and (max-width: ").concat(_.SCREEN_SIZES.XL - 1, "px)"),
  XL: "@media (min-width: ".concat(_.SCREEN_SIZES.XL, "px)"),
  // LESS THAN
  LT: {
    XS: "@media (max-width: ".concat(_.SCREEN_SIZES.XS - 1, "px)"),
    SM: "@media (max-width: ".concat(_.SCREEN_SIZES.SM - 1, "px)"),
    MD: "@media (max-width: ".concat(_.SCREEN_SIZES.MD - 1, "px)"),
    LG: "@media (max-width: ".concat(_.SCREEN_SIZES.LG - 1, "px)")
  },
  // GREATER THAN
  GT: {
    XXS: "@media (min-width: 1px)",
    XS: "@media (min-width: ".concat(_.SCREEN_SIZES.XS, "px)"),
    SM: "@media (min-width: ".concat(_.SCREEN_SIZES.SM, "px)"),
    MD: "@media (min-width: ".concat(_.SCREEN_SIZES.MD, "px)"),
    LG: "@media (min-width: ".concat(_.SCREEN_SIZES.LG, "px)"),
    XL: "@media (min-width: ".concat(_.SCREEN_SIZES.XL, "px)")
  }
};
exports.MEDIA_QUERIES = MEDIA_QUERIES;