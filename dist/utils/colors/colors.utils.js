"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chromaJs = _interopRequireDefault(require("chroma-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Get Color Shade Format
 *
 * @param {string} dark     - Color dark shade
 * @param {string} original - Color original shade
 * @param {string} light    - Color light shade
 * @param {string} crystal  - Color crystal shade
 *
 * @return {object}
 */
var getShadesFormat = function getShadesFormat(dark, original, light, crystal) {
  return {
    dark: dark,
    original: original,
    light: light,
    crystal: crystal
  };
};
/**
 * Colors Shaded
 */


var tangerine = getShadesFormat('rgb(250, 132, 9)', 'rgb(252, 163, 17)', 'rgb(252, 190, 24)', 'rgb(254, 232, 195)');
var ocean = getShadesFormat('rgb(0, 134, 201)', 'rgb(0, 165, 219)', 'rgb(0, 192, 232)', 'rgb(191, 232, 246)');
var mercury = getShadesFormat('rgb(90, 96, 101)', 'rgb(122, 128, 133)', 'rgb(152, 159, 163)', 'rgb(221, 223, 224)');
var bamboo = getShadesFormat('rgb(66, 173, 60)', 'rgb(96, 198, 89)', 'rgb(126, 218, 118)', 'rgb(157, 235, 149)');
var sunflower = getShadesFormat('rgb(255, 173, 17)', 'rgb(255, 198, 30)', 'rgb(255, 218, 43)', 'rgb(255, 240, 198)');
var ruby = getShadesFormat('rgb(230, 38, 39)', 'rgb(239, 60, 62)', 'rgb(245, 83, 86)', 'rgb(251, 206, 206)');
var supernova = getShadesFormat('rgb(141, 77, 156)', 'rgb(172, 108, 184)', 'rgb(198, 138, 207)', 'rgb(234, 218, 237)');
var mint = getShadesFormat('rgb(38, 168, 134)', 'rgb(60, 194, 165)', 'rgb(83, 215, 192)', 'rgb(206, 239, 232)');
var oil = getShadesFormat('rgb(27, 27, 27)', 'rgb(45, 45, 45)', 'rgb(64, 64, 64)', 'rgb(202, 202, 202)');
var translucid = getShadesFormat('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)');
var poison = getShadesFormat('rgb(81, 108, 178)', 'rgb(81, 108, 178)', 'rgb(81, 108, 178)', 'rgb(81, 108, 178)');
var shades = {
  tangerine: tangerine,
  ocean: ocean,
  mercury: mercury,
  bamboo: bamboo,
  sunflower: sunflower,
  ruby: ruby,
  supernova: supernova,
  mint: mint,
  oil: oil,
  translucid: translucid,
  poison: poison
};
/**
 * Colors Alias
 */

var alias = {
  primary: Object.assign({}, tangerine),
  secondary: Object.assign({}, ocean),
  info: Object.assign({}, supernova),
  success: Object.assign({}, bamboo),
  warning: Object.assign({}, sunflower),
  error: Object.assign({}, ruby)
};
/**
 * Default Colors
 */

var stock = {
  tangerine: tangerine.original,
  ocean: ocean.original,
  mercury: mercury.original,
  bamboo: bamboo.original,
  sunflower: sunflower.original,
  ruby: ruby.original,
  supernova: supernova.original,
  mint: mint.original,
  oil: oil.original,
  primary: tangerine.original,
  secondary: ocean.original,
  info: supernova.original,
  success: bamboo.original,
  warning: sunflower.original,
  error: ruby.original,
  base: 'rgb(0, 0, 0)',
  inverse: 'rgb(255, 255, 255)',
  disabled: mercury.crystal,
  helper: mercury.crystal,
  translucid: translucid.original,
  smoke: 'rgb(248, 248, 248)',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)'
};
/**
 * All Colors
 */

var all = _objectSpread({
  alias: alias,
  shades: _objectSpread({}, shades, {}, alias)
}, stock);
/**
 * Get Color with custom Opacity
 *
 * @param {number} opacity - between 0 and 1;
 * @param {string} color   - any rgb/rgba color;
 *
 * @return {string} RGBA Color
 */


var getOpacity = function getOpacity(opacity, color) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color === void 0) {
    color = all.shades.mercury.original;
  }

  var opacityToReplace = !isNaN(opacity) && opacity > 0 && opacity < 1 ? ", " + opacity + ")" : '';

  if (!opacityToReplace || typeof color !== 'string' || !color.includes('rgb(') && !color.includes('rgba(')) {
    return color;
  }

  return color.replace('rgb(', 'rgba(').replace(')', opacityToReplace);
};
/**
 * Get Color
 *
 * @param {string} color
 * @param {string} shade
 * @param {number} opacity
 *
 * @return {string} RGBA Color
 */


var get = function get(color, shade, opacity) {
  if (color === void 0) {
    color = 'primary';
  }

  if (shade === void 0) {
    shade = 'original';
  }

  if (opacity === void 0) {
    opacity = 1;
  }

  var _color = (color + '').toLowerCase();

  var selected = all.shades[_color] ? all.shades[_color][shade] : all[_color];

  if (typeof color !== 'string' || !selected) {
    return getOpacity(opacity, selected || _color);
  }

  return getOpacity(opacity, selected);
};
/**
 * Get Color from Theme
 *
 * @param {object} componentProps
 * @param {string} colorKey
 * @param {string} colorShade
 * @param {number} opacity
 *
 * @return {string} RGBA Color
 */


var getFromTheme = function getFromTheme(componentProps, colorKey, colorShade, opacity) {
  if (componentProps === void 0) {
    componentProps = {};
  }

  if (colorShade === void 0) {
    colorShade = 'original';
  }

  var _componentProps = componentProps,
      theme = _componentProps.theme;

  if (typeof theme !== 'object' || !theme[colorKey]) {
    return get(colorKey, colorShade, opacity);
  }

  var themeShades = theme.shades && theme.shades[colorKey] ? theme.shades[colorKey] : theme[colorKey];

  if (typeof themeShades !== 'object') {
    return themeShades || '';
  }

  return getOpacity(opacity, themeShades[colorShade]);
};
/**
 * Colors reference
 */


var colors = _objectSpread({}, all, {
  getFromTheme: getFromTheme,
  getOpacity: getOpacity,
  get: get
});
/**
 * Set Colors
 *
 * @param {string} colorKey
 * @param {string} shadeOriginal
 * @param {string} shadeDark
 * @param {string} shadeLight
 * @param {string} shadeCrystal
 *
 * @param {object} colors
 */


var set = function set(colorKey, shadeOriginal, shadeDark, shadeLight, shadeCrystal) {
  var _objectSpread2, _objectSpread3;

  if (typeof colorKey !== 'string' || typeof shadeOriginal !== 'string') {
    return colors;
  }

  var colorOriginal = "rgb(" + (0, _chromaJs.default)(shadeOriginal).rgb().join(',') + ")";
  var colorDark = shadeDark || (0, _chromaJs.default)(colorOriginal).darken().css();
  var colorLight = shadeLight || (0, _chromaJs.default)(colorOriginal).brighten(0.5).css();
  var colorCrystal = shadeCrystal || (0, _chromaJs.default)(colorOriginal).brighten(1).css();
  colors = _objectSpread({}, colors, (_objectSpread3 = {}, _objectSpread3[colorKey] = colorOriginal, _objectSpread3.shades = _objectSpread({}, colors.shades, (_objectSpread2 = {}, _objectSpread2[colorKey] = getShadesFormat(colorDark, colorOriginal, colorLight, colorCrystal), _objectSpread2)), _objectSpread3));
  return colors;
};
/**
 * Colors reference override
 */


colors = _objectSpread({}, colors, {
  set: set
});
/**
 * Exporting Everything
 */

var _default = colors;
exports.default = _default;