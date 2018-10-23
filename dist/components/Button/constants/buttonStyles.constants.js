"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUTTON_STYLES = void 0;

/* Button Styles */
var BUTTON_STYLES = {
  display: 'inline-block',
  width: 'auto',
  margin: 0,
  padding: '0 20px',
  cursor: 'pointer',
  outline: 0,
  border: '1px solid',
  fontSize: '16px',
  fontWeight: 500,
  minWidth: '140px',
  borderRadius: '25px',
  textTransform: 'uppercase',
  userSelect: 'none',
  transition: 'background .15s linear, border-color .15s linear, text-shadow .15s linear, color .15s linear',
  '&:hover,&:focus,&:active,&:disabled': {
    outline: 0
  }
};
exports.BUTTON_STYLES = BUTTON_STYLES;