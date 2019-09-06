"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _taggedTemplateLiteral = _interopDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")), core = require("@emotion/core"), ReactDOMServer = _interopDefault(require("react-dom/server")), _defineProperty = _interopDefault(require("@babel/runtime/helpers/defineProperty")), _extends = _interopDefault(require("@babel/runtime/helpers/extends")), _styled = _interopDefault(require("@emotion/styled-base")), React = require("react"), React__default = _interopDefault(React), propTypes = _interopDefault(require("prop-types")), _typeof = _interopDefault(require("@babel/runtime/helpers/typeof")), chroma = _interopDefault(require("chroma-js")), _slicedToArray = _interopDefault(require("@babel/runtime/helpers/slicedToArray")), _objectWithoutProperties = _interopDefault(require("@babel/runtime/helpers/objectWithoutProperties")), ReactClipboard = _interopDefault(require("react-clipboard.js")), Formatter = _interopDefault(require("react-number-format")), reactToastify = require("react-toastify");

require("react-toastify/scss/main.scss");

var ReactTooltip = _interopDefault(require("react-tooltip")), Paginator = _interopDefault(require("rc-pagination")), localeInfo = _interopDefault(require("rc-pagination/lib/locale/pt_BR"));

require("@emotion/styled");

var InputNumber = _interopDefault(require("react-input-number")), CurrencyInput = _interopDefault(require("react-currency-input"));

function _templateObject2() {
  var data = _taggedTemplateLiteral([ "\n    0% {\n        transform: scaleY(0.1);\n    }\n\n    25% {\n        transform: scaleY(1);\n    }\n\n    50% {\n        transform: scaleY(0.95);\n    }\n\n    100% {\n        transform: scaleY(1);\n    }\n" ]);
  return _templateObject2 = function() {
    return data;
  }, data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([ "\n    0% {\n        opacity  : 0;\n        transform: translate3d(0, 75%, 0);\n    }\n    100% {\n        opacity  : 1;\n        transform: none;\n    }\n" ]);
  return _templateObject = function() {
    return data;
  }, data;
}

var _DEFAULT, fadeInUp = core.keyframes(_templateObject()), pullUp = core.keyframes(_templateObject2()), ANIMATIONS = {
  FADE_IN_UP: {
    animation: "".concat(fadeInUp, " 0.75s ease")
  },
  PULL_UP: {
    willChange: "transform-origin",
    animation: "".concat(pullUp, " 0.75s ease"),
    transformOrigin: "50% 100%"
  }
}, _COLORS = {
  DARK_BLACK: "rgb(0, 0, 0)",
  BLACK: "rgb(45, 45, 45)",
  WHITE: "rgb(255, 255, 255)",
  SMOKE: "rgb(248, 248, 248)",
  DARK_SMOKE: "rgb(242, 242, 242)",
  GREY_SMOKE: "rgb(238, 238, 238)",
  LIGHT_GREY: "rgb(212, 215, 217)",
  GREY: "rgb(157, 166, 173)",
  DARK_GREY: "rgb(122, 128, 133)",
  YELLOW: "rgb(255, 198, 30)",
  ORANGE: "rgb(252, 163, 17)",
  ORANGE_RED: "rgb(255, 141, 80)",
  RED: "rgb(241, 51, 53)",
  DARK_RED: "rgb(196, 31, 31)",
  GREEN: "rgb(96,198,89)",
  DARK_GREEN: "rgb(25, 174, 53)",
  LIGHT_BLUE: "rgb(0, 209, 239)",
  BLUE: "rgb(0, 165, 219)",
  PURPLE: "rgb(172, 108, 184)",
  LIGHT_PINK: "rgb(248, 130, 184)"
}, _SEGMENTED = Object.assign({}, _COLORS, {
  PRIMARY: _COLORS.BLUE,
  SECONDARY: _COLORS.ORANGE,
  ERROR: _COLORS.RED,
  WARNING: _COLORS.YELLOW,
  SUCCESS: _COLORS.GREEN,
  INFO: _COLORS.BLUE,
  INVERSE: _COLORS.WHITE
}), _TONED = Object.assign({}, _SEGMENTED, {
  TONES: {
    DARK_BLACK: _SEGMENTED.BLACK,
    BLACK: _SEGMENTED.DARK_BLACK,
    WHITE: _SEGMENTED.SMOKE,
    SMOKE: _SEGMENTED.LIGHT_GREY,
    DARK_SMOKE: _SEGMENTED.GREY_SMOKE,
    GREY_SMOKE: _SEGMENTED.LIGHT_GREY,
    LIGHT_GREY: _SEGMENTED.GREY,
    GREY: _SEGMENTED.DARK_GREY,
    DARK_GREY: _SEGMENTED.GREY,
    YELLOW: _SEGMENTED.YELLOW,
    ORANGE: _SEGMENTED.ORANGE,
    ORANGE_RED: _SEGMENTED.ORANGE_RED,
    RED: _SEGMENTED.DARK_RED,
    DARK_RED: _SEGMENTED.RED,
    GREEN: _SEGMENTED.DARK_GREEN,
    DARK_GREEN: _SEGMENTED.GREEN,
    BLUE: _SEGMENTED.BLUE,
    PURPLE: _SEGMENTED.PURPLE,
    LIGHT_PINK: _SEGMENTED.LIGHT_PINK,
    PRIMARY: _SEGMENTED.PRIMARY,
    SECONDARY: _SEGMENTED.SECONDARY,
    ERROR: _SEGMENTED.ERROR,
    WARNING: _SEGMENTED.WARNING,
    SUCCESS: _SEGMENTED.SUCCESS,
    INFO: _SEGMENTED.INFO,
    INVERSE: _SEGMENTED.WHITE
  }
}), COLORS = Object.assign({}, _TONED, {
  GET: function() {
    var color = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "BLACK", opacity = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (!color || "string" != typeof color) return _TONED.BLACK;
    var selected = _TONED[color.toUpperCase()];
    return selected || color.includes("rgb(") ? (!selected && color.includes("rgb(") && (selected = color), 
    !isNaN(opacity) && opacity >= 0 && opacity <= 1 && (selected = (selected = selected.replace("rgb", "rgba")).replace(")", ", ".concat(opacity, ")"))), 
    selected) : _TONED.BLACK;
  },
  FILL: function() {
    var color = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "SMOKE";
    if ("string" != typeof color) return {
      color: _TONED.BLACK,
      background: _TONED.SMOKE
    };
    var _color = color.toUpperCase(), selected = _TONED[_color];
    return selected ? {
      color: [ "WHITE", "SMOKE", "DARK_SMOKE", "GREY_SMOKE", "LIGHT_GREY", "YELLOW", "WARNING", "INVERSE" ].includes(_color) ? _TONED.BLACK : _TONED.WHITE,
      background: selected
    } : {
      color: _TONED.BLACK,
      background: _TONED.SMOKE
    };
  }
}), COLUMNS = 12, GRID = {
  UNIT: "px",
  QUERIES: [ "xs", "sm", "md", "lg", "xl" ],
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
  COLUMNS_GET_WIDTH: function(columnNumber) {
    return !(columnNumber = parseInt(columnNumber, 10)) || "number" != typeof columnNumber || columnNumber < 1 || columnNumber > COLUMNS ? null : 10 * columnNumber / 12 * 10 + "%";
  }
}, ICONS = Object.assign([ "adjusts", "arrow-up", "arrow-down", "arrow-left", "arrow-right", "bluetooth", "camera", "card", "cards", "chart-line", "check", "delete", "external-ticket", "eye", "filter", "flash", "flash-off", "help", "info", "items", "list", "loader", "loading", "logout", "lock", "unlock", "search", "settings", "signal", "options", "minus", "plus", "times", "qrcode", "refresh", "scan", "ticketbooth", "transfer", "pencil", "user", "payment-amex", "payment-bankbillet", "payment-diners", "payment-discover", "payment-elo", "payment-freepass", "payment-mastercard", "payment-money", "payment-others", "payment-paypal", "payment-visa" ], {
  ENCODE_SVG: function(reactElement) {
    return "data:image/svg+xml," + escape(ReactDOMServer.renderToStaticMarkup(reactElement));
  }
}), LAYOUT = {
  RESIZED: "LAYOUT:RESIZED"
}, RADIUS = Object.assign(5, {
  XXS: 5,
  XS: 5,
  SM: 5,
  MD: 5,
  LG: 10,
  XL: 10
}), SCREEN_SIZES = {
  XS: 359,
  SM: 768,
  MD: 1024,
  LG: 1280,
  XL: 1440
}, SIZES = {
  XS: {
    FONT_WEIGHT: 400,
    FONT_SIZE: "8px",
    LINE_HEIGHT: "10px",
    RADIUS: "5px",
    SHADOW: "5px"
  },
  SM: {
    FONT_WEIGHT: 400,
    FONT_SIZE: "14px",
    LINE_HEIGHT: "20px",
    RADIUS: "5px",
    SHADOW: "5px"
  },
  MD: {
    FONT_WEIGHT: 400,
    FONT_SIZE: "16px",
    LINE_HEIGHT: "20px",
    RADIUS: "5px",
    SHADOW: "5px"
  },
  LG: {
    FONT_WEIGHT: 700,
    FONT_SIZE: "20px",
    LINE_HEIGHT: "20px",
    RADIUS: "10px",
    SHADOW: "10px"
  },
  XL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: "28px",
    LINE_HEIGHT: "30px",
    RADIUS: "10px",
    SHADOW: "10px"
  },
  XXL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: "36px",
    LINE_HEIGHT: "40px",
    RADIUS: "10px",
    SHADOW: "10px"
  },
  ACTION_BAR_HEIGHT: "60px"
}, MEDIA_QUERIES = {
  PRINT: "@media print",
  XXS: "@media (max-width: ".concat(SCREEN_SIZES.XS - 1, "px)"),
  XS: "@media (min-width: ".concat(SCREEN_SIZES.XS, "px) and (max-width: ").concat(SCREEN_SIZES.SM - 1, "px)"),
  SM: "@media (min-width: ".concat(SCREEN_SIZES.SM, "px) and (max-width: ").concat(SCREEN_SIZES.MD - 1, "px)"),
  MD: "@media (min-width: ".concat(SCREEN_SIZES.MD, "px) and (max-width: ").concat(SCREEN_SIZES.LG - 1, "px)"),
  LG: "@media (min-width: ".concat(SCREEN_SIZES.LG, "px) and (max-width: ").concat(SCREEN_SIZES.XL - 1, "px)"),
  XL: "@media (min-width: ".concat(SCREEN_SIZES.XL, "px)"),
  LT: {
    XS: "@media (max-width: ".concat(SCREEN_SIZES.XS - 1, "px)"),
    SM: "@media (max-width: ".concat(SCREEN_SIZES.SM - 1, "px)"),
    MD: "@media (max-width: ".concat(SCREEN_SIZES.MD - 1, "px)"),
    LG: "@media (max-width: ".concat(SCREEN_SIZES.LG - 1, "px)")
  },
  GT: {
    XXS: "@media (min-width: 1px)",
    XS: "@media (min-width: ".concat(SCREEN_SIZES.XS, "px)"),
    SM: "@media (min-width: ".concat(SCREEN_SIZES.SM, "px)"),
    MD: "@media (min-width: ".concat(SCREEN_SIZES.MD, "px)"),
    LG: "@media (min-width: ".concat(SCREEN_SIZES.LG, "px)"),
    XL: "@media (min-width: ".concat(SCREEN_SIZES.XL, "px)")
  }
}, ZINDEX = {
  ACTION_BAR: 100,
  NAVBAR: 9e3,
  MODAL: 1e4,
  TOAST: 10010
}, FORM = {
  TYPES: {
    DEFAULT: [ "text", "number", "date" ]
  },
  STYLES: {
    DEFAULT: (_DEFAULT = {
      boxSizing: "border-box",
      position: "relative",
      display: "block",
      width: "100%",
      height: "40px",
      border: 0,
      margin: 0,
      padding: "0 15px",
      fontSize: "16px",
      lineHeight: "20px",
      color: COLORS.BLACK,
      backgroundColor: COLORS.WHITE,
      borderRadius: RADIUS,
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET("DARK_BLACK", .3))
    }, _defineProperty(_DEFAULT, "borderRadius", RADIUS.XS), _defineProperty(_DEFAULT, "border", 0), 
    _defineProperty(_DEFAULT, "outline", 0), _defineProperty(_DEFAULT, "transition", "box-shadow 0.15s linear"), 
    _defineProperty(_DEFAULT, "willChange", "box-shadow"), _defineProperty(_DEFAULT, "&.error", {
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET("RED", .3))
    }), _defineProperty(_DEFAULT, "&:focus, &:active, &.error:focus, &.error:active", {
      boxShadow: "inset 0 0 2px 0 ".concat(COLORS.GET("DARK_BLACK", .6))
    }), _defineProperty(_DEFAULT, MEDIA_QUERIES.LT.SM, {
      height: "50px"
    }), _DEFAULT),
    CHECKBOX: {
      boxSizing: "border-box",
      position: "absolute",
      left: 0,
      margin: 0,
      padding: 0,
      opacity: 0,
      width: "20px",
      height: "20px",
      "&:checked + .aph-form__control__mask:before": {
        backgroundColor: COLORS.BLUE
      }
    },
    CHECKBOX_MASK: _defineProperty({
      boxSizing: "border-box",
      position: "relative",
      display: "block",
      width: "100%",
      paddingLeft: "30px",
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      "&[for]": {
        cursor: "pointer"
      },
      "&:before": {
        content: '" "',
        position: "absolute",
        top: "50%",
        left: 0,
        padding: 0,
        margin: 0,
        width: "20px",
        height: "20px",
        transform: "translateY(-50%)",
        borderRadius: RADIUS.XS,
        backgroundSize: "12px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
    }, MEDIA_QUERIES.LT.SM, {
      paddingLeft: "40px",
      "&:before": {
        width: "30px",
        height: "30px",
        backgroundSize: "18px"
      }
    }),
    CHECKBOX_MASK_RIGHT: _defineProperty({
      paddingRight: "30px",
      paddingLeft: 0,
      "&:before": {
        right: 0,
        left: "auto"
      }
    }, MEDIA_QUERIES.LT.SM, {
      paddingRight: "40px",
      paddingLeft: 0,
      "&:before": {
        width: "30px",
        height: "30px",
        backgroundSize: "18px"
      }
    })
  }
}, resized = function(_window) {
  return function(dispatch) {
    dispatch({
      type: LAYOUT.RESIZED,
      window: _window
    });
  };
}, layoutActions = {
  resized: resized
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral([ "\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    " ]);
  return _templateObject$1 = function() {
    return data;
  }, data;
}

var spin = function() {
  var speed = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0.75s", effect = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "linear", loop = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "infinite", animation = core.keyframes(_templateObject$1());
  return core.css("animation:", animation, " ", speed, " ", effect, " ", loop, ";");
}, animations = {
  spin: spin
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var getShadesFormat = function(dark, original, light, crystal) {
  return {
    dark: dark,
    original: original,
    light: light,
    crystal: crystal
  };
}, tangerine = getShadesFormat("rgb(250, 132, 9)", "rgb(252, 163, 17)", "rgb(252, 190, 24)", "rgb(254, 232, 195)"), ocean = getShadesFormat("rgb(0, 134, 201)", "rgb(0, 165, 219)", "rgb(0, 192, 232)", "rgb(191, 232, 246)"), mercury = getShadesFormat("rgb(90, 96, 101)", "rgb(122, 128, 133)", "rgb(152, 159, 163)", "rgb(221, 223, 224)"), bamboo = getShadesFormat("rgb(66, 173, 60)", "rgb(96, 198, 89)", "rgb(126, 218, 118)", "rgb(157, 235, 149)"), sunflower = getShadesFormat("rgb(255, 173, 17)", "rgb(255, 198, 30)", "rgb(255, 218, 43)", "rgb(255, 240, 198)"), ruby = getShadesFormat("rgb(230, 38, 39)", "rgb(239, 60, 62)", "rgb(245, 83, 86)", "rgb(251, 206, 206)"), supernova = getShadesFormat("rgb(141, 77, 156)", "rgb(172, 108, 184)", "rgb(198, 138, 207)", "rgb(234, 218, 237)"), mint = getShadesFormat("rgb(38, 168, 134)", "rgb(60, 194, 165)", "rgb(83, 215, 192)", "rgb(206, 239, 232)"), oil = getShadesFormat("rgb(27, 27, 27)", "rgb(45, 45, 45)", "rgb(64, 64, 64)", "rgb(202, 202, 202)"), translucid = getShadesFormat("rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"), poison = getShadesFormat("rgb(81, 108, 178)", "rgb(81, 108, 178)", "rgb(81, 108, 178)", "rgb(81, 108, 178)"), shades = {
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
}, alias = {
  primary: Object.assign({}, tangerine),
  secondary: Object.assign({}, ocean),
  info: Object.assign({}, supernova),
  success: Object.assign({}, bamboo),
  warning: Object.assign({}, sunflower),
  error: Object.assign({}, ruby),
  link: Object.assign({}, ocean)
}, stock = {
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
  base: "rgb(0, 0, 0)",
  inverse: "rgb(255, 255, 255)",
  background: "rgb(248, 248, 248)",
  disabled: mercury.crystal,
  helper: mercury.original,
  link: ocean.original,
  translucid: translucid.original,
  shadow: "rgba(0, 0, 0, 0.2)",
  smoke: "rgb(248, 248, 248)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)"
}, all = _objectSpread({
  alias: alias,
  shades: _objectSpread({}, shades, {}, alias)
}, stock), getOpacity = function() {
  var opacity = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, color = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : all.shades.mercury.original, opacityToReplace = !isNaN(opacity) && opacity > 0 && opacity < 1 ? ", ".concat(opacity, ")") : "";
  return opacityToReplace && "string" == typeof color && (color.includes("rgb(") || color.includes("rgba(")) ? color.replace("rgb(", "rgba(").replace(")", opacityToReplace) : color;
}, get = function() {
  var color = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "primary", shade = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "original", opacity = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, _color = (color + "").toLowerCase(), selected = all.shades[_color] ? all.shades[_color][shade] : all[_color];
  return getOpacity(opacity, "string" == typeof color && selected ? selected : selected || _color);
}, getFromTheme = function() {
  var componentProps = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, colorKey = arguments.length > 1 ? arguments[1] : void 0, colorShade = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "original", opacity = arguments.length > 3 ? arguments[3] : void 0, theme = componentProps.theme;
  if ("object" !== _typeof(theme) || !theme[colorKey]) return get(colorKey, colorShade, opacity);
  var themeShades = theme.shades && theme.shades[colorKey] ? theme.shades[colorKey] : theme[colorKey];
  return "object" !== _typeof(themeShades) ? themeShades || "" : getOpacity(opacity, themeShades[colorShade]);
}, colors = _objectSpread({}, all, {
  getFromTheme: getFromTheme,
  getOpacity: getOpacity,
  get: get
}), set = function(colorKey, shadeOriginal, shadeDark, shadeLight, shadeCrystal) {
  var _objectSpread3;
  if ("string" != typeof colorKey || "string" != typeof shadeOriginal) return colors;
  var colorOriginal = "rgb(".concat(chroma(shadeOriginal).rgb().join(","), ")"), colorDark = shadeDark || chroma(colorOriginal).darken().css(), colorLight = shadeLight || chroma(colorOriginal).brighten(.5).css(), colorCrystal = shadeCrystal || chroma(colorOriginal).brighten(1).css();
  return colors = _objectSpread({}, colors, (_defineProperty(_objectSpread3 = {}, colorKey, colorOriginal), 
  _defineProperty(_objectSpread3, "shades", _objectSpread({}, colors.shades, _defineProperty({}, colorKey, getShadesFormat(colorDark, colorOriginal, colorLight, colorCrystal)))), 
  _objectSpread3));
}, colors$1 = colors = _objectSpread({}, colors, {
  set: set
});

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var ActionBarStyled = _styled("div", {
  target: "ef9z5pb0"
})(function(props) {
  return _objectSpread$1({
    boxSizing: "border-box",
    display: "block",
    width: "100%",
    minHeight: SIZES.ACTION_BAR_HEIGHT,
    zIndex: ZINDEX.ACTION_BAR,
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    padding: "20px 0",
    backgroundColor: colors$1.getFromTheme(props, "white"),
    boxShadow: "0 0 4px 0 ".concat(colors$1.getFromTheme(props, "shadow")),
    transform: "translateY(110%)",
    willChange: "transform",
    transition: "transform 0.3s ease-out 0s, background-color 0.2s linear",
    "&.aph-action-bar--visible": {
      transform: "translateY(0)"
    }
  }, props.styles);
}, ""), ActionBar = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children, styles = props.styles, visible = props.visible;
  return React__default.createElement(ActionBarStyled, _extends({}, props, {
    ref: ref,
    className: "aph-action-bar".concat(visible ? " aph-action-bar--visible" : "", " ").concat(className || ""),
    styles: styles
  }), children);
});

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

ActionBar.defaultProps = {
  visible: !1,
  styles: {}
}, ActionBar.propTypes = {
  children: propTypes.any,
  visible: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var BadgeWrapper = _styled("span", {
  target: "e483s4c0"
})(function(props) {
  return _objectSpread$2(_defineProperty({
    boxSizing: "border-box",
    position: "relative",
    display: props.block ? "block" : "inline-block",
    minWidth: isNaN(props.width) ? props.width || null : parseInt(props.width, 10) + GRID.UNIT,
    padding: "5px 15px",
    margin: 0,
    minHeight: "30px",
    verticalAlign: "top",
    fontSize: "12px",
    lineHeight: "20px",
    textTransform: "uppercase",
    textAlign: props.prefix ? "left" : "center",
    boxShadow: "0 0 1px 0 ".concat(COLORS.GET("DARK_BLACK", .2)),
    borderRadius: RADIUS.XS + GRID.UNIT,
    "&:after": {
      display: "table",
      clear: "both"
    }
  }, MEDIA_QUERIES.LT.SM, {
    display: props.blockXs ? "block" : null,
    fontSize: "16px",
    lineHeight: "20px",
    paddingRight: "15px",
    paddingLeft: "15px",
    borderRadius: RADIUS.XXS + GRID.UNIT
  }), props.styles);
}, ""), BadgePrefixWrapper = _styled("span", {
  target: "e483s4c1"
})(function(props) {
  return _objectSpread$2(_defineProperty({
    boxSizing: "border-box",
    display: "inline-block",
    padding: "5px 15px",
    margin: "-5px 10px -5px -15px",
    textAlign: "center",
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  }, MEDIA_QUERIES.LT.SM, {
    fontSize: "16px",
    lineHeight: "20px",
    margin: "-10px 10px -10px -15px",
    padding: "5px 6px",
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  }), props.styles);
}, ""), Badge = React.forwardRef(function(props, ref) {
  var filled = COLORS.FILL(props.color), modifier = props.sm ? {
    minHeight: "20px",
    fontSize: "10px",
    lineHeight: "10px",
    paddingRight: "8px",
    paddingLeft: "8px",
    borderRadius: RADIUS.XXS + GRID.UNIT
  } : {}, prefix = props.sm ? _defineProperty({
    paddingRight: "8px",
    paddingLeft: "8px",
    marginLeft: "-8px",
    marginRight: "6px",
    borderRadius: "".concat(RADIUS.XXS + GRID.UNIT, " 0 0 ").concat(RADIUS.XXS + GRID.UNIT)
  }, MEDIA_QUERIES.LT.SM, {
    fontSize: "16px",
    lineHeight: "20px",
    margin: "-10px 10px -10px -15px",
    padding: "5px 8px",
    borderRadius: "".concat(RADIUS.XS + GRID.UNIT, " 0 0 ").concat(RADIUS.XS + GRID.UNIT)
  }) : {};
  if (props.color) {
    var toned = COLORS.TONES[props.color.toUpperCase()];
    toned && (prefix = Object.assign({}, prefix, {
      backgroundColor: toned
    }));
  }
  return React__default.createElement(BadgeWrapper, _extends({}, props, {
    styles: Object.assign({}, modifier, filled, props.styles),
    className: "aph-badge ".concat(props.className || "")
  }), props.prefix ? React__default.createElement(BadgePrefixWrapper, _extends({}, props.prefixProps, {
    styles: Object.assign({}, prefix, props.prefixStyles),
    className: "aph-badge__prefix ".concat(props.prefixClassName || "")
  }), props.prefix) : null, props.children);
});

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

var AphButtonStyled = _styled("button", {
  target: "ebr9uys0"
})("box-sizing:border-box;position:relative;overflow:hidden;cursor:pointer;display:", function(props) {
  return props.aphblock ? "" : "inline-";
}, "block;width:", function(props) {
  return props.aphblock ? "100%" : "auto";
}, ";min-width:", function(props) {
  return props.aphcircle ? props.aphsm || props.aphsmall ? "30px" : "40px" : "140px";
}, ";padding:", function(props) {
  return props.aphsm || props.aphsmall ? "5px ".concat(props.aphcircle ? 0 : "15px") : "10px  ".concat(props.aphcircle ? 0 : "20px");
}, ";margin:", function(props) {
  return props.aphmargin;
}, ";text-align:center;text-transform:uppercase;font-size:16px;line-height:20px;border-radius:", function(props) {
  return (props.aphradius || 25) + ((props.aphradius + "").includes("px") ? "" : "px");
}, ";border:0;outline:0;-webkit-tap-highlight-color:", function(props) {
  return colors$1.getFromTheme(props, props.aphcolor || "secondary", "crystal", .5);
}, ";color:", function(props) {
  return props.aphlink ? colors$1.getFromTheme(props, props.aphcolor || "secondary") : colors$1.getFromTheme(props, [ "white", "smoke" ].includes(props.aphcolor) ? "secondary" : "white");
}, ";background-color:", function(props) {
  return props.aphlink ? "transparent" : colors$1.getFromTheme(props, props.aphcolor || "secondary");
}, ";transition-timing-function:ease;transition-duration:0.2s;transition-property:background-color,color,width;&:hover{background-color:", function(props) {
  return props.aphlink ? colors$1.getFromTheme(props, "smoke") : colors$1.getFromTheme(props, props.aphcolor || "secondary", "light");
}, ";}&:active,&:focus{background-color:", function(props) {
  return props.aphlink ? colors$1.getFromTheme(props, "smoke") : colors$1.getFromTheme(props, props.aphcolor || "secondary", "dark");
}, ";}&:disabled{cursor:not-allowed;color:", function(props) {
  return colors$1.getFromTheme(props, "mercury", props.aphtranslucid ? "crystal" : "light");
}, ";background-color:", function(props) {
  return props.aphlink ? colors$1.getFromTheme(props, "smoke") : props.aphtranslucid ? colors$1.getFromTheme(props, "smoke", "", .5) : colors$1.getFromTheme(props, "mercury", "crystal");
}, ";}.aph-btn{&__content{opacity:1;}&__loader{position:absolute;top:calc(50% - 15px);left:50%;transform:translate(-50%);opacity:0;}}&.aph-btn--loading{&:hover,&:disabled{background-color:", function(props) {
  return props.aphlink ? "transparent" : colors$1.getFromTheme(props, props.aphcolor || "secondary");
}, ";}.aph-btn{&__content{opacity:0;}&__loader{opacity:1;.aph-icon-wrapper{", animations.spin("4s"), ";}}}}", function(props) {
  return props.aphstyles;
}, ";"), AphButtonItemStyled = _styled("span", {
  target: "e1q9vwyj0"
})("box-sizing:border-box;position:relative;display:inline-block;top:0;min-width:", function(props) {
  return props.childrenWidth || null;
}, ";margin:0;padding:0;text-align:center;transition-timing-function:linear;transition-duration:0.25s;transition-property:opacity;"), Button = React.forwardRef(function(props, ref) {
  var block = props.block, circle = props.circle, className = props.className, color = props.color, children = props.children, loading = props.loading, disabled = props.disabled, margin = props.margin, link = props.link, radius = props.radius, sm = props.sm, small = props.small, styles = props.styles, translucid = props.translucid, rest = _objectWithoutProperties(props, [ "block", "circle", "className", "color", "children", "loading", "disabled", "margin", "link", "radius", "sm", "small", "styles", "translucid" ]), childrenRef = React.useRef(null), _useState = React.useState(140), _useState2 = _slicedToArray(_useState, 2), childrenWidth = _useState2[0], setChildrenWidth = _useState2[1];
  return React.useEffect(function() {
    "boolean" == typeof loading && childrenRef && childrenRef.current && childrenRef.current.offsetWidth && childrenRef.current.offsetWidth !== childrenWidth && setChildrenWidth(childrenRef.current.offsetWidth);
  }, [ children ]), React__default.createElement(AphButtonStyled, _extends({}, rest, {
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
    className: "aph-btn".concat(loading ? " aph-btn--loading" : "", " ").concat(className)
  }), "boolean" != typeof loading ? children : React__default.createElement(React__default.Fragment, null, React__default.createElement(AphButtonItemStyled, {
    className: "aph-btn__loader",
    childrenWidth: childrenWidth ? "".concat(childrenWidth, "px") : null
  }, React__default.createElement(Icon, {
    size: 30,
    slug: "loader",
    color: [ "white", "smoke" ].includes(color) ? "secondary" : "white"
  })), React__default.createElement(AphButtonItemStyled, {
    ref: childrenRef,
    className: "aph-btn__content"
  }, children)));
});

Button.defaultProps = {
  as: "button",
  type: "button",
  role: "button",
  color: "secondary",
  className: "",
  margin: null,
  small: !1,
  block: !1,
  disabled: !1,
  loading: void 0,
  styles: {}
}, Button.propTypes = {
  type: propTypes.string,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  color: propTypes.string,
  radius: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
  margin: propTypes.string,
  block: propTypes.bool,
  small: propTypes.bool,
  as: propTypes.elementType,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphCardStyled = _styled("div", {
  target: "ef3ubj80"
})("box-sizing:border-box;display:block;margin:", function(props) {
  return props.margin || null;
}, ";padding:", function(props) {
  return props.padding || "10px";
}, ";border-radius:", RADIUS.SM, "px;color:", colors$1.get("black"), ";background:", colors$1.get("white"), ";transition:background-color 0.25s linear,box-shadow 0.25s linear,padding 0.25s linear;will-change:box-shadow,padding;", function(props) {
  return props.boxShadow ? {
    boxShadow: "0 0 5px ".concat(colors$1.get("black", "original", .25))
  } : null;
}, ";", function(props) {
  return props.onClick ? {
    "&:hover": {
      background: colors$1.get("smoke")
    }
  } : null;
}, ";&.active,&:hover{", function(props) {
  return props.boxShadow ? {
    boxShadow: "0 0 20px ".concat(colors$1.get("black", "original", .25))
  } : null;
}, ";}&:hover{", function(props) {
  return props.hover ? function() {
    if (!(props.className.split("active").length > 1)) return {
      backgroundColor: "".concat(colors$1.get("smoke"))
    };
  } : null;
}, ";}.aph-card{box-shadow:none !important;}", function(props) {
  return props.styles;
}, ";"), Card = React.forwardRef(function(props, ref) {
  var className = props.className;
  return React__default.createElement(AphCardStyled, _extends({}, props, {
    ref: ref,
    className: "aph-card ".concat(className || "")
  }));
});

Card.defaultProps = {
  margin: void 0,
  padding: "10px",
  styles: {},
  boxShadow: !1
}, Card.propTypes = {
  margin: propTypes.string,
  padding: propTypes.string,
  boxShadow: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var _SIZES$XS = SIZES.XS, FONT_SIZE = _SIZES$XS.FONT_SIZE, LINE_HEIGHT = _SIZES$XS.LINE_HEIGHT, HoverActionItem = _styled("button", {
  target: "ezj1zsv0"
})("box-sizing:border-box;display:inline-block;padding:6px 5px 4px;margin:0;font-weight:bold;font-size:", FONT_SIZE, ";line-height:", LINE_HEIGHT, ";text-transform:uppercase;border:0;outline:0;text-decoration:none;border-radius:", RADIUS.XS, "px;cursor:pointer;color:", function(props) {
  return props.color ? colors$1.getFromTheme(props, props.color) : null;
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "inverse", null, .75);
}, ";box-shadow:0 0 5px ", function(props) {
  return colors$1.getFromTheme(props, "shadow");
}, ";transition:color 0.25s linear,background-color 0.25s linear;&:active,&:focus,&:hover{border:0;outline:0;background-color:", function(props) {
  return colors$1.getFromTheme(props, "inverse", null, 1);
}, ";}&.success{color:", function(props) {
  return colors$1.getFromTheme(props, "success");
}, ";}&.error{color:", function(props) {
  return colors$1.getFromTheme(props, "error");
}, ";}", function(props) {
  return props.styles;
}, ";"), ClipboardStyled = _styled(HoverActionItem, {
  target: "e9smf1z0"
})(function(props) {
  return props.styles;
}, ";");

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var AphClipboardWrapper = _styled(ReactClipboard, {
  target: "e1icbit10"
})("box-sizing:border-box;", function(props) {
  return props.styles;
}, ";"), Clipboard = function(props) {
  var styled = props.styled, styles = props.styles, className = props.className, onSuccess = props.onSuccess, onError = props.onError, rest = _objectWithoutProperties(props, [ "styled", "styles", "className", "onSuccess", "onError" ]), _useState = React.useState(null), _useState2 = _slicedToArray(_useState, 2), timer = _useState2[0], setTimer = _useState2[1], _useState3 = React.useState(""), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
  function _applyStatus(_status) {
    clearTimeout(timer), setStatus(_status), setTimer(setTimeout(function() {
      setStatus("");
    }, 1e3));
  }
  React.useEffect(function() {
    return function() {
      clearTimeout(timer);
    };
  }, []);
  var clipboardProps = _objectSpread$3({}, rest, {
    styles: styles,
    onError: function(evt) {
      _applyStatus("error"), "function" == typeof onError && onError(_objectSpread$3({}, evt));
    },
    onSuccess: function(evt) {
      _applyStatus("success"), "function" == typeof onSuccess && onSuccess(_objectSpread$3({}, evt));
    }
  });
  return styled ? React__default.createElement(ClipboardStyled, _extends({}, clipboardProps, {
    as: ReactClipboard,
    className: "aph-clipboard".concat("success" === status ? " success" : "").concat("error" === status ? " error" : "", " ").concat(className || "")
  })) : React__default.createElement(AphClipboardWrapper, _extends({}, clipboardProps, {
    className: "aph-clipboard ".concat(className || "")
  }));
};

Clipboard.defaultProps = {
  styled: !1,
  styles: {}
}, Clipboard.propTypes = {
  styled: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var DISTANCE = "calc(100% + 10px)", DropdownStyled = _styled("div", {
  target: "e14owjh0"
})("box-sizing:border-box;position:relative;display:block;width:100%;z-index:901;-webkit-box-orient:vertical;-webkit-box-direction:normal;.aph{&-dropdown{&__toggle,&__content{box-sizing:border-box;}&__toggle{display:", function(props) {
  return props.toggleBlock ? "" : "inline-";
}, "block;width:", function(props) {
  return props.toggleBlock ? "100%" : null;
}, ";cursor:pointer;border:0;outline:0;color:inherit;background:transparent;}&__content{display:none;position:absolute;top:", function(props) {
  return props.up ? null : DISTANCE;
}, ";bottom:", function(props) {
  return props.up ? DISTANCE : null;
}, ";left:", function(props) {
  return props.center ? "50%" : props.right ? null : "0";
}, ";right:", function(props) {
  return props.right && !props.center ? "0" : null;
}, ";transform:", function(props) {
  return props.center ? "translateX(-50%)" : null;
}, ";opacity:0;width:", function(props) {
  return props.contentWidth || null;
}, ";will-change:z-index,opacity;transition:display ", function(props) {
  return props.opened ? .25 : .1;
}, "s linear,opacity ", function(props) {
  return props.opened ? .15 : .25;
}, "s linear;color:", function(props) {
  return colors$1.getFromTheme(props, "black");
}, ";background:", function(props) {
  return colors$1.getFromTheme(props, "white");
}, ";box-shadow:0 0 5px ", function(props) {
  return colors$1.getFromTheme(props, "shadow");
}, ";padding:", function(props) {
  return props.thin ? "0" : "15px 10px";
}, ";border-radius:", RADIUS.XS, "px;text-align:", function(props) {
  return props.right ? "left" : null;
}, ";align-self:center;overflow:hidden;&.visible{display:block;}&.active{opacity:1;}}}&-list{&__item{padding-right:20px;padding-left:20px;}}}&.up{.aph-dropdown{&__content{top:auto;bottom:100%;}}}", function(props) {
  return props.styles;
}, ";"), Dropdown = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children, toggle = props.toggle, toggleBlock = props.toggleBlock, width = props.width, center = props.center, up = props.up, right = props.right, left = props.left, thin = props.thin, opened = props.opened, styles = props.styles, _useState = React.useState(opened), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1], _useState3 = React.useState(opened), _useState4 = _slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1], _useState5 = React.useState(!1), _useState6 = _slicedToArray(_useState5, 2), unmounted = _useState6[0], _useState7 = (_useState6[1], 
  React.useState(null)), _useState8 = _slicedToArray(_useState7, 2), activeTimer = _useState8[0], setActiveTimer = _useState8[1], _useState9 = React.useState(null), _useState10 = _slicedToArray(_useState9, 2), visibleTimer = _useState10[0], setVisibleTimer = _useState10[1], dropdownRef = React.useRef(null);
  function addClickListener() {
    document.addEventListener("click", handleClose);
  }
  function removeClickListener() {
    clearTimeout(activeTimer), clearTimeout(visibleTimer), document.removeEventListener("click", handleClose);
  }
  function handleClose(evt) {
    clearTimeout(visibleTimer), unmounted || evt && evt.target && dropdownRef && dropdownRef.current && dropdownRef.current.contains(evt.target) || (setActive(!1), 
    setVisible(!0), setVisibleTimer(setTimeout(function() {
      unmounted || (setVisible(!1), removeClickListener());
    }, 250)));
  }
  function handleOpen(evt) {
    clearTimeout(activeTimer), unmounted || (evt && evt.preventDefault && evt.preventDefault(), 
    setActive(!1), setVisible(!0), setActiveTimer(setTimeout(function() {
      unmounted || (setActive(!0), addClickListener());
    }, 50)));
  }
  return React.useEffect(function() {
    if (removeClickListener(), opened) return (opened || active) && (addClickListener(), 
    handleOpen()), function() {
      removeClickListener();
    };
    handleClose();
  }, [ opened ]), React.useEffect(function() {
    return function() {
      removeClickListener();
    };
  }, []), React__default.createElement(DropdownStyled, {
    center: center,
    up: up,
    right: right,
    left: left,
    thin: thin,
    toggleBlock: toggleBlock || center,
    contentWidth: width,
    styles: styles,
    ref: dropdownRef,
    className: "aph-dropdown ".concat(className || "")
  }, toggle ? React__default.createElement("span", {
    role: "button",
    onClick: function(evt) {
      if (visible && !opened) return handleClose();
      handleOpen(evt);
    },
    className: "aph-dropdown__toggle"
  }, toggle) : null, visible ? React__default.createElement("div", {
    className: "aph-dropdown__content".concat(active ? " active" : "").concat(visible ? " visible" : ""),
    onClick: function() {
      return handleClose();
    }
  }, children) : null);
});

Dropdown.defaultProps = {
  className: "",
  toggle: "",
  opened: !1,
  width: "220px",
  thin: !1,
  up: !1,
  right: !1,
  left: !0,
  styles: {}
}, Dropdown.propTypes = {
  className: propTypes.string,
  toggle: propTypes.oneOfType([ propTypes.string, propTypes.element ]),
  opened: propTypes.bool,
  width: propTypes.string,
  thin: propTypes.bool,
  up: propTypes.bool,
  right: propTypes.bool,
  left: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var selector = ".aph-hover-actions", HoverActionsStyled = _styled("span", {
  target: "ez3ukd00"
})("box-sizing:border-box;position:relative;display:inline-block;z-index:1;", selector, "{&__content{z-index:1;filter:none;display:block;transition:filter 0.15s linear;}&__items{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;display:flex;z-index:-1;justify-content:space-evenly;align-items:center;transition:opacity 0.25s linear,z-index 0.25s linear;text-align:center;vertical-align:middle;}}", function(props) {
  return props.hasActions ? "\n        &:hover,\n        &:active,\n        &:focus {\n            ".concat(selector, " {\n                &__content {\n                    filter: blur(1px);\n                }\n\n                &__items {\n                    opacity: 1;\n                    z-index: 10;\n                }\n            }\n        }\n    ") : null;
}, ";", function(props) {
  return props.styles;
}, ";");

function HoverActions(props) {
  var actions = props.actions, className = props.className, children = props.children, rest = _objectWithoutProperties(props, [ "actions", "className", "children" ]);
  return React__default.createElement(HoverActionsStyled, _extends({
    hasActions: !!actions,
    className: "aph-hover-actions ".concat(className || "")
  }, rest), React__default.createElement("span", {
    className: "aph-hover-actions__content"
  }, children), React__default.createElement("span", {
    className: "aph-hover-actions__items"
  }, actions));
}

HoverActions.defaultProps = {
  actions: void 0,
  styles: {}
}, HoverActions.propTypes = {
  actions: propTypes.any,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var IconAdjusts = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-adjusts",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-adjusts",
    fill: color,
    d: "M21,22 L21,21.5 C21,20.9477153 21.4477153,20.5 22,20.5 C22.5522847,20.5 23,20.9477153 23,21.5 L23,22 L24,22 C24.5522847,22 25,22.4477153 25,23 C25,23.5522847 24.5522847,24 24,24 L23,24 L23,24.5 C23,25.0522847 22.5522847,25.5 22,25.5 C21.4477153,25.5 21,25.0522847 21,24.5 L21,24 L6,24 C5.44771525,24 5,23.5522847 5,23 C5,22.4477153 5.44771525,22 6,22 L21,22 Z M14,14 L14,13.5 C14,12.9477153 14.4477153,12.5 15,12.5 C15.5522847,12.5 16,12.9477153 16,13.5 L16,14 L24,14 C24.5522847,14 25,14.4477153 25,15 C25,15.5522847 24.5522847,16 24,16 L16,16 L16,16.5 C16,17.0522847 15.5522847,17.5 15,17.5 C14.4477153,17.5 14,17.0522847 14,16.5 L14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L14,14 Z M7,6 L7,5.5 C7,4.94771525 7.44771525,4.5 8,4.5 C8.55228475,4.5 9,4.94771525 9,5.5 L9,6 L24,6 C24.5522847,6 25,6.44771525 25,7 C25,7.55228475 24.5522847,8 24,8 L9,8 L9,8.5 C9,9.05228475 8.55228475,9.5 8,9.5 C7.44771525,9.5 7,9.05228475 7,8.5 L7,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 L7,6 Z"
  })));
}, IconArrowUp = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-arrow-up-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("polyline", {
    id: "aph-icon-arrow-up-polyline",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)",
    points: "10 12 15 17.7142857 20 12"
  })));
}, IconArrowRight = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("path", {
    id: "aph-icon-arrow-right-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M13 22l8-7-8-7"
  }));
}, IconArrowDown = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-arrow-down-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("polyline", {
    id: "aph-icon-arrow-down-polyline",
    stroke: color,
    strokeWidth: "2",
    points: "10 12 15 17.7142857 20 12"
  })));
}, IconArrowLeft = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("path", {
    id: "aph-icon-arrow-left-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M18 8l-8 7 8 7"
  }));
}, IconBluetooth = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-bluetooth-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    d: "M16.9725,15.1440782 L20.5925,11.5240782 C20.7825,11.3340782 20.8825,11.0840782 20.8825,10.8140782 C20.8825,10.5440782 20.7725,10.2940782 20.5925,10.1040782 L16.2625,5.79407822 C15.9725,5.50407822 15.5425,5.42407822 15.1725,5.57407822 C14.8025,5.72407822 14.5625,6.09407822 14.5625,6.49407822 L14.5625,12.7240782 L10.7025,8.87407822 C10.3125,8.48407822 9.6825,8.48407822 9.2925,8.87407822 C8.9025,9.26407822 8.9025,9.89407822 9.2925,10.2840782 L14.1425,15.1440782 L9.2925,19.9940782 C8.9025,20.3840782 8.9025,21.0140782 9.2925,21.4040782 C9.6825,21.7940782 10.3125,21.7940782 10.7025,21.4040782 L14.5625,17.5540782 L14.5625,23.7840782 C14.5625,24.1840782 14.8025,24.5540782 15.1825,24.7040782 C15.3025,24.7540782 15.4325,24.7840782 15.5625,24.7840782 C15.8225,24.7840782 16.0825,24.6840782 16.2725,24.4940782 L20.5925,20.1740782 C20.7825,19.9840782 20.8825,19.7340782 20.8825,19.4640782 C20.8825,19.1940782 20.7725,18.9440782 20.5925,18.7540782 L16.9725,15.1440782 Z M16.5625,8.91407822 L18.4725,10.8240782 L16.5625,12.7240782 L16.5625,8.91407822 Z M16.5625,21.3740782 L16.5625,17.5540782 L18.4725,19.4640782 L16.5625,21.3740782 Z",
    id: "aph-icon-bluetooth-shape",
    fill: color
  })));
}, IconCamera = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-camera-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    d: "M6,11 L8.38196601,11 C8.76073807,11 9.10700119,10.7859976 9.2763932,10.4472136 L10.7236068,7.5527864 C10.8929988,7.21400238 11.2392619,7 11.618034,7 L18.381966,7 C18.7607381,7 19.1070012,7.21400238 19.2763932,7.5527864 L20.7236068,10.4472136 C20.8929988,10.7859976 21.2392619,11 21.618034,11 L24,11 C24.5522847,11 25,11.4477153 25,12 L25,22 C25,22.5522847 24.5522847,23 24,23 L6,23 C5.44771525,23 5,22.5522847 5,22 L5,12 C5,11.4477153 5.44771525,11 6,11 Z",
    id: "aph-icon-camera-shape",
    stroke: color,
    strokeWidth: "1.8"
  }), React__default.createElement("circle", {
    id: "aph-icon-camera-circle",
    stroke: color,
    strokeWidth: "1.8",
    cx: "15",
    cy: "16",
    r: "4"
  })));
}, IconCard = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Card-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "2",
    x: "3",
    y: "7",
    width: "24",
    height: "16",
    rx: "0.5"
  }), React__default.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "3",
    y: "11",
    width: "24",
    height: "2"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy-4",
    fill: "#EF3C3E",
    x: "20",
    y: "16",
    width: "5",
    height: "2"
  })));
}, IconCards = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Cards",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "Group",
    transform: "translate(2.000000, 5.300000)"
  }, React__default.createElement("g", {
    id: "Cards",
    transform: "translate(0.000000, 1.000000)"
  }, React__default.createElement("g", {
    id: "Card-1"
  }, React__default.createElement("path", {
    d: "M1,-0.75 L15,-0.75 C15.5983085,-0.75 16.0833333,-0.264975146 16.0833333,0.333333333 L16.0833333,7.24831355 L11.1641099,7.24831355 C10.473754,7.24831355 9.91410993,7.80795762 9.91410993,8.49831355 L9.91410993,10.0833333 L1,10.0833333 C0.401691521,10.0833333 -0.0833333333,9.59830848 -0.0833333333,9 L-0.0833333333,0.333333333 C-0.0833333333,-0.264975146 0.401691521,-0.75 1,-0.75 Z",
    id: "Rectangle",
    stroke: color,
    strokeWidth: "1.5"
  }), React__default.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  })), React__default.createElement("g", {
    id: "Card-2",
    transform: "translate(10.000000, 8.000000)"
  }, React__default.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "1.5",
    x: "-0.0833333333",
    y: "-0.75",
    width: "16.1666667",
    height: "10.8333333",
    rx: "0.333333333"
  }), React__default.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  }))), React__default.createElement("g", {
    id: "Arrows",
    transform: "translate(1.500000, 0.000000)"
  }, React__default.createElement("g", {
    id: "Arrow-1",
    transform: "translate(16.000000, 0.000000)"
  }, React__default.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), React__default.createElement("polyline", {
    id: "Path-9",
    stroke: color,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  })), React__default.createElement("g", {
    id: "Arrow-2",
    transform: "translate(3.500000, 15.500000) scale(-1, -1) translate(-3.500000, -15.500000) translate(0.000000, 12.000000)"
  }, React__default.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), React__default.createElement("polyline", {
    id: "Path-9",
    stroke: color,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  }))))));
}, IconCharLine = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Chart-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "chart-bar-regular",
    transform: "translate(5.000000, 7.000000)",
    fill: color,
    fillRule: "nonzero"
  }, React__default.createElement("path", {
    d: "M16.275,11.8125 L17.19375,11.8125 C17.45625,11.8125 17.71875,11.55 17.71875,11.2875 L17.71875,1.8375 C17.71875,1.575 17.45625,1.3125 17.19375,1.3125 L16.275,1.3125 C16.0125,1.3125 15.75,1.575 15.75,1.8375 L15.75,11.2875 C15.75,11.55 16.0125,11.8125 16.275,11.8125 Z M8.4,11.8125 L9.31875,11.8125 C9.58125,11.8125 9.84375,11.55 9.84375,11.2875 L9.84375,3.15 C9.84375,2.8875 9.58125,2.625 9.31875,2.625 L8.4,2.625 C8.1375,2.625 7.875,2.8875 7.875,3.15 L7.875,11.2875 C7.875,11.55 8.1375,11.8125 8.4,11.8125 L8.4,11.8125 Z M12.3375,11.8125 L13.25625,11.8125 C13.51875,11.8125 13.78125,11.55 13.78125,11.2875 L13.78125,5.775 C13.78125,5.5125 13.51875,5.25 13.25625,5.25 L12.3375,5.25 C12.075,5.25 11.8125,5.5125 11.8125,5.775 L11.8125,11.2875 C11.8125,11.55 12.075,11.8125 12.3375,11.8125 L12.3375,11.8125 Z M20.34375,13.78125 L1.96875,13.78125 L1.96875,0.65625 C1.96875,0.293671875 1.67507813,0 1.3125,0 L0.65625,0 C0.293671875,0 0,0.293671875 0,0.65625 L0,14.4375 C0,15.1622461 0.587753906,15.75 1.3125,15.75 L20.34375,15.75 C20.7063281,15.75 21,15.4563281 21,15.09375 L21,14.4375 C21,14.0749219 20.7063281,13.78125 20.34375,13.78125 Z M4.4625,11.8125 L5.38125,11.8125 C5.64375,11.8125 5.90625,11.55 5.90625,11.2875 L5.90625,8.4 C5.90625,8.1375 5.64375,7.875 5.38125,7.875 L4.4625,7.875 C4.2,7.875 3.9375,8.1375 3.9375,8.4 L3.9375,11.2875 C3.9375,11.55 4.2,11.8125 4.4625,11.8125 L4.4625,11.8125 Z",
    id: "Shape"
  }))));
}, IconCheckThin = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 20 16"
  }, React__default.createElement("g", {
    id: "IconCheckThinWrapper",
    stroke: "none",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "IconCheckThinWrapperGroup",
    transform: "translate(-5.000000, -7.000000)",
    stroke: color,
    strokeWidth: "4"
  }, React__default.createElement("polyline", {
    id: "Path",
    points: "7.5 14 13.5 21 23 9"
  }))));
}, IconDelete = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-delete-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-delete-path",
    fill: color,
    d: "M15,0 C23.2842712,-1.52179594e-15 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 1.01453063e-15,23.2842712 0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 Z M24.25,18 C24.6642136,18 25,17.6642136 25,17.25 L25,13.75 C25,13.3357864 24.6642136,13 24.25,13 L5.75,13 C5.33578644,13 5,13.3357864 5,13.75 L5,17.25 C5,17.6642136 5.33578644,18 5.75,18 L24.25,18 Z"
  })));
}, IconExternalTicket = function(props) {
  var _React$createElement, size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-external-ticket-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "aph-icon-external-ticket-subgroup",
    transform: "translate(15.000000, 15.500000) rotate(-270.000000) translate(-15.000000, -15.500000) translate(4.000000, 4.500000)",
    stroke: color,
    strokeWidth: "2.3"
  }, React__default.createElement("path", (_defineProperty(_React$createElement = {
    id: "aph-icon-external-ticket-path-one",
    d: "M1.5,2 L19.5,2 C20.0522847,2 20.5,2.44771525 20.5,3 L20.5,7 C17.8333333,7 16.5,8 16.5,10 C16.5,12 17.8333333,13 20.5,13 L20.5,17 C20.5,17.5522847 20.0522847,18 19.5,18 L5.5,18"
  }, "id", "Rectangle"), _defineProperty(_React$createElement, "transform", "translate(11.000000, 10.000000) rotate(-90.000000) translate(-11.000000, -10.000000)"), 
  _React$createElement)), React__default.createElement("path", {
    id: "aph-icon-external-ticket-path-two",
    d: "M0,21.5 L22,14.5"
  }))));
}, IconEye = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-eye-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-eye-path",
    d: "M5.34544747,14.7030573 C8.56363164,11.5676858 11.7818158,10 15,10 C18.2181923,10 21.4363846,11.5676937 24.6545769,14.7030811 L24.6545535,14.7031051 C25.0946794,15.1319063 25.1038597,15.8363109 24.6750585,16.2764368 C24.6683125,16.2833609 24.6614766,16.2901967 24.6545525,16.2969427 C21.4363684,19.4323142 18.2181842,21 15,21 C11.7818077,21 8.5636154,19.4323063 5.34542309,16.2969189 L5.34544646,16.2968949 C4.90532063,15.8680937 4.89614027,15.1636891 5.32494155,14.7235632 C5.33168748,14.7166391 5.33852337,14.7098033 5.34544747,14.7030573 Z M15,18.25 C16.5362373,18.25 17.7816037,17.0187831 17.7816037,15.5 C17.7816037,13.9812169 16.5362373,12.75 15,12.75 C13.4637627,12.75 12.2183963,13.9812169 12.2183963,15.5 C12.2183963,17.0187831 13.4637627,18.25 15,18.25 Z",
    fill: color
  })));
}, IconFilter = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Filter-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    transform: "translate(5.000000, 6.000000)",
    id: "Path",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React__default.createElement("polygon", {
    points: "20 0 0 0 8 9.46 8 16 12 18 12 9.46"
  }))));
}, IconFlash = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }, React__default.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    stroke: color,
    strokeWidth: "2",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  })));
}, IconFlashOff = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  }), React__default.createElement("path", {
    id: "aph-icon-flash-path",
    d: "M6,6 L24,24",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })));
}, IconHelp = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Help-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "help-circle",
    transform: "translate(5.000000, 5.000000)",
    stroke: color,
    strokeWidth: "2.3"
  }, React__default.createElement("circle", {
    id: "Oval",
    cx: "10",
    cy: "10",
    r: "10"
  }), React__default.createElement("path", {
    d: "M7.09,7 C7.57543688,5.62004444 8.98538362,4.79140632 10.4271763,5.0387121 C11.868969,5.28601788 12.9221794,6.53715293 12.9200034,8 C12.9200034,10 9.92,11 9.92,11",
    id: "Path"
  }), React__default.createElement("path", {
    d: "M10,15 L10,14.5",
    id: "Path"
  }))));
}, IconInfo = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 20 20"
  }, React__default.createElement("g", {
    id: "aph-icon-info-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-info-path",
    fill: color,
    d: "M10,3.25 C10.9664983,3.25 11.75,4.03350169 11.75,5 C11.75,5.96649831 10.9664983,6.75 10,6.75 C9.03350169,6.75 8.25,5.96649831 8.25,5 C8.25,4.03350169 9.03350169,3.25 10,3.25 Z M8.6875,8.75 L11.3125,8.75 C11.5541246,8.75 11.75,8.94587542 11.75,9.1875 L11.75,16.3125 C11.75,16.5541246 11.5541246,16.75 11.3125,16.75 L8.6875,16.75 C8.44587542,16.75 8.25,16.5541246 8.25,16.3125 L8.25,9.1875 C8.25,8.94587542 8.44587542,8.75 8.6875,8.75 Z"
  })));
}, IconItems = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Tab-Destaques-/-Normal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "Eventos",
    transform: "translate(2.000000, 0.500000)"
  }, React__default.createElement("rect", {
    id: "Rectangle-Copy-3",
    stroke: color,
    strokeWidth: "1.5",
    transform: "translate(7.000000, 12.000000) rotate(-270.000000) translate(-7.000000, -12.000000) ",
    x: "-4.75",
    y: "4.25",
    width: "23.5",
    height: "15.5",
    rx: "1.05"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy-3",
    fill: color,
    transform: "translate(18.000000, 11.950000) rotate(-270.000000) translate(-18.000000, -11.950000) ",
    x: "7",
    y: "11.2",
    width: "22",
    height: "1.5",
    rx: "0.75"
  }), React__default.createElement("rect", {
    id: "Rectangle-Copy-5",
    fill: color,
    transform: "translate(21.000000, 11.750000) rotate(-270.000000) translate(-21.000000, -11.750000) ",
    x: "12",
    y: "11",
    width: "18",
    height: "1.5",
    rx: "0.75"
  }))));
}, IconList = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-list-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-list-group",
    fill: color,
    d: "M7,11 C5.8954305,11 5,10.1045695 5,9 C5,7.8954305 5.8954305,7 7,7 C8.1045695,7 9,7.8954305 9,9 C9,10.1045695 8.1045695,11 7,11 Z M7,17 C5.8954305,17 5,16.1045695 5,15 C5,13.8954305 5.8954305,13 7,13 C8.1045695,13 9,13.8954305 9,15 C9,16.1045695 8.1045695,17 7,17 Z M7,23 C5.8954305,23 5,22.1045695 5,21 C5,19.8954305 5.8954305,19 7,19 C8.1045695,19 9,19.8954305 9,21 C9,22.1045695 8.1045695,23 7,23 Z M12.5,7.5 L23.5,7.5 C24.3284271,7.5 25,8.17157288 25,9 C25,9.82842712 24.3284271,10.5 23.5,10.5 L12.5,10.5 C11.6715729,10.5 11,9.82842712 11,9 C11,8.17157288 11.6715729,7.5 12.5,7.5 Z M12.5,13.5 L23.5,13.5 C24.3284271,13.5 25,14.1715729 25,15 C25,15.8284271 24.3284271,16.5 23.5,16.5 L12.5,16.5 C11.6715729,16.5 11,15.8284271 11,15 C11,14.1715729 11.6715729,13.5 12.5,13.5 Z M12.5,19.5 L23.5,19.5 C24.3284271,19.5 25,20.1715729 25,21 C25,21.8284271 24.3284271,22.5 23.5,22.5 L12.5,22.5 C11.6715729,22.5 11,21.8284271 11,21 C11,20.1715729 11.6715729,19.5 12.5,19.5 Z"
  })));
}, IconStyled = _styled("svg", {
  target: "edz3eco0"
})(animations.spin(), ";"), IconLoaderDonut = function(props) {
  var color = props.color, size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement(IconStyled, {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-loader-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("path", {
    id: "aph-icon-loader-path",
    stroke: color,
    strokeWidth: "4",
    d: "M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
  })));
};

IconLoaderDonut.defaultProps = {
  color: "white",
  size: 20
}, IconLoaderDonut.propTypes = {
  color: propTypes.string,
  size: propTypes.number
};

var IconLoading = function(props) {
  var color = props.color, width = props.width, height = props.height, size = props.size, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size || 120,
    height: height || size || 30,
    viewBox: "0 0 120 30",
    fill: color
  }, React__default.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, React__default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React__default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React__default.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, React__default.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React__default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), React__default.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, React__default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), React__default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}, IconLock = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-lock-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("rect", {
    id: "aph-icon-lock-rect",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), React__default.createElement("path", {
    id: "aph-icon-lock-path",
    fill: color,
    d: "M9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 C18.3137085,5 21,7.6862915 21,11 L21,13 L19,13 L19,11 C19,8.790861 17.209139,7 15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 Z"
  })));
}, IconLogout = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Logout-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "log-out",
    transform: "translate(6.000000, 6.000000)",
    stroke: color,
    strokeWidth: "2.3"
  }, React__default.createElement("path", {
    d: "M6,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 L6,0",
    id: "Path"
  }), React__default.createElement("polyline", {
    id: "Path",
    points: "13 14 18 9 13 4"
  }), React__default.createElement("path", {
    d: "M18,9 L6,9",
    id: "Path"
  }))));
}, IconMinus = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-minus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("rect", {
    id: "aph-icon-rect-minus",
    fill: color,
    rx: "2.5",
    x: "12.5",
    y: "5",
    width: "5",
    height: "20",
    transform: "translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
  })));
}, IconOptions = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-options",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-options",
    fill: color,
    d: "M7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 C8.88071187,12.5 10,13.6192881 10,15 C10,16.3807119 8.88071187,17.5 7.5,17.5 Z M15,17.5 C13.6192881,17.5 12.5,16.3807119 12.5,15 C12.5,13.6192881 13.6192881,12.5 15,12.5 C16.3807119,12.5 17.5,13.6192881 17.5,15 C17.5,16.3807119 16.3807119,17.5 15,17.5 Z M22.5,17.5 C21.1192881,17.5 20,16.3807119 20,15 C20,13.6192881 21.1192881,12.5 22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 Z"
  })));
}, IconPencil = function(props) {
  var color = props.color, size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-polygon-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-refresh",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(13.427922, 16.427922) rotate(-315.000000) translate(-13.427922, -16.427922)",
    d: "M9.92792206,3.92792206 L16.9279221,3.92792206 C18.0324916,3.92792206 18.9279221,4.82335256 18.9279221,5.92792206 L18.9279221,20.0888985 C18.9279221,20.4844205 18.8106482,20.8710621 18.5909276,21.1999397 L13.8436734,28.3056257 C13.6902707,28.5352389 13.3797749,28.5970196 13.1501618,28.4436168 C13.0955478,28.4071297 13.0486578,28.3602397 13.0121707,28.3056257 L8.26491652,21.1999397 C8.04519592,20.8710621 7.92792206,20.4844205 7.92792206,20.0888985 L7.92792206,5.92792206 C7.92792206,4.82335256 8.82335256,3.92792206 9.92792206,3.92792206 Z"
  }), React__default.createElement("polygon", {
    id: "aph-icon-polygon-refresh",
    fill: color,
    transform: "translate(5.999679, 23.856166) rotate(-315.000000) translate(-5.999679, -23.856166)",
    points: "8.67125147 21.8612882 5.9996786 25.8510429 3.32810572 21.8612882"
  })));
}, IconPlus = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-plus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-plus",
    fill: color,
    d: "M17.5,12.5 L22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 L17.5,17.5 L17.5,22.5 C17.5,23.8807119 16.3807119,25 15,25 C13.6192881,25 12.5,23.8807119 12.5,22.5 L12.5,17.5 L7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 L12.5,12.5 L12.5,7.5 C12.5,6.11928813 13.6192881,5 15,5 C16.3807119,5 17.5,6.11928813 17.5,7.5 L17.5,12.5 Z"
  })));
}, IconQRCode = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-qrcode",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-qrcode",
    fill: color,
    d: "M6,19 L10,19 C10.5522847,19 11,19.4477153 11,20 L11,24 C11,24.5522847 10.5522847,25 10,25 L6,25 C5.44771525,25 5,24.5522847 5,24 L5,20 C5,19.4477153 5.44771525,19 6,19 Z M7.3,20.8 C7.02385763,20.8 6.8,21.0238576 6.8,21.3 L6.8,22.8 C6.8,23.0761424 7.02385763,23.3 7.3,23.3 L8.8,23.3 C9.07614237,23.3 9.3,23.0761424 9.3,22.8 L9.3,21.3 C9.3,21.0238576 9.07614237,20.8 8.8,20.8 L7.3,20.8 Z M6,5 L10,5 C10.5522847,5 11,5.44771525 11,6 L11,10 C11,10.5522847 10.5522847,11 10,11 L6,11 C5.44771525,11 5,10.5522847 5,10 L5,6 C5,5.44771525 5.44771525,5 6,5 Z M7.3,6.8 C7.02385763,6.8 6.8,7.02385763 6.8,7.3 L6.8,8.8 C6.8,9.07614237 7.02385763,9.3 7.3,9.3 L8.8,9.3 C9.07614237,9.3 9.3,9.07614237 9.3,8.8 L9.3,7.3 C9.3,7.02385763 9.07614237,6.8 8.8,6.8 L7.3,6.8 Z M20,5 L24,5 C24.5522847,5 25,5.44771525 25,6 L25,10 C25,10.5522847 24.5522847,11 24,11 L20,11 C19.4477153,11 19,10.5522847 19,10 L19,6 C19,5.44771525 19.4477153,5 20,5 Z M21.3,6.8 C21.0238576,6.8 20.8,7.02385763 20.8,7.3 L20.8,8.8 C20.8,9.07614237 21.0238576,9.3 21.3,9.3 L22.8,9.3 C23.0761424,9.3 23.3,9.07614237 23.3,8.8 L23.3,7.3 C23.3,7.02385763 23.0761424,6.8 22.8,6.8 L21.3,6.8 Z M24,17 C24.5522847,17 25,17.4477153 25,18 L25,24 C25,24.5522847 24.5522847,25 24,25 L16,25 C15.4477153,25 15,24.5522847 15,24 C15,23.4477153 15.4477153,23 16,23 L22,23 C22.5522847,23 23,22.5522847 23,22 L23,18 C23,17.4477153 23.4477153,17 24,17 Z M14,22 C13.4477153,22 13,21.5522847 13,21 L13,19 C13,18.4477153 13.4477153,18 14,18 L20,18 C20.5522847,18 21,18.4477153 21,19 C21,19.5522847 20.5522847,20 20,20 L16,20 C15.4477153,20 15,20.4477153 15,21 C15,21.5522847 14.5522847,22 14,22 Z M14,11 C14.5522847,11 15,11.4477153 15,12 L15,15 C15,15.5522847 14.5522847,16 14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L12,14 C12.5522847,14 13,13.5522847 13,13 L13,12 C13,11.4477153 13.4477153,11 14,11 Z M16,5 C16.5522847,5 17,5.44771525 17,6 L17,8 C17,8.55228475 16.5522847,9 16,9 C15.4477153,9 15,8.55228475 15,8 L15,6 C15,5.44771525 15.4477153,5 16,5 Z M17.9988769,13.0002805 L24.0011231,13.0019657 C24.552833,13.0021206 25,13.4494132 25,14.0011231 C25,14.5526327 24.5529131,14.9997196 24.0014035,14.9997196 C24.0013101,14.9997196 24.0012166,14.9997196 24.0011231,14.9997195 L17.9988769,14.9980343 C17.447167,14.9978794 17,14.5505868 17,13.9988769 C17,13.4473673 17.4470869,13.0002804 17.9985965,13.0002804 C17.9986899,13.0002804 17.9987834,13.0002804 17.9988769,13.0002805 Z"
  })));
}, IconRefresh = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Refresh-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "Group",
    transform: "translate(1.500000, 6.000000)"
  }, React__default.createElement("path", {
    id: "Path-4-Copy-3",
    fill: color,
    transform: "translate(21.649747, 10.449747) rotate(-315.000000) translate(-21.649747, -10.449747) ",
    d: "M19.0247475,13.9497475 C18.5414983,13.9497475 18.1497475,13.5579966 18.1497475,13.0747475 L18.1497475,7.82474747 C18.1497475,7.34149831 18.5414983,6.94974747 19.0247475,6.94974747 L24.2747475,6.94974747 C24.7579966,6.94974747 25.1497475,7.34149831 25.1497475,7.82474747 C25.1497475,8.30799662 24.7579966,8.69974747 24.2747475,8.69974747 L20.7747475,8.69974747 C20.2914983,8.69974747 19.8997475,9.09149831 19.8997475,9.57474747 L19.8997475,13.0747475 C19.8997475,13.5579966 19.5079966,13.9497475 19.0247475,13.9497475 Z"
  }), React__default.createElement("path", {
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(5.349747, 7.449747) rotate(-135.000000) translate(-5.349747, -7.449747) ",
    d: "M2.72474747,10.9497475 C2.24149831,10.9497475 1.84974747,10.5579966 1.84974747,10.0747475 L1.84974747,4.82474747 C1.84974747,4.34149831 2.24149831,3.94974747 2.72474747,3.94974747 L7.97474747,3.94974747 C8.45799662,3.94974747 8.84974747,4.34149831 8.84974747,4.82474747 C8.84974747,5.30799662 8.45799662,5.69974747 7.97474747,5.69974747 L4.47474747,5.69974747 C3.99149831,5.69974747 3.59974747,6.09149831 3.59974747,6.57474747 L3.59974747,10.0747475 C3.59974747,10.5579966 3.20799662,10.9497475 2.72474747,10.9497475 Z"
  }), React__default.createElement("path", {
    id: "Oval",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20,2.63083009 C18.4097668,1.00521174 16.2144208,0 13.789779,0 C8.93531811,0 5,4.02943725 5,9"
  }), React__default.createElement("path", {
    id: "Oval-Copy",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "translate(14.500000, 13.500000) rotate(-180.000000) translate(-14.500000, -13.500000) ",
    d: "M22,11.6308301 C20.4097668,10.0052117 18.2144208,9 15.789779,9 C10.9353181,9 7,13.0294373 7,18"
  }))));
}, IconScan = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-scan",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, React__default.createElement("polyline", {
    id: "aph-icon-polyline-one-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 5 25 5 25 10"
  }), React__default.createElement("polyline", {
    id: "aph-icon-polyline-two-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 20 10 20 10 25",
    transform: "translate(7.500000, 22.500000) rotate(-180.000000) translate(-7.500000, -22.500000)"
  }), React__default.createElement("polyline", {
    id: "aph-icon-polyline-tree-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 5 10 5 10 10",
    transform: "translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000)"
  }), React__default.createElement("polyline", {
    id: "aph-icon-polyline-four-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 20 25 20 25 25",
    transform: "translate(22.500000, 22.500000) rotate(-270.000000) translate(-22.500000, -22.500000)"
  }), React__default.createElement("path", {
    id: "aph-icon-path-scan",
    d: "M3,15 L27,15",
    stroke: color,
    strokeWidth: "2"
  })));
};

function IconSearch(props) {
  var size = props.size, color = props.color, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "IconSearchGroup",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("circle", {
    id: "IconSearchCircle",
    stroke: color,
    strokeWidth: "3.5",
    cx: "12.5",
    cy: "12.9",
    r: "6"
  }), React__default.createElement("path", {
    d: "M17.5,17.9 L23,23.4",
    id: "IconSearchLiner",
    stroke: color,
    strokeWidth: "3.5"
  })));
}

var IconSettings = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Settings-/-Mercury",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "settings",
    transform: "translate(4.000000, 4.000000)",
    stroke: color,
    strokeWidth: "2"
  }, React__default.createElement("circle", {
    id: "Oval",
    cx: "11",
    cy: "11",
    r: "3"
  }), React__default.createElement("path", {
    d: "M18.4,14 C18.1276535,14.6170901 18.2583341,15.3378133 18.73,15.82 L18.79,15.88 C19.1655541,16.2551365 19.3765733,16.7641815 19.3765733,17.295 C19.3765733,17.8258185 19.1655541,18.3348635 18.79,18.71 C18.4148635,19.0855541 17.9058185,19.2965733 17.375,19.2965733 C16.8441815,19.2965733 16.3351365,19.0855541 15.96,18.71 L15.9,18.65 C15.4178133,18.1783341 14.6970901,18.0476535 14.08,18.32 C13.4755294,18.5790683 13.0826229,19.1723571 13.08,19.83 L13.08,20 C13.08,21.1045695 12.1845695,22 11.08,22 C9.9754305,22 9.08,21.1045695 9.08,20 L9.08,19.91 C9.0641566,19.2326708 8.63587177,18.6338652 8,18.4 C7.38290993,18.1276535 6.66218673,18.2583341 6.18,18.73 L6.12,18.79 C5.74486349,19.1655541 5.2358185,19.3765733 4.705,19.3765733 C4.1741815,19.3765733 3.66513651,19.1655541 3.29,18.79 C2.91444591,18.4148635 2.70342669,17.9058185 2.70342669,17.375 C2.70342669,16.8441815 2.91444591,16.3351365 3.29,15.96 L3.35,15.9 C3.82166588,15.4178133 3.95234646,14.6970901 3.68,14.08 C3.42093172,13.4755294 2.82764292,13.0826229 2.17,13.08 L2,13.08 C0.8954305,13.08 0,12.1845695 0,11.08 C0,9.9754305 0.8954305,9.08 2,9.08 L2.09,9.08 C2.76732918,9.0641566 3.36613483,8.63587177 3.6,8 C3.87234646,7.38290993 3.74166588,6.66218673 3.27,6.18 L3.21,6.12 C2.83444591,5.74486349 2.62342669,5.2358185 2.62342669,4.705 C2.62342669,4.1741815 2.83444591,3.66513651 3.21,3.29 C3.58513651,2.91444591 4.0941815,2.70342669 4.625,2.70342669 C5.1558185,2.70342669 5.66486349,2.91444591 6.04,3.29 L6.1,3.35 C6.58218673,3.82166588 7.30290993,3.95234646 7.92,3.68 L8,3.68 C8.60447061,3.42093172 8.99737709,2.82764292 9,2.17 L9,2 C9,0.8954305 9.8954305,0 11,0 C12.1045695,0 13,0.8954305 13,2 L13,2.09 C13.0026229,2.74764292 13.3955294,3.34093172 14,3.6 C14.6170901,3.87234646 15.3378133,3.74166588 15.82,3.27 L15.88,3.21 C16.2551365,2.83444591 16.7641815,2.62342669 17.295,2.62342669 C17.8258185,2.62342669 18.3348635,2.83444591 18.71,3.21 C19.0855541,3.58513651 19.2965733,4.0941815 19.2965733,4.625 C19.2965733,5.1558185 19.0855541,5.66486349 18.71,6.04 L18.65,6.1 C18.1783341,6.58218673 18.0476535,7.30290993 18.32,7.92 L18.32,8 C18.5790683,8.60447061 19.1723571,8.99737709 19.83,9 L20,9 C21.1045695,9 22,9.8954305 22,11 C22,12.1045695 21.1045695,13 20,13 L19.91,13 C19.2523571,13.0026229 18.6590683,13.3955294 18.4,14 Z",
    id: "Path"
  }))));
}, IconSignal = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Chart-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "bar-chart",
    transform: "translate(8.000000, 7.000000)",
    stroke: color,
    strokeWidth: "2.3"
  }, React__default.createElement("path", {
    d: "M7,16 L7,6",
    id: "Path"
  }), React__default.createElement("path", {
    d: "M13,16 L13,0",
    id: "Path"
  }), React__default.createElement("path", {
    d: "M1,16 L1,12",
    id: "Path"
  }))));
}, IconTicketbooth = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("path", {
    id: "aph-icon-defs-path-ticketbooth",
    d: "M6,9 L24,9 C24.5522847,9 25,9.44771525 25,10 L25,13 C23.6666667,13.0001869 23,13.6668536 23,15 C23,16.3331464 23.6666667,16.9998131 25,17 L25,20 C25,20.5522847 24.5522847,21 24,21 L6,21 C5.44771525,21 5,20.5522847 5,20 L5,17 C6.33333333,16.9998131 7,16.3331464 7,15 C7,13.6668536 6.33333333,13.0001869 5,13 L5,10 C5,9.44771525 5.44771525,9 6,9 Z"
  })), React__default.createElement("g", {
    id: "aph-icon-group-ticketbooth",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "aph-icon-mask-ticketbooth",
    fill: color
  }, React__default.createElement("use", {
    xlinkHref: "#aph-icon-defs-path-ticketbooth"
  })), React__default.createElement("use", {
    id: "aph-icon-use-ticketbooth",
    fill: color,
    xlinkHref: "#aph-icon-defs-path-ticketbooth",
    transform: "translate(15.000000, 15.000000) rotate(-45.000000) translate(-15.000000, -15.000000)"
  })));
}, IconTimes = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-times-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    id: "aph-icon-times-subgroup",
    transform: "translate(9.000000, 9.000000)",
    stroke: color,
    strokeWidth: "4"
  }, React__default.createElement("path", {
    id: "aph-icon-times-path-one",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000)"
  }), React__default.createElement("path", {
    id: "aph-icon-times-path-two",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-180.000000) translate(-6.000000, -6.000000)"
  }))));
}, IconTransfer = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-transfer",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    id: "aph-icon-path-transfer",
    fill: color,
    transform: "translate(14.992641, 14.985028) rotate(-90.000000) translate(-14.992641, -14.985028)",
    d: "M11.206603,8.37817585 C11.2271209,8.45799335 11.2380326,8.54166506 11.2380326,8.62788535 L11.2380326,19.9850282 C11.2380326,20.537313 10.7903174,20.9850282 10.2380326,20.9850282 C9.68574787,20.9850282 9.23803262,20.537313 9.23803262,19.9850282 L9.23803262,8.62788535 C9.23803262,8.54608042 9.24785541,8.46656973 9.26638585,8.3904684 L6.70710678,10.9497475 C6.31658249,11.3402718 5.68341751,11.3402718 5.29289322,10.9497475 C4.90236893,10.5592232 4.90236893,9.9260582 5.29289322,9.53553391 L9.53553391,5.29289322 C9.9260582,4.90236893 10.5592232,4.90236893 10.9497475,5.29289322 L15.1923882,9.53553391 C15.5829124,9.9260582 15.5829124,10.5592232 15.1923882,10.9497475 C14.8018639,11.3402718 14.1686989,11.3402718 13.7781746,10.9497475 L11.206603,8.37817585 Z M20.6984202,21.6000634 L23.2781746,19.0203089 C23.6686989,18.6297847 24.3018639,18.6297847 24.6923882,19.0203089 C25.0829124,19.4108332 25.0829124,20.0439982 24.6923882,20.4345225 L20.4497475,24.6771632 C20.0592232,25.0676875 19.4260582,25.0676875 19.0355339,24.6771632 L14.7928932,20.4345225 C14.4023689,20.0439982 14.4023689,19.4108332 14.7928932,19.0203089 C15.1834175,18.6297847 15.8165825,18.6297847 16.2071068,19.0203089 L18.7740013,21.5872035 C18.7505574,21.5022863 18.7380326,21.4128383 18.7380326,21.3204649 L18.7380326,9.98502821 C18.7380326,9.43274346 19.1857479,8.98502821 19.7380326,8.98502821 C20.2903174,8.98502821 20.7380326,9.43274346 20.7380326,9.98502821 L20.7380326,21.3204649 C20.7380326,21.417514 20.7242078,21.5113341 20.6984202,21.6000634 Z"
  })));
}, IconUnlock = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "aph-icon-group-unlock",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("rect", {
    id: "aph-icon-rect-unlock",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), React__default.createElement("path", {
    id: "aph-icon-path-unlock",
    fill: color,
    d: "M21,10 C21,10.5522847 20.5522847,11 20,11 C19.4477153,11 19,10.5522847 19,10 C19,8.34314575 17.6568542,7 16,7 L15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 L16,5 C18.7614237,5 21,7.23857625 21,10 Z"
  })));
}, IconUser = function(props) {
  var size = props.size, width = props.width, height = props.height, color = props.color, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "Icon-/-30-/-Perfil-/-Mercury",
    stroke: color,
    strokeWidth: "2"
  }, React__default.createElement("path", {
    d: "M18.9132855,17.7160261 C21.1860415,17.7160261 23.9166399,19.3436924 25.000265,21.3295607 L25.5521812,22.3410109 C26.6411712,24.3367109 25.6766726,25.9545455 23.4031446,25.9545455 L7.59388622,25.9545455 C5.31801606,25.9545455 4.36122446,24.3268791 5.44484956,22.3410109 L5.99676577,21.3295607 C7.08575576,19.3338607 9.81519808,17.7160261 12.0837452,17.7160261 L18.9132855,17.7160261 Z M15.1904113,4 C17.8161848,4 19.952635,6.03450072 19.952635,8.53515134 L19.952635,10.7534959 C19.952635,13.2541466 17.8161848,15.2886473 15.1904113,15.2886473 C12.5647887,15.2886473 10.4284894,13.2541466 10.4284894,10.7534959 L10.4284894,8.53515134 C10.4284894,6.03450072 12.5647887,4 15.1904113,4 Z"
  }))));
}, IconPaymentAmex = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "aph-icon-defs-rect-payment-amex",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "aph-icon-group-payment-amex",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "aph-icon-mask-payment-amex",
    fill: "#FFFFFF"
  }, React__default.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#27ADE4",
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  }), React__default.createElement("g", {
    id: "aph-icon-subgroup-payment-amex",
    mask: "url(#aph-icon-mask-payment-amex)",
    fillRule: "nonzero"
  }, React__default.createElement("g", {
    id: "Shape",
    transform: "translate(0.750000, 9.800000)"
  }, React__default.createElement("path", {
    fill: "#2D78BC",
    d: "M3.46580854,2.55314286 L2.95162683,1.24857143 L2.44050366,2.55314286 L3.46580854,2.55314286 Z M14.7871207,2.03357143 C14.6838951,2.09907143 14.5619012,2.10121429 14.4157171,2.10121429 L13.5033,2.10121429 L13.5033,1.3745 L14.4279512,1.3745 C14.5587732,1.3745 14.6953646,1.38014286 14.7839927,1.433 C14.8812402,1.48114286 14.9413693,1.58264286 14.9413693,1.72271429 C14.9416463,1.86542857 14.8841598,1.98064286 14.7871207,2.03357143 L14.7871207,2.03357143 Z M21.2940183,2.55314286 L20.7746232,1.24857143 L20.258078,2.55314286 L21.2940183,2.55314286 L21.2940183,2.55314286 Z M9.16455732,3.96507143 L8.39464024,3.96507143 L8.39179024,1.402 L7.30302073,3.96507143 L6.64369756,3.96507143 L5.5523561,1.39985714 L5.5523561,3.96507143 L4.02503415,3.96507143 L3.73655854,3.23514286 L2.1734378,3.23514286 L1.88183415,3.96507143 L1.0664561,3.96507143 L2.41089146,0.692642857 L3.52670122,0.692642857 L4.80350122,3.79078571 L4.80350122,0.692642857 L6.02879268,0.692642857 L7.01141707,2.91257143 L7.91396341,0.692642857 L9.16455732,0.692642857 L9.16455732,3.96507143 L9.16455732,3.96507143 L9.16455732,3.96507143 Z M12.2324085,3.96507143 L9.72406098,3.96507143 L9.72406098,0.692642857 L12.232478,0.692642857 L12.232478,1.37442857 L10.4752793,1.37442857 L10.4752793,1.96428571 L12.1903537,1.96428571 L12.1903537,2.63514286 L10.4752793,2.63514286 L10.4752793,3.28778571 L12.232478,3.28778571 L12.2324085,3.96507143 L12.2324085,3.96507143 Z M15.7689805,1.57435714 C15.7689805,2.0955 15.4344878,2.36571429 15.2397146,2.44621429 C15.404111,2.51171429 15.5445256,2.62664286 15.6111183,2.72228571 C15.7172634,2.8845 15.7356841,3.03021429 15.7356841,3.322 L15.7356841,3.96507143 L14.9782793,3.96507143 L14.9754293,3.55242857 C14.9754293,3.35542857 14.9933634,3.07185714 14.8568415,2.91471429 C14.7470817,2.79978571 14.5801134,2.77464286 14.309572,2.77464286 L13.5033,2.77464286 L13.5033,3.96507143 L12.7524293,3.96507143 L12.7524293,0.692642857 L14.4797378,0.692642857 C14.8636537,0.692642857 15.1463598,0.703071429 15.3887488,0.849285714 C15.6264805,0.996 15.7689805,1.209 15.7689805,1.57435714 L15.7689805,1.57435714 Z M16.9706378,3.96507143 L16.2046134,3.96507143 L16.2046134,0.692928571 L16.9706378,0.692928571 L16.9706378,3.96507143 Z M25.8585366,3.96507143 L24.7941659,3.96507143 L23.3711817,1.50885714 L23.3711817,3.96507143 L21.8417744,3.96507143 L21.5499622,3.23514286 L19.990178,3.23514286 L19.7064293,3.96507143 L18.8277951,3.96507143 C18.4631341,3.96507143 18.0006695,3.88085714 17.7390256,3.60292857 C17.4750183,3.32521429 17.3379402,2.94892857 17.3379402,2.35371429 C17.3379402,1.86885714 17.4196171,1.42442857 17.7429183,1.07457143 C17.9855854,0.813214286 18.3658171,0.692642857 18.8831963,0.692642857 L19.6098768,0.692642857 L19.6098768,1.39371429 L18.8982805,1.39371429 C18.6244024,1.39371429 18.4698768,1.43621429 18.3206341,1.58778571 C18.1926622,1.72592857 18.1047293,1.98628571 18.1047293,2.32921429 C18.1047293,2.67957143 18.1718085,2.93242857 18.311528,3.09735714 C18.4267793,3.227 18.6369146,3.26628571 18.8346073,3.26628571 L19.171672,3.26628571 L20.2299951,0.693 L21.355189,0.693 L22.626289,3.78821429 L22.626289,0.693 L23.7696951,0.693 L25.0894537,2.97171429 L25.0894537,0.693 L25.8585366,0.693 L25.8585366,3.96507143 L25.8585366,3.96507143 Z M1.05783659,4.60785714 L2.34061463,4.60785714 L2.62985488,3.88085714 L3.27722195,3.88085714 L3.56569756,4.60785714 L6.08996341,4.60785714 L6.08996341,4.05221429 L6.31546098,4.61 L7.62555732,4.61 L7.85077683,4.04392857 L7.85077683,4.60785714 L14.1238354,4.60785714 L14.1207073,3.4145 L14.2421451,3.4145 C14.327228,3.41771429 14.3519049,3.426 14.3519049,3.57221429 L14.3519049,4.60785714 L17.5963866,4.60785714 L17.5963866,4.33014286 C17.8583085,4.47635714 18.265372,4.60785714 18.801172,4.60785714 L20.1659049,4.60785714 L20.4579951,3.88085714 L21.1056402,3.88085714 L21.3911963,4.60785714 L24.0213293,4.60785714 L24.0213293,3.91721429 L24.4197732,4.60785714 L26.5275915,4.60785714 L26.5275915,0.044 L24.441322,0.044 L24.441322,0.583071429 L24.1495098,0.044 L22.0088817,0.044 L22.0088817,0.583071429 L21.7409817,0.044 L18.849622,0.044 C18.3660951,0.044 17.940611,0.114571429 17.5967341,0.3105 L17.5967341,0.044 L15.6015256,0.044 L15.6015256,0.3105 C15.3830488,0.108428571 15.0852585,0.044 14.7536159,0.044 L7.46435854,0.044 L6.97534024,1.22264286 L6.47311463,0.044 L4.17691829,0.044 L4.17691829,0.583071429 L3.92458902,0.044 L1.96691707,0.044 L1.05735,2.21392857 L0.014597561,4.60785714 L1.05783659,4.60785714 Z"
  }), React__default.createElement("path", {
    fill: "#FFFFFF",
    d: "M3.46580854,2.82035714 L2.95162683,1.51578571 L2.44050366,2.82035714 L3.46580854,2.82035714 Z M14.7871207,2.30078571 C14.6838951,2.36628571 14.5619012,2.36842857 14.4157171,2.36842857 L13.5033,2.36842857 L13.5033,1.64171429 L14.4279512,1.64171429 C14.5587732,1.64171429 14.6953646,1.64735714 14.7839927,1.70021429 C14.8812402,1.74835714 14.9413693,1.84985714 14.9413693,1.98992857 C14.9416463,2.13271429 14.8841598,2.24792857 14.7871207,2.30078571 L14.7871207,2.30078571 Z M21.2940183,2.82035714 L20.7746232,1.51578571 L20.258078,2.82035714 L21.2940183,2.82035714 L21.2940183,2.82035714 Z M9.16455732,4.23235714 L8.39464024,4.23235714 L8.39179024,1.66928571 L7.30302073,4.23235714 L6.64369756,4.23235714 L5.5523561,1.66714286 L5.5523561,4.23235714 L4.02503415,4.23235714 L3.73655854,3.50242857 L2.1734378,3.50242857 L1.88183415,4.23235714 L1.0664561,4.23235714 L2.41089146,0.959928571 L3.52670122,0.959928571 L4.80350122,4.05807143 L4.80350122,0.959928571 L6.02879268,0.959928571 L7.01141707,3.17985714 L7.91396341,0.959928571 L9.16455732,0.959928571 L9.16455732,4.23235714 L9.16455732,4.23235714 L9.16455732,4.23235714 Z M12.2324085,4.23235714 L9.72406098,4.23235714 L9.72406098,0.959928571 L12.232478,0.959928571 L12.232478,1.64171429 L10.4752793,1.64171429 L10.4752793,2.23157143 L12.1903537,2.23157143 L12.1903537,2.90242857 L10.4752793,2.90242857 L10.4752793,3.55507143 L12.232478,3.55507143 L12.2324085,4.23235714 L12.2324085,4.23235714 Z M15.7689805,1.84164286 C15.7689805,2.36278571 15.4344878,2.633 15.2397146,2.7135 C15.404111,2.779 15.5445256,2.89392857 15.6111183,2.98957143 C15.7172634,3.15178571 15.7356841,3.2975 15.7356841,3.58928571 L15.7356841,4.23235714 L14.9782793,4.23235714 L14.9754293,3.81971429 C14.9754293,3.62271429 14.9933634,3.33914286 14.8568415,3.182 C14.7470817,3.06707143 14.5801134,3.04192857 14.309572,3.04192857 L13.5033,3.04192857 L13.5033,4.23235714 L12.7524293,4.23235714 L12.7524293,0.959928571 L14.4797378,0.959928571 C14.8636537,0.959928571 15.1463598,0.970357143 15.3887488,1.11657143 C15.6264805,1.26328571 15.7689805,1.47628571 15.7689805,1.84164286 L15.7689805,1.84164286 Z M16.9706378,4.23235714 L16.2046134,4.23235714 L16.2046134,0.960214286 L16.9706378,0.960214286 L16.9706378,4.23235714 Z M25.8585366,4.23235714 L24.7941659,4.23235714 L23.3711817,1.77614286 L23.3711817,4.23235714 L21.8417744,4.23235714 L21.5499622,3.50242857 L19.990178,3.50242857 L19.7064293,4.23235714 L18.8277951,4.23235714 C18.4631341,4.23235714 18.0006695,4.14814286 17.7390256,3.87021429 C17.4750183,3.5925 17.3379402,3.21621429 17.3379402,2.621 C17.3379402,2.13614286 17.4196171,1.69171429 17.7429183,1.34185714 C17.9855854,1.0805 18.3658171,0.959928571 18.8831963,0.959928571 L19.6098768,0.959928571 L19.6098768,1.661 L18.8982805,1.661 C18.6244024,1.661 18.4698768,1.7035 18.3206341,1.85507143 C18.1926622,1.99321429 18.1047293,2.25357143 18.1047293,2.5965 C18.1047293,2.94685714 18.1718085,3.19971429 18.311528,3.36464286 C18.4267793,3.49428571 18.6369146,3.53357143 18.8346073,3.53357143 L19.171672,3.53357143 L20.2299951,0.960285714 L21.355189,0.960285714 L22.626289,4.0555 L22.626289,0.960285714 L23.7696951,0.960285714 L25.0894537,3.239 L25.0894537,0.960285714 L25.8585366,0.960285714 L25.8585366,4.23235714 L25.8585366,4.23235714 Z M1.05783659,4.87514286 L2.34061463,4.87514286 L2.62985488,4.14814286 L3.27722195,4.14814286 L3.56569756,4.87514286 L6.08996341,4.87514286 L6.08996341,4.3195 L6.31546098,4.87728571 L7.62555732,4.87728571 L7.85077683,4.31121429 L7.85077683,4.87514286 L14.1238354,4.87514286 L14.1207073,3.68178571 L14.2421451,3.68178571 C14.327228,3.685 14.3519049,3.69328571 14.3519049,3.8395 L14.3519049,4.87514286 L17.5963866,4.87514286 L17.5963866,4.59742857 C17.8583085,4.74364286 18.265372,4.87514286 18.801172,4.87514286 L20.1659049,4.87514286 L20.4579951,4.14814286 L21.1056402,4.14814286 L21.3911963,4.87514286 L24.0213293,4.87514286 L24.0213293,4.1845 L24.4197732,4.87514286 L26.5275915,4.87514286 L26.5275915,0.311285714 L24.441322,0.311285714 L24.441322,0.850357143 L24.1495098,0.311285714 L22.0088817,0.311285714 L22.0088817,0.850357143 L21.7409817,0.311285714 L18.849622,0.311285714 C18.3660951,0.311285714 17.940611,0.381857143 17.5967341,0.577785714 L17.5967341,0.311285714 L15.6015256,0.311285714 L15.6015256,0.577785714 C15.3830488,0.375714286 15.0852585,0.311285714 14.7536159,0.311285714 L7.46435854,0.311285714 L6.97534024,1.48992857 L6.47311463,0.311285714 L4.17691829,0.311285714 L4.17691829,0.850357143 L3.92458902,0.311285714 L1.96691707,0.311285714 L1.05735,2.48121429 L0.014597561,4.87514286 L1.05783659,4.87514286 Z"
  }), React__default.createElement("path", {
    fill: "#2D78BC",
    d: "M28.2120805,7.6935 L28.2120805,5.59971429 L27.6924073,5.59971429 L27.6924073,5.59971429 L26.3310805,5.59971429 C25.9115744,5.59971429 25.6064159,5.70421429 25.3908585,5.86642857 L25.3908585,5.59971429 L23.3345488,5.59971429 C23.0057561,5.59971429 22.6195463,5.68414286 22.4374939,5.86642857 L22.4374939,5.59971429 L18.7648171,5.59971429 L18.7648171,5.86642857 C18.4727268,5.64728571 17.9793293,5.59971429 17.7520244,5.59971429 L15.3297329,5.59971429 L15.3297329,5.86642857 C15.0985354,5.63364286 14.5845622,5.59971429 14.2711317,5.59971429 L11.5603646,5.59971429 L10.9400378,6.29807143 L10.3589854,5.59971429 L6.30955244,5.59971429 L6.30955244,10.1630714 L10.282522,10.1630714 L10.9218256,9.45371429 L11.5236622,10.1630714 L13.9729939,10.1657143 L13.9729939,9.09185714 L14.2135756,9.09185714 C14.5384061,9.09721429 14.9215573,9.08357143 15.2596646,8.9315 L15.2596646,10.1627857 L17.279828,10.1627857 L17.279828,8.97314286 L17.3776317,8.97314286 C17.501989,8.97314286 17.5139451,8.97878571 17.5139451,9.10785714 L17.5139451,10.1627857 L23.6502037,10.1627857 C24.0400976,10.1627857 24.447439,10.0587857 24.6731451,9.87092857 L24.6731451,10.1627857 L26.6192085,10.1627857 C27.0244646,10.1627857 27.4200585,10.1037143 27.7209768,9.95242857 L27.7209768,9.94764286 C28.160572,9.65628571 28.4528733,9.14585714 28.4528733,8.56321429 C28.4534268,8.2435 28.3645207,7.9455 28.2120805,7.6935 Z M14.24715,8.42364286 L13.309778,8.42364286 L13.309778,9.52078571 L11.8498134,9.52078571 L10.9246756,8.43778571 L9.9636,9.52078571 L6.98785244,9.52078571 L6.98785244,6.25 L10.0094085,6.25 L10.9335037,7.322 L11.8890878,6.25 L14.2895524,6.25 C14.885411,6.25 15.555161,6.42185714 15.555161,7.32735714 C15.555161,8.23628571 14.9036232,8.42364286 14.24715,8.42364286 Z M18.7679451,8.27535714 C18.8740902,8.43492857 18.8893829,8.58378571 18.892511,8.87242857 L18.892511,9.52085714 L18.1387207,9.52085714 L18.1387207,9.11164286 C18.1387207,8.91492857 18.1566549,8.62364286 18.0170049,8.47128571 C17.9069671,8.35421429 17.7402768,8.32585714 17.4658427,8.32585714 L16.6629073,8.32585714 L16.6629073,9.52078571 L15.9083524,9.52078571 L15.9083524,6.25 L17.6426817,6.25 C18.0229134,6.25 18.299711,6.26735714 18.5465488,6.4045 C18.7837939,6.55335714 18.932828,6.75728571 18.932828,7.13064286 C18.932828,7.65264286 18.5980573,7.91935714 18.4004341,8.00085714 C18.5668463,8.065 18.7039244,8.17992857 18.7679451,8.27535714 Z M21.8560939,6.92671429 L20.0968098,6.92671429 L20.0968098,7.52135714 L21.8132049,7.52135714 L21.8132049,8.18871429 L20.0968098,8.18871429 L20.0968098,8.8395 L21.8560939,8.84271429 L21.8560939,9.52128571 L19.3489976,9.52128571 L19.3489976,6.25 L21.8560939,6.25 L21.8560939,6.92671429 L21.8560939,6.92671429 Z M23.7690695,9.52107143 L22.3060463,9.52107143 L22.3060463,8.8195 L23.7636476,8.8195 C23.9061476,8.8195 24.0070793,8.80028571 24.0705439,8.73828571 C24.1217744,8.68807143 24.1592415,8.61428571 24.1592415,8.52557143 C24.1592415,8.43014286 24.1192024,8.35428571 24.0674159,8.30878571 C24.0096512,8.25857143 23.9308939,8.23635714 23.8000024,8.23635714 C23.0974427,8.21178571 22.2175573,8.25878571 22.2175573,7.22364286 C22.2175573,6.74921429 22.5041561,6.25 23.2915207,6.25 L24.7977805,6.25 L24.7977805,6.94621429 L23.4197707,6.94621429 C23.2832488,6.94621429 23.1942732,6.95157143 23.1185744,7.005 C23.0366195,7.05821429 23.0056866,7.1365 23.0056866,7.24071429 C23.0056866,7.36392857 23.0758939,7.44785714 23.1700829,7.4845 C23.2496744,7.51285714 23.3344793,7.52114286 23.4624512,7.52114286 L23.8671512,7.53314286 C24.2747012,7.543 24.5548354,7.61678571 24.7249317,7.79585714 C24.8713939,7.953 24.9493866,8.15185714 24.9493866,8.48835714 C24.949178,9.19235714 24.5270305,9.52107143 23.7690695,9.52107143 Z M27.6354768,9.20514286 C27.4375756,9.41335714 27.1183756,9.52107143 26.7019976,9.52107143 L25.251139,9.52107143 L25.251139,8.8195 L26.69595,8.8195 C26.8394927,8.8195 26.9399378,8.80028571 27.0002744,8.73828571 C27.0525476,8.68807143 27.088972,8.61428571 27.088972,8.52557143 C27.088972,8.43014286 27.0525476,8.35428571 26.9971463,8.30878571 C26.9427878,8.25857143 26.8634744,8.23635714 26.7323744,8.23635714 C26.0269646,8.21178571 25.1470793,8.25878571 25.1470793,7.22364286 C25.1470793,6.74921429 25.4363195,6.25 26.2249354,6.25 L27.6926854,6.25 L27.6926854,6.946 L26.3524207,6.946 C26.2161073,6.946 26.1251159,6.95164286 26.0483744,7.00507143 C25.969061,7.058 25.9386146,7.13657143 25.9386146,7.24028571 C25.9386146,7.364 26.0054854,7.44742857 26.103011,7.48407143 C26.1826024,7.51292857 26.2674073,7.52121429 26.3922512,7.52121429 L26.7993146,7.53271429 C27.2102707,7.54314286 27.4847049,7.61664286 27.6513951,7.796 C27.6818415,7.82085714 27.7002622,7.84892857 27.7216024,7.87671429 C27.7130524,7.86521429 27.704711,7.85428571 27.6958829,7.84278571 C27.8259402,8.02185714 27.904211,8.2445 27.904211,8.48635714 C27.9041415,8.76364286 27.8014024,9.01514286 27.6354768,9.20514286 Z M9.61951463,6.92671429 L10.4414268,7.87978571 L9.58309024,8.83928571 L7.73587317,8.83928571 L7.73587317,8.1885 L9.38518902,8.1885 L9.38518902,7.52114286 L7.73587317,7.52114286 L7.73587317,6.92671429 L9.61951463,6.92671429 L9.61951463,6.92671429 Z M11.4084805,7.891 L12.5620354,6.60142857 L12.5620354,9.22357143 L11.4084805,7.891 Z M14.7491671,7.32757143 C14.7491671,7.61114286 14.5694085,7.7595 14.2807244,7.7595 L13.3100561,7.7595 L13.3100561,6.92671429 L14.2898305,6.92671429 C14.5605805,6.92671429 14.7491671,7.04135714 14.7491671,7.32757143 Z M18.1018098,7.28 C18.1018098,7.41978571 18.0435585,7.53257143 17.9460329,7.59378571 C17.8456573,7.65578571 17.7213,7.66114286 17.5753939,7.66114286 L16.6624207,7.66114286 L16.6624207,6.92671429 L17.58735,6.92671429 C17.7213,6.92671429 17.85525,6.92964286 17.9460329,6.98578571 C18.0438366,7.03842857 18.1018098,7.13971429 18.1018098,7.28 Z"
  }), React__default.createElement("path", {
    fill: "#FFFFFF",
    d: "M28.2120805,7.96078571 L28.2120805,5.867 L27.6924073,5.867 L27.6924073,5.867 L26.3310805,5.867 C25.9115744,5.867 25.6064159,5.9715 25.3908585,6.13371429 L25.3908585,5.867 L23.3345488,5.867 C23.0057561,5.867 22.6195463,5.95142857 22.4374939,6.13371429 L22.4374939,5.867 L18.7648171,5.867 L18.7648171,6.13371429 C18.4727268,5.91457143 17.9793293,5.867 17.7520244,5.867 L15.3297329,5.867 L15.3297329,6.13371429 C15.0985354,5.90092857 14.5845622,5.867 14.2711317,5.867 L11.5603646,5.867 L10.9400378,6.56535714 L10.3589854,5.867 L6.30955244,5.867 L6.30955244,10.4303571 L10.282522,10.4303571 L10.9218256,9.721 L11.5236622,10.4303571 L13.9729939,10.433 L13.9729939,9.35914286 L14.2135756,9.35914286 C14.5384061,9.3645 14.9215573,9.35085714 15.2596646,9.19878571 L15.2596646,10.4300714 L17.279828,10.4300714 L17.279828,9.24042857 L17.3776317,9.24042857 C17.501989,9.24042857 17.5139451,9.24607143 17.5139451,9.37514286 L17.5139451,10.4300714 L23.6502037,10.4300714 C24.0400976,10.4300714 24.447439,10.3260714 24.6731451,10.1382143 L24.6731451,10.4300714 L26.6192085,10.4300714 C27.0244646,10.4300714 27.4200585,10.371 27.7209768,10.2197143 L27.7209768,10.2149286 C28.160572,9.92357143 28.4528733,9.41314286 28.4528733,8.8305 C28.4534268,8.51078571 28.3645207,8.21278571 28.2120805,7.96078571 Z M14.24715,8.69092857 L13.309778,8.69092857 L13.309778,9.78807143 L11.8498134,9.78807143 L10.9246756,8.70507143 L9.9636,9.78807143 L6.98785244,9.78807143 L6.98785244,6.51721429 L10.0094085,6.51721429 L10.9335037,7.58921429 L11.8890878,6.51721429 L14.2895524,6.51721429 C14.885411,6.51721429 15.555161,6.68907143 15.555161,7.59457143 C15.555161,8.50357143 14.9036232,8.69092857 14.24715,8.69092857 Z M18.7679451,8.54257143 C18.8740902,8.70214286 18.8893829,8.851 18.892511,9.13964286 L18.892511,9.78807143 L18.1387207,9.78807143 L18.1387207,9.37885714 C18.1387207,9.18214286 18.1566549,8.89085714 18.0170049,8.7385 C17.9069671,8.62142857 17.7402768,8.59307143 17.4658427,8.59307143 L16.6629073,8.59307143 L16.6629073,9.788 L15.9083524,9.788 L15.9083524,6.51714286 L17.6426817,6.51714286 C18.0229134,6.51714286 18.299711,6.5345 18.5465488,6.67164286 C18.7837939,6.8205 18.932828,7.02442857 18.932828,7.39778571 C18.932828,7.91978571 18.5980573,8.1865 18.4004341,8.268 C18.5668463,8.33228571 18.7039244,8.44721429 18.7679451,8.54257143 Z M21.8560939,7.194 L20.0968098,7.194 L20.0968098,7.78864286 L21.8132049,7.78864286 L21.8132049,8.456 L20.0968098,8.456 L20.0968098,9.10678571 L21.8560939,9.11 L21.8560939,9.78857143 L19.3489976,9.78857143 L19.3489976,6.51721429 L21.8560939,6.51721429 L21.8560939,7.194 L21.8560939,7.194 Z M23.7690695,9.78835714 L22.3060463,9.78835714 L22.3060463,9.08678571 L23.7636476,9.08678571 C23.9061476,9.08678571 24.0070793,9.06757143 24.0705439,9.00557143 C24.1217744,8.95535714 24.1592415,8.88157143 24.1592415,8.79285714 C24.1592415,8.69742857 24.1192024,8.62157143 24.0674159,8.57607143 C24.0096512,8.52585714 23.9308939,8.50364286 23.8000024,8.50364286 C23.0974427,8.47907143 22.2175573,8.52607143 22.2175573,7.49092857 C22.2175573,7.0165 22.5041561,6.51728571 23.2915207,6.51728571 L24.7977805,6.51728571 L24.7977805,7.2135 L23.4197707,7.2135 C23.2832488,7.2135 23.1942732,7.21885714 23.1185744,7.27228571 C23.0366195,7.3255 23.0056866,7.40378571 23.0056866,7.508 C23.0056866,7.63121429 23.0758939,7.71514286 23.1700829,7.75178571 C23.2496744,7.78014286 23.3344793,7.78842857 23.4624512,7.78842857 L23.8671512,7.80042857 C24.2747012,7.81028571 24.5548354,7.88407143 24.7249317,8.06314286 C24.8713939,8.22028571 24.9493866,8.41914286 24.9493866,8.75564286 C24.949178,9.45957143 24.5270305,9.78835714 23.7690695,9.78835714 Z M27.6354768,9.47242857 C27.4375756,9.68064286 27.1183756,9.78835714 26.7019976,9.78835714 L25.251139,9.78835714 L25.251139,9.08678571 L26.69595,9.08678571 C26.8394927,9.08678571 26.9399378,9.06757143 27.0002744,9.00557143 C27.0525476,8.95535714 27.088972,8.88157143 27.088972,8.79285714 C27.088972,8.69742857 27.0525476,8.62157143 26.9971463,8.57607143 C26.9427878,8.52585714 26.8634744,8.50364286 26.7323744,8.50364286 C26.0269646,8.47907143 25.1470793,8.52607143 25.1470793,7.49092857 C25.1470793,7.0165 25.4363195,6.51728571 26.2249354,6.51728571 L27.6926854,6.51728571 L27.6926854,7.21328571 L26.3524207,7.21328571 C26.2161073,7.21328571 26.1251159,7.21892857 26.0483744,7.27235714 C25.969061,7.32528571 25.9386146,7.40385714 25.9386146,7.50757143 C25.9386146,7.63128571 26.0054854,7.71471429 26.103011,7.75135714 C26.1826024,7.78021429 26.2674073,7.7885 26.3922512,7.7885 L26.7993146,7.8 C27.2102707,7.81042857 27.4847049,7.88392857 27.6513951,8.06328571 C27.6818415,8.08814286 27.7002622,8.11621429 27.7216024,8.144 C27.7130524,8.1325 27.704711,8.12157143 27.6958829,8.11007143 C27.8259402,8.28914286 27.904211,8.51178571 27.904211,8.75364286 C27.9041415,9.03092857 27.8014024,9.28242857 27.6354768,9.47242857 Z M9.61951463,7.194 L10.4414268,8.14707143 L9.58309024,9.10657143 L7.73587317,9.10657143 L7.73587317,8.45578571 L9.38518902,8.45578571 L9.38518902,7.78842857 L7.73587317,7.78842857 L7.73587317,7.194 L9.61951463,7.194 L9.61951463,7.194 Z M11.4084805,8.15828571 L12.5620354,6.86871429 L12.5620354,9.49085714 L11.4084805,8.15828571 Z M14.7491671,7.59485714 C14.7491671,7.87842857 14.5694085,8.02678571 14.2807244,8.02678571 L13.3100561,8.02678571 L13.3100561,7.194 L14.2898305,7.194 C14.5605805,7.194 14.7491671,7.30864286 14.7491671,7.59485714 Z M18.1018098,7.54728571 C18.1018098,7.68707143 18.0435585,7.79985714 17.9460329,7.86107143 C17.8456573,7.92307143 17.7213,7.92842857 17.5753939,7.92842857 L16.6624207,7.92842857 L16.6624207,7.194 L17.58735,7.194 C17.7213,7.194 17.85525,7.19692857 17.9460329,7.25307143 C18.0438366,7.30571429 18.1018098,7.407 18.1018098,7.54728571 Z"
  })))));
}, IconPaymentBankBillet = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "aph-icon-defs-rect-payment-bank-billet",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "aph-icon-group-payment-bank-billet",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "#FFFFFF"
  }, React__default.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#F8F8F8",
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  }), React__default.createElement("path", {
    fill: "#000000",
    mask: "url(#mask-2)",
    d: "M12.7692308,4 L14.3076923,4 L14.3076923,26.5 L12.7692308,26.5 L12.7692308,4 Z M17.2307692,4 L18.7692308,4 L18.7692308,26.5 L17.2307692,26.5 L17.2307692,4 Z M21.6923077,4 L25.5384615,4 L25.5384615,26.5 L21.6923077,26.5 L21.6923077,4 Z M4.46153846,4 L9.84615385,4 L9.84615385,26.5 L4.46153846,26.5 L4.46153846,4 Z M0,4 L1.53846154,4 L1.53846154,26.5 L0,26.5 L0,4 Z M28.4615385,4 L30,4 L30,26.5 L28.4615385,26.5 L28.4615385,4 Z"
  })));
}, IconPaymentDiners = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Diners",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#00529E",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Diners",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(5.250000, 7.500000)"
  }, React__default.createElement("path", {
    id: "Path",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    d: "M11.4131034,14.9672626 C15.6312672,14.9870659 19.4819569,11.631305 19.4819569,7.54826152 C19.4819569,3.08456586 15.6307069,-0.00162978907 11.4131034,5.68434189e-14 L7.78251724,5.68434189e-14 C3.51448276,-0.00162978907 -2.84217094e-14,3.08532673 -2.84217094e-14,7.54826152 C-2.84217094e-14,11.6320659 3.51448276,14.9870659 7.78251724,14.9672626 L11.4131034,14.9672626 L11.4131034,14.9672626 Z"
  }), React__default.createElement("path", {
    id: "Shape",
    fill: "#00529E",
    fillRule: "nonzero",
    d: "M9.44965517,11.5570652 L9.44965517,3.45076087 C11.129569,4.07543478 12.3220948,5.65358696 12.3250086,7.50369565 C12.3220948,9.35391304 11.1294569,10.9307609 9.44965517,11.5570652 M3.37092241,7.50369565 C3.37428448,5.65434783 4.56524138,4.0775 6.24425862,3.45076087 L6.24425862,11.5557609 C4.56524138,10.9294565 3.37428448,9.35304348 3.37092241,7.50369565 M7.8469569,0.652173913 C3.94673276,0.652934783 0.785267241,3.72 0.784482759,7.50369565 C0.785267241,11.2873913 3.94673276,14.3528261 7.8469569,14.3544565 C11.7488621,14.3528261 14.9111121,11.2873913 14.9111121,7.50369565 C14.9111121,3.72 11.7484138,0.653043478 7.8469569,0.652173913"
  })))));
}, IconPaymentDiscover = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Discover",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Discover",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(2.500000, 11.000000)"
  }, React__default.createElement("ellipse", {
    id: "Oval",
    fill: "#F26E21",
    fillRule: "evenodd",
    cx: "13.2893333",
    cy: "2.11932203",
    rx: "2.07866667",
    ry: "2.11389831"
  }), React__default.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "5.70733333 7.85986441 5.70733333 5.60237288 7.223 7.21498305 7.223 5.74589831 7.5368 5.74589831 7.5368 7.98840678 6.02113333 6.37959322 6.02113333 7.85952542 5.70733333 7.85952542"
  }), React__default.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "9.18193333 6.04583051 8.34853333 6.04583051 8.34853333 6.55369492 9.15773333 6.55369492 9.15773333 6.85376271 8.34853333 6.85376271 8.34853333 7.56 9.18193333 7.56 9.18193333 7.85986441 8.03493333 7.85986441 8.03493333 5.74623729 9.18193333 5.74623729 9.18193333 6.04583051"
  }), React__default.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "10.1672667 6.04583051 10.1672667 7.85966102 9.85346667 7.85966102 9.85346667 6.04583051 9.3758 6.04583051 9.3758 5.7459661 10.644 5.7459661 10.644 6.04583051"
  }), React__default.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "11.1500667 5.74623729 11.6914 7.15898305 12.2571333 5.64352542 12.7982 7.15898305 13.3729333 5.74623729 13.7136667 5.74623729 12.7847333 7.99410169 12.2501333 6.49640678 11.6928667 7.99566102 10.8095333 5.74630508"
  }), React__default.createElement("path", {
    d: "M13.7738,6.79362712 C13.7738,6.49579661 13.8813333,6.24033898 14.0956,6.02698305 C14.3091333,5.81335593 14.5660667,5.70657627 14.8659333,5.70657627 C15.162,5.70657627 15.416,5.81416949 15.6277333,6.02949153 C15.8405333,6.24515254 15.9465333,6.50359322 15.9465333,6.8060339 C15.9465333,7.10969492 15.8398,7.36766102 15.6264667,7.57952542 C15.4119333,7.79213559 15.153,7.89864407 14.8496667,7.89864407 C14.5815333,7.89864407 14.3402667,7.804 14.1267333,7.61525424 C13.8915333,7.4060339 13.7738,7.1320678 13.7738,6.79362712 Z M14.0903333,6.79694915 C14.0903333,7.03030508 14.1676667,7.22210169 14.3218,7.37281356 C14.4752,7.52352542 14.6526,7.59857627 14.8538667,7.59857627 C15.0716667,7.59857627 15.2557333,7.5219661 15.4056667,7.36901695 C15.5556,7.2140339 15.6304,7.02528814 15.6304,6.80277966 C15.6304,6.57728814 15.5563333,6.38854237 15.4081333,6.23654237 C15.2609333,6.08332203 15.0788667,6.00671186 14.8616,6.00671186 C14.6453333,6.00671186 14.4627333,6.08332203 14.3140667,6.23654237 C14.1649333,6.38725424 14.0903333,6.57444068 14.0903333,6.79694915 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), React__default.createElement("path", {
    d: "M17.0451333,6.95905085 L17.6887333,7.85986441 L17.3050667,7.85986441 L16.7114,6.99484746 L16.6548,6.99484746 L16.6548,7.85986441 L16.341,7.85986441 L16.341,5.74623729 L16.7084667,5.74623729 C16.9833333,5.74623729 17.1814,5.79877966 17.3036667,5.90379661 C17.4384,6.02047458 17.5057333,6.17471186 17.5057333,6.36650847 C17.5057333,6.51620339 17.4636,6.64481356 17.379,6.75233898 C17.2945333,6.85986441 17.1835333,6.92908475 17.0451333,6.95905085 Z M16.6549333,6.71674576 L16.7542,6.71674576 C17.0512667,6.71674576 17.2,6.60128814 17.2,6.37044068 C17.2,6.1540339 17.0555333,6.0459661 16.7664667,6.0459661 L16.6549333,6.0459661 L16.6549333,6.71674576 L16.6549333,6.71674576 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), React__default.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "18.3148 6.58942373 19.1238 5.74616949 19.5426 5.74616949 18.6029333 6.70332203 19.5481333 7.85986441 19.1280667 7.85986441 18.3794667 6.91945763 18.3148667 6.98542373 18.3148667 7.85986441 18.0010667 7.85986441 18.0010667 5.74623729 18.3148667 5.74623729 18.3148667 6.58942373"
  }), React__default.createElement("g", {
    id: "Group",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    d: "M2.0938,3.13152542 C1.84886667,3.35450847 1.5328,3.45118644 1.03086667,3.45118644 L0.8226,3.45118644 L0.8226,0.797220339 L1.03086667,0.797220339 C1.53273333,0.797220339 1.83633333,0.887525424 2.0938,1.12189831 C2.3622,1.36264407 2.52233333,1.73532203 2.52233333,2.12040678 C2.52233333,2.50569492 2.3622,2.89152542 2.0938,3.13152542 L2.0938,3.13152542 Z M1.18653333,0.117559322 L0.0460666667,0.117559322 L0.0460666667,4.13023729 L1.1808,4.13023729 C1.783,4.13023729 2.21826667,3.98664407 2.6002,3.66705085 C3.0532,3.2880678 3.32213333,2.71654237 3.32213333,2.12569492 C3.32206667,0.941016949 2.44453333,0.117559322 1.18653333,0.117559322 L1.18653333,0.117559322 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }), React__default.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "3.68 4.13023729 4.45533333 4.13023729 4.45533333 0.117559322 3.68 0.117559322 3.68 4.13023729"
  }), React__default.createElement("path", {
    d: "M6.3534,1.65688136 C5.8874,1.48257627 5.7502,1.3679322 5.7502,1.15233898 C5.7502,0.899389831 5.9944,0.706847458 6.32893333,0.706847458 C6.56166667,0.706847458 6.75226667,0.802983051 6.95606667,1.03105085 L7.36093333,0.496271186 C7.0272,0.201016949 6.62753333,0.050779661 6.19153333,0.050779661 C5.48806667,0.050779661 4.95073333,0.54420339 4.95073333,1.19918644 C4.95073333,1.75349153 5.20093333,2.0360678 5.92933333,2.30142373 C6.23366667,2.40922034 6.38833333,2.48101695 6.46613333,2.5299661 C6.62106667,2.63247458 6.69913333,2.77627119 6.69913333,2.94474576 C6.69913333,3.27023729 6.44246667,3.51044068 6.09593333,3.51044068 C5.726,3.51044068 5.42793333,3.32427119 5.2488,2.97518644 L4.7484,3.46298305 C5.1056,3.99166102 5.5352,4.22732203 6.12633333,4.22732203 C6.93153333,4.22732203 7.49806698,3.68494915 7.49806698,2.90922034 C7.4984,2.27105085 7.23646667,1.98210169 6.3534,1.65688136",
    id: "Path",
    fill: "#0B161F"
  }), React__default.createElement("path", {
    d: "M7.74286667,2.12569492 C7.74286667,3.30630508 8.66186667,4.22081356 9.84326667,4.22081356 C10.1775333,4.22081356 10.4634,4.15410169 10.8158667,3.98664407 L10.8158667,3.06508475 C10.5053333,3.37837288 10.2306667,3.50447458 9.87866667,3.50447458 C9.09713333,3.50447458 8.54213333,2.93267797 8.54213333,2.12013559 C8.54213333,1.35023729 9.11486667,0.742169492 9.84326667,0.742169492 C10.2124667,0.742169492 10.4933333,0.874305085 10.8158667,1.19349153 L10.8158667,0.272610169 C10.4761333,0.0985762712 10.195,0.026779661 9.86073333,0.026779661 C8.68573333,0.0270508475 7.74286667,0.95979661 7.74286667,2.12569492",
    id: "Path",
    fill: "#0B161F"
  }), React__default.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "17.1037333 2.81294915 16.0415333 0.117559322 15.1944 0.117559322 16.8834667 4.23301695 17.3005333 4.23301695 19.0192667 0.117559322 18.1778667 0.117559322 17.1037333 2.81294915"
  }), React__default.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "19.3717333 4.13023729 21.5728667 4.13023729 21.5728667 3.45118644 20.1472667 3.45118644 20.1472667 2.36698305 21.5182667 2.36698305 21.5182667 1.68786441 20.1472667 1.68786441 20.1472667 0.797152542 21.5728667 0.797152542 21.5728667 0.117559322 19.3717333 0.117559322 19.3717333 4.13023729"
  }), React__default.createElement("path", {
    d: "M23.0875333,1.96461017 L22.8615333,1.96461017 L22.8615333,0.748474576 L23.0997333,0.748474576 C23.5839333,0.748474576 23.8466,0.953966102 23.8466,1.34433898 C23.8466,1.74718644 23.5839333,1.96461017 23.0875333,1.96461017 L23.0875333,1.96461017 Z M24.6446,1.30176271 C24.6446,0.550101695 24.132,0.117559322 23.2364667,0.117559322 L22.0852667,0.117559322 L22.0852667,4.13023729 L22.8613333,4.13023729 L22.8613333,2.51762712 L22.9631333,2.51762712 L24.0362667,4.13023729 L24.9909333,4.13023729 L23.7374667,2.43972881 C24.3230667,2.31952542 24.6446,1.9159322 24.6446,1.30176271 L24.6446,1.30176271 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }))))));
}, IconPaymentElo = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Elo",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#000000",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Elo",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(6.750000, 7.000000)"
  }, React__default.createElement("path", {
    d: "M6.77271739,3.64757702 C7.26080435,3.48604504 7.78258696,3.39912924 8.32571739,3.39912924 C10.6947174,3.39912924 12.6724783,5.06631854 13.1255,7.28253133 L16.483587,6.60387728 C15.7129783,2.8377846 12.353913,0.00348955614 8.32571739,0.00348955614 C7.40271739,0.00348955614 6.51604348,0.152484987 5.68632609,0.427082898 L6.77271739,3.64757702",
    id: "Fill-1",
    fill: "#F9C623"
  }), React__default.createElement("path", {
    d: "M2.80971739,14.4310809 L5.08056522,11.8870868 C4.06682609,10.9971854 3.42736957,9.69853198 3.42736957,8.25174478 C3.42736957,6.80601305 4.06606522,5.50800587 5.07917391,4.61911684 L2.80778261,2.07495039 C1.08636957,3.58616514 0,5.79365405 0,8.25174478 C0,10.7115157 1.08680435,12.9196723 2.80971739,14.4310809",
    id: "Fill-3",
    fill: "#009ACB"
  }), React__default.createElement("path", {
    d: "M13.1245217,9.22563251 C12.6696739,11.4405529 10.6938696,13.1045757 8.32571739,13.1045757 C7.78215217,13.1045757 7.259,13.0178753 6.77121739,12.8552879 L5.68343478,16.0770313 C6.51315217,16.3514354 7.40163043,16.5 8.32571739,16.5 C12.3500652,16.5 15.7084783,13.6704008 16.4821957,9.90771149 L13.1245217,9.22563251",
    id: "Fill-4",
    fill: "#DC3E2A"
  })))));
}, IconPaymentFreepass = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Cortesia",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#F882B8",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "gift-box",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, React__default.createElement("g", {
    transform: "translate(8.000000, 8.000000)",
    id: "Shape"
  }, React__default.createElement("path", {
    d: "M12.4166667,0.5 L9.70833333,0.5 C9.00228881,0.5 8.40177409,0.953063948 8.17815144,1.58333333 L5.82184856,1.58333333 C5.59822591,0.953063948 4.99771119,0.5 4.29166667,0.5 L1.58333333,0.5 L1.58333333,3.75 L0.5,3.75 L0.5,7.27083333 L1.58333333,7.27083333 L1.58333333,13.5 L12.4166667,13.5 L12.4166667,7.27083333 L13.5,7.27083333 L13.5,3.75 L12.4166667,3.75 L12.4166667,0.5 Z M4.83333333,12.4166667 L2.66666667,12.4166667 L2.66666667,7.27083333 L4.83333333,7.27083333 L4.83333333,12.4166667 Z M4.83333333,6.1875 L1.58333333,6.1875 L1.58333333,4.83333333 L4.83333333,4.83333333 L4.83333333,6.1875 Z M4.83333333,2.66666667 L4.83333333,3.75 L2.66666667,3.75 L2.66666667,1.58333333 L4.29166667,1.58333333 C4.59040325,1.58333333 4.83333333,1.82626342 4.83333333,2.125 L4.83333333,2.66666667 Z M8.08333333,7.27083333 L8.08333333,12.4166667 L5.91666667,12.4166667 L5.91666667,4.83333333 L8.08333333,4.83333333 L8.08333333,7.27083333 Z M8.08333333,3.75 L5.91666667,3.75 L5.91666667,2.66666667 L8.08333333,2.66666667 L8.08333333,3.75 Z M9.16666667,2.66666667 L9.16666667,2.125 C9.16666667,1.82626342 9.40959675,1.58333333 9.70833333,1.58333333 L11.3333333,1.58333333 L11.3333333,3.75 L9.16666667,3.75 L9.16666667,2.66666667 Z M11.3333333,12.4166667 L9.16666667,12.4166667 L9.16666667,7.27083333 L11.3333333,7.27083333 L11.3333333,12.4166667 Z M12.4166667,6.1875 L9.16666667,6.1875 L9.16666667,4.83333333 L12.4166667,4.83333333 L12.4166667,6.1875 Z"
  })))));
}, IconPaymentMastercard = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Master",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#2D2D2D",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Master",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(3.500000, 8.500000)"
  }, React__default.createElement("ellipse", {
    id: "Oval",
    fill: "#EE0005",
    cx: "6.93714953",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), React__default.createElement("ellipse", {
    id: "Oval",
    fill: "#F9A000",
    cx: "15.5560164",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), React__default.createElement("path", {
    d: "M8.61897196,6.74785227 C8.61897196,8.89046591 9.64577103,10.799642 11.2466355,12.0357102 C12.8474474,10.7995909 13.8742991,8.89046591 13.8742991,6.74785227 C13.8742991,4.60523864 12.8475,2.6960625 11.2466355,1.45999432 C9.6458236,2.69616477 8.61897196,4.60528977 8.61897196,6.74785227 Z",
    id: "Path",
    fill: "#FF6300"
  })))));
}, IconPaymentMoney = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Dinheiro",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#59B47D",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Dinheiro",
    mask: "url(#mask-2)",
    fill: "#FFFFFF"
  }, React__default.createElement("g", {
    transform: "translate(7.500000, 7.500000)"
  }, React__default.createElement("path", {
    d: "M7.5,0 C3.36441039,0 0,3.36441039 0,7.5 C0,11.6352844 3.36441039,15 7.5,15 C11.6352844,15 15,11.6352844 15,7.5 C15,3.36441039 11.6352844,0 7.5,0 Z M7.5,13.75 C4.0538025,13.75 1.25,10.9461975 1.25,7.5 C1.25,4.0538025 4.0538025,1.25 7.5,1.25 C10.9461975,1.25 13.75,4.0538025 13.75,7.5 C13.75,10.9461975 10.9461975,13.75 7.5,13.75 Z",
    id: "Shape",
    fillRule: "nonzero"
  }), React__default.createElement("polygon", {
    id: "Path",
    fillRule: "evenodd",
    points: "8.125 2.8125 6.875 2.8125 6.875 4.375 5 4.375 5 8.125 8.75 8.125 8.75 9.375 5 9.375 5 10.625 6.875 10.625 6.875 12.1875 8.125 12.1875 8.125 10.625 10 10.625 10 6.875 6.25 6.875 6.25 5.625 10 5.625 10 4.375 8.125 4.375"
  })))));
}, IconPaymentOthers = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Outros",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#6798E5",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Outros",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, React__default.createElement("g", {
    transform: "translate(8.500000, 8.500000)",
    id: "Shape"
  }, React__default.createElement("path", {
    d: "M7.0414022,0 L5.95806886,0 C2.62687174,0.277241768 0,3.08227604 0,6.49257507 C0,9.90287409 2.62687174,12.7077758 5.95806886,12.9850176 L7.0414022,12.9850176 C10.3728638,12.708041 13,9.90313929 13,6.49257507 C13,3.08201084 10.3728638,0.276976574 7.0414022,0 Z M7.0414022,3.27943458 C8.57647707,3.53877691 9.74973553,4.8807013 9.74973553,6.49257507 C9.74973553,8.10444883 8.57647707,9.44637322 7.0414022,9.70571555 L7.0414022,8.59316866 C7.9743754,8.35093016 8.6664022,7.50236619 8.6664022,6.49230991 C8.6664022,5.48212101 7.9743754,4.63355704 7.0414022,4.39131854 L7.0414022,3.27943458 Z M6.49973553,7.57873695 L5.95806886,7.57873695 L5.95806886,11.8959387 C3.22487384,11.6221443 1.08333333,9.30357579 1.08333333,6.49257507 C1.08333333,3.68157434 3.22487384,1.3628733 5.95806886,1.08921142 L5.95806886,5.40641319 L6.49973553,5.40641319 C7.09720866,5.40641319 7.58306886,5.89354192 7.58306886,6.49257507 C7.58306886,7.09160821 7.09720866,7.57873695 6.49973553,7.57873695 Z M7.0414022,11.8959387 L7.0414022,10.799435 C9.17553711,10.530944 10.8330689,8.70401233 10.8330689,6.49257507 C10.8330689,4.2811378 9.17553711,2.45420612 7.0414022,2.18558257 L7.0414022,1.08921142 C9.77486165,1.3626081 11.9166667,3.68130915 11.9166667,6.49257507 C11.9166667,9.30384098 9.77486165,11.6224094 7.0414022,11.8959387 Z"
  })))));
}, IconPaymentPaypal = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-PayPal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#FFC61E",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Logo-PayPal",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(9.000000, 7.000000)",
    id: "Path"
  }, React__default.createElement("path", {
    d: "M3.65643871,15.3022635 L3.91962581,13.5586222 L3.33336774,13.5444505 L0.533922581,13.5444505 L2.47939355,0.678141061 C2.49136448,0.596887959 2.55859173,0.537040578 2.63740645,0.53747169 L7.35766452,0.53747169 C8.92470968,0.53747169 10.0061419,0.877594314 10.5707613,1.54891197 C10.8354581,1.86383816 11.0040387,2.19293603 11.0855613,2.55510115 C11.1711097,2.93511208 11.1726194,3.38913067 11.0890839,3.94287589 L11.0830452,3.98329142 L11.0830452,4.33810826 L11.3477419,4.4945216 C11.5498158,4.6013026 11.7314519,4.74574783 11.8836774,4.92072171 C12.110129,5.1899836 12.2565677,5.53220339 12.3184645,5.9379333 C12.3823742,6.3552105 12.3612387,6.85174412 12.2565677,7.41388737 C12.1357935,8.06053581 11.9405419,8.62372881 11.6768516,9.0845708 C11.4441941,9.4974109 11.1313769,9.85497375 10.7584645,10.1343248 C10.4082194,10.393614 9.99205161,10.5904429 9.52153548,10.7164133 C9.0656129,10.8402843 8.54578065,10.9027447 7.97562581,10.9027447 L7.60827097,10.9027447 C7.3455871,10.9027447 7.09045161,11.0014215 6.89016774,11.1783051 C6.69016783,11.357076 6.55749247,11.6040835 6.51576774,11.8753417 L6.48809032,12.0322799 L6.02310968,15.1054347 L6.00197419,15.2182832 C5.99643871,15.2539748 5.98687742,15.2718207 5.9727871,15.2838928 C5.95913757,15.2955358 5.94210854,15.3020114 5.92447742,15.3022635 L3.65643871,15.3022635 Z",
    fill: "#253B80"
  }), React__default.createElement("path", {
    d: "M11.5983484,4.02423182 C11.5842581,4.1181848 11.5681548,4.21423729 11.5500387,4.31291416 C10.9275484,7.64640787 8.79789677,8.79798797 6.07796129,8.79798797 L4.69308387,8.79798797 C4.36045161,8.79798797 4.08015484,9.04992892 4.02832258,9.39214872 L3.31927742,14.0824494 L3.11849032,15.4119628 C3.10230332,15.5186896 3.13171569,15.6274589 3.19898398,15.7096348 C3.26625226,15.7918108 3.36463555,15.8392127 3.46823226,15.8392127 L5.92447742,15.8392127 C6.21534194,15.8392127 6.46242581,15.6187644 6.50821935,15.3195845 L6.53237419,15.189415 L6.99483871,12.1283324 L7.02452903,11.9603718 C7.06981935,11.6601422 7.31740645,11.4396938 7.60827097,11.4396938 L7.97562581,11.4396938 C10.3553806,11.4396938 12.2183226,10.43193 12.7628129,7.5157135 C12.990271,6.29747403 12.8725161,5.28026244 12.2706581,4.56485511 C12.0799004,4.34354759 11.8520761,4.16034761 11.5983484,4.02423182 L11.5983484,4.02423182 Z",
    fill: "#179BD7"
  }), React__default.createElement("path", {
    d: "M10.9471742,3.7533953 C10.7484133,3.69342348 10.5462166,3.6466161 10.3417935,3.61325314 C9.93786423,3.5485053 9.52962978,3.5174392 9.12096774,3.52034992 L5.42125161,3.52034992 C5.13032561,3.52016288 4.8826943,3.74118491 4.8380129,4.04102788 L4.05096774,9.24045927 L4.02832258,9.39214872 C4.07898592,9.05013605 4.36128845,8.79781528 4.69308387,8.79798797 L6.07796129,8.79798797 C8.79789677,8.79798797 10.9275484,7.645883 11.5500387,4.31291416 C11.5686581,4.21423729 11.5842581,4.1181848 11.5983484,4.02423182 C11.4340881,3.93438788 11.2628949,3.85906666 11.0865677,3.7990596 C11.0403405,3.78306126 10.99387,3.76783787 10.9471742,3.7533953 L10.9471742,3.7533953 Z",
    fill: "#222D65"
  }), React__default.createElement("path", {
    d: "M4.8380129,4.04102788 C4.88232115,3.74104677 5.13025311,3.51993221 5.42125161,3.52087479 L9.12096774,3.52087479 C9.55927742,3.52087479 9.9684,3.55079278 10.3417935,3.61377802 C10.594467,3.65519724 10.8436512,3.71714631 11.087071,3.7990596 C11.2707484,3.86256971 11.4413419,3.93762712 11.5988516,4.02423182 C11.7840387,2.79234554 11.5973419,1.95359213 10.9587484,1.19409513 C10.2547355,0.357966102 8.98409032,-1.33226763e-14 7.35816774,-1.33226763e-14 L2.63790968,-1.33226763e-14 C2.30578065,-1.33226763e-14 2.02246452,0.251940951 1.97113548,0.594685621 L0.00503225806,13.5932641 C-0.0135007605,13.7153962 0.020123745,13.8398721 0.0970608222,13.9339481 C0.173997899,14.0280242 0.286545093,14.0822822 0.405096774,14.0824494 L3.31927742,14.0824494 L4.05096774,9.24045927 L4.8380129,4.04102788 Z",
    fill: "#253B80"
  })))));
}, IconPaymentVisa = function(props) {
  var size = props.size, width = props.width, height = props.height, className = props.className;
  return React__default.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, React__default.createElement("defs", null, React__default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), React__default.createElement("g", {
    id: "Pagamento-/-Visa",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, React__default.createElement("use", {
    xlinkHref: "#path-1"
  })), React__default.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), React__default.createElement("g", {
    id: "Visa",
    mask: "url(#mask-2)"
  }, React__default.createElement("g", {
    transform: "translate(3.000000, 11.500000)"
  }, React__default.createElement("polygon", {
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd",
    points: "8.07027008 7.32904018 9.20044321 0.15890625 11.0301731 0.15890625 9.90006233 7.32904018"
  }), React__default.createElement("path", {
    d: "M16.4139058,0.344263393 C16.0512881,0.198950893 15.4831787,0.0433258929 14.7737119,0.0433258929 C12.9653601,0.0433258929 11.6915859,1.01604911 11.6806163,2.40964286 C11.6705817,3.4396875 12.589903,4.01424107 13.2844114,4.3575 C13.9966205,4.70825893 14.2361427,4.93332589 14.2326524,5.24678571 C14.2282271,5.72738839 13.663608,5.94709821 13.1375069,5.94709821 C12.4052285,5.94683036 12.0159972,5.83834821 11.4149792,5.57075893 L11.1791967,5.45651786 L10.922223,7.06165179 C11.349723,7.261875 12.140277,7.43551339 12.9609349,7.44428571 C14.8842175,7.44381696 16.1333102,6.48314732 16.1473338,4.99453125 C16.1543144,4.17897321 15.666669,3.55828125 14.6109141,3.04640625 C13.9711911,2.71513393 13.5794044,2.49388393 13.5836427,2.15765625 C13.5836427,1.85973214 13.9154709,1.54104911 14.631669,1.54104911 C15.2300693,1.53100446 15.663615,1.67035714 16.0015512,1.81566964 L16.1652839,1.89837054 L16.4139058,0.344263393 L16.4139058,0.344263393 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), React__default.createElement("path", {
    d: "M19.5335526,0.15890625 C19.0951454,0.15890625 18.7784003,0.302745536 18.5857479,0.769553571 L15.8739681,7.32930804 L17.8112742,7.32930804 L18.1879155,6.23055804 L20.5025485,6.23055804 L20.7175762,7.32930804 L22.4398546,7.32930804 L20.9331025,0.159107143 L19.533615,0.159107143 L19.5335526,0.15890625 L19.5335526,0.15890625 Z M18.7019252,4.79584821 C18.8530679,4.38294643 19.4307133,2.79180804 19.4307133,2.79180804 C19.4202424,2.810625 19.581108,2.37689732 19.6734765,2.10776786 L19.7973199,2.72564732 C19.7973199,2.72564732 20.1473476,4.43725446 20.220831,4.79604911 L18.7019252,4.79604911 L18.7019252,4.79584821 Z",
    id: "Shape",
    fill: "#293688",
    fillRule: "nonzero"
  }), React__default.createElement("path", {
    d: "M4.73347645,5.07395089 L4.57229917,4.09098214 C4.2383518,2.94515625 3.20191828,1.70537946 2.04051939,1.08421875 L3.65715374,7.32904018 L5.59489612,7.32904018 L8.50094875,0.15890625 L6.56364266,0.15890625 L4.73347645,5.07395089 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), React__default.createElement("path", {
    d: "M0.0512950139,0.15890625 L0.0512950139,0.2746875 C2.34729224,0.867991071 3.94130194,2.36792411 4.5723615,4.09104911 L3.90889197,0.770825893 C3.79813712,0.317075893 3.46250693,0.174709821 3.06536011,0.158973214 L0.0512950139,0.15890625 L0.0512950139,0.15890625 Z",
    id: "Path",
    fill: "#F7981D",
    fillRule: "evenodd"
  })))));
}, ICONS$1 = {
  adjusts: IconAdjusts,
  "arrow-up": IconArrowUp,
  "arrow-right": IconArrowRight,
  "arrow-down": IconArrowDown,
  "arrow-left": IconArrowLeft,
  bluetooth: IconBluetooth,
  camera: IconCamera,
  card: IconCard,
  cards: IconCards,
  "chart-line": IconCharLine,
  check: IconCheckThin,
  "check-thin": IconCheckThin,
  "external-ticket": IconExternalTicket,
  eye: IconEye,
  filter: IconFilter,
  flash: IconFlash,
  "flash-off": IconFlashOff,
  help: IconHelp,
  info: IconInfo,
  items: IconItems,
  list: IconList,
  loader: IconLoaderDonut,
  loading: IconLoading,
  lock: IconLock,
  logout: IconLogout,
  minus: IconMinus,
  options: IconOptions,
  pencil: IconPencil,
  plus: IconPlus,
  qrcode: IconQRCode,
  scan: IconScan,
  search: IconSearch,
  settings: IconSettings,
  signal: IconSignal,
  ticketbooth: IconTicketbooth,
  times: IconTimes,
  transfer: IconTransfer,
  unlock: IconUnlock,
  refresh: IconRefresh,
  delete: IconDelete,
  user: IconUser,
  amex: IconPaymentAmex,
  "payment-amex": IconPaymentAmex,
  bankbillet: IconPaymentBankBillet,
  "bank-billet": IconPaymentBankBillet,
  "payment-bankbillet": IconPaymentBankBillet,
  "payment-bank-billet": IconPaymentBankBillet,
  boleto: IconPaymentBankBillet,
  "payment-boleto": IconPaymentBankBillet,
  diners: IconPaymentDiners,
  "payment-diners": IconPaymentDiners,
  discover: IconPaymentDiscover,
  "payment-discover": IconPaymentDiscover,
  elo: IconPaymentElo,
  "payment-elo": IconPaymentElo,
  freepass: IconPaymentFreepass,
  "payment-freepass": IconPaymentFreepass,
  master: IconPaymentMastercard,
  mastercard: IconPaymentMastercard,
  "payment-master": IconPaymentMastercard,
  "payment-mastercard": IconPaymentMastercard,
  money: IconPaymentMoney,
  cash: IconPaymentMoney,
  "payment-money": IconPaymentMoney,
  "payment-cash": IconPaymentMoney,
  others: IconPaymentOthers,
  "payment-others": IconPaymentOthers,
  paypal: IconPaymentPaypal,
  "payment-paypal": IconPaymentPaypal,
  visa: IconPaymentVisa,
  "payment-visa": IconPaymentVisa
}, IconWrapper = _styled("svg", {
  target: "e34a6r20"
})("display:inline-block;line-height:0;vertical-align:middle;", function(props) {
  return props.aphStyles;
}, ";"), Icon = React.forwardRef(function(props, ref) {
  var direction = props.direction, shape = props.shape, slug = props.slug, SelectedIcon = ICONS$1[slug + (direction ? "-" + direction : "") + (shape ? "-" + shape : "")];
  if (!SelectedIcon) return null;
  var color = props.color, className = props.className, styles = props.styles, rest = _objectWithoutProperties(props, [ "color", "className", "styles" ]);
  return React__default.createElement(IconWrapper, _extends({}, rest, {
    ref: ref,
    as: SelectedIcon,
    aphStyles: styles,
    color: colors$1.getFromTheme(props, color),
    className: "aph-icon aph-icon-wrapper ".concat(className || "")
  }));
});

function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

Icon.defaultProps = {
  slug: "",
  direction: "",
  shape: "",
  size: 20,
  color: "secondary",
  width: void 0,
  height: void 0,
  styles: {},
  toEncode: !1
}, Icon.propTypes = {
  slug: propTypes.string.isRequired,
  direction: propTypes.string,
  shape: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  toEncode: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var ImgStyled = _styled("img", {
  target: "essx23r0"
})(function(props) {
  var circle = props.circle, rounded = props.rounded, radius = props.radius, maxWidthXS = props.maxWidthXS, styles = props.styles, _extraStyles = {};
  return maxWidthXS && (_extraStyles[MEDIA_QUERIES.LT.SM] = Object.assign({
    maxWidth: maxWidthXS
  }, styles && styles[MEDIA_QUERIES.LT.SM] ? styles[MEDIA_QUERIES.LT.SM] : {})), _objectSpread$4({
    boxSizing: "border-box",
    display: "inline-block",
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "middle",
    borderRadius: circle ? "50%" : rounded ? RADIUS + "px" : radius || null
  }, styles, {}, _extraStyles);
}, ""), Img = React.forwardRef(function(props, ref) {
  var className = props.className;
  return React__default.createElement(ImgStyled, _extends({}, props, {
    ref: ref,
    className: "aph-img ".concat(className || "")
  }));
});

Img.defaultProps = {
  circle: !1,
  rounded: !1,
  radius: "",
  maxWidthXS: "",
  styles: {}
}, Img.propTypes = {
  circle: propTypes.bool,
  rounded: propTypes.bool,
  radius: propTypes.string,
  maxWidthXS: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphNumberFormatStyled = _styled("span", {
  target: "e1vp335j0"
})("box-sizing:border-box;", function(props) {
  return props.styles;
}, ";"), NumberFormat = React.forwardRef(function(props, ref) {
  var className = props.className, rest = _objectWithoutProperties(props, [ "className" ]);
  return React__default.createElement(AphNumberFormatStyled, _extends({}, rest, {
    className: "aph-number-format ".concat(className || ""),
    as: Formatter,
    ref: ref
  }));
});

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral([ "\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n" ]);
  return _templateObject$2 = function() {
    return data;
  }, data;
}

NumberFormat.defaultProps = {
  thousandSeparator: ".",
  decimalSeparator: ",",
  displayType: "text",
  value: 0,
  styles: {}
}, NumberFormat.propTypes = {
  thousandSeparator: propTypes.string,
  decimalSeparator: propTypes.string,
  displayType: propTypes.string,
  value: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var bgPlaceholder = core.keyframes(_templateObject$2()), Placeholder = React.forwardRef(function(props, ref) {
  var _ref = props || {}, className = _ref.className, styles = _ref.styles, rest = _objectWithoutProperties(_ref, [ "className", "styles" ]), isDarkMode = !(!props.theme || !props.theme.isDarkMode), colorTheme = colors$1.getFromTheme(props, "helper"), colorBase = chroma(colorTheme), colorStart = colorBase.alpha(isDarkMode ? .5 : .05).css(), colorEnd = colorBase.alpha(isDarkMode ? .75 : .15).css(), StyledPlaceholder = _styled("div", {
    target: "ejqn05n0"
  })(_objectSpread$5({
    fontSize: "0",
    lineHeight: "0",
    boxSizing: "border-box",
    overflow: "hidden",
    display: "".concat(props.block ? "block" : "inline-block"),
    width: "".concat(props.width ? props.width + "px" : "100%"),
    maxWidth: "".concat(props.width ? props.width + "px" : "100%"),
    minHeight: "".concat(props.height, "px"),
    border: props.border || null,
    borderRadius: "".concat(props.radius, "px"),
    color: colorBase.rgb(),
    background: "linear-gradient(90deg, ".concat(colorStart, ", ").concat(colorEnd, ")"),
    backgroundSize: "200% 100%",
    animation: "".concat(bgPlaceholder, " .9s ease infinite")
  }, styles), "");
  return React__default.createElement(StyledPlaceholder, _extends({}, rest, {
    ref: ref,
    className: "aph-placeholder ".concat(className || "")
  }), props.children);
});

function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$6(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral([ "\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n" ]);
  return _templateObject$3 = function() {
    return data;
  }, data;
}

Placeholder.defaultProps = {
  block: !1,
  height: 20,
  radius: 4,
  styles: {}
}, Placeholder.propTypes = {
  block: propTypes.bool,
  width: propTypes.number,
  height: propTypes.number,
  radius: propTypes.number,
  style: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var bgAnimated = core.keyframes(_templateObject$3()), defaultStyles = {
  boxSizing: "border-box",
  display: "block"
}, AphProgressBarWrapper = _styled("div", {
  target: "e1pp9vj70"
})(function(props) {
  return _objectSpread$6({}, defaultStyles, {
    height: props.height || "10px",
    overflow: "hidden",
    width: "100%",
    maxWidth: props.width || "100%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: !props.radius && 0 !== props.radius || "number" != typeof parseInt(props.radius, 10) ? "10px" : parseInt(props.radius, 10) + (props.radius.toString().includes("%") ? "%" : "px"),
    background: colors$1.getFromTheme(props, "disabled")
  }, props.styles);
}, ""), AphProgressBar = _styled("div", {
  target: "e1pp9vj71"
})(function(props) {
  return _objectSpread$6({}, defaultStyles, {
    height: props.height || "10px",
    width: props.size || (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + "%",
    background: props.color ? colors$1.getFromTheme(props, props.color) : props.animated ? "linear-gradient(270deg, ".concat(colors$1.getFromTheme(props, props.gradientStart || "secondary"), " 0%, ").concat(colors$1.getFromTheme(props, props.gradientEnd || "secondary"), " 100%)") : colors$1.getFromTheme(props, "secondary"),
    backgroundSize: "200% 100%",
    animation: "".concat(bgAnimated, " .9s ease infinite"),
    willChange: "width",
    transition: "width .15s ease-in"
  }, props.styles);
}, "");

function ProgressBar(props) {
  var animated = props.animated, size = props.size, percent = props.percent, percentual = props.percentual, gradient = props.gradient, styles = props.styles, width = props.width, height = props.height, radius = props.radius, color = props.color, wrapperStyles = props.wrapperStyles;
  return React__default.createElement(AphProgressBarWrapper, {
    width: width,
    height: height,
    radius: radius,
    styles: wrapperStyles
  }, React__default.createElement(AphProgressBar, {
    size: size,
    percentual: percent || percentual,
    color: color || "",
    animated: animated,
    gradientStart: gradient && gradient.start,
    gradientEnd: gradient && gradient.end,
    height: height,
    styles: styles
  }));
}

function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$7(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

ProgressBar.defaultProps = {
  animated: !1,
  percent: 0,
  percentual: 0,
  size: "",
  gradient: {
    start: colors$1.get("secondary"),
    end: colors$1.get("secondary", "light")
  },
  styles: {},
  width: "100%",
  height: 10,
  color: "",
  colorful: !1,
  wrapperStyles: {}
}, ProgressBar.propTypes = {
  animated: propTypes.bool,
  size: propTypes.string,
  percentual: propTypes.number,
  grandient: propTypes.object,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  width: propTypes.any,
  height: propTypes.number,
  color: propTypes.string,
  wrapperStyles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var StyledWrapper = _styled("div", {
  target: "e19gg4i70"
})(function(props) {
  return _objectSpread$7({}, props.styles, _defineProperty({
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginRight: "-10px",
    marginLeft: "-10px",
    "&:before,&:after": {
      content: '" "',
      position: "absolute",
      top: "0",
      bottom: "0",
      width: "15px",
      zIndex: 1
    },
    "&:before": {
      left: 0,
      background: "linear-gradient(to right, ".concat(colors$1.getFromTheme(props, "inverse"), " 50%, ").concat(colors$1.getFromTheme(props, "inverse").replace("rgb(", "rgba(").replace(")", ", 0)"), " 80%)")
    },
    "&:after": {
      right: 0,
      background: "linear-gradient(to right, ".concat(colors$1.getFromTheme(props, "inverse").replace("rgb(", "rgba(").replace(")", ", 0)"), " 0%, ").concat(colors$1.getFromTheme(props, "inverse"), " 50%)")
    },
    "&.scrollable--xs": {
      "&:before,&:after": {
        content: "initial"
      }
    }
  }, MEDIA_QUERIES.XS, {
    marginRight: "-20px",
    marginLeft: "-20px",
    "&.scrollable--xs:before,&.scrollable--xs:after": {
      content: '" "'
    }
  }));
}, ""), StyledScrollable = _styled("div", {
  target: "e19gg4i71"
})(_defineProperty({
  overflow: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  textAlign: "center",
  ".scrollable__item": {
    display: "inline-block",
    margin: "0 10px",
    verticalAlign: "middle"
  }
}, MEDIA_QUERIES.XS, {
  textAlign: "left",
  ".scrollable__item": {
    "&:first-of-type": {
      marginLeft: "20px"
    },
    "&:last-child": {
      marginRight: "20px"
    }
  }
}), ""), Scrollable = React.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, onlyXS = props.onlyXS, styles = props.styles;
  return React__default.createElement(StyledWrapper, {
    ref: ref,
    styles: styles,
    className: (className || "") + (onlyXS ? " scrollable--xs" : "")
  }, React__default.createElement(StyledScrollable, null, children));
}), text = function(props) {
  var size = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return "\n    ".concat(props.margin ? "\n        margin: ".concat(props.margin, ";\n    ") : "", ";\n    ").concat(props.padding ? "\n        padding: ".concat(props.padding, ";\n    ") : "", ";\n\n    ").concat(textDefinitions(props, size), ";\n    ").concat(textAlign(props), ";\n    ").concat(textTransform(props), ";\n    ").concat(textBreakAll(props), ";\n    ").concat(textColorfull(props), ";\n    ").concat(textTruncate(props), ";\n");
}, textAlign = function() {
  var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return props.textAlign || props.textLeft || props.textCenter || props.textRight ? "\n    text-align: ".concat(props.textLeft ? "left" : props.textCenter ? "center" : props.textRight ? "right" : props.textAlign, ";\n") : "";
}, textBreakAll = function() {
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).breakAll ? "\n    word-break: break-all;\n" : "";
}, textColorfull = function() {
  var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return props.textColor || props.link || props.helper ? "\n    color: ".concat(colors$1.getFromTheme(props, props.link ? "link" : props.helper ? "helper" : props.textColor), ";\n") : "";
}, textDefinitions = function() {
  var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, size = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return size ? "\n    font-weight: ".concat(SIZES[props.bold ? "XL" : "MD"].FONT_WEIGHT, ";\n    font-size  : ").concat(SIZES[size].FONT_SIZE, ";\n    line-height: ").concat(SIZES[size].LINE_HEIGHT, ";\n") : "";
}, textTransform = function() {
  var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return props.textLower || props.textUpper ? "\n    text-transform: ".concat(props.textLower ? "lowercase" : "uppercase", ";\n") : "";
}, textTruncate = function() {
  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).truncate ? "\n    overflow     : hidden;\n    white-space  : nowrap;\n    text-overflow: ellipsis;\n" : "";
}, SegmentStyled = _styled("div", {
  target: "e1pevrxj0"
})("box-sizing:border-box;display:block;margin:", function(props) {
  return props.aphmargin || null;
}, ";padding:", function(props) {
  return props.aphpadding || "20px 10px";
}, ";text-align:", function(props) {
  return props.textAlign || "initial";
}, ";", function(props) {
  return text(props);
}, ";border-radius:", function(props) {
  return props.aphradius ? "".concat(props.aphradius, "px") : null;
}, ";box-shadow:", function(props) {
  return props.aphshadow ? "0 0 3px ".concat(colors$1.getFromTheme(props, "oil", "dark", .25)) : props.borderTop || props.borderBottom ? "inset 0 ".concat(props.borderBottom ? "-" : "", "1px 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper"))) : null;
}, ";color:", function(props) {
  return props.aphcolor ? colors$1.getFromTheme(props, props.aphcolor) : null;
}, ";background-color:", function(props) {
  return props.aphbackground ? colors$1.getFromTheme(props, props.aphbackground) : null;
}, ";", function(props) {
  return props.aphhoverable ? "\n        outline: 0;\n        border : 0;\n\n        border-radius: ".concat(RADIUS.LG, "px;\n        box-shadow   : ").concat(function(props) {
    return props.aphshadow ? "0 0 3px ".concat(colors$1.getFromTheme(props, "oil", "dark", .25)) : null;
  }, ";\n        transition   : box-shadow 0.15s linear;\n\n        &:hover,\n        &:focus {\n            box-shadow: 0 0 10px ").concat(colors$1.getFromTheme(props, "oil", "dark", .25), ";\n        }\n    ") : null;
}, " ", function(props) {
  return props.aphstyles;
}, ";"), Segment = React.forwardRef(function(props, ref) {
  var className = props.className, margin = props.margin, padding = props.padding, color = props.color, background = props.background, hoverable = props.hoverable, radius = props.radius, shadow = props.shadow, styles = props.styles, rest = _objectWithoutProperties(props, [ "className", "margin", "padding", "color", "background", "hoverable", "radius", "shadow", "styles" ]);
  return React__default.createElement(SegmentStyled, _extends({}, rest, {
    ref: ref,
    aphmargin: margin,
    aphpadding: padding,
    aphhoverable: hoverable,
    aphcolor: color,
    aphbackground: background,
    aphradius: radius,
    aphshadow: shadow,
    aphstyles: styles,
    className: "aph-segment ".concat(className || "")
  }));
});

Segment.propTypes = {
  textAlign: propTypes.string,
  margin: propTypes.string,
  padding: propTypes.string,
  hoverable: propTypes.bool,
  color: propTypes.string,
  background: propTypes.string,
  radius: propTypes.number,
  shadow: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphTableStyled = _styled("table", {
  target: "e10yuwue0"
})("box-sizing:border-box;min-width:100%;border-collapse:collapse;border-style:hidden;", function(props) {
  return props.styles;
}, ";", function(props) {
  return props.rounded ? "\n        position     : relative;\n        overflow     : hidden;\n        border-radius: ".concat(RADIUS.SM, "px;\n    ") : null;
}, " ", function(props) {
  return props.striped ? "\n        tbody {\n            tr:nth-child(even) {\n                background-color: ".concat(COLORS.SMOKE, ";\n            }\n        }\n    ") : null;
}, " thead,tfoot{background-color:", COLORS.LIGHT_GREY, ";text-align:left;}th{font-weight:700;padding:", function(props) {
  return props.condensed ? "6px" : "11px";
}, " 10px ", function(props) {
  return props.condensed ? "4px" : "9px";
}, ";}td{padding:", function(props) {
  return props.condensed ? "5px" : props.bordered ? "10px" : "11px";
}, " 10px ", function(props) {
  return props.condensed ? props.bordered ? "4px" : "5px" : "9px";
}, ";", function(props) {
  return props.bordered ? "\n            border-top: 1px solid ".concat(COLORS.LIGHT_GREY, ";\n        ") : null;
}, "}tbody{", function(props) {
  return props.hoverable ? "\n            tr {\n                background-color: transparent;\n                transition: background-color 0.25s linear;\n\n                &:hover {\n                    background-color: ".concat(COLORS.SMOKE, ";\n                }\n            }\n        ") : null;
}, "}"), Table = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children;
  return React__default.createElement(AphTableStyled, _extends({}, props, {
    ref: ref,
    className: "aph-table ".concat(className || "")
  }), children);
});

function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$8(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

Table.defaultProps = {
  bordered: !1,
  condensed: !1,
  hoverable: !1,
  striped: !1
}, Table.propTypes = {
  bordered: propTypes.bool,
  condensed: propTypes.bool,
  hoverable: propTypes.bool,
  striped: propTypes.bool
};

var ToastsContainer = function() {
  var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    styles: {}
  }, styles = props.styles || {}, AphToastsContainer = _styled("div", {
    target: "ej5e3vp0"
  })(_objectSpread$8({}, styles, _defineProperty({
    zIndex: styles.zIndex || ZINDEX.TOAST,
    position: styles.position || "fixed",
    top: "string" == typeof styles.top ? styles.top : "20px",
    right: "string" == typeof styles.right ? styles.right : "20px",
    ".Toastify__toast-container": {
      position: "relative",
      top: "auto",
      right: "auto",
      width: "100%",
      minWidth: "380px",
      padding: 0
    },
    ".Toastify__toast": {
      margin: "0 0 10px",
      padding: "15px 40px 15px 20px",
      background: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 0 4px rgba(42, 42, 42, 0.25)",
      borderRadius: "4px",
      minHeight: "50px",
      maxWidth: "380px",
      width: "100%",
      fontFamily: "inherit",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      userSelect: "none",
      "&--default": {
        color: COLORS.BLACK
      },
      ".Toastify__close-button": {
        position: "absolute",
        top: "calc(50% - 15px)",
        right: "10px",
        width: "30px",
        height: "30px",
        padding: 0,
        margin: "0 !important",
        opacity: 1,
        color: "transparent",
        cursor: "pointer",
        outline: 0,
        border: 0,
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "none",
        textAlign: "center",
        willTransform: "background, box-shadow",
        transition: "background .25s linear, box-shadow .25s linear",
        "&:hover": {
          background: "rgba(42, 42, 42, 0.05)"
        },
        "&:active,&:focus": {
          boxShadow: "inset 1px 1px 4px rgba(42, 42, 42, 0.15)",
          background: "rgba(42, 42, 42, 0.15)"
        },
        "&:before": {
          position: "absolute",
          content: '"×"',
          width: "100%",
          display: "block",
          color: COLORS.BLACK,
          fontSize: "20px",
          lineHeight: "16px",
          textAlign: "center"
        }
      },
      ".Toastify__progress-bar": {
        height: "2px",
        background: COLORS.BLACK
      },
      "&.Toastify__toast--success": {
        color: COLORS.SUCCESS,
        ".Toastify__close-button--success:before": {
          color: COLORS.SUCCESS
        },
        ".Toastify__progress-bar--success": {
          background: COLORS.SUCCESS
        }
      },
      "&.Toastify__toast--info": {
        color: COLORS.INFO,
        ".Toastify__close-button--info:before": {
          color: COLORS.INFO
        },
        ".Toastify__progress-bar--info": {
          background: COLORS.INFO
        }
      },
      "&.Toastify__toast--warning": {
        color: COLORS.WARNING,
        ".Toastify__close-button--warning:before": {
          color: COLORS.WARNING
        },
        ".Toastify__progress-bar--warning": {
          background: COLORS.WARNING
        }
      },
      "&.Toastify__toast--error": {
        color: COLORS.ERROR,
        ".Toastify__close-button--error:before": {
          color: COLORS.ERROR
        },
        ".Toastify__progress-bar--error": {
          background: COLORS.ERROR
        }
      },
      "&.Toastify__toast--inverse": {
        color: COLORS.WHITE,
        background: "rgba(45, 45, 45, 0.95)",
        ".Toastify__close-button": {
          "&:hover": {
            background: "rgba(42, 42, 42, 0.5)"
          },
          "&:active,&:focus": {
            boxShadow: "inset 1px 1px 4px rgb(42, 42, 42)",
            background: "rgba(42, 42, 42, 0.5)"
          },
          "&:before": {
            color: COLORS.WHITE
          }
        },
        ".Toastify__progress-bar": {
          background: COLORS.WHITE
        }
      }
    }
  }, MEDIA_QUERIES.LT.SM, {
    width: "100%",
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    ".Toastify__toast-container": {
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      width: "100%",
      minWidth: "100%"
    },
    ".Toastify__toast": {
      margin: 0,
      padding: "20px 40px 20px 20px",
      boxShadow: "0 0 2px 0 rgba(42, 42, 42, 0.2)",
      borderRadius: 0,
      maxWidth: "100%"
    }
  })), "");
  return React__default.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, React__default.createElement(reactToastify.ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || !1
  })));
};

function ownKeys$9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$9(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

reactToastify.toast.inverse = function() {
  var content = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return reactToastify.toast(content, _objectSpread$9({}, props, {
    className: "Toastify__toast--inverse"
  }));
}, reactToastify.toast.black = reactToastify.toast.inverse;

var TooltipWrapper = _styled("span", {
  target: "e1rfaqp00"
})(function(props) {
  return _defineProperty({
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: 0,
    ".aph-tooltip": {
      opacity: 1,
      padding: "8px 12px",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "right" === props.place ? "left" : "left" === props.place ? "right" : "center",
      maxWidth: "230px",
      borderRadius: "4px",
      "&.type-error": {
        backgroundColor: COLORS.ERROR,
        "&:after": {
          borderTopColor: COLORS.ERROR
        },
        "&.place-right:after": {
          borderRightColor: COLORS.ERROR
        },
        "&.place-bottom:after": {
          borderBottomColor: COLORS.ERROR
        },
        "&.place-left:after": {
          borderLeftColor: COLORS.ERROR
        }
      },
      "&.type-warning": {
        color: COLORS.BLACK,
        backgroundColor: COLORS.WARNING,
        "&:after": {
          borderTopColor: COLORS.WARNING
        },
        "&.place-right:after": {
          borderRightColor: COLORS.WARNING
        },
        "&.place-bottom:after": {
          borderBottomColor: COLORS.WARNING
        },
        "&.place-left:after": {
          borderLeftColor: COLORS.WARNING
        }
      },
      "&.type-success": {
        backgroundColor: COLORS.SUCCESS,
        "&:after": {
          borderTopColor: COLORS.SUCCESS
        },
        "&.place-right:after": {
          borderRightColor: COLORS.SUCCESS
        },
        "&.place-bottom:after": {
          borderBottomColor: COLORS.SUCCESS
        },
        "&.place-left:after": {
          borderLeftColor: COLORS.SUCCESS
        }
      },
      "&.type-info": {
        backgroundColor: COLORS.INFO,
        "&:after": {
          borderTopColor: COLORS.INFO
        },
        "&.place-right:after": {
          borderRightColor: COLORS.INFO
        },
        "&.place-bottom:after": {
          borderBottomColor: COLORS.INFO
        },
        "&.place-left:after": {
          borderLeftColor: COLORS.INFO
        }
      },
      "&.place-right, &.place-bottom, &.place-left": {
        "&:after": {
          borderTopColor: "transparent"
        }
      },
      "&.type-light": {
        color: COLORS.DARK_GREY,
        backgroundColor: COLORS.WHITE,
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
        "&:after": {
          width: "12px",
          height: "12px",
          border: "0 !important",
          bottom: "-10px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAAA/UlEQVQoFa2S62qEMBCFT7IxCor4/o/Y/SMiuLk3Z7KWIrS03Q4kJJMz31xUlWp40fSL8RL+P5CUErj+aow197c7YoqYpgnLsvyKta4r9n2HHscRXM55bNv2Ywi1jGGscs6VnDJ88NXp0Pc95nn+FtYATWs7C1V7KiUXacn7BrLWfgkigDomo87cDBT/k2rIOSPGiOADHu4hgmtFJ2DoB3S2gzEGWmvIJ1ZKyYVOPlJEGId2Gs/0XQGMNafoM4g+3kOd03EcIomhAoYBpjMfFVAjWulFjm1ja+eMOHC2SZOyb7rNQCtJ0iJqwiuEDwJ6wnimMat6Bp8VyEPd3gFtaZ6FSCYKnwAAAABJRU5ErkJggg==")'
        },
        "&.place-right:after, &.place-left:after": {
          width: "8px",
          marginTop: "-5.5px"
        },
        "&.place-right:after": {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE3PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpEr0D8AAAENSURBVCgVhZLrjoQgDIXLRcDEGP/Mvv8zGs0ICG7bWcgw2RESI4F+Lee04sIFHyvnDOd5gj887PsOj58HKKVqlKy7vw3luPIFOSGYTv4+YxqIAK6CwSEGCCHCNE1NFUqgS5YK4LNCCOC9h3F0MM9zCal/rvQORMxOgLX2X4BIWTSQcAIOf4Ax5itQIRYc0S2s0AMI0sWpiMKtsyycLu6WLnqscyh8vIutd43l9bSzkUIIkFJi9w/Ytq0T/rqWQiKkJAyD4bFZ17ULciWtNOhBc2+osT2QIaqmtYbBDOCs44m4A9mIoquANA3Us29gnb13kERRK57Pgwd4WZZGZ2N5BVGjQWMMPpccTSk10C9l/KMdM5jKRwAAAABJRU5ErkJggg==")'
        },
        "&.place-bottom:after": {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABCUlEQVQoFa2S7a6DIAyGCzKZifH+r9IfRgcCwvrWsLElJ9tJ1oRQ6ctDP1SFjRrDp6x87ggppUhpXth5vZtpD+rldCTKR6acs4S11qQ7TaZjuT6h7T0+Og0AXIopUgyRvHfn65wBfJwhBg20rUkmFZBSEvG+72SvloZhEO1xHAzyZIuVb2MMIbtamnkH+N1T3/c0juPjMfjIALFqLUilmAp6EEIgZADANE1V+7IvyyI6a63o0CNpuLu5EuIJQPAvQKUBJOUCdOml4Wqe5xK4acNw/QhoQc6h7ItMzGzbJvV/yqACsEOLHq3rKhDFEyld17War31MDaZ4Oq9D/xrxFD5+tufR/72fQO4qbauIX3q2XAAAAABJRU5ErkJggg==")'
        },
        "&.place-left:after": {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABD0lEQVQoFY2T0a6EIAxEBwTBaPz/P/TVGBMFUS9Dlg0ad/f2BTFzaGkHccbAK/Z9xzAMaNsWjW2gtYasJIQQWZJWVe6qqkLXdXDOg99CCiihIOUVFGWmfMA0TRF0sNairmsodQVlFpZr3/cwxiRw8xtCCDiOA/kmjxAPIMgsq1uRwfM4E/gRKkGWGraAsIffUAaNNdg2j2OPJcZsj42g+B7LsiSAJX8t7w7m/b+geZ7h1vU9r59QmtnqojtiWXRHHPhXiID3Ps1MaQVVqWSpj1AGrLHQtU6uYBb68BHKNqIrMlD672JYdmccx2TYpnn2HTWXTHwa7FQdy6njxXmHMgMBxgXiDwqT+NWp+1ui5g/scn4798MbBAAAAABJRU5ErkJggg==")'
        }
      },
      "&__content": {
        display: "inline-block",
        verticalAlign: "middle",
        minHeight: props.style && props.style.height || null
      }
    }
  }, MEDIA_QUERIES.XS, {
    ".aph-tooltip": {
      fontSize: "14px",
      lineHeight: "20px"
    }
  });
}, ""), Tooltip = React.forwardRef(function(props, ref) {
  var customProps = Object.assign({}, props);
  return customProps.id = customProps.id || "AphTooltip".concat(Math.random()), delete customProps.children, 
  delete customProps.tip, React__default.createElement(TooltipWrapper, _extends({}, customProps, {
    ref: ref
  }), React__default.createElement("span", {
    "data-tip": props.tip,
    "data-for": customProps.id,
    className: "aph-tooltip__content"
  }, props.children), React__default.createElement(ReactTooltip, _extends({}, customProps, {
    delayHide: customProps.delayHide || (window.innerWidth > SCREEN_SIZES.SM ? 500 : 0),
    className: "aph-tooltip ".concat(props.className || "")
  })));
});

Tooltip.defaultProps = {
  border: !1,
  effect: "solid",
  place: "top",
  type: "light"
}, Tooltip.propTypes = {
  children: propTypes.any.isRequired,
  tip: propTypes.any.isRequired,
  delayHide: propTypes.number,
  effect: propTypes.string,
  place: propTypes.string,
  type: propTypes.string
};

var selector$1 = ".aph-modal", ModalStyled = _styled("dialog", {
  target: "e173h3s00"
})("box-sizing:border-box;overflow:hidden;position:fixed;display:none;opacity:0;z-index:", ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function(props) {
  return props.hasFooter ? SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function(props) {
  return props.opened ? "0" : "50%";
}, ");will-change:z-index,opacity,transform;transition:display ", function(props) {
  return props.opened ? .2 : .1;
}, "s linear,opacity ", function(props) {
  return props.opened ? .1 : .2;
}, "s linear,transform ", function(props) {
  return props.opened ? .2 : .1;
}, "s linear;color:", function(props) {
  return colors$1.getFromTheme(props, "black");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "white");
}, ";box-shadow:0 0 10px 0 ", function(props) {
  return colors$1.getFromTheme(props, "shadow");
}, ";border-radius:", SIZES.LG.RADIUS, " ", SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector$1, "{&__container{min-height:100%;max-height:100%;overflow:auto;&__title{padding:45px 0 15px;}&__header{padding-top:5px;padding-bottom:5px;}&__content{width:100%;}}&__footer{max-height:", SIZES.ACTION_BAR_HEIGHT, ";}}", function(props) {
  return props.styles;
}, ";", MEDIA_QUERIES.LT.SM, "{top:20px;right:10px;left:10px;", selector$1, "{&__container{&__title{padding:25px 0 15px;}&__header{padding-top:0;}}}}"), ModalOverlayStyled = _styled("div", {
  target: "e1bytuoh0"
})("position:fixed;z-index:", ZINDEX.MODAL - 1, ";top:0;right:0;bottom:0;left:0;", function(props) {
  return props.styles;
}, ";");

function ownKeys$a(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$a(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var _ref = {
  name: "1sy9iaq",
  styles: "body{overflow:hidden;}"
}, Modal = React.forwardRef(function(props, ref) {
  var _document = document, addEventListener = _document.addEventListener, removeEventListener = _document.removeEventListener, title = props.title, header = props.header, contentJustify = props.contentJustify, children = (props.alignItems, 
  props.children), footer = props.footer, footerProps = props.footerProps, overlayProps = props.overlayProps, className = props.className, styles = props.styles, opened = props.opened, openedCallback = props.openedCallback, closeOnEscape = props.closeOnEscape, closeByEscape = props.closeByEscape, unblockScrolling = props.unblockScrolling, rest = _objectWithoutProperties(props, [ "title", "header", "contentJustify", "alignItems", "children", "footer", "footerProps", "overlayProps", "className", "styles", "opened", "openedCallback", "closeOnEscape", "closeByEscape", "unblockScrolling" ]), _useState = React.useState(opened), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1], _useState3 = React.useState(opened), _useState4 = _slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1], _useState5 = React.useState(!1), _useState6 = _slicedToArray(_useState5, 2), unmounted = _useState6[0], _useState7 = (_useState6[1], 
  React.useState(null)), _useState8 = _slicedToArray(_useState7, 2), activeTimer = _useState8[0], setActiveTimer = _useState8[1], _useState9 = React.useState(null), _useState10 = _slicedToArray(_useState9, 2), visibleTimer = _useState10[0], setVisibleTimer = _useState10[1], modalRef = React.useRef(null);
  function handleCloseOnScape(evt) {
    var _ref2 = evt || {}, key = _ref2.key, keyCode = _ref2.keyCode;
    _ref2.target;
    ("Escape" === key || "Esc" === key || 27 === keyCode) && (evt && evt.stopPropagation && "function" == typeof evt.stopPropagation && evt.stopPropagation(), 
    handleClose());
  }
  function unlisten() {
    clearTimeout(activeTimer), clearTimeout(visibleTimer), removeEventListener("keydown", handleCloseOnScape);
  }
  function handleClose(evt) {
    clearTimeout(visibleTimer), unmounted || evt && evt.target && modalRef && modalRef.current && modalRef.current.contains(evt.target) || (unlisten(), 
    setActive(!1), setVisible(!0), setVisibleTimer(setTimeout(function() {
      unmounted || (setVisible(!1), openedCallback(!1), modalRef.current.focus());
    }, 100)));
  }
  function handleOpen(evt) {
    clearTimeout(activeTimer), unmounted || (evt && evt.preventDefault && evt.preventDefault(), 
    setActive(!1), setVisible(!0), setActiveTimer(setTimeout(function() {
      unmounted || (setActive(!0), (closeOnEscape || closeByEscape) && addEventListener("keydown", handleCloseOnScape));
    }, 50)));
  }
  return React.useEffect(function() {
    return opened ? ((opened || active) && handleOpen(), function() {
      unlisten();
    }) : (handleClose(), unlisten(), function() {
      unlisten();
    });
  }, [ opened ]), React.useEffect(function() {
    return function() {
      unlisten();
    };
  }, []), React__default.createElement(React__default.Fragment, null, active && visible ? React__default.createElement(ModalOverlayStyled, _extends({
    onClick: function(evt) {
      return (closeOnEscape || closeByEscape) && handleClose(evt);
    },
    className: "aph-modal-overlay ".concat(active ? " active" : "").concat(visible ? " visible" : "")
  }, overlayProps)) : null, React__default.createElement(ModalStyled, _extends({}, rest, {
    ref: modalRef,
    open: !0,
    opened: active && visible,
    role: "dialog",
    styles: styles,
    hasFooter: !(!footer && !Object.keys(footerProps).length),
    className: "aph-modal ".concat(className || "").concat(active ? " active" : "").concat(visible ? " visible" : "")
  }), active && visible ? React__default.createElement(React__default.Fragment, null, unblockScrolling ? null : React__default.createElement(core.Global, {
    styles: _ref
  }), React__default.createElement(Flex$1, {
    flex: !0,
    flexDirection: "column",
    className: "aph-modal__container"
  }, title ? React__default.createElement(H1, {
    bold: !0,
    center: !0,
    margin: "0",
    className: "aph-modal__container__title"
  }, title) : null, header ? React__default.createElement("header", {
    className: "aph-modal__container__header"
  }, header) : null, React__default.createElement(Flex$1, {
    flex: !0,
    alignItems: "center",
    justifyContent: contentJustify || "start",
    styles: {
      flex: 1,
      width: "100%"
    },
    flexDirection: "column",
    className: "aph-modal__container__content"
  }, React__default.createElement(Flex$1, {
    styles: {
      width: "100%"
    }
  }, children))), React__default.createElement(ActionBar, _extends({}, footerProps, {
    className: "aph-modal__content__footer ".concat(footerProps.className || ""),
    visible: footerProps.visible || !(void 0 !== footerProps.visible || !footer),
    styles: _objectSpread$a({}, footerProps.styles, {
      padding: "10px 0",
      minHeight: "initial"
    })
  }), footer)) : null));
});

Modal.defaultProps = {
  title: "",
  header: void 0,
  opened: !1,
  openedCallback: function() {},
  closeOnEscape: !1,
  unblockScrolling: !1,
  contentJustify: "flex-start",
  alignItems: "center",
  footerProps: {},
  styles: {},
  overlayProps: {}
}, Modal.propTypes = {
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

var SidePillStyled = _styled("aside", {
  target: "e1pc5nzq0"
})("box-sizing:border-box;display:flex;align-items:center;justify-content:", function(props) {
  return props.center ? "center" : props.right ? "flex-end" : "flex-start";
}, ";min-width:70px;min-height:60px;padding:", function(props) {
  return props.right ? "0 15px 0 25px" : "0 20px";
}, ";position:absolute;top:10px;left:", function(props) {
  return props.center ? "50%" : props.right ? null : "-15%";
}, ";right:", function(props) {
  return props.right && !props.center ? "-15%" : null;
}, ";flex-direction:", function(props) {
  return props.right ? "row-reverse" : null;
}, ";font-weight:500;font-size:20px;line-height:30px;color:", function(props) {
  return colors$1.getFromTheme(props, "base");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "background");
}, ";box-shadow:0 0 5px 0 ", function(props) {
  return colors$1.getFromTheme(props, "black", "original", .25);
}, ";border-radius:", function(props) {
  return props.center ? "30px" : props.right ? "30px 0 0 30px" : "0 30px 30px 0";
}, ";transition:all 0.15s linear 0s;img{margin-left:", function(props) {
  return props.right ? 0 : "20px";
}, ";margin-right:", function(props) {
  return props.right ? "20px" : 0;
}, ";}.aph-sidepill{&__content,&__hoverable{display:flex;align-items:center;padding:0;margin:0;}}&:hover{left:", function(props) {
  return props.right ? null : "0";
}, ";right:", function(props) {
  return props.right ? "0" : null;
}, ";}"), SidePill = React.memo(function(props) {
  var className = props.className, children = props.children, right = props.right, hoverable = props.hoverable;
  return React__default.createElement(SidePillStyled, _extends({}, props, {
    className: "aph-sidepill ".concat(className || "")
  }), hoverable ? React__default.createElement("span", {
    className: "aph-sidepill__hoverable ".concat(right ? "aph-sidepill__hoverable--right" : "")
  }, hoverable) : null, React__default.createElement("span", {
    className: "aph-sidepill__content"
  }, children));
});

SidePill.defaultProps = {
  right: !1
}, SidePill.propTypes = {
  right: propTypes.bool
};

var AStyled = _styled("a", {
  target: "e93yvql0"
})("box-sizing:border-box;cursor:pointer;text-decoration:none;", function(props) {
  return textColorfull(props);
}, ";border:0;outline:0;&:active,&:focus,&:hover,&:visited{border:0;outline:0;}", function(props) {
  return props.styles;
}, ";"), A = React.forwardRef(function(props, ref) {
  var className = props.className, color = props.color, rest = _objectWithoutProperties(props, [ "className", "color" ]);
  return React__default.createElement(AStyled, _extends({}, rest, {
    ref: ref,
    textColor: color,
    className: "aph-a ".concat(className || "")
  }));
});

A.defaultProps = {
  link: !1,
  bold: !1,
  center: !1,
  upper: !1,
  small: !1,
  helper: !1,
  margin: "10px 0",
  color: "",
  styles: {}
}, A.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var H1Styled = _styled("h1", {
  target: "ezvpeh30"
})("box-sizing:border-box;", function(props) {
  return text(props, "XXL");
}, ";", function(props) {
  return props.styles;
}, ";"), H1 = React.forwardRef(function(props, ref) {
  var className = props.className, color = props.color, align = props.align, center = props.center, left = props.left, right = props.right, lower = props.lower, upper = props.upper, rest = _objectWithoutProperties(props, [ "className", "color", "align", "center", "left", "right", "lower", "upper" ]);
  return React__default.createElement(H1Styled, _extends({
    textAlign: align,
    textColor: color,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper
  }, rest, {
    ref: ref,
    className: "aph-h1 ".concat(className || "")
  }));
});

H1.defaultProps = {
  link: !1,
  bold: !1,
  center: !1,
  upper: !1,
  helper: !1,
  margin: "25px 0 15px",
  color: "",
  styles: {}
}, H1.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var H2Styled = _styled("h2", {
  target: "e1knkmrf0"
})("box-sizing:border-box;", function(props) {
  return text(props, "XL");
}, ";", function(props) {
  return props.styles;
}, ";"), H2 = React.forwardRef(function(props, ref) {
  var className = props.className, color = props.color, align = props.align, center = props.center, left = props.left, right = props.right, lower = props.lower, upper = props.upper, rest = _objectWithoutProperties(props, [ "className", "color", "align", "center", "left", "right", "lower", "upper" ]);
  return React__default.createElement(H2Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h2 ".concat(className || "")
  }));
});

H2.defaultProps = {
  link: !1,
  bold: !1,
  center: !1,
  upper: !1,
  helper: !1,
  margin: "25px 0 15px",
  color: "",
  styles: {}
}, H2.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var H3Styled = _styled("h3", {
  target: "e181c9j70"
})("box-sizing:border-box;", function(props) {
  return text(props, "LG");
}, ";", function(props) {
  return props.styles;
}, ";"), H3 = React.forwardRef(function(props, ref) {
  var className = props.className, color = props.color, align = props.align, center = props.center, left = props.left, right = props.right, lower = props.lower, upper = props.upper, rest = _objectWithoutProperties(props, [ "className", "color", "align", "center", "left", "right", "lower", "upper" ]);
  return React__default.createElement(H3Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h3 ".concat(className || "")
  }));
});

H3.defaultProps = {
  link: !1,
  bold: !1,
  center: !1,
  upper: !1,
  helper: !1,
  margin: "15px 0 5px",
  color: "",
  styles: {}
}, H3.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var PStyled = _styled("p", {
  target: "enm91qe0"
})("box-sizing:border-box;", function(props) {
  return text(props, props.textSmall ? "SM" : "MD");
}, ";", function(props) {
  return props.styles;
}, ";"), P = React.forwardRef(function(props, ref) {
  var className = props.className, color = props.color, align = props.align, center = props.center, left = props.left, right = props.right, lower = props.lower, upper = props.upper, small = props.small, rest = _objectWithoutProperties(props, [ "className", "color", "align", "center", "left", "right", "lower", "upper", "small" ]);
  return React__default.createElement(PStyled, _extends({
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
    className: "aph-p ".concat(className || "")
  }));
});

function Label(props) {
  var className = props.className, styles = props.styles, rest = _objectWithoutProperties(props, [ "className", "styles" ]);
  return React__default.createElement(P, _extends({
    bold: !0,
    small: !0,
    upper: !0,
    margin: "5px 0",
    color: "helper",
    as: "label",
    className: "aph-label ".concat(className || ""),
    styles: Object.assign({
      display: "block"
    }, styles || {})
  }, rest));
}

function ownKeys$b(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$b(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$b(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

P.defaultProps = {
  link: !1,
  bold: !1,
  center: !1,
  upper: !1,
  small: !1,
  helper: !1,
  margin: "10px 0",
  color: "",
  styles: {}
}, P.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphContainer = _styled("div", {
  target: "e1js7dhi0"
})(function(props) {
  return _objectSpread$b(_defineProperty({
    boxSizing: "border-box",
    display: "block",
    margin: "0 auto",
    padding: props.noPadding ? 0 : "0 ".concat(GRID.CONTAINER_PADDING + GRID.UNIT),
    width: "100%",
    maxWidth: props.fluid ? "100%" : props.xs ? GRID.CONTAINER.XS + GRID.UNIT : props.sm ? GRID.CONTAINER.SM + GRID.UNIT : props.md ? GRID.CONTAINER.MD + GRID.UNIT : props.xl ? GRID.CONTAINER.XL + GRID.UNIT : GRID.CONTAINER.LG + GRID.UNIT
  }, MEDIA_QUERIES.LT.SM, {
    paddingRight: props.noPadding ? 0 : GRID.CONTAINER_PADDING_XS + GRID.UNIT,
    paddingLeft: props.noPadding ? 0 : GRID.CONTAINER_PADDING_XS + GRID.UNIT
  }), props.styles);
}, ""), Container = React.forwardRef(function(props, ref) {
  return React__default.createElement(AphContainer, _extends({}, props, {
    ref: ref,
    className: "aph-container ".concat(props.className || "")
  }), props.children);
});

function ownKeys$c(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$c(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$c(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

Container.propTypes = {
  xs: propTypes.bool,
  sm: propTypes.bool,
  md: propTypes.bool,
  lg: propTypes.bool,
  xl: propTypes.bool,
  fluid: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  noPadding: propTypes.bool
}, Container.defaultProps = {
  styles: {},
  noPadding: !1
};

var MARGIN = "-" + GRID.COLUMNS_PADDING + GRID.UNIT, RowWrapper = _styled("div", {
  target: "e134hck50"
})(function(props) {
  props.alignment;
  var _objectSpread2, vertical = props.vertical, horizontal = props.horizontal, reverse = props.reverse, styles = props.styles, _extraStyles = {};
  return horizontal && (_extraStyles = "center" === horizontal || "middle" === horizontal ? {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center"
  } : {
    WebkitBoxPack: horizontal,
    MsFlexPack: horizontal,
    justifyContent: "flex-".concat(horizontal)
  }), vertical && (_extraStyles = "center" === vertical || "middle" === vertical ? Object.assign(_extraStyles, {
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  }) : Object.assign(_extraStyles, {
    WebkitBoxAlign: vertical,
    MsFlexAlign: vertical,
    alignItems: "flex-".concat(vertical)
  })), _objectSpread$c((_defineProperty(_objectSpread2 = {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flex: "0 1 auto",
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: MARGIN,
    marginLeft: MARGIN
  }, "flexDirection", reverse ? "row-reverse" : null), _defineProperty(_objectSpread2, "&:before, &:after", {
    clear: "both"
  }), _objectSpread2), styles, {}, _extraStyles);
}, ""), Row = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children;
  return React__default.createElement(RowWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-row ".concat(className || "")
  }), children);
});

function ownKeys$d(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$d(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$d(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

Row.propTypes = {
  vertical: propTypes.string,
  horizontal: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
}, Row.defaultProps = {
  styles: {},
  vertical: "middle",
  horizontal: "left"
};

var ColumnWrapper = _styled("div", {
  target: "e1fg9ilu0"
})(function(props) {
  var _objectSpread2, _objectSpread3, first = props.first, last = props.last, width = props.width, styles = props.styles, xxs = props.xxs, xs = props.xs, sm = props.sm, md = props.md, lg = props.lg, xl = props.xl;
  function getOrder() {
    var size = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "xs";
    return first === size ? -1 : last === size ? 1 : null;
  }
  return _objectSpread$d((_objectSpread2 = {
    boxSizing: "border-box",
    flex: "0 0 auto",
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: "column",
    order: "xxs" === first || "xs" === first ? -1 : "xxs" === last || "xs" === last ? 1 : null,
    paddingRight: GRID.COLUMNS_PADDING,
    paddingLeft: GRID.COLUMNS_PADDING
  }, _defineProperty(_objectSpread2, "flexBasis", width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || "100%"), 
  _defineProperty(_objectSpread2, "maxWidth", width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || "100%"), 
  _objectSpread2), styles, (_defineProperty(_objectSpread3 = {}, MEDIA_QUERIES.LT.SM, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(xs),
    maxWidth: GRID.COLUMNS_GET_WIDTH(xs),
    order: getOrder("xs")
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.SM, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(sm),
    maxWidth: GRID.COLUMNS_GET_WIDTH(sm),
    order: getOrder("sm")
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.MD, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(md),
    maxWidth: GRID.COLUMNS_GET_WIDTH(md),
    order: getOrder("md")
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.LG, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(lg),
    maxWidth: GRID.COLUMNS_GET_WIDTH(lg),
    order: getOrder("lg")
  }), _defineProperty(_objectSpread3, MEDIA_QUERIES.GT.XL, {
    flexBasis: GRID.COLUMNS_GET_WIDTH(xl),
    maxWidth: GRID.COLUMNS_GET_WIDTH(xl),
    order: getOrder("xl")
  }), _objectSpread3));
}, ""), Column = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children;
  return React__default.createElement(ColumnWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-col ".concat(className || "")
  }), children);
}), sizesTypes = propTypes.oneOfType([ propTypes.string, propTypes.number ]);

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
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
}, Column.defaultProps = {
  styles: {}
};

var _ref$1 = {
  name: "k008qs",
  styles: "display:flex;"
}, Flex = function() {
  return _ref$1;
}, FlexWrap = function(props) {
  return core.css("flex-wrap:", props.flexWrap, ";");
}, AlignItems = function(props) {
  return core.css("align-items:", props.alignItems, ";");
}, AlignContent = function(props) {
  return core.css("align-items:", props.alignContent, ";");
}, FlexDirection = function(props) {
  return core.css("flex-direction:", props.flexDirection, ";");
}, JustifyContente = function(props) {
  return core.css("justify-content:", props.justifyContent, ";");
}, Order = function(props) {
  return core.css("order:", props.order, ";");
}, FlexGrow = function(props) {
  return core.css("flex-grow:", props.flexGrow, ";");
}, AlignSelf = function(props) {
  return core.css("align-self:", props.alignSelf, ";");
}, FlexShrink = function(props) {
  return core.css("flex-shrink:", props.flexShrink, ";");
}, AphFlex = _styled("div", {
  target: "ek8mijm0"
})("box-sizing:border-box;", function(props) {
  return props.flex && Flex;
}, ";", function(props) {
  return props.flexWrap && FlexWrap;
}, ";", function(props) {
  return props.alignItems && AlignItems;
}, ";", function(props) {
  return props.alignContent && AlignContent;
}, ";", function(props) {
  return props.flexDirection && FlexDirection;
}, ";", function(props) {
  return props.justifyContent && JustifyContente;
}, ";", function(props) {
  return props.order && Order;
}, ";", function(props) {
  return props.flexGrow && FlexGrow;
}, ";", function(props) {
  return props.alignSelf && AlignSelf;
}, ";", function(props) {
  return props.flexShrink && FlexShrink;
}, ";", function(props) {
  return props.styles;
}, ";");

function Flex$1(props) {
  var className = props.className;
  return React__default.createElement(AphFlex, _extends({}, props, {
    className: "aph-flex ".concat(className)
  }));
}

Flex$1.defaultProps = {
  className: "",
  flexWrap: "",
  alignSelf: "",
  alignItems: "",
  alignContent: "",
  flexDirection: "",
  justifyContent: "",
  order: "",
  flexGrow: "",
  flexShrink: "",
  styles: {}
}, Flex$1.propTypes = {
  className: propTypes.string,
  flexWrap: propTypes.string,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  alignContent: propTypes.string,
  flexDirection: propTypes.string,
  justifyContent: propTypes.string,
  order: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
  flexGrow: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
  flexShrink: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
  styles: propTypes.any
};

var AphListStyled = _styled("ul", {
  target: "e32bd8t0"
})("box-sizing:border-box;display:block;margin:0;padding:0;overflow:hidden;border-radius:", RADIUS.SM, "px;list-style-type:", function(props) {
  return props.type || "none";
}, ";", function(props) {
  return props.styles;
}, ";"), List = React.forwardRef(function(props, ref) {
  var className = props.className;
  return React__default.createElement(AphListStyled, _extends({
    role: "listbox"
  }, props, {
    ref: ref,
    className: "aph-list ".concat(className || "")
  }));
});

List.defaultProps = {
  styles: {}
}, List.propTypes = {
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphListItemStyled = _styled("li", {
  target: "e6wegxb0"
})("box-sizing:border-box;display:block;margin:0;padding:10px;background-color:transparent;box-shadow:", function(props) {
  return props.borderTop || props.borderBottom ? "inset 0 ".concat(props.borderBottom ? "-" : "", "1px 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper"))) : null;
}, ";transition:color 0.15s linear,background-color 0.15s linear;will-change:color,background-color;&.active{color:", function(props) {
  return colors$1.getFromTheme(props, "secondary");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "secondary", "crystal");
}, ";}", function(props) {
  return props.onClick ? {
    cursor: "pointer",
    color: colors$1.getFromTheme(props, "secondary"),
    "&:hover": {
      color: colors$1.getFromTheme(props, "secondary"),
      backgroundColor: colors$1.getFromTheme(props, "secondary", "crystal")
    }
  } : null;
}, ";", function(props) {
  return props.hoverable ? {
    "&:hover": {
      backgroundColor: colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper"))
    }
  } : null;
}, ";", function(props) {
  return props.styles;
}, ";"), ListItem = React.forwardRef(function(props, ref) {
  var className = props.className, component = props.component, AphListItem = (props.hoverable, 
  component ? AphListItemStyled.withComponent(component, {
    target: "e6wegxb1"
  }) : AphListItemStyled);
  return React__default.createElement(AphListItem, _extends({
    role: "option"
  }, props, {
    ref: ref,
    className: "aph-list__item ".concat(className || "")
  }));
});

function ownKeys$e(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$e(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$e(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

ListItem.defaultProps = {
  hoverable: !1,
  styles: {}
}, ListItem.propTypes = {
  hoverable: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphListGroup = _styled("div", {
  target: "ey9rber0"
})(function(props) {
  return _objectSpread$e({
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    display: "block",
    width: "100%",
    padding: props.noSideBorders ? "1px 0" : "1px",
    margin: 0,
    listStyle: "none",
    borderRadius: (isNaN(props.radius) ? RADIUS : props.radius) + GRID.UNIT,
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), "\n        ") : "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n            inset 1px 0 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n            inset -1px 0 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n            inset 0 1px 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), "\n        "),
    ".aph-list__header, .aph-list__item": {
      boxShadow: "\n            inset 0 -1px 0 0 ".concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        "),
      "+ .aph-list__header, + .aph-list__item": {
        boxShadow: "\n                inset 0 -1px 0 0 ".concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            ")
      }
    },
    ".aph-list__header": {
      backgroundColor: colors$1.getFromTheme(props, "helper")
    },
    ".aph-list__item": {
      backgroundColor: colors$1.getFromTheme(props, "background")
    },
    "div:first-of-type": {
      ".aph-list__header, > .aph-list__item": {
        "&:first-of-type": {
          marginTop: "-1px",
          borderTopRightRadius: (isNaN(props.radius) ? RADIUS : props.radius) - 2 + GRID.UNIT,
          borderTopLeftRadius: (isNaN(props.radius) ? RADIUS : props.radius) - 2 + GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 ".concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 ").concat(colors$1.getOpacity(.25, colors$1.getFromTheme(props, "helper")), "\n                ")
        }
      }
    },
    "div:last-of-type": {
      ".aph-list__header, > .aph-list__item": {
        "&:last-of-type": {
          marginBottom: "-1px",
          borderBottomRightRadius: (isNaN(props.radius) ? RADIUS : props.radius) - 2 + GRID.UNIT,
          borderBottomLeftRadius: (isNaN(props.radius) ? RADIUS : props.radius) - 2 + GRID.UNIT
        }
      }
    }
  }, props.styles);
}, ""), ListGroup = React.forwardRef(function(props, ref) {
  return React__default.createElement(AphListGroup, _extends({}, props, {
    ref: ref,
    className: "aph-list-group ".concat(props.className || "")
  }), props.children);
});

function ownKeys$f(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$f(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$f(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var AphListGroupItem = _styled("div", {
  target: "evs8czu0"
})(function(props) {
  return _objectSpread$f(_defineProperty({
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    display: "block",
    padding: GRID.CONTAINER_PADDING / 2 + GRID.UNIT + " " + (GRID.CONTAINER_PADDING + GRID.UNIT),
    margin: 0
  }, MEDIA_QUERIES.LT.SM, {
    paddingRight: GRID.CONTAINER_PADDING - 5 + GRID.UNIT,
    paddingLeft: GRID.CONTAINER_PADDING - 5 + GRID.UNIT
  }), props.styles);
}, ""), ListGroupItem = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children;
  return React__default.createElement(AphListGroupItem, _extends({}, props, {
    ref: React.forwardRef,
    className: "".concat(props.header ? "aph-list-group__header " : "aph-list-group__item ").concat(className || "")
  }), children);
});

function ownKeys$g(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$g(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$g(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var _iconSize = window.innerWidth > SCREEN_SIZES.SM ? 22 : 30, iconColumn = _iconSize + GRID.CONTAINER_PADDING / 2 + GRID.UNIT, AphAccordion = _styled("div", {
  target: "e869uf0"
})(function(props) {
  return _objectSpread$g({
    boxSizing: "border-box",
    display: "block",
    fontSize: SIZES.MD.FONT_SIZE,
    lineHeight: SIZES.MD.LINE_HEIGHT
  }, props.styles);
}, ""), Header = _styled("div", {
  target: "e869uf1"
})(function(props) {
  return {
    boxSizing: "border-box",
    display: "block",
    lineHeight: 0
  };
}, ""), columnStyles = {
  boxSizing: "border-box",
  display: "inline-block",
  verticalAlign: "middle"
}, IconColumn = _styled("div", {
  target: "e869uf2"
})(function(props) {
  return _objectSpread$g({}, columnStyles, _defineProperty({
    width: iconColumn,
    lineHeight: 0,
    margin: "-2px 0"
  }, MEDIA_QUERIES.LT.SM, {
    margin: 0
  }));
}, ""), ContentColumn = _styled("div", {
  target: "e869uf3"
})(function(props) {
  return _objectSpread$g({}, columnStyles, {
    width: "calc(100% - ".concat(iconColumn, ")"),
    lineHeight: "20px"
  });
}, "");

function Accordion(props) {
  var header = props.header, headerDark = props.headerDark, headerProps = props.headerProps, headerStyles = props.headerStyles, children = props.children, className = props.className, id = props.id, styles = props.styles, withIcon = props.withIcon, iconSize = props.iconSize, iconProps = props.iconProps, iconStyles = props.iconStyles, _useState = React.useState(props.opened || !1), _useState2 = _slicedToArray(_useState, 2), opened = _useState2[0], setOpened = _useState2[1];
  return React.useEffect(function() {
    setOpened(props.opened);
  }, [ props.opened ]), React__default.createElement(AphAccordion, {
    styles: styles,
    className: "aph-accordion ".concat(className)
  }, React__default.createElement(ListItem, _extends({
    id: id
  }, headerProps, {
    header: !!headerDark,
    styles: _objectSpread$g({
      cursor: "pointer",
      paddingRight: "15px",
      paddingLeft: "15px"
    }, headerStyles),
    onClick: function() {
      var toggleCallback = props.toggleCallback || props.openedCallback, isOpened = !opened;
      setOpened(isOpened), "function" == typeof toggleCallback && toggleCallback(isOpened);
    },
    className: "aph-accordion__header"
  }), children ? React__default.createElement(Header, {
    className: "aph-accordion__header-row"
  }, withIcon && React__default.createElement(IconColumn, {
    className: "aph-accordion__header__col-icon"
  }, React__default.createElement(Icon, _extends({
    size: iconSize || _iconSize,
    slug: "arrow-".concat(opened ? "up" : "down", "-circle"),
    styles: iconStyles
  }, iconProps))), React__default.createElement(ContentColumn, {
    className: "aph-accordion__header__col-content"
  }, header)) : header), opened && children);
}

Accordion.defaultProps = {
  opened: !1,
  header: "",
  className: "",
  withIcon: !0
}, Accordion.propTypes = {
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

var AphCollapsibleChildrenStyled = _styled("div", {
  target: "e19izkhd0"
})("display:block;opacity:1;overflow:hidden;position:relative;margin-right:-10px;margin-left:-10px;transition-timing-function:linear;transition-property:max-height,opacity;will-change:max-height,opacity;", function(props) {
  return props.styles;
}, ";");

function ownKeys$h(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$h(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$h(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var Collapsible = React.forwardRef(function(props, ref) {
  var header = props.header, headerProps = props.headerProps, children = props.children, disabled = props.disabled, delay = props.delay, icon = (props.hover, 
  props.icon), iconSize = props.iconSize, timerDelay = 1e3 * delay, wrapperRef = React.useRef(null), wrapperContentRef = React.useRef(null), _useState = React.useState(props.opened || !1), _useState2 = _slicedToArray(_useState, 2), opened = _useState2[0], setOpened = _useState2[1], _useState3 = React.useState(null), _useState4 = _slicedToArray(_useState3, 2), openTimer = _useState4[0], setOpenTimer = _useState4[1], _useState5 = React.useState(null), _useState6 = _slicedToArray(_useState5, 2), closeTimer = _useState6[0], setCloseTimer = _useState6[1], _useState7 = React.useState(Object.assign({
    transitionDuration: props.delay + "s"
  }, props.opened ? null : {
    maxHeight: 0
  })), _useState8 = _slicedToArray(_useState7, 2), styles = _useState8[0], setStyles = _useState8[1], headerStyles = Object.assign({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "-10px",
    padding: headerProps && headerProps.lg ? "15px 10px" : "10px",
    cursor: "pointer",
    color: colors$1.get(disabled ? "mercury" : "secondary")
  }, headerProps && headerProps.styles ? headerProps.styles : {}), HeaderTitle = headerProps && headerProps.lg ? H2 : H3;
  function handleToggle(isOpened) {
    var openStyles, closeStyles;
    isOpened ? (closeStyles = _objectSpread$h({}, styles, {
      maxHeight: wrapperContentRef.current.clientHeight
    }), clearTimeout(openTimer), setStyles(closeStyles), setTimeout(function() {
      setStyles(_objectSpread$h({}, closeStyles, {
        maxHeight: 0
      })), clearTimeout(closeTimer), setCloseTimer(setTimeout(function() {
        setStyles(_objectSpread$h({}, closeStyles, {
          display: "none"
        }));
      }, timerDelay + 10));
    }, 10)) : (openStyles = _objectSpread$h({}, styles, {
      maxHeight: 0,
      display: "block"
    }), clearTimeout(closeTimer), setStyles(openStyles), setTimeout(function() {
      setStyles(_objectSpread$h({}, openStyles, {
        maxHeight: wrapperContentRef.current.clientHeight
      })), clearTimeout(openTimer), setOpenTimer(setTimeout(function() {
        setStyles(_objectSpread$h({}, openStyles, {
          maxHeight: null
        }));
      }, timerDelay));
    }, 1));
  }
  return React.useEffect(function() {
    return function() {
      clearTimeout(openTimer), clearTimeout(closeTimer);
    };
  }, []), React__default.createElement(Card, _extends({}, props, {
    ref: ref,
    hover: !0,
    className: "aph-collapsible ".concat(opened ? "active" : ""),
    styles: Object.assign({
      position: "relative",
      overflow: "hidden"
    }, props.styles)
  }), header ? React__default.createElement(HeaderTitle, _extends({}, headerProps, {
    styles: Object.assign(headerStyles, {
      paddingRight: icon ? "".concat(iconSize, "px") : null
    }),
    onClick: function() {
      disabled || (handleToggle(opened), setOpened(!opened));
    },
    role: "button"
  }), header, icon ? React__default.createElement(Icon, {
    slug: "arrow-down",
    size: iconSize,
    color: colors$1.get("mercury", "light"),
    styles: {
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)".concat(opened ? " rotate(180deg)" : ""),
      transition: "transform ".concat(delay, "s linear")
    }
  }) : null) : null, React__default.createElement(AphCollapsibleChildrenStyled, {
    ref: wrapperRef,
    styles: styles,
    visible: opened
  }, React__default.createElement("div", {
    ref: wrapperContentRef
  }, children)));
});

Collapsible.defaultProps = {
  opened: !1,
  hover: !1,
  delay: .35,
  styles: {},
  childrenStyles: {},
  icon: !0,
  iconSize: 40,
  header: "",
  headerProps: null
}, Collapsible.propTypes = {
  opened: propTypes.bool,
  hover: propTypes.bool,
  delay: propTypes.number,
  icon: propTypes.bool,
  iconSize: propTypes.number,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  childrenStyles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  header: propTypes.any,
  headerProps: propTypes.object
};

var CountdownStyled = _styled("div", {
  target: "e1mleeg60"
})("box-sizing:border-box;position:relative;display:block;margin:0 auto;width:", function(props) {
  return props.aphSize;
}, "px;height:", function(props) {
  return props.aphSize;
}, "px;.", function(props) {
  return props.aphSelector;
}, "{box-sizing:border-box;position:relative;transform:rotate(-90deg) scaleY(-1);&__trace,&__line{fill:none;}&__trace{stroke:", function(props) {
  return colors$1.getFromTheme(props, props.aphBackground);
}, ";}&__line{stroke:", function(props) {
  return colors$1.getFromTheme(props, props.aphColor);
}, ";stroke-linecap:round;transition:stroke-dashoffset 0.1s linear;}&__count{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;display:block;text-align:center;font-weight:normal;font-size:", function(props) {
  return props.aphSize / 2;
}, "px;line-height:", function(props) {
  return props.aphSize;
}, "px;color:", function(props) {
  return colors$1.getFromTheme(props, props.aphColor);
}, ";}}", function(props) {
  return props.aphStyles;
}, ";"), SELECTOR = "aph-countdown", LOG_PREFIX = "Aphrodite Countdown:", RADIUS$1 = 54, VIEW_BOX = 120, CIRCUMFERENCE = 2 * Math.PI * RADIUS$1;

function Countdown(props) {
  var background = props.background, className = props.className, color = props.color, log = props.log, size = props.size, seconds = props.seconds, strokeWidth = props.strokeWidth, styles = props.styles, onFinishCallback = props.onFinishCallback, rest = _objectWithoutProperties(props, [ "background", "className", "color", "log", "size", "seconds", "strokeWidth", "styles", "onFinishCallback" ]), _useState = React.useState(seconds), _useState2 = _slicedToArray(_useState, 2), countdown = _useState2[0], setCountdown = _useState2[1], _useState3 = React.useState(0), _useState4 = _slicedToArray(_useState3, 2), dashoffset = _useState4[0], setDashoffset = _useState4[1], _useState5 = React.useState(null), _useState6 = _slicedToArray(_useState5, 2), timer = _useState6[0], setTimer = _useState6[1];
  function handleStart() {
    var _timer = null, _count = 0, _current = seconds, _progress = _current / seconds * 100;
    function _decrease() {
      if (_count > seconds) return "function" == typeof onFinishCallback && onFinishCallback(seconds, log), 
      clearInterval(timer), void clearInterval(_timer);
      var value, _dashoffset;
      setDashoffset(_dashoffset = CIRCUMFERENCE * (1 - (value = _progress) / 100)), log && console.log(LOG_PREFIX, value + "%", "|", "offset:", _dashoffset + ";"), 
      setCountdown(seconds - _count), _count += 1, _progress = (_current -= 1) / seconds * 100;
    }
    return log && console.log(LOG_PREFIX, seconds, "seconds to decrease;"), clearInterval(timer), 
    clearInterval(_timer), _decrease(), _timer = setInterval(_decrease, 1e3), setTimer(_timer), 
    _timer;
  }
  return React.useEffect(function() {
    var interval = handleStart();
    return function() {
      clearInterval(timer), clearInterval(interval);
    };
  }, [ seconds ]), React.useEffect(function() {
    return function() {
      clearInterval(timer);
    };
  }, []), React__default.createElement(CountdownStyled, _extends({}, rest, {
    aphBackground: background,
    aphColor: color,
    aphSelector: SELECTOR,
    aphSize: size,
    aphStyles: styles,
    className: "".concat(SELECTOR, "-wrapper ").concat(className || "")
  }), React__default.createElement("svg", {
    className: "".concat(SELECTOR, " ").concat(className || ""),
    width: size,
    height: size,
    viewBox: "0 0 ".concat(VIEW_BOX, " ").concat(VIEW_BOX)
  }, React__default.createElement("circle", {
    className: "".concat(SELECTOR, "__trace"),
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth
  }), React__default.createElement("circle", {
    className: "".concat(SELECTOR, "__line"),
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth,
    style: {
      strokeDasharray: CIRCUMFERENCE,
      strokeDashoffset: dashoffset
    }
  })), React__default.createElement("h4", {
    className: "".concat(SELECTOR, "__count")
  }, countdown));
}

Countdown.defaultProps = {
  color: colors$1.get("helper"),
  background: "transparent",
  seconds: 10,
  size: 32,
  strokeWidth: 8,
  onFinishCallback: function(seconds, log) {
    return log && console.log(LOG_PREFIX, seconds, "seconds finished;");
  }
};

var AphPaginationStyled = _styled("section", {
  target: "e12zcqyq0"
})("box-sizing:border-box;position:relative;display:block;width:auto;margin:40px auto;padding:10px 60px;max-width:460px;min-height:50px;list-style-type:none;text-align:center;user-select:none;border-radius:5px;background-color:", function(props) {
  return colors$1.getFromTheme(props, "background");
}, ";transition:background-color .2s linear;*{box-sizing:border-box;user-select:none;}.rc-pagination{&-prev,&-next,&-jump-next,&-jump-prev,&-item{display:inline-block;vertical-align:middle;text-align:center;min-width:30px;font-weight:bold;font-size:16px;line-height:20px;border-radius:5px;transition:background-color 0.2s linear;outline:0;border:0;&:not(.rc-pagination-item-active){cursor:pointer;}}&-prev,&-next{position:absolute;padding:2px 2.5px 2.5px;color:", function(props) {
  return colors$1.getFromTheme(props, "inverse");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "secondary");
}, ";}&-prev{left:15px;}&-next{right:15px;padding-left:1.5px;}&-disabled{background-color:", function(props) {
  return colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? "inverse" : "disabled");
}, ";}&-item,&-jump-prev,&-jump-next{padding:5px;margin:0 5px;color:", function(props) {
  return colors$1.getFromTheme(props, "secondary");
}, ";background-color:transparent;&-active{color:", function(props) {
  return colors$1.getFromTheme(props, "base");
}, ";}&:active,&:hover{outline:0;border:0;&:not(.rc-pagination-item-active){background-color:", function(props) {
  return colors$1.getOpacity(.5, colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? "inverse" : "disabled"));
}, ";}}}}", function(props) {
  return props.styles;
}, ";");

function Pagination(props) {
  var loading = props.loading, className = props.className, rest = _objectWithoutProperties(props, [ "loading", "className" ]);
  return React__default.createElement(AphPaginationStyled, _extends({
    locale: localeInfo,
    showLessItems: !0
  }, rest, {
    as: loading ? Placeholder : Paginator,
    jumpPrevIcon: React__default.createElement(React__default.Fragment, null, "•••"),
    jumpNextIcon: React__default.createElement(React__default.Fragment, null, "•••"),
    prevIcon: React__default.createElement(Icon, {
      slug: "arrow",
      direction: "left",
      color: "inverse",
      size: 25
    }),
    nextIcon: React__default.createElement(Icon, {
      slug: "arrow",
      direction: "right",
      color: "inverse",
      size: 25
    }),
    className: "aph-pagination ".concat(className || "")
  }), loading ? React__default.createElement(React__default.Fragment, null, React__default.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-prev"
  }), Array.from({
    length: 3
  }, function(number, index) {
    return React__default.createElement(Placeholder, {
      width: 30,
      height: 30,
      className: "rc-pagination-item",
      key: "rc-pagination-placeholder-".concat(index)
    });
  }), React__default.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-next"
  })) : null);
}

Pagination.defaultProps = {
  onChange: function() {},
  loading: !0,
  total: 0,
  current: 1,
  pageSize: 25,
  styles: {}
}, Pagination.propTypes = {
  onChange: propTypes.func.isRequired,
  loading: propTypes.bool,
  total: propTypes.number,
  current: propTypes.number,
  pageSize: propTypes.number,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphCheckboxWrapperStyled = _styled("div", {
  target: "e1a240py0"
})({
  name: "g9qje4",
  styles: "box-sizing:border-box;display:block;position:relative;"
}), AphCheckboxMaskStyled = _styled("label", {
  target: "e1a240py1"
})("box-sizing:border-box;display:block;position:relative;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-right:", function(props) {
  return props.labelRight ? "40px" : null;
}, ";padding-left:", function(props) {
  return props.labelRight ? null : "40px";
}, ";text-align:", function(props) {
  return props.right ? "right" : null;
}, ';&:before{box-sizing:border-box;content:" ";position:absolute;display:block;width:30px;height:30px;border:1px solid  ', function(props) {
  return colors$1.getFromTheme(props, "secondary");
}, ";top:0;border-radius:5px;transition-timing-function:ease;transition-duration:0.15s;transition-property:background-color,background-image;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);background-color:", function(props) {
  return colors$1.getFromTheme(props, "inverse");
}, ";background-size:20px;background-position:center;background-repeat:no-repeat;}"), AphCheckboxStyled = _styled("input", {
  target: "e1a240py2"
})("box-sizing:border-box;position:absolute;display:block;width:30px;height:30px;margin:0;opacity:0;top:0;right:", function(props) {
  return props.labelRight ? "0" : null;
}, ";left:", function(props) {
  return props.labelRight ? null : "0";
}, ";vertical-align:middle;+ .aph-form-control-mask:before{right:", function(props) {
  return props.labelRight || props.right ? "0" : null;
}, ";left:", function(props) {
  return props.labelRight || props.right ? null : "0";
}, ";}&:checked + .aph-form-control-mask:before{background-image:url('", function(props) {
  return ICONS.ENCODE_SVG(React__default.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.getFromTheme(props, props.color || "secondary")
  }));
}, "');}&.disabled,&:disabled{+ .aph-form-control-mask:before{border-color:", function(props) {
  return colors$1.getFromTheme(props, "disabled");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "background");
}, ";}&:checked + .aph-form-control-mask:before{background-image:url('", function(props) {
  return ICONS.ENCODE_SVG(React__default.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.get("mercury")
  }));
}, "');}}"), Checkbox = React.forwardRef(function(props, ref) {
  var className = props.className, children = props.children, color = props.color, id = props.id, right = props.right, labelProps = props.labelProps, labelRight = props.labelRight, newProps = Object.assign({}, props);
  return delete newProps.children, React__default.createElement(AphCheckboxWrapperStyled, null, React__default.createElement(AphCheckboxStyled, _extends({
    className: "aph-form-control ".concat(className || "")
  }, newProps, {
    ref: ref,
    type: "checkbox"
  })), React__default.createElement(AphCheckboxMaskStyled, _extends({
    className: "aph-form-control-mask ".concat(className || ""),
    htmlFor: id,
    color: color,
    right: right,
    labelRight: labelRight || right
  }, labelProps), children));
});

Checkbox.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  labelProps: {},
  labelRight: !1,
  right: !1,
  styles: {}
}, Checkbox.propTypes = {
  id: propTypes.string.isRequired,
  labelProps: propTypes.object,
  labelRight: propTypes.bool,
  right: propTypes.bool,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var AphFormControlWrapperStyled = _styled("div", {
  target: "e1npxlgh0"
})({
  name: "8zz7ay",
  styles: "box-sizing:border-box;position:relative;display:block;"
}), AphFormControlLabelStyled = _styled("label", {
  target: "e17pdeij0"
})("box-sizing:border-box;position:absolute;top:", function(props) {
  return props.textArea ? "15px" : "50%";
}, ";left:10px;display:inline-block;pointer-events:none;color:", function(props) {
  return colors$1.getFromTheme(props, "helper");
}, ";font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";text-transform:uppercase;transform:", function(props) {
  return props.textArea ? null : "translateY(-50%)";
}, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;&.aph-form-label--top{top:2.5px;font-size:", SIZES.SM.FONT_SIZE, ";transform:translateY(0);}"), FormControlStyled = _styled("input", {
  target: "eub2l8f0"
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding:20px 10px 0;font-weight:", SIZES.MD.FONT_WEIGHT, ";font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";color:", function(props) {
  return colors$1.getFromTheme(props, "base");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "background");
}, ";border-radius:", RADIUS.XS, "px;border:0;outline:0;transition-property:background-color,padding;transition-timing-function:linear;transition-duration:0.15s;will-change:background-color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", function(props) {
  return colors$1.getFromTheme(props, "mercury", "light");
}, ";font-weight:300;}&:active,&:focus{color:", function(props) {
  return colors$1.getFromTheme(props, "black");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, props.error ? "error" : props.color || "secondary", "crystal");
}, ";+ .aph-form-label{top:2.5px;font-size:", SIZES.SM.FONT_SIZE, ";transform:translateY(0);}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function(props) {
  return colors$1.getFromTheme(props, props.error ? "error" : props.color || "secondary");
}, ";}}&.disabled,&:disabled{cursor:not-allowed;color:", function(props) {
  return colors$1.getFromTheme(props, "black");
}, ";background-color:", function(props) {
  return colors$1.getFromTheme(props, "disabled", "crystal");
}, ";&:hover,&:active,&:focus{+ .aph-form-label{color:", function(props) {
  return colors$1.getFromTheme(props, "disabled");
}, ";}}}&.aph-form-control--middle{padding:10px;}", function(props) {
  return props.error ? "\n        color: ".concat(function(props) {
    return colors$1.getFromTheme(props, "error");
  }, ";\n\n        + .aph-form-label {\n            color: ").concat(function(props) {
    return colors$1.getFromTheme(props, "error");
  }, ";\n        }\n\n        &:hover,\n        &:active,\n        &:focus {\n            + .aph-form-label {\n                color: ").concat(function(props) {
    return colors$1.getFromTheme(props, "error");
  }, ";\n            }\n        }\n    ") : null;
}, " ", function(props) {
  return props.styles;
}, ";"), AphFormControlErrorMsgStyled = _styled("label", {
  target: "epzfivm0"
})("box-sizing:border-box;display:block;padding:0 10px;max-height:0;color:", function(props) {
  return colors$1.getFromTheme(props, "error");
}, ";font-size:", SIZES.SM.FONT_SIZE, ";line-height:", SIZES.SM.LINE_HEIGHT, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;transition-property:max-height;", function(props) {
  return props.styles;
}, ";"), FormControlInputNumber = React.memo(React.forwardRef(function(props, ref) {
  var id = props.id, className = props.className, label = props.label, labelProps = props.labelProps, placeholder = props.placeholder, value = props.value, onChange = props.onChange, errorMessage = (props.prefix, 
  props.error, props.errorMessage), _useState = React.useState("number" == typeof value), _useState2 = _slicedToArray(_useState, 2), hasValue = _useState2[0], setHasValue = _useState2[1], inheritProps = Object.assign({}, props);
  return [ "label", "labelProps", "errorMessage" ].map(function(excludedProp) {
    return delete inheritProps[excludedProp], !0;
  }), React.useEffect(function() {
    setHasValue("number" == typeof value);
  }, [ value ]), React__default.createElement(AphFormControlWrapperStyled, null, React__default.createElement(FormControlStyled, _extends({}, inheritProps, {
    as: InputNumber,
    ref: ref,
    onChange: function(inputValue) {
      setHasValue("number" == typeof inputValue), "function" == typeof onChange && onChange(inputValue);
    },
    displayType: "input",
    enableMobileNumericKeyboard: !0,
    className: "aph-form-control ".concat(!label || !label && hasValue ? "aph-form-control--middle" : "", " ").concat(className || "")
  })), label ? React__default.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? "aph-form-label--top" : "")
  }), label) : null, React__default.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: errorMessage ? {
      maxHeight: "600px"
    } : null,
    className: "aph-form-error"
  }, errorMessage || ""));
}));

FormControlInputNumber.defaultProps = {
  id: "",
  label: "",
  labelProps: {},
  type: "tel",
  styles: {}
}, FormControlInputNumber.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  labelProps: propTypes.object,
  type: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var FormControlInputNumber$1 = React.memo(React.forwardRef(function(props, ref) {
  var id = props.id, className = props.className, label = props.label, labelProps = props.labelProps, onChange = (props.placeholder, 
  props.value, props.onChange), error = props.error, errorMessage = props.errorMessage, inheritProps = Object.assign({}, props);
  return [ "label", "labelProps", "errorMessage" ].map(function(excludedProp) {
    return delete inheritProps[excludedProp], !0;
  }), React__default.createElement(AphFormControlWrapperStyled, null, React__default.createElement(FormControlStyled, _extends({}, inheritProps, {
    as: CurrencyInput,
    ref: ref,
    error: error ? "true" : null,
    onChange: function() {},
    onChangeEvent: function(evt, maskedValue, floatValue) {
      "function" == typeof onChange && onChange(Object.assign({}, evt), floatValue, maskedValue);
    },
    className: "aph-form-control ".concat(className || "")
  })), label ? React__default.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label aph-form-label--top"
  }), label) : null, React__default.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: errorMessage ? {
      maxHeight: "600px"
    } : null,
    className: "aph-form-error"
  }, errorMessage || ""));
}));

FormControlInputNumber$1.defaultProps = {
  id: "",
  label: "",
  btn: null,
  styles: {},
  inputType: "tel",
  thousandSeparator: ".",
  decimalSeparator: ",",
  prefix: "R$",
  value: 0,
  precision: 2,
  allowEmpty: !0,
  allowNegative: !0
}, FormControlInputNumber$1.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  type: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  thousandSeparator: propTypes.string,
  decimalSeparator: propTypes.string,
  prefix: propTypes.string,
  value: propTypes.number,
  precision: propTypes.number,
  allowEmpty: propTypes.bool,
  allowNegative: propTypes.bool
};

var AphFormControlButtonStyled = _styled("button", {
  target: "ect8n7f0"
})("box-sizing:border-box;position:absolute;display:block;padding:0;margin:0;width:30px;height:30px;top:10px;z-index:10;font-size:30px;line-height:30px;border:0;outline:0;background:transparent;text-align:center;&:active,&:focus,&:hover{color:", function(props) {
  return colors$1.getFromTheme(props, "base");
}, ";border:0;outline:0;background:transparent;}", function(props) {
  return props.left ? "left" : "right";
}, ":5px;", function(props) {
  return props.styles;
}, ";"), Input = React.memo(React.forwardRef(function(props, ref) {
  if ("checkbox" === type) return React__default.createElement(Checkbox, _extends({}, props, {
    color: props.error ? "error" : props.color,
    ref: ref
  }));
  if ("number" === type) return React__default.createElement(FormControlInputNumber, _extends({}, props, {
    ref: ref
  }));
  if ("currency" === type) return React__default.createElement(FormControlInputNumber$1, _extends({}, props, {
    ref: ref
  }));
  var id = props.id, className = props.className, label = props.label, labelProps = props.labelProps, placeholder = props.placeholder, value = props.value, onChange = props.onChange, onPaste = props.onPaste, preventPaste = props.preventPaste, type = props.type, btn = props.btn, button = props.button, errorMessage = (props.error, 
  props.errorMessage), _useState = (props.color, React.useState(!!value)), _useState2 = _slicedToArray(_useState, 2), hasValue = _useState2[0], setHasValue = _useState2[1];
  return React.useEffect(function() {
    setHasValue(!!value);
  }, [ value ]), React__default.createElement(AphFormControlWrapperStyled, {
    hasButton: !(!btn && !button),
    buttonAlign: btn && btn.align ? btn.align : button && button.align ? button.align : ""
  }, React__default.createElement(FormControlStyled, _extends({
    name: id
  }, props, {
    ref: ref,
    onChange: function(evt) {
      var inputValue = evt.target.value;
      setHasValue(!!inputValue), "function" == typeof onChange && onChange(Object.assign({}, evt), inputValue);
    },
    onPaste: function(evt) {
      preventPaste && evt.preventDefault(), "function" == typeof onPaste && onPaste(Object.assign({}, evt), inputValue);
    },
    className: "aph-form-control ".concat(!label || !label && hasValue ? "aph-form-control--middle" : "", " ").concat(className || "")
  })), label ? React__default.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? "aph-form-label--top" : "")
  }), label) : null, btn || button ? React__default.createElement(AphFormControlButtonStyled, null, React__default.createElement("span", _extends({}, btn, button))) : null, React__default.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: errorMessage ? {
      maxHeight: "600px"
    } : null,
    className: "aph-form-error"
  }, errorMessage || ""));
}));

Input.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  label: "",
  btn: null,
  button: null,
  styles: {}
}, Input.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  button: propTypes.object,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var FormControlSelect = React.memo(React.forwardRef(function(props, ref) {
  var id = props.id, label = (props.className, props.label), labelProps = props.labelProps, placeholder = props.placeholder, value = props.value, onChange = props.onChange, errorMessage = (props.type, 
  props.btn, props.error, props.errorMessage), _useState = (props.color, React.useState(!("number" != typeof value && !value))), _useState2 = _slicedToArray(_useState, 2), hasValue = _useState2[0], setHasValue = _useState2[1];
  return React.useEffect(function() {
    setHasValue(!!value);
  }, [ value ]), React__default.createElement(AphFormControlWrapperStyled, null, React__default.createElement(FormControlStyled, _extends({}, props, {
    as: "select",
    ref: ref,
    onChange: function(evt) {
      var inputValue = evt.target.value;
      setHasValue(!("number" != typeof inputValue && !inputValue)), "function" == typeof onChange && onChange(Object.assign({}, evt), inputValue);
    },
    styles: Object.assign({}, {
      height: "50px",
      cursor: "pointer",
      paddingRight: "40px"
    }, props.styles)
  })), label ? React__default.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label ".concat(placeholder || hasValue ? "aph-form-label--top" : "")
  }), label) : null, React__default.createElement(AphFormControlButtonStyled, {
    type: "button",
    styles: {
      pointerEvents: "none"
    }
  }, React__default.createElement(Icon, {
    size: 30,
    slug: "arrow-down",
    color: props.disabled ? "disabled" : "base"
  })), React__default.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: errorMessage ? {
      maxHeight: "600px"
    } : null,
    className: "aph-form-error"
  }, errorMessage || ""));
}));

FormControlSelect.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  label: "",
  btn: null,
  styles: {}
}, FormControlSelect.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ])
};

var FormControlTextArea = React.memo(React.forwardRef(function(props, ref) {
  var id = props.id, label = (props.className, props.label), labelProps = props.labelProps, placeholder = props.placeholder, value = props.value, onChange = props.onChange, errorMessage = (props.type, 
  props.btn, props.error, props.errorMessage), _useState = (props.color, React.useState(!!value)), _useState2 = _slicedToArray(_useState, 2), hasValue = _useState2[0], setHasValue = _useState2[1], inputId = "".concat(id || "formControl"), styles = '\n        max-width : 100%;\n        min-width : 100%;\n        min-height: 90px;\n        padding-bottom: 10px;\n\n        &[rows="4"] {\n            min-height: 110px;\n        }\n\n        &[rows="5"] {\n            min-height: 130px;\n        }\n\n        &[rows="6"] {\n            min-height: 150px;\n        }\n\n        &[rows="7"] {\n            min-height: 170px;\n        }\n\n        &[rows="8"] {\n            min-height: 190px;\n        }\n\n        &[rows="9"] {\n            min-height: 210px;\n        }\n\n        &[rows="10"] {\n            min-height: 230px;\n        }\n\n        '.concat(function(props) {
    return props.styles;
  }, ";\n    ");
  return React.useEffect(function() {
    setHasValue(!!value);
  }, [ value ]), React__default.createElement(AphFormControlWrapperStyled, null, React__default.createElement(FormControlStyled, _extends({}, props, {
    as: "textarea",
    onChange: function(evt) {
      var inputValue = evt.target.value;
      setHasValue(!!inputValue), "function" == typeof onChange && onChange(Object.assign({}, evt));
    },
    styles: styles
  })), label ? React__default.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: inputId,
    textArea: !0,
    className: "aph-form-label ".concat(placeholder || hasValue ? "aph-form-label--top" : "")
  }), label) : null, React__default.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: inputId,
    styles: errorMessage ? {
      maxHeight: "600px"
    } : null,
    className: "aph-form-error"
  }, errorMessage || ""));
})), aphFormSwitchCommonStyles = "\n    box-sizing: border-box;\n    cursor    : pointer;\n", AphFormSwitchWrapper = _styled("label", {
  target: "e64k3mr0"
})(aphFormSwitchCommonStyles, ";position:relative;display:flex;min-width:50px;min-height:30px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:", function(props) {
  return props.textSmall ? SIZES.SM.FONT_SIZE : null;
}, ";text-align:", function(props) {
  return props.textAlign || "left";
}, ";", function(props) {
  return "right" !== props.toggleAlign ? {
    paddingLeft: "50px",
    ".aph-form-switch__wrapper": {
      left: 0
    }
  } : {
    paddingRight: "50px",
    ".aph-form-switch__wrapper": {
      right: 0
    }
  };
}, ";", function(props) {
  return props.styles;
}, ";"), AphFormSwitchToggleWrapper = _styled("label", {
  target: "e64k3mr1"
})(aphFormSwitchCommonStyles, ";position:absolute;display:block;top:50%;transform:translateY(-50%);line-height:0;"), AphFormSwitchToggle = _styled("label", {
  target: "e64k3mr2"
})(aphFormSwitchCommonStyles, ";position:absolute;top:0;width:30px;height:30px;transition-property:right,left;transition-duration:0.25s;transition-timing-function:ease;border-radius:50%;background-color:", function(props) {
  return colors$1.getFromTheme(props, "white");
}, ";box-shadow:0 0 5px 0 ", colors$1.get("black", "original", .25), ";"), AphFormSwitchInput = _styled("input", {
  target: "e64k3mr3"
})(aphFormSwitchCommonStyles, ";padding:0;margin:5px 0;width:50px;height:20px;border-radius:15px;background-color:", function(props) {
  return colors$1.getFromTheme(props, "disabled");
}, ";border:0;outline:0;transition-property:background-color;transition-duration:0.25s;transition-timing-function:ease;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&.disabled,&:disabled{background-color:", function(props) {
  return colors$1.getFromTheme(props, "disabled", "light", .5);
}, ";}&:checked{background-color:", function(props) {
  return colors$1.getFromTheme(props, props.color || "success");
}, ";+ .aph-form-switch{&__toggle{left:20px;}}&:disabled{background-color:", function(props) {
  return colors$1.getFromTheme(props, props.color || "success", "light", .5);
}, ";}}+ .aph-form-switch{&__toggle{left:0;}}"), AphFormSwitchContent = _styled("label", {
  target: "e64k3mr4"
})(aphFormSwitchCommonStyles, ";display:block;width:100%;word-break:break-word;", function(props) {
  return props.hasChildren ? "right" !== props.toggleAlign ? {
    paddingLeft: "10px"
  } : {
    paddingRight: "10px"
  } : null;
}, ";"), AphFormSwitch = {
  Wrapper: AphFormSwitchWrapper,
  ToggleWrapper: AphFormSwitchToggleWrapper,
  Toggle: AphFormSwitchToggle,
  Input: AphFormSwitchInput,
  Content: AphFormSwitchContent
}, Switch = React.memo(React.forwardRef(function(props, ref) {
  var id = props.id, className = props.className, children = props.children, styles = props.styles, textAlign = props.textAlign, textSmall = props.textSmall, toggleAlign = props.toggleAlign, newProps = Object.assign({}, props, {
    children: void 0,
    styles: void 0,
    textAlign: void 0,
    textSmall: void 0,
    toggleAlign: void 0
  });
  return React__default.createElement(AphFormSwitch.Wrapper, {
    htmlFor: id,
    className: "aph-form-switch ".concat(className || ""),
    styles: styles,
    textAlign: textAlign,
    textSmall: textSmall,
    toggleAlign: toggleAlign
  }, React__default.createElement(AphFormSwitch.ToggleWrapper, {
    htmlFor: id,
    className: "aph-form-switch__wrapper"
  }, React__default.createElement(AphFormSwitch.Input, _extends({}, newProps, {
    ref: ref,
    id: id,
    type: "checkbox",
    className: "aph-form-switch__input"
  })), React__default.createElement(AphFormSwitch.Toggle, {
    htmlFor: id,
    className: "aph-form-switch__toggle"
  })), children ? React__default.createElement(AphFormSwitch.Content, {
    htmlFor: id,
    hasChildren: !!children,
    toggleAlign: toggleAlign
  }, children) : null);
}));

function useWindowSize() {
  var isClient = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
  function getSize() {
    return {
      width: isClient ? window.innerWidth : void 0,
      height: isClient ? window.innerHeight : void 0
    };
  }
  var _useState = React.useState(getSize), _useState2 = _slicedToArray(_useState, 2), windowSize = _useState2[0], setWindowSize = _useState2[1];
  return React.useEffect(function() {
    if (!isClient) return !1;
    function handleResize() {
      setWindowSize(getSize());
    }
    return window.addEventListener("resize", handleResize), function() {
      return window.removeEventListener("resize", handleResize);
    };
  }, []), windowSize;
}

Switch.defaultProps = {
  id: "formControlRandomID".concat(Math.random()),
  className: "",
  styles: {},
  textSmall: !1,
  textAlign: "left",
  toggleAlign: "left"
}, Switch.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  styles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
  textSmall: propTypes.bool,
  textAlign: propTypes.string,
  toggleAlign: propTypes.string
};

var sort = {
  byProperty: function(array, property, reverse) {
    return array.sort(function(a, b) {
      return a[property] < b[property] ? reverse ? 1 : -1 : a[property] > b[property] ? reverse ? -1 : 1 : 0;
    }), array;
  }
}, getSizes = function() {
  var _window = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    innerWidth: 1280,
    innerHeight: 768
  }, width = _window.innerWidth, height = _window.innerHeight, xs = width < SCREEN_SIZES.SM, sm = width >= SCREEN_SIZES.SM && width < SCREEN_SIZES.MD, md = width >= SCREEN_SIZES.MD && width < SCREEN_SIZES.LG, lg = width >= SCREEN_SIZES.LG && width < SCREEN_SIZES.XL, xl = width >= SCREEN_SIZES.XL;
  return {
    width: width,
    height: height,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    _lt_: {
      xs: xs,
      sm: xs,
      md: xs || sm,
      lg: xs || sm || md,
      xl: xs || sm || md || lg
    },
    _gt_: {
      xs: sm || md || lg || xl,
      sm: md || lg || xl,
      md: lg || xl,
      lg: width > SCREEN_SIZES.LG,
      xl: width > SCREEN_SIZES.XL
    }
  };
}, initialState = getSizes();

exports.A = A, exports.ANIMATIONS = ANIMATIONS, exports.Accordion = Accordion, exports.ActionBar = ActionBar, 
exports.Badge = Badge, exports.Button = Button, exports.COLORS = COLORS, exports.Card = Card, 
exports.Checkbox = Checkbox, exports.Clipboard = Clipboard, exports.Col = Column, 
exports.Collapsible = Collapsible, exports.Column = Column, exports.Container = Container, 
exports.Countdown = Countdown, exports.Dropdown = Dropdown, exports.FORM = FORM, 
exports.Flex = Flex$1, exports.GRID = GRID, exports.H1 = H1, exports.H2 = H2, exports.H3 = H3, 
exports.HoverActions = HoverActions, exports.HoverActionsItem = HoverActionItem, 
exports.ICONS = ICONS, exports.Icon = Icon, exports.Img = Img, exports.Input = Input, 
exports.InputCurrency = FormControlInputNumber$1, exports.InputNumber = FormControlInputNumber, 
exports.LAYOUT = LAYOUT, exports.Label = Label, exports.Link = A, exports.List = List, 
exports.ListGroup = ListGroup, exports.ListGroupItem = ListGroupItem, exports.ListItem = ListItem, 
exports.MEDIA_QUERIES = MEDIA_QUERIES, exports.Modal = Modal, exports.NumberFormat = NumberFormat, 
exports.P = P, exports.Pagination = Pagination, exports.Placeholder = Placeholder, 
exports.ProgressBar = ProgressBar, exports.RADIUS = RADIUS, exports.Row = Row, exports.SCREEN_SIZES = SCREEN_SIZES, 
exports.SIZES = SIZES, exports.Scrollable = Scrollable, exports.Segment = Segment, 
exports.Select = FormControlSelect, exports.SidePill = SidePill, exports.Switch = Switch, 
exports.Table = Table, exports.Text = P, exports.TextArea = FormControlTextArea, 
exports.ToastsContainer = ToastsContainer, exports.Tooltip = Tooltip, exports.ZINDEX = ZINDEX, 
exports.animations = animations, exports.colors = colors$1, exports.layoutActions = layoutActions, 
exports.sort = sort, exports.toast = reactToastify.toast, exports.useWindowSize = useWindowSize;
