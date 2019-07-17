"use strict";

exports.__esModule = true;
exports.FORM = void 0;

var _ = require("./");

var _DEFAULT, _CHECKBOX_MASK, _CHECKBOX_MASK_RIGHT;

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
      boxShadow: "inset 0 0 2px 0 " + _.COLORS.GET('DARK_BLACK', 0.3)
    }, _DEFAULT["borderRadius"] = _.RADIUS.XS, _DEFAULT["border"] = 0, _DEFAULT.outline = 0, _DEFAULT.transition = 'box-shadow 0.15s linear', _DEFAULT.willChange = 'box-shadow', _DEFAULT['&.error'] = {
      boxShadow: "inset 0 0 2px 0 " + _.COLORS.GET('RED', 0.3)
    }, _DEFAULT['&:focus, &:active, &.error:focus, &.error:active'] = {
      boxShadow: "inset 0 0 2px 0 " + _.COLORS.GET('DARK_BLACK', 0.6)
    }, _DEFAULT[_.MEDIA_QUERIES.LT.SM] = {
      height: '50px'
    }, _DEFAULT),
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
    CHECKBOX_MASK: (_CHECKBOX_MASK = {
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
    }, _CHECKBOX_MASK[_.MEDIA_QUERIES.LT.SM] = {
      paddingLeft: '40px',
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    }, _CHECKBOX_MASK),
    CHECKBOX_MASK_RIGHT: (_CHECKBOX_MASK_RIGHT = {
      paddingRight: '30px',
      paddingLeft: 0,
      '&:before': {
        right: 0,
        left: 'auto'
      }
    }, _CHECKBOX_MASK_RIGHT[_.MEDIA_QUERIES.LT.SM] = {
      paddingRight: '40px',
      paddingLeft: 0,
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    }, _CHECKBOX_MASK_RIGHT)
  }
};
exports.FORM = FORM;