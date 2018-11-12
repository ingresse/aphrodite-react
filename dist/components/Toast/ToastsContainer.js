"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _reactToastify = require("react-toastify");

require("react-toastify/scss/main.scss");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = require('tinycolor2');
/* Styles */


/* Component */
var ToastsContainer = function ToastsContainer() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: {}
  };
  var styles = props.styles || {};
  var AphToastsContainer =
  /*#__PURE__*/
  (0, _reactEmotion.default)('div', {
    target: "ej5e3vp0"
  })(_objectSpread({}, styles, _defineProperty({
    zIndex: styles.zIndex || 1000,
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
        color: _constants.COLORS.BLACK
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
          color: _constants.COLORS.BLACK,
          fontSize: '20px',
          lineHeight: '16px',
          textAlign: 'center'
        }
      },
      '.Toastify__progress-bar': {
        height: '2px',
        background: _constants.COLORS.BLACK
      },
      '&.Toastify__toast--success': {
        color: _constants.COLORS.SUCCESS,
        '.Toastify__close-button--success:before': {
          color: _constants.COLORS.SUCCESS
        },
        '.Toastify__progress-bar--success': {
          background: _constants.COLORS.SUCCESS
        }
      },
      '&.Toastify__toast--info': {
        color: _constants.COLORS.INFO,
        '.Toastify__close-button--info:before': {
          color: _constants.COLORS.INFO
        },
        '.Toastify__progress-bar--info': {
          background: _constants.COLORS.INFO
        }
      },
      '&.Toastify__toast--warning': {
        color: _constants.COLORS.WARNING,
        '.Toastify__close-button--warning:before': {
          color: _constants.COLORS.WARNING
        },
        '.Toastify__progress-bar--warning': {
          background: _constants.COLORS.WARNING
        }
      },
      '&.Toastify__toast--error': {
        color: _constants.COLORS.ERROR,
        '.Toastify__close-button--error:before': {
          color: _constants.COLORS.ERROR
        },
        '.Toastify__progress-bar--error': {
          background: _constants.COLORS.ERROR
        }
      },
      '&.Toastify__toast--inverse': {
        color: _constants.COLORS.WHITE,
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
            color: _constants.COLORS.WHITE
          }
        },
        '.Toastify__progress-bar': {
          background: _constants.COLORS.WHITE
        }
      }
    }
  }, _constants.MEDIA_QUERIES.LT.SM, {
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
      borderRadius: 0
    }
  })));
  return _react.default.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, _react.default.createElement(_reactToastify.ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || false
  })));
};

var _default = ToastsContainer;
exports.default = _default;