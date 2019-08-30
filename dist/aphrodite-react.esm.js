import _taggedTemplateLiteral from '@babel/runtime/helpers/esm/taggedTemplateLiteral';
import { keyframes, css, Global } from '@emotion/core';
import ReactDOMServer from 'react-dom/server';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _extends from '@babel/runtime/helpers/esm/extends';
import _styled from '@emotion/styled-base';
import React, { forwardRef, useRef, useState, useEffect, memo } from 'react';
import propTypes from 'prop-types';
import _typeof from '@babel/runtime/helpers/esm/typeof';
import chroma from 'chroma-js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import ReactClipboard from 'react-clipboard.js';
import Formatter from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';
import ReactTooltip from 'react-tooltip';
import Paginator from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/pt_BR';
import '@emotion/styled';
import InputNumber from 'react-input-number';
import CurrencyInput from 'react-currency-input';

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform: scaleY(0.1);\n    }\n\n    25% {\n        transform: scaleY(1);\n    }\n\n    50% {\n        transform: scaleY(0.95);\n    }\n\n    100% {\n        transform: scaleY(1);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity  : 0;\n        transform: translate3d(0, 75%, 0);\n    }\n    100% {\n        opacity  : 1;\n        transform: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/* Animation Fade In Up */

var fadeInUp = keyframes(_templateObject());
/* Animation Pull Up */

var pullUp = keyframes(_templateObject2());
var ANIMATIONS = {
  FADE_IN_UP: {
    animation: "".concat(fadeInUp, " 0.75s ease")
  },
  PULL_UP: {
    willChange: 'transform-origin',
    animation: "".concat(pullUp, " 0.75s ease"),
    transformOrigin: '50% 100%'
  }
};

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
  DARK_RED: 'rgb(196, 31, 31)',
  // #C41F1F'
  GREEN: 'rgb(96,198,89)',
  // #60C659
  DARK_GREEN: 'rgb(25, 174, 53)',
  // #19AE35
  LIGHT_BLUE: 'rgb(0, 209, 239)',
  // #00D1EF
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
/* Tones */


var _TONED = Object.assign({}, _SEGMENTED, {
  TONES: {
    'DARK_BLACK': _SEGMENTED.BLACK,
    'BLACK': _SEGMENTED.DARK_BLACK,
    'WHITE': _SEGMENTED.SMOKE,
    'SMOKE': _SEGMENTED.LIGHT_GREY,
    'DARK_SMOKE': _SEGMENTED.GREY_SMOKE,
    'GREY_SMOKE': _SEGMENTED.LIGHT_GREY,
    'LIGHT_GREY': _SEGMENTED.GREY,
    'GREY': _SEGMENTED.DARK_GREY,
    'DARK_GREY': _SEGMENTED.GREY,
    'YELLOW': _SEGMENTED.YELLOW,
    'ORANGE': _SEGMENTED.ORANGE,
    'ORANGE_RED': _SEGMENTED.ORANGE_RED,
    'RED': _SEGMENTED.DARK_RED,
    'DARK_RED': _SEGMENTED.RED,
    'GREEN': _SEGMENTED.DARK_GREEN,
    'DARK_GREEN': _SEGMENTED.GREEN,
    'BLUE': _SEGMENTED.BLUE,
    'PURPLE': _SEGMENTED.PURPLE,
    'LIGHT_PINK': _SEGMENTED.LIGHT_PINK,
    'PRIMARY': _SEGMENTED.PRIMARY,
    'SECONDARY': _SEGMENTED.SECONDARY,
    'ERROR': _SEGMENTED.ERROR,
    'WARNING': _SEGMENTED.WARNING,
    'SUCCESS': _SEGMENTED.SUCCESS,
    'INFO': _SEGMENTED.INFO,
    'INVERSE': _SEGMENTED.WHITE
  }
});
/* Exporting */


var COLORS = Object.assign({}, _TONED, {
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
      return _TONED.BLACK;
    }

    var selected = _TONED[color.toUpperCase()];

    if (!selected && !color.includes('rgb(')) {
      return _TONED.BLACK;
    }

    if (!selected && color.includes('rgb(')) {
      selected = color;
    }

    if (!isNaN(opacity) && opacity >= 0 && opacity <= 1) {
      selected = selected.replace('rgb', 'rgba');
      selected = selected.replace(')', ", ".concat(opacity, ")"));
    }

    return selected;
  },

  /**
   * Fill
   * apply background and color
   *
   * @return {object} selected color as background
   */
  FILL: function FILL() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SMOKE';

    if (typeof color !== 'string') {
      return {
        color: _TONED.BLACK,
        background: _TONED.SMOKE
      };
    }

    var _color = color.toUpperCase();

    var selected = _TONED[_color];
    var inverse = ['WHITE', 'SMOKE', 'DARK_SMOKE', 'GREY_SMOKE', 'LIGHT_GREY', 'YELLOW', 'WARNING', 'INVERSE'];

    if (!selected) {
      return {
        color: _TONED.BLACK,
        background: _TONED.SMOKE
      };
    }

    return {
      color: inverse.includes(_color) ? _TONED.BLACK : _TONED.WHITE,
      background: selected
    };
  }
});

/* Values */
var COLUMNS = 12;
/* Exporting */

var GRID = {
  UNIT: 'px',
  QUERIES: ['xs', 'sm', 'md', 'lg', 'xl'],
  CONTAINER_PADDING_XS: 15,
  CONTAINER_PADDING: 20,
  CONTAINER: Object.assign(980, {
    XS: 480,
    SM: 660,
    MD: 820,
    LG: 980,
    XL: 1440
  }),
  COLUMNS: COLUMNS,
  COLUMNS_PADDING: 10,
  COLUMNS_GET_WIDTH: function COLUMNS_GET_WIDTH(columnNumber) {
    function getPercentual(number) {
      return number * 10 / 12 * 10 + '%';
    }

    columnNumber = parseInt(columnNumber, 10);

    if (!columnNumber || typeof columnNumber !== 'number' || columnNumber < 1 || columnNumber > COLUMNS) {
      return null;
    }

    return getPercentual(columnNumber);
  }
};

/* Packages */
/* Export */

var ICONS = Object.assign(['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'bluetooth', 'camera', 'card', 'cards', 'check', 'delete', 'external-ticket', 'eye', 'flash', 'flash-off', 'info', 'items', 'list', 'loader', 'loading', 'lock', 'unlock', 'search', 'settings', 'options', 'minus', 'plus', 'times', 'qrcode', 'refresh', 'scan', 'ticketbooth', 'transfer', 'pencil', 'payment-amex', 'payment-bankbillet', 'payment-diners', 'payment-discover', 'payment-elo', 'payment-freepass', 'payment-mastercard', 'payment-money', 'payment-others', 'payment-paypal', 'payment-visa'], {
  ENCODE_SVG: function ENCODE_SVG(reactElement) {
    return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup(reactElement));
  }
});

/* Layout Constants */
var LAYOUT = {
  /* Actions */
  RESIZED: 'LAYOUT:RESIZED'
};

/* Exporting */
var RADIUS = Object.assign(5, {
  XXS: 5,
  XS: 5,
  SM: 5,
  MD: 5,
  LG: 10,
  XL: 10
});

/* Screen Sizes (pixels) */
var SCREEN_SIZES = {
  XS: 359,
  SM: 768,
  MD: 1024,
  LG: 1280,
  XL: 1440
};

/* Exporting */
var SIZES = {
  XS: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '8px',
    LINE_HEIGHT: '10px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  SM: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '14px',
    LINE_HEIGHT: '20px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  MD: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '16px',
    LINE_HEIGHT: '20px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  LG: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '20px',
    LINE_HEIGHT: '20px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  XL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '28px',
    LINE_HEIGHT: '30px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  XXL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '36px',
    LINE_HEIGHT: '40px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  ACTION_BAR_HEIGHT: '60px'
};

/* Constants */
/* Media Queries */

var MEDIA_QUERIES = {
  PRINT: '@media print',
  XXS: "@media (max-width: ".concat(SCREEN_SIZES.XS - 1, "px)"),
  XS: "@media (min-width: ".concat(SCREEN_SIZES.XS, "px) and (max-width: ").concat(SCREEN_SIZES.SM - 1, "px)"),
  SM: "@media (min-width: ".concat(SCREEN_SIZES.SM, "px) and (max-width: ").concat(SCREEN_SIZES.MD - 1, "px)"),
  MD: "@media (min-width: ".concat(SCREEN_SIZES.MD, "px) and (max-width: ").concat(SCREEN_SIZES.LG - 1, "px)"),
  LG: "@media (min-width: ".concat(SCREEN_SIZES.LG, "px) and (max-width: ").concat(SCREEN_SIZES.XL - 1, "px)"),
  XL: "@media (min-width: ".concat(SCREEN_SIZES.XL, "px)"),
  // LESS THAN
  LT: {
    XS: "@media (max-width: ".concat(SCREEN_SIZES.XS - 1, "px)"),
    SM: "@media (max-width: ".concat(SCREEN_SIZES.SM - 1, "px)"),
    MD: "@media (max-width: ".concat(SCREEN_SIZES.MD - 1, "px)"),
    LG: "@media (max-width: ".concat(SCREEN_SIZES.LG - 1, "px)")
  },
  // GREATER THAN
  GT: {
    XXS: "@media (min-width: 1px)",
    XS: "@media (min-width: ".concat(SCREEN_SIZES.XS, "px)"),
    SM: "@media (min-width: ".concat(SCREEN_SIZES.SM, "px)"),
    MD: "@media (min-width: ".concat(SCREEN_SIZES.MD, "px)"),
    LG: "@media (min-width: ".concat(SCREEN_SIZES.LG, "px)"),
    XL: "@media (min-width: ".concat(SCREEN_SIZES.XL, "px)")
  }
};

/* z-index components values */
var ZINDEX = {
  ACTION_BAR: 100,
  NAVBAR: 9000,
  MODAL: 10000,
  TOAST: 10010
};

var _DEFAULT;
/* Form Constants */

var FORM = {
  TYPES: {
    DEFAULT: ['text', 'number', 'date']
  },
  STYLES: {
    DEFAULT: (_DEFAULT = {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '40px',
      border: 0,
      margin: 0,
      padding: '0 15px',
      fontSize: '16px',
      lineHeight: '20px',
      color: COLORS.BLACK,
      backgroundColor: COLORS.WHITE,
      borderRadius: RADIUS,
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET('DARK_BLACK', 0.3))
    }, _defineProperty(_DEFAULT, "borderRadius", RADIUS.XS), _defineProperty(_DEFAULT, "border", 0), _defineProperty(_DEFAULT, "outline", 0), _defineProperty(_DEFAULT, "transition", 'box-shadow 0.15s linear'), _defineProperty(_DEFAULT, "willChange", 'box-shadow'), _defineProperty(_DEFAULT, '&.error', {
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET('RED', 0.3))
    }), _defineProperty(_DEFAULT, '&:focus, &:active, &.error:focus, &.error:active', {
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET('DARK_BLACK', 0.6))
    }), _defineProperty(_DEFAULT, MEDIA_QUERIES.LT.SM, {
      height: '50px'
    }), _DEFAULT),
    CHECKBOX: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      margin: 0,
      padding: 0,
      opacity: 0,
      width: '20px',
      height: '20px',
      '&:checked + .aph-form__control__mask:before': {
        backgroundColor: COLORS.BLUE
      }
    },
    CHECKBOX_MASK: _defineProperty({
      boxSizing: 'border-box',
      position: 'relative',
      display: 'block',
      width: '100%',
      paddingLeft: '30px',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      '&[for]': {
        cursor: 'pointer'
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        left: 0,
        padding: 0,
        margin: 0,
        width: '20px',
        height: '20px',
        transform: 'translateY(-50%)',
        borderRadius: RADIUS.XS,
        backgroundSize: '12px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    }, MEDIA_QUERIES.LT.SM, {
      paddingLeft: '40px',
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    }),
    CHECKBOX_MASK_RIGHT: _defineProperty({
      paddingRight: '30px',
      paddingLeft: 0,
      '&:before': {
        right: 0,
        left: 'auto'
      }
    }, MEDIA_QUERIES.LT.SM, {
      paddingRight: '40px',
      paddingLeft: 0,
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    })
  }
};

/* Constant */
/**
 * Trigger to Resize window event
 *
 * @return {function} dispatch
 */

var resized = function resized(_window) {
  return function (dispatch) {
    dispatch({
      type: LAYOUT.RESIZED,
      window: _window
    });
  };
};
/* Exporting */


var layoutActions = {
  resized: resized
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Animations Utils
 */

var spin = function spin() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.75s';
  var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'linear';
  var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'infinite';
  var animation = keyframes(_templateObject$1());
  return (
    /*#__PURE__*/
    css("animation:", animation, " ", speed, " ", effect, " ", loop, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMudXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJjIiwiZmlsZSI6ImFuaW1hdGlvbnMudXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEFuaW1hdGlvbnMgVXRpbHNcbiAqL1xuY29uc3Qgc3BpbiA9IChzcGVlZCA9ICcwLjc1cycsIGVmZmVjdCA9ICdsaW5lYXInLCBsb29wID0gJ2luZmluaXRlJykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gJHtzcGVlZH0gJHtlZmZlY3R9ICR7bG9vcH07XG4gICAgYDtcbn07XG5cbi8qIE1hcHBpbmcgKi9cbmNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgc3Bpbixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgYW5pbWF0aW9ucztcbiJdfQ== */"))
  );
};
/* Mapping */


var animations = {
  spin: spin
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
  error: Object.assign({}, ruby),
  link: Object.assign({}, ocean)
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
  background: 'rgb(248, 248, 248)',
  disabled: mercury.crystal,
  helper: mercury.original,
  link: ocean.original,
  translucid: translucid.original,
  shadow: 'rgba(0, 0, 0, 0.2)',
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


var getOpacity = function getOpacity() {
  var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : all.shades.mercury.original;
  var opacityToReplace = !isNaN(opacity) && opacity > 0 && opacity < 1 ? ", ".concat(opacity, ")") : '';

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


var get = function get() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';
  var shade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'original';
  var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

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


var getFromTheme = function getFromTheme() {
  var componentProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var colorKey = arguments.length > 1 ? arguments[1] : undefined;
  var colorShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'original';
  var opacity = arguments.length > 3 ? arguments[3] : undefined;
  var theme = componentProps.theme;

  if (_typeof(theme) !== 'object' || !theme[colorKey]) {
    return get(colorKey, colorShade, opacity);
  }

  var themeShades = theme.shades && theme.shades[colorKey] ? theme.shades[colorKey] : theme[colorKey];

  if (_typeof(themeShades) !== 'object') {
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
  var _objectSpread3;

  if (typeof colorKey !== 'string' || typeof shadeOriginal !== 'string') {
    return colors;
  }

  var colorOriginal = "rgb(".concat(chroma(shadeOriginal).rgb().join(','), ")");
  var colorDark = shadeDark || chroma(colorOriginal).darken().css();
  var colorLight = shadeLight || chroma(colorOriginal).brighten(0.5).css();
  var colorCrystal = shadeCrystal || chroma(colorOriginal).brighten(1).css();
  colors = _objectSpread({}, colors, (_objectSpread3 = {}, _defineProperty(_objectSpread3, colorKey, colorOriginal), _defineProperty(_objectSpread3, "shades", _objectSpread({}, colors.shades, _defineProperty({}, colorKey, getShadesFormat(colorDark, colorOriginal, colorLight, colorCrystal)))), _objectSpread3));
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

var colors$1 = colors;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Styles */

var ActionBarStyled =
/*#__PURE__*/
_styled('div', {
  target: "ef9z5pb0"
})(function (props) {
  return _objectSpread$1({
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    minHeight: SIZES.ACTION_BAR_HEIGHT,
    zIndex: ZINDEX.ACTION_BAR,
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '20px 0',
    backgroundColor: colors$1.getFromTheme(props, 'inverse'),
    boxShadow: "0 0 4px 0 ".concat(colors$1.getFromTheme(props, 'shadow')),
    transform: "translateY(110%)",
    willChange: 'transform',
    transition: 'transform 0.3s ease-out 0s, background-color 0.2s linear',
    '&.aph-action-bar--visible': {
      transform: 'translateY(0)'
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGlvbkJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXdCIiwiZmlsZSI6IkFjdGlvbkJhci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBTSVpFUywgWklOREVYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGVzICovXG5jb25zdCBBY3Rpb25CYXJTdHlsZWQgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG4gICAgd2lkdGggICAgOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiBTSVpFUy5BQ1RJT05fQkFSX0hFSUdIVCxcblxuICAgIHpJbmRleCAgIDogWklOREVYLkFDVElPTl9CQVIsXG4gICAgcG9zaXRpb24gOiAnZml4ZWQnLFxuICAgIHJpZ2h0ICAgIDogMCxcbiAgICBib3R0b20gICA6IDAsXG4gICAgbGVmdCAgICAgOiAwLFxuICAgIHBhZGRpbmcgIDogJzIwcHggMCcsXG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyksXG4gICAgYm94U2hhZG93ICAgICAgOiBgMCAwIDRweCAwICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NoYWRvdycpfWAsXG5cbiAgICB0cmFuc2Zvcm0gOiBgdHJhbnNsYXRlWSgxMTAlKWAsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2Utb3V0IDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyJyxcblxuICAgICcmLmFwaC1hY3Rpb24tYmFyLS12aXNpYmxlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEFjdGlvbkJhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdmlzaWJsZSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QWN0aW9uQmFyU3R5bGVkXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1hY3Rpb24tYmFyJHt2aXNpYmxlID8gJyBhcGgtYWN0aW9uLWJhci0tdmlzaWJsZScgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BY3Rpb25CYXJTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkFjdGlvbkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgc3R5bGVzIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY3Rpb25CYXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuYW55LFxuICAgIHZpc2libGUgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXMgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJhcjtcbiJdfQ== */");
/* Component */


var ActionBar = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      styles = props.styles,
      visible = props.visible;
  return React.createElement(ActionBarStyled, _extends({}, props, {
    ref: ref,
    className: "aph-action-bar".concat(visible ? ' aph-action-bar--visible' : '', " ").concat(className || ''),
    styles: styles
  }), children);
});
/* Default Properties */

ActionBar.defaultProps = {
  visible: false,
  styles: {}
};
/* Properties Types */

ActionBar.propTypes = {
  children: propTypes.any,
  visible: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Component Styles */

var BadgeWrapper =
/*#__PURE__*/
_styled('span', {
  target: "e483s4c0"
})(function (props) {
  return _objectSpread$2(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    display: props.block ? 'block' : 'inline-block',
    minWidth: !isNaN(props.width) ? parseInt(props.width, 10) + GRID.UNIT : props.width || null,
    padding: '5px 15px',
    margin: 0,
    minHeight: '30px',
    verticalAlign: 'top',
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    textAlign: props.prefix ? 'left' : 'center',
    boxShadow: "0 0 1px 0 ".concat(COLORS.GET('DARK_BLACK', 0.2)),
    borderRadius: RADIUS.XS + GRID.UNIT,
    '&:after': {
      display: 'table',
      clear: 'both'
    }
  }, MEDIA_QUERIES.LT.SM, {
    display: props.blockXs ? 'block' : null,
    fontSize: '16px',
    lineHeight: '20px',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius: RADIUS.XXS + GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTcUIiLCJmaWxlIjoiQmFkZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEJhZGdlV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uICAgICA6ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheSAgICAgIDogcHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jaycsXG4gICAgbWluV2lkdGggICAgIDogKCFpc05hTihwcm9wcy53aWR0aCkgPyAocGFyc2VJbnQocHJvcHMud2lkdGgsIDEwKSArIEdSSUQuVU5JVCkgOiAocHJvcHMud2lkdGggfHwgbnVsbCkpLFxuICAgIHBhZGRpbmcgICAgICA6ICc1cHggMTVweCcsXG4gICAgbWFyZ2luICAgICAgIDogMCxcbiAgICBtaW5IZWlnaHQgICAgOiAnMzBweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG5cbiAgICBmb250U2l6ZSAgICAgOiAnMTJweCcsXG4gICAgbGluZUhlaWdodCAgIDogJzIwcHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHRleHRBbGlnbiAgICA6IChwcm9wcy5wcmVmaXggPyAnbGVmdCcgOiAnY2VudGVyJyksXG5cbiAgICBib3hTaGFkb3cgICA6IGAwIDAgMXB4IDAgJHtDT0xPUlMuR0VUKCdEQVJLX0JMQUNLJywgMC4yKX1gLFxuICAgIGJvcmRlclJhZGl1czogKFJBRElVUy5YUyArIEdSSUQuVU5JVCksXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgICAgY2xlYXIgIDogJ2JvdGgnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgZGlzcGxheSAgIDogKHByb3BzLmJsb2NrWHMgPyAnYmxvY2snIDogbnVsbCksXG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzE1cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICcxNXB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IFJBRElVUy5YWFMgKyBHUklELlVOSVQsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IENoaWxkcmVuIFN0eWxlICovXG5jb25zdCBCYWRnZVByZWZpeFdyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZyAgOiAnNXB4IDE1cHgnLFxuICAgIG1hcmdpbiAgIDogJy01cHggMTBweCAtNXB4IC0xNXB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzVweCA2cHgnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IEJhZGdlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IGZpbGxlZCAgID0gQ09MT1JTLkZJTEwocHJvcHMuY29sb3IpO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gIXByb3BzLnNtID8ge30gOiB7XG4gICAgICAgIG1pbkhlaWdodCA6ICcyMHB4JyxcbiAgICAgICAgZm9udFNpemUgIDogJzEwcHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTBweCcsXG5cbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAnOHB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IFJBRElVUy5YWFMgKyBHUklELlVOSVQsXG4gICAgfTtcbiAgICBsZXQgcHJlZml4ID0gIXByb3BzLnNtID8ge30gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzhweCcsXG4gICAgICAgIG1hcmdpbkxlZnQgIDogJy04cHgnLFxuICAgICAgICBtYXJnaW5SaWdodCA6ICc2cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YWFMgKyBHUklELlVOSVR9YCxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICAgICAgbWFyZ2luIDogJy0xMHB4IDEwcHggLTEwcHggLTE1cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzVweCA4cHgnLFxuXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhTICsgR1JJRC5VTklUfWAsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5jb2xvcikge1xuICAgICAgICBsZXQgdG9uZWQgPSAoQ09MT1JTLlRPTkVTW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldKTtcblxuICAgICAgICBpZiAodG9uZWQpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IE9iamVjdC5hc3NpZ24oe30sIHByZWZpeCwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9uZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCYWRnZVdyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHN0eWxlcz17T2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIsIGZpbGxlZCwgcHJvcHMuc3R5bGVzKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1iYWRnZSAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHsoIXByb3BzLnByZWZpeCkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxCYWRnZVByZWZpeFdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzLnByZWZpeFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e09iamVjdC5hc3NpZ24oe30sIHByZWZpeCwgcHJvcHMucHJlZml4U3R5bGVzKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWJhZGdlX19wcmVmaXggJHtwcm9wcy5wcmVmaXhDbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcmVmaXh9XG4gICAgICAgICAgICAgICAgPC9CYWRnZVByZWZpeFdyYXBwZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0JhZGdlV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkJhZGdlLnByb3BUeXBlcyA9IHtcbiAgICBibG9jayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBibG9ja1hzOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzbSAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHdpZHRoICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgcHJlZml4U3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHByZWZpeENsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXX0= */");
/* Component Children Style */


var BadgePrefixWrapper =
/*#__PURE__*/
_styled('span', {
  target: "e483s4c1"
})(function (props) {
  return _objectSpread$2(_defineProperty({
    boxSizing: 'border-box',
    display: 'inline-block',
    padding: '5px 15px',
    margin: '-5px 10px -5px -15px',
    textAlign: 'center',
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  }, MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 6px',
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhZGdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCIiwiZmlsZSI6IkJhZGdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBNRURJQV9RVUVSSUVTLCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBCYWRnZVdyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbiAgICAgOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXkgICAgICA6IHByb3BzLmJsb2NrID8gJ2Jsb2NrJyA6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1pbldpZHRoICAgICA6ICghaXNOYU4ocHJvcHMud2lkdGgpID8gKHBhcnNlSW50KHByb3BzLndpZHRoLCAxMCkgKyBHUklELlVOSVQpIDogKHByb3BzLndpZHRoIHx8IG51bGwpKSxcbiAgICBwYWRkaW5nICAgICAgOiAnNXB4IDE1cHgnLFxuICAgIG1hcmdpbiAgICAgICA6IDAsXG4gICAgbWluSGVpZ2h0ICAgIDogJzMwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXG4gICAgZm9udFNpemUgICAgIDogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQgICA6ICcyMHB4JyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB0ZXh0QWxpZ24gICAgOiAocHJvcHMucHJlZml4ID8gJ2xlZnQnIDogJ2NlbnRlcicpLFxuXG4gICAgYm94U2hhZG93ICAgOiBgMCAwIDFweCAwICR7Q09MT1JTLkdFVCgnREFSS19CTEFDSycsIDAuMil9YCxcbiAgICBib3JkZXJSYWRpdXM6IChSQURJVVMuWFMgKyBHUklELlVOSVQpLFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICAgIGNsZWFyICA6ICdib3RoJyxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIGRpc3BsYXkgICA6IChwcm9wcy5ibG9ja1hzID8gJ2Jsb2NrJyA6IG51bGwpLFxuICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxNXB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAnMTVweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBSQURJVVMuWFhTICsgR1JJRC5VTklULFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBDaGlsZHJlbiBTdHlsZSAqL1xuY29uc3QgQmFkZ2VQcmVmaXhXcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmcgIDogJzVweCAxNXB4JyxcbiAgICBtYXJnaW4gICA6ICctNXB4IDEwcHggLTVweCAtMTVweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgIGJvcmRlclJhZGl1czogYCR7UkFESVVTLlhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9YCxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICBtYXJnaW4gOiAnLTEwcHggMTBweCAtMTBweCAtMTVweCcsXG4gICAgICAgIHBhZGRpbmc6ICc1cHggNnB4JyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke1JBRElVUy5YUyArIEdSSUQuVU5JVH0gMCAwICR7UkFESVVTLlhTICsgR1JJRC5VTklUfWAsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBCYWRnZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBmaWxsZWQgICA9IENPTE9SUy5GSUxMKHByb3BzLmNvbG9yKTtcbiAgICBjb25zdCBtb2RpZmllciA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBtaW5IZWlnaHQgOiAnMjBweCcsXG4gICAgICAgIGZvbnRTaXplICA6ICcxMHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzEwcHgnLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogJzhweCcsXG5cbiAgICAgICAgYm9yZGVyUmFkaXVzOiBSQURJVVMuWFhTICsgR1JJRC5VTklULFxuICAgIH07XG4gICAgbGV0IHByZWZpeCA9ICFwcm9wcy5zbSA/IHt9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICc4cHgnLFxuICAgICAgICBtYXJnaW5MZWZ0ICA6ICctOHB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQgOiAnNnB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfSAwIDAgJHtSQURJVVMuWFhTICsgR1JJRC5VTklUfWAsXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgICAgIG1hcmdpbiA6ICctMTBweCAxMHB4IC0xMHB4IC0xNXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggOHB4JyxcblxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtSQURJVVMuWFMgKyBHUklELlVOSVR9IDAgMCAke1JBRElVUy5YUyArIEdSSUQuVU5JVH1gLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgbGV0IHRvbmVkID0gKENPTE9SUy5UT05FU1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXSk7XG5cbiAgICAgICAgaWYgKHRvbmVkKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFkZ2VXcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBzdHlsZXM9e09iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLCBmaWxsZWQsIHByb3BzLnN0eWxlcyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYmFkZ2UgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7KCFwcm9wcy5wcmVmaXgpID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VQcmVmaXhXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5wcmVmaXhQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtPYmplY3QuYXNzaWduKHt9LCBwcmVmaXgsIHByb3BzLnByZWZpeFN0eWxlcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1iYWRnZV9fcHJlZml4ICR7cHJvcHMucHJlZml4Q2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJlZml4fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2VQcmVmaXhXcmFwcGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9CYWRnZVdyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5CYWRnZS5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2tYczogcHJvcFR5cGVzLmJvb2wsXG4gICAgc20gICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgc3R5bGVzICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHByZWZpeFN0eWxlcyAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBwcmVmaXhDbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIl19 */");
/* Component */


var Badge = forwardRef(function (props, ref) {
  var filled = COLORS.FILL(props.color);
  var modifier = !props.sm ? {} : {
    minHeight: '20px',
    fontSize: '10px',
    lineHeight: '10px',
    paddingRight: '8px',
    paddingLeft: '8px',
    borderRadius: RADIUS.XXS + GRID.UNIT
  };
  var prefix = !props.sm ? {} : _defineProperty({
    paddingRight: '8px',
    paddingLeft: '8px',
    marginLeft: '-8px',
    marginRight: '6px',
    borderRadius: "".concat(RADIUS.XXS + GRID.UNIT, " 0 0 ").concat(RADIUS.XXS + GRID.UNIT)
  }, MEDIA_QUERIES.LT.SM, {
    fontSize: '16px',
    lineHeight: '20px',
    margin: '-10px 10px -10px -15px',
    padding: '5px 8px',
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  });

  if (props.color) {
    var toned = COLORS.TONES[props.color.toUpperCase()];

    if (toned) {
      prefix = Object.assign({}, prefix, {
        backgroundColor: toned
      });
    }
  }

  return React.createElement(BadgeWrapper, _extends({}, props, {
    styles: Object.assign({}, modifier, filled, props.styles),
    className: "aph-badge ".concat(props.className || '')
  }), !props.prefix ? null : React.createElement(BadgePrefixWrapper, _extends({}, props.prefixProps, {
    styles: Object.assign({}, prefix, props.prefixStyles),
    className: "aph-badge__prefix ".concat(props.prefixClassName || '')
  }), props.prefix), props.children);
});
/* Properties Types */

Badge.propTypes = {
  block: propTypes.bool,
  blockXs: propTypes.bool,
  sm: propTypes.bool,
  width: propTypes.any,
  styles: propTypes.object,
  className: propTypes.string,
  prefixStyles: propTypes.object,
  prefixClassName: propTypes.string
};

/* Component Itself */

var AphButtonStyled = _styled("button", {
  target: "ebr9uys0"
})("box-sizing:border-box;position:relative;overflow:hidden;cursor:pointer;display:", function (props) {
  return props.aphblock ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.aphblock ? '100%' : 'auto';
}, ";min-width:", function (props) {
  return props.aphcircle ? props.aphsm || props.aphsmall ? '30px' : '40px' : '140px';
}, ";padding:", function (props) {
  return props.aphsm || props.aphsmall ? "5px ".concat(props.aphcircle ? 0 : '15px') : "10px  ".concat(props.aphcircle ? 0 : '20px');
}, ";margin:", function (props) {
  return props.aphmargin;
}, ";text-align:center;text-transform:uppercase;font-size:16px;line-height:20px;border-radius:", function (props) {
  return (props.aphradius || 25) + ((props.aphradius + '').includes('px') ? '' : 'px');
}, ";border:0;outline:0;-webkit-tap-highlight-color:", function (props) {
  return colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'crystal', 0.5);
}, ";color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, props.aphcolor || 'secondary') : colors$1.getFromTheme(props, ['white', 'smoke'].includes(props.aphcolor) ? 'secondary' : 'white');
}, ";background-color:", function (props) {
  return props.aphlink ? 'transparent' : colors$1.getFromTheme(props, props.aphcolor || 'secondary');
}, ";transition-timing-function:ease;transition-duration:0.2s;transition-property:background-color,color,width;&:hover{background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'light');
}, ";}&:active,&:focus{background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'dark');
}, ";}&:disabled{cursor:not-allowed;color:", function (props) {
  return colors$1.getFromTheme(props, 'mercury', props.aphtranslucid ? 'crystal' : 'light');
}, ";background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : props.aphtranslucid ? colors$1.getFromTheme(props, 'smoke', '', 0.5) : colors$1.getFromTheme(props, 'mercury', 'crystal');
}, ";}.aph-btn{&__content{opacity:1;}&__loader{position:absolute;top:calc(50% - 15px);left:50%;transform:translate(-50%);opacity:0;}}&.aph-btn--loading{&:hover,&:disabled{background-color:", function (props) {
  return props.aphlink ? 'transparent' : colors$1.getFromTheme(props, props.aphcolor || 'secondary');
}, ";}.aph-btn{&__content{opacity:0;}&__loader{opacity:1;.aph-icon-wrapper{", animations.spin('4s'), ";}}}}", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvblN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPcUMiLCJmaWxlIjoiQnV0dG9uU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVSSBMaWJyYXJ5IGRlZmluaXRpb25zICovXG5pbXBvcnQgeyBhbmltYXRpb25zLCBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEJ1dHRvblN0eWxlZCA9IHN0eWxlZC5idXR0b25gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdyAgOiBoaWRkZW47XG5cbiAgICBjdXJzb3IgICAgOiBwb2ludGVyO1xuICAgIGRpc3BsYXkgICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoYmxvY2sgPyAnJyA6ICdpbmxpbmUtJ31ibG9jaztcblxuICAgIHdpZHRoICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhibG9jayA/ICcxMDAlJyA6ICdhdXRvJ307XG4gICAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLmFwaGNpcmNsZSA/ICgocHJvcHMuYXBoc20gfHwgcHJvcHMuYXBoc21hbGwpID8gJzMwcHgnIDogJzQwcHgnKSA6ICcxNDBweCd9O1xuICAgIHBhZGRpbmcgIDogJHtwcm9wcyA9PiAoKHByb3BzLmFwaHNtIHx8IHByb3BzLmFwaHNtYWxsKSA/IGA1cHggJHtwcm9wcy5hcGhjaXJjbGUgPyAwIDogJzE1cHgnfWAgOiBgMTBweCAgJHtwcm9wcy5hcGhjaXJjbGUgPyAwIDogJzIwcHgnfWApfTtcbiAgICBtYXJnaW4gICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBobWFyZ2lufTtcblxuICAgIHRleHQtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIGZvbnQtc2l6ZSAgOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiAoKHByb3BzLmFwaHJhZGl1cyB8fCAyNSkgKyAoKHByb3BzLmFwaHJhZGl1cyArICcnKS5pbmNsdWRlcygncHgnKSA/ICcnIDogJ3B4JykpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnY3J5c3RhbCcsIDAuNSl9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuYXBobGluayA/XG4gICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpKSA6XG4gICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAoWyd3aGl0ZScsICdzbW9rZSddLmluY2x1ZGVzKHByb3BzLmFwaGNvbG9yKSkgPyAnc2Vjb25kYXJ5JyA6ICd3aGl0ZScpXG4gICAgfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgJ3RyYW5zcGFyZW50JyA6XG4gICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpKVxuICAgIH07XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4ycztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIHdpZHRoO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnbGlnaHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnKSA6XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2RhcmsnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsXG4gICAgICAgICAgICAnbWVyY3VyeScsXG4gICAgICAgICAgICAocHJvcHMuYXBodHJhbnNsdWNpZCA/ICdjcnlzdGFsJyA6ICdsaWdodCcpXG4gICAgICAgICl9O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYXBodHJhbnNsdWNpZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnLCAnJywgMC41KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLmFwaC1idG4ge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmX19sb2FkZXIge1xuICAgICAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcCAgICAgIDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgICAgICAgICAgIGxlZnQgICAgIDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgICBvcGFjaXR5ICA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFwaC1idG4tLWxvYWRpbmcge1xuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zcGFyZW50JyA6XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwaC1idG4ge1xuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fbG9hZGVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICAgICAgLmFwaC1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAke2FuaW1hdGlvbnMuc3BpbignNHMnKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hcGhzdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhCdXR0b25TdHlsZWQ7XG4iXX0= */"));

/* Component Itself */

var AphButtonItemStyled = _styled("span", {
  target: "e1q9vwyj0"
})("box-sizing:border-box;position:relative;display:inline-block;top:0;min-width:", function (props) {
  return props.childrenWidth || null;
}, ";margin:0;padding:0;text-align:center;transition-timing-function:linear;transition-duration:0.25s;transition-property:opacity;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbkl0ZW1TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VDIiwiZmlsZSI6IkJ1dHRvbkl0ZW1TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIExpYnJhcnkgZGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoQnV0dG9uSXRlbVN0eWxlZCA9IHN0eWxlZC5zcGFuYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuICAgIHRvcCAgICAgICA6IDA7XG5cbiAgICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMuY2hpbGRyZW5XaWR0aCB8fCBudWxsfTtcbiAgICBtYXJnaW4gICA6IDA7XG4gICAgcGFkZGluZyAgOiAwO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IG9wYWNpdHk7XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEJ1dHRvbkl0ZW1TdHlsZWQ7XG4iXX0= */"));

/* Component Itself */

var Button = forwardRef(function (props, ref) {
  /**
   * Component props
   */
  var block = props.block,
      circle = props.circle,
      className = props.className,
      color = props.color,
      children = props.children,
      loading = props.loading,
      disabled = props.disabled,
      margin = props.margin,
      link = props.link,
      radius = props.radius,
      sm = props.sm,
      small = props.small,
      styles = props.styles,
      translucid = props.translucid,
      rest = _objectWithoutProperties(props, ["block", "circle", "className", "color", "children", "loading", "disabled", "margin", "link", "radius", "sm", "small", "styles", "translucid"]);
  /**
   * Local values
   */


  var childrenRef = useRef(null);

  var _useState = useState(140),
      _useState2 = _slicedToArray(_useState, 2),
      childrenWidth = _useState2[0],
      setChildrenWidth = _useState2[1];
  /**
   * Children Did Update
   */


  useEffect(function () {
    if (typeof loading !== 'boolean' || !childrenRef || !childrenRef.current || !childrenRef.current.offsetWidth || childrenRef.current.offsetWidth === childrenWidth) {
      return;
    }

    setChildrenWidth(childrenRef.current.offsetWidth);
  }, [children]);
  /**
   * Render
   */

  return React.createElement(AphButtonStyled, _extends({}, rest, {
    ref: ref,
    aphsm: sm || small ? 1 : 0,
    aphblock: block ? 1 : 0,
    aphcircle: circle,
    aphcolor: color,
    aphlink: link ? 1 : 0,
    aphmargin: margin,
    aphradius: radius,
    aphstyles: styles,
    aphtranslucid: translucid ? 1 : 0,
    disabled: disabled,
    className: "aph-btn".concat(loading ? ' aph-btn--loading' : '', " ").concat(className)
  }), typeof loading !== 'boolean' ? children : React.createElement(React.Fragment, null, React.createElement(AphButtonItemStyled, {
    className: "aph-btn__loader",
    childrenWidth: childrenWidth ? "".concat(childrenWidth, "px") : null
  }, React.createElement(Icon, {
    size: 30,
    slug: "loader",
    color: ['white', 'smoke'].includes(color) ? 'secondary' : 'white'
  })), React.createElement(AphButtonItemStyled, {
    ref: childrenRef,
    className: "aph-btn__content"
  }, children)));
});
/* Default Properties */

Button.defaultProps = {
  as: 'button',
  type: 'button',
  role: 'button',
  color: 'secondary',
  className: '',
  margin: null,
  small: false,
  block: false,
  disabled: false,
  loading: undefined,
  styles: {}
};
/* Properties Types */

Button.propTypes = {
  /**
   * Button Type:
   * "button", "reset" or "submit"
   */
  type: propTypes.string,

  /**
   * Should the Button be disabled?
   */
  disabled: propTypes.bool,

  /**
   * Loading state, replacing text by a donut spinning
   */
  loading: propTypes.bool,

  /**
   * Renders the button using an alternative color:
   * Primary, Warning, Error, Success
   */
  color: propTypes.string,

  /**
   * Customized Border Radius
   */
  radius: propTypes.oneOfType([propTypes.string, propTypes.number]),

  /**
   * Customized Margin
   */
  margin: propTypes.string,

  /**
   * Should the Button be block?
   */
  block: propTypes.bool,

  /**
   * Alternative button size: small.
   */
  small: propTypes.bool,

  /**
   * Custom Component
   *
   * Example: `Link` from react-router-dom
   */
  as: propTypes.elementType,

  /**
   * Custom Styles
   */
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var AphCardStyled = _styled("div", {
  target: "ef3ubj80"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.margin || null;
}, ";padding:", function (props) {
  return props.padding || '10px';
}, ";border-radius:", RADIUS.SM, "px;color:", colors$1.get('black'), ";background:", colors$1.get('white'), ";transition:background-color 0.25s linear,box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 5px ".concat(colors$1.get('black', 'original', 0.25))
  } : null;
}, ";", function (props) {
  return props.onClick ? {
    '&:hover': {
      background: colors$1.get('smoke')
    }
  } : null;
}, ";&.active,&:hover{", function (props) {
  return props.boxShadow ? {
    boxShadow: "0 0 20px ".concat(colors$1.get('black', 'original', 0.25))
  } : null;
}, ";}&:hover{", function (props) {
  return props.hover ? function () {
    var isActive = props.className.split('active').length > 1;

    if (isActive) {
      return;
    }

    return {
      backgroundColor: "".concat(colors$1.get('smoke'))
    };
  } : null;
}, ";}.aph-card{box-shadow:none !important;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQyIsImZpbGUiOiJDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoQ2FyZFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2luIHx8IG51bGx9O1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyB8fCAnMTBweCd9O1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuU019cHg7XG5cbiAgICBjb2xvciAgICAgOiAke2NvbG9ycy5nZXQoJ2JsYWNrJyl9O1xuICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdldCgnd2hpdGUnKX07XG5cbiAgICB0cmFuc2l0aW9uIDogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXIsIGJveC1zaGFkb3cgMC4yNXMgbGluZWFyLCBwYWRkaW5nIDAuMjVzIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgcGFkZGluZztcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYm94U2hhZG93ID8gKHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDVweCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9YCxcbiAgICB9KSA6IG51bGx9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5vbkNsaWNrID8gKHtcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZ2V0KCdzbW9rZScpLFxuICAgICAgICB9XG4gICAgfSkgOiBudWxsfTtcblxuICAgICYuYWN0aXZlLFxuICAgICY6aG92ZXIge1xuICAgICAgICAke3Byb3BzID0+IHByb3BzLmJveFNoYWRvdyA/ICh7XG4gICAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMjBweCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9YCxcbiAgICAgICAgfSkgOiBudWxsfTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy5ob3ZlciA/ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcHJvcHMuY2xhc3NOYW1lLnNwbGl0KCdhY3RpdmUnKS5sZW5ndGggPiAxO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoeyBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9ycy5nZXQoJ3Ntb2tlJyl9YCx9KVxuICAgICAgICB9IDogbnVsbH07XG4gICAgfVxuXG4gICAgLmFwaC1jYXJkIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENhcmQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENhcmRTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWNhcmQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbWFyZ2luICAgOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZyAgOiAnMTBweCcsXG4gICAgc3R5bGVzICAgOiB7fSxcbiAgICBib3hTaGFkb3c6IGZhbHNlLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBhZGRpbmcgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBib3hTaGFkb3c6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */"));
/* Component Itself */


var Card = forwardRef(function (props, ref) {
  var className = props.className;
  return React.createElement(AphCardStyled, _extends({}, props, {
    ref: ref,
    className: "aph-card ".concat(className || '')
  }));
});
/* Default Properties */

Card.defaultProps = {
  margin: undefined,
  padding: '10px',
  styles: {},
  boxShadow: false
};
/* Properties Types */

Card.propTypes = {
  margin: propTypes.string,
  padding: propTypes.string,
  boxShadow: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Sizes */

var _SIZES$XS = SIZES.XS,
    FONT_SIZE = _SIZES$XS.FONT_SIZE,
    LINE_HEIGHT = _SIZES$XS.LINE_HEIGHT;
/* Component Styles */

var HoverActionItem = _styled("button", {
  target: "ezj1zsv0"
})("box-sizing:border-box;display:inline-block;padding:6px 5px 4px;margin:0;font-weight:bold;font-size:", FONT_SIZE, ";line-height:", LINE_HEIGHT, ";text-transform:uppercase;border:0;outline:0;text-decoration:none;border-radius:", RADIUS.XS, "px;cursor:pointer;color:", function (props) {
  return props.color ? colors$1.getFromTheme(props, props.color) : null;
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse', null, 0.75);
}, ";box-shadow:0 0 5px ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";transition:color 0.25s linear,background-color 0.25s linear;&:active,&:focus,&:hover{border:0;outline:0;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse', null, 1);
}, ";}&.success{color:", function (props) {
  return colors$1.getFromTheme(props, 'success');
}, ";}&.error{color:", function (props) {
  return colors$1.getFromTheme(props, 'error');
}, ";}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvdmVyQWN0aW9uc0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXFDIiwiZmlsZSI6IkhvdmVyQWN0aW9uc0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgUkFESVVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBTaXplcyAqL1xuY29uc3QgeyBGT05UX1NJWkUsIExJTkVfSEVJR0hUIH0gPSBTSVpFUy5YUztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSG92ZXJBY3Rpb25JdGVtID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCA1cHggNHB4O1xuICAgIG1hcmdpbiA6IDA7XG5cbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcbiAgICBmb250LXNpemUgICAgIDogJHtGT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0ICAgOiAke0xJTkVfSEVJR0hUfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuY29sb3IpIDogbnVsbH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScsIG51bGwsIDAuNzUpfTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgNXB4ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NoYWRvdycpfTtcblxuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuMjVzIGxpbmVhcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXJcbiAgICA7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXIgOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJywgbnVsbCwgMSl9O1xuICAgIH1cblxuICAgICYuc3VjY2VzcyB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzdWNjZXNzJyl9O1xuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIb3ZlckFjdGlvbkl0ZW07XG4iXX0= */"));

/* Component Styles */

var ClipboardStyled =
/*#__PURE__*/
_styled(HoverActionItem, {
  target: "e9smf1z0"
})(function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaXBib2FyZFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0QiLCJmaWxlIjoiQ2xpcGJvYXJkU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgQmFzZSAqL1xuaW1wb3J0IEhvdmVyQWN0aW9uc0l0ZW0gZnJvbSAnLi4vSG92ZXJBY3Rpb25zL0hvdmVyQWN0aW9uc0l0ZW0nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBDbGlwYm9hcmRTdHlsZWQgPSBzdHlsZWQoSG92ZXJBY3Rpb25zSXRlbSlgXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDbGlwYm9hcmRTdHlsZWQ7XG4iXX0= */"));

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AphClipboardWrapper =
/*#__PURE__*/
_styled(ReactClipboard, {
  target: "e1icbit10"
})("box-sizing:border-box;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaXBib2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtEIiwiZmlsZSI6IkNsaXBib2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RDbGlwYm9hcmQgZnJvbSAncmVhY3QtY2xpcGJvYXJkLmpzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuaW1wb3J0IENsaXBib2FyZFN0eWxlZCBmcm9tICcuL0NsaXBib2FyZFN0eWxlZCc7XG5jb25zdCBBcGhDbGlwYm9hcmRXcmFwcGVyID0gc3R5bGVkKFJlYWN0Q2xpcGJvYXJkKWBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENsaXBib2FyZCA9IChwcm9wcykgPT4ge1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgc3R5bGVkLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBvblN1Y2Nlc3MsXG4gICAgICAgIG9uRXJyb3IsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIExvY2FsIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IFsgdGltZXIsIHNldFRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IFN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdGF0dXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYXBwbHlTdGF0dXMgKF9zdGF0dXMpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgc2V0U3RhdHVzKF9zdGF0dXMpO1xuICAgICAgICBzZXRUaW1lcihcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cygnJyk7XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0XG4gICAgICovXG4gICAgZnVuY3Rpb24gX29uRXJyb3IgKGV2dCkge1xuICAgICAgICBfYXBwbHlTdGF0dXMoJ2Vycm9yJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvbkVycm9yKHsgLi4uZXZ0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gc3VjY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vblN1Y2Nlc3MgKGV2dCkge1xuICAgICAgICBfYXBwbHlTdGF0dXMoJ3N1Y2Nlc3MnKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25TdWNjZXNzKHsgLi4uZXZ0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBVbm1vdW50XG4gICAgICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBDb21tb24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCBjbGlwYm9hcmRQcm9wcyA9IHtcbiAgICAgICAgLi4ucmVzdCxcblxuICAgICAgICBzdHlsZXMgICA6IHN0eWxlcyxcbiAgICAgICAgb25FcnJvciAgOiBfb25FcnJvcixcbiAgICAgICAgb25TdWNjZXNzOiBfb25TdWNjZXNzLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwaENsaXBib2FyZFdyYXBwZXJcbiAgICAgICAgICAgICAgICB7Li4uY2xpcGJvYXJkUHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWNsaXBib2FyZCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2xpcGJvYXJkU3R5bGVkXG4gICAgICAgICAgICB7Li4uY2xpcGJvYXJkUHJvcHN9XG4gICAgICAgICAgICBhcz17UmVhY3RDbGlwYm9hcmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY2xpcGJvYXJkJHtzdGF0dXMgPT09ICdzdWNjZXNzJyA/ICcgc3VjY2VzcycgOiAnJ30ke3N0YXR1cyA9PT0gJ2Vycm9yJyA/ICcgZXJyb3InIDogJyd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cbkNsaXBib2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVkOiBmYWxzZSxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2xpcGJvYXJkLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlZDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdWxsIGN1c3RvbSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDbGlwYm9hcmQ7XG4iXX0= */"));
/* Component Itself */


var Clipboard = function Clipboard(props) {
  /**
   * Global values
   */
  var styled = props.styled,
      styles = props.styles,
      className = props.className,
      onSuccess = props.onSuccess,
      onError = props.onError,
      rest = _objectWithoutProperties(props, ["styled", "styles", "className", "onSuccess", "onError"]);
  /**
   * Local values
   */


  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];
  /**
   * Apply Status
   *
   * @param {string} _status
   */


  function _applyStatus(_status) {
    clearTimeout(timer);
    setStatus(_status);
    setTimer(setTimeout(function () {
      setStatus('');
    }, 1000));
  }
  /**
   * On error
   *
   * @param {object} evt
   */


  function _onError(evt) {
    _applyStatus('error');

    if (typeof onError === 'function') {
      onError(_objectSpread$3({}, evt));
    }
  }
  /**
   * On success
   *
   * @param {object} evt
   */


  function _onSuccess(evt) {
    _applyStatus('success');

    if (typeof onSuccess === 'function') {
      onSuccess(_objectSpread$3({}, evt));
    }
  }
  /**
   * Will Unmount
   */


  useEffect(function () {
    return function () {
      clearTimeout(timer);
    };
  }, []);
  /**
   * Common Props
   */

  var clipboardProps = _objectSpread$3({}, rest, {
    styles: styles,
    onError: _onError,
    onSuccess: _onSuccess
  });
  /**
   * Render
   */


  if (!styled) {
    return React.createElement(AphClipboardWrapper, _extends({}, clipboardProps, {
      className: "aph-clipboard ".concat(className || '')
    }));
  }

  return React.createElement(ClipboardStyled, _extends({}, clipboardProps, {
    as: ReactClipboard,
    className: "aph-clipboard".concat(status === 'success' ? ' success' : '').concat(status === 'error' ? ' error' : '', " ").concat(className || '')
  }));
};
/* Default Props */


Clipboard.defaultProps = {
  styled: false,
  styles: {}
};
/* Properties Types */

Clipboard.propTypes = {
  /**
   * Default styles
   */
  styled: propTypes.bool,

  /**
   * Full custom styles
   */
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles Helpers */

var DISTANCE = 'calc(100% + 10px)';
/* Component Styles */

var DropdownStyled = _styled("div", {
  target: "e14owjh0"
})("box-sizing:border-box;position:relative;display:block;width:100%;z-index:901;-webkit-box-orient:vertical;-webkit-box-direction:normal;.aph{&-dropdown{&__toggle,&__content{box-sizing:border-box;}&__toggle{display:", function (props) {
  return props.toggleBlock ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.toggleBlock ? '100%' : null;
}, ";cursor:pointer;border:0;outline:0;color:inherit;background:transparent;}&__content{display:none;position:absolute;top:", function (props) {
  return props.up ? null : DISTANCE;
}, ";bottom:", function (props) {
  return props.up ? DISTANCE : null;
}, ";left:", function (props) {
  return props.center ? '50%' : props.right ? null : '0';
}, ";right:", function (props) {
  return props.right && !props.center ? '0' : null;
}, ";transform:", function (props) {
  return props.center ? 'translateX(-50%)' : null;
}, ";opacity:0;width:", function (props) {
  return props.contentWidth || null;
}, ";will-change:z-index,opacity;transition:display ", function (props) {
  return props.opened ? 0.25 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.15 : 0.25;
}, "s linear;color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";box-shadow:0 0 5px ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";padding:", function (props) {
  return props.thin ? '0' : '15px 10px';
}, ";border-radius:", RADIUS.XS, "px;text-align:", function (props) {
  return props.right ? 'left' : null;
}, ";align-self:center;overflow:hidden;&.visible{display:block;}&.active{opacity:1;}}}&-list{&__item{padding-right:20px;padding-left:20px;}}}&.up{.aph-dropdown{&__content{top:auto;bottom:100%;}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdpQyIsImZpbGUiOiJEcm9wZG93blN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyBIZWxwZXJzICovXG5jb25zdCBESVNUQU5DRSA9ICdjYWxjKDEwMCUgKyAxMHB4KSc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IERyb3Bkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICB3aWR0aCAgIDogMTAwJTtcbiAgICB6LWluZGV4IDogOTAxO1xuXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcblxuICAgIC5hcGgge1xuICAgICAgICAmLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSxcbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnJyA6ICdpbmxpbmUtJyl9YmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGggICAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnMTAwJScgOiBudWxsKX07XG4gICAgICAgICAgICAgICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgOiAwO1xuICAgICAgICAgICAgICAgIG91dGxpbmUgICA6IDA7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgOiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wICAgICAgOiAke3Byb3BzID0+IChwcm9wcy51cCA/IG51bGwgOiBESVNUQU5DRSl9O1xuICAgICAgICAgICAgICAgIGJvdHRvbSAgIDogJHtwcm9wcyA9PiAocHJvcHMudXAgPyBESVNUQU5DRSA6IG51bGwpfTtcbiAgICAgICAgICAgICAgICBsZWZ0ICAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICc1MCUnIDogcHJvcHMucmlnaHQgPyBudWxsIDogJzAnKX07XG4gICAgICAgICAgICAgICAgcmlnaHQgICAgOiAke3Byb3BzID0+ICgocHJvcHMucmlnaHQgJiYgIXByb3BzLmNlbnRlcikgPyAnMCcgOiBudWxsKX07XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gKHByb3BzLmNlbnRlciA/ICd0cmFuc2xhdGVYKC01MCUpJyA6IG51bGwpfTtcblxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGggIDogJHtwcm9wcyA9PiAocHJvcHMuY29udGVudFdpZHRoIHx8IG51bGwpfTtcblxuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB6LWluZGV4LCBvcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gOlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4yNSA6IDAuMX1zIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMTUgOiAwLjI1fXMgbGluZWFyXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2hhZG93Jyl9O1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHtwcm9wcyA9PiAocHJvcHMudGhpbiA/ICcwJyA6ICcxNXB4IDEwcHgnKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuWFN9cHg7XG5cbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wcy5yaWdodCkgPyAnbGVmdCcgOiBudWxsfTtcblxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyAgOiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1saXN0IHtcbiAgICAgICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0IDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYudXAge1xuICAgICAgICAuYXBoLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIHRvcCAgIDogYXV0bztcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duU3R5bGVkO1xuIl19 */"));

/* Component it self */

var Dropdown = forwardRef(function (props, ref) {
  /**
   * Properties values
   */
  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      toggleBlock = props.toggleBlock,
      width = props.width,
      center = props.center,
      up = props.up,
      right = props.right,
      left = props.left,
      thin = props.thin,
      opened = props.opened,
      styles = props.styles;
  /**
   * State values
   */

  var _useState = useState(opened),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = useState(opened),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      unmounted = _useState6[0],
      setUnmounted = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      activeTimer = _useState8[0],
      setActiveTimer = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      visibleTimer = _useState10[0],
      setVisibleTimer = _useState10[1];
  /**
   * State reference
   */


  var dropdownRef = useRef(null);
  /**
   * Add click listener
   */

  function addClickListener() {
    document.addEventListener('click', handleClose);
  }
  /**
   * Remove click listener
   */


  function removeClickListener() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
    document.removeEventListener('click', handleClose);
  }
  /**
   * Handle with Dropdown close event
   *
   * @param {object} evt - DOM click event
   */


  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && dropdownRef && dropdownRef.current && dropdownRef.current.contains(evt.target)) {
      return;
    }

    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
      removeClickListener();
    }, 250));
  }
  /**
   * Handle with Dropdown open event
   *
   * @param {object} evt - DOM click event
   */


  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (unmounted) {
      return;
    }

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setActive(true);
      addClickListener();
    }, 50));
  }
  /**
   * Toggle visibility handler
   *
   * @param {object} evt - DOM click event
   */


  function handleToggle(evt) {
    if (visible && !opened) {
      return handleClose();
    }

    handleOpen(evt);
  }
  /**
   * Listen to `opened` changes
   */


  useEffect(function () {
    removeClickListener();

    if (!opened) {
      handleClose();
      return;
    }

    if (opened || active) {
      addClickListener();
      handleOpen();
    }

    return function cleanup() {
      removeClickListener();
    };
  }, [opened]);
  /**
   * Mount
   */

  useEffect(function () {
    return function cleanup() {
      removeClickListener();
    };
  }, []);
  /**
   * Render
   */

  return React.createElement(DropdownStyled, {
    center: center,
    up: up,
    right: right,
    left: left,
    thin: thin,
    toggleBlock: toggleBlock || center,
    contentWidth: width,
    styles: styles,
    ref: dropdownRef,
    className: "aph-dropdown ".concat(className || '')
  }, !toggle ? null : React.createElement("span", {
    role: "button",
    onClick: handleToggle,
    className: "aph-dropdown__toggle"
  }, toggle), !visible ? null : React.createElement("div", {
    className: "aph-dropdown__content".concat(active ? ' active' : '').concat(visible ? ' visible' : ''),
    onClick: function onClick() {
      return handleClose();
    }
  }, children));
});
/* Component Properties */

Dropdown.defaultProps = {
  className: '',
  toggle: '',
  opened: false,
  width: '220px',
  thin: false,
  up: false,
  right: false,
  left: true,
  styles: {}
};
/* Component Properties Types */

Dropdown.propTypes = {
  className: propTypes.string,
  toggle: propTypes.oneOfType([propTypes.string, propTypes.element]),
  opened: propTypes.bool,
  width: propTypes.string,
  thin: propTypes.bool,
  up: propTypes.bool,
  right: propTypes.bool,
  left: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Selector */
var selector = '.aph-hover-actions';
/* Component Styles */

var HoverActionsStyled = _styled("span", {
  target: "ez3ukd00"
})("box-sizing:border-box;position:relative;display:inline-block;z-index:1;", selector, "{&__content{z-index:1;filter:none;display:block;transition:filter 0.15s linear;}&__items{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;display:flex;z-index:-1;justify-content:space-evenly;align-items:center;transition:opacity 0.25s linear,z-index 0.25s linear;text-align:center;vertical-align:middle;}}", function (props) {
  return !props.hasActions ? null : "\n        &:hover,\n        &:active,\n        &:focus {\n            ".concat(selector, " {\n                &__content {\n                    filter: blur(1px);\n                }\n\n                &__items {\n                    opacity: 1;\n                    z-index: 10;\n                }\n            }\n        }\n    ");
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvdmVyQWN0aW9uc1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPc0MiLCJmaWxlIjoiSG92ZXJBY3Rpb25zU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgU2VsZWN0b3IgKi9cbmNvbnN0IHNlbGVjdG9yID0gJy5hcGgtaG92ZXItYWN0aW9ucyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEhvdmVyQWN0aW9uc1N0eWxlZCA9IHN0eWxlZC5zcGFuYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbiAgICB6LWluZGV4IDogMTtcblxuICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZmlsdGVyIDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faXRlbXMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wICAgICA6IDA7XG4gICAgICAgICAgICByaWdodCAgIDogMDtcbiAgICAgICAgICAgIGJvdHRvbSAgOiAwO1xuICAgICAgICAgICAgbGVmdCAgICA6IDA7XG4gICAgICAgICAgICBvcGFjaXR5IDogMDtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgICAgICAgICAgei1pbmRleCA6IC0xO1xuXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjI1cyBsaW5lYXIsXG4gICAgICAgICAgICAgICAgei1pbmRleCAwLjI1cyBsaW5lYXJcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaGFzQWN0aW9ucyA/IG51bGwgOiBgXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDFweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9faXRlbXMge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSG92ZXJBY3Rpb25zU3R5bGVkO1xuIl19 */"));

/* Component Itself */

function HoverActions(props) {
  /**
   * Inherit props
   */
  var actions = props.actions,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["actions", "className", "children"]);
  /**
   * Render
   */


  return React.createElement(HoverActionsStyled, _extends({
    hasActions: actions ? true : false,
    className: "aph-hover-actions ".concat(className || '')
  }, rest), React.createElement("span", {
    className: "aph-hover-actions__content"
  }, children), React.createElement("span", {
    className: "aph-hover-actions__items"
  }, actions));
}
/* Default Props */


HoverActions.defaultProps = {
  actions: undefined,
  styles: {}
};
/* Properties Types */

HoverActions.propTypes = {
  /**
   * On hover, display components, such as `HoverActionsItem`
   */
  actions: propTypes.any,

  /**
   * Custom Styles
   */
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Packages */
/* Icon */

var IconArrowUp = function IconArrowUp(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return React.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "aph-icon-arrow-up-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("polyline", {
    id: "aph-icon-arrow-up-polyline",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)",
    points: "10 12 15 17.7142857 20 12"
  })));
};

/* Packages */
/* Icon */

var IconArrowRight = function IconArrowRight(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return React.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    id: "aph-icon-arrow-right-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M13 22l8-7-8-7"
  }));
};

/* Packages */
/* Icon */

var IconArrowDown = function IconArrowDown(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return React.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "aph-icon-arrow-down-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("polyline", {
    id: "aph-icon-arrow-down-polyline",
    stroke: color,
    strokeWidth: "2",
    points: "10 12 15 17.7142857 20 12"
  })));
};

/* Packages */
/* Icon */

var IconArrowLeft = function IconArrowLeft(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return React.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    id: "aph-icon-arrow-left-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M18 8l-8 7 8 7"
  }));
};

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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-bluetooth-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M16.9725,15.1440782 L20.5925,11.5240782 C20.7825,11.3340782 20.8825,11.0840782 20.8825,10.8140782 C20.8825,10.5440782 20.7725,10.2940782 20.5925,10.1040782 L16.2625,5.79407822 C15.9725,5.50407822 15.5425,5.42407822 15.1725,5.57407822 C14.8025,5.72407822 14.5625,6.09407822 14.5625,6.49407822 L14.5625,12.7240782 L10.7025,8.87407822 C10.3125,8.48407822 9.6825,8.48407822 9.2925,8.87407822 C8.9025,9.26407822 8.9025,9.89407822 9.2925,10.2840782 L14.1425,15.1440782 L9.2925,19.9940782 C8.9025,20.3840782 8.9025,21.0140782 9.2925,21.4040782 C9.6825,21.7940782 10.3125,21.7940782 10.7025,21.4040782 L14.5625,17.5540782 L14.5625,23.7840782 C14.5625,24.1840782 14.8025,24.5540782 15.1825,24.7040782 C15.3025,24.7540782 15.4325,24.7840782 15.5625,24.7840782 C15.8225,24.7840782 16.0825,24.6840782 16.2725,24.4940782 L20.5925,20.1740782 C20.7825,19.9840782 20.8825,19.7340782 20.8825,19.4640782 C20.8825,19.1940782 20.7725,18.9440782 20.5925,18.7540782 L16.9725,15.1440782 Z M16.5625,8.91407822 L18.4725,10.8240782 L16.5625,12.7240782 L16.5625,8.91407822 Z M16.5625,21.3740782 L16.5625,17.5540782 L18.4725,19.4640782 L16.5625,21.3740782 Z",
    id: "aph-icon-bluetooth-shape",
    fill: color
  })));
};

/* Packages */
/* Icon Itself */

var IconCamera = function IconCamera(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-camera-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M6,11 L8.38196601,11 C8.76073807,11 9.10700119,10.7859976 9.2763932,10.4472136 L10.7236068,7.5527864 C10.8929988,7.21400238 11.2392619,7 11.618034,7 L18.381966,7 C18.7607381,7 19.1070012,7.21400238 19.2763932,7.5527864 L20.7236068,10.4472136 C20.8929988,10.7859976 21.2392619,11 21.618034,11 L24,11 C24.5522847,11 25,11.4477153 25,12 L25,22 C25,22.5522847 24.5522847,23 24,23 L6,23 C5.44771525,23 5,22.5522847 5,22 L5,12 C5,11.4477153 5.44771525,11 6,11 Z",
    id: "aph-icon-camera-shape",
    stroke: color,
    strokeWidth: "1.8"
  }), React.createElement("circle", {
    id: "aph-icon-camera-circle",
    stroke: color,
    strokeWidth: "1.8",
    cx: "15",
    cy: "16",
    r: "4"
  })));
};

/* Packages */
/* Icon Itself */

var IconCard = function IconCard(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "Icon-/-30-/-Card-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "2",
    x: "3",
    y: "7",
    width: "24",
    height: "16",
    rx: "0.5"
  }), React.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "3",
    y: "11",
    width: "24",
    height: "2"
  }), React.createElement("rect", {
    id: "Rectangle-Copy-4",
    fill: "#EF3C3E",
    x: "20",
    y: "16",
    width: "5",
    height: "2"
  })));
};

/* Packages */
/* Icon Itself */

var IconCards = function IconCards(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "Icon-/-30-/-Cards",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Group",
    transform: "translate(2.000000, 5.300000)"
  }, React.createElement("g", {
    id: "Cards",
    transform: "translate(0.000000, 1.000000)"
  }, React.createElement("g", {
    id: "Card-1"
  }, React.createElement("path", {
    d: "M1,-0.75 L15,-0.75 C15.5983085,-0.75 16.0833333,-0.264975146 16.0833333,0.333333333 L16.0833333,7.24831355 L11.1641099,7.24831355 C10.473754,7.24831355 9.91410993,7.80795762 9.91410993,8.49831355 L9.91410993,10.0833333 L1,10.0833333 C0.401691521,10.0833333 -0.0833333333,9.59830848 -0.0833333333,9 L-0.0833333333,0.333333333 C-0.0833333333,-0.264975146 0.401691521,-0.75 1,-0.75 Z",
    id: "Rectangle",
    stroke: color,
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  })), React.createElement("g", {
    id: "Card-2",
    transform: "translate(10.000000, 8.000000)"
  }, React.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "1.5",
    x: "-0.0833333333",
    y: "-0.75",
    width: "16.1666667",
    height: "10.8333333",
    rx: "0.333333333"
  }), React.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  }))), React.createElement("g", {
    id: "Arrows",
    transform: "translate(1.500000, 0.000000)"
  }, React.createElement("g", {
    id: "Arrow-1",
    transform: "translate(16.000000, 0.000000)"
  }, React.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), React.createElement("polyline", {
    id: "Path-9",
    stroke: color,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  })), React.createElement("g", {
    id: "Arrow-2",
    transform: "translate(3.500000, 15.500000) scale(-1, -1) translate(-3.500000, -15.500000) translate(0.000000, 12.000000)"
  }, React.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), React.createElement("polyline", {
    id: "Path-9",
    stroke: color,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  }))))));
};

/* Packages */
/* Icon */

var IconCheckThin = function IconCheckThin(props) {
  var color = props.color,
      size = props.size;
  return React.createElement("svg", {
    viewBox: "0 0 20 16",
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "IconCheckThinWrapper",
    stroke: "none",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "IconCheckThinWrapperGroup",
    transform: "translate(-5.000000, -7.000000)",
    stroke: color,
    strokeWidth: "4"
  }, React.createElement("polyline", {
    id: "Path",
    points: "7.5 14 13.5 21 23 9"
  }))));
};

/* Packages */
/* Icon Itself */

var IconDelete = function IconDelete(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-delete-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-delete-path",
    fill: color,
    d: "M15,0 C23.2842712,-1.52179594e-15 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 1.01453063e-15,23.2842712 0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 Z M24.25,18 C24.6642136,18 25,17.6642136 25,17.25 L25,13.75 C25,13.3357864 24.6642136,13 24.25,13 L5.75,13 C5.33578644,13 5,13.3357864 5,13.75 L5,17.25 C5,17.6642136 5.33578644,18 5.75,18 L24.25,18 Z"
  })));
};

/* Icon Itself */

var IconExternalTicket = function IconExternalTicket(props) {
  var _React$createElement;

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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-external-ticket-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("g", {
    id: "aph-icon-external-ticket-subgroup",
    transform: "translate(15.000000, 15.500000) rotate(-270.000000) translate(-15.000000, -15.500000) translate(4.000000, 4.500000)",
    stroke: color,
    strokeWidth: "2.3"
  }, React.createElement("path", (_React$createElement = {
    id: "aph-icon-external-ticket-path-one",
    d: "M1.5,2 L19.5,2 C20.0522847,2 20.5,2.44771525 20.5,3 L20.5,7 C17.8333333,7 16.5,8 16.5,10 C16.5,12 17.8333333,13 20.5,13 L20.5,17 C20.5,17.5522847 20.0522847,18 19.5,18 L5.5,18"
  }, _defineProperty(_React$createElement, "id", "Rectangle"), _defineProperty(_React$createElement, "transform", "translate(11.000000, 10.000000) rotate(-90.000000) translate(-11.000000, -10.000000)"), _React$createElement)), React.createElement("path", {
    id: "aph-icon-external-ticket-path-two",
    d: "M0,21.5 L22,14.5"
  }))));
};

/* Packages */
/* Icon Itself */

var IconEye = function IconEye(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-eye-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-eye-path",
    d: "M5.34544747,14.7030573 C8.56363164,11.5676858 11.7818158,10 15,10 C18.2181923,10 21.4363846,11.5676937 24.6545769,14.7030811 L24.6545535,14.7031051 C25.0946794,15.1319063 25.1038597,15.8363109 24.6750585,16.2764368 C24.6683125,16.2833609 24.6614766,16.2901967 24.6545525,16.2969427 C21.4363684,19.4323142 18.2181842,21 15,21 C11.7818077,21 8.5636154,19.4323063 5.34542309,16.2969189 L5.34544646,16.2968949 C4.90532063,15.8680937 4.89614027,15.1636891 5.32494155,14.7235632 C5.33168748,14.7166391 5.33852337,14.7098033 5.34544747,14.7030573 Z M15,18.25 C16.5362373,18.25 17.7816037,17.0187831 17.7816037,15.5 C17.7816037,13.9812169 16.5362373,12.75 15,12.75 C13.4637627,12.75 12.2183963,13.9812169 12.2183963,15.5 C12.2183963,17.0187831 13.4637627,18.25 15,18.25 Z",
    fill: color
  })));
};

/* Packages */
/* Icon Itself */

var IconFlash = function IconFlash(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }, React.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    stroke: color,
    strokeWidth: "2",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  })));
};

/* Packages */
/* Icon Itself */

var IconFlashOff = function IconFlashOff(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  }), React.createElement("path", {
    id: "aph-icon-flash-path",
    d: "M6,6 L24,24",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })));
};

/* Packages */
/* Icon Itself */

var IconInfo = function IconInfo(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 20 20"
  }, React.createElement("g", {
    id: "aph-icon-info-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-info-path",
    fill: color,
    d: "M10,3.25 C10.9664983,3.25 11.75,4.03350169 11.75,5 C11.75,5.96649831 10.9664983,6.75 10,6.75 C9.03350169,6.75 8.25,5.96649831 8.25,5 C8.25,4.03350169 9.03350169,3.25 10,3.25 Z M8.6875,8.75 L11.3125,8.75 C11.5541246,8.75 11.75,8.94587542 11.75,9.1875 L11.75,16.3125 C11.75,16.5541246 11.5541246,16.75 11.3125,16.75 L8.6875,16.75 C8.44587542,16.75 8.25,16.5541246 8.25,16.3125 L8.25,9.1875 C8.25,8.94587542 8.44587542,8.75 8.6875,8.75 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconItems = function IconItems(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "Tab-Destaques-/-Normal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Eventos",
    transform: "translate(2.000000, 0.500000)"
  }, React.createElement("rect", {
    id: "Rectangle-Copy-3",
    stroke: color,
    strokeWidth: "1.5",
    transform: "translate(7.000000, 12.000000) rotate(-270.000000) translate(-7.000000, -12.000000) ",
    x: "-4.75",
    y: "4.25",
    width: "23.5",
    height: "15.5",
    rx: "1.05"
  }), React.createElement("rect", {
    id: "Rectangle-Copy-3",
    fill: color,
    transform: "translate(18.000000, 11.950000) rotate(-270.000000) translate(-18.000000, -11.950000) ",
    x: "7",
    y: "11.2",
    width: "22",
    height: "1.5",
    rx: "0.75"
  }), React.createElement("rect", {
    id: "Rectangle-Copy-5",
    fill: color,
    transform: "translate(21.000000, 11.750000) rotate(-270.000000) translate(-21.000000, -11.750000) ",
    x: "12",
    y: "11",
    width: "18",
    height: "1.5",
    rx: "0.75"
  }))));
};

/* Packages */
/* Icon Itself */

var IconList = function IconList(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-list-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-list-group",
    fill: color,
    d: "M7,11 C5.8954305,11 5,10.1045695 5,9 C5,7.8954305 5.8954305,7 7,7 C8.1045695,7 9,7.8954305 9,9 C9,10.1045695 8.1045695,11 7,11 Z M7,17 C5.8954305,17 5,16.1045695 5,15 C5,13.8954305 5.8954305,13 7,13 C8.1045695,13 9,13.8954305 9,15 C9,16.1045695 8.1045695,17 7,17 Z M7,23 C5.8954305,23 5,22.1045695 5,21 C5,19.8954305 5.8954305,19 7,19 C8.1045695,19 9,19.8954305 9,21 C9,22.1045695 8.1045695,23 7,23 Z M12.5,7.5 L23.5,7.5 C24.3284271,7.5 25,8.17157288 25,9 C25,9.82842712 24.3284271,10.5 23.5,10.5 L12.5,10.5 C11.6715729,10.5 11,9.82842712 11,9 C11,8.17157288 11.6715729,7.5 12.5,7.5 Z M12.5,13.5 L23.5,13.5 C24.3284271,13.5 25,14.1715729 25,15 C25,15.8284271 24.3284271,16.5 23.5,16.5 L12.5,16.5 C11.6715729,16.5 11,15.8284271 11,15 C11,14.1715729 11.6715729,13.5 12.5,13.5 Z M12.5,19.5 L23.5,19.5 C24.3284271,19.5 25,20.1715729 25,21 C25,21.8284271 24.3284271,22.5 23.5,22.5 L12.5,22.5 C11.6715729,22.5 11,21.8284271 11,21 C11,20.1715729 11.6715729,19.5 12.5,19.5 Z"
  })));
};

/* Icon styles */

var IconStyled = _styled("svg", {
  target: "edz3eco0"
})(animations.spin(), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25Mb2FkZXJEb251dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzZCIiwiZmlsZSI6Ikljb25Mb2FkZXJEb251dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogSWNvbiBzdHlsZXMgKi9cbmNvbnN0IEljb25TdHlsZWQgPSBzdHlsZWQuc3ZnYFxuICAgICR7YW5pbWF0aW9ucy5zcGluKCl9O1xuYDtcblxuLyogSWNvbiBJdHNlbGYgKi9cbmNvbnN0IEljb25Mb2FkZXJEb251dCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25TdHlsZWRcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICB3aWR0aD17YCR7d2lkdGggfHwgc2l6ZX1weGB9XG4gICAgICAgICAgICAgaGVpZ2h0PXtgJHtoZWlnaHQgfHwgc2l6ZX1weGB9XG4gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cImFwaC1pY29uLWxvYWRlci1ncm91cFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cImFwaC1pY29uLWxvYWRlci1wYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSwyMi41IEMxOS4xNDIxMzU2LDIyLjUgMjIuNSwxOS4xNDIxMzU2IDIyLjUsMTUgQzIyLjUsMTAuODU3ODY0NCAxOS4xNDIxMzU2LDcuNSAxNSw3LjUgQzEwLjg1Nzg2NDQsNy41IDcuNSwxMC44NTc4NjQ0IDcuNSwxNVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9JY29uU3R5bGVkPlxuICAgICk7XG59O1xuXG4vKiBJY29uIERlZmF1bHQgUHJvcHMgKi9cbkljb25Mb2FkZXJEb251dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZSA6IDIwLFxufTtcblxuLyogSWNvbiBQcm9wZXJ0aWVzIFR5cGVzICovXG5JY29uTG9hZGVyRG9udXQucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemUgOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJY29uTG9hZGVyRG9udXQ7XG4iXX0= */"));
/* Icon Itself */


var IconLoaderDonut = function IconLoaderDonut(props) {
  var color = props.color,
      size = props.size,
      width = props.width,
      height = props.height;
  return React.createElement(IconStyled, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "".concat(width || size, "px"),
    height: "".concat(height || size, "px"),
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-loader-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    id: "aph-icon-loader-path",
    stroke: color,
    strokeWidth: "4",
    d: "M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
  })));
};
/* Icon Default Props */


IconLoaderDonut.defaultProps = {
  color: 'white',
  size: 20
};
/* Icon Properties Types */

IconLoaderDonut.propTypes = {
  color: propTypes.string,
  size: propTypes.number
};

/* Packages */
/**
 * Icon
 * By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
 */

var IconLoading = function IconLoading(props) {
  /**
   * Inherit props
   */
  var color = props.color,
      width = props.width,
      height = props.height,
      size = props.size;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 30",
    width: width || size || 120,
    height: height || size || 30,
    fill: color
  }, React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

/* Packages */
/* Icon Itself */

var IconLock = function IconLock(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-lock-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    id: "aph-icon-lock-rect",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), React.createElement("path", {
    id: "aph-icon-lock-path",
    fill: color,
    d: "M9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 C18.3137085,5 21,7.6862915 21,11 L21,13 L19,13 L19,11 C19,8.790861 17.209139,7 15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconMinus = function IconMinus(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-minus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    id: "aph-icon-rect-minus",
    fill: color,
    rx: "2.5",
    x: "12.5",
    y: "5",
    width: "5",
    height: "20",
    transform: "translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
  })));
};

/* Packages */
/* Icon Itself */

var IconOptions = function IconOptions(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-options",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-options",
    fill: color,
    d: "M7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 C8.88071187,12.5 10,13.6192881 10,15 C10,16.3807119 8.88071187,17.5 7.5,17.5 Z M15,17.5 C13.6192881,17.5 12.5,16.3807119 12.5,15 C12.5,13.6192881 13.6192881,12.5 15,12.5 C16.3807119,12.5 17.5,13.6192881 17.5,15 C17.5,16.3807119 16.3807119,17.5 15,17.5 Z M22.5,17.5 C21.1192881,17.5 20,16.3807119 20,15 C20,13.6192881 21.1192881,12.5 22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 Z"
  })));
};

/* Packages */
/* Icon */

var IconPencil = function IconPencil(props) {
  var color = props.color,
      size = props.size;
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    width: size,
    height: size
  }, React.createElement("g", {
    id: "aph-icon-polygon-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-refresh",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(13.427922, 16.427922) rotate(-315.000000) translate(-13.427922, -16.427922)",
    d: "M9.92792206,3.92792206 L16.9279221,3.92792206 C18.0324916,3.92792206 18.9279221,4.82335256 18.9279221,5.92792206 L18.9279221,20.0888985 C18.9279221,20.4844205 18.8106482,20.8710621 18.5909276,21.1999397 L13.8436734,28.3056257 C13.6902707,28.5352389 13.3797749,28.5970196 13.1501618,28.4436168 C13.0955478,28.4071297 13.0486578,28.3602397 13.0121707,28.3056257 L8.26491652,21.1999397 C8.04519592,20.8710621 7.92792206,20.4844205 7.92792206,20.0888985 L7.92792206,5.92792206 C7.92792206,4.82335256 8.82335256,3.92792206 9.92792206,3.92792206 Z"
  }), React.createElement("polygon", {
    id: "aph-icon-polygon-refresh",
    fill: color,
    transform: "translate(5.999679, 23.856166) rotate(-315.000000) translate(-5.999679, -23.856166)",
    points: "8.67125147 21.8612882 5.9996786 25.8510429 3.32810572 21.8612882"
  })));
};

/* Packages */
/* Icon Itself */

var IconPlus = function IconPlus(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-plus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-plus",
    fill: color,
    d: "M17.5,12.5 L22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 L17.5,17.5 L17.5,22.5 C17.5,23.8807119 16.3807119,25 15,25 C13.6192881,25 12.5,23.8807119 12.5,22.5 L12.5,17.5 L7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 L12.5,12.5 L12.5,7.5 C12.5,6.11928813 13.6192881,5 15,5 C16.3807119,5 17.5,6.11928813 17.5,7.5 L17.5,12.5 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconQRCode = function IconQRCode(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-qrcode",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-qrcode",
    fill: color,
    d: "M6,19 L10,19 C10.5522847,19 11,19.4477153 11,20 L11,24 C11,24.5522847 10.5522847,25 10,25 L6,25 C5.44771525,25 5,24.5522847 5,24 L5,20 C5,19.4477153 5.44771525,19 6,19 Z M7.3,20.8 C7.02385763,20.8 6.8,21.0238576 6.8,21.3 L6.8,22.8 C6.8,23.0761424 7.02385763,23.3 7.3,23.3 L8.8,23.3 C9.07614237,23.3 9.3,23.0761424 9.3,22.8 L9.3,21.3 C9.3,21.0238576 9.07614237,20.8 8.8,20.8 L7.3,20.8 Z M6,5 L10,5 C10.5522847,5 11,5.44771525 11,6 L11,10 C11,10.5522847 10.5522847,11 10,11 L6,11 C5.44771525,11 5,10.5522847 5,10 L5,6 C5,5.44771525 5.44771525,5 6,5 Z M7.3,6.8 C7.02385763,6.8 6.8,7.02385763 6.8,7.3 L6.8,8.8 C6.8,9.07614237 7.02385763,9.3 7.3,9.3 L8.8,9.3 C9.07614237,9.3 9.3,9.07614237 9.3,8.8 L9.3,7.3 C9.3,7.02385763 9.07614237,6.8 8.8,6.8 L7.3,6.8 Z M20,5 L24,5 C24.5522847,5 25,5.44771525 25,6 L25,10 C25,10.5522847 24.5522847,11 24,11 L20,11 C19.4477153,11 19,10.5522847 19,10 L19,6 C19,5.44771525 19.4477153,5 20,5 Z M21.3,6.8 C21.0238576,6.8 20.8,7.02385763 20.8,7.3 L20.8,8.8 C20.8,9.07614237 21.0238576,9.3 21.3,9.3 L22.8,9.3 C23.0761424,9.3 23.3,9.07614237 23.3,8.8 L23.3,7.3 C23.3,7.02385763 23.0761424,6.8 22.8,6.8 L21.3,6.8 Z M24,17 C24.5522847,17 25,17.4477153 25,18 L25,24 C25,24.5522847 24.5522847,25 24,25 L16,25 C15.4477153,25 15,24.5522847 15,24 C15,23.4477153 15.4477153,23 16,23 L22,23 C22.5522847,23 23,22.5522847 23,22 L23,18 C23,17.4477153 23.4477153,17 24,17 Z M14,22 C13.4477153,22 13,21.5522847 13,21 L13,19 C13,18.4477153 13.4477153,18 14,18 L20,18 C20.5522847,18 21,18.4477153 21,19 C21,19.5522847 20.5522847,20 20,20 L16,20 C15.4477153,20 15,20.4477153 15,21 C15,21.5522847 14.5522847,22 14,22 Z M14,11 C14.5522847,11 15,11.4477153 15,12 L15,15 C15,15.5522847 14.5522847,16 14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L12,14 C12.5522847,14 13,13.5522847 13,13 L13,12 C13,11.4477153 13.4477153,11 14,11 Z M16,5 C16.5522847,5 17,5.44771525 17,6 L17,8 C17,8.55228475 16.5522847,9 16,9 C15.4477153,9 15,8.55228475 15,8 L15,6 C15,5.44771525 15.4477153,5 16,5 Z M17.9988769,13.0002805 L24.0011231,13.0019657 C24.552833,13.0021206 25,13.4494132 25,14.0011231 C25,14.5526327 24.5529131,14.9997196 24.0014035,14.9997196 C24.0013101,14.9997196 24.0012166,14.9997196 24.0011231,14.9997195 L17.9988769,14.9980343 C17.447167,14.9978794 17,14.5505868 17,13.9988769 C17,13.4473673 17.4470869,13.0002804 17.9985965,13.0002804 C17.9986899,13.0002804 17.9987834,13.0002804 17.9988769,13.0002805 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconRefresh = function IconRefresh(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "Icon-/-30-/-Refresh-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Group",
    transform: "translate(1.500000, 6.000000)"
  }, React.createElement("path", {
    id: "Path-4-Copy-3",
    fill: color,
    transform: "translate(21.649747, 10.449747) rotate(-315.000000) translate(-21.649747, -10.449747) ",
    d: "M19.0247475,13.9497475 C18.5414983,13.9497475 18.1497475,13.5579966 18.1497475,13.0747475 L18.1497475,7.82474747 C18.1497475,7.34149831 18.5414983,6.94974747 19.0247475,6.94974747 L24.2747475,6.94974747 C24.7579966,6.94974747 25.1497475,7.34149831 25.1497475,7.82474747 C25.1497475,8.30799662 24.7579966,8.69974747 24.2747475,8.69974747 L20.7747475,8.69974747 C20.2914983,8.69974747 19.8997475,9.09149831 19.8997475,9.57474747 L19.8997475,13.0747475 C19.8997475,13.5579966 19.5079966,13.9497475 19.0247475,13.9497475 Z"
  }), React.createElement("path", {
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(5.349747, 7.449747) rotate(-135.000000) translate(-5.349747, -7.449747) ",
    d: "M2.72474747,10.9497475 C2.24149831,10.9497475 1.84974747,10.5579966 1.84974747,10.0747475 L1.84974747,4.82474747 C1.84974747,4.34149831 2.24149831,3.94974747 2.72474747,3.94974747 L7.97474747,3.94974747 C8.45799662,3.94974747 8.84974747,4.34149831 8.84974747,4.82474747 C8.84974747,5.30799662 8.45799662,5.69974747 7.97474747,5.69974747 L4.47474747,5.69974747 C3.99149831,5.69974747 3.59974747,6.09149831 3.59974747,6.57474747 L3.59974747,10.0747475 C3.59974747,10.5579966 3.20799662,10.9497475 2.72474747,10.9497475 Z"
  }), React.createElement("path", {
    id: "Oval",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20,2.63083009 C18.4097668,1.00521174 16.2144208,0 13.789779,0 C8.93531811,0 5,4.02943725 5,9"
  }), React.createElement("path", {
    id: "Oval-Copy",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "translate(14.500000, 13.500000) rotate(-180.000000) translate(-14.500000, -13.500000) ",
    d: "M22,11.6308301 C20.4097668,10.0052117 18.2144208,9 15.789779,9 C10.9353181,9 7,13.0294373 7,18"
  }))));
};

/* Packages */
/* Icon Itself */

var IconScan = function IconScan(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-scan",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, React.createElement("polyline", {
    id: "aph-icon-polyline-one-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 5 25 5 25 10"
  }), React.createElement("polyline", {
    id: "aph-icon-polyline-two-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 20 10 20 10 25",
    transform: "translate(7.500000, 22.500000) rotate(-180.000000) translate(-7.500000, -22.500000)"
  }), React.createElement("polyline", {
    id: "aph-icon-polyline-tree-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 5 10 5 10 10",
    transform: "translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000)"
  }), React.createElement("polyline", {
    id: "aph-icon-polyline-four-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 20 25 20 25 25",
    transform: "translate(22.500000, 22.500000) rotate(-270.000000) translate(-22.500000, -22.500000)"
  }), React.createElement("path", {
    id: "aph-icon-path-scan",
    d: "M3,15 L27,15",
    stroke: color,
    strokeWidth: "2"
  })));
};

/* Core Packages */
/* Icon Itself */

function IconSearch(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      color = props.color;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "IconSearchGroup",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    id: "IconSearchCircle",
    stroke: color,
    strokeWidth: "3.5",
    cx: "12.5",
    cy: "12.9",
    r: "6"
  }), React.createElement("path", {
    d: "M17.5,17.9 L23,23.4",
    id: "IconSearchLiner",
    stroke: color,
    strokeWidth: "3.5"
  })));
}

/* Packages */
/* Icon Itself */

var IconSettings = function IconSettings(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-settings",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-settings",
    fill: color,
    d: "M21,22 L21,21.5 C21,20.9477153 21.4477153,20.5 22,20.5 C22.5522847,20.5 23,20.9477153 23,21.5 L23,22 L24,22 C24.5522847,22 25,22.4477153 25,23 C25,23.5522847 24.5522847,24 24,24 L23,24 L23,24.5 C23,25.0522847 22.5522847,25.5 22,25.5 C21.4477153,25.5 21,25.0522847 21,24.5 L21,24 L6,24 C5.44771525,24 5,23.5522847 5,23 C5,22.4477153 5.44771525,22 6,22 L21,22 Z M14,14 L14,13.5 C14,12.9477153 14.4477153,12.5 15,12.5 C15.5522847,12.5 16,12.9477153 16,13.5 L16,14 L24,14 C24.5522847,14 25,14.4477153 25,15 C25,15.5522847 24.5522847,16 24,16 L16,16 L16,16.5 C16,17.0522847 15.5522847,17.5 15,17.5 C14.4477153,17.5 14,17.0522847 14,16.5 L14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L14,14 Z M7,6 L7,5.5 C7,4.94771525 7.44771525,4.5 8,4.5 C8.55228475,4.5 9,4.94771525 9,5.5 L9,6 L24,6 C24.5522847,6 25,6.44771525 25,7 C25,7.55228475 24.5522847,8 24,8 L9,8 L9,8.5 C9,9.05228475 8.55228475,9.5 8,9.5 C7.44771525,9.5 7,9.05228475 7,8.5 L7,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 L7,6 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconTicketbooth = function IconTicketbooth(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("path", {
    id: "aph-icon-defs-path-ticketbooth",
    d: "M6,9 L24,9 C24.5522847,9 25,9.44771525 25,10 L25,13 C23.6666667,13.0001869 23,13.6668536 23,15 C23,16.3331464 23.6666667,16.9998131 25,17 L25,20 C25,20.5522847 24.5522847,21 24,21 L6,21 C5.44771525,21 5,20.5522847 5,20 L5,17 C6.33333333,16.9998131 7,16.3331464 7,15 C7,13.6668536 6.33333333,13.0001869 5,13 L5,10 C5,9.44771525 5.44771525,9 6,9 Z"
  })), React.createElement("g", {
    id: "aph-icon-group-ticketbooth",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "aph-icon-mask-ticketbooth",
    fill: color
  }, React.createElement("use", {
    xlinkHref: "#aph-icon-defs-path-ticketbooth"
  })), React.createElement("use", {
    id: "aph-icon-use-ticketbooth",
    fill: color,
    xlinkHref: "#aph-icon-defs-path-ticketbooth",
    transform: "translate(15.000000, 15.000000) rotate(-45.000000) translate(-15.000000, -15.000000)"
  })));
};

/* Packages */
/* Icon Itself */

var IconTimes = function IconTimes(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-times-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("g", {
    id: "aph-icon-times-subgroup",
    transform: "translate(9.000000, 9.000000)",
    stroke: color,
    strokeWidth: "4"
  }, React.createElement("path", {
    id: "aph-icon-times-path-one",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000)"
  }), React.createElement("path", {
    id: "aph-icon-times-path-two",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-180.000000) translate(-6.000000, -6.000000)"
  }))));
};

/* Packages */
/* Icon Itself */

var IconTransfer = function IconTransfer(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-transfer",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    id: "aph-icon-path-transfer",
    fill: color,
    transform: "translate(14.992641, 14.985028) rotate(-90.000000) translate(-14.992641, -14.985028)",
    d: "M11.206603,8.37817585 C11.2271209,8.45799335 11.2380326,8.54166506 11.2380326,8.62788535 L11.2380326,19.9850282 C11.2380326,20.537313 10.7903174,20.9850282 10.2380326,20.9850282 C9.68574787,20.9850282 9.23803262,20.537313 9.23803262,19.9850282 L9.23803262,8.62788535 C9.23803262,8.54608042 9.24785541,8.46656973 9.26638585,8.3904684 L6.70710678,10.9497475 C6.31658249,11.3402718 5.68341751,11.3402718 5.29289322,10.9497475 C4.90236893,10.5592232 4.90236893,9.9260582 5.29289322,9.53553391 L9.53553391,5.29289322 C9.9260582,4.90236893 10.5592232,4.90236893 10.9497475,5.29289322 L15.1923882,9.53553391 C15.5829124,9.9260582 15.5829124,10.5592232 15.1923882,10.9497475 C14.8018639,11.3402718 14.1686989,11.3402718 13.7781746,10.9497475 L11.206603,8.37817585 Z M20.6984202,21.6000634 L23.2781746,19.0203089 C23.6686989,18.6297847 24.3018639,18.6297847 24.6923882,19.0203089 C25.0829124,19.4108332 25.0829124,20.0439982 24.6923882,20.4345225 L20.4497475,24.6771632 C20.0592232,25.0676875 19.4260582,25.0676875 19.0355339,24.6771632 L14.7928932,20.4345225 C14.4023689,20.0439982 14.4023689,19.4108332 14.7928932,19.0203089 C15.1834175,18.6297847 15.8165825,18.6297847 16.2071068,19.0203089 L18.7740013,21.5872035 C18.7505574,21.5022863 18.7380326,21.4128383 18.7380326,21.3204649 L18.7380326,9.98502821 C18.7380326,9.43274346 19.1857479,8.98502821 19.7380326,8.98502821 C20.2903174,8.98502821 20.7380326,9.43274346 20.7380326,9.98502821 L20.7380326,21.3204649 C20.7380326,21.417514 20.7242078,21.5113341 20.6984202,21.6000634 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconUnlock = function IconUnlock(props) {
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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("g", {
    id: "aph-icon-group-unlock",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    id: "aph-icon-rect-unlock",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), React.createElement("path", {
    id: "aph-icon-path-unlock",
    fill: color,
    d: "M21,10 C21,10.5522847 20.5522847,11 20,11 C19.4477153,11 19,10.5522847 19,10 C19,8.34314575 17.6568542,7 16,7 L15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 L16,5 C18.7614237,5 21,7.23857625 21,10 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconPaymentAmex = function IconPaymentAmex(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "aph-icon-defs-rect-payment-amex",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "aph-icon-group-payment-amex",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "aph-icon-mask-payment-amex",
    fill: "#FFFFFF"
  }, React.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#27ADE4",
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  }), React.createElement("g", {
    id: "aph-icon-subgroup-payment-amex",
    mask: "url(#aph-icon-mask-payment-amex)",
    fillRule: "nonzero"
  }, React.createElement("g", {
    id: "Shape",
    transform: "translate(0.750000, 9.800000)"
  }, React.createElement("path", {
    fill: "#2D78BC",
    d: "M3.46580854,2.55314286 L2.95162683,1.24857143 L2.44050366,2.55314286 L3.46580854,2.55314286 Z M14.7871207,2.03357143 C14.6838951,2.09907143 14.5619012,2.10121429 14.4157171,2.10121429 L13.5033,2.10121429 L13.5033,1.3745 L14.4279512,1.3745 C14.5587732,1.3745 14.6953646,1.38014286 14.7839927,1.433 C14.8812402,1.48114286 14.9413693,1.58264286 14.9413693,1.72271429 C14.9416463,1.86542857 14.8841598,1.98064286 14.7871207,2.03357143 L14.7871207,2.03357143 Z M21.2940183,2.55314286 L20.7746232,1.24857143 L20.258078,2.55314286 L21.2940183,2.55314286 L21.2940183,2.55314286 Z M9.16455732,3.96507143 L8.39464024,3.96507143 L8.39179024,1.402 L7.30302073,3.96507143 L6.64369756,3.96507143 L5.5523561,1.39985714 L5.5523561,3.96507143 L4.02503415,3.96507143 L3.73655854,3.23514286 L2.1734378,3.23514286 L1.88183415,3.96507143 L1.0664561,3.96507143 L2.41089146,0.692642857 L3.52670122,0.692642857 L4.80350122,3.79078571 L4.80350122,0.692642857 L6.02879268,0.692642857 L7.01141707,2.91257143 L7.91396341,0.692642857 L9.16455732,0.692642857 L9.16455732,3.96507143 L9.16455732,3.96507143 L9.16455732,3.96507143 Z M12.2324085,3.96507143 L9.72406098,3.96507143 L9.72406098,0.692642857 L12.232478,0.692642857 L12.232478,1.37442857 L10.4752793,1.37442857 L10.4752793,1.96428571 L12.1903537,1.96428571 L12.1903537,2.63514286 L10.4752793,2.63514286 L10.4752793,3.28778571 L12.232478,3.28778571 L12.2324085,3.96507143 L12.2324085,3.96507143 Z M15.7689805,1.57435714 C15.7689805,2.0955 15.4344878,2.36571429 15.2397146,2.44621429 C15.404111,2.51171429 15.5445256,2.62664286 15.6111183,2.72228571 C15.7172634,2.8845 15.7356841,3.03021429 15.7356841,3.322 L15.7356841,3.96507143 L14.9782793,3.96507143 L14.9754293,3.55242857 C14.9754293,3.35542857 14.9933634,3.07185714 14.8568415,2.91471429 C14.7470817,2.79978571 14.5801134,2.77464286 14.309572,2.77464286 L13.5033,2.77464286 L13.5033,3.96507143 L12.7524293,3.96507143 L12.7524293,0.692642857 L14.4797378,0.692642857 C14.8636537,0.692642857 15.1463598,0.703071429 15.3887488,0.849285714 C15.6264805,0.996 15.7689805,1.209 15.7689805,1.57435714 L15.7689805,1.57435714 Z M16.9706378,3.96507143 L16.2046134,3.96507143 L16.2046134,0.692928571 L16.9706378,0.692928571 L16.9706378,3.96507143 Z M25.8585366,3.96507143 L24.7941659,3.96507143 L23.3711817,1.50885714 L23.3711817,3.96507143 L21.8417744,3.96507143 L21.5499622,3.23514286 L19.990178,3.23514286 L19.7064293,3.96507143 L18.8277951,3.96507143 C18.4631341,3.96507143 18.0006695,3.88085714 17.7390256,3.60292857 C17.4750183,3.32521429 17.3379402,2.94892857 17.3379402,2.35371429 C17.3379402,1.86885714 17.4196171,1.42442857 17.7429183,1.07457143 C17.9855854,0.813214286 18.3658171,0.692642857 18.8831963,0.692642857 L19.6098768,0.692642857 L19.6098768,1.39371429 L18.8982805,1.39371429 C18.6244024,1.39371429 18.4698768,1.43621429 18.3206341,1.58778571 C18.1926622,1.72592857 18.1047293,1.98628571 18.1047293,2.32921429 C18.1047293,2.67957143 18.1718085,2.93242857 18.311528,3.09735714 C18.4267793,3.227 18.6369146,3.26628571 18.8346073,3.26628571 L19.171672,3.26628571 L20.2299951,0.693 L21.355189,0.693 L22.626289,3.78821429 L22.626289,0.693 L23.7696951,0.693 L25.0894537,2.97171429 L25.0894537,0.693 L25.8585366,0.693 L25.8585366,3.96507143 L25.8585366,3.96507143 Z M1.05783659,4.60785714 L2.34061463,4.60785714 L2.62985488,3.88085714 L3.27722195,3.88085714 L3.56569756,4.60785714 L6.08996341,4.60785714 L6.08996341,4.05221429 L6.31546098,4.61 L7.62555732,4.61 L7.85077683,4.04392857 L7.85077683,4.60785714 L14.1238354,4.60785714 L14.1207073,3.4145 L14.2421451,3.4145 C14.327228,3.41771429 14.3519049,3.426 14.3519049,3.57221429 L14.3519049,4.60785714 L17.5963866,4.60785714 L17.5963866,4.33014286 C17.8583085,4.47635714 18.265372,4.60785714 18.801172,4.60785714 L20.1659049,4.60785714 L20.4579951,3.88085714 L21.1056402,3.88085714 L21.3911963,4.60785714 L24.0213293,4.60785714 L24.0213293,3.91721429 L24.4197732,4.60785714 L26.5275915,4.60785714 L26.5275915,0.044 L24.441322,0.044 L24.441322,0.583071429 L24.1495098,0.044 L22.0088817,0.044 L22.0088817,0.583071429 L21.7409817,0.044 L18.849622,0.044 C18.3660951,0.044 17.940611,0.114571429 17.5967341,0.3105 L17.5967341,0.044 L15.6015256,0.044 L15.6015256,0.3105 C15.3830488,0.108428571 15.0852585,0.044 14.7536159,0.044 L7.46435854,0.044 L6.97534024,1.22264286 L6.47311463,0.044 L4.17691829,0.044 L4.17691829,0.583071429 L3.92458902,0.044 L1.96691707,0.044 L1.05735,2.21392857 L0.014597561,4.60785714 L1.05783659,4.60785714 Z"
  }), React.createElement("path", {
    fill: "#FFFFFF",
    d: "M3.46580854,2.82035714 L2.95162683,1.51578571 L2.44050366,2.82035714 L3.46580854,2.82035714 Z M14.7871207,2.30078571 C14.6838951,2.36628571 14.5619012,2.36842857 14.4157171,2.36842857 L13.5033,2.36842857 L13.5033,1.64171429 L14.4279512,1.64171429 C14.5587732,1.64171429 14.6953646,1.64735714 14.7839927,1.70021429 C14.8812402,1.74835714 14.9413693,1.84985714 14.9413693,1.98992857 C14.9416463,2.13271429 14.8841598,2.24792857 14.7871207,2.30078571 L14.7871207,2.30078571 Z M21.2940183,2.82035714 L20.7746232,1.51578571 L20.258078,2.82035714 L21.2940183,2.82035714 L21.2940183,2.82035714 Z M9.16455732,4.23235714 L8.39464024,4.23235714 L8.39179024,1.66928571 L7.30302073,4.23235714 L6.64369756,4.23235714 L5.5523561,1.66714286 L5.5523561,4.23235714 L4.02503415,4.23235714 L3.73655854,3.50242857 L2.1734378,3.50242857 L1.88183415,4.23235714 L1.0664561,4.23235714 L2.41089146,0.959928571 L3.52670122,0.959928571 L4.80350122,4.05807143 L4.80350122,0.959928571 L6.02879268,0.959928571 L7.01141707,3.17985714 L7.91396341,0.959928571 L9.16455732,0.959928571 L9.16455732,4.23235714 L9.16455732,4.23235714 L9.16455732,4.23235714 Z M12.2324085,4.23235714 L9.72406098,4.23235714 L9.72406098,0.959928571 L12.232478,0.959928571 L12.232478,1.64171429 L10.4752793,1.64171429 L10.4752793,2.23157143 L12.1903537,2.23157143 L12.1903537,2.90242857 L10.4752793,2.90242857 L10.4752793,3.55507143 L12.232478,3.55507143 L12.2324085,4.23235714 L12.2324085,4.23235714 Z M15.7689805,1.84164286 C15.7689805,2.36278571 15.4344878,2.633 15.2397146,2.7135 C15.404111,2.779 15.5445256,2.89392857 15.6111183,2.98957143 C15.7172634,3.15178571 15.7356841,3.2975 15.7356841,3.58928571 L15.7356841,4.23235714 L14.9782793,4.23235714 L14.9754293,3.81971429 C14.9754293,3.62271429 14.9933634,3.33914286 14.8568415,3.182 C14.7470817,3.06707143 14.5801134,3.04192857 14.309572,3.04192857 L13.5033,3.04192857 L13.5033,4.23235714 L12.7524293,4.23235714 L12.7524293,0.959928571 L14.4797378,0.959928571 C14.8636537,0.959928571 15.1463598,0.970357143 15.3887488,1.11657143 C15.6264805,1.26328571 15.7689805,1.47628571 15.7689805,1.84164286 L15.7689805,1.84164286 Z M16.9706378,4.23235714 L16.2046134,4.23235714 L16.2046134,0.960214286 L16.9706378,0.960214286 L16.9706378,4.23235714 Z M25.8585366,4.23235714 L24.7941659,4.23235714 L23.3711817,1.77614286 L23.3711817,4.23235714 L21.8417744,4.23235714 L21.5499622,3.50242857 L19.990178,3.50242857 L19.7064293,4.23235714 L18.8277951,4.23235714 C18.4631341,4.23235714 18.0006695,4.14814286 17.7390256,3.87021429 C17.4750183,3.5925 17.3379402,3.21621429 17.3379402,2.621 C17.3379402,2.13614286 17.4196171,1.69171429 17.7429183,1.34185714 C17.9855854,1.0805 18.3658171,0.959928571 18.8831963,0.959928571 L19.6098768,0.959928571 L19.6098768,1.661 L18.8982805,1.661 C18.6244024,1.661 18.4698768,1.7035 18.3206341,1.85507143 C18.1926622,1.99321429 18.1047293,2.25357143 18.1047293,2.5965 C18.1047293,2.94685714 18.1718085,3.19971429 18.311528,3.36464286 C18.4267793,3.49428571 18.6369146,3.53357143 18.8346073,3.53357143 L19.171672,3.53357143 L20.2299951,0.960285714 L21.355189,0.960285714 L22.626289,4.0555 L22.626289,0.960285714 L23.7696951,0.960285714 L25.0894537,3.239 L25.0894537,0.960285714 L25.8585366,0.960285714 L25.8585366,4.23235714 L25.8585366,4.23235714 Z M1.05783659,4.87514286 L2.34061463,4.87514286 L2.62985488,4.14814286 L3.27722195,4.14814286 L3.56569756,4.87514286 L6.08996341,4.87514286 L6.08996341,4.3195 L6.31546098,4.87728571 L7.62555732,4.87728571 L7.85077683,4.31121429 L7.85077683,4.87514286 L14.1238354,4.87514286 L14.1207073,3.68178571 L14.2421451,3.68178571 C14.327228,3.685 14.3519049,3.69328571 14.3519049,3.8395 L14.3519049,4.87514286 L17.5963866,4.87514286 L17.5963866,4.59742857 C17.8583085,4.74364286 18.265372,4.87514286 18.801172,4.87514286 L20.1659049,4.87514286 L20.4579951,4.14814286 L21.1056402,4.14814286 L21.3911963,4.87514286 L24.0213293,4.87514286 L24.0213293,4.1845 L24.4197732,4.87514286 L26.5275915,4.87514286 L26.5275915,0.311285714 L24.441322,0.311285714 L24.441322,0.850357143 L24.1495098,0.311285714 L22.0088817,0.311285714 L22.0088817,0.850357143 L21.7409817,0.311285714 L18.849622,0.311285714 C18.3660951,0.311285714 17.940611,0.381857143 17.5967341,0.577785714 L17.5967341,0.311285714 L15.6015256,0.311285714 L15.6015256,0.577785714 C15.3830488,0.375714286 15.0852585,0.311285714 14.7536159,0.311285714 L7.46435854,0.311285714 L6.97534024,1.48992857 L6.47311463,0.311285714 L4.17691829,0.311285714 L4.17691829,0.850357143 L3.92458902,0.311285714 L1.96691707,0.311285714 L1.05735,2.48121429 L0.014597561,4.87514286 L1.05783659,4.87514286 Z"
  }), React.createElement("path", {
    fill: "#2D78BC",
    d: "M28.2120805,7.6935 L28.2120805,5.59971429 L27.6924073,5.59971429 L27.6924073,5.59971429 L26.3310805,5.59971429 C25.9115744,5.59971429 25.6064159,5.70421429 25.3908585,5.86642857 L25.3908585,5.59971429 L23.3345488,5.59971429 C23.0057561,5.59971429 22.6195463,5.68414286 22.4374939,5.86642857 L22.4374939,5.59971429 L18.7648171,5.59971429 L18.7648171,5.86642857 C18.4727268,5.64728571 17.9793293,5.59971429 17.7520244,5.59971429 L15.3297329,5.59971429 L15.3297329,5.86642857 C15.0985354,5.63364286 14.5845622,5.59971429 14.2711317,5.59971429 L11.5603646,5.59971429 L10.9400378,6.29807143 L10.3589854,5.59971429 L6.30955244,5.59971429 L6.30955244,10.1630714 L10.282522,10.1630714 L10.9218256,9.45371429 L11.5236622,10.1630714 L13.9729939,10.1657143 L13.9729939,9.09185714 L14.2135756,9.09185714 C14.5384061,9.09721429 14.9215573,9.08357143 15.2596646,8.9315 L15.2596646,10.1627857 L17.279828,10.1627857 L17.279828,8.97314286 L17.3776317,8.97314286 C17.501989,8.97314286 17.5139451,8.97878571 17.5139451,9.10785714 L17.5139451,10.1627857 L23.6502037,10.1627857 C24.0400976,10.1627857 24.447439,10.0587857 24.6731451,9.87092857 L24.6731451,10.1627857 L26.6192085,10.1627857 C27.0244646,10.1627857 27.4200585,10.1037143 27.7209768,9.95242857 L27.7209768,9.94764286 C28.160572,9.65628571 28.4528733,9.14585714 28.4528733,8.56321429 C28.4534268,8.2435 28.3645207,7.9455 28.2120805,7.6935 Z M14.24715,8.42364286 L13.309778,8.42364286 L13.309778,9.52078571 L11.8498134,9.52078571 L10.9246756,8.43778571 L9.9636,9.52078571 L6.98785244,9.52078571 L6.98785244,6.25 L10.0094085,6.25 L10.9335037,7.322 L11.8890878,6.25 L14.2895524,6.25 C14.885411,6.25 15.555161,6.42185714 15.555161,7.32735714 C15.555161,8.23628571 14.9036232,8.42364286 14.24715,8.42364286 Z M18.7679451,8.27535714 C18.8740902,8.43492857 18.8893829,8.58378571 18.892511,8.87242857 L18.892511,9.52085714 L18.1387207,9.52085714 L18.1387207,9.11164286 C18.1387207,8.91492857 18.1566549,8.62364286 18.0170049,8.47128571 C17.9069671,8.35421429 17.7402768,8.32585714 17.4658427,8.32585714 L16.6629073,8.32585714 L16.6629073,9.52078571 L15.9083524,9.52078571 L15.9083524,6.25 L17.6426817,6.25 C18.0229134,6.25 18.299711,6.26735714 18.5465488,6.4045 C18.7837939,6.55335714 18.932828,6.75728571 18.932828,7.13064286 C18.932828,7.65264286 18.5980573,7.91935714 18.4004341,8.00085714 C18.5668463,8.065 18.7039244,8.17992857 18.7679451,8.27535714 Z M21.8560939,6.92671429 L20.0968098,6.92671429 L20.0968098,7.52135714 L21.8132049,7.52135714 L21.8132049,8.18871429 L20.0968098,8.18871429 L20.0968098,8.8395 L21.8560939,8.84271429 L21.8560939,9.52128571 L19.3489976,9.52128571 L19.3489976,6.25 L21.8560939,6.25 L21.8560939,6.92671429 L21.8560939,6.92671429 Z M23.7690695,9.52107143 L22.3060463,9.52107143 L22.3060463,8.8195 L23.7636476,8.8195 C23.9061476,8.8195 24.0070793,8.80028571 24.0705439,8.73828571 C24.1217744,8.68807143 24.1592415,8.61428571 24.1592415,8.52557143 C24.1592415,8.43014286 24.1192024,8.35428571 24.0674159,8.30878571 C24.0096512,8.25857143 23.9308939,8.23635714 23.8000024,8.23635714 C23.0974427,8.21178571 22.2175573,8.25878571 22.2175573,7.22364286 C22.2175573,6.74921429 22.5041561,6.25 23.2915207,6.25 L24.7977805,6.25 L24.7977805,6.94621429 L23.4197707,6.94621429 C23.2832488,6.94621429 23.1942732,6.95157143 23.1185744,7.005 C23.0366195,7.05821429 23.0056866,7.1365 23.0056866,7.24071429 C23.0056866,7.36392857 23.0758939,7.44785714 23.1700829,7.4845 C23.2496744,7.51285714 23.3344793,7.52114286 23.4624512,7.52114286 L23.8671512,7.53314286 C24.2747012,7.543 24.5548354,7.61678571 24.7249317,7.79585714 C24.8713939,7.953 24.9493866,8.15185714 24.9493866,8.48835714 C24.949178,9.19235714 24.5270305,9.52107143 23.7690695,9.52107143 Z M27.6354768,9.20514286 C27.4375756,9.41335714 27.1183756,9.52107143 26.7019976,9.52107143 L25.251139,9.52107143 L25.251139,8.8195 L26.69595,8.8195 C26.8394927,8.8195 26.9399378,8.80028571 27.0002744,8.73828571 C27.0525476,8.68807143 27.088972,8.61428571 27.088972,8.52557143 C27.088972,8.43014286 27.0525476,8.35428571 26.9971463,8.30878571 C26.9427878,8.25857143 26.8634744,8.23635714 26.7323744,8.23635714 C26.0269646,8.21178571 25.1470793,8.25878571 25.1470793,7.22364286 C25.1470793,6.74921429 25.4363195,6.25 26.2249354,6.25 L27.6926854,6.25 L27.6926854,6.946 L26.3524207,6.946 C26.2161073,6.946 26.1251159,6.95164286 26.0483744,7.00507143 C25.969061,7.058 25.9386146,7.13657143 25.9386146,7.24028571 C25.9386146,7.364 26.0054854,7.44742857 26.103011,7.48407143 C26.1826024,7.51292857 26.2674073,7.52121429 26.3922512,7.52121429 L26.7993146,7.53271429 C27.2102707,7.54314286 27.4847049,7.61664286 27.6513951,7.796 C27.6818415,7.82085714 27.7002622,7.84892857 27.7216024,7.87671429 C27.7130524,7.86521429 27.704711,7.85428571 27.6958829,7.84278571 C27.8259402,8.02185714 27.904211,8.2445 27.904211,8.48635714 C27.9041415,8.76364286 27.8014024,9.01514286 27.6354768,9.20514286 Z M9.61951463,6.92671429 L10.4414268,7.87978571 L9.58309024,8.83928571 L7.73587317,8.83928571 L7.73587317,8.1885 L9.38518902,8.1885 L9.38518902,7.52114286 L7.73587317,7.52114286 L7.73587317,6.92671429 L9.61951463,6.92671429 L9.61951463,6.92671429 Z M11.4084805,7.891 L12.5620354,6.60142857 L12.5620354,9.22357143 L11.4084805,7.891 Z M14.7491671,7.32757143 C14.7491671,7.61114286 14.5694085,7.7595 14.2807244,7.7595 L13.3100561,7.7595 L13.3100561,6.92671429 L14.2898305,6.92671429 C14.5605805,6.92671429 14.7491671,7.04135714 14.7491671,7.32757143 Z M18.1018098,7.28 C18.1018098,7.41978571 18.0435585,7.53257143 17.9460329,7.59378571 C17.8456573,7.65578571 17.7213,7.66114286 17.5753939,7.66114286 L16.6624207,7.66114286 L16.6624207,6.92671429 L17.58735,6.92671429 C17.7213,6.92671429 17.85525,6.92964286 17.9460329,6.98578571 C18.0438366,7.03842857 18.1018098,7.13971429 18.1018098,7.28 Z"
  }), React.createElement("path", {
    fill: "#FFFFFF",
    d: "M28.2120805,7.96078571 L28.2120805,5.867 L27.6924073,5.867 L27.6924073,5.867 L26.3310805,5.867 C25.9115744,5.867 25.6064159,5.9715 25.3908585,6.13371429 L25.3908585,5.867 L23.3345488,5.867 C23.0057561,5.867 22.6195463,5.95142857 22.4374939,6.13371429 L22.4374939,5.867 L18.7648171,5.867 L18.7648171,6.13371429 C18.4727268,5.91457143 17.9793293,5.867 17.7520244,5.867 L15.3297329,5.867 L15.3297329,6.13371429 C15.0985354,5.90092857 14.5845622,5.867 14.2711317,5.867 L11.5603646,5.867 L10.9400378,6.56535714 L10.3589854,5.867 L6.30955244,5.867 L6.30955244,10.4303571 L10.282522,10.4303571 L10.9218256,9.721 L11.5236622,10.4303571 L13.9729939,10.433 L13.9729939,9.35914286 L14.2135756,9.35914286 C14.5384061,9.3645 14.9215573,9.35085714 15.2596646,9.19878571 L15.2596646,10.4300714 L17.279828,10.4300714 L17.279828,9.24042857 L17.3776317,9.24042857 C17.501989,9.24042857 17.5139451,9.24607143 17.5139451,9.37514286 L17.5139451,10.4300714 L23.6502037,10.4300714 C24.0400976,10.4300714 24.447439,10.3260714 24.6731451,10.1382143 L24.6731451,10.4300714 L26.6192085,10.4300714 C27.0244646,10.4300714 27.4200585,10.371 27.7209768,10.2197143 L27.7209768,10.2149286 C28.160572,9.92357143 28.4528733,9.41314286 28.4528733,8.8305 C28.4534268,8.51078571 28.3645207,8.21278571 28.2120805,7.96078571 Z M14.24715,8.69092857 L13.309778,8.69092857 L13.309778,9.78807143 L11.8498134,9.78807143 L10.9246756,8.70507143 L9.9636,9.78807143 L6.98785244,9.78807143 L6.98785244,6.51721429 L10.0094085,6.51721429 L10.9335037,7.58921429 L11.8890878,6.51721429 L14.2895524,6.51721429 C14.885411,6.51721429 15.555161,6.68907143 15.555161,7.59457143 C15.555161,8.50357143 14.9036232,8.69092857 14.24715,8.69092857 Z M18.7679451,8.54257143 C18.8740902,8.70214286 18.8893829,8.851 18.892511,9.13964286 L18.892511,9.78807143 L18.1387207,9.78807143 L18.1387207,9.37885714 C18.1387207,9.18214286 18.1566549,8.89085714 18.0170049,8.7385 C17.9069671,8.62142857 17.7402768,8.59307143 17.4658427,8.59307143 L16.6629073,8.59307143 L16.6629073,9.788 L15.9083524,9.788 L15.9083524,6.51714286 L17.6426817,6.51714286 C18.0229134,6.51714286 18.299711,6.5345 18.5465488,6.67164286 C18.7837939,6.8205 18.932828,7.02442857 18.932828,7.39778571 C18.932828,7.91978571 18.5980573,8.1865 18.4004341,8.268 C18.5668463,8.33228571 18.7039244,8.44721429 18.7679451,8.54257143 Z M21.8560939,7.194 L20.0968098,7.194 L20.0968098,7.78864286 L21.8132049,7.78864286 L21.8132049,8.456 L20.0968098,8.456 L20.0968098,9.10678571 L21.8560939,9.11 L21.8560939,9.78857143 L19.3489976,9.78857143 L19.3489976,6.51721429 L21.8560939,6.51721429 L21.8560939,7.194 L21.8560939,7.194 Z M23.7690695,9.78835714 L22.3060463,9.78835714 L22.3060463,9.08678571 L23.7636476,9.08678571 C23.9061476,9.08678571 24.0070793,9.06757143 24.0705439,9.00557143 C24.1217744,8.95535714 24.1592415,8.88157143 24.1592415,8.79285714 C24.1592415,8.69742857 24.1192024,8.62157143 24.0674159,8.57607143 C24.0096512,8.52585714 23.9308939,8.50364286 23.8000024,8.50364286 C23.0974427,8.47907143 22.2175573,8.52607143 22.2175573,7.49092857 C22.2175573,7.0165 22.5041561,6.51728571 23.2915207,6.51728571 L24.7977805,6.51728571 L24.7977805,7.2135 L23.4197707,7.2135 C23.2832488,7.2135 23.1942732,7.21885714 23.1185744,7.27228571 C23.0366195,7.3255 23.0056866,7.40378571 23.0056866,7.508 C23.0056866,7.63121429 23.0758939,7.71514286 23.1700829,7.75178571 C23.2496744,7.78014286 23.3344793,7.78842857 23.4624512,7.78842857 L23.8671512,7.80042857 C24.2747012,7.81028571 24.5548354,7.88407143 24.7249317,8.06314286 C24.8713939,8.22028571 24.9493866,8.41914286 24.9493866,8.75564286 C24.949178,9.45957143 24.5270305,9.78835714 23.7690695,9.78835714 Z M27.6354768,9.47242857 C27.4375756,9.68064286 27.1183756,9.78835714 26.7019976,9.78835714 L25.251139,9.78835714 L25.251139,9.08678571 L26.69595,9.08678571 C26.8394927,9.08678571 26.9399378,9.06757143 27.0002744,9.00557143 C27.0525476,8.95535714 27.088972,8.88157143 27.088972,8.79285714 C27.088972,8.69742857 27.0525476,8.62157143 26.9971463,8.57607143 C26.9427878,8.52585714 26.8634744,8.50364286 26.7323744,8.50364286 C26.0269646,8.47907143 25.1470793,8.52607143 25.1470793,7.49092857 C25.1470793,7.0165 25.4363195,6.51728571 26.2249354,6.51728571 L27.6926854,6.51728571 L27.6926854,7.21328571 L26.3524207,7.21328571 C26.2161073,7.21328571 26.1251159,7.21892857 26.0483744,7.27235714 C25.969061,7.32528571 25.9386146,7.40385714 25.9386146,7.50757143 C25.9386146,7.63128571 26.0054854,7.71471429 26.103011,7.75135714 C26.1826024,7.78021429 26.2674073,7.7885 26.3922512,7.7885 L26.7993146,7.8 C27.2102707,7.81042857 27.4847049,7.88392857 27.6513951,8.06328571 C27.6818415,8.08814286 27.7002622,8.11621429 27.7216024,8.144 C27.7130524,8.1325 27.704711,8.12157143 27.6958829,8.11007143 C27.8259402,8.28914286 27.904211,8.51178571 27.904211,8.75364286 C27.9041415,9.03092857 27.8014024,9.28242857 27.6354768,9.47242857 Z M9.61951463,7.194 L10.4414268,8.14707143 L9.58309024,9.10657143 L7.73587317,9.10657143 L7.73587317,8.45578571 L9.38518902,8.45578571 L9.38518902,7.78842857 L7.73587317,7.78842857 L7.73587317,7.194 L9.61951463,7.194 L9.61951463,7.194 Z M11.4084805,8.15828571 L12.5620354,6.86871429 L12.5620354,9.49085714 L11.4084805,8.15828571 Z M14.7491671,7.59485714 C14.7491671,7.87842857 14.5694085,8.02678571 14.2807244,8.02678571 L13.3100561,8.02678571 L13.3100561,7.194 L14.2898305,7.194 C14.5605805,7.194 14.7491671,7.30864286 14.7491671,7.59485714 Z M18.1018098,7.54728571 C18.1018098,7.68707143 18.0435585,7.79985714 17.9460329,7.86107143 C17.8456573,7.92307143 17.7213,7.92842857 17.5753939,7.92842857 L16.6624207,7.92842857 L16.6624207,7.194 L17.58735,7.194 C17.7213,7.194 17.85525,7.19692857 17.9460329,7.25307143 C18.0438366,7.30571429 18.1018098,7.407 18.1018098,7.54728571 Z"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentBankBillet = function IconPaymentBankBillet(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "aph-icon-defs-rect-payment-bank-billet",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "aph-icon-group-payment-bank-billet",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "#FFFFFF"
  }, React.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#F8F8F8",
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  }), React.createElement("path", {
    fill: "#000000",
    mask: "url(#mask-2)",
    d: "M12.7692308,4 L14.3076923,4 L14.3076923,26.5 L12.7692308,26.5 L12.7692308,4 Z M17.2307692,4 L18.7692308,4 L18.7692308,26.5 L17.2307692,26.5 L17.2307692,4 Z M21.6923077,4 L25.5384615,4 L25.5384615,26.5 L21.6923077,26.5 L21.6923077,4 Z M4.46153846,4 L9.84615385,4 L9.84615385,26.5 L4.46153846,26.5 L4.46153846,4 Z M0,4 L1.53846154,4 L1.53846154,26.5 L0,26.5 L0,4 Z M28.4615385,4 L30,4 L30,26.5 L28.4615385,26.5 L28.4615385,4 Z"
  })));
};

/* Packages */
/* Icon Itself */

var IconPaymentDiners = function IconPaymentDiners(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Diners",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#00529E",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Diners",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(5.250000, 7.500000)"
  }, React.createElement("path", {
    id: "Path",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    d: "M11.4131034,14.9672626 C15.6312672,14.9870659 19.4819569,11.631305 19.4819569,7.54826152 C19.4819569,3.08456586 15.6307069,-0.00162978907 11.4131034,5.68434189e-14 L7.78251724,5.68434189e-14 C3.51448276,-0.00162978907 -2.84217094e-14,3.08532673 -2.84217094e-14,7.54826152 C-2.84217094e-14,11.6320659 3.51448276,14.9870659 7.78251724,14.9672626 L11.4131034,14.9672626 L11.4131034,14.9672626 Z"
  }), React.createElement("path", {
    id: "Shape",
    fill: "#00529E",
    fillRule: "nonzero",
    d: "M9.44965517,11.5570652 L9.44965517,3.45076087 C11.129569,4.07543478 12.3220948,5.65358696 12.3250086,7.50369565 C12.3220948,9.35391304 11.1294569,10.9307609 9.44965517,11.5570652 M3.37092241,7.50369565 C3.37428448,5.65434783 4.56524138,4.0775 6.24425862,3.45076087 L6.24425862,11.5557609 C4.56524138,10.9294565 3.37428448,9.35304348 3.37092241,7.50369565 M7.8469569,0.652173913 C3.94673276,0.652934783 0.785267241,3.72 0.784482759,7.50369565 C0.785267241,11.2873913 3.94673276,14.3528261 7.8469569,14.3544565 C11.7488621,14.3528261 14.9111121,11.2873913 14.9111121,7.50369565 C14.9111121,3.72 11.7484138,0.653043478 7.8469569,0.652173913"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentDiscover = function IconPaymentDiscover(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Discover",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Discover",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(2.500000, 11.000000)"
  }, React.createElement("ellipse", {
    id: "Oval",
    fill: "#F26E21",
    fillRule: "evenodd",
    cx: "13.2893333",
    cy: "2.11932203",
    rx: "2.07866667",
    ry: "2.11389831"
  }), React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "5.70733333 7.85986441 5.70733333 5.60237288 7.223 7.21498305 7.223 5.74589831 7.5368 5.74589831 7.5368 7.98840678 6.02113333 6.37959322 6.02113333 7.85952542 5.70733333 7.85952542"
  }), React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "9.18193333 6.04583051 8.34853333 6.04583051 8.34853333 6.55369492 9.15773333 6.55369492 9.15773333 6.85376271 8.34853333 6.85376271 8.34853333 7.56 9.18193333 7.56 9.18193333 7.85986441 8.03493333 7.85986441 8.03493333 5.74623729 9.18193333 5.74623729 9.18193333 6.04583051"
  }), React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "10.1672667 6.04583051 10.1672667 7.85966102 9.85346667 7.85966102 9.85346667 6.04583051 9.3758 6.04583051 9.3758 5.7459661 10.644 5.7459661 10.644 6.04583051"
  }), React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "11.1500667 5.74623729 11.6914 7.15898305 12.2571333 5.64352542 12.7982 7.15898305 13.3729333 5.74623729 13.7136667 5.74623729 12.7847333 7.99410169 12.2501333 6.49640678 11.6928667 7.99566102 10.8095333 5.74630508"
  }), React.createElement("path", {
    d: "M13.7738,6.79362712 C13.7738,6.49579661 13.8813333,6.24033898 14.0956,6.02698305 C14.3091333,5.81335593 14.5660667,5.70657627 14.8659333,5.70657627 C15.162,5.70657627 15.416,5.81416949 15.6277333,6.02949153 C15.8405333,6.24515254 15.9465333,6.50359322 15.9465333,6.8060339 C15.9465333,7.10969492 15.8398,7.36766102 15.6264667,7.57952542 C15.4119333,7.79213559 15.153,7.89864407 14.8496667,7.89864407 C14.5815333,7.89864407 14.3402667,7.804 14.1267333,7.61525424 C13.8915333,7.4060339 13.7738,7.1320678 13.7738,6.79362712 Z M14.0903333,6.79694915 C14.0903333,7.03030508 14.1676667,7.22210169 14.3218,7.37281356 C14.4752,7.52352542 14.6526,7.59857627 14.8538667,7.59857627 C15.0716667,7.59857627 15.2557333,7.5219661 15.4056667,7.36901695 C15.5556,7.2140339 15.6304,7.02528814 15.6304,6.80277966 C15.6304,6.57728814 15.5563333,6.38854237 15.4081333,6.23654237 C15.2609333,6.08332203 15.0788667,6.00671186 14.8616,6.00671186 C14.6453333,6.00671186 14.4627333,6.08332203 14.3140667,6.23654237 C14.1649333,6.38725424 14.0903333,6.57444068 14.0903333,6.79694915 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: "M17.0451333,6.95905085 L17.6887333,7.85986441 L17.3050667,7.85986441 L16.7114,6.99484746 L16.6548,6.99484746 L16.6548,7.85986441 L16.341,7.85986441 L16.341,5.74623729 L16.7084667,5.74623729 C16.9833333,5.74623729 17.1814,5.79877966 17.3036667,5.90379661 C17.4384,6.02047458 17.5057333,6.17471186 17.5057333,6.36650847 C17.5057333,6.51620339 17.4636,6.64481356 17.379,6.75233898 C17.2945333,6.85986441 17.1835333,6.92908475 17.0451333,6.95905085 Z M16.6549333,6.71674576 L16.7542,6.71674576 C17.0512667,6.71674576 17.2,6.60128814 17.2,6.37044068 C17.2,6.1540339 17.0555333,6.0459661 16.7664667,6.0459661 L16.6549333,6.0459661 L16.6549333,6.71674576 L16.6549333,6.71674576 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "18.3148 6.58942373 19.1238 5.74616949 19.5426 5.74616949 18.6029333 6.70332203 19.5481333 7.85986441 19.1280667 7.85986441 18.3794667 6.91945763 18.3148667 6.98542373 18.3148667 7.85986441 18.0010667 7.85986441 18.0010667 5.74623729 18.3148667 5.74623729 18.3148667 6.58942373"
  }), React.createElement("g", {
    id: "Group",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M2.0938,3.13152542 C1.84886667,3.35450847 1.5328,3.45118644 1.03086667,3.45118644 L0.8226,3.45118644 L0.8226,0.797220339 L1.03086667,0.797220339 C1.53273333,0.797220339 1.83633333,0.887525424 2.0938,1.12189831 C2.3622,1.36264407 2.52233333,1.73532203 2.52233333,2.12040678 C2.52233333,2.50569492 2.3622,2.89152542 2.0938,3.13152542 L2.0938,3.13152542 Z M1.18653333,0.117559322 L0.0460666667,0.117559322 L0.0460666667,4.13023729 L1.1808,4.13023729 C1.783,4.13023729 2.21826667,3.98664407 2.6002,3.66705085 C3.0532,3.2880678 3.32213333,2.71654237 3.32213333,2.12569492 C3.32206667,0.941016949 2.44453333,0.117559322 1.18653333,0.117559322 L1.18653333,0.117559322 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }), React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "3.68 4.13023729 4.45533333 4.13023729 4.45533333 0.117559322 3.68 0.117559322 3.68 4.13023729"
  }), React.createElement("path", {
    d: "M6.3534,1.65688136 C5.8874,1.48257627 5.7502,1.3679322 5.7502,1.15233898 C5.7502,0.899389831 5.9944,0.706847458 6.32893333,0.706847458 C6.56166667,0.706847458 6.75226667,0.802983051 6.95606667,1.03105085 L7.36093333,0.496271186 C7.0272,0.201016949 6.62753333,0.050779661 6.19153333,0.050779661 C5.48806667,0.050779661 4.95073333,0.54420339 4.95073333,1.19918644 C4.95073333,1.75349153 5.20093333,2.0360678 5.92933333,2.30142373 C6.23366667,2.40922034 6.38833333,2.48101695 6.46613333,2.5299661 C6.62106667,2.63247458 6.69913333,2.77627119 6.69913333,2.94474576 C6.69913333,3.27023729 6.44246667,3.51044068 6.09593333,3.51044068 C5.726,3.51044068 5.42793333,3.32427119 5.2488,2.97518644 L4.7484,3.46298305 C5.1056,3.99166102 5.5352,4.22732203 6.12633333,4.22732203 C6.93153333,4.22732203 7.49806698,3.68494915 7.49806698,2.90922034 C7.4984,2.27105085 7.23646667,1.98210169 6.3534,1.65688136",
    id: "Path",
    fill: "#0B161F"
  }), React.createElement("path", {
    d: "M7.74286667,2.12569492 C7.74286667,3.30630508 8.66186667,4.22081356 9.84326667,4.22081356 C10.1775333,4.22081356 10.4634,4.15410169 10.8158667,3.98664407 L10.8158667,3.06508475 C10.5053333,3.37837288 10.2306667,3.50447458 9.87866667,3.50447458 C9.09713333,3.50447458 8.54213333,2.93267797 8.54213333,2.12013559 C8.54213333,1.35023729 9.11486667,0.742169492 9.84326667,0.742169492 C10.2124667,0.742169492 10.4933333,0.874305085 10.8158667,1.19349153 L10.8158667,0.272610169 C10.4761333,0.0985762712 10.195,0.026779661 9.86073333,0.026779661 C8.68573333,0.0270508475 7.74286667,0.95979661 7.74286667,2.12569492",
    id: "Path",
    fill: "#0B161F"
  }), React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "17.1037333 2.81294915 16.0415333 0.117559322 15.1944 0.117559322 16.8834667 4.23301695 17.3005333 4.23301695 19.0192667 0.117559322 18.1778667 0.117559322 17.1037333 2.81294915"
  }), React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "19.3717333 4.13023729 21.5728667 4.13023729 21.5728667 3.45118644 20.1472667 3.45118644 20.1472667 2.36698305 21.5182667 2.36698305 21.5182667 1.68786441 20.1472667 1.68786441 20.1472667 0.797152542 21.5728667 0.797152542 21.5728667 0.117559322 19.3717333 0.117559322 19.3717333 4.13023729"
  }), React.createElement("path", {
    d: "M23.0875333,1.96461017 L22.8615333,1.96461017 L22.8615333,0.748474576 L23.0997333,0.748474576 C23.5839333,0.748474576 23.8466,0.953966102 23.8466,1.34433898 C23.8466,1.74718644 23.5839333,1.96461017 23.0875333,1.96461017 L23.0875333,1.96461017 Z M24.6446,1.30176271 C24.6446,0.550101695 24.132,0.117559322 23.2364667,0.117559322 L22.0852667,0.117559322 L22.0852667,4.13023729 L22.8613333,4.13023729 L22.8613333,2.51762712 L22.9631333,2.51762712 L24.0362667,4.13023729 L24.9909333,4.13023729 L23.7374667,2.43972881 C24.3230667,2.31952542 24.6446,1.9159322 24.6446,1.30176271 L24.6446,1.30176271 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }))))));
};

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

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Elo",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#000000",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Elo",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(6.750000, 7.000000)"
  }, React.createElement("path", {
    d: "M6.77271739,3.64757702 C7.26080435,3.48604504 7.78258696,3.39912924 8.32571739,3.39912924 C10.6947174,3.39912924 12.6724783,5.06631854 13.1255,7.28253133 L16.483587,6.60387728 C15.7129783,2.8377846 12.353913,0.00348955614 8.32571739,0.00348955614 C7.40271739,0.00348955614 6.51604348,0.152484987 5.68632609,0.427082898 L6.77271739,3.64757702",
    id: "Fill-1",
    fill: "#F9C623"
  }), React.createElement("path", {
    d: "M2.80971739,14.4310809 L5.08056522,11.8870868 C4.06682609,10.9971854 3.42736957,9.69853198 3.42736957,8.25174478 C3.42736957,6.80601305 4.06606522,5.50800587 5.07917391,4.61911684 L2.80778261,2.07495039 C1.08636957,3.58616514 0,5.79365405 0,8.25174478 C0,10.7115157 1.08680435,12.9196723 2.80971739,14.4310809",
    id: "Fill-3",
    fill: "#009ACB"
  }), React.createElement("path", {
    d: "M13.1245217,9.22563251 C12.6696739,11.4405529 10.6938696,13.1045757 8.32571739,13.1045757 C7.78215217,13.1045757 7.259,13.0178753 6.77121739,12.8552879 L5.68343478,16.0770313 C6.51315217,16.3514354 7.40163043,16.5 8.32571739,16.5 C12.3500652,16.5 15.7084783,13.6704008 16.4821957,9.90771149 L13.1245217,9.22563251",
    id: "Fill-4",
    fill: "#DC3E2A"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentFreepass = function IconPaymentFreepass(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Cortesia",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#F882B8",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "gift-box",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, React.createElement("g", {
    transform: "translate(8.000000, 8.000000)",
    id: "Shape"
  }, React.createElement("path", {
    d: "M12.4166667,0.5 L9.70833333,0.5 C9.00228881,0.5 8.40177409,0.953063948 8.17815144,1.58333333 L5.82184856,1.58333333 C5.59822591,0.953063948 4.99771119,0.5 4.29166667,0.5 L1.58333333,0.5 L1.58333333,3.75 L0.5,3.75 L0.5,7.27083333 L1.58333333,7.27083333 L1.58333333,13.5 L12.4166667,13.5 L12.4166667,7.27083333 L13.5,7.27083333 L13.5,3.75 L12.4166667,3.75 L12.4166667,0.5 Z M4.83333333,12.4166667 L2.66666667,12.4166667 L2.66666667,7.27083333 L4.83333333,7.27083333 L4.83333333,12.4166667 Z M4.83333333,6.1875 L1.58333333,6.1875 L1.58333333,4.83333333 L4.83333333,4.83333333 L4.83333333,6.1875 Z M4.83333333,2.66666667 L4.83333333,3.75 L2.66666667,3.75 L2.66666667,1.58333333 L4.29166667,1.58333333 C4.59040325,1.58333333 4.83333333,1.82626342 4.83333333,2.125 L4.83333333,2.66666667 Z M8.08333333,7.27083333 L8.08333333,12.4166667 L5.91666667,12.4166667 L5.91666667,4.83333333 L8.08333333,4.83333333 L8.08333333,7.27083333 Z M8.08333333,3.75 L5.91666667,3.75 L5.91666667,2.66666667 L8.08333333,2.66666667 L8.08333333,3.75 Z M9.16666667,2.66666667 L9.16666667,2.125 C9.16666667,1.82626342 9.40959675,1.58333333 9.70833333,1.58333333 L11.3333333,1.58333333 L11.3333333,3.75 L9.16666667,3.75 L9.16666667,2.66666667 Z M11.3333333,12.4166667 L9.16666667,12.4166667 L9.16666667,7.27083333 L11.3333333,7.27083333 L11.3333333,12.4166667 Z M12.4166667,6.1875 L9.16666667,6.1875 L9.16666667,4.83333333 L12.4166667,4.83333333 L12.4166667,6.1875 Z"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentMastercard = function IconPaymentMastercard(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Master",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#2D2D2D",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Master",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(3.500000, 8.500000)"
  }, React.createElement("ellipse", {
    id: "Oval",
    fill: "#EE0005",
    cx: "6.93714953",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), React.createElement("ellipse", {
    id: "Oval",
    fill: "#F9A000",
    cx: "15.5560164",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), React.createElement("path", {
    d: "M8.61897196,6.74785227 C8.61897196,8.89046591 9.64577103,10.799642 11.2466355,12.0357102 C12.8474474,10.7995909 13.8742991,8.89046591 13.8742991,6.74785227 C13.8742991,4.60523864 12.8475,2.6960625 11.2466355,1.45999432 C9.6458236,2.69616477 8.61897196,4.60528977 8.61897196,6.74785227 Z",
    id: "Path",
    fill: "#FF6300"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentMoney = function IconPaymentMoney(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Dinheiro",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#59B47D",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Dinheiro",
    mask: "url(#mask-2)",
    fill: "#FFFFFF"
  }, React.createElement("g", {
    transform: "translate(7.500000, 7.500000)"
  }, React.createElement("path", {
    d: "M7.5,0 C3.36441039,0 0,3.36441039 0,7.5 C0,11.6352844 3.36441039,15 7.5,15 C11.6352844,15 15,11.6352844 15,7.5 C15,3.36441039 11.6352844,0 7.5,0 Z M7.5,13.75 C4.0538025,13.75 1.25,10.9461975 1.25,7.5 C1.25,4.0538025 4.0538025,1.25 7.5,1.25 C10.9461975,1.25 13.75,4.0538025 13.75,7.5 C13.75,10.9461975 10.9461975,13.75 7.5,13.75 Z",
    id: "Shape",
    fillRule: "nonzero"
  }), React.createElement("polygon", {
    id: "Path",
    fillRule: "evenodd",
    points: "8.125 2.8125 6.875 2.8125 6.875 4.375 5 4.375 5 8.125 8.75 8.125 8.75 9.375 5 9.375 5 10.625 6.875 10.625 6.875 12.1875 8.125 12.1875 8.125 10.625 10 10.625 10 6.875 6.25 6.875 6.25 5.625 10 5.625 10 4.375 8.125 4.375"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentOthers = function IconPaymentOthers(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Outros",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#6798E5",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Outros",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, React.createElement("g", {
    transform: "translate(8.500000, 8.500000)",
    id: "Shape"
  }, React.createElement("path", {
    d: "M7.0414022,0 L5.95806886,0 C2.62687174,0.277241768 0,3.08227604 0,6.49257507 C0,9.90287409 2.62687174,12.7077758 5.95806886,12.9850176 L7.0414022,12.9850176 C10.3728638,12.708041 13,9.90313929 13,6.49257507 C13,3.08201084 10.3728638,0.276976574 7.0414022,0 Z M7.0414022,3.27943458 C8.57647707,3.53877691 9.74973553,4.8807013 9.74973553,6.49257507 C9.74973553,8.10444883 8.57647707,9.44637322 7.0414022,9.70571555 L7.0414022,8.59316866 C7.9743754,8.35093016 8.6664022,7.50236619 8.6664022,6.49230991 C8.6664022,5.48212101 7.9743754,4.63355704 7.0414022,4.39131854 L7.0414022,3.27943458 Z M6.49973553,7.57873695 L5.95806886,7.57873695 L5.95806886,11.8959387 C3.22487384,11.6221443 1.08333333,9.30357579 1.08333333,6.49257507 C1.08333333,3.68157434 3.22487384,1.3628733 5.95806886,1.08921142 L5.95806886,5.40641319 L6.49973553,5.40641319 C7.09720866,5.40641319 7.58306886,5.89354192 7.58306886,6.49257507 C7.58306886,7.09160821 7.09720866,7.57873695 6.49973553,7.57873695 Z M7.0414022,11.8959387 L7.0414022,10.799435 C9.17553711,10.530944 10.8330689,8.70401233 10.8330689,6.49257507 C10.8330689,4.2811378 9.17553711,2.45420612 7.0414022,2.18558257 L7.0414022,1.08921142 C9.77486165,1.3626081 11.9166667,3.68130915 11.9166667,6.49257507 C11.9166667,9.30384098 9.77486165,11.6224094 7.0414022,11.8959387 Z"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentPaypal = function IconPaymentPaypal(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-PayPal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#FFC61E",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Logo-PayPal",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(9.000000, 7.000000)",
    id: "Path"
  }, React.createElement("path", {
    d: "M3.65643871,15.3022635 L3.91962581,13.5586222 L3.33336774,13.5444505 L0.533922581,13.5444505 L2.47939355,0.678141061 C2.49136448,0.596887959 2.55859173,0.537040578 2.63740645,0.53747169 L7.35766452,0.53747169 C8.92470968,0.53747169 10.0061419,0.877594314 10.5707613,1.54891197 C10.8354581,1.86383816 11.0040387,2.19293603 11.0855613,2.55510115 C11.1711097,2.93511208 11.1726194,3.38913067 11.0890839,3.94287589 L11.0830452,3.98329142 L11.0830452,4.33810826 L11.3477419,4.4945216 C11.5498158,4.6013026 11.7314519,4.74574783 11.8836774,4.92072171 C12.110129,5.1899836 12.2565677,5.53220339 12.3184645,5.9379333 C12.3823742,6.3552105 12.3612387,6.85174412 12.2565677,7.41388737 C12.1357935,8.06053581 11.9405419,8.62372881 11.6768516,9.0845708 C11.4441941,9.4974109 11.1313769,9.85497375 10.7584645,10.1343248 C10.4082194,10.393614 9.99205161,10.5904429 9.52153548,10.7164133 C9.0656129,10.8402843 8.54578065,10.9027447 7.97562581,10.9027447 L7.60827097,10.9027447 C7.3455871,10.9027447 7.09045161,11.0014215 6.89016774,11.1783051 C6.69016783,11.357076 6.55749247,11.6040835 6.51576774,11.8753417 L6.48809032,12.0322799 L6.02310968,15.1054347 L6.00197419,15.2182832 C5.99643871,15.2539748 5.98687742,15.2718207 5.9727871,15.2838928 C5.95913757,15.2955358 5.94210854,15.3020114 5.92447742,15.3022635 L3.65643871,15.3022635 Z",
    fill: "#253B80"
  }), React.createElement("path", {
    d: "M11.5983484,4.02423182 C11.5842581,4.1181848 11.5681548,4.21423729 11.5500387,4.31291416 C10.9275484,7.64640787 8.79789677,8.79798797 6.07796129,8.79798797 L4.69308387,8.79798797 C4.36045161,8.79798797 4.08015484,9.04992892 4.02832258,9.39214872 L3.31927742,14.0824494 L3.11849032,15.4119628 C3.10230332,15.5186896 3.13171569,15.6274589 3.19898398,15.7096348 C3.26625226,15.7918108 3.36463555,15.8392127 3.46823226,15.8392127 L5.92447742,15.8392127 C6.21534194,15.8392127 6.46242581,15.6187644 6.50821935,15.3195845 L6.53237419,15.189415 L6.99483871,12.1283324 L7.02452903,11.9603718 C7.06981935,11.6601422 7.31740645,11.4396938 7.60827097,11.4396938 L7.97562581,11.4396938 C10.3553806,11.4396938 12.2183226,10.43193 12.7628129,7.5157135 C12.990271,6.29747403 12.8725161,5.28026244 12.2706581,4.56485511 C12.0799004,4.34354759 11.8520761,4.16034761 11.5983484,4.02423182 L11.5983484,4.02423182 Z",
    fill: "#179BD7"
  }), React.createElement("path", {
    d: "M10.9471742,3.7533953 C10.7484133,3.69342348 10.5462166,3.6466161 10.3417935,3.61325314 C9.93786423,3.5485053 9.52962978,3.5174392 9.12096774,3.52034992 L5.42125161,3.52034992 C5.13032561,3.52016288 4.8826943,3.74118491 4.8380129,4.04102788 L4.05096774,9.24045927 L4.02832258,9.39214872 C4.07898592,9.05013605 4.36128845,8.79781528 4.69308387,8.79798797 L6.07796129,8.79798797 C8.79789677,8.79798797 10.9275484,7.645883 11.5500387,4.31291416 C11.5686581,4.21423729 11.5842581,4.1181848 11.5983484,4.02423182 C11.4340881,3.93438788 11.2628949,3.85906666 11.0865677,3.7990596 C11.0403405,3.78306126 10.99387,3.76783787 10.9471742,3.7533953 L10.9471742,3.7533953 Z",
    fill: "#222D65"
  }), React.createElement("path", {
    d: "M4.8380129,4.04102788 C4.88232115,3.74104677 5.13025311,3.51993221 5.42125161,3.52087479 L9.12096774,3.52087479 C9.55927742,3.52087479 9.9684,3.55079278 10.3417935,3.61377802 C10.594467,3.65519724 10.8436512,3.71714631 11.087071,3.7990596 C11.2707484,3.86256971 11.4413419,3.93762712 11.5988516,4.02423182 C11.7840387,2.79234554 11.5973419,1.95359213 10.9587484,1.19409513 C10.2547355,0.357966102 8.98409032,-1.33226763e-14 7.35816774,-1.33226763e-14 L2.63790968,-1.33226763e-14 C2.30578065,-1.33226763e-14 2.02246452,0.251940951 1.97113548,0.594685621 L0.00503225806,13.5932641 C-0.0135007605,13.7153962 0.020123745,13.8398721 0.0970608222,13.9339481 C0.173997899,14.0280242 0.286545093,14.0822822 0.405096774,14.0824494 L3.31927742,14.0824494 L4.05096774,9.24045927 L4.8380129,4.04102788 Z",
    fill: "#253B80"
  })))));
};

/* Packages */
/* Icon Itself */

var IconPaymentVisa = function IconPaymentVisa(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React.createElement("g", {
    id: "Pagamento-/-Visa",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#path-1"
  })), React.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), React.createElement("g", {
    id: "Visa",
    mask: "url(#mask-2)"
  }, React.createElement("g", {
    transform: "translate(3.000000, 11.500000)"
  }, React.createElement("polygon", {
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd",
    points: "8.07027008 7.32904018 9.20044321 0.15890625 11.0301731 0.15890625 9.90006233 7.32904018"
  }), React.createElement("path", {
    d: "M16.4139058,0.344263393 C16.0512881,0.198950893 15.4831787,0.0433258929 14.7737119,0.0433258929 C12.9653601,0.0433258929 11.6915859,1.01604911 11.6806163,2.40964286 C11.6705817,3.4396875 12.589903,4.01424107 13.2844114,4.3575 C13.9966205,4.70825893 14.2361427,4.93332589 14.2326524,5.24678571 C14.2282271,5.72738839 13.663608,5.94709821 13.1375069,5.94709821 C12.4052285,5.94683036 12.0159972,5.83834821 11.4149792,5.57075893 L11.1791967,5.45651786 L10.922223,7.06165179 C11.349723,7.261875 12.140277,7.43551339 12.9609349,7.44428571 C14.8842175,7.44381696 16.1333102,6.48314732 16.1473338,4.99453125 C16.1543144,4.17897321 15.666669,3.55828125 14.6109141,3.04640625 C13.9711911,2.71513393 13.5794044,2.49388393 13.5836427,2.15765625 C13.5836427,1.85973214 13.9154709,1.54104911 14.631669,1.54104911 C15.2300693,1.53100446 15.663615,1.67035714 16.0015512,1.81566964 L16.1652839,1.89837054 L16.4139058,0.344263393 L16.4139058,0.344263393 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), React.createElement("path", {
    d: "M19.5335526,0.15890625 C19.0951454,0.15890625 18.7784003,0.302745536 18.5857479,0.769553571 L15.8739681,7.32930804 L17.8112742,7.32930804 L18.1879155,6.23055804 L20.5025485,6.23055804 L20.7175762,7.32930804 L22.4398546,7.32930804 L20.9331025,0.159107143 L19.533615,0.159107143 L19.5335526,0.15890625 L19.5335526,0.15890625 Z M18.7019252,4.79584821 C18.8530679,4.38294643 19.4307133,2.79180804 19.4307133,2.79180804 C19.4202424,2.810625 19.581108,2.37689732 19.6734765,2.10776786 L19.7973199,2.72564732 C19.7973199,2.72564732 20.1473476,4.43725446 20.220831,4.79604911 L18.7019252,4.79604911 L18.7019252,4.79584821 Z",
    id: "Shape",
    fill: "#293688",
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: "M4.73347645,5.07395089 L4.57229917,4.09098214 C4.2383518,2.94515625 3.20191828,1.70537946 2.04051939,1.08421875 L3.65715374,7.32904018 L5.59489612,7.32904018 L8.50094875,0.15890625 L6.56364266,0.15890625 L4.73347645,5.07395089 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), React.createElement("path", {
    d: "M0.0512950139,0.15890625 L0.0512950139,0.2746875 C2.34729224,0.867991071 3.94130194,2.36792411 4.5723615,4.09104911 L3.90889197,0.770825893 C3.79813712,0.317075893 3.46250693,0.174709821 3.06536011,0.158973214 L0.0512950139,0.15890625 L0.0512950139,0.15890625 Z",
    id: "Path",
    fill: "#F7981D",
    fillRule: "evenodd"
  })))));
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Mapper */

/* Should be mapped into 'icons.constants' too */

var ICONS$1 = {
  'arrow-up': IconArrowUp,
  'arrow-right': IconArrowRight,
  'arrow-down': IconArrowDown,
  'arrow-left': IconArrowLeft,
  'bluetooth': IconBluetooth,
  'camera': IconCamera,
  'card': IconCard,
  'cards': IconCards,
  'check': IconCheckThin,
  'check-thin': IconCheckThin,
  'external-ticket': IconExternalTicket,
  'eye': IconEye,
  'flash': IconFlash,
  'flash-off': IconFlashOff,
  'info': IconInfo,
  'items': IconItems,
  'list': IconList,
  'loader': IconLoaderDonut,
  'loading': IconLoading,
  'lock': IconLock,
  'minus': IconMinus,
  'options': IconOptions,
  'pencil': IconPencil,
  'plus': IconPlus,
  'search': IconSearch,
  'settings': IconSettings,
  'qrcode': IconQRCode,
  'scan': IconScan,
  'ticketbooth': IconTicketbooth,
  'times': IconTimes,
  'transfer': IconTransfer,
  'unlock': IconUnlock,
  'refresh': IconRefresh,
  'delete': IconDelete,
  'amex': IconPaymentAmex,
  'payment-amex': IconPaymentAmex,
  'bankbillet': IconPaymentBankBillet,
  'bank-billet': IconPaymentBankBillet,
  'payment-bankbillet': IconPaymentBankBillet,
  'payment-bank-billet': IconPaymentBankBillet,
  'boleto': IconPaymentBankBillet,
  'payment-boleto': IconPaymentBankBillet,
  'diners': IconPaymentDiners,
  'payment-diners': IconPaymentDiners,
  'discover': IconPaymentDiscover,
  'payment-discover': IconPaymentDiscover,
  'elo': IconPaymentElo,
  'payment-elo': IconPaymentElo,
  'freepass': IconPaymentFreepass,
  'payment-freepass': IconPaymentFreepass,
  'master': IconPaymentMastercard,
  'mastercard': IconPaymentMastercard,
  'payment-master': IconPaymentMastercard,
  'payment-mastercard': IconPaymentMastercard,
  'money': IconPaymentMoney,
  'cash': IconPaymentMoney,
  'payment-money': IconPaymentMoney,
  'payment-cash': IconPaymentMoney,
  'others': IconPaymentOthers,
  'payment-others': IconPaymentOthers,
  'paypal': IconPaymentPaypal,
  'payment-paypal': IconPaymentPaypal,
  'visa': IconPaymentVisa,
  'payment-visa': IconPaymentVisa
};
/* Component Wrapper styles */

var IconWrapper =
/*#__PURE__*/
_styled('span', {
  target: "e34a6r20"
})(function (props) {
  return _objectSpread$4({
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIb0IiLCJmaWxlIjoiSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgLyBJY29ucyAqL1xuaW1wb3J0IEFycm93VXAgZnJvbSAnLi9JY29uQXJyb3dVcCc7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICcuL0ljb25BcnJvd1JpZ2h0JztcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnLi9JY29uQXJyb3dMZWZ0JztcbmltcG9ydCBCbHVldG9vdGggZnJvbSAnLi9JY29uQmx1ZXRvb3RoJztcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9JY29uQ2FtZXJhJztcbmltcG9ydCBDYXJkIGZyb20gJy4vSWNvbkNhcmQnO1xuaW1wb3J0IENhcmRzIGZyb20gJy4vSWNvbkNhcmRzJztcbmltcG9ydCBDaGVja1RoaW4gZnJvbSAnLi9JY29uQ2hlY2tUaGluJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9JY29uRGVsZXRlJztcbmltcG9ydCBFeHRlcm5hbFRpY2tldCBmcm9tICcuL0ljb25FeHRlcm5hbFRpY2tldCc7XG5pbXBvcnQgRXllIGZyb20gJy4vSWNvbkV5ZSc7XG5pbXBvcnQgRmxhc2ggZnJvbSAnLi9JY29uRmxhc2gnO1xuaW1wb3J0IEZsYXNoT2ZmIGZyb20gJy4vSWNvbkZsYXNoT2ZmJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSWNvbkluZm8nO1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4vSWNvbkl0ZW1zJztcbmltcG9ydCBMaXN0IGZyb20gJy4vSWNvbkxpc3QnO1xuaW1wb3J0IExvYWRlckRvbnV0IGZyb20gJy4vSWNvbkxvYWRlckRvbnV0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IExvY2sgZnJvbSAnLi9JY29uTG9jayc7XG5pbXBvcnQgTWludXMgZnJvbSAnLi9JY29uTWludXMnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9JY29uT3B0aW9ucyc7XG5pbXBvcnQgUGVuY2lsIGZyb20gJy4vSWNvblBlbmNpbCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuL0ljb25QbHVzJztcbmltcG9ydCBRUkNvZGUgZnJvbSAnLi9JY29uUVJDb2RlJztcbmltcG9ydCBSZWZyZXNoIGZyb20gJy4vSWNvblJlZnJlc2gnO1xuaW1wb3J0IFNjYW4gZnJvbSAnLi9JY29uU2Nhbic7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vSWNvblNlYXJjaCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9JY29uU2V0dGluZ3MnO1xuaW1wb3J0IFRpY2tldGJvb3RoIGZyb20gJy4vSWNvblRpY2tldGJvb3RoJztcbmltcG9ydCBUaW1lcyBmcm9tICcuL0ljb25UaW1lcyc7XG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi9JY29uVHJhbnNmZXInO1xuaW1wb3J0IFVubG9jayBmcm9tICcuL0ljb25VbmxvY2snO1xuXG5pbXBvcnQgUGF5bWVudEFtZXggZnJvbSAnLi9JY29uUGF5bWVudEFtZXgnO1xuaW1wb3J0IFBheW1lbnRCYW5rQmlsbGV0IGZyb20gJy4vSWNvblBheW1lbnRCYW5rQmlsbGV0JztcbmltcG9ydCBQYXltZW50RGluZXJzIGZyb20gJy4vSWNvblBheW1lbnREaW5lcnMnO1xuaW1wb3J0IFBheW1lbnREaXNjb3ZlciBmcm9tICcuL0ljb25QYXltZW50RGlzY292ZXInO1xuaW1wb3J0IFBheW1lbnRFbG8gZnJvbSAnLi9JY29uUGF5bWVudEVsbyc7XG5pbXBvcnQgUGF5bWVudEZyZWVwYXNzIGZyb20gJy4vSWNvblBheW1lbnRGcmVlcGFzcyc7XG5pbXBvcnQgUGF5bWVudE1hc3RlcmNhcmQgZnJvbSAnLi9JY29uUGF5bWVudE1hc3RlcmNhcmQnO1xuaW1wb3J0IFBheW1lbnRNb25leSBmcm9tICcuL0ljb25QYXltZW50TW9uZXknO1xuaW1wb3J0IFBheW1lbnRPdGhlcnMgZnJvbSAnLi9JY29uUGF5bWVudE90aGVycyc7XG5pbXBvcnQgUGF5bWVudFBheXBhbCBmcm9tICcuL0ljb25QYXltZW50UGF5cGFsJztcbmltcG9ydCBQYXltZW50VmlzYSBmcm9tICcuL0ljb25QYXltZW50VmlzYSc7XG5cbi8qIE1hcHBlciAqL1xuLyogU2hvdWxkIGJlIG1hcHBlZCBpbnRvICdpY29ucy5jb25zdGFudHMnIHRvbyAqL1xuY29uc3QgSUNPTlMgPSB7XG4gICAgJ2Fycm93LXVwJyAgICAgICAgICA6IEFycm93VXAsXG4gICAgJ2Fycm93LXJpZ2h0JyAgICAgICA6IEFycm93UmlnaHQsXG4gICAgJ2Fycm93LWRvd24nICAgICAgICA6IEFycm93RG93bixcbiAgICAnYXJyb3ctbGVmdCcgICAgICAgIDogQXJyb3dMZWZ0LFxuICAgICdibHVldG9vdGgnICAgICAgICAgOiBCbHVldG9vdGgsXG4gICAgJ2NhbWVyYScgICAgICAgICAgICA6IENhbWVyYSxcbiAgICAnY2FyZCcgICAgICAgICAgICAgIDogQ2FyZCxcbiAgICAnY2FyZHMnICAgICAgICAgICAgIDogQ2FyZHMsXG4gICAgJ2NoZWNrJyAgICAgICAgICAgICA6IENoZWNrVGhpbixcbiAgICAnY2hlY2stdGhpbicgICAgICAgIDogQ2hlY2tUaGluLFxuICAgICdleHRlcm5hbC10aWNrZXQnICAgOiBFeHRlcm5hbFRpY2tldCxcbiAgICAnZXllJyAgICAgICAgICAgICAgIDogRXllLFxuICAgICdmbGFzaCcgICAgICAgICAgICAgOiBGbGFzaCxcbiAgICAnZmxhc2gtb2ZmJyAgICAgICAgIDogRmxhc2hPZmYsXG4gICAgJ2luZm8nICAgICAgICAgICAgICA6IEluZm8sXG4gICAgJ2l0ZW1zJyAgICAgICAgICAgICA6IEl0ZW1zLFxuICAgICdsaXN0JyAgICAgICAgICAgICAgOiBMaXN0LFxuICAgICdsb2FkZXInICAgICAgICAgICAgOiBMb2FkZXJEb251dCxcbiAgICAnbG9hZGluZycgICAgICAgICAgIDogTG9hZGluZyxcbiAgICAnbG9jaycgICAgICAgICAgICAgIDogTG9jayxcbiAgICAnbWludXMnICAgICAgICAgICAgIDogTWludXMsXG4gICAgJ29wdGlvbnMnICAgICAgICAgICA6IE9wdGlvbnMsXG4gICAgJ3BlbmNpbCcgICAgICAgICAgICA6IFBlbmNpbCxcbiAgICAncGx1cycgICAgICAgICAgICAgIDogUGx1cyxcbiAgICAnc2VhcmNoJyAgICAgICAgICAgIDogU2VhcmNoLFxuICAgICdzZXR0aW5ncycgICAgICAgICAgOiBTZXR0aW5ncyxcbiAgICAncXJjb2RlJyAgICAgICAgICAgIDogUVJDb2RlLFxuICAgICdzY2FuJyAgICAgICAgICAgICAgOiBTY2FuLFxuICAgICd0aWNrZXRib290aCcgICAgICAgOiBUaWNrZXRib290aCxcbiAgICAndGltZXMnICAgICAgICAgICAgIDogVGltZXMsXG4gICAgJ3RyYW5zZmVyJyAgICAgICAgICA6IFRyYW5zZmVyLFxuICAgICd1bmxvY2snICAgICAgICAgICAgOiBVbmxvY2ssXG4gICAgJ3JlZnJlc2gnICAgICAgICAgICA6IFJlZnJlc2gsXG4gICAgJ2RlbGV0ZScgICAgICAgICAgICA6IERlbGV0ZSxcblxuICAgICdhbWV4JyAgICAgICAgICAgICAgIDogUGF5bWVudEFtZXgsXG4gICAgJ3BheW1lbnQtYW1leCcgICAgICAgOiBQYXltZW50QW1leCxcbiAgICAnYmFua2JpbGxldCcgICAgICAgICA6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdiYW5rLWJpbGxldCcgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYmFua2JpbGxldCcgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAncGF5bWVudC1iYW5rLWJpbGxldCc6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdib2xldG8nICAgICAgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYm9sZXRvJyAgICAgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAnZGluZXJzJyAgICAgICAgICAgICA6IFBheW1lbnREaW5lcnMsXG4gICAgJ3BheW1lbnQtZGluZXJzJyAgICAgOiBQYXltZW50RGluZXJzLFxuICAgICdkaXNjb3ZlcicgICAgICAgICAgIDogUGF5bWVudERpc2NvdmVyLFxuICAgICdwYXltZW50LWRpc2NvdmVyJyAgIDogUGF5bWVudERpc2NvdmVyLFxuICAgICdlbG8nICAgICAgICAgICAgICAgIDogUGF5bWVudEVsbyxcbiAgICAncGF5bWVudC1lbG8nICAgICAgICA6IFBheW1lbnRFbG8sXG4gICAgJ2ZyZWVwYXNzJyAgICAgICAgICAgOiBQYXltZW50RnJlZXBhc3MsXG4gICAgJ3BheW1lbnQtZnJlZXBhc3MnICAgOiBQYXltZW50RnJlZXBhc3MsXG4gICAgJ21hc3RlcicgICAgICAgICAgICAgOiBQYXltZW50TWFzdGVyY2FyZCxcbiAgICAnbWFzdGVyY2FyZCcgICAgICAgICA6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgICdwYXltZW50LW1hc3RlcicgICAgIDogUGF5bWVudE1hc3RlcmNhcmQsXG4gICAgJ3BheW1lbnQtbWFzdGVyY2FyZCcgOiBQYXltZW50TWFzdGVyY2FyZCxcbiAgICAnbW9uZXknICAgICAgICAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAnY2FzaCcgICAgICAgICAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAncGF5bWVudC1tb25leScgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAncGF5bWVudC1jYXNoJyAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAnb3RoZXJzJyAgICAgICAgICAgICA6IFBheW1lbnRPdGhlcnMsXG4gICAgJ3BheW1lbnQtb3RoZXJzJyAgICAgOiBQYXltZW50T3RoZXJzLFxuICAgICdwYXlwYWwnICAgICAgICAgICAgIDogUGF5bWVudFBheXBhbCxcbiAgICAncGF5bWVudC1wYXlwYWwnICAgICA6IFBheW1lbnRQYXlwYWwsXG4gICAgJ3Zpc2EnICAgICAgICAgICAgICAgOiBQYXltZW50VmlzYSxcbiAgICAncGF5bWVudC12aXNhJyAgICAgICA6IFBheW1lbnRWaXNhLFxufTtcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbGluZUhlaWdodCAgIDogMCxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIHNoYXBlLCBzbHVnIH0gPSBwcm9wcztcbiAgICBjb25zdCBTTFVHID0gKHNsdWcgKyAoIWRpcmVjdGlvbiA/ICcnIDogJy0nICsgZGlyZWN0aW9uKSArICghc2hhcGUgPyAnJyA6ICctJyArIHNoYXBlKSk7XG4gICAgY29uc3QgSUNPTiA9IElDT05TW1NMVUddO1xuXG4gICAgaWYgKCFJQ09OKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPElDT05cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgY29sb3IpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pY29uICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbHVnICAgICA6ICcnLFxuICAgIGRpcmVjdGlvbjogJycsXG4gICAgc2hhcGUgICAgOiAnJyxcbiAgICBzaXplICAgICA6IDIwLFxuICAgIGNvbG9yICAgIDogJ3NlY29uZGFyeScsXG4gICAgd2lkdGggICAgOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0ICAgOiB1bmRlZmluZWQsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgICAgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaGFwZSAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZSAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0ICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0= */");
/* Component it self */


var Icon = forwardRef(function (props, ref) {
  var direction = props.direction,
      shape = props.shape,
      slug = props.slug;
  var SLUG = slug + (!direction ? '' : '-' + direction) + (!shape ? '' : '-' + shape);
  var ICON = ICONS$1[SLUG];

  if (!ICON) {
    return null;
  }

  var color = props.color,
      className = props.className,
      styles = props.styles,
      rest = _objectWithoutProperties(props, ["color", "className", "styles"]);

  return React.createElement(IconWrapper, {
    styles: styles,
    className: "aph-icon-wrapper"
  }, React.createElement(ICON, _extends({}, rest, {
    ref: ref,
    color: colors$1.getFromTheme(props, color),
    className: "aph-icon ".concat(className || '')
  })));
});
/* Default Properties */

Icon.defaultProps = {
  slug: '',
  direction: '',
  shape: '',
  size: 20,
  color: 'secondary',
  width: undefined,
  height: undefined,
  styles: {}
};
/* Properties Types */

Icon.propTypes = {
  slug: propTypes.string.isRequired,
  direction: propTypes.string,
  shape: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Styled */

var ImgStyled =
/*#__PURE__*/
_styled('img', {
  target: "essx23r0"
})(function (props) {
  var circle = props.circle,
      rounded = props.rounded,
      radius = props.radius,
      maxWidthXS = props.maxWidthXS,
      styles = props.styles;
  var _extraStyles = {};

  if (maxWidthXS) {
    _extraStyles[MEDIA_QUERIES.LT.SM] = Object.assign({
      maxWidth: maxWidthXS
    }, styles && styles[MEDIA_QUERIES.LT.SM] ? styles[MEDIA_QUERIES.LT.SM] : {});
  }

  return _objectSpread$5({
    boxSizing: 'border-box',
    display: 'inline-block',
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    borderRadius: circle ? '50%' : rounded ? RADIUS + 'px' : radius || null
  }, styles, {}, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkltZy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCIiwiZmlsZSI6IkltZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlZCAqL1xuY29uc3QgSW1nU3R5bGVkID0gc3R5bGVkKCdpbWcnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNpcmNsZSxcbiAgICAgICAgcm91bmRlZCxcbiAgICAgICAgcmFkaXVzLFxuXG4gICAgICAgIG1heFdpZHRoWFMsXG5cbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGxldCBfZXh0cmFTdHlsZXMgPSB7fTtcblxuICAgIGlmIChtYXhXaWR0aFhTKSB7XG4gICAgICAgIF9leHRyYVN0eWxlc1tNRURJQV9RVUVSSUVTLkxULlNNXSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBtYXhXaWR0aFhTLFxuICAgICAgICAgICAgfSwgc3R5bGVzICYmIHN0eWxlc1tNRURJQV9RVUVSSUVTLkxULlNNXSA/IHN0eWxlc1tNRURJQV9RVUVSSUVTLkxULlNNXSA6IHt9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGggICAgIDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQgICAgICAgOiAnYXV0bycsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXG4gICAgICAgIGJvcmRlclJhZGl1czogKGNpcmNsZSA/ICc1MCUnIDogcm91bmRlZCA/IChSQURJVVMgKyAncHgnKSA6IChyYWRpdXMgfHwgbnVsbCkpLFxuXG4gICAgICAgIC4uLnN0eWxlcyxcblxuICAgICAgICAuLi5fZXh0cmFTdHlsZXNcbiAgICB9O1xufSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgSW1nID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbWdTdHlsZWRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWltZyAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5JbWcuZGVmYXVsdFByb3BzID0ge1xuICAgIGNpcmNsZSAgICA6IGZhbHNlLFxuICAgIHJvdW5kZWQgICA6IGZhbHNlLFxuXG4gICAgcmFkaXVzICAgIDogJycsXG4gICAgbWF4V2lkdGhYUzogJycsXG5cbiAgICBzdHlsZXMgICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkltZy5wcm9wVHlwZXMgPSB7XG4gICAgY2lyY2xlICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgcm91bmRlZCAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICByYWRpdXMgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1heFdpZHRoWFM6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBzdHlsZXMgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSW1nO1xuIl19 */");
/* Component */


var Img = forwardRef(function (props, ref) {
  var className = props.className;
  return React.createElement(ImgStyled, _extends({}, props, {
    ref: ref,
    className: "aph-img ".concat(className || '')
  }));
});
/* Default Properties */

Img.defaultProps = {
  circle: false,
  rounded: false,
  radius: '',
  maxWidthXS: '',
  styles: {}
};
/* Properties Types */

Img.propTypes = {
  circle: propTypes.bool,
  rounded: propTypes.bool,
  radius: propTypes.string,
  maxWidthXS: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */
var AphNumberFormatStyled = _styled("span", {
  target: "e1vp335j0"
})("box-sizing:border-box;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlckZvcm1hdFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJeUMiLCJmaWxlIjoiTnVtYmVyRm9ybWF0U3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoTnVtYmVyRm9ybWF0U3R5bGVkID0gc3R5bGVkLnNwYW5gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoTnVtYmVyRm9ybWF0U3R5bGVkO1xuIl19 */"));

/* Component */

var NumberFormat = forwardRef(function (props, ref) {
  /**
   * Inherit Props
   */
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);
  /**
   * Render
   */


  return React.createElement(AphNumberFormatStyled, _extends({}, rest, {
    className: "aph-number-format ".concat(className || ''),
    as: Formatter,
    ref: ref
  }));
});
/* Default Props */

NumberFormat.defaultProps = {
  thousandSeparator: '.',
  decimalSeparator: ',',
  displayType: 'text',
  value: 0,
  styles: {}
};
/* Properties Types */

NumberFormat.propTypes = {
  thousandSeparator: propTypes.string,
  decimalSeparator: propTypes.string,
  displayType: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
/* Constants */

var bgPlaceholder = keyframes(_templateObject$2());
/* Component Itself */

var Placeholder = forwardRef(function (props, ref) {
  var _ref = props || {},
      className = _ref.className,
      styles = _ref.styles,
      rest = _objectWithoutProperties(_ref, ["className", "styles"]);

  var isDarkMode = props.theme && props.theme.isDarkMode ? true : false;
  var colorTheme = colors$1.getFromTheme(props, 'helper');
  var colorBase = chroma(colorTheme);
  var colorStart = colorBase.alpha(isDarkMode ? 0.5 : 0.05).css();
  var colorEnd = colorBase.alpha(isDarkMode ? 0.75 : 0.15).css();

  var StyledPlaceholder =
  /*#__PURE__*/
  _styled('div', {
    target: "ejqn05n0"
  })(_objectSpread$6({
    fontSize: '0',
    lineHeight: '0',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: "".concat(props.block ? 'block' : 'inline-block'),
    width: "".concat(props.width ? props.width + 'px' : '100%'),
    maxWidth: "".concat(props.width ? props.width + 'px' : '100%'),
    minHeight: "".concat(props.height, "px"),
    border: props.border || null,
    borderRadius: "".concat(props.radius, "px"),
    color: colorBase.rgb(),
    background: "linear-gradient(90deg, ".concat(colorStart, ", ").concat(colorEnd, ")"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgPlaceholder, " .9s ease infinite")
  }, styles), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYWNlaG9sZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6IlBsYWNlaG9sZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5jb25zdCBiZ1BsYWNlaG9sZGVyID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgUGxhY2Vob2xkZXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IChwcm9wcyB8fCB7fSk7XG5cbiAgICBjb25zdCBpc0RhcmtNb2RlID0gKChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5pc0RhcmtNb2RlKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgY29uc3QgY29sb3JUaGVtZSA9IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKTtcbiAgICBjb25zdCBjb2xvckJhc2UgID0gY2hyb21hKGNvbG9yVGhlbWUpO1xuICAgIGNvbnN0IGNvbG9yU3RhcnQgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNSA6IDAuMDUpLmNzcygpO1xuICAgIGNvbnN0IGNvbG9yRW5kICAgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNzUgOiAwLjE1KS5jc3MoKTtcblxuICAgIGNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIGZvbnRTaXplICA6ICcwJyxcbiAgICAgICAgbGluZUhlaWdodDogJzAnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuXG4gICAgICAgIGRpc3BsYXkgIDogYCR7cHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jayd9YCxcbiAgICAgICAgd2lkdGggICAgOiBgJHtwcm9wcy53aWR0aCA/IChwcm9wcy53aWR0aCArICdweCcpIDogJzEwMCUnfWAsXG4gICAgICAgIG1heFdpZHRoIDogYCR7cHJvcHMud2lkdGggPyAocHJvcHMud2lkdGggKyAncHgnKSA6ICcxMDAlJ31gLFxuICAgICAgICBtaW5IZWlnaHQ6IGAke3Byb3BzLmhlaWdodH1weGAsXG5cbiAgICAgICAgYm9yZGVyICAgICAgOiAocHJvcHMuYm9yZGVyIHx8IG51bGwpLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3Byb3BzLnJhZGl1c31weGAsXG5cbiAgICAgICAgY29sb3IgICAgICAgICA6IGNvbG9yQmFzZS5yZ2IoKSxcbiAgICAgICAgYmFja2dyb3VuZCAgICA6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7Y29sb3JTdGFydH0sICR7Y29sb3JFbmR9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgICAgICBhbmltYXRpb246IGAke2JnUGxhY2Vob2xkZXJ9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgICAgICAuLi5zdHlsZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcGxhY2Vob2xkZXIgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvU3R5bGVkUGxhY2Vob2xkZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9jayA6IGZhbHNlLFxuICAgIGhlaWdodDogMjAsXG4gICAgcmFkaXVzOiA0LFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHJhZGl1czogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZSA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nIENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXI7XG4iXX0= */");

  return React.createElement(StyledPlaceholder, _extends({}, rest, {
    ref: ref,
    className: "aph-placeholder ".concat(className || '')
  }), props.children);
});
/* Default Properties */

Placeholder.defaultProps = {
  block: false,
  height: 20,
  radius: 4,
  styles: {}
};
/* Properties Types */

Placeholder.propTypes = {
  block: propTypes.bool,
  width: propTypes.number,
  height: propTypes.number,
  radius: propTypes.number,
  style: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
/* Animation */

var bgAnimated = keyframes(_templateObject$3());
/* Default Styles */

var defaultStyles = {
  boxSizing: 'border-box',
  display: 'block'
};
/* Wrapper Styles */

var AphProgressBarWrapper =
/*#__PURE__*/
_styled('div', {
  target: "e1pp9vj70"
})(function (props) {
  return _objectSpread$7({}, defaultStyles, {
    height: props.height || '10px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: props.width || '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: (props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number' ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px',
    background: colors$1.getFromTheme(props, 'disabled')
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6IlByb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHMpIHtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICBzaXplLFxuICAgICAgICBwZXJjZW50LFxuICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICBncmFkaWVudCxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHJhZGl1cyxcblxuICAgICAgICBjb2xvcixcblxuICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICBwZXJjZW50dWFsPXsocGVyY2VudCB8fCBwZXJjZW50dWFsKX1cbiAgICAgICAgICAgICAgICBjb2xvcj17KGNvbG9yIHx8ICcnKX1cbiAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRTdGFydD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuc3RhcnR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRFbmQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LmVuZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogZmFsc2UsXG5cbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIHBlcmNlbnR1YWwgICA6IDAsXG4gICAgc2l6ZSAgICAgICAgIDogJycsXG4gICAgZ3JhZGllbnQgICAgIDoge1xuICAgICAgICBzdGFydDogY29sb3JzLmdldCgnc2Vjb25kYXJ5JyksXG4gICAgICAgIGVuZCAgOiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknLCAnbGlnaHQnKSxcbiAgICB9LFxuICAgIHN0eWxlcyAgICAgICA6IHt9LFxuXG4gICAgd2lkdGggICAgICAgIDogJzEwMCUnLFxuICAgIGhlaWdodCAgICAgICA6IDEwLFxuXG4gICAgY29sb3IgICAgICAgIDogJycsXG4gICAgY29sb3JmdWwgICAgIDogZmFsc2UsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICBzaXplICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcblxuICAgIHdpZHRoICAgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0ICAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcblxuICAgIGNvbG9yICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */");
/* Filler Styles */


var AphProgressBar =
/*#__PURE__*/
_styled('div', {
  target: "e1pp9vj71"
})(function (props) {
  return _objectSpread$7({}, defaultStyles, {
    height: props.height || '10px',
    width: props.size || (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + '%',
    background: props.color ? colors$1.getFromTheme(props, props.color) : !props.animated ? colors$1.getFromTheme(props, 'secondary') : "linear-gradient(270deg, ".concat(colors$1.getFromTheme(props, props.gradientStart || 'secondary'), " 0%, ").concat(colors$1.getFromTheme(props, props.gradientEnd || 'secondary'), " 100%)"),
    backgroundSize: '200% 100%',
    animation: "".concat(bgAnimated, " .9s ease infinite"),
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6IlByb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHMpIHtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhbmltYXRlZCxcblxuICAgICAgICBzaXplLFxuICAgICAgICBwZXJjZW50LFxuICAgICAgICBwZXJjZW50dWFsLFxuICAgICAgICBncmFkaWVudCxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHJhZGl1cyxcblxuICAgICAgICBjb2xvcixcblxuICAgICAgICB3cmFwcGVyU3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhQcm9ncmVzc0JhcldyYXBwZXJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgcmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBzdHlsZXM9e3dyYXBwZXJTdHlsZXN9PlxuICAgICAgICAgICAgPEFwaFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICBwZXJjZW50dWFsPXsocGVyY2VudCB8fCBwZXJjZW50dWFsKX1cbiAgICAgICAgICAgICAgICBjb2xvcj17KGNvbG9yIHx8ICcnKX1cbiAgICAgICAgICAgICAgICBhbmltYXRlZD17YW5pbWF0ZWR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRTdGFydD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuc3RhcnR9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRFbmQ9e2dyYWRpZW50ICYmIGdyYWRpZW50LmVuZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogZmFsc2UsXG5cbiAgICBwZXJjZW50ICAgICAgOiAwLFxuICAgIHBlcmNlbnR1YWwgICA6IDAsXG4gICAgc2l6ZSAgICAgICAgIDogJycsXG4gICAgZ3JhZGllbnQgICAgIDoge1xuICAgICAgICBzdGFydDogY29sb3JzLmdldCgnc2Vjb25kYXJ5JyksXG4gICAgICAgIGVuZCAgOiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknLCAnbGlnaHQnKSxcbiAgICB9LFxuICAgIHN0eWxlcyAgICAgICA6IHt9LFxuXG4gICAgd2lkdGggICAgICAgIDogJzEwMCUnLFxuICAgIGhlaWdodCAgICAgICA6IDEwLFxuXG4gICAgY29sb3IgICAgICAgIDogJycsXG4gICAgY29sb3JmdWwgICAgIDogZmFsc2UsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BzIFR5cGVzICovXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0ZWQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICBzaXplICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcmNlbnR1YWwgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3JhbmRpZW50ICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXMgICAgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcblxuICAgIHdpZHRoICAgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0ICAgICAgIDogcHJvcFR5cGVzLm51bWJlcixcblxuICAgIGNvbG9yICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */");
/* Component it self */


function ProgressBar(props) {
  /**
   * Inherit props
   */
  var animated = props.animated,
      size = props.size,
      percent = props.percent,
      percentual = props.percentual,
      gradient = props.gradient,
      styles = props.styles,
      width = props.width,
      height = props.height,
      radius = props.radius,
      color = props.color,
      wrapperStyles = props.wrapperStyles;
  /**
   * Render
   */

  return React.createElement(AphProgressBarWrapper, {
    width: width,
    height: height,
    radius: radius,
    styles: wrapperStyles
  }, React.createElement(AphProgressBar, {
    size: size,
    percentual: percent || percentual,
    color: color || '',
    animated: animated,
    gradientStart: gradient && gradient.start,
    gradientEnd: gradient && gradient.end,
    height: height,
    styles: styles
  }));
}
/* Default Props */

ProgressBar.defaultProps = {
  animated: false,
  percent: 0,
  percentual: 0,
  size: '',
  gradient: {
    start: colors$1.get('secondary'),
    end: colors$1.get('secondary', 'light')
  },
  styles: {},
  width: '100%',
  height: 10,
  color: '',
  colorful: false,
  wrapperStyles: {}
};
/* Props Types */

ProgressBar.propTypes = {
  animated: propTypes.bool,
  size: propTypes.string,
  percentual: propTypes.number,
  grandient: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  width: propTypes.any,
  height: propTypes.number,
  color: propTypes.string,
  wrapperStyles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Style Wrapper */

var StyledWrapper =
/*#__PURE__*/
_styled('div', {
  target: "e19gg4i70"
})(function (props) {
  return _objectSpread$8({}, props.styles, _defineProperty({
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '-10px',
    marginLeft: '-10px',
    '&:before,&:after': {
      content: '" "',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '15px',
      zIndex: 1
    },
    '&:before': {
      left: 0,
      background: "linear-gradient(to right, ".concat(colors$1.getFromTheme(props, 'inverse'), " 50%, ").concat(colors$1.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)'), " 80%)")
    },
    '&:after': {
      right: 0,
      background: "linear-gradient(to right, ".concat(colors$1.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)'), " 0%, ").concat(colors$1.getFromTheme(props, 'inverse'), " 50%)")
    },
    '&.scrollable--xs': {
      '&:before,&:after': {
        content: 'initial'
      }
    }
  }, MEDIA_QUERIES.XS, {
    marginRight: '-20px',
    marginLeft: '-20px',
    '&.scrollable--xs:before,&.scrollable--xs:after': {
      content: '" "'
    }
  }));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbGFibGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdzQiIsImZpbGUiOiJTY3JvbGxhYmxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbGl0ZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGUgV3JhcHBlciAqL1xuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5wcm9wcy5zdHlsZXMsXG5cbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgIHBhZGRpbmdUb3AgICA6ICcxMHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgbWFyZ2luUmlnaHQgIDogJy0xMHB4JyxcbiAgICBtYXJnaW5MZWZ0ICAgOiAnLTEwcHgnLFxuXG4gICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wICAgICA6ICcwJyxcbiAgICAgICAgYm90dG9tICA6ICcwJyxcbiAgICAgICAgd2lkdGggICA6ICcxNXB4JyxcbiAgICAgICAgekluZGV4ICA6IDEsXG4gICAgfSxcblxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfSA1MCUsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKS5yZXBsYWNlKCdyZ2IoJywgJ3JnYmEoJykucmVwbGFjZSgnKScsICcsIDApJyl9IDgwJSlgLFxuICAgIH0sXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKS5yZXBsYWNlKCdyZ2IoJywgJ3JnYmEoJykucmVwbGFjZSgnKScsICcsIDApJyl9IDAlLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9IDUwJSlgLFxuICAgIH0sXG5cbiAgICAnJi5zY3JvbGxhYmxlLS14cyc6IHtcbiAgICAgICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBjb250ZW50IDogJ2luaXRpYWwnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICctMjBweCcsXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnLTIwcHgnLFxuXG4gICAgICAgICcmLnNjcm9sbGFibGUtLXhzOmJlZm9yZSwmLnNjcm9sbGFibGUtLXhzOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdcIiBcIicsXG4gICAgICAgIH1cbiAgICB9XG59KSk7XG5cbi8qIFN0eWxlZCBTY3JvbGwgKi9cbmNvbnN0IFN0eWxlZFNjcm9sbGFibGUgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICBvdmVyZmxvdyAgOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dZIDogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXG5cbiAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW4gOiAnMCAxMHB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlhTXToge1xuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcblxuICAgICAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTY3JvbGxhYmxlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgb25seVhTLFxuICAgICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFdyYXBwZXJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyhjbGFzc05hbWUgfHwgJycpICsgKG9ubHlYUyA/ICcgc2Nyb2xsYWJsZS0teHMnIDogJycpfT5cbiAgICAgICAgICAgIDxTdHlsZWRTY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgPC9TdHlsZWRXcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRXhwb3J0IENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYWJsZTtcbiJdfQ== */");
/* Styled Scroll */


var StyledScrollable =
/*#__PURE__*/
_styled('div', {
  target: "e19gg4i71"
})(_defineProperty({
  overflow: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '.scrollable__item': {
    display: 'inline-block',
    margin: '0 10px',
    verticalAlign: 'middle'
  }
}, MEDIA_QUERIES.XS, {
  textAlign: 'left',
  '.scrollable__item': {
    '&:first-of-type': {
      marginLeft: '20px'
    },
    '&:last-child': {
      marginRight: '20px'
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbGFibGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEeUIiLCJmaWxlIjoiU2Nyb2xsYWJsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlIFdyYXBwZXIgKi9cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICBwYWRkaW5nVG9wICAgOiAnMTBweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0ICA6ICctMTBweCcsXG4gICAgbWFyZ2luTGVmdCAgIDogJy0xMHB4JyxcblxuICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50IDogJ1wiIFwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcCAgICAgOiAnMCcsXG4gICAgICAgIGJvdHRvbSAgOiAnMCcsXG4gICAgICAgIHdpZHRoICAgOiAnMTVweCcsXG4gICAgICAgIHpJbmRleCAgOiAxLFxuICAgIH0sXG5cbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX0gNTAlLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSA4MCUpYCxcbiAgICB9LFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfSA1MCUpYCxcbiAgICB9LFxuXG4gICAgJyYuc2Nyb2xsYWJsZS0teHMnOiB7XG4gICAgICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdpbml0aWFsJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTIwcHgnLFxuICAgICAgICBtYXJnaW5MZWZ0IDogJy0yMHB4JyxcblxuICAgICAgICAnJi5zY3JvbGxhYmxlLS14czpiZWZvcmUsJi5zY3JvbGxhYmxlLS14czphZnRlcic6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICB9XG4gICAgfVxufSkpO1xuXG4vKiBTdHlsZWQgU2Nyb2xsICovXG5jb25zdCBTdHlsZWRTY3JvbGxhYmxlID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgb3ZlcmZsb3cgIDogJ2F1dG8nLFxuICAgIG92ZXJmbG93WSA6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuXG4gICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luIDogJzAgMTBweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG5cbiAgICAgICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICAgICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgU2Nyb2xsYWJsZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIG9ubHlYUyxcbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoY2xhc3NOYW1lIHx8ICcnKSArIChvbmx5WFMgPyAnIHNjcm9sbGFibGUtLXhzJyA6ICcnKX0+XG4gICAgICAgICAgICA8U3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1N0eWxlZFNjcm9sbGFibGU+XG4gICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydCBDb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGFibGU7XG4iXX0= */");
/* Component Itself */


var Scrollable = forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onlyXS = props.onlyXS,
      styles = props.styles;
  return React.createElement(StyledWrapper, {
    ref: ref,
    styles: styles,
    className: (className || '') + (onlyXS ? ' scrollable--xs' : '')
  }, React.createElement(StyledScrollable, null, children));
});

/* Component Itself */

var SegmentStyled = _styled("div", {
  target: "e1pevrxj0"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.aphmargin || null;
}, ";padding:", function (props) {
  return props.aphpadding || '20px 10px';
}, ";border-radius:", function (props) {
  return props.aphradius ? "".concat(props.aphradius, "px") : null;
}, ";box-shadow:", function (props) {
  return props.aphshadow ? "0 0 3px ".concat(colors$1.getFromTheme(props, 'oil', 'dark', 0.25)) : props.borderTop || props.borderBottom ? "inset 0 ".concat(props.borderBottom ? '-' : '', "1px 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper'))) : null;
}, ";color:", function (props) {
  return props.aphcolor ? colors$1.getFromTheme(props, props.aphcolor) : null;
}, ";background-color:", function (props) {
  return props.aphbackground ? colors$1.getFromTheme(props, props.aphbackground) : null;
}, ";", function (props) {
  return !props.aphhoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        border-radius: ".concat(RADIUS.LG, "px;\n        box-shadow   : ").concat(function (props) {
    return !props.aphshadow ? null : "0 0 3px ".concat(colors$1.getFromTheme(props, 'oil', 'dark', 0.25));
  }, ";\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px ").concat(colors$1.getFromTheme(props, 'oil', 'dark', 0.25), ";\n        }\n    ");
}, " ", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlZ21lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQyIsImZpbGUiOiJTZWdtZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhtYXJnaW4gIHx8IG51bGx9O1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMuYXBocGFkZGluZyB8fCAnMjBweCAxMHB4J307XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLmFwaHJhZGl1cyA/IGAke3Byb3BzLmFwaHJhZGl1c31weGAgOiBudWxsfTtcbiAgICBib3gtc2hhZG93ICAgOiAke3Byb3BzID0+IHByb3BzLmFwaHNoYWRvdyA/XG4gICAgICAgIGAwIDAgM3B4ICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ29pbCcsICdkYXJrJywgMC4yNSl9YCA6IChcbiAgICAgICAgICAgIChwcm9wcy5ib3JkZXJUb3AgfHwgcHJvcHMuYm9yZGVyQm90dG9tKSA/IGBpbnNldCAwICR7cHJvcHMuYm9yZGVyQm90dG9tID8gJy0nIDogJyd9MXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9YCA6IG51bGxcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLmFwaGNvbG9yID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoY29sb3IpIDogbnVsbH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcGhiYWNrZ3JvdW5kID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoYmFja2dyb3VuZCkgOiBudWxsfTtcblxuICAgICR7cHJvcHMgPT4gIXByb3BzLmFwaGhvdmVyYWJsZSA/IG51bGwgOiBgXG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuTEd9cHg7XG4gICAgICAgIGJveC1zaGFkb3cgICA6ICR7cHJvcHMgPT4gIXByb3BzLmFwaHNoYWRvdyA/IG51bGwgOiBgMCAwIDNweCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdvaWwnLCAnZGFyaycsIDAuMjUpfWB9O1xuICAgICAgICB0cmFuc2l0aW9uICAgOiBib3gtc2hhZG93IDAuMTVzIGxpbmVhcjtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ29pbCcsICdkYXJrJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYXBoc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG5cbiAgICAgICAgbWFyZ2luLFxuICAgICAgICBwYWRkaW5nLFxuXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBob3ZlcmFibGUsXG4gICAgICAgIHJhZGl1cyxcbiAgICAgICAgc2hhZG93LFxuXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlZ21lbnRTdHlsZWRcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBhcGhtYXJnaW49e21hcmdpbn1cbiAgICAgICAgICAgIGFwaHBhZGRpbmc9e3BhZGRpbmd9XG4gICAgICAgICAgICBhcGhob3ZlcmFibGU9e2hvdmVyYWJsZX1cbiAgICAgICAgICAgIGFwaGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIGFwaGJhY2tncm91bmQ9e2JhY2tncm91bmR9XG4gICAgICAgICAgICBhcGhyYWRpdXM9e3JhZGl1c31cbiAgICAgICAgICAgIGFwaHNoYWRvdz17c2hhZG93fVxuICAgICAgICAgICAgYXBoc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtc2VnbWVudCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuU2VnbWVudC5wcm9wVHlwZXMgPSB7XG4gICAgbWFyZ2luICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWRkaW5nICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhvdmVyYWJsZSA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNvbG9yICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFja2dyb3VuZDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICByYWRpdXMgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHNoYWRvdyAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50O1xuIl19 */"));
/* Component Itself */


var Segment = forwardRef(function (props, ref) {
  var className = props.className,
      margin = props.margin,
      padding = props.padding,
      color = props.color,
      background = props.background,
      hoverable = props.hoverable,
      radius = props.radius,
      shadow = props.shadow,
      styles = props.styles,
      rest = _objectWithoutProperties(props, ["className", "margin", "padding", "color", "background", "hoverable", "radius", "shadow", "styles"]);

  return React.createElement(SegmentStyled, _extends({}, rest, {
    ref: ref,
    aphmargin: margin,
    aphpadding: padding,
    aphhoverable: hoverable,
    aphcolor: color,
    aphbackground: background,
    aphradius: radius,
    aphshadow: shadow,
    aphstyles: styles,
    className: "aph-segment ".concat(className || '')
  }));
});
/* Properties Types */

Segment.propTypes = {
  margin: propTypes.string,
  padding: propTypes.string,
  hoverable: propTypes.bool,
  color: propTypes.string,
  background: propTypes.string,
  radius: propTypes.number,
  shadow: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var AphTableStyled = _styled("table", {
  target: "e10yuwue0"
})("box-sizing:border-box;min-width:100%;border-collapse:collapse;border-style:hidden;", function (props) {
  return props.styles;
}, ";", function (props) {
  return !props.rounded ? null : "\n        position     : relative;\n        overflow     : hidden;\n        border-radius: ".concat(RADIUS.SM, "px;\n    ");
}, " ", function (props) {
  return !props.striped ? null : "\n        tbody {\n            tr:nth-child(even) {\n                background-color: ".concat(COLORS.SMOKE, ";\n            }\n        }\n    ");
}, " thead,tfoot{background-color:", COLORS.LIGHT_GREY, ";text-align:left;}th{font-weight:700;padding:", function (props) {
  return props.condensed ? '6px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? '4px' : '9px';
}, ";}td{padding:", function (props) {
  return props.condensed ? '5px' : props.bordered ? '10px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? props.bordered ? '4px' : '5px' : '9px';
}, ";", function (props) {
  return !props.bordered ? null : "\n            border-top: 1px solid ".concat(COLORS.LIGHT_GREY, ";\n        ");
}, "}tbody{", function (props) {
  return !props.hoverable ? null : "\n            tr {\n                background-color: transparent;\n                transition: background-color 0.25s linear;\n\n                &:hover {\n                    background-color: ".concat(COLORS.SMOKE, ";\n                }\n            }\n        ");
}, "}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYmxlU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiJUYWJsZVN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBDT0xPUlMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaFRhYmxlU3R5bGVkID0gc3R5bGVkLnRhYmxlYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWluLXdpZHRoIDogMTAwJTtcblxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXN0eWxlICAgOiBoaWRkZW47XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMucm91bmRlZCA/IG51bGwgOiBgXG4gICAgICAgIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuICAgIGApfVxuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLnN0cmlwZWQgPyBudWxsIDogYFxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q09MT1JTLlNNT0tFfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGApfVxuXG4gICAgdGhlYWQsXG4gICAgdGZvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5MSUdIVF9HUkVZfTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNnB4JyA6ICcxMXB4Jyl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNHB4JyA6ICc5cHgnKX1cbiAgICAgICAgO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICR7cHJvcHMgPT4gKHByb3BzLmNvbmRlbnNlZCA/ICc1cHgnIDogKHByb3BzLmJvcmRlcmVkID8gJzEwcHgnIDogJzExcHgnKSl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAocHJvcHMuYm9yZGVyZWQgPyAnNHB4JyA6ICc1cHgnKSA6ICc5cHgnKX1cbiAgICAgICAgO1xuXG4gICAgICAgICR7cHJvcHMgPT4gKCFwcm9wcy5ib3JkZXJlZCA/IG51bGwgOiBgXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDT0xPUlMuTElHSFRfR1JFWX07XG4gICAgICAgIGApfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgICAgJHtwcm9wcyA9PiAoIXByb3BzLmhvdmVyYWJsZSA/IG51bGwgOiBgXG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuU01PS0V9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYCl9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhUYWJsZVN0eWxlZDtcbiJdfQ== */"));

/* Component Itself */

var Table = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return React.createElement(AphTableStyled, _extends({}, props, {
    ref: ref,
    className: "aph-table ".concat(className || '')
  }), children);
});
/* Default Properties */

Table.defaultProps = {
  bordered: false,
  condensed: false,
  hoverable: false,
  striped: false
};
/* Properties Types */

Table.propTypes = {
  bordered: propTypes.bool,
  condensed: propTypes.bool,
  hoverable: propTypes.bool,
  striped: propTypes.bool
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Component */

var ToastsContainer = function ToastsContainer() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: {}
  };
  var styles = props.styles || {};

  var AphToastsContainer =
  /*#__PURE__*/
  _styled('div', {
    target: "ej5e3vp0"
  })(_objectSpread$9({}, styles, _defineProperty({
    zIndex: styles.zIndex || ZINDEX.TOAST,
    position: styles.position || 'fixed',
    top: typeof styles.top === 'string' ? styles.top : '20px',
    right: typeof styles.right === 'string' ? styles.right : '20px',
    '.Toastify__toast-container': {
      position: 'relative',
      top: 'auto',
      right: 'auto',
      width: '100%',
      minWidth: '380px',
      padding: 0
    },
    '.Toastify__toast': {
      margin: '0 0 10px',
      padding: '15px 40px 15px 20px',
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 0 4px rgba(42, 42, 42, 0.25)',
      borderRadius: '4px',
      minHeight: '50px',
      maxWidth: '380px',
      width: '100%',
      fontFamily: 'inherit',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '20px',
      userSelect: 'none',
      '&--default': {
        color: COLORS.BLACK
      },
      '.Toastify__close-button': {
        position: 'absolute',
        top: 'calc(50% - 15px)',
        right: '10px',
        width: '30px',
        height: '30px',
        padding: 0,
        margin: '0 !important',
        opacity: 1,
        color: 'transparent',
        cursor: 'pointer',
        outline: 0,
        border: 0,
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'none',
        textAlign: 'center',
        willTransform: 'background, box-shadow',
        transition: 'background .25s linear, box-shadow .25s linear',
        '&:hover': {
          background: 'rgba(42, 42, 42, 0.05)'
        },
        '&:active,&:focus': {
          boxShadow: 'inset 1px 1px 4px rgba(42, 42, 42, 0.15)',
          background: 'rgba(42, 42, 42, 0.15)'
        },
        '&:before': {
          position: 'absolute',
          content: '"×"',
          width: '100%',
          display: 'block',
          color: COLORS.BLACK,
          fontSize: '20px',
          lineHeight: '16px',
          textAlign: 'center'
        }
      },
      '.Toastify__progress-bar': {
        height: '2px',
        background: COLORS.BLACK
      },
      '&.Toastify__toast--success': {
        color: COLORS.SUCCESS,
        '.Toastify__close-button--success:before': {
          color: COLORS.SUCCESS
        },
        '.Toastify__progress-bar--success': {
          background: COLORS.SUCCESS
        }
      },
      '&.Toastify__toast--info': {
        color: COLORS.INFO,
        '.Toastify__close-button--info:before': {
          color: COLORS.INFO
        },
        '.Toastify__progress-bar--info': {
          background: COLORS.INFO
        }
      },
      '&.Toastify__toast--warning': {
        color: COLORS.WARNING,
        '.Toastify__close-button--warning:before': {
          color: COLORS.WARNING
        },
        '.Toastify__progress-bar--warning': {
          background: COLORS.WARNING
        }
      },
      '&.Toastify__toast--error': {
        color: COLORS.ERROR,
        '.Toastify__close-button--error:before': {
          color: COLORS.ERROR
        },
        '.Toastify__progress-bar--error': {
          background: COLORS.ERROR
        }
      },
      '&.Toastify__toast--inverse': {
        color: COLORS.WHITE,
        background: 'rgba(45, 45, 45, 0.95)',
        '.Toastify__close-button': {
          '&:hover': {
            background: 'rgba(42, 42, 42, 0.5)'
          },
          '&:active,&:focus': {
            boxShadow: 'inset 1px 1px 4px rgb(42, 42, 42)',
            background: 'rgba(42, 42, 42, 0.5)'
          },
          '&:before': {
            color: COLORS.WHITE
          }
        },
        '.Toastify__progress-bar': {
          background: COLORS.WHITE
        }
      }
    }
  }, MEDIA_QUERIES.LT.SM, {
    width: '100%',
    top: 'auto',
    right: 0,
    bottom: 0,
    left: 0,
    '.Toastify__toast-container': {
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      width: '100%',
      minWidth: '100%'
    },
    '.Toastify__toast': {
      margin: 0,
      padding: '20px 40px 20px 20px',
      boxShadow: '0 0 2px 0 rgba(42, 42, 42, 0.2)',
      borderRadius: 0,
      maxWidth: '100%'
    }
  })), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0c0NvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZStCIiwiZmlsZSI6IlRvYXN0c0NvbnRhaW5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG4vKiBTdHlsZXMgKi9cbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvc2Nzcy9tYWluLnNjc3MnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTLCBaSU5ERVggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IFRvYXN0c0NvbnRhaW5lciA9IChwcm9wcyA9IHsgc3R5bGVzOiB7fSB9KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gcHJvcHMuc3R5bGVzIHx8IHt9O1xuXG4gICAgY29uc3QgQXBoVG9hc3RzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgekluZGV4ICA6IChzdHlsZXMuekluZGV4IHx8IFpJTkRFWC5UT0FTVCksXG4gICAgICAgIHBvc2l0aW9uOiAoc3R5bGVzLnBvc2l0aW9uIHx8ICdmaXhlZCcpLFxuICAgICAgICB0b3AgICAgIDogKHR5cGVvZiBzdHlsZXMudG9wID09PSAnc3RyaW5nJyA/IHN0eWxlcy50b3AgOiAnMjBweCcpLFxuICAgICAgICByaWdodCAgIDogKHR5cGVvZiBzdHlsZXMucmlnaHQgPT09ICdzdHJpbmcnID8gc3R5bGVzLnJpZ2h0IDogJzIwcHgnKSxcblxuICAgICAgICAnLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXInOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIHRvcCAgICAgOiAnYXV0bycsXG4gICAgICAgICAgICByaWdodCAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgd2lkdGggICA6ICcxMDAlJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAnMzgwcHgnLFxuICAgICAgICAgICAgcGFkZGluZyA6IDAsXG4gICAgICAgIH0sXG5cbiAgICAgICAgJy5Ub2FzdGlmeV9fdG9hc3QnOiB7XG4gICAgICAgICAgICBtYXJnaW4gICAgICA6ICcwIDAgMTBweCcsXG4gICAgICAgICAgICBwYWRkaW5nICAgICA6ICcxNXB4IDQwcHggMTVweCAyMHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmQgIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSknLFxuICAgICAgICAgICAgYm94U2hhZG93ICAgOiAnMCAwIDRweCByZ2JhKDQyLCA0MiwgNDIsIDAuMjUpJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICBtaW5IZWlnaHQgICA6ICc1MHB4JyxcbiAgICAgICAgICAgIG1heFdpZHRoICAgIDogJzM4MHB4JyxcbiAgICAgICAgICAgIHdpZHRoICAgICAgIDogJzEwMCUnLFxuXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgICAgICAgIGZvbnRTaXplICA6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcblxuICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuXG4gICAgICAgICAgICAnJi0tZGVmYXVsdCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLkJMQUNLLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uJzoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgOiAnY2FsYyg1MCUgLSAxNXB4KScsXG4gICAgICAgICAgICAgICAgcmlnaHQgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICB3aWR0aCAgIDogJzMwcHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgOiAnMzBweCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZyA6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luICA6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAxLFxuXG4gICAgICAgICAgICAgICAgY29sb3IgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuXG4gICAgICAgICAgICAgICAgb3V0bGluZSAgICAgOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlciAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3cgICA6ICdub25lJyxcblxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG5cbiAgICAgICAgICAgICAgICB3aWxsVHJhbnNmb3JtOiAnYmFja2dyb3VuZCwgYm94LXNoYWRvdycsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbiAgIDogJ2JhY2tncm91bmQgLjI1cyBsaW5lYXIsIGJveC1zaGFkb3cgLjI1cyBsaW5lYXInLFxuXG4gICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuMDUpJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJyY6YWN0aXZlLCY6Zm9jdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdyA6ICdpbnNldCAxcHggMXB4IDRweCByZ2JhKDQyLCA0MiwgNDIsIDAuMTUpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDIsIDQyLCA0MiwgMC4xNSknLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogJ1wiw5dcIicsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICAgOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgOiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgIDogQ09MT1JTLkJMQUNLLFxuXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplICA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyJzoge1xuICAgICAgICAgICAgICAgIGhlaWdodCAgICA6ICcycHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5CTEFDSyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLlRvYXN0aWZ5X190b2FzdC0tc3VjY2Vzcyc6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLlNVQ0NFU1MsXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLXN1Y2Nlc3M6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLlNVQ0NFU1MsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2Vzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLlNVQ0NFU1MsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYuVG9hc3RpZnlfX3RvYXN0LS1pbmZvJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuSU5GTyxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0taW5mbzpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuSU5GTyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1pbmZvJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuSU5GTyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLXdhcm5pbmcnOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5XQVJOSU5HLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS13YXJuaW5nOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5XQVJOSU5HLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdhcm5pbmcnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5XQVJOSU5HLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLlRvYXN0aWZ5X190b2FzdC0tZXJyb3InOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5FUlJPUixcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tZXJyb3I6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLkVSUk9SLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9yJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuRVJST1IsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYuVG9hc3RpZnlfX3RvYXN0LS1pbnZlcnNlJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yICAgICA6IENPTE9SUy5XSElURSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0NSwgNDUsIDQ1LCAwLjk1KScsXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDIsIDQyLCA0MiwgMC41KScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgJyY6YWN0aXZlLCY6Zm9jdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3cgOiAnaW5zZXQgMXB4IDFweCA0cHggcmdiKDQyLCA0MiwgNDIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuNSknLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuV0hJVEUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLldISVRFLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgICAgICB3aWR0aCA6ICcxMDAlJyxcbiAgICAgICAgICAgIHRvcCAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQgOiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdCAgOiAwLFxuXG4gICAgICAgICAgICAnLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXInOiB7XG4gICAgICAgICAgICAgICAgdG9wICAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICA6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tIDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0ICAgOiAwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG5cbiAgICAgICAgICAgICAgICB3aWR0aCAgIDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnLlRvYXN0aWZ5X190b2FzdCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gICAgICA6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZyAgICAgOiAnMjBweCA0MHB4IDIwcHggMjBweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93ICAgOiAnMCAwIDJweCAwIHJnYmEoNDIsIDQyLCA0MiwgMC4yKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoICAgIDogJzEwMCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaFRvYXN0c0NvbnRhaW5lciBjbGFzc05hbWU9XCJhcGgtdG9hc3RzLWNvbnRhaW5lclwiIHN0eWxlcz17cHJvcHMuc3R5bGVzfT5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e3Byb3BzLmNsb3NlT25DbGljayB8fCBmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQXBoVG9hc3RzQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c0NvbnRhaW5lcjtcbiJdfQ== */");

  return React.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, React.createElement(ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || false
  })));
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

toast.inverse = function () {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return toast(content, _objectSpread$a({}, props, {
    className: 'Toastify__toast--inverse'
  }));
};

toast.black = toast.inverse;

/**
 * Customized from 'react-tooltip' project:
 *
 * https://github.com/wwayne/react-tooltip
 * https://react-tooltip.netlify.com/
 */

/* Component Wrapper */

var TooltipWrapper =
/*#__PURE__*/
_styled('span', {
  target: "e1rfaqp00"
})(function (props) {
  return _defineProperty({
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0,
    '.aph-tooltip': {
      opacity: 1,
      padding: '8px 12px',
      fontSize: '12px',
      lineHeight: '16px',
      textAlign: props.place === 'right' ? 'left' : props.place === 'left' ? 'right' : 'center',
      maxWidth: '230px',
      borderRadius: '4px',
      '&.type-error': {
        backgroundColor: COLORS.ERROR,
        '&:after': {
          borderTopColor: COLORS.ERROR
        },
        '&.place-right:after': {
          borderRightColor: COLORS.ERROR
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.ERROR
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.ERROR
        }
      },
      '&.type-warning': {
        color: COLORS.BLACK,
        backgroundColor: COLORS.WARNING,
        '&:after': {
          borderTopColor: COLORS.WARNING
        },
        '&.place-right:after': {
          borderRightColor: COLORS.WARNING
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.WARNING
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.WARNING
        }
      },
      '&.type-success': {
        backgroundColor: COLORS.SUCCESS,
        '&:after': {
          borderTopColor: COLORS.SUCCESS
        },
        '&.place-right:after': {
          borderRightColor: COLORS.SUCCESS
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.SUCCESS
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.SUCCESS
        }
      },
      '&.type-info': {
        backgroundColor: COLORS.INFO,
        '&:after': {
          borderTopColor: COLORS.INFO
        },
        '&.place-right:after': {
          borderRightColor: COLORS.INFO
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.INFO
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.INFO
        }
      },
      '&.place-right, &.place-bottom, &.place-left': {
        '&:after': {
          borderTopColor: 'transparent'
        }
      },
      '&.type-light': {
        color: COLORS.DARK_GREY,
        backgroundColor: COLORS.WHITE,
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
        '&:after': {
          width: '12px',
          height: '12px',
          border: '0 !important',
          bottom: '-10px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAAA/UlEQVQoFa2S62qEMBCFT7IxCor4/o/Y/SMiuLk3Z7KWIrS03Q4kJJMz31xUlWp40fSL8RL+P5CUErj+aow197c7YoqYpgnLsvyKta4r9n2HHscRXM55bNv2Ywi1jGGscs6VnDJ88NXp0Pc95nn+FtYATWs7C1V7KiUXacn7BrLWfgkigDomo87cDBT/k2rIOSPGiOADHu4hgmtFJ2DoB3S2gzEGWmvIJ1ZKyYVOPlJEGId2Gs/0XQGMNafoM4g+3kOd03EcIomhAoYBpjMfFVAjWulFjm1ja+eMOHC2SZOyb7rNQCtJ0iJqwiuEDwJ6wnimMat6Bp8VyEPd3gFtaZ6FSCYKnwAAAABJRU5ErkJggg==")'
        },
        '&.place-right:after, &.place-left:after': {
          width: '8px',
          marginTop: '-5.5px'
        },
        '&.place-right:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE3PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpEr0D8AAAENSURBVCgVhZLrjoQgDIXLRcDEGP/Mvv8zGs0ICG7bWcgw2RESI4F+Lee04sIFHyvnDOd5gj887PsOj58HKKVqlKy7vw3luPIFOSGYTv4+YxqIAK6CwSEGCCHCNE1NFUqgS5YK4LNCCOC9h3F0MM9zCal/rvQORMxOgLX2X4BIWTSQcAIOf4Ax5itQIRYc0S2s0AMI0sWpiMKtsyycLu6WLnqscyh8vIutd43l9bSzkUIIkFJi9w/Ytq0T/rqWQiKkJAyD4bFZ17ULciWtNOhBc2+osT2QIaqmtYbBDOCs44m4A9mIoquANA3Us29gnb13kERRK57Pgwd4WZZGZ2N5BVGjQWMMPpccTSk10C9l/KMdM5jKRwAAAABJRU5ErkJggg==")'
        },
        '&.place-bottom:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABCUlEQVQoFa2S7a6DIAyGCzKZifH+r9IfRgcCwvrWsLElJ9tJ1oRQ6ctDP1SFjRrDp6x87ggppUhpXth5vZtpD+rldCTKR6acs4S11qQ7TaZjuT6h7T0+Og0AXIopUgyRvHfn65wBfJwhBg20rUkmFZBSEvG+72SvloZhEO1xHAzyZIuVb2MMIbtamnkH+N1T3/c0juPjMfjIALFqLUilmAp6EEIgZADANE1V+7IvyyI6a63o0CNpuLu5EuIJQPAvQKUBJOUCdOml4Wqe5xK4acNw/QhoQc6h7ItMzGzbJvV/yqACsEOLHq3rKhDFEyld17War31MDaZ4Oq9D/xrxFD5+tufR/72fQO4qbauIX3q2XAAAAABJRU5ErkJggg==")'
        },
        '&.place-left:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABD0lEQVQoFY2T0a6EIAxEBwTBaPz/P/TVGBMFUS9Dlg0ad/f2BTFzaGkHccbAK/Z9xzAMaNsWjW2gtYasJIQQWZJWVe6qqkLXdXDOg99CCiihIOUVFGWmfMA0TRF0sNairmsodQVlFpZr3/cwxiRw8xtCCDiOA/kmjxAPIMgsq1uRwfM4E/gRKkGWGraAsIffUAaNNdg2j2OPJcZsj42g+B7LsiSAJX8t7w7m/b+geZ7h1vU9r59QmtnqojtiWXRHHPhXiID3Ps1MaQVVqWSpj1AGrLHQtU6uYBb68BHKNqIrMlD672JYdmccx2TYpnn2HTWXTHwa7FQdy6njxXmHMgMBxgXiDwqT+NWp+1ui5g/scn4798MbBAAAAABJRU5ErkJggg==")'
        }
      },
      '&__content': {
        display: 'inline-block',
        verticalAlign: 'middle',
        minHeight: props.style && props.style.height || null
      }
    }
  }, MEDIA_QUERIES.XS, {
    '.aph-tooltip': {
      fontSize: '14px',
      lineHeight: '20px'
    }
  });
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2x0aXAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCdUIiLCJmaWxlIjoiVG9vbHRpcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDdXN0b21pemVkIGZyb20gJ3JlYWN0LXRvb2x0aXAnIHByb2plY3Q6XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3d3YXluZS9yZWFjdC10b29sdGlwXG4gKiBodHRwczovL3JlYWN0LXRvb2x0aXAubmV0bGlmeS5jb20vXG4gKi9cblxuLyogQ29tcG9uZW50IFdyYXBwZXIgKi9cbmNvbnN0IFRvb2x0aXBXcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBsaW5lSGVpZ2h0ICAgOiAwLFxuXG4gICAgJy5hcGgtdG9vbHRpcCc6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcblxuICAgICAgICBmb250U2l6ZSAgOiAnMTJweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICAgICAgdGV4dEFsaWduIDogKHByb3BzLnBsYWNlID09PSAncmlnaHQnID8gJ2xlZnQnIDogKHByb3BzLnBsYWNlID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2NlbnRlcicpKSxcblxuICAgICAgICBtYXhXaWR0aCAgICA6ICcyMzBweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG5cbiAgICAgICAgJyYudHlwZS1lcnJvcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLkVSUk9SLFxuXG4gICAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BDb2xvcjogQ09MT1JTLkVSUk9SLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtcmlnaHQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHRDb2xvcjogIENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWJvdHRvbTphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogIENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWxlZnQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdENvbG9yOiAgQ09MT1JTLkVSUk9SLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAnJi50eXBlLXdhcm5pbmcnOiB7XG4gICAgICAgICAgICBjb2xvciAgICAgICAgICA6IENPTE9SUy5CTEFDSyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLldBUk5JTkcsXG5cbiAgICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLXJpZ2h0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6ICBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWJvdHRvbTphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogIENPTE9SUy5XQVJOSU5HLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtbGVmdDphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0Q29sb3I6ICBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyYudHlwZS1zdWNjZXNzJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuU1VDQ0VTUyxcblxuICAgICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtcmlnaHQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHRDb2xvcjogIENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtYm90dG9tOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAgQ09MT1JTLlNVQ0NFU1MsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1sZWZ0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRDb2xvcjogIENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAnJi50eXBlLWluZm8nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5JTkZPLFxuXG4gICAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BDb2xvcjogQ09MT1JTLklORk8sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1yaWdodDphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodENvbG9yOiAgQ09MT1JTLklORk8sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1ib3R0b206YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICBDT0xPUlMuSU5GTyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWxlZnQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdENvbG9yOiAgQ09MT1JTLklORk8sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgICcmLnBsYWNlLXJpZ2h0LCAmLnBsYWNlLWJvdHRvbSwgJi5wbGFjZS1sZWZ0Jzoge1xuICAgICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgICcmLnR5cGUtbGlnaHQnOiB7XG4gICAgICAgICAgICBjb2xvciAgICAgICAgICA6IENPTE9SUy5EQVJLX0dSRVksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5XSElURSxcbiAgICAgICAgICAgIGJveFNoYWRvdyAgICAgIDogJzAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuXG4gICAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICB3aWR0aCA6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJy0xMHB4JyxcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplICA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgOiAndXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCRUFBQUFOQ0FZQUFBQlBlWVVhQUFBQmZHbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FxU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ3Y4UEF6Y0RESU1SZ3hTQ2VtRnhjNEJnUTRNT0FFM3k3eHNBSW9pL3Jnc3hLOC94NTA2YTFmUDRXTnErWmNsWWxPcmoxZ1FGM1NtcHhNZ01ESXdlUW5aeFNuSndMWk9jQTJUckpCVVVsUVBZTUlGdTN2S1FBeEQ0QlpJc1VBUjBJWk44QnNkTWg3QThnZGhLWXpjUUNWaE1TNUF4a1N3RFpBa2tRdGdhSW5RNWhXNERZeVJtSktVQzJCOGd1aUJ2QWdOUERSY0hjd0ZMWGtZQzdTUWE1T2FVd08wQ2h4Wk9hRnhvTWNnY1F5ekI0TUxnd0tEQ1lNeGd3V0RMb01qaVdwRmFVZ0JRNjV4ZFVGbVdtWjVRb09BSkRObFhCT1QrM29MUWt0VWhId1RNdldVOUh3Y2pBMEFDa0RoUm5FS00vQjRGTlp4UTdqeERMWDhqQVlLbk13TURjZ3hCTG1zYkFzSDBQQTRQRUtZU1l5andHQm41ckJvWnQ1d29TaXhMaERtZjh4a0tJWDV4bWJBUmg4emd4TUxEZSsvLy9zeG9EQS9za0JvYS9FLy8vLzczby8vKy9pNEgyQStQc1FBNEFKSGRwNEl4ckVnOEFBQUlDYVZSWWRGaE5URHBqYjIwdVlXUnZZbVV1ZUcxd0FBQUFBQUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pZVFZBZ1EyOXlaU0ExTGpRdU1DSStDaUFnSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0NpQWdJQ0FnSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDBhV1ptUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzUnBabVl2TVM0d0x5SStDaUFnSUNBZ0lDQWdJRHhsZUdsbU9sQnBlR1ZzV1VScGJXVnVjMmx2Ymo0eE56d3ZaWGhwWmpwUWFYaGxiRmxFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4bGVHbG1PbEJwZUdWc1dFUnBiV1Z1YzJsdmJqNHhNend2WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2xSaXRFQUFBQS9VbEVRVlFvRmEyUzYycUVNQkNGVDdJeENvcjQvby9ZL1NNaXVMazNaN0tXSXJTMDNRNGtKSk16MzF4VWxXcDQwZlNMOFJMK1A1Q1VFcmorYW93MTk3YzdZb3FZcGduTHN2eUt0YTRyOW4ySEhzY1JYTTU1Yk52Mll3aTFqR0dzY3M2Vm5ESjg4TlhwMFBjOTVubitGdFlBVFdzN0MxVjdLaVVYYWNuN0JyTFdmZ2tpZ0RvbW84N2NEQlQvazJySU9TUEdpT0FESHU0aGdtdEZKMkRvQjNTMmd6RUdXbXZJSjFaS3lZVk9QbEpFR0lkMkdzLzBYUUdNTmFmb000Zysza09kMDNFY0lvbWhBb1lCcGpNZkZWQWpXdWxGam0xamErZU1PSEMyU1pPeWI3ck5RQ3RKMGlKcXdpdUVEd0o2d25pbU1hdDZCcDhWeUVQZDNnRnRhWjZGU0NZS253QUFBQUJKUlU1RXJrSmdnZz09XCIpJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLXJpZ2h0OmFmdGVyLCAmLnBsYWNlLWxlZnQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgd2lkdGggICAgOiAnOHB4JyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctNS41cHgnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtcmlnaHQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBMEFBQUFSQ0FZQUFBQUcveWFjQUFBQmZHbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FxU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ3Y4UEF6Y0RESU1SZ3hTQ2VtRnhjNEJnUTRNT0FFM3k3eHNBSW9pL3Jnc3hLOC94NTA2YTFmUDRXTnErWmNsWWxPcmoxZ1FGM1NtcHhNZ01ESXdlUW5aeFNuSndMWk9jQTJUckpCVVVsUVBZTUlGdTN2S1FBeEQ0QlpJc1VBUjBJWk44QnNkTWg3QThnZGhLWXpjUUNWaE1TNUF4a1N3RFpBa2tRdGdhSW5RNWhXNERZeVJtSktVQzJCOGd1aUJ2QWdOUERSY0hjd0ZMWGtZQzdTUWE1T2FVd08wQ2h4Wk9hRnhvTWNnY1F5ekI0TUxnd0tEQ1lNeGd3V0RMb01qaVdwRmFVZ0JRNjV4ZFVGbVdtWjVRb09BSkRObFhCT1QrM29MUWt0VWhId1RNdldVOUh3Y2pBMEFDa0RoUm5FS00vQjRGTlp4UTdqeERMWDhqQVlLbk13TURjZ3hCTG1zYkFzSDBQQTRQRUtZU1l5andHQm41ckJvWnQ1d29TaXhMaERtZjh4a0tJWDV4bWJBUmg4emd4TUxEZSsvLy9zeG9EQS9za0JvYS9FLy8vLzczby8vKy9pNEgyQStQc1FBNEFKSGRwNEl4ckVnOEFBQUdiYVZSWWRGaE5URHBqYjIwdVlXUnZZbVV1ZUcxd0FBQUFBQUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pZVFZBZ1EyOXlaU0ExTGpRdU1DSStDaUFnSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0NpQWdJQ0FnSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklqNEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlVHbDRaV3hZUkdsdFpXNXphVzl1UGpFelBDOWxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WlJHbHRaVzV6YVc5dVBqRTNQQzlsZUdsbU9sQnBlR1ZzV1VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBZ0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ3BFcjBEOEFBQUVOU1VSQlZDZ1ZoWkxyam9RZ0RJWExSY0RFR1AvTXZ2OHpHczBJQ0c3YldjZ3cyUkVTSTRGK0xlZTA0c0lGSHl2bkRPZDVnajg4N1BzT2o1OEhLS1ZxbEt5N3Z3M2x1UElGT1NHWVR2NCtZeHFJQUs2Q3dTRUdDQ0hDTkUxTkZVcWdTNVlLNExOQ0NPQzloM0YwTU05ekNhbC9ydlFPUk14T2dMWDJYNEJJV1RTUWNBSU9mNEF4NWl0UUlSWWMwUzJzMEFNSTBzV3BpTUt0c3l5Y0x1NldMbnFzY3loOHZJdXRkNDNsOWJTemtVSUlrRkppOXcvWXRxMFQvcnFXUWlLa0pBeUQ0YkZaMTdVTGNpV3ROT2hCYzIrb3NUMlFJYXFtdFliQkRPQ3M0NG00QTltSW9xdUFOQTNVczI5Z25iMTNrRVJSSzU3UGd3ZDRXWlpHWjJONUJWR2pRV01NUHBjY1RTazEwQzlsL0tNZE01aktSd0FBQUFCSlJVNUVya0pnZ2c9PVwiKScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1ib3R0b206YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCRUFBQUFOQ0FZQUFBQlBlWVVhQUFBQmZHbERRMUJKUTBNZ1VISnZabWxzWlFBQUtKRmpZR0FxU1N3b3lHRmhZR0RJelNzcENuSjNVb2lJakZKZ3Y4UEF6Y0RESU1SZ3hTQ2VtRnhjNEJnUTRNT0FFM3k3eHNBSW9pL3Jnc3hLOC94NTA2YTFmUDRXTnErWmNsWWxPcmoxZ1FGM1NtcHhNZ01ESXdlUW5aeFNuSndMWk9jQTJUckpCVVVsUVBZTUlGdTN2S1FBeEQ0QlpJc1VBUjBJWk44QnNkTWg3QThnZGhLWXpjUUNWaE1TNUF4a1N3RFpBa2tRdGdhSW5RNWhXNERZeVJtSktVQzJCOGd1aUJ2QWdOUERSY0hjd0ZMWGtZQzdTUWE1T2FVd08wQ2h4Wk9hRnhvTWNnY1F5ekI0TUxnd0tEQ1lNeGd3V0RMb01qaVdwRmFVZ0JRNjV4ZFVGbVdtWjVRb09BSkRObFhCT1QrM29MUWt0VWhId1RNdldVOUh3Y2pBMEFDa0RoUm5FS00vQjRGTlp4UTdqeERMWDhqQVlLbk13TURjZ3hCTG1zYkFzSDBQQTRQRUtZU1l5andHQm41ckJvWnQ1d29TaXhMaERtZjh4a0tJWDV4bWJBUmg4emd4TUxEZSsvLy9zeG9EQS9za0JvYS9FLy8vLzczby8vKy9pNEgyQStQc1FBNEFKSGRwNEl4ckVnOEFBQUlDYVZSWWRGaE5URHBqYjIwdVlXUnZZbVV1ZUcxd0FBQUFBQUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pZVFZBZ1EyOXlaU0ExTGpRdU1DSStDaUFnSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0NpQWdJQ0FnSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDBhV1ptUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzUnBabVl2TVM0d0x5SStDaUFnSUNBZ0lDQWdJRHhsZUdsbU9sQnBlR1ZzV1VScGJXVnVjMmx2Ymo0eE56d3ZaWGhwWmpwUWFYaGxiRmxFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4bGVHbG1PbEJwZUdWc1dFUnBiV1Z1YzJsdmJqNHhNend2WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2xSaXRFQUFBQkNVbEVRVlFvRmEyUzdhNkRJQXlHQ3pLWmlmSCtyOUlmUmdjQ3d2cldzTEVsSjl0SjFvUlE2Y3REUDFTRmpSckRwNng4N2dncHBVaHBYdGg1dlp0cEQrcmxkQ1RLUjZhY3M0UzExcVE3VGFaanVUNmg3VDArT2cwQVhJb3BVZ3lSdkhmbjY1d0JmSndoQmcyMHJVa21GWkJTRXZHKzcyU3Zsb1poRU8xeEhBenlaSXVWYjJNTUlidGFtbmtIK04xVDMvYzBqdVBqTWZqSUFMRnFMVWlsbUFwNkVFSWdaQURBTkUxVis3SXZ5eUk2YTYzbzBDTnB1THU1RXVJSlFQQXZRS1VCSk9VQ2RPbWw0V3FlNXhLNGFjTncvUWhvUWM2aDdJdE16R3piSnZWL3lxQUNzRU9MSHEzcktoREZFeWxkMTdXYXIzMU1EYVo0T3E5RC94cnhGRDUrdHVmUi83MmZRTzRxYmF1SVgzcTJYQUFBQUFCSlJVNUVya0pnZ2c9PVwiKScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1sZWZ0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTBBQUFBUkNBWUFBQUFHL3lhY0FBQUJmR2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBcVNTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmd2OFBBemNERElNUmd4U0NlbUZ4YzRCZ1E0TU9BRTN5N3hzQUlvaS9yZ3N4SzgveDUwNmExZlA0V05xK1pjbFlsT3JqMWdRRjNTbXB4TWdNREl3ZVFuWnhTbkp3TFpPY0EyVHJKQlVVbFFQWU1JRnUzdktRQXhENEJaSXNVQVIwSVpOOEJzZE1oN0E4Z2RoS1l6Y1FDVmhNUzVBeGtTd0RaQWtrUXRnYUluUTVoVzREWXlSbUpLVUMyQjhndWlCdkFnTlBEUmNIY3dGTFhrWUM3U1FhNU9hVXdPMENoeFpPYUZ4b01jZ2NReXpCNE1MZ3dLRENZTXhnd1dETG9NamlXcEZhVWdCUTY1eGRVRm1XbVo1UW9PQUpETmxYQk9UKzNvTFFrdFVoSHdUTXZXVTlId2NqQTBBQ2tEaFJuRUtNL0I0Rk5aeFE3anhETFg4akFZS25Nd01EY2d4Qkxtc2JBc0gwUEE0UEVLWVNZeWp3R0JuNXJCb1p0NXdvU2l4TGhEbWY4eGtLSVg1eG1iQVJoOHpneE1MRGUrLy8vc3hvREEvc2tCb2EvRS8vLy83M28vLysvaTRIMkErUHNRQTRBSkhkcDRJeHJFZzhBQUFJQ2FWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenAwYVdabVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM1JwWm1Zdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4bGVHbG1PbEJwZUdWc1dVUnBiV1Z1YzJsdmJqNHhOend2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ0lEeGxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajR4TXp3dlpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29sUml0RUFBQUJEMGxFUVZRb0ZZMlQwYTZFSUF4RUJ3VEJhUHovUC9UVkdCTUZVUzlEbGcwYWQvZjJCVEZ6YUdrSGNjYkFLL1o5eHpBTWFOc1dqVzJndFlhc0pJUVFXWkpXVmU2cXFrTFhkWERPZzk5Q0NpaWhJT1VWRkdXbWZNQTBUUkYwc05haXJtc29kUVZsRnBacjMvY3d4aVJ3OHh0Q0NEaU9BL2ttanhBUElNZ3NxMXVSd2ZNNEUvZ1JLa0dXR3JhQXNJZmZVQWFOTmRnMmoyT1BKY1pzajQyZytCN0xzaVNBSlg4dDd3N20vYitnZVo3aDF2VTlyNTlRbXRucW9qdGlXWFJISFBoWGlJRDNQczFNYVFWVnFXU3BqMUFHckxIUXRVNnVZQmI2OEJIS05xSXJNbEQ2NzJKWWRtY2N4MlRZcG5uMkhUV1hUSHdhN0ZRZHk2bmp4WG1ITWdNQnhnWGlEd3FUK05XcCsxdWk1Zy9zY240Nzk4TWJCQUFBQUFCSlJVNUVya0pnZ2c9PVwiKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgICcmX19jb250ZW50Jzoge1xuICAgICAgICAgICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIG1pbkhlaWdodCAgICA6IHByb3BzLnN0eWxlICYmIHByb3BzLnN0eWxlLmhlaWdodCB8fCBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgJy5hcGgtdG9vbHRpcCc6IHtcbiAgICAgICAgICAgIGZvbnRTaXplICA6ICcxNHB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgfSxcbiAgICB9LFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY29uc3QgVG9vbHRpcCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBsZXQgY3VzdG9tUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgY3VzdG9tUHJvcHMuaWQgID0gY3VzdG9tUHJvcHMuaWQgfHwgYEFwaFRvb2x0aXAke01hdGgucmFuZG9tKCl9YDtcblxuICAgIGRlbGV0ZSBjdXN0b21Qcm9wcy5jaGlsZHJlbjtcbiAgICBkZWxldGUgY3VzdG9tUHJvcHMudGlwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvb2x0aXBXcmFwcGVyXG4gICAgICAgICAgICB7Li4uY3VzdG9tUHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn0+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXRpcD17cHJvcHMudGlwfVxuICAgICAgICAgICAgICAgICAgZGF0YS1mb3I9e2N1c3RvbVByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLXRvb2x0aXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8UmVhY3RUb29sdGlwXG4gICAgICAgICAgICAgICAgey4uLmN1c3RvbVByb3BzfVxuICAgICAgICAgICAgICAgIGRlbGF5SGlkZT17Y3VzdG9tUHJvcHMuZGVsYXlIaWRlIHx8ICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TSVpFUy5TTSA/IDUwMCA6IDApfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC10b29sdGlwICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1Rvb2x0aXBXcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogQ29tcG9uZW50IGRlZmF1bHQgcHJvcGVydGllcyAqL1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYm9yZGVyOiBmYWxzZSxcbiAgICBlZmZlY3Q6ICdzb2xpZCcsXG4gICAgcGxhY2UgOiAndG9wJyxcbiAgICB0eXBlICA6ICdsaWdodCcsXG59O1xuXG4vKiBDb21wb25lbnQgcHJvcGVydGllcyB0eXBlcyAqL1xuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgdGlwICAgICAgOiBwcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgZGVsYXlIaWRlOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGVmZmVjdCAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZSAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZSAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIl19 */");
/* Component it self */


var Tooltip = forwardRef(function (props, ref) {
  var customProps = Object.assign({}, props);
  customProps.id = customProps.id || "AphTooltip".concat(Math.random());
  delete customProps.children;
  delete customProps.tip;
  return React.createElement(TooltipWrapper, _extends({}, customProps, {
    ref: ref
  }), React.createElement("span", {
    "data-tip": props.tip,
    "data-for": customProps.id,
    className: "aph-tooltip__content"
  }, props.children), React.createElement(ReactTooltip, _extends({}, customProps, {
    delayHide: customProps.delayHide || (window.innerWidth > SCREEN_SIZES.SM ? 500 : 0),
    className: "aph-tooltip ".concat(props.className || '')
  })));
});
/* Component default properties */

Tooltip.defaultProps = {
  border: false,
  effect: 'solid',
  place: 'top',
  type: 'light'
};
/* Component properties types */

Tooltip.propTypes = {
  children: propTypes.any.isRequired,
  tip: propTypes.any.isRequired,
  delayHide: propTypes.number,
  effect: propTypes.string,
  place: propTypes.string,
  type: propTypes.string
};

/* CSS Selector */

var selector$1 = '.aph-modal';
/* Modal Styled */

var ModalStyled = _styled("dialog", {
  target: "e173h3s00"
})("box-sizing:border-box;overflow:hidden;position:fixed;display:none;opacity:0;z-index:", ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function (props) {
  return props.hasFooter ? SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '50%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.1 : 0.2;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear;color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";box-shadow:0 0 10px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";border-radius:", SIZES.LG.RADIUS, " ", SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector$1, "{&__container{min-height:100%;max-height:100%;overflow:auto;&__title{padding-top:20px;}&__header{padding-top:5px;padding-bottom:5px;}&__content{width:100%;}}&__footer{max-height:", SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", MEDIA_QUERIES.LT.SM, "{padding:", GRID.CONTAINER_PADDING_XS + GRID.UNIT, " 0;right:0;left:0;", selector$1, "{&__container{&__title,&__header{padding-top:0;}&__title{margin:15px 0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiJNb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMfTtcbiAgICB3aWR0aCAgIDogYXV0bztcbiAgICBoZWlnaHQgIDogYXV0bztcbiAgICB0b3AgICAgIDogNDBweDtcbiAgICByaWdodCAgIDogNDBweDtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogNDBweDtcbiAgICBtYXJnaW4gIDogMDtcbiAgICBwYWRkaW5nIDogMCAwICR7cHJvcHMgPT4gcHJvcHMuaGFzRm9vdGVyID8gU0laRVMuQUNUSU9OX0JBUl9IRUlHSFQgOiAwfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICc1MCUnfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBkaXNwbGF5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4yIDogMC4xfXMgbGluZWFyLFxuICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4xIDogMC4yfXMgbGluZWFyLFxuICAgICAgICB0cmFuc2Zvcm0gJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjIgOiAwLjF9cyBsaW5lYXJcbiAgICA7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDEwcHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtTSVpFUy5MRy5SQURJVVN9ICR7U0laRVMuTEcuUkFESVVTfSAwIDA7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdyAgOiBhdXRvO1xuXG4gICAgICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3AgICA6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Zvb3RlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAke1NJWkVTLkFDVElPTl9CQVJfSEVJR0hUfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcblxuICAgICR7TUVESUFfUVVFUklFUy5MVC5TTX0ge1xuICAgICAgICBwYWRkaW5nOiAkeyhHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKX0gMDtcbiAgICAgICAgcmlnaHQgIDogMDtcbiAgICAgICAgbGVmdCAgIDogMDtcblxuICAgICAgICAke3NlbGVjdG9yfSB7XG4gICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICZfX3RpdGxlLFxuICAgICAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0eWxlZDtcbiJdfQ== */"));

/* Modal Overlay Styles */

var ModalOverlayStyled = _styled("div", {
  target: "e1bytuoh0"
})("position:fixed;z-index:", ZINDEX.MODAL - 1, ";top:0;right:0;bottom:0;left:0;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsT3ZlcmxheVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPcUMiLCJmaWxlIjoiTW9kYWxPdmVybGF5U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBaSU5ERVggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBNb2RhbCBPdmVybGF5IFN0eWxlcyAqL1xuY29uc3QgTW9kYWxPdmVybGF5U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMIC0gMX07XG4gICAgdG9wICAgICA6IDA7XG4gICAgcmlnaHQgICA6IDA7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbE92ZXJsYXlTdHlsZWQ7XG4iXX0= */"));

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Component Itself */

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}"
} : {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTzJDIiwiZmlsZSI6Ik1vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7XG4gICAgSDEsXG4gICAgRmxleCxcbiAgICBBY3Rpb25CYXIsXG59IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmltcG9ydCBNb2RhbFN0eWxlZCBmcm9tICcuL01vZGFsU3R5bGVzJztcbmltcG9ydCBNb2RhbE92ZXJsYXlTdHlsZWQgZnJvbSAnLi9Nb2RhbE92ZXJsYXlTdHlsZXMnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBNb2RhbCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcblxuICAgIC8qKlxuICAgICAqIEdsb2JhbCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgICB9ID0gZG9jdW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBJbmhlcml0IFByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjb250ZW50SnVzdGlmeSxcbiAgICAgICAgYWxpZ25JdGVtcyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgZm9vdGVyUHJvcHMsXG4gICAgICAgIG92ZXJsYXlQcm9wcyxcblxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICBvcGVuZWQsXG4gICAgICAgIG9wZW5lZENhbGxiYWNrLFxuICAgICAgICBjbG9zZU9uRXNjYXBlLFxuICAgICAgICBjbG9zZUJ5RXNjYXBlLFxuICAgICAgICB1bmJsb2NrU2Nyb2xsaW5nLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIGFjdGl2ZSwgc2V0QWN0aXZlIF0gICAgICAgICAgICAgPSB1c2VTdGF0ZShvcGVuZWQpO1xuICAgIGNvbnN0IFsgdmlzaWJsZSwgc2V0VmlzaWJsZSBdICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB1bm1vdW50ZWQsIHNldFVubW91bnRlZCBdICAgICAgID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgYWN0aXZlVGltZXIsIHNldEFjdGl2ZVRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgdmlzaWJsZVRpbWVyLCBzZXRWaXNpYmxlVGltZXIgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogU3RhdGUgcmVmZXJlbmNlXG4gICAgICovXG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBjbG9zZSBieSBlc2NhcGUga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VPblNjYXBlIChldnQpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIGtleUNvZGUsIHRhcmdldCB9ID0gKGV2dCB8fCB7fSk7XG4gICAgICAgIGNvbnN0IGlzRXNjUHJlc3NlZCA9IChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5Q29kZSA9PT0gMjcpO1xuXG4gICAgICAgIGlmICghaXNFc2NQcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiZcbiAgICAgICAgICAgICh0eXBlb2YgZXZ0LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gaGFuZGxlIHdpdGggbW9kYWwgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbiAoKSB7XG4gICAgICAgIGlmIChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDbG9zZU9uU2NhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50IExpc3RlbmVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVubGlzdGVuICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gY2xvc2UgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCB8fFxuICAgICAgICAgICAgKGV2dCAmJlxuICAgICAgICAgICAgZXZ0LnRhcmdldCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldFZpc2libGVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgb3BlbmVkQ2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9LCAxMDApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2l0aCBEcm9wZG93biBvcGVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRE9NIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlT3BlbihldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcblxuICAgICAgICBpZiAodW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldEFjdGl2ZVRpbWVyKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgbGlzdGVuKCk7XG4gICAgICAgIH0sIDUwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2F0Y2ggZm9yIGBvcGVuZWRgIHByb3AgY2hhbmdlc1xuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlbmVkIHx8IGFjdGl2ZSkge1xuICAgICAgICAgICAgaGFuZGxlT3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgIH0sIFsgb3BlbmVkIF0pO1xuXG4gICAgLyoqXG4gICAgICogVW5tb3VudFxuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgeyghYWN0aXZlIHx8ICF2aXNpYmxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICA8TW9kYWxPdmVybGF5U3R5bGVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpICYmIGhhbmRsZUNsb3NlKGV2dCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbC1vdmVybGF5ICR7YWN0aXZlID8gJyBhY3RpdmUnIDogJyd9JHt2aXNpYmxlID8gJyB2aXNpYmxlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdmVybGF5UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TW9kYWxTdHlsZWRcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICByZWY9e21vZGFsUmVmfVxuICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICBvcGVuZWQ9e2FjdGl2ZSAmJiB2aXNpYmxlfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgICAgIGhhc0Zvb3Rlcj17KGZvb3RlciB8fCBPYmplY3Qua2V5cyhmb290ZXJQcm9wcykubGVuZ3RoKSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWwgJHtjbGFzc05hbWUgfHwgJyd9JHthY3RpdmUgPyAnIGFjdGl2ZScgOiAnJ30ke3Zpc2libGUgPyAnIHZpc2libGUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgeyghYWN0aXZlIHx8ICF2aXNpYmxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1bmJsb2NrU2Nyb2xsaW5nID8gKG51bGwpIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCF0aXRsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIMSBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9fdGl0bGVcIiBib2xkIGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWhlYWRlcikgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17Y29udGVudEp1c3RpZnkgfHwgJ3N0YXJ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7IGZsZXg6IDEsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1tb2RhbF9fY29udGFpbmVyX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHN0eWxlcz17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5mb290ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbW9kYWxfX2NvbnRlbnRfX2Zvb3RlciAke2Zvb3RlclByb3BzLmNsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2Zvb3RlclByb3BzLnZpc2libGUgfHwgKHR5cGVvZiBmb290ZXJQcm9wcy52aXNpYmxlID09PSAndW5kZWZpbmVkJyAmJiBmb290ZXIgPyB0cnVlIDogZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb290ZXJQcm9wcy5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgIDogJzEwcHggMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2luaXRpYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Nb2RhbFN0eWxlZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IHByb3BzICovXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGUgOiAnJyxcbiAgICBoZWFkZXI6IHVuZGVmaW5lZCxcblxuICAgIG9wZW5lZCAgICAgICAgICA6IGZhbHNlLFxuICAgIG9wZW5lZENhbGxiYWNrICA6ICgpID0+IHt9LFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IGZhbHNlLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogRmxleCBganVzdGlmeS1jb250ZW50YFxuICAgICAqIGZsZXgtc3RhcnQgfHwgY2VudGVyIHx8IGZsZXgtZW5kXG4gICAgICovXG4gICAgY29udGVudEp1c3RpZnk6ICdmbGV4LXN0YXJ0JyxcblxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvb3RlclByb3BzOiB7fSxcbiAgICBzdHlsZXMgICAgIDoge30sXG5cbiAgICBvdmVybGF5UHJvcHM6IHt9LFxufTtcblxuLyogUHJvcCBUeXBlcyAqL1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlIDogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWxpZ25JdGVtczogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0= */"
};

var Modal = forwardRef(function (props, ref) {
  /**
   * Global props
   */
  var _document = document,
      addEventListener = _document.addEventListener,
      removeEventListener = _document.removeEventListener;
  /**
   * Inherit Props
   */

  var title = props.title,
      header = props.header,
      contentJustify = props.contentJustify,
      alignItems = props.alignItems,
      children = props.children,
      footer = props.footer,
      footerProps = props.footerProps,
      overlayProps = props.overlayProps,
      className = props.className,
      styles = props.styles,
      opened = props.opened,
      openedCallback = props.openedCallback,
      closeOnEscape = props.closeOnEscape,
      closeByEscape = props.closeByEscape,
      unblockScrolling = props.unblockScrolling,
      rest = _objectWithoutProperties(props, ["title", "header", "contentJustify", "alignItems", "children", "footer", "footerProps", "overlayProps", "className", "styles", "opened", "openedCallback", "closeOnEscape", "closeByEscape", "unblockScrolling"]);
  /**
   * State values
   */


  var _useState = useState(opened),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = useState(opened),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      unmounted = _useState6[0],
      setUnmounted = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      activeTimer = _useState8[0],
      setActiveTimer = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      visibleTimer = _useState10[0],
      setVisibleTimer = _useState10[1];
  /**
   * State reference
   */


  var modalRef = useRef(null);
  /**
   * Handle with close by escape key
   *
   * @param {object} evt - DOM click event
   */

  function handleCloseOnScape(evt) {
    var _ref2 = evt || {},
        key = _ref2.key,
        keyCode = _ref2.keyCode,
        target = _ref2.target;

    var isEscPressed = key === 'Escape' || key === 'Esc' || keyCode === 27;

    if (!isEscPressed) {
      return;
    }

    if (evt && evt.stopPropagation && typeof evt.stopPropagation === 'function') {
      evt.stopPropagation();
    }

    handleClose();
    return;
  }
  /**
   * Add Event Listeners to handle with modal visibility
   */


  function listen() {
    if (closeOnEscape || closeByEscape) {
      addEventListener('keydown', handleCloseOnScape);
    }
  }
  /**
   * Remove Event Listeners
   */


  function unlisten() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
    removeEventListener('keydown', handleCloseOnScape);
  }
  /**
   * Handle with Dropdown close event
   *
   * @param {object} evt - DOM click event
   */


  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && modalRef && modalRef.current && modalRef.current.contains(evt.target)) {
      return;
    }

    unlisten();
    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
      openedCallback(false);
      modalRef.current.focus();
    }, 100));
  }
  /**
   * Handle with Dropdown open event
   *
   * @param {object} evt - DOM click event
   */


  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (unmounted) {
      return;
    }

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setActive(true);
      listen();
    }, 50));
  }
  /**
   * Watch for `opened` prop changes
   */


  useEffect(function () {
    if (!opened) {
      handleClose();
      unlisten();
      return function cleanup() {
        unlisten();
      };
    }

    if (opened || active) {
      handleOpen();
    }

    return function cleanup() {
      unlisten();
    };
  }, [opened]);
  /**
   * Unmount
   */

  useEffect(function () {
    return function cleanup() {
      unlisten();
    };
  }, []);
  /**
   * Render
   */

  return React.createElement(React.Fragment, null, !active || !visible ? null : React.createElement(ModalOverlayStyled, _extends({
    onClick: function onClick(evt) {
      return (closeOnEscape || closeByEscape) && handleClose(evt);
    },
    className: "aph-modal-overlay ".concat(active ? ' active' : '').concat(visible ? ' visible' : '')
  }, overlayProps)), React.createElement(ModalStyled, _extends({}, rest, {
    ref: modalRef,
    open: true,
    opened: active && visible,
    role: "dialog",
    styles: styles,
    hasFooter: footer || Object.keys(footerProps).length ? true : false,
    className: "aph-modal ".concat(className || '').concat(active ? ' active' : '').concat(visible ? ' visible' : '')
  }), !active || !visible ? null : React.createElement(React.Fragment, null, unblockScrolling ? null : React.createElement(Global, {
    styles: _ref
  }), React.createElement(Flex$1, {
    flex: true,
    flexDirection: "column",
    className: "aph-modal__container"
  }, !title ? null : React.createElement(H1, {
    className: "aph-modal__container__title",
    bold: true,
    center: true
  }, title), !header ? null : React.createElement("header", {
    className: "aph-modal__container__header"
  }, header), React.createElement(Flex$1, {
    flex: true,
    alignItems: "center",
    justifyContent: contentJustify || 'start',
    styles: {
      flex: 1,
      width: '100%'
    },
    flexDirection: "column",
    className: "aph-modal__container__content"
  }, React.createElement(Flex$1, {
    styles: {
      width: '100%'
    }
  }, children))), React.createElement(ActionBar, _extends({}, footerProps, {
    className: "aph-modal__content__footer ".concat(footerProps.className || ''),
    visible: footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false),
    styles: _objectSpread$b({}, footerProps.styles, {
      padding: '10px 0',
      minHeight: 'initial'
    })
  }), footer))));
});
/* Default props */

Modal.defaultProps = {
  title: '',
  header: undefined,
  opened: false,
  openedCallback: function openedCallback() {},
  closeOnEscape: false,
  unblockScrolling: false,

  /**
   * Flex `justify-content`
   * flex-start || center || flex-end
   */
  contentJustify: 'flex-start',
  alignItems: 'center',
  footerProps: {},
  styles: {},
  overlayProps: {}
};
/* Prop Types */

Modal.propTypes = {
  title: propTypes.any,
  header: propTypes.any,
  opened: propTypes.bool,
  openedCallback: propTypes.func.isRequired,
  closeOnEscape: propTypes.bool,
  unblockScrolling: propTypes.bool,
  contentJustify: propTypes.string,
  alignItems: propTypes.string,
  overlayProps: propTypes.object
};

/* Component Styles */

var SidePillStyled = _styled("aside", {
  target: "e1pc5nzq0"
})("box-sizing:border-box;display:flex;align-items:center;justify-content:", function (props) {
  return props.center ? 'center' : props.right ? 'flex-end' : 'flex-start';
}, ";min-width:70px;min-height:60px;padding:", function (props) {
  return props.right ? '0 15px 0 25px' : '0 20px';
}, ";position:absolute;top:10px;left:", function (props) {
  return props.center ? '50%' : props.right ? null : '-15%';
}, ";right:", function (props) {
  return props.right && !props.center ? '-15%' : null;
}, ";flex-direction:", function (props) {
  return props.right ? 'row-reverse' : null;
}, ";font-weight:500;font-size:20px;line-height:30px;color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";box-shadow:0 0 5px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'black', 'original', 0.25);
}, ";border-radius:", function (props) {
  return props.center ? '30px' : props.right ? '30px 0 0 30px' : '0 30px 30px 0';
}, ";transition:all 0.15s linear 0s;img{margin-left:", function (props) {
  return props.right ? 0 : '20px';
}, ";margin-right:", function (props) {
  return props.right ? '20px' : 0;
}, ";}.aph-sidepill{&__content,&__hoverable{display:flex;align-items:center;padding:0;margin:0;}}&:hover{left:", function (props) {
  return props.right ? null : '0';
}, ";right:", function (props) {
  return !props.right ? null : '0';
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVQaWxsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiJTaWRlUGlsbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQXBocm9kaXRlIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgU2lkZVBpbGxTdHlsZWQgPSBzdHlsZWQuYXNpZGVgXG4gICAgYm94LXNpemluZyAgICAgOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBwcm9wcy5yaWdodCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9O1xuICAgIG1pbi13aWR0aCAgICAgIDogNzBweDtcbiAgICBtaW4taGVpZ2h0ICAgICA6IDYwcHg7XG4gICAgcGFkZGluZyAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJzAgMTVweCAwIDI1cHgnIDogJzAgMjBweCd9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICA6IDEwcHg7XG4gICAgbGVmdCAgICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnNTAlJyA6IHByb3BzLnJpZ2h0ID8gbnVsbCA6ICctMTUlJyl9O1xuICAgIHJpZ2h0ICAgIDogJHtwcm9wcyA9PiAocHJvcHMucmlnaHQgJiYgIXByb3BzLmNlbnRlciA/ICctMTUlJyA6IG51bGwpfTtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5yaWdodCA/ICdyb3ctcmV2ZXJzZScgOiBudWxsKX07XG5cbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZSAgOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJzMwcHgnIDogcHJvcHMucmlnaHQgPyAnMzBweCAwIDAgMzBweCcgOiAnMCAzMHB4IDMwcHggMCd9O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhciAwcztcblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0IDogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/IDAgOiAnMjBweCd9O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMucmlnaHQgPyAnMjBweCcgOiAwfTtcbiAgICB9XG5cbiAgICAuYXBoLXNpZGVwaWxsIHtcbiAgICAgICAgJl9fY29udGVudCxcbiAgICAgICAgJl9faG92ZXJhYmxlIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgbGVmdCA6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ICA/IG51bGwgOiAnMCcpfTtcbiAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKCFwcm9wcy5yaWdodCA/IG51bGwgOiAnMCcpfTtcbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFNpZGVQaWxsU3R5bGVkO1xuIl19 */"));

/* Component Itself */

var SidePill = memo(function (props) {
  /**
   * Inherit props
   */
  var className = props.className,
      children = props.children,
      right = props.right,
      hoverable = props.hoverable;
  /**
   * Render
   */

  return React.createElement(SidePillStyled, _extends({}, props, {
    className: "aph-sidepill ".concat(className || '')
  }), !hoverable ? null : React.createElement("span", {
    className: "aph-sidepill__hoverable ".concat(right ? 'aph-sidepill__hoverable--right' : '')
  }, hoverable), React.createElement("span", {
    className: "aph-sidepill__content"
  }, children));
});
/* Component Default Properties */

SidePill.defaultProps = {
  right: false
};
/* Component Properties Types */

SidePill.propTypes = {
  right: propTypes.bool
};

/**
 * Typography common styles
 */
/**
 * Text
 */

var text = function text(props) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MD';
  return "\n    ".concat(!props.margin ? '' : "\n        margin: ".concat(props.margin, ";\n    "), ";\n    ").concat(!props.padding ? '' : "\n        padding: ".concat(props.padding, ";\n    "), ";\n\n    ").concat(textDefinitions(props, size), ";\n    ").concat(textAlign(props), ";\n    ").concat(textTransform(props), ";\n    ").concat(textBreakAll(props), ";\n    ").concat(textColorfull(props), ";\n    ").concat(textTruncate(props), ";\n");
};
/**
 * Text Align
 */

var textAlign = function textAlign() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !props.textAlign && !props.textLeft && !props.textCenter && !props.textRight ? '' : "\n    text-align: ".concat(props.textLeft ? 'left' : props.textCenter ? 'center' : props.textRight ? 'right' : props.textAlign, ";\n");
};
/**
 * Text Break All words
 */

var textBreakAll = function textBreakAll() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !props.breakAll ? '' : "\n    word-break: break-all;\n";
};
/**
 * Text Colorfull
 */

var textColorfull = function textColorfull() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !props.textColor && !props.link && !props.helper ? '' : "\n    color: ".concat(colors$1.getFromTheme(props, props.link ? 'link' : props.helper ? 'helper' : props.textColor), ";\n");
};
/**
 * Text Definitions
 */

var textDefinitions = function textDefinitions() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MD';
  return "\n    font-weight: ".concat(SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT, ";\n    font-size  : ").concat(SIZES[size].FONT_SIZE, ";\n    line-height: ").concat(SIZES[size].LINE_HEIGHT, ";\n");
};
/**
 * Text Transform
 */

var textTransform = function textTransform() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !props.textLower && !props.textUpper ? '' : "\n    text-transform: ".concat(props.textLower ? 'lowercase' : 'uppercase', ";\n");
};
/**
 * Text Truncate
 */

var textTruncate = function textTruncate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !props.truncate ? '' : "\n    overflow     : hidden;\n    white-space  : nowrap;\n    text-overflow: ellipsis;\n";
};

/* Component Styles */

var AStyled = _styled("a", {
  target: "e93yvql0"
})("box-sizing:border-box;cursor:pointer;text-decoration:none;", function (props) {
  return textColorfull(props);
}, ";border:0;outline:0;&:active,&:focus,&:hover,&:visited{border:0;outline:0;}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV3QiIsImZpbGUiOiJBLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IHRleHRDb2xvcmZ1bGwgfSBmcm9tICcuLi90eXBvZ3JhcGh5JztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQVN0eWxlZCA9IHN0eWxlZC5hYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBjdXJzb3IgICAgICAgICA6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJHtwcm9wcyA9PiB0ZXh0Q29sb3JmdWxsKHByb3BzKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIsXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFTdHlsZWRcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICB0ZXh0Q29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWEgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBzbWFsbCA6IGZhbHNlLFxuICAgIGhlbHBlcjogZmFsc2UsXG4gICAgbWFyZ2luOiAnMTBweCAwJyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIGhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBO1xuIl19 */"));
/* Component Itself */


var A = forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      rest = _objectWithoutProperties(props, ["className", "color"]);

  return React.createElement(AStyled, _extends({}, rest, {
    ref: ref,
    textColor: color,
    className: "aph-a ".concat(className || '')
  }));
});
/* Default Properties */

A.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  helper: false,
  margin: '10px 0',
  color: '',
  styles: {}
};
/* Properties Types */

A.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var H1Styled = _styled("h1", {
  target: "ezvpeh30"
})("box-sizing:border-box;", function (props) {
  return text(props, 'XXL');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgxLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29tbW9ucyAqL1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJy4uL3R5cG9ncmFwaHknO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIMVN0eWxlZCA9IHN0eWxlZC5oMWBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJHtwcm9wcyA9PiB0ZXh0KHByb3BzLCAnWFhMJyl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgSDEgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNvbG9yLFxuXG4gICAgICAgIGFsaWduLFxuICAgICAgICBjZW50ZXIsXG4gICAgICAgIGxlZnQsXG4gICAgICAgIHJpZ2h0LFxuICAgICAgICBsb3dlcixcbiAgICAgICAgdXBwZXIsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIMVN0eWxlZFxuICAgICAgICAgICAgdGV4dEFsaWduPXthbGlnbn1cbiAgICAgICAgICAgIHRleHRDb2xvcj17Y29sb3J9XG4gICAgICAgICAgICB0ZXh0TGVmdD17bGVmdH1cbiAgICAgICAgICAgIHRleHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgIHRleHRSaWdodD17cmlnaHR9XG4gICAgICAgICAgICB0ZXh0TG93ZXI9e2xvd2VyfVxuICAgICAgICAgICAgdGV4dFVwcGVyPXt1cHBlcn1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaDEgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDEuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgaGVscGVyOiBmYWxzZSxcbiAgICBtYXJnaW46ICcyNXB4IDAgMTVweCcsXG4gICAgY29sb3IgOiAnJyxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSDEucHJvcFR5cGVzID0ge1xuICAgIGxpbmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVscGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgxO1xuIl19 */"));
/* Component Itself */


var H1 = forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutProperties(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return React.createElement(H1Styled, _extends({
    textAlign: align,
    textColor: color,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper
  }, rest, {
    ref: ref,
    className: "aph-h1 ".concat(className || '')
  }));
});
/* Default Properties */

H1.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
/* Properties Types */

H1.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var H2Styled = _styled("h2", {
  target: "e1knkmrf0"
})("box-sizing:border-box;", function (props) {
  return text(props, 'XL');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29tbW9ucyAqL1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJy4uL3R5cG9ncmFwaHknO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIMlN0eWxlZCA9IHN0eWxlZC5oMmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJHtwcm9wcyA9PiB0ZXh0KHByb3BzLCAnWEwnKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBIMiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IsXG5cbiAgICAgICAgYWxpZ24sXG4gICAgICAgIGNlbnRlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGxvd2VyLFxuICAgICAgICB1cHBlcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgyU3R5bGVkXG4gICAgICAgICAgICB0ZXh0QWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdGV4dExlZnQ9e2xlZnR9XG4gICAgICAgICAgICB0ZXh0Q2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgICB0ZXh0UmlnaHQ9e3JpZ2h0fVxuICAgICAgICAgICAgdGV4dExvd2VyPXtsb3dlcn1cbiAgICAgICAgICAgIHRleHRVcHBlcj17dXBwZXJ9XG4gICAgICAgICAgICB0ZXh0Q29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMiAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzI1cHggMCAxNXB4JyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMi5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDI7XG4iXX0= */"));
/* Component Itself */


var H2 = forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutProperties(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return React.createElement(H2Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h2 ".concat(className || '')
  }));
});
/* Default Properties */

H2.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
/* Properties Types */

H2.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var H3Styled = _styled("h3", {
  target: "e181c9j70"
})("box-sizing:border-box;", function (props) {
  return text(props, 'LG');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29tbW9ucyAqL1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJy4uL3R5cG9ncmFwaHknO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBIM1N0eWxlZCA9IHN0eWxlZC5oM2BcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJHtwcm9wcyA9PiB0ZXh0KHByb3BzLCAnTEcnKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBIMyA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IsXG5cbiAgICAgICAgYWxpZ24sXG4gICAgICAgIGNlbnRlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGxvd2VyLFxuICAgICAgICB1cHBlcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgzU3R5bGVkXG4gICAgICAgICAgICB0ZXh0QWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdGV4dExlZnQ9e2xlZnR9XG4gICAgICAgICAgICB0ZXh0Q2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgICB0ZXh0UmlnaHQ9e3JpZ2h0fVxuICAgICAgICAgICAgdGV4dExvd2VyPXtsb3dlcn1cbiAgICAgICAgICAgIHRleHRVcHBlcj17dXBwZXJ9XG4gICAgICAgICAgICB0ZXh0Q29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMyAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzE1cHggMCA1cHgnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSDMucHJvcFR5cGVzID0ge1xuICAgIGxpbmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9sZCAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIHVwcGVyIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVscGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgzO1xuIl19 */"));
/* Component Itself */


var H3 = forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutProperties(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return React.createElement(H3Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h3 ".concat(className || '')
  }));
});
/* Default Properties */

H3.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '15px 0 5px',
  color: '',
  styles: {}
};
/* Properties Types */

H3.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */

var PStyled = _styled("p", {
  target: "enm91qe0"
})("box-sizing:border-box;", function (props) {
  return text(props, props.textSmall ? 'SM' : 'MD');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QiIsImZpbGUiOiJQLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbW1vbnMgKi9cbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi90eXBvZ3JhcGh5JztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgUFN0eWxlZCA9IHN0eWxlZC5wYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsIHByb3BzLnRleHRTbWFsbCA/ICdTTScgOiAnTUQnKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBQID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcblxuICAgICAgICBhbGlnbixcbiAgICAgICAgY2VudGVyLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodCxcbiAgICAgICAgbG93ZXIsXG4gICAgICAgIHVwcGVyLFxuICAgICAgICBzbWFsbCxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBTdHlsZWRcbiAgICAgICAgICAgIHRleHRBbGlnbj17YWxpZ259XG4gICAgICAgICAgICB0ZXh0TGVmdD17bGVmdH1cbiAgICAgICAgICAgIHRleHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgIHRleHRSaWdodD17cmlnaHR9XG4gICAgICAgICAgICB0ZXh0TG93ZXI9e2xvd2VyfVxuICAgICAgICAgICAgdGV4dFVwcGVyPXt1cHBlcn1cbiAgICAgICAgICAgIHRleHRDb2xvcj17Y29sb3J9XG4gICAgICAgICAgICB0ZXh0U21hbGw9e3NtYWxsfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1wICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblAuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgc21hbGwgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgY29sb3IgOiAnJyxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuUC5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUDtcbiJdfQ== */"));
/* Component Itself */


var P = forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      small = props.small,
      rest = _objectWithoutProperties(props, ["className", "color", "align", "center", "left", "right", "lower", "upper", "small"]);

  return React.createElement(PStyled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color,
    textSmall: small
  }, rest, {
    ref: ref,
    className: "aph-p ".concat(className || '')
  }));
});
/* Default Properties */

P.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  helper: false,
  margin: '10px 0',
  color: '',
  styles: {}
};
/* Properties Types */

P.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Itself */

function Label(props) {
  /**
   * Inherit props
   */
  var className = props.className,
      styles = props.styles,
      rest = _objectWithoutProperties(props, ["className", "styles"]);
  /**
   * Render
   */


  return React.createElement(P, _extends({
    bold: true,
    small: true,
    upper: true,
    margin: "5px 0",
    color: "helper",
    as: "label",
    className: "aph-label ".concat(className || ''),
    styles: Object.assign({
      display: 'block'
    }, styles || {})
  }, rest));
}

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Wrapper styles */

var AphContainer =
/*#__PURE__*/
_styled('div', {
  target: "e1js7dhi0"
})(function (props) {
  return _objectSpread$c(_defineProperty({
    boxSizing: 'border-box',
    display: 'block',
    margin: '0 auto',
    padding: "0 ".concat(GRID.CONTAINER_PADDING + GRID.UNIT),
    width: '100%',
    maxWidth: props.fluid ? '100%' : props.xs ? GRID.CONTAINER.XS + GRID.UNIT : props.sm ? GRID.CONTAINER.SM + GRID.UNIT : props.md ? GRID.CONTAINER.MD + GRID.UNIT : props.xl ? GRID.CONTAINER.XL + GRID.UNIT : GRID.CONTAINER.LG + GRID.UNIT
  }, MEDIA_QUERIES.LT.SM, {
    paddingRight: GRID.CONTAINER_PADDING_XS + GRID.UNIT,
    paddingLeft: GRID.CONTAINER_PADDING_XS + GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3FCIiwiZmlsZSI6IkNvbnRhaW5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICBtYXJnaW4gICA6ICcwIGF1dG8nLFxuICAgIHBhZGRpbmcgIDogYDAgJHsoR1JJRC5DT05UQUlORVJfUEFERElORyArIEdSSUQuVU5JVCl9YCxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcblxuICAgIG1heFdpZHRoIDogKFxuICAgICAgICAocHJvcHMuZmx1aWQgPyAnMTAwJScgOlxuICAgICAgICAgICAgKHByb3BzLnhzID8gKEdSSUQuQ09OVEFJTkVSLlhTICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgKHByb3BzLnNtID8gKEdSSUQuQ09OVEFJTkVSLlNNICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy5tZCA/IChHUklELkNPTlRBSU5FUi5NRCArIEdSSUQuVU5JVCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnhsID8gKEdSSUQuQ09OVEFJTkVSLlhMICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEdSSUQuQ09OVEFJTkVSLkxHICsgR1JJRC5VTklUKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IChHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKSxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAoR1JJRC5DT05UQUlORVJfUEFERElOR19YUyArIEdSSUQuVU5JVCksXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IENvbnRhaW5lciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoQ29udGFpbmVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb250YWluZXIgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQ29udGFpbmVyPlxuICAgICk7XG59KTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICB4cyAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNtICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWQgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBsZyAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHhsICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgZmx1aWQgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */");
/* Component it self */


var Container = forwardRef(function (props, ref) {
  return React.createElement(AphContainer, _extends({}, props, {
    ref: ref,
    className: "aph-container ".concat(props.className || '')
  }), props.children);
});
/* Properties Types */

Container.propTypes = {
  xs: propTypes.bool,
  sm: propTypes.bool,
  md: propTypes.bool,
  lg: propTypes.bool,
  xl: propTypes.bool,
  fluid: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
/* Default Properties */

Container.defaultProps = {
  styles: {}
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Sizes */

var MARGIN = '-' + GRID.COLUMNS_PADDING + GRID.UNIT;
/* Wrapper Styles */

var RowWrapper =
/*#__PURE__*/
_styled('div', {
  target: "e134hck50"
})(function (props) {
  var _objectSpread2;

  var alignment = props.alignment,
      vertical = props.vertical,
      horizontal = props.horizontal,
      reverse = props.reverse,
      styles = props.styles;
  var _extraStyles = {};

  if (horizontal) {
    if (horizontal === 'center' || horizontal === 'middle') {
      _extraStyles = {
        WebkitBoxPack: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center'
      };
    } else {
      _extraStyles = {
        WebkitBoxPack: horizontal,
        MsFlexPack: horizontal,
        justifyContent: "flex-".concat(horizontal)
      };
    }
  }

  if (vertical) {
    if (vertical === 'center' || vertical === 'middle') {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        alignItems: 'center'
      });
    } else {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: vertical,
        MsFlexAlign: vertical,
        alignItems: "flex-".concat(vertical)
      });
    }
  }

  return _objectSpread$d((_objectSpread2 = {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: MARGIN,
    marginLeft: MARGIN
  }, _defineProperty(_objectSpread2, "flexDirection", reverse ? 'row-reverse' : null), _defineProperty(_objectSpread2, '&:before, &:after', {
    clear: 'both'
  }), _objectSpread2), styles, {}, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW1CIiwiZmlsZSI6IlJvdy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU2l6ZXMgKi9cbmNvbnN0IE1BUkdJTiA9ICgnLScgKyBHUklELkNPTFVNTlNfUEFERElORyArIEdSSUQuVU5JVCk7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBSb3dXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGFsaWdubWVudCxcbiAgICAgICAgdmVydGljYWwsXG4gICAgICAgIGhvcml6b250YWwsXG5cbiAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGxldCBfZXh0cmFTdHlsZXMgPSB7fTtcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGlmIChob3Jpem9udGFsID09PSAnY2VudGVyJyB8fCBob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveFBhY2sgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBNc0ZsZXhQYWNrICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveFBhY2sgOiBob3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIE1zRmxleFBhY2sgICAgOiBob3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBgZmxleC0ke2hvcml6b250YWx9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgaWYgKHZlcnRpY2FsID09PSAnY2VudGVyJyB8fCB2ZXJ0aWNhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAgIF9leHRyYVN0eWxlcyA9IE9iamVjdC5hc3NpZ24oX2V4dHJhU3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgV2Via2l0Qm94QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIE1zRmxleEFsaWduICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0gT2JqZWN0LmFzc2lnbihfZXh0cmFTdHlsZXMsIHtcbiAgICAgICAgICAgICAgICBXZWJraXRCb3hBbGlnbjogdmVydGljYWwsXG4gICAgICAgICAgICAgICAgTXNGbGV4QWxpZ24gICA6IHZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMgICAgOiBgZmxleC0ke3ZlcnRpY2FsfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgcG9zaXRpb24gICAgIDogJ3JlbGF0aXZlJyxcbiAgICAgICAgZGlzcGxheSAgICAgIDogJ2ZsZXgnLFxuICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgZmxleFdyYXAgICAgIDogJ3dyYXAnLFxuXG4gICAgICAgIG1hcmdpblJpZ2h0OiBNQVJHSU4sXG4gICAgICAgIG1hcmdpbkxlZnQgOiBNQVJHSU4sXG5cbiAgICAgICAgZmxleERpcmVjdGlvbjogcmV2ZXJzZSA/ICdyb3ctcmV2ZXJzZScgOiBudWxsLFxuXG4gICAgICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgICAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLi4uc3R5bGVzLFxuXG4gICAgICAgIC4uLl9leHRyYVN0eWxlcyxcbiAgICB9O1xufSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgUm93ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93V3JhcHBlclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcm93ICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1Jvd1dyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Sb3cucHJvcFR5cGVzID0ge1xuICAgIHZlcnRpY2FsICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgaG9yaXpvbnRhbDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXMgICAgOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXMgICAgOiB7fSxcbiAgICB2ZXJ0aWNhbCAgOiAnbWlkZGxlJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCcsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiJdfQ== */");
/* Component */


var Row = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return React.createElement(RowWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-row ".concat(className || '')
  }), children);
});
/* Properties Types */

Row.propTypes = {
  vertical: propTypes.string,
  horizontal: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
/* Default Properties */

Row.defaultProps = {
  styles: {},
  vertical: 'middle',
  horizontal: 'left'
};

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Wrapper Styles */

var ColumnWrapper =
/*#__PURE__*/
_styled('div', {
  target: "e1fg9ilu0"
})(function (props) {
  var _objectSpread2, _objectSpread3;

  var first = props.first,
      last = props.last,
      width = props.width,
      styles = props.styles,
      xxs = props.xxs,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl;
  var ORDER = first === 'xxs' || first === 'xs' ? -1 : last === 'xxs' || last === 'xs' ? 1 : null;
  /**
   * Get CSS Flex order property, based on Component Prop
   *
   * @param {string} size
   */

  function getOrder() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xs';
    return first === size ? -1 : last === size ? 1 : null;
  }

  return _objectSpread$e((_objectSpread2 = {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    order: ORDER,
    paddingRight: GRID.COLUMNS_PADDING,
    paddingLeft: GRID.COLUMNS_PADDING
  }, _defineProperty(_objectSpread2, "flexBasis", width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'), _defineProperty(_objectSpread2, "maxWidth", width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'), _objectSpread2), styles, (_objectSpread3 = {}, _defineProperty(_objectSpread3, MEDIA_QUERIES.LT.SM, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(xs),
    maxWidth: GRID.COLUMNS_GET_WIDTH(xs),
    order: getOrder('xs')
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.SM, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(sm),
    maxWidth: GRID.COLUMNS_GET_WIDTH(sm),
    order: getOrder('sm')
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.MD, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(md),
    maxWidth: GRID.COLUMNS_GET_WIDTH(md),
    order: getOrder('md')
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.LG, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(lg),
    maxWidth: GRID.COLUMNS_GET_WIDTH(lg),
    order: getOrder('lg')
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.XL, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(xl),
    maxWidth: GRID.COLUMNS_GET_WIDTH(xl),
    order: getOrder('xl')
  }), _objectSpread3));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbHVtbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3NCIiwiZmlsZSI6IkNvbHVtbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBDb2x1bW5XcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGZpcnN0LFxuICAgICAgICBsYXN0LFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgeHhzLFxuICAgICAgICB4cyxcbiAgICAgICAgc20sXG4gICAgICAgIG1kLFxuICAgICAgICBsZyxcbiAgICAgICAgeGwsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgT1JERVIgPSAoXG4gICAgICAgIChmaXJzdCA9PT0gJ3h4cycgfHwgZmlyc3QgPT09ICd4cycpID8gLTEgOiAoXG4gICAgICAgICAgICAobGFzdCA9PT0gJ3h4cycgfHwgbGFzdCA9PT0gJ3hzJykgPyAxIDogbnVsbFxuICAgICAgICApXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBDU1MgRmxleCBvcmRlciBwcm9wZXJ0eSwgYmFzZWQgb24gQ29tcG9uZW50IFByb3BcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaXplXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXIgKHNpemUgPSAneHMnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoZmlyc3QgPT09IHNpemUpID8gLTEgOiAoXG4gICAgICAgICAgICAgICAgKGxhc3QgPT09IHNpemUpID8gMSA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHtcbiAgICAgICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAwIGF1dG8nLFxuICAgICAgICBmbGV4R3JvdyAgICAgOiAxLFxuICAgICAgICBmbGV4QmFzaXMgICAgOiAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAgICAgICBvcmRlcjogT1JERVIsXG5cbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBHUklELkNPTFVNTlNfUEFERElORyxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiBHUklELkNPTFVNTlNfUEFERElORyxcblxuICAgICAgICBmbGV4QmFzaXM6ICh3aWR0aCB8fCBHUklELkNPTFVNTlNfR0VUX1dJRFRIKHh4cyB8fCB4cykgfHwgJzEwMCUnKSxcbiAgICAgICAgbWF4V2lkdGggOiAod2lkdGggfHwgR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4eHMgfHwgeHMpIHx8ICcxMDAlJyksXG5cbiAgICAgICAgLi4uc3R5bGVzLFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICAgICAgZmxleEJhc2lzOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4cykpLFxuICAgICAgICAgICAgbWF4V2lkdGggOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSCh4cykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcigneHMnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5TTV06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoc20pKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoc20pKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ3NtJyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgW01FRElBX1FVRVJJRVMuR1QuTURdOiB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKG1kKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKG1kKSksXG4gICAgICAgICAgICBvcmRlciAgICA6IGdldE9yZGVyKCdtZCcpLFxuICAgICAgICB9LFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkdULkxHXToge1xuICAgICAgICAgICAgZmxleEJhc2lzOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChsZykpLFxuICAgICAgICAgICAgbWF4V2lkdGggOiAoR1JJRC5DT0xVTU5TX0dFVF9XSURUSChsZykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignbGcnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5YTF06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeGwpKSxcbiAgICAgICAgICAgIG1heFdpZHRoIDogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoeGwpKSxcbiAgICAgICAgICAgIG9yZGVyICAgIDogZ2V0T3JkZXIoJ3hsJyksXG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBDb2x1bW4gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2x1bW5XcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb2wgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sdW1uV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIFNpemVzIFR5cGVzICovXG5jb25zdCBzaXplc1R5cGVzID0gcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcm9wVHlwZXMubnVtYmVyXG5dKTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgICB4c3MgICA6IHNpemVzVHlwZXMsXG4gICAgeHMgICAgOiBzaXplc1R5cGVzLFxuICAgIHNtICAgIDogc2l6ZXNUeXBlcyxcbiAgICBtZCAgICA6IHNpemVzVHlwZXMsXG4gICAgbGcgICAgOiBzaXplc1R5cGVzLFxuICAgIHhsICAgIDogc2l6ZXNUeXBlcyxcblxuICAgIGZpcnN0IDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYXN0ICA6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB3aWR0aCA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XG4iXX0= */");
/* Component */


var Column = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return React.createElement(ColumnWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-col ".concat(className || '')
  }), children);
});
/* Sizes Types */

var sizesTypes = propTypes.oneOfType([propTypes.string, propTypes.number]);
/* Properties Types */

Column.propTypes = {
  xss: sizesTypes,
  xs: sizesTypes,
  sm: sizesTypes,
  md: sizesTypes,
  lg: sizesTypes,
  xl: sizesTypes,
  first: propTypes.string,
  last: propTypes.string,
  width: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
/* Default Properties */

Column.defaultProps = {
  styles: {}
};

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "k008qs",
  styles: "display:flex;"
} : {
  name: "k008qs",
  styles: "display:flex;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXNCIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"
};

var Flex = function Flex() {
  return _ref$1;
};

var FlexWrap = function FlexWrap(props) {
  return (
    /*#__PURE__*/
    css("flex-wrap:", props.flexWrap, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUStCIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"))
  );
};

var AlignItems = function AlignItems(props) {
  return (
    /*#__PURE__*/
    css("align-items:", props.alignItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWlDIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"))
  );
};

var AlignContent = function AlignContent(props) {
  return (
    /*#__PURE__*/
    css("align-items:", props.alignContent, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};

var FlexDirection = function FlexDirection(props) {
  return (
    /*#__PURE__*/
    css("flex-direction:", props.flexDirection, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};

var JustifyContente = function JustifyContente(props) {
  return (
    /*#__PURE__*/
    css("justify-content:", props.justifyContent, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JzQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};
/* Properties for the Children */


var Order = function Order(props) {
  return (
    /*#__PURE__*/
    css("order:", props.order, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkI0QiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};

var FlexGrow = function FlexGrow(props) {
  return (
    /*#__PURE__*/
    css("flex-grow:", props.flexGrow, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUMrQiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};

var AlignSelf = function AlignSelf(props) {
  return (
    /*#__PURE__*/
    css("align-self:", props.alignSelf, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};

var FlexShrink = function FlexShrink(props) {
  return (
    /*#__PURE__*/
    css("flex-shrink:", props.flexShrink, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNpQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"))
  );
};
/* Component Itself */


var AphFlex = _styled("div", {
  target: "ek8mijm0"
})("box-sizing:border-box;", function (props) {
  return props.flex && Flex;
}, ";", function (props) {
  return props.flexWrap && FlexWrap;
}, ";", function (props) {
  return props.alignItems && AlignItems;
}, ";", function (props) {
  return props.alignContent && AlignContent;
}, ";", function (props) {
  return props.flexDirection && FlexDirection;
}, ";", function (props) {
  return props.justifyContent && JustifyContente;
}, ";", function (props) {
  return props.order && Order;
}, ";", function (props) {
  return props.flexGrow && FlexGrow;
}, ";", function (props) {
  return props.alignSelf && AlignSelf;
}, ";", function (props) {
  return props.flexShrink && FlexShrink;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEMwQiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));

/* Component Itself */

function Flex$1(props) {
  /**
   * Inherit props,
   */
  var className = props.className;
  /**
   * Render
   */

  return React.createElement(AphFlex, _extends({}, props, {
    className: "aph-flex ".concat(className)
  }));
}
/* Component Props */


Flex$1.defaultProps = {
  className: '',
  flexWrap: '',
  alignSelf: '',
  alignItems: '',
  alignContent: '',
  flexDirection: '',
  justifyContent: '',
  order: '',
  flexGrow: '',
  flexShrink: '',
  styles: {}
};
/* Component properties types */

Flex$1.propTypes = {
  className: propTypes.string,
  flexWrap: propTypes.string,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  alignContent: propTypes.string,
  flexDirection: propTypes.string,
  justifyContent: propTypes.string,
  order: propTypes.oneOfType([propTypes.string, propTypes.number]),
  flexGrow: propTypes.oneOfType([propTypes.string, propTypes.number]),
  flexShrink: propTypes.oneOfType([propTypes.string, propTypes.number]),
  styles: propTypes.any
};

/* Component Itself */

var AphListStyled = _styled("ul", {
  target: "e32bd8t0"
})("box-sizing:border-box;display:block;margin:0;padding:0;overflow:hidden;border-radius:", RADIUS.SM, "px;list-style-type:", function (props) {
  return props.type || 'none';
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiJMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIEZyYW1ld29yayBVdGlscyAqL1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoTGlzdFN0eWxlZCA9IHN0eWxlZC51bGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luIDogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAke1JBRElVUy5TTX1weDtcblxuICAgIGxpc3Qtc3R5bGUtdHlwZTogJHtwcm9wcyA9PiBwcm9wcy50eXBlIHx8ICdub25lJ307XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBMaXN0ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0U3R5bGVkXG4gICAgICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0ICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5MaXN0LnByb3BUeXBlcyA9IHtcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19 */"));
/* Component Itself */


var List = forwardRef(function (props, ref) {
  var className = props.className;
  return React.createElement(AphListStyled, _extends({
    role: "listbox"
  }, props, {
    ref: ref,
    className: "aph-list ".concat(className || '')
  }));
});
/* Default Properties */

List.defaultProps = {
  styles: {}
};
/* Properties Types */

List.propTypes = {
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Itself */

var AphListItemStyled = _styled("li", {
  target: "e6wegxb0"
})("box-sizing:border-box;display:block;margin:0;padding:10px;background-color:transparent;box-shadow:", function (props) {
  return !props.borderTop && !props.borderBottom ? null : "inset 0 ".concat(props.borderBottom ? '-' : '', "1px 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'helper')));
}, ";transition:color 0.15s linear,background-color 0.15s linear;will-change:color,background-color;&.active{color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'background' : 'secondary', 'crystal');
}, ";}", function (props) {
  return props.onClick ? {
    cursor: 'pointer',
    color: colors$1.getFromTheme(props, 'secondary'),
    '&:hover': {
      color: colors$1.getFromTheme(props, 'secondary'),
      backgroundColor: colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'background' : 'secondary', 'crystal')
    }
  } : null;
}, ";", function (props) {
  return props.hoverable ? {
    '&:hover': {
      backgroundColor: colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper'))
    }
  } : null;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93ICAgICAgOiAke3Byb3BzID0+ICgoIXByb3BzLmJvcmRlclRvcCAmJiAhcHJvcHMuYm9yZGVyQm90dG9tKSA/IG51bGwgOiBgaW5zZXQgMCAke3Byb3BzLmJvcmRlckJvdHRvbSA/ICctJyA6ICcnfTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuaXNEYXJrTW9kZSA/ICdpbnZlcnNlJyA6ICdoZWxwZXInKSkpfWApfTtcblxuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBjb2xvciAwLjE1cyBsaW5lYXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMgbGluZWFyXG4gICAgO1xuICAgIHdpbGwtY2hhbmdlOlxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvclxuICAgIDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5pc0RhcmtNb2RlID8gJ2JhY2tncm91bmQnIDogJ3NlY29uZGFyeScpLCAnY3J5c3RhbCcpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5vbkNsaWNrKSA/IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGNvbG9yIDogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpLFxuXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5JyksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5pc0RhcmtNb2RlID8gJ2JhY2tncm91bmQnIDogJ3NlY29uZGFyeScpLCAnY3J5c3RhbCcpLFxuICAgICAgICB9XG4gICAgfSA6IG51bGx9O1xuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuaG92ZXJhYmxlKSA/IHtcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSksXG4gICAgICAgIH1cbiAgICB9IDogbnVsbH07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBMaXN0SXRlbSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBob3ZlcmFibGUsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgQXBoTGlzdEl0ZW0gPSAoY29tcG9uZW50ID8gQXBoTGlzdEl0ZW1TdHlsZWQud2l0aENvbXBvbmVudChjb21wb25lbnQpIDogQXBoTGlzdEl0ZW1TdHlsZWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RJdGVtXG4gICAgICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWxpc3RfX2l0ZW0gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIGhvdmVyYWJsZTogZmFsc2UsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBob3ZlcmFibGU6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19 */"));
/* Component Itself */


var ListItem = forwardRef(function (props, ref) {
  var className = props.className,
      component = props.component,
      hoverable = props.hoverable;
  var AphListItem = component ? AphListItemStyled.withComponent(component, {
    target: "e6wegxb1"
  }) : AphListItemStyled;
  return React.createElement(AphListItem, _extends({
    role: "option"
  }, props, {
    ref: ref,
    className: "aph-list__item ".concat(className || '')
  }));
});
/* Default Properties */

ListItem.defaultProps = {
  hoverable: false,
  styles: {}
};
/* Properties Types */

ListItem.propTypes = {
  hoverable: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Wrapper styles */

var AphListGroup =
/*#__PURE__*/
_styled('div', {
  target: "ey9rber0"
})(function (props) {
  return _objectSpread$f({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    padding: props.noSideBorders ? '1px 0' : '1px',
    margin: 0,
    listStyle: 'none',
    borderRadius: (!isNaN(props.radius) ? props.radius : RADIUS) + GRID.UNIT,
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), "\n        ") : "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n            inset 1px 0 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n            inset -1px 0 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n            inset 0 1px 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), "\n        "),
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        "),
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 ".concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            ")
      }
    },
    '.aph-list__header': {
      backgroundColor: colors$1.getFromTheme(props, 'helper')
    },
    '.aph-list__item': {
      backgroundColor: colors$1.getFromTheme(props, 'background')
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 ".concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 ").concat(colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')), "\n                ")
        }
      }
    },
    'div:last-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:last-of-type': {
          marginBottom: '-1px',
          borderBottomRightRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          borderBottomLeftRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT
        }
      }
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ikxpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBVdGlscyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoTGlzdEdyb3VwID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBwYWRkaW5nICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID8gJzFweCAwJyA6ICcxcHgnKSxcbiAgICBtYXJnaW4gICA6IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpICsgR1JJRC5VTklUKSxcbiAgICBib3hTaGFkb3cgICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID9cbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfSxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX1cbiAgICAgICAgYClcbiAgICAgICAgOlxuICAgICAgICAoYFxuICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgaW5zZXQgMXB4IDAgMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAtMXB4IDAgMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfVxuICAgICAgICBgKVxuICAgICksXG5cbiAgICAnLmFwaC1saXN0X19oZWFkZXIsIC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnRcbiAgICAgICAgYCxcblxuICAgICAgICAnKyAuYXBoLWxpc3RfX2hlYWRlciwgKyAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICBib3hTaGFkb3cgICA6IGBcbiAgICAgICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgIGAsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5hcGgtbGlzdF9faGVhZGVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSxcbiAgICB9LFxuXG4gICAgJy5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpLFxuICAgIH0sXG5cbiAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0xcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cyA6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGBcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAnZGl2Omxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgJy5hcGgtbGlzdF9faGVhZGVyLCA+IC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICctMXB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMgOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgTGlzdEdyb3VwID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0R3JvdXBcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWxpc3QtZ3JvdXAgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBoTGlzdEdyb3VwPlxuICAgICk7XG59KTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0R3JvdXA7XG4iXX0= */");
/* Component */


var ListGroup = forwardRef(function (props, ref) {
  return React.createElement(AphListGroup, _extends({}, props, {
    ref: ref,
    className: "aph-list-group ".concat(props.className || '')
  }), props.children);
});

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Wrapper styles */

var AphListGroupItem =
/*#__PURE__*/
_styled('div', {
  target: "evs8czu0"
})(function (props) {
  return _objectSpread$g(_defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: GRID.CONTAINER_PADDING / 2 + GRID.UNIT + ' ' + (GRID.CONTAINER_PADDING + GRID.UNIT),
    margin: 0
  }, MEDIA_QUERIES.LT.SM, {
    paddingRight: GRID.CONTAINER_PADDING - 5 + GRID.UNIT,
    paddingLeft: GRID.CONTAINER_PADDING - 5 + GRID.UNIT
  }), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RHcm91cEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QiIsImZpbGUiOiJMaXN0R3JvdXBJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBBcGhMaXN0R3JvdXBJdGVtID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nICA6ICgoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC8gMikgKyBHUklELlVOSVQpICsgJyAnICsgKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgICsgR1JJRC5VTklUKSksXG4gICAgbWFyZ2luICAgOiAwLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogKChHUklELkNPTlRBSU5FUl9QQURESU5HICAtIDUpICsgR1JJRC5VTklUKSxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC0gNSkgKyBHUklELlVOSVQpLFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgTGlzdEdyb3VwSXRlbSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RHcm91cEl0ZW1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17Zm9yd2FyZFJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuaGVhZGVyID8gJ2FwaC1saXN0LWdyb3VwX19oZWFkZXIgJyA6ICdhcGgtbGlzdC1ncm91cF9faXRlbSAnfSR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RHcm91cEl0ZW0+XG4gICAgKTtcbn0pO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cEl0ZW07XG4iXX0= */");
/* Component */


var ListGroupItem = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return React.createElement(AphListGroupItem, _extends({}, props, {
    ref: forwardRef,
    className: "".concat(props.header ? 'aph-list-group__header ' : 'aph-list-group__item ').concat(className || '')
  }), children);
});

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Component Styles */

var _iconSize = window.innerWidth > SCREEN_SIZES.SM ? 22 : 30;

var iconColumn = _iconSize + GRID.CONTAINER_PADDING / 2 + GRID.UNIT;
/* Component Styles */

var AphAccordion =
/*#__PURE__*/
_styled('div', {
  target: "e869uf0"
})(function (props) {
  return _objectSpread$h({
    boxSizing: 'border-box',
    display: 'block',
    fontSize: SIZES.MD.FONT_SIZE,
    lineHeight: SIZES.MD.LINE_HEIGHT
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JxQiIsImZpbGUiOiJBY2NvcmRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVyIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIEhlbHBlciBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMaXN0SXRlbSwgSWNvbiB9IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IF9pY29uU2l6ZSAgID0gKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NJWkVTLlNNID8gMjIgOiAzMCk7XG5jb25zdCBpY29uQ29sdW1uICA9IChfaWNvblNpemUgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCk7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEFjY29yZGlvbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG5cbiAgICBmb250U2l6ZSAgOiBTSVpFUy5NRC5GT05UX1NJWkUsXG4gICAgbGluZUhlaWdodDogU0laRVMuTUQuTElORV9IRUlHSFQsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgU3R5bGVzICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICA6ICdibG9jaycsXG4gICAgbGluZUhlaWdodDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBjb2x1bW5TdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBJY29uIENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IEljb25Db2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBpY29uQ29sdW1uLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgbWFyZ2luOiAnLTJweCAwJyxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb250ZW50IENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IENvbnRlbnRDb2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtpY29uQ29sdW1ufSlgLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4Jyxcbn0pKTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gICAgLyoqXG4gICAgICogSW5oZXJpdCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICBoZWFkZXJQcm9wcyxcbiAgICAgICAgaGVhZGVyU3R5bGVzLFxuXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICB3aXRoSWNvbixcbiAgICAgICAgaWNvblNpemUsXG4gICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgaWNvblN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBMb2NhbCB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIG9wZW5lZCwgc2V0T3BlbmVkIF0gPSB1c2VTdGF0ZShwcm9wcy5vcGVuZWQgfHwgZmFsc2UpO1xuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB0b2dnbGVDYWxsYmFjayA9IChwcm9wcy50b2dnbGVDYWxsYmFjayB8fCBwcm9wcy5vcGVuZWRDYWxsYmFjayk7XG4gICAgICAgIGNvbnN0IGlzT3BlbmVkICAgICAgID0gIW9wZW5lZDtcblxuICAgICAgICBzZXRPcGVuZWQoaXNPcGVuZWQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNhbGxiYWNrKGlzT3BlbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVuZWQocHJvcHMub3BlbmVkKTtcbiAgICB9LCBbIHByb3BzLm9wZW5lZCBdKTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhBY2NvcmRpb25cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWFjY29yZGlvbiAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJQcm9wc31cbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlckRhcmsgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d2l0aEljb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQ29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpY29uU2l6ZSB8fCBfaWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e2BhcnJvdy0ke29wZW5lZCA/ICd1cCcgOiAnZG93bid9LWNpcmNsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmljb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Q29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogaGVhZGVyfVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQWNjb3JkaW9uPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuXG4gICAgd2l0aEljb24gOiB0cnVlLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQgICAgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgb3BlbmVkQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB3aXRoSWNvbiAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uU2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGljb25TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB0b2dnbGVDYWxsYmFjazogcHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ== */");
/* Component Header Styles */


var Header =
/*#__PURE__*/
_styled('div', {
  target: "e869uf1"
})(function (props) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: 0
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJlIiwiZmlsZSI6IkFjY29yZGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXIgQ29uc3RhbnRzICovXG5pbXBvcnQgeyBHUklELCBNRURJQV9RVUVSSUVTLCBTQ1JFRU5fU0laRVMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogSGVscGVyIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExpc3RJdGVtLCBJY29uIH0gZnJvbSAnLi4vJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgX2ljb25TaXplICAgPSAod2luZG93LmlubmVyV2lkdGggPiBTQ1JFRU5fU0laRVMuU00gPyAyMiA6IDMwKTtcbmNvbnN0IGljb25Db2x1bW4gID0gKF9pY29uU2l6ZSArIChHUklELkNPTlRBSU5FUl9QQURESU5HICAvIDIpICsgR1JJRC5VTklUKTtcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoQWNjb3JkaW9uID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcblxuICAgIGZvbnRTaXplICA6IFNJWkVTLk1ELkZPTlRfU0laRSxcbiAgICBsaW5lSGVpZ2h0OiBTSVpFUy5NRC5MSU5FX0hFSUdIVCxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBTdHlsZXMgKi9cbmNvbnN0IEhlYWRlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmcgOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgIDogJ2Jsb2NrJyxcbiAgICBsaW5lSGVpZ2h0OiAwLFxufSkpO1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IGNvbHVtblN0eWxlcyA9IHtcbiAgICBib3hTaXppbmcgICAgOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG59O1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIEljb24gQ29sdW1uIFN0eWxlcyAqL1xuY29uc3QgSWNvbkNvbHVtbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5jb2x1bW5TdHlsZXMsXG4gICAgd2lkdGg6IGljb25Db2x1bW4sXG4gICAgbGluZUhlaWdodDogMCxcbiAgICBtYXJnaW46ICctMnB4IDAnLFxuXG4gICAgW01FRElBX1FVRVJJRVMuTFQuU01dOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxufSkpO1xuXG4vKiBDb21wb25lbnQgSGVhZGVyIENvbnRlbnQgQ29sdW1uIFN0eWxlcyAqL1xuY29uc3QgQ29udGVudENvbHVtbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5jb2x1bW5TdHlsZXMsXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2ljb25Db2x1bW59KWAsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxufSkpO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5mdW5jdGlvbiBBY2NvcmRpb24ocHJvcHMpIHtcbiAgICAvKipcbiAgICAgKiBJbmhlcml0IHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGhlYWRlckRhcmssXG4gICAgICAgIGhlYWRlclByb3BzLFxuICAgICAgICBoZWFkZXJTdHlsZXMsXG5cbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIHdpdGhJY29uLFxuICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgaWNvblByb3BzLFxuICAgICAgICBpY29uU3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIExvY2FsIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IFsgb3BlbmVkLCBzZXRPcGVuZWQgXSA9IHVzZVN0YXRlKHByb3BzLm9wZW5lZCB8fCBmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2hpbGRyZW5zIHZpc2liaWxpdHlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUNhbGxiYWNrID0gKHByb3BzLnRvZ2dsZUNhbGxiYWNrIHx8IHByb3BzLm9wZW5lZENhbGxiYWNrKTtcbiAgICAgICAgY29uc3QgaXNPcGVuZWQgICAgICAgPSAhb3BlbmVkO1xuXG4gICAgICAgIHNldE9wZW5lZChpc09wZW5lZCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0b2dnbGVDYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlQ2FsbGJhY2soaXNPcGVuZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgY2hhbmdlc1xuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE9wZW5lZChwcm9wcy5vcGVuZWQpO1xuICAgIH0sIFsgcHJvcHMub3BlbmVkIF0pO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaEFjY29yZGlvblxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtYWNjb3JkaW9uICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgey4uLmhlYWRlclByb3BzfVxuICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyRGFyayA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3sgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmdSaWdodDogJzE1cHgnLCBwYWRkaW5nTGVmdDogJzE1cHgnLCAuLi5oZWFkZXJTdHlsZXMgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aXRoSWNvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25Db2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2ljb25TaXplIHx8IF9pY29uU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17YGFycm93LSR7b3BlbmVkID8gJ3VwJyA6ICdkb3duJ30tY2lyY2xlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtpY29uU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaWNvblByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25Db2x1bW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRDb2x1bW4gY2xhc3NOYW1lPVwiYXBoLWFjY29yZGlvbl9faGVhZGVyX19jb2wtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICkgOiBoZWFkZXJ9XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAge29wZW5lZCAmJiBjaGlsZHJlbn1cbiAgICAgICAgPC9BcGhBY2NvcmRpb24+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb3BlbmVkICAgOiBmYWxzZSxcbiAgICBoZWFkZXIgICA6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG5cbiAgICB3aXRoSWNvbiA6IHRydWUsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xuICAgIG9wZW5lZCAgICAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjazogcHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBoZWFkZXIgICAgICA6IHByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyRGFyayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWFkZXJTdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICBjaGlsZHJlbiA6IHByb3BUeXBlcy5hbnksXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9iamVjdCxcblxuICAgIHdpdGhJY29uICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGljb25TaXplICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaWNvblN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcblxuICAgIHRvZ2dsZUNhbGxiYWNrOiBwcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19 */");
/* Component Header Column Styles */


var columnStyles = {
  boxSizing: 'border-box',
  display: 'inline-block',
  verticalAlign: 'middle'
};
/* Component Header Icon Column Styles */

var IconColumn =
/*#__PURE__*/
_styled('div', {
  target: "e869uf2"
})(function (props) {
  return _objectSpread$h({}, columnStyles, _defineProperty({
    width: iconColumn,
    lineHeight: 0,
    margin: '-2px 0'
  }, MEDIA_QUERIES.LT.SM, {
    margin: 0
  }));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNtQiIsImZpbGUiOiJBY2NvcmRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVyIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIEhlbHBlciBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMaXN0SXRlbSwgSWNvbiB9IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IF9pY29uU2l6ZSAgID0gKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NJWkVTLlNNID8gMjIgOiAzMCk7XG5jb25zdCBpY29uQ29sdW1uICA9IChfaWNvblNpemUgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCk7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEFjY29yZGlvbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG5cbiAgICBmb250U2l6ZSAgOiBTSVpFUy5NRC5GT05UX1NJWkUsXG4gICAgbGluZUhlaWdodDogU0laRVMuTUQuTElORV9IRUlHSFQsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgU3R5bGVzICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICA6ICdibG9jaycsXG4gICAgbGluZUhlaWdodDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBjb2x1bW5TdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBJY29uIENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IEljb25Db2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBpY29uQ29sdW1uLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgbWFyZ2luOiAnLTJweCAwJyxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb250ZW50IENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IENvbnRlbnRDb2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtpY29uQ29sdW1ufSlgLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4Jyxcbn0pKTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gICAgLyoqXG4gICAgICogSW5oZXJpdCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICBoZWFkZXJQcm9wcyxcbiAgICAgICAgaGVhZGVyU3R5bGVzLFxuXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICB3aXRoSWNvbixcbiAgICAgICAgaWNvblNpemUsXG4gICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgaWNvblN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBMb2NhbCB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIG9wZW5lZCwgc2V0T3BlbmVkIF0gPSB1c2VTdGF0ZShwcm9wcy5vcGVuZWQgfHwgZmFsc2UpO1xuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB0b2dnbGVDYWxsYmFjayA9IChwcm9wcy50b2dnbGVDYWxsYmFjayB8fCBwcm9wcy5vcGVuZWRDYWxsYmFjayk7XG4gICAgICAgIGNvbnN0IGlzT3BlbmVkICAgICAgID0gIW9wZW5lZDtcblxuICAgICAgICBzZXRPcGVuZWQoaXNPcGVuZWQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNhbGxiYWNrKGlzT3BlbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVuZWQocHJvcHMub3BlbmVkKTtcbiAgICB9LCBbIHByb3BzLm9wZW5lZCBdKTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhBY2NvcmRpb25cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWFjY29yZGlvbiAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJQcm9wc31cbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlckRhcmsgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d2l0aEljb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQ29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpY29uU2l6ZSB8fCBfaWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e2BhcnJvdy0ke29wZW5lZCA/ICd1cCcgOiAnZG93bid9LWNpcmNsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmljb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Q29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogaGVhZGVyfVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQWNjb3JkaW9uPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuXG4gICAgd2l0aEljb24gOiB0cnVlLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQgICAgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgb3BlbmVkQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB3aXRoSWNvbiAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uU2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGljb25TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB0b2dnbGVDYWxsYmFjazogcHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ== */");
/* Component Header Content Column Styles */


var ContentColumn =
/*#__PURE__*/
_styled('div', {
  target: "e869uf3"
})(function (props) {
  return _objectSpread$h({}, columnStyles, {
    width: "calc(100% - ".concat(iconColumn, ")"),
    lineHeight: '20px'
  });
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURzQiIsImZpbGUiOiJBY2NvcmRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogSGVscGVyIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgU0NSRUVOX1NJWkVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIEhlbHBlciBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMaXN0SXRlbSwgSWNvbiB9IGZyb20gJy4uLyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IF9pY29uU2l6ZSAgID0gKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NJWkVTLlNNID8gMjIgOiAzMCk7XG5jb25zdCBpY29uQ29sdW1uICA9IChfaWNvblNpemUgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCk7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEFjY29yZGlvbiA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG5cbiAgICBmb250U2l6ZSAgOiBTSVpFUy5NRC5GT05UX1NJWkUsXG4gICAgbGluZUhlaWdodDogU0laRVMuTUQuTElORV9IRUlHSFQsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBIZWFkZXIgU3R5bGVzICovXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICA6ICdibG9jaycsXG4gICAgbGluZUhlaWdodDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb2x1bW4gU3R5bGVzICovXG5jb25zdCBjb2x1bW5TdHlsZXMgPSB7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBJY29uIENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IEljb25Db2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBpY29uQ29sdW1uLFxuICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgbWFyZ2luOiAnLTJweCAwJyxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50IEhlYWRlciBDb250ZW50IENvbHVtbiBTdHlsZXMgKi9cbmNvbnN0IENvbnRlbnRDb2x1bW4gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4uY29sdW1uU3R5bGVzLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtpY29uQ29sdW1ufSlgLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4Jyxcbn0pKTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gICAgLyoqXG4gICAgICogSW5oZXJpdCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICBoZWFkZXJQcm9wcyxcbiAgICAgICAgaGVhZGVyU3R5bGVzLFxuXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICB3aXRoSWNvbixcbiAgICAgICAgaWNvblNpemUsXG4gICAgICAgIGljb25Qcm9wcyxcbiAgICAgICAgaWNvblN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBMb2NhbCB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIG9wZW5lZCwgc2V0T3BlbmVkIF0gPSB1c2VTdGF0ZShwcm9wcy5vcGVuZWQgfHwgZmFsc2UpO1xuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNoaWxkcmVucyB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCB0b2dnbGVDYWxsYmFjayA9IChwcm9wcy50b2dnbGVDYWxsYmFjayB8fCBwcm9wcy5vcGVuZWRDYWxsYmFjayk7XG4gICAgICAgIGNvbnN0IGlzT3BlbmVkICAgICAgID0gIW9wZW5lZDtcblxuICAgICAgICBzZXRPcGVuZWQoaXNPcGVuZWQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNhbGxiYWNrKGlzT3BlbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVuZWQocHJvcHMub3BlbmVkKTtcbiAgICB9LCBbIHByb3BzLm9wZW5lZCBdKTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhBY2NvcmRpb25cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWFjY29yZGlvbiAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJQcm9wc31cbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlckRhcmsgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxNXB4JywgcGFkZGluZ0xlZnQ6ICcxNXB4JywgLi4uaGVhZGVyU3R5bGVzIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJhcGgtYWNjb3JkaW9uX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d2l0aEljb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQ29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpY29uU2l6ZSB8fCBfaWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e2BhcnJvdy0ke29wZW5lZCA/ICd1cCcgOiAnZG93bid9LWNpcmNsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17aWNvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmljb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29sdW1uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Q29sdW1uIGNsYXNzTmFtZT1cImFwaC1hY2NvcmRpb25fX2hlYWRlcl9fY29sLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50Q29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogaGVhZGVyfVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIHtvcGVuZWQgJiYgY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQWNjb3JkaW9uPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BzICovXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9wZW5lZCAgIDogZmFsc2UsXG4gICAgaGVhZGVyICAgOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuXG4gICAgd2l0aEljb24gOiB0cnVlLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuZWQgICAgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgb3BlbmVkQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxuXG4gICAgaGVhZGVyICAgICAgOiBwcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckRhcmsgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB3aXRoSWNvbiAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uU2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGljb25TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgICB0b2dnbGVDYWxsYmFjazogcHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ== */");
/* Component Itself */


function Accordion(props) {
  /**
   * Inherit props
   */
  var header = props.header,
      headerDark = props.headerDark,
      headerProps = props.headerProps,
      headerStyles = props.headerStyles,
      children = props.children,
      className = props.className,
      styles = props.styles,
      withIcon = props.withIcon,
      iconSize = props.iconSize,
      iconProps = props.iconProps,
      iconStyles = props.iconStyles;
  /**
   * Local values
   */

  var _useState = useState(props.opened || false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];
  /**
   * Toggle childrens visibility
   */


  function toggle() {
    var toggleCallback = props.toggleCallback || props.openedCallback;
    var isOpened = !opened;
    setOpened(isOpened);

    if (typeof toggleCallback !== 'function') {
      return;
    }

    toggleCallback(isOpened);
  }
  /**
   * Listen for changes
   */


  useEffect(function () {
    setOpened(props.opened);
  }, [props.opened]);
  /**
   * Render
   */

  return React.createElement(AphAccordion, {
    styles: styles,
    className: "aph-accordion ".concat(className)
  }, React.createElement(ListItem, _extends({}, headerProps, {
    header: headerDark ? true : false,
    styles: _objectSpread$h({
      cursor: 'pointer',
      paddingRight: '15px',
      paddingLeft: '15px'
    }, headerStyles),
    onClick: toggle,
    className: "aph-accordion__header"
  }), children ? React.createElement(Header, {
    className: "aph-accordion__header-row"
  }, withIcon && React.createElement(IconColumn, {
    className: "aph-accordion__header__col-icon"
  }, React.createElement(Icon, _extends({
    size: iconSize || _iconSize,
    slug: "arrow-".concat(opened ? 'up' : 'down', "-circle"),
    styles: iconStyles
  }, iconProps))), React.createElement(ContentColumn, {
    className: "aph-accordion__header__col-content"
  }, header)) : header), opened && children);
}
/* Default Props */

Accordion.defaultProps = {
  opened: false,
  header: '',
  className: '',
  withIcon: true
};
/* Properties Types */

Accordion.propTypes = {
  opened: propTypes.bool,
  openedCallback: propTypes.func,
  header: propTypes.any,
  headerDark: propTypes.bool,
  headerStyles: propTypes.object,
  children: propTypes.any,
  className: propTypes.string,
  styles: propTypes.object,
  withIcon: propTypes.bool,
  iconSize: propTypes.number,
  iconStyles: propTypes.object,
  toggleCallback: propTypes.func
};

/* Component Itself */
var AphCollapsibleChildrenStyled = _styled("div", {
  target: "e19izkhd0"
})("display:block;opacity:1;overflow:hidden;position:relative;margin-right:-10px;margin-left:-10px;transition-timing-function:linear;transition-property:max-height,opacity;will-change:max-height,opacity;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlQ2hpbGRyZW5TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSStDIiwiZmlsZSI6IkNvbGxhcHNpYmxlQ2hpbGRyZW5TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBBcGhDb2xsYXBzaWJsZUNoaWxkcmVuU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5IDogYmxvY2s7XG4gICAgb3BhY2l0eSA6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIG1hcmdpbi1sZWZ0IDogLTEwcHg7XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBtYXgtaGVpZ2h0LCBvcGFjaXR5O1xuXG4gICAgd2lsbC1jaGFuZ2U6IG1heC1oZWlnaHQsIG9wYWNpdHk7XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaENvbGxhcHNpYmxlQ2hpbGRyZW5TdHlsZWQ7XG4iXX0= */"));

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/* Component Itself */

var Collapsible = forwardRef(function (props, ref) {
  var header = props.header,
      headerProps = props.headerProps,
      children = props.children,
      disabled = props.disabled,
      delay = props.delay,
      hover = props.hover,
      icon = props.icon,
      iconSize = props.iconSize;
  var timerDelay = delay * 1000;
  var wrapperRef = useRef(null);
  var wrapperContentRef = useRef(null);

  var _useState = useState(props.opened || false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      openTimer = _useState4[0],
      setOpenTimer = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      closeTimer = _useState6[0],
      setCloseTimer = _useState6[1];

  var _useState7 = useState(Object.assign({
    transitionDuration: props.delay + 's'
  }, props.opened ? null : {
    maxHeight: 0
  })),
      _useState8 = _slicedToArray(_useState7, 2),
      styles = _useState8[0],
      setStyles = _useState8[1];
  /* Custom Styles */


  var headerStyles = Object.assign({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '-10px',
    padding: headerProps && headerProps.lg ? '15px 10px' : '10px',
    cursor: 'pointer',
    color: colors$1.get(disabled ? 'mercury' : 'secondary')
  }, headerProps && headerProps.styles ? headerProps.styles : {});
  /* Header Title */

  var HeaderTitle = headerProps && headerProps.lg ? H2 : H3;
  /**
   * Handle with Collapsible Opening event
   */

  function handleOpen() {
    var openStyles = _objectSpread$i({}, styles, {
      maxHeight: 0,
      display: 'block'
    });

    clearTimeout(closeTimer);
    setStyles(openStyles);
    setTimeout(function () {
      setStyles(_objectSpread$i({}, openStyles, {
        maxHeight: wrapperContentRef.current.clientHeight
      }));
      clearTimeout(openTimer);
      setOpenTimer(setTimeout(function () {
        setStyles(_objectSpread$i({}, openStyles, {
          maxHeight: null
        }));
      }, timerDelay));
    }, 1);
  }
  /**
   * Handle with Collapsible Closing event
   */


  function handleClose() {
    var closeStyles = _objectSpread$i({}, styles, {
      maxHeight: wrapperContentRef.current.clientHeight
    });

    clearTimeout(openTimer);
    setStyles(closeStyles);
    setTimeout(function () {
      setStyles(_objectSpread$i({}, closeStyles, {
        maxHeight: 0
      }));
      clearTimeout(closeTimer);
      setCloseTimer(setTimeout(function () {
        setStyles(_objectSpread$i({}, closeStyles, {
          display: 'none'
        }));
      }, timerDelay + 10));
    }, 10);
  }
  /**
   * Handle with Collapsible Toggle event
   */


  function handleToggle(isOpened) {
    if (isOpened) {
      handleClose();
    } else {
      handleOpen();
    }
  }
  /**
   * Toggle Collapsible visibility
   */


  function toggle() {
    if (disabled) {
      return;
    }

    handleToggle(opened);
    setOpened(!opened);
  }
  /**
   * Unmount
   */


  useEffect(function () {
    return function cleanup() {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);
  return React.createElement(Card, _extends({}, props, {
    ref: ref,
    hover: true,
    className: "aph-collapsible ".concat(opened ? 'active' : ''),
    styles: Object.assign({
      position: 'relative',
      overflow: 'hidden'
    }, props.styles)
  }), !header ? null : React.createElement(HeaderTitle, _extends({}, headerProps, {
    styles: Object.assign(headerStyles, {
      paddingRight: !icon ? null : "".concat(iconSize, "px")
    }),
    onClick: toggle,
    role: "button"
  }), header, !icon ? null : React.createElement(Icon, {
    slug: "arrow-down",
    size: iconSize,
    color: colors$1.get('mercury', 'light'),
    styles: {
      position: 'absolute',
      right: 0,
      transform: opened ? 'rotate(180deg)' : 'initial',
      transition: "transform ".concat(delay, "s linear")
    }
  })), React.createElement(AphCollapsibleChildrenStyled, {
    ref: wrapperRef,
    styles: styles,
    visible: opened
  }, React.createElement("div", {
    ref: wrapperContentRef
  }, children)));
});
/* Default Properties */

Collapsible.defaultProps = {
  opened: false,
  hover: false,
  delay: 0.35,
  styles: {},
  childrenStyles: {},
  icon: true,
  iconSize: 40,
  header: '',
  headerProps: null
};
/* Properties Types */

Collapsible.propTypes = {
  opened: propTypes.bool,
  hover: propTypes.bool,
  delay: propTypes.number,
  icon: propTypes.bool,
  iconSize: propTypes.number,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  childrenStyles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  header: propTypes.any,
  headerProps: propTypes.object
};

/* Component Styles */

var CountdownStyled = _styled("div", {
  target: "e1mleeg60"
})("box-sizing:border-box;position:relative;display:block;margin:0 auto;width:", function (props) {
  return props.aphSize;
}, "px;height:", function (props) {
  return props.aphSize;
}, "px;.", function (props) {
  return props.aphSelector;
}, "{box-sizing:border-box;position:relative;transform:rotate(-90deg) scaleY(-1);&__trace,&__line{fill:none;}&__trace{stroke:", function (props) {
  return colors$1.getFromTheme(props, props.aphBackground);
}, ";}&__line{stroke:", function (props) {
  return colors$1.getFromTheme(props, props.aphColor);
}, ";stroke-linecap:round;transition:stroke-dashoffset 0.1s linear;}&__count{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;display:block;text-align:center;font-weight:normal;font-size:", function (props) {
  return props.aphSize / 2;
}, "px;line-height:", function (props) {
  return props.aphSize;
}, "px;color:", function (props) {
  return colors$1.getFromTheme(props, props.aphColor);
}, ";}}", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvdW50ZG93blN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0MiLCJmaWxlIjoiQ291bnRkb3duU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQ291bnRkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIG1hcmdpbiAgICA6IDAgYXV0bztcbiAgICB3aWR0aCAgICAgOiAke3Byb3BzID0+IHByb3BzLmFwaFNpemV9cHg7XG4gICAgaGVpZ2h0ICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaXplfXB4O1xuXG4gICAgLiR7cHJvcHMgPT4gcHJvcHMuYXBoU2VsZWN0b3J9IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG5cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSBzY2FsZVkoLTEpO1xuXG4gICAgICAgICZfX3RyYWNlLFxuICAgICAgICAmX19saW5lIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmX190cmFjZSB7XG4gICAgICAgICAgICBzdHJva2U6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoQmFja2dyb3VuZCl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGluZSB7XG4gICAgICAgICAgICBzdHJva2UgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5hcGhDb2xvcil9O1xuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICAgICAgdHJhbnNpdGlvbiAgICA6IHN0cm9rZS1kYXNob2Zmc2V0IDAuMXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fY291bnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wICAgICA6IDA7XG4gICAgICAgICAgICByaWdodCAgIDogMDtcbiAgICAgICAgICAgIGJvdHRvbSAgOiAwO1xuICAgICAgICAgICAgbGVmdCAgICA6IDA7XG4gICAgICAgICAgICBtYXJnaW4gIDogMDtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBibG9jaztcblxuICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemUgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaXplIC8gMn1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmFwaFNpemV9cHg7XG5cbiAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmFwaENvbG9yKX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmFwaFN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blN0eWxlZDtcbiJdfQ== */"));

/* Component Constants */

var SELECTOR = 'aph-countdown';
var LOG_PREFIX = 'Aphrodite Countdown:';
var RADIUS$1 = 54;
var VIEW_BOX = 120;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS$1;
/* Component Itself */

function Countdown(props) {
  /**
   * Inherit props
   */
  var background = props.background,
      className = props.className,
      color = props.color,
      log = props.log,
      size = props.size,
      seconds = props.seconds,
      strokeWidth = props.strokeWidth,
      styles = props.styles,
      onFinishCallback = props.onFinishCallback,
      rest = _objectWithoutProperties(props, ["background", "className", "color", "log", "size", "seconds", "strokeWidth", "styles", "onFinishCallback"]);
  /**
   * Local values
   */


  var _useState = useState(seconds),
      _useState2 = _slicedToArray(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      dashoffset = _useState4[0],
      setDashoffset = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      timer = _useState6[0],
      setTimer = _useState6[1];
  /**
   * Handle with countdown progress
   *
   * @param {number} value
   */


  function handleProgress(value) {
    var _progress = value / 100;

    var _dashoffset = CIRCUMFERENCE * (1 - _progress);

    setDashoffset(_dashoffset);

    if (log) {
      console.log(LOG_PREFIX, value + '%', '|', 'offset:', _dashoffset + ';');
    }
  }
  /**
   * Handle with Start
   */


  function handleStart() {
    var _timer = null;
    var _count = 0;
    var _current = seconds;

    var _progress = _current / seconds * 100;

    var miliseconds = 1000;

    if (log) {
      console.log(LOG_PREFIX, seconds, 'seconds to decrease;');
    }

    function _decrease() {
      if (_count > seconds) {
        if (typeof onFinishCallback === 'function') {
          onFinishCallback(seconds, log);
        }

        clearInterval(timer);
        clearInterval(_timer);
        return;
      }

      handleProgress(_progress);
      setCountdown(seconds - _count);
      _count = _count + 1;
      _current = _current - 1;
      _progress = _current / seconds * 100;
    }

    clearInterval(timer);
    clearInterval(_timer);

    _decrease();

    _timer = setInterval(_decrease, miliseconds);
    setTimer(_timer);
    return _timer;
  }
  /**
   * Mount
   */


  useEffect(function () {
    var interval = handleStart();
    return function cleanup() {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [seconds]);
  /**
   * Unmount
   */

  useEffect(function () {
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  /**
   * Render
   */

  return React.createElement(CountdownStyled, _extends({}, rest, {
    aphBackground: background,
    aphColor: color,
    aphSelector: SELECTOR,
    aphSize: size,
    aphStyles: styles,
    className: "".concat(SELECTOR, "-wrapper ").concat(className || '')
  }), React.createElement("svg", {
    className: "".concat(SELECTOR, " ").concat(className || ''),
    width: size,
    height: size,
    viewBox: "0 0 ".concat(VIEW_BOX, " ").concat(VIEW_BOX)
  }, React.createElement("circle", {
    className: "".concat(SELECTOR, "__trace"),
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth
  }), React.createElement("circle", {
    className: "".concat(SELECTOR, "__line"),
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth,
    style: {
      strokeDasharray: CIRCUMFERENCE,
      strokeDashoffset: dashoffset
    }
  })), React.createElement("h4", {
    className: "".concat(SELECTOR, "__count")
  }, countdown));
}
/* Default Props */


Countdown.defaultProps = {
  color: colors$1.get('helper'),
  background: 'transparent',
  seconds: 10,
  size: 32,
  strokeWidth: 8,
  onFinishCallback: function onFinishCallback(seconds, log) {
    return log && console.log(LOG_PREFIX, seconds, 'seconds finished;');
  }
};

/* Pagination Styles */

var AphPaginationStyled = _styled("section", {
  target: "e12zcqyq0"
})("box-sizing:border-box;position:relative;display:block;width:auto;margin:40px auto;padding:10px 60px;max-width:460px;min-height:50px;list-style-type:none;text-align:center;user-select:none;border-radius:5px;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";transition:background-color .2s linear;*{box-sizing:border-box;user-select:none;}.rc-pagination{&-prev,&-next,&-jump-next,&-jump-prev,&-item{display:inline-block;vertical-align:middle;text-align:center;min-width:30px;font-weight:bold;font-size:16px;line-height:20px;border-radius:5px;transition:background-color 0.2s linear;outline:0;border:0;&:not(.rc-pagination-item-active){cursor:pointer;}}&-prev,&-next{position:absolute;padding:2px 2.5px 2.5px;color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";}&-prev{left:15px;}&-next{right:15px;padding-left:1.5px;}&-disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'disabled');
}, ";}&-item,&-jump-prev,&-jump-next{padding:5px;margin:0 5px;color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";background-color:transparent;&-active{color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";}&:active,&:hover{outline:0;border:0;&:not(.rc-pagination-item-active){background-color:", function (props) {
  return colors$1.getOpacity(0.5, colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'disabled'));
}, ";}}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2luYXRpb25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzBDIiwiZmlsZSI6IlBhZ2luYXRpb25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVSSBMaWJyYXJ5IEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogUGFnaW5hdGlvbiBTdHlsZXMgKi9cbmNvbnN0IEFwaFBhZ2luYXRpb25TdHlsZWQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IGF1dG87XG4gICAgbWFyZ2luICAgIDogNDBweCBhdXRvO1xuICAgIHBhZGRpbmcgICA6IDEwcHggNjBweDtcbiAgICBtYXgtd2lkdGggOiA0NjBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIHRyYW5zaXRpb24gICAgICA6IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjtcblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJjLXBhZ2luYXRpb24ge1xuICAgICAgICAmLXByZXYsXG4gICAgICAgICYtbmV4dCxcbiAgICAgICAgJi1qdW1wLW5leHQsXG4gICAgICAgICYtanVtcC1wcmV2LFxuICAgICAgICAmLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheSAgICAgICA6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcblxuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgICAgICY6bm90KC5yYy1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmV2LFxuICAgICAgICAmLW5leHQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZyA6IDJweCAyLjVweCAyLjVweDtcblxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpfTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJldiB7XG4gICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1uZXh0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuaXNEYXJrTW9kZSA/ICdpbnZlcnNlJyA6ICdkaXNhYmxlZCcpKX07XG4gICAgICAgIH1cblxuICAgICAgICAmLWl0ZW0sXG4gICAgICAgICYtanVtcC1wcmV2LFxuICAgICAgICAmLWp1bXAtbmV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4gOiAwIDVweDtcblxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICYtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgICAgICAgICAmOm5vdCgucmMtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRPcGFjaXR5KDAuNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLmlzRGFya01vZGUgPyAnaW52ZXJzZScgOiAnZGlzYWJsZWQnKSkpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaFBhZ2luYXRpb25TdHlsZWQ7XG4iXX0= */"));

/* Component Itself */

function Pagination(props) {
  /**
   * Inherit Props
   */
  var loading = props.loading,
      className = props.className,
      rest = _objectWithoutProperties(props, ["loading", "className"]);
  /**
   * Render
   */


  return React.createElement(AphPaginationStyled, _extends({
    locale: localeInfo,
    showLessItems: true
  }, rest, {
    as: !loading ? Paginator : Placeholder,
    jumpPrevIcon: React.createElement(React.Fragment, null, "\u2022\u2022\u2022"),
    jumpNextIcon: React.createElement(React.Fragment, null, "\u2022\u2022\u2022"),
    prevIcon: React.createElement(Icon, {
      slug: "arrow",
      direction: "left",
      color: "inverse",
      size: 25
    }),
    nextIcon: React.createElement(Icon, {
      slug: "arrow",
      direction: "right",
      color: "inverse",
      size: 25
    }),
    className: "aph-pagination ".concat(className || '')
  }), !loading ? null : React.createElement(React.Fragment, null, React.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-prev"
  }), Array.from({
    length: 3
  }, function (number, index) {
    return React.createElement(Placeholder, {
      width: 30,
      height: 30,
      className: "rc-pagination-item",
      key: "rc-pagination-placeholder-".concat(index)
    });
  }), React.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-next"
  })));
}
/* Default Propeties */


Pagination.defaultProps = {
  onChange: function onChange() {},
  loading: true,
  total: 0,
  current: 1,
  pageSize: 25,
  styles: {}
};
/* Properties Types */

Pagination.propTypes = {
  onChange: propTypes.func.isRequired,
  loading: propTypes.bool,
  total: propTypes.number,
  current: propTypes.number,
  pageSize: propTypes.number,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Wrapper Styles */

var AphCheckboxWrapperStyled = _styled("div", {
  target: "e1a240py0"
})(process.env.NODE_ENV === "production" ? {
  name: "g9qje4",
  styles: "box-sizing:border-box;display:block;position:relative;"
} : {
  name: "g9qje4",
  styles: "box-sizing:border-box;display:block;position:relative;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWUyQyIsImZpbGUiOiJGb3JtQ29udHJvbENoZWNrYm94LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyBIZWxwZXJzICovXG5pbXBvcnQgeyBJQ09OUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50cyBIZWxwZXJzICovXG5pbXBvcnQgSWNvbkNoZWNrVGhpbiBmcm9tICcuLi8uLi9JY29ucy9JY29uQ2hlY2tUaGluJztcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaENoZWNrYm94V3JhcHBlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbmA7XG5cbi8qIE1hc2sgU3R5bGVzICovXG5jb25zdCBBcGhDaGVja2JveE1hc2tTdHlsZWQgPSBzdHlsZWQubGFiZWxgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBjdXJzb3IgICAgOiBwb2ludGVyO1xuXG4gICAgcGFkZGluZy10b3AgICA6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQgOiAke3Byb3BzID0+IHByb3BzLmxhYmVsUmlnaHQgPyAnNDBweCcgOiBudWxsfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHtwcm9wcyA9PiAhcHJvcHMubGFiZWxSaWdodCA/ICc0MHB4JyA6IG51bGx9O1xuXG4gICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/ICdyaWdodCcgOiBudWxsfTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29udGVudCAgIDogXCIgXCI7XG4gICAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICAgICAgd2lkdGggICAgIDogMzBweDtcbiAgICAgICAgaGVpZ2h0ICAgIDogMzBweDtcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG5cbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1pbWFnZTtcblxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0Mm1Oa1lBQUFBQVlBQWpDQjBDOEFBQUFBU1VWT1JLNUNZSUk9KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplICAgIDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoQ2hlY2tib3hTdHlsZWQgPSBzdHlsZWQuaW5wdXRgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5IDogYmxvY2s7XG4gICAgd2lkdGggICA6IDMwcHg7XG4gICAgaGVpZ2h0ICA6IDMwcHg7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgb3BhY2l0eSA6IDA7XG5cbiAgICB0b3AgIDogMDtcbiAgICByaWdodDogJHtwcm9wcyA9PiBwcm9wcy5sYWJlbFJpZ2h0ID8gJzAnIDogbnVsbH07XG4gICAgbGVmdCA6ICR7cHJvcHMgPT4gIXByb3BzLmxhYmVsUmlnaHQgPyAnMCcgOiBudWxsfTtcblxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmxhYmVsUmlnaHQgfHwgcHJvcHMucmlnaHQpID8gJzAnIDogbnVsbH07XG4gICAgICAgIGxlZnQgOiAke3Byb3BzID0+ICghcHJvcHMubGFiZWxSaWdodCAmJiAhcHJvcHMucmlnaHQpID8gJzAnIDogbnVsbH07XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKX0nKTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvciAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcm9wcyA9PiBJQ09OUy5FTkNPREVfU1ZHKFxuICAgICAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldCgnbWVyY3VyeScpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfScpO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQ2hlY2tib3ggPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgaWQsIHJpZ2h0LCBsYWJlbFByb3BzLCBsYWJlbFJpZ2h0IH0gPSBwcm9wcztcbiAgICBsZXQgbmV3UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG5cbiAgICBkZWxldGUgbmV3UHJvcHMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoQ2hlY2tib3hXcmFwcGVyU3R5bGVkPlxuICAgICAgICAgICAgPEFwaENoZWNrYm94U3R5bGVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBcGhDaGVja2JveE1hc2tTdHlsZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtZm9ybS1jb250cm9sLW1hc2sgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgcmlnaHQ9e3JpZ2h0fVxuICAgICAgICAgICAgICAgIGxhYmVsUmlnaHQ9e2xhYmVsUmlnaHQgfHwgcmlnaHR9XG4gICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQXBoQ2hlY2tib3hNYXNrU3R5bGVkPlxuICAgICAgICA8L0FwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICAgIGlkICAgICAgICA6IGBmb3JtQ29udHJvbFJhbmRvbUlEJHtNYXRoLnJhbmRvbSgpfWAsXG4gICAgbGFiZWxQcm9wczoge30sXG4gICAgbGFiZWxSaWdodDogZmFsc2UsXG4gICAgcmlnaHQgICAgIDogZmFsc2UsXG4gICAgc3R5bGVzICAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gICAgaWQgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsUHJvcHM6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWxSaWdodDogcHJvcFR5cGVzLmJvb2wsXG4gICAgcmlnaHQgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIl19 */"
});
/* Mask Styles */


var AphCheckboxMaskStyled = _styled("label", {
  target: "e1a240py1"
})("box-sizing:border-box;display:block;position:relative;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-right:", function (props) {
  return props.labelRight ? '40px' : null;
}, ";padding-left:", function (props) {
  return !props.labelRight ? '40px' : null;
}, ";text-align:", function (props) {
  return props.right ? 'right' : null;
}, ";&:before{box-sizing:border-box;content:\" \";position:absolute;display:block;width:30px;height:30px;border:1px solid  ", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";top:0;border-radius:5px;transition-timing-function:ease;transition-duration:0.15s;transition-property:background-color,background-image;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";background-size:20px;background-position:center;background-repeat:no-repeat;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCMEMiLCJmaWxlIjoiRm9ybUNvbnRyb2xDaGVja2JveC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgSUNPTlMsIFJBRElVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgSGVscGVycyAqL1xuaW1wb3J0IEljb25DaGVja1RoaW4gZnJvbSAnLi4vLi4vSWNvbnMvSWNvbkNoZWNrVGhpbic7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhDaGVja2JveFdyYXBwZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG5gO1xuXG4vKiBNYXNrIFN0eWxlcyAqL1xuY29uc3QgQXBoQ2hlY2tib3hNYXNrU3R5bGVkID0gc3R5bGVkLmxhYmVsYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcblxuICAgIHBhZGRpbmctdG9wICAgOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHtwcm9wcyA9PiBwcm9wcy5sYWJlbFJpZ2h0ID8gJzQwcHgnIDogbnVsbH07XG4gICAgcGFkZGluZy1sZWZ0ICA6ICR7cHJvcHMgPT4gIXByb3BzLmxhYmVsUmlnaHQgPyAnNDBweCcgOiBudWxsfTtcblxuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMucmlnaHQgPyAncmlnaHQnIDogbnVsbH07XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbnRlbnQgICA6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgICAgIHdpZHRoICAgICA6IDMwcHg7XG4gICAgICAgIGhlaWdodCAgICA6IDMwcHg7XG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuXG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtaW1hZ2U7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaENoZWNrYm94U3R5bGVkID0gc3R5bGVkLmlucHV0YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICAgIHdpZHRoICAgOiAzMHB4O1xuICAgIGhlaWdodCAgOiAzMHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIG9wYWNpdHkgOiAwO1xuXG4gICAgdG9wICA6IDA7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICcwJyA6IG51bGx9O1xuICAgIGxlZnQgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzAnIDogbnVsbH07XG5cbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5sYWJlbFJpZ2h0IHx8IHByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuICAgICAgICBsZWZ0IDogJHtwcm9wcyA9PiAoIXByb3BzLmxhYmVsUmlnaHQgJiYgIXByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3Byb3BzID0+IElDT05TLkVOQ09ERV9TVkcoXG4gICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9Jyk7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3IgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2JhY2tncm91bmQnKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmNoZWNrZWQgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXQoJ21lcmN1cnknKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX0nKTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENoZWNrYm94ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29sb3IsIGlkLCByaWdodCwgbGFiZWxQcm9wcywgbGFiZWxSaWdodCB9ID0gcHJvcHM7XG4gICAgbGV0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuXG4gICAgZGVsZXRlIG5ld1Byb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICAgICAgICAgIDxBcGhDaGVja2JveFN0eWxlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QXBoQ2hlY2tib3hNYXNrU3R5bGVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbC1tYXNrICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgICAgICBsYWJlbFJpZ2h0PXtsYWJlbFJpZ2h0IHx8IHJpZ2h0fVxuICAgICAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0FwaENoZWNrYm94TWFza1N0eWxlZD5cbiAgICAgICAgPC9BcGhDaGVja2JveFdyYXBwZXJTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZCAgICAgICAgOiBgZm9ybUNvbnRyb2xSYW5kb21JRCR7TWF0aC5yYW5kb20oKX1gLFxuICAgIGxhYmVsUHJvcHM6IHt9LFxuICAgIGxhYmVsUmlnaHQ6IGZhbHNlLFxuICAgIHJpZ2h0ICAgICA6IGZhbHNlLFxuICAgIHN0eWxlcyAgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIGlkICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbFByb3BzOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsUmlnaHQ6IHByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0ICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ== */"));
/* Component Styles */


var AphCheckboxStyled = _styled("input", {
  target: "e1a240py2"
})("box-sizing:border-box;position:absolute;display:block;width:30px;height:30px;margin:0;opacity:0;top:0;right:", function (props) {
  return props.labelRight ? '0' : null;
}, ";left:", function (props) {
  return !props.labelRight ? '0' : null;
}, ";vertical-align:middle;+ .aph-form-control-mask:before{right:", function (props) {
  return props.labelRight || props.right ? '0' : null;
}, ";left:", function (props) {
  return !props.labelRight && !props.right ? '0' : null;
}, ";}&:checked + .aph-form-control-mask:before{background-image:url('", function (props) {
  return ICONS.ENCODE_SVG(React.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.getFromTheme(props, props.color || 'secondary')
  }));
}, "');}&.disabled,&:disabled{+ .aph-form-control-mask:before{border-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";}&:checked + .aph-form-control-mask:before{background-image:url('", function (props) {
  return ICONS.ENCODE_SVG(React.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.get('mercury')
  }));
}, "');}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEc0MiLCJmaWxlIjoiRm9ybUNvbnRyb2xDaGVja2JveC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgSUNPTlMsIFJBRElVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgSGVscGVycyAqL1xuaW1wb3J0IEljb25DaGVja1RoaW4gZnJvbSAnLi4vLi4vSWNvbnMvSWNvbkNoZWNrVGhpbic7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhDaGVja2JveFdyYXBwZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG5gO1xuXG4vKiBNYXNrIFN0eWxlcyAqL1xuY29uc3QgQXBoQ2hlY2tib3hNYXNrU3R5bGVkID0gc3R5bGVkLmxhYmVsYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcblxuICAgIHBhZGRpbmctdG9wICAgOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHtwcm9wcyA9PiBwcm9wcy5sYWJlbFJpZ2h0ID8gJzQwcHgnIDogbnVsbH07XG4gICAgcGFkZGluZy1sZWZ0ICA6ICR7cHJvcHMgPT4gIXByb3BzLmxhYmVsUmlnaHQgPyAnNDBweCcgOiBudWxsfTtcblxuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMucmlnaHQgPyAncmlnaHQnIDogbnVsbH07XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbnRlbnQgICA6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgICAgIHdpZHRoICAgICA6IDMwcHg7XG4gICAgICAgIGhlaWdodCAgICA6IDMwcHg7XG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuXG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtaW1hZ2U7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaENoZWNrYm94U3R5bGVkID0gc3R5bGVkLmlucHV0YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICAgIHdpZHRoICAgOiAzMHB4O1xuICAgIGhlaWdodCAgOiAzMHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIG9wYWNpdHkgOiAwO1xuXG4gICAgdG9wICA6IDA7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICcwJyA6IG51bGx9O1xuICAgIGxlZnQgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzAnIDogbnVsbH07XG5cbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5sYWJlbFJpZ2h0IHx8IHByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuICAgICAgICBsZWZ0IDogJHtwcm9wcyA9PiAoIXByb3BzLmxhYmVsUmlnaHQgJiYgIXByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3Byb3BzID0+IElDT05TLkVOQ09ERV9TVkcoXG4gICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9Jyk7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3IgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2JhY2tncm91bmQnKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmNoZWNrZWQgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXQoJ21lcmN1cnknKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX0nKTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENoZWNrYm94ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29sb3IsIGlkLCByaWdodCwgbGFiZWxQcm9wcywgbGFiZWxSaWdodCB9ID0gcHJvcHM7XG4gICAgbGV0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuXG4gICAgZGVsZXRlIG5ld1Byb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICAgICAgICAgIDxBcGhDaGVja2JveFN0eWxlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QXBoQ2hlY2tib3hNYXNrU3R5bGVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbC1tYXNrICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgICAgICBsYWJlbFJpZ2h0PXtsYWJlbFJpZ2h0IHx8IHJpZ2h0fVxuICAgICAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0FwaENoZWNrYm94TWFza1N0eWxlZD5cbiAgICAgICAgPC9BcGhDaGVja2JveFdyYXBwZXJTdHlsZWQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZCAgICAgICAgOiBgZm9ybUNvbnRyb2xSYW5kb21JRCR7TWF0aC5yYW5kb20oKX1gLFxuICAgIGxhYmVsUHJvcHM6IHt9LFxuICAgIGxhYmVsUmlnaHQ6IGZhbHNlLFxuICAgIHJpZ2h0ICAgICA6IGZhbHNlLFxuICAgIHN0eWxlcyAgICA6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIGlkICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbFByb3BzOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsUmlnaHQ6IHByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0ICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ== */"));
/* Component Itself */


var Checkbox = forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      color = props.color,
      id = props.id,
      right = props.right,
      labelProps = props.labelProps,
      labelRight = props.labelRight;
  var newProps = Object.assign({}, props);
  delete newProps.children;
  return React.createElement(AphCheckboxWrapperStyled, null, React.createElement(AphCheckboxStyled, _extends({
    className: "aph-form-control ".concat(className || '')
  }, newProps, {
    ref: ref,
    type: "checkbox"
  })), React.createElement(AphCheckboxMaskStyled, _extends({
    className: "aph-form-control-mask ".concat(className || ''),
    htmlFor: id,
    color: color,
    right: right,
    labelRight: labelRight || right
  }, labelProps), children));
});
/* Default Properties */

Checkbox.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  labelProps: {},
  labelRight: false,
  right: false,
  styles: {}
};
/* Properties Types */

Checkbox.propTypes = {
  id: propTypes.string.isRequired,
  labelProps: propTypes.object,
  labelRight: propTypes.bool,
  right: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Styles */
var AphFormControlWrapperStyled = _styled("div", {
  target: "e1npxlgh0"
})(process.env.NODE_ENV === "production" ? {
  name: "8zz7ay",
  styles: "box-sizing:border-box;position:relative;display:block;"
} : {
  name: "8zz7ay",
  styles: "box-sizing:border-box;position:relative;display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sV3JhcHBlclN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJOEMiLCJmaWxlIjoiRm9ybUNvbnRyb2xXcmFwcGVyU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xXcmFwcGVyU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhGb3JtQ29udHJvbFdyYXBwZXJTdHlsZWQ7XG4iXX0= */"
});

/* Component Styles */

var AphFormControlLabelStyled = _styled("label", {
  target: "e17pdeij0"
})("box-sizing:border-box;position:absolute;top:", function (props) {
  return props.textArea ? '15px' : '50%';
}, ";left:10px;display:inline-block;pointer-events:none;color:", function (props) {
  return colors$1.getFromTheme(props, 'helper');
}, ";font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";text-transform:uppercase;transform:", function (props) {
  return props.textArea ? null : 'translateY(-50%)';
}, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;&.aph-form-label--top{top:2.5px;font-size:", SIZES.SM.FONT_SIZE, ";transform:translateY(0);}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sTGFiZWxTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUThDIiwiZmlsZSI6IkZvcm1Db250cm9sTGFiZWxTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xMYWJlbFN0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgIHRvcCAgICAgICA6ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFyZWEgPyAnMTVweCcgOiAnNTAlJ307XG4gICAgbGVmdCAgICAgIDogMTBweDtcbiAgICBkaXNwbGF5ICAgOiBpbmxpbmUtYmxvY2s7XG5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKX07XG5cbiAgICBmb250LXNpemUgIDogJHtTSVpFUy5NRC5GT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0OiAke1NJWkVTLk1ELkxJTkVfSEVJR0hUfTtcblxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFyZWEgPyBudWxsIDogJ3RyYW5zbGF0ZVkoLTUwJSknfTtcblxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4xNXM7XG5cbiAgICAmLmFwaC1mb3JtLWxhYmVsLS10b3Age1xuICAgICAgICB0b3AgICAgICA6IDIuNXB4O1xuICAgICAgICBmb250LXNpemU6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRm9ybUNvbnRyb2xMYWJlbFN0eWxlZDtcbiJdfQ== */"));

/**
 * Component Styled
 *
 * @param {object} properties - component props
 */

var FormControlStyled = _styled("input", {
  target: "eub2l8f0"
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-weight:", SIZES.MD.FONT_WEIGHT, ";font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";border-radius:", RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", function (props) {
  return colors$1.getFromTheme(props, 'mercury', 'light');
}, ";font-weight:300;}&:active,&:focus{color:", function (props) {
  return colors$1.getFromTheme(props, 'black');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, props.error ? 'error' : props.color || 'secondary', 'crystal');
}, ";+ .aph-form-label{top:2.5px;font-size:", SIZES.SM.FONT_SIZE, ";transform:translateY(0);}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return colors$1.getFromTheme(props, props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", function (props) {
  return colors$1.getFromTheme(props, 'black');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled', 'crystal');
}, ";&:hover,&:active,&:focus{+ .aph-form-label{color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";}}}&.aph-form-control--middle{padding:10px;}", function (props) {
  return !props.error ? null : "\n        color: ".concat(function (props) {
    return colors$1.getFromTheme(props, 'error');
  }, ";\n\n        + .aph-form-label {\n            color: ").concat(function (props) {
    return colors$1.getFromTheme(props, 'error');
  }, ";\n        }\n\n        &:hover,\n        &:active,\n        &:focus {\n            + .aph-form-label {\n                color: ").concat(function (props) {
    return colors$1.getFromTheme(props, 'error');
  }, ";\n            }\n        }\n    ");
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3R5bGVkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhc0MiLCJmaWxlIjoiRm9ybUNvbnRyb2xTdHlsZWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgUkFESVVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQ29tcG9uZW50IFN0eWxlZFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIC0gY29tcG9uZW50IHByb3BzXG4gKi9cbmNvbnN0IEZvcm1Db250cm9sU3R5bGVkID0gc3R5bGVkLmlucHV0YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgd2lkdGggICAgIDogMTAwJTtcbiAgICBtYXJnaW4gICAgOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZyAgIDogMjBweCAxMHB4IDA7XG5cbiAgICBmb250LXdlaWdodDogJHtTSVpFUy5NRC5GT05UX1dFSUdIVH07XG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuTUQuRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5NRC5MSU5FX0hFSUdIVH07XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2JhY2tncm91bmQnKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvciwgcGFkZGluZztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcblxuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBwYWRkaW5nO1xuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlICAgICAgICAgOiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdtZXJjdXJ5JywgJ2xpZ2h0Jyl9O1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2JsYWNrJyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5lcnJvciA/ICdlcnJvcicgOiAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKSwgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgdG9wICAgICAgOiAyLjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtTSVpFUy5TTS5GT05UX1NJWkV9O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuZXJyb3IgPyAnZXJyb3InIDogKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSkpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZGlzYWJsZWQsXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmxhY2snKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJywgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYXBoLWZvcm0tY29udHJvbC0tbWlkZGxlIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+ICFwcm9wcy5lcnJvciA/IG51bGwgOiBgXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdlcnJvcicpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xTdHlsZWQ7XG4iXX0= */"));

/* Component Styles */

var AphFormControlErrorMsgStyled = _styled("label", {
  target: "epzfivm0"
})("box-sizing:border-box;display:block;padding:0 10px;max-height:0;color:", function (props) {
  return colors$1.getFromTheme(props, 'error');
}, ";font-size:", SIZES.SM.FONT_SIZE, ";line-height:", SIZES.SM.LINE_HEIGHT, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;transition-property:max-height;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sRXJyb3JNc2dTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWlEIiwiZmlsZSI6IkZvcm1Db250cm9sRXJyb3JNc2dTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xFcnJvck1zZ1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHBhZGRpbmcgICA6IDAgMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuXG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5TTS5MSU5FX0hFSUdIVH07XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBtYXgtaGVpZ2h0O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhGb3JtQ29udHJvbEVycm9yTXNnU3R5bGVkO1xuIl19 */"));

/* Component Itself */

var FormControlInputNumber = memo(forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      prefix = props.prefix,
      error = props.error,
      errorMessage = props.errorMessage;

  var _useState = useState(typeof value === 'number'),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];
  /* Inherit Props */


  var inheritProps = Object.assign({}, props);
  var excludedProps = ['label', 'labelProps', 'errorMessage'];
  excludedProps.map(function (excludedProp) {
    delete inheritProps[excludedProp];
    return true;
  });
  /**
   * Trigger
   */

  useEffect(function () {
    setHasValue(typeof value === 'number');
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} inputValue - input change synthetic event
   */

  function handleChange(inputValue) {
    setHasValue(typeof inputValue === 'number');

    if (typeof onChange === 'function') {
      onChange(inputValue);
    }
  }

  return React.createElement(AphFormControlWrapperStyled, null, React.createElement(FormControlStyled, _extends({}, inheritProps, {
    as: InputNumber,
    ref: ref,
    onChange: handleChange,
    enableMobileNumericKeyboard: true,
    className: "aph-form-control ".concat(!label || !label && hasValue ? 'aph-form-control--middle' : '', " ").concat(className || '')
  })), !label ? null : React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

FormControlInputNumber.defaultProps = {
  id: '',
  label: '',
  labelProps: {},
  type: 'tel',
  styles: {}
};
/* Properties Types */

FormControlInputNumber.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  labelProps: propTypes.object,
  type: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Itself */

var FormControlInputNumber$1 = memo(forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      error = props.error,
      errorMessage = props.errorMessage;
  /* Inherit Props */

  var inheritProps = Object.assign({}, props);
  var excludedProps = ['label', 'labelProps', 'errorMessage'];
  excludedProps.map(function (excludedProp) {
    delete inheritProps[excludedProp];
    return true;
  });
  /**
   * Handle with input changes
   *
   * @param {object} evt         - input change synthetic event
   * @param {string} maskedValue - input masked value
   * @param {string} floatValue  - input float value
   */

  function handleChange(evt, maskedValue, floatValue) {
    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), floatValue, maskedValue);
    }
  }

  return React.createElement(AphFormControlWrapperStyled, null, React.createElement(FormControlStyled, _extends({}, inheritProps, {
    as: CurrencyInput,
    ref: ref,
    error: error ? 'true' : null,
    onChange: function onChange() {},
    onChangeEvent: handleChange,
    className: "aph-form-control ".concat(className || '')
  })), !label ? null : React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label aph-form-label--top"
  }), label), React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

FormControlInputNumber$1.defaultProps = {
  id: '',
  label: '',
  btn: null,
  styles: {},
  inputType: 'tel',
  thousandSeparator: '.',
  decimalSeparator: ',',
  prefix: 'R$',
  value: 0,
  precision: 2,
  allowEmpty: true,
  allowNegative: true
};
/* Properties Types */

FormControlInputNumber$1.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  type: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  thousandSeparator: propTypes.string,
  decimalSeparator: propTypes.string,
  prefix: propTypes.string,
  value: propTypes.number,
  precision: propTypes.number,
  allowEmpty: propTypes.bool,
  allowNegative: propTypes.bool
};

/* Component Styles */

var AphFormControlButtonStyled = _styled("button", {
  target: "ect8n7f0"
})("box-sizing:border-box;position:absolute;display:block;padding:0;margin:0;width:30px;height:30px;top:10px;z-index:10;font-size:30px;line-height:30px;border:0;outline:0;background:transparent;text-align:center;&:active,&:focus,&:hover{color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";border:0;outline:0;background:transparent;}", function (props) {
  return props.left ? 'left' : 'right';
}, ":5px;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sQnV0dG9uU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnRCIsImZpbGUiOiJGb3JtQ29udHJvbEJ1dHRvblN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtQ29udHJvbEJ1dHRvblN0eWxlZCA9IHN0eWxlZC5idXR0b25gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwYWRkaW5nICAgOiAwO1xuICAgIG1hcmdpbiAgICA6IDA7XG4gICAgd2lkdGggICAgIDogMzBweDtcbiAgICBoZWlnaHQgICAgOiAzMHB4O1xuICAgIHRvcCAgICAgICA6IDEwcHg7XG4gICAgei1pbmRleCAgIDogMTA7XG5cbiAgICBmb250LXNpemUgIDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcblxuICAgIGJvcmRlciAgICA6IDA7XG4gICAgb3V0bGluZSAgIDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJyl9O1xuXG4gICAgICAgIGJvcmRlciAgICA6IDA7XG4gICAgICAgIG91dGxpbmUgICA6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gKHByb3BzLmxlZnQgPyAnbGVmdCcgOiAncmlnaHQnKX06IDVweDtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRm9ybUNvbnRyb2xCdXR0b25TdHlsZWQ7XG4iXX0= */"));

/* Component Itself */

var Input = memo(forwardRef(function (props, ref) {
  if (type === 'checkbox') {
    return React.createElement(Checkbox, _extends({}, props, {
      color: props.error ? 'error' : props.color,
      ref: ref
    }));
  }

  if (type === 'number') {
    return React.createElement(FormControlInputNumber, _extends({}, props, {
      ref: ref
    }));
  }

  if (type === 'currency') {
    return React.createElement(FormControlInputNumber$1, _extends({}, props, {
      ref: ref
    }));
  }

  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      onPaste = props.onPaste,
      preventPaste = props.preventPaste,
      type = props.type,
      btn = props.btn,
      button = props.button,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;

  var _useState = useState(value ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];
  /**
   * Trigger
   */


  useEffect(function () {
    setHasValue(value ? true : false);
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} evt - input change synthetic event
   */

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }
  /**
   * Handle with input paste
   *
   * @param {object} evt - input change synthetic event
   */


  function handlePaste(evt) {
    if (preventPaste) {
      evt.preventDefault();
    }

    if (typeof onPaste === 'function') {
      onPaste(Object.assign({}, evt), inputValue);
    }
  }

  return React.createElement(AphFormControlWrapperStyled, {
    hasButton: btn || button ? true : false,
    buttonAlign: btn && btn.align ? btn.align : button && button.align ? button.align : ''
  }, React.createElement(FormControlStyled, _extends({
    name: id
  }, props, {
    ref: ref,
    onChange: handleChange,
    onPaste: handlePaste,
    className: "aph-form-control ".concat(!label || !label && hasValue ? 'aph-form-control--middle' : '', " ").concat(className || '')
  })), !label ? null : React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), !btn && !button ? null : React.createElement(AphFormControlButtonStyled, null, React.createElement("span", _extends({}, btn, button))), React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

Input.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  label: '',
  btn: null,
  button: null,
  styles: {}
};
/* Properties Types */

Input.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  button: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Itself */

var FormControlSelect = memo(forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      btn = props.btn,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;

  var _useState = useState(typeof value === 'number' || value ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];

  var styles = {
    height: '50px',
    cursor: 'pointer',
    paddingRight: '40px'
  };
  /**
   * Trigger
   */

  useEffect(function () {
    setHasValue(value ? true : false);
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} evt - input change synthetic event
   */

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(typeof inputValue === 'number' || inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }

  return React.createElement(AphFormControlWrapperStyled, null, React.createElement(FormControlStyled, _extends({}, props, {
    as: "select",
    ref: ref,
    onChange: handleChange,
    styles: Object.assign({}, styles, props.styles)
  })), !label ? null : React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), React.createElement(AphFormControlButtonStyled, {
    type: "button",
    styles: {
      pointerEvents: 'none'
    }
  }, React.createElement(Icon, {
    size: 30,
    slug: "arrow-down",
    color: props.disabled ? 'disabled' : 'base'
  })), React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
/* Default Properties */

FormControlSelect.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  label: '',
  btn: null,
  styles: {}
};
/* Properties Types */

FormControlSelect.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

/* Component Itself */

var FormControlTextArea = memo(forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      btn = props.btn,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;

  var _useState = useState(value ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];

  var inputId = "".concat(id || 'formControl');
  var styles = "\n        max-width : 100%;\n        min-width : 100%;\n        min-height: 90px;\n        padding-bottom: 10px;\n\n        &[rows=\"4\"] {\n            min-height: 110px;\n        }\n\n        &[rows=\"5\"] {\n            min-height: 130px;\n        }\n\n        &[rows=\"6\"] {\n            min-height: 150px;\n        }\n\n        &[rows=\"7\"] {\n            min-height: 170px;\n        }\n\n        &[rows=\"8\"] {\n            min-height: 190px;\n        }\n\n        &[rows=\"9\"] {\n            min-height: 210px;\n        }\n\n        &[rows=\"10\"] {\n            min-height: 230px;\n        }\n\n        ".concat(function (props) {
    return props.styles;
  }, ";\n    ");
  /**
   * Trigger
   */

  useEffect(function () {
    setHasValue(value ? true : false);
  }, [value]);
  /**
   * Handle with input changes
   *
   * @param {object} evt - input change synthetic event
   */

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt));
    }
  }

  return React.createElement(AphFormControlWrapperStyled, null, React.createElement(FormControlStyled, _extends({}, props, {
    as: "textarea",
    onChange: handleChange,
    styles: styles
  })), !label ? null : React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: inputId,
    textArea: true,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: inputId,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));

var aphFormSwitchCommonStyles = "\n    box-sizing: border-box;\n    cursor    : pointer;\n";
/* Component Wrapper Styles */

var AphFormSwitchWrapper = _styled("label", {
  target: "e64k3mr0"
})(aphFormSwitchCommonStyles, ";position:relative;display:flex;min-width:50px;min-height:30px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:", function (props) {
  return props.textSmall ? SIZES.SM.FONT_SIZE : null;
}, ";text-align:", function (props) {
  return props.textAlign || 'left';
}, ";", function (props) {
  return props.toggleAlign !== 'right' ? {
    paddingLeft: '50px',
    '.aph-form-switch__wrapper': {
      left: 0
    }
  } : {
    paddingRight: '50px',
    '.aph-form-switch__wrapper': {
      right: 0
    }
  };
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3dpdGNoU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF5QyIsImZpbGUiOiJGb3JtQ29udHJvbFN3aXRjaFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBhcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzID0gYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbmA7XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogZmxleDtcblxuICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ24gICA6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy50ZXh0U21hbGwgPyAoU0laRVMuU00uRk9OVF9TSVpFKSA6IG51bGx9O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduIHx8ICdsZWZ0J307XG5cbiAgICAkeyhwcm9wcyA9PiAocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0pfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGVXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgIDogYmxvY2s7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZSA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuXG4gICAgd2lkdGggOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiByaWdodCwgbGVmdDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnd2hpdGUnKX07XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG5gO1xuXG4vKiBDb21wb25lbnQgSW5wdXQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogNXB4IDA7XG5cbiAgICB3aWR0aCAgICAgICAgOiA1MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJyl9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3I7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlICAgICAgICAgOiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJywgJ2xpZ2h0JywgMC41KX07XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3N1Y2Nlc3MnKSl9O1xuXG4gICAgICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJyksICdsaWdodCcsIDAuNSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgKyAuYXBoLWZvcm0tc3dpdGNoIHtcbiAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vKiBDb21wb25lbnQgQ29udGVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hDb250ZW50ID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aCAgOiAxMDAlO1xuXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgICR7cHJvcHMgPT4gKCFwcm9wcy5oYXNDaGlsZHJlbikgPyBudWxsIDogKChwcm9wcy50b2dnbGVBbGlnbiAhPT0gJ3JpZ2h0JykgPyB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCcsXG4gICAgfSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTBweCcsXG4gICAgfSl9O1xuYDtcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaCA9IHtcbiAgICBXcmFwcGVyICAgICAgOiBBcGhGb3JtU3dpdGNoV3JhcHBlcixcbiAgICBUb2dnbGVXcmFwcGVyOiBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlcixcbiAgICBUb2dnbGUgICAgICAgOiBBcGhGb3JtU3dpdGNoVG9nZ2xlLFxuICAgIElucHV0ICAgICAgICA6IEFwaEZvcm1Td2l0Y2hJbnB1dCxcbiAgICBDb250ZW50ICAgICAgOiBBcGhGb3JtU3dpdGNoQ29udGVudCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRm9ybVN3aXRjaDtcbiJdfQ== */"));
/* Component Toggle Wrapper Styles */


var AphFormSwitchToggleWrapper = _styled("label", {
  target: "e64k3mr1"
})(aphFormSwitchCommonStyles, ";position:absolute;display:block;top:50%;transform:translateY(-50%);line-height:0;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3dpdGNoU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDK0MiLCJmaWxlIjoiRm9ybUNvbnRyb2xTd2l0Y2hTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuY29uc3QgYXBoRm9ybVN3aXRjaENvbW1vblN0eWxlcyA9IGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5gO1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGZsZXg7XG5cbiAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG5cbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZSA6ICR7cHJvcHMgPT4gcHJvcHMudGV4dFNtYWxsID8gKFNJWkVTLlNNLkZPTlRfU0laRSkgOiBudWxsfTtcbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiB8fCAnbGVmdCd9O1xuXG4gICAgJHsocHJvcHMgPT4gKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNTBweCcsXG5cbiAgICAgICAgJy5hcGgtZm9ybS1zd2l0Y2hfX3dyYXBwZXInOiB7XG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9KX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlciA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICA6IGJsb2NrO1xuICAgIHRvcCAgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIGxpbmUtaGVpZ2h0OiAwO1xuYDtcblxuLyogQ29tcG9uZW50IFRvZ2dsZSBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGUgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgIDogMDtcblxuICAgIHdpZHRoIDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogcmlnaHQsIGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuYDtcblxuLyogQ29tcG9uZW50IElucHV0IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6IDVweCAwO1xuXG4gICAgd2lkdGggICAgICAgIDogNTBweDtcbiAgICBoZWlnaHQgICAgICAgOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcsICdsaWdodCcsIDAuNSl9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpLCAnbGlnaHQnLCAwLjUpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IENvbnRlbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoQ29udGVudCA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGggIDogMTAwJTtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMuaGFzQ2hpbGRyZW4pID8gbnVsbCA6ICgocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgIH0pfTtcbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2ggPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Td2l0Y2g7XG4iXX0= */"));
/* Component Toggle Styles */


var AphFormSwitchToggle = _styled("label", {
  target: "e64k3mr2"
})(aphFormSwitchCommonStyles, ";position:absolute;top:0;width:30px;height:30px;transition-property:right,left;transition-duration:0.25s;transition-timing-function:ease;border-radius:50%;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'white');
}, ";box-shadow:0 0 5px 0 ", colors$1.get('black', 'original', 0.25), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3dpdGNoU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEd0MiLCJmaWxlIjoiRm9ybUNvbnRyb2xTd2l0Y2hTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuY29uc3QgYXBoRm9ybVN3aXRjaENvbW1vblN0eWxlcyA9IGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5gO1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGZsZXg7XG5cbiAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG5cbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZSA6ICR7cHJvcHMgPT4gcHJvcHMudGV4dFNtYWxsID8gKFNJWkVTLlNNLkZPTlRfU0laRSkgOiBudWxsfTtcbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiB8fCAnbGVmdCd9O1xuXG4gICAgJHsocHJvcHMgPT4gKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNTBweCcsXG5cbiAgICAgICAgJy5hcGgtZm9ybS1zd2l0Y2hfX3dyYXBwZXInOiB7XG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9KX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlciA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICA6IGJsb2NrO1xuICAgIHRvcCAgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIGxpbmUtaGVpZ2h0OiAwO1xuYDtcblxuLyogQ29tcG9uZW50IFRvZ2dsZSBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGUgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgIDogMDtcblxuICAgIHdpZHRoIDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogcmlnaHQsIGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuYDtcblxuLyogQ29tcG9uZW50IElucHV0IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6IDVweCAwO1xuXG4gICAgd2lkdGggICAgICAgIDogNTBweDtcbiAgICBoZWlnaHQgICAgICAgOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcsICdsaWdodCcsIDAuNSl9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpLCAnbGlnaHQnLCAwLjUpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IENvbnRlbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoQ29udGVudCA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGggIDogMTAwJTtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMuaGFzQ2hpbGRyZW4pID8gbnVsbCA6ICgocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgIH0pfTtcbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2ggPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Td2l0Y2g7XG4iXX0= */"));
/* Component Input Styles */


var AphFormSwitchInput = _styled("input", {
  target: "e64k3mr3"
})(aphFormSwitchCommonStyles, ";padding:0;margin:5px 0;width:50px;height:20px;border-radius:15px;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";border:0;outline:0;transition-property:background-color;transition-duration:0.25s;transition-timing-function:ease;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&.disabled,&:disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled', 'light', 0.5);
}, ";}&:checked{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.color || 'success');
}, ";+ .aph-form-switch{&__toggle{left:20px;}}&:disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.color || 'success', 'light', 0.5);
}, ";}}+ .aph-form-switch{&__toggle{left:0;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3dpdGNoU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFdUMiLCJmaWxlIjoiRm9ybUNvbnRyb2xTd2l0Y2hTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuY29uc3QgYXBoRm9ybVN3aXRjaENvbW1vblN0eWxlcyA9IGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5gO1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGZsZXg7XG5cbiAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG5cbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZSA6ICR7cHJvcHMgPT4gcHJvcHMudGV4dFNtYWxsID8gKFNJWkVTLlNNLkZPTlRfU0laRSkgOiBudWxsfTtcbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiB8fCAnbGVmdCd9O1xuXG4gICAgJHsocHJvcHMgPT4gKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNTBweCcsXG5cbiAgICAgICAgJy5hcGgtZm9ybS1zd2l0Y2hfX3dyYXBwZXInOiB7XG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9KX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlciA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICA6IGJsb2NrO1xuICAgIHRvcCAgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIGxpbmUtaGVpZ2h0OiAwO1xuYDtcblxuLyogQ29tcG9uZW50IFRvZ2dsZSBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGUgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgIDogMDtcblxuICAgIHdpZHRoIDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogcmlnaHQsIGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuYDtcblxuLyogQ29tcG9uZW50IElucHV0IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6IDVweCAwO1xuXG4gICAgd2lkdGggICAgICAgIDogNTBweDtcbiAgICBoZWlnaHQgICAgICAgOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcsICdsaWdodCcsIDAuNSl9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpLCAnbGlnaHQnLCAwLjUpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IENvbnRlbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoQ29udGVudCA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGggIDogMTAwJTtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMuaGFzQ2hpbGRyZW4pID8gbnVsbCA6ICgocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgIH0pfTtcbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2ggPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Td2l0Y2g7XG4iXX0= */"));
/* Component Content Styles */


var AphFormSwitchContent = _styled("label", {
  target: "e64k3mr4"
})(aphFormSwitchCommonStyles, ";display:block;width:100%;word-break:break-word;", function (props) {
  return !props.hasChildren ? null : props.toggleAlign !== 'right' ? {
    paddingLeft: '10px'
  } : {
    paddingRight: '10px'
  };
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3dpdGNoU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStIeUMiLCJmaWxlIjoiRm9ybUNvbnRyb2xTd2l0Y2hTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuY29uc3QgYXBoRm9ybVN3aXRjaENvbW1vblN0eWxlcyA9IGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5gO1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGZsZXg7XG5cbiAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG5cbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZSA6ICR7cHJvcHMgPT4gcHJvcHMudGV4dFNtYWxsID8gKFNJWkVTLlNNLkZPTlRfU0laRSkgOiBudWxsfTtcbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnRleHRBbGlnbiB8fCAnbGVmdCd9O1xuXG4gICAgJHsocHJvcHMgPT4gKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSA6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNTBweCcsXG5cbiAgICAgICAgJy5hcGgtZm9ybS1zd2l0Y2hfX3dyYXBwZXInOiB7XG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9KX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlciA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICA6IGJsb2NrO1xuICAgIHRvcCAgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIGxpbmUtaGVpZ2h0OiAwO1xuYDtcblxuLyogQ29tcG9uZW50IFRvZ2dsZSBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGUgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgIDogMDtcblxuICAgIHdpZHRoIDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogcmlnaHQsIGxlZnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3doaXRlJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuYDtcblxuLyogQ29tcG9uZW50IElucHV0IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbiA6IDVweCAwO1xuXG4gICAgd2lkdGggICAgICAgIDogNTBweDtcbiAgICBoZWlnaHQgICAgICAgOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcsICdsaWdodCcsIDAuNSl9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpLCAnbGlnaHQnLCAwLjUpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IENvbnRlbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoQ29udGVudCA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGggIDogMTAwJTtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMuaGFzQ2hpbGRyZW4pID8gbnVsbCA6ICgocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgIH0pfTtcbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2ggPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Td2l0Y2g7XG4iXX0= */"));
/* Component Styles */


var AphFormSwitch = {
  Wrapper: AphFormSwitchWrapper,
  ToggleWrapper: AphFormSwitchToggleWrapper,
  Toggle: AphFormSwitchToggle,
  Input: AphFormSwitchInput,
  Content: AphFormSwitchContent
};

/* Component Itself */

var Switch = memo(forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      children = props.children,
      styles = props.styles,
      textAlign = props.textAlign,
      textSmall = props.textSmall,
      toggleAlign = props.toggleAlign;
  var newProps = Object.assign({}, props, {
    children: undefined,
    styles: undefined,
    textAlign: undefined,
    textSmall: undefined,
    toggleAlign: undefined
  });
  return React.createElement(AphFormSwitch.Wrapper, {
    htmlFor: id,
    className: "aph-form-switch ".concat(className || ''),
    styles: styles,
    textAlign: textAlign,
    textSmall: textSmall,
    toggleAlign: toggleAlign
  }, React.createElement(AphFormSwitch.ToggleWrapper, {
    htmlFor: id,
    className: "aph-form-switch__wrapper"
  }, React.createElement(AphFormSwitch.Input, _extends({}, newProps, {
    ref: ref,
    id: id,
    type: "checkbox",
    className: "aph-form-switch__input"
  })), React.createElement(AphFormSwitch.Toggle, {
    htmlFor: id,
    className: "aph-form-switch__toggle"
  })), !children ? null : React.createElement(AphFormSwitch.Content, {
    htmlFor: id,
    hasChildren: children ? true : false,
    toggleAlign: toggleAlign
  }, children));
}));
/* Default Properties */

Switch.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  className: '',
  styles: {},
  textSmall: false,
  textAlign: 'left',
  toggleAlign: 'left'
};
/* Properties Types */

Switch.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  textSmall: propTypes.bool,
  textAlign: propTypes.string,
  toggleAlign: propTypes.string
};

/* Sort Filters */
var sort = {
  byProperty: function byProperty(array, property, reverse) {
    array.sort(function (a, b) {
      if (a[property] < b[property]) {
        return reverse ? 1 : -1;
      }

      if (a[property] > b[property]) {
        return reverse ? -1 : 1;
      }

      return 0;
    });
    return array;
  }
};

/**
 * Get Sizes
 */

var getSizes = function getSizes() {
  var _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    innerWidth: 1280,
    innerHeight: 768
  };

  var width = _window.innerWidth;
  var height = _window.innerHeight;
  var xs = width < SCREEN_SIZES.SM;
  var sm = width >= SCREEN_SIZES.SM && width < SCREEN_SIZES.MD;
  var md = width >= SCREEN_SIZES.MD && width < SCREEN_SIZES.LG;
  var lg = width >= SCREEN_SIZES.LG && width < SCREEN_SIZES.XL;
  var xl = width >= SCREEN_SIZES.XL;
  var GTxs = sm || md || lg || xl;
  var GTsm = md || lg || xl;
  var GTmd = lg || xl;
  var GTlg = width > SCREEN_SIZES.LG;
  var GTxl = width > SCREEN_SIZES.XL;
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

export { A, ANIMATIONS, Accordion, ActionBar, Badge, Button, COLORS, Card, Checkbox, Clipboard, Column as Col, Collapsible, Column, Container, Countdown, Dropdown, FORM, Flex$1 as Flex, GRID, H1, H2, H3, HoverActions, HoverActionItem as HoverActionsItem, ICONS, Icon, Img, Input, FormControlInputNumber$1 as InputCurrency, FormControlInputNumber as InputNumber, LAYOUT, Label, A as Link, List, ListGroup, ListGroupItem, ListItem, MEDIA_QUERIES, Modal, NumberFormat, P, Pagination, Placeholder, ProgressBar, RADIUS, Row, SCREEN_SIZES, SIZES, Scrollable, Segment, FormControlSelect as Select, SidePill, Switch, Table, P as Text, FormControlTextArea as TextArea, ToastsContainer, Tooltip, ZINDEX, animations, colors$1 as colors, layoutActions, sort, toast };
