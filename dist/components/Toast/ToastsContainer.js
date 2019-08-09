"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

require("react-toastify/scss/main.scss");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = require('tinycolor2');
/* Styles */


/* Component */
var ToastsContainer = function ToastsContainer(props) {
  var _objectSpread2;

  if (props === void 0) {
    props = {
      styles: {}
    };
  }

  var styles = props.styles || {};
  var AphToastsContainer = (
  /*#__PURE__*/
  0, _styledBase.default)('div', {
    target: "ej5e3vp0"
  })(_objectSpread({}, styles, (_objectSpread2 = {
    zIndex: styles.zIndex || _constants.ZINDEX.TOAST,
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
  }, _objectSpread2[_constants.MEDIA_QUERIES.LT.SM] = {
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
  }, _objectSpread2)), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvYXN0L1RvYXN0c0NvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9Ub2FzdHNDb250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY29uc3QgY29sb3IgPSByZXF1aXJlKCd0aW55Y29sb3IyJyk7XG5cbi8qIFN0eWxlcyAqL1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9zY3NzL21haW4uc2Nzcyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBNRURJQV9RVUVSSUVTLCBTQ1JFRU5fU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgVG9hc3RzQ29udGFpbmVyID0gKHByb3BzID0geyBzdHlsZXM6IHt9IH0pID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBwcm9wcy5zdHlsZXMgfHwge307XG5cbiAgICBjb25zdCBBcGhUb2FzdHNDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICB6SW5kZXggIDogKHN0eWxlcy56SW5kZXggfHwgWklOREVYLlRPQVNUKSxcbiAgICAgICAgcG9zaXRpb246IChzdHlsZXMucG9zaXRpb24gfHwgJ2ZpeGVkJyksXG4gICAgICAgIHRvcCAgICAgOiAodHlwZW9mIHN0eWxlcy50b3AgPT09ICdzdHJpbmcnID8gc3R5bGVzLnRvcCA6ICcyMHB4JyksXG4gICAgICAgIHJpZ2h0ICAgOiAodHlwZW9mIHN0eWxlcy5yaWdodCA9PT0gJ3N0cmluZycgPyBzdHlsZXMucmlnaHQgOiAnMjBweCcpLFxuXG4gICAgICAgICcuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcic6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgdG9wICAgICA6ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aCAgIDogJzEwMCUnLFxuICAgICAgICAgICAgbWluV2lkdGg6ICczODBweCcsXG4gICAgICAgICAgICBwYWRkaW5nIDogMCxcbiAgICAgICAgfSxcblxuICAgICAgICAnLlRvYXN0aWZ5X190b2FzdCc6IHtcbiAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzAgMCAxMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmcgICAgIDogJzE1cHggNDBweCAxNXB4IDIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZCAgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KScsXG4gICAgICAgICAgICBib3hTaGFkb3cgICA6ICcwIDAgNHB4IHJnYmEoNDIsIDQyLCA0MiwgMC4yNSknLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgIG1pbkhlaWdodCAgIDogJzUwcHgnLFxuICAgICAgICAgICAgbWF4V2lkdGggICAgOiAnMzgwcHgnLFxuICAgICAgICAgICAgd2lkdGggICAgICAgOiAnMTAwJScsXG5cbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgICAgICAgZm9udFNpemUgIDogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG5cbiAgICAgICAgICAgICcmLS1kZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuQkxBQ0ssXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24nOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wICAgICA6ICdjYWxjKDUwJSAtIDE1cHgpJyxcbiAgICAgICAgICAgICAgICByaWdodCAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAnMzBweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICA6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW4gIDogJzAgIWltcG9ydGFudCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA6IDEsXG5cbiAgICAgICAgICAgICAgICBjb2xvciA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG5cbiAgICAgICAgICAgICAgICBvdXRsaW5lICAgICA6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyICAgICAgOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdyAgIDogJ25vbmUnLFxuXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcblxuICAgICAgICAgICAgICAgIHdpbGxUcmFuc2Zvcm06ICdiYWNrZ3JvdW5kLCBib3gtc2hhZG93JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uICAgOiAnYmFja2dyb3VuZCAuMjVzIGxpbmVhciwgYm94LXNoYWRvdyAuMjVzIGxpbmVhcicsXG5cbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDIsIDQyLCA0MiwgMC4wNSknLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnJjphY3RpdmUsJjpmb2N1cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93IDogJ2luc2V0IDFweCAxcHggNHB4IHJnYmEoNDIsIDQyLCA0MiwgMC4xNSknLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjE1KScsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAnXCLDl1wiJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yICAgOiBDT0xPUlMuQkxBQ0ssXG5cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXInOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgIDogJzJweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLkJMQUNLLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYuVG9hc3RpZnlfX3RvYXN0LS1zdWNjZXNzJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuU1VDQ0VTUyxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tc3VjY2VzczpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNzJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWluZm8nOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5JTkZPLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1pbmZvOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5JTkZPLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm8nOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5JTkZPLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLlRvYXN0aWZ5X190b2FzdC0td2FybmluZyc6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLldBUk5JTkcsXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLXdhcm5pbmc6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLldBUk5JTkcsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td2FybmluZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLldBUk5JTkcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYuVG9hc3RpZnlfX3RvYXN0LS1lcnJvcic6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLkVSUk9SLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1lcnJvcjpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuRVJST1IsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWludmVyc2UnOiB7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogQ09MT1JTLldISVRFLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQ1LCA0NSwgNDUsIDAuOTUpJyxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAnJjphY3RpdmUsJjpmb2N1cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdyA6ICdpbnNldCAxcHggMXB4IDRweCByZ2IoNDIsIDQyLCA0MiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDIsIDQyLCA0MiwgMC41KScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5XSElURSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuV0hJVEUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIHdpZHRoIDogJzEwMCUnLFxuICAgICAgICAgICAgdG9wICAgOiAnYXV0bycsXG4gICAgICAgICAgICByaWdodCA6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0ICA6IDAsXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcic6IHtcbiAgICAgICAgICAgICAgICB0b3AgICAgOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgcmlnaHQgIDogMCxcbiAgICAgICAgICAgICAgICBib3R0b20gOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQgICA6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcblxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3RvYXN0Jzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nICAgICA6ICcyMHB4IDQwcHggMjBweCAyMHB4JyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3cgICA6ICcwIDAgMnB4IDAgcmdiYSg0MiwgNDIsIDQyLCAwLjIpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggICAgOiAnMTAwJScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoVG9hc3RzQ29udGFpbmVyIGNsYXNzTmFtZT1cImFwaC10b2FzdHMtY29udGFpbmVyXCIgc3R5bGVzPXtwcm9wcy5zdHlsZXN9PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17cHJvcHMuY2xvc2VPbkNsaWNrIHx8IGZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhUb2FzdHNDb250YWluZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RzQ29udGFpbmVyO1xuIl19 */");
  return _react.default.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, _react.default.createElement(_reactToastify.ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || false
  })));
};

var _default = ToastsContainer;
exports.default = _default;