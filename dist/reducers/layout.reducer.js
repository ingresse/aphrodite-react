"use strict";

exports.__esModule = true;
exports.default = void 0;

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Get Sizes
 */
var getSizes = function getSizes(_window) {
  if (_window === void 0) {
    _window = {
      innerWidth: 1280,
      innerHeight: 768
    };
  }

  var width = _window.innerWidth;
  var height = _window.innerHeight;
  var xs = width < _constants.SCREEN_SIZES.SM;
  var sm = width >= _constants.SCREEN_SIZES.SM && width < _constants.SCREEN_SIZES.MD;
  var md = width >= _constants.SCREEN_SIZES.MD && width < _constants.SCREEN_SIZES.LG;
  var lg = width >= _constants.SCREEN_SIZES.LG && width < _constants.SCREEN_SIZES.XL;
  var xl = width >= _constants.SCREEN_SIZES.XL;
  var GTxs = sm || md || lg || xl;
  var GTsm = md || lg || xl;
  var GTmd = lg || xl;
  var GTlg = width > _constants.SCREEN_SIZES.LG;
  var GTxl = width > _constants.SCREEN_SIZES.XL;
  var LTxs = xs;
  var LTsm = xs;
  var LTmd = xs || sm;
  var LTlg = xs || sm || md;
  var LTxl = xs || sm || md || lg;
  return {
    width: width,
    height: height,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    _lt_: {
      xs: LTxs,
      sm: LTsm,
      md: LTmd,
      lg: LTlg,
      xl: LTxl
    },
    _gt_: {
      xs: GTxs,
      sm: GTsm,
      md: GTmd,
      lg: GTlg,
      xl: GTxl
    }
  };
};
/* Initial State */


var initialState = getSizes();
/* Reducer */

var layout = function layout(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _constants.LAYOUT.RESIZED:
      var sizes = getSizes(action.window);
      return _objectSpread({}, state, {}, sizes);

    default:
      return state;
  }
};
/* Exporting */


var _default = layout;
exports.default = _default;