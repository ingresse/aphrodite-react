"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORM = void 0;

var _ = require("./");

var _DEFAULT;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      color: _.COLORS.BLACK,
      backgroundColor: _.COLORS.WHITE,
      borderRadius: _.RADIUS,
      boxShadow: "inset 0 0 2px 0 ".concat(_.COLORS.GET('DARK_BLACK', 0.3))
    }, _defineProperty(_DEFAULT, "borderRadius", _.RADIUS.XS), _defineProperty(_DEFAULT, "border", 0), _defineProperty(_DEFAULT, "outline", 0), _defineProperty(_DEFAULT, "transition", 'box-shadow 0.15s linear'), _defineProperty(_DEFAULT, "willChange", 'box-shadow'), _defineProperty(_DEFAULT, '&.error', {
      boxShadow: "inset 0 0 2px 0 ".concat(_.COLORS.GET('RED', 0.3))
    }), _defineProperty(_DEFAULT, '&:focus, &:active, &.error:focus, &.error:active', {
      boxShadow: "inset 0 0 2px 0 ".concat(_.COLORS.GET('DARK_BLACK', 0.6))
    }), _defineProperty(_DEFAULT, _.MEDIA_QUERIES.LT.SM, {
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
        backgroundColor: _.COLORS.BLUE
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
        borderRadius: _.RADIUS.XS,
        backgroundSize: '12px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    }, _.MEDIA_QUERIES.LT.SM, {
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
    }, _.MEDIA_QUERIES.LT.SM, {
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
exports.FORM = FORM;