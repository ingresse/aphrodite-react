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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

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
  }, _objectSpread2)), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvYXN0L1RvYXN0c0NvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9Ub2FzdHNDb250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY29uc3QgY29sb3IgPSByZXF1aXJlKCd0aW55Y29sb3IyJyk7XG5cbi8qIFN0eWxlcyAqL1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9zY3NzL21haW4uc2Nzcyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBNRURJQV9RVUVSSUVTLCBTQ1JFRU5fU0laRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IFRvYXN0c0NvbnRhaW5lciA9IChwcm9wcyA9IHsgc3R5bGVzOiB7fSB9KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gcHJvcHMuc3R5bGVzIHx8IHt9O1xuXG4gICAgY29uc3QgQXBoVG9hc3RzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgekluZGV4ICA6IChzdHlsZXMuekluZGV4IHx8IDEwMDApLFxuICAgICAgICBwb3NpdGlvbjogKHN0eWxlcy5wb3NpdGlvbiB8fCAnZml4ZWQnKSxcbiAgICAgICAgdG9wICAgICA6ICh0eXBlb2Ygc3R5bGVzLnRvcCA9PT0gJ3N0cmluZycgPyBzdHlsZXMudG9wIDogJzIwcHgnKSxcbiAgICAgICAgcmlnaHQgICA6ICh0eXBlb2Ygc3R5bGVzLnJpZ2h0ID09PSAnc3RyaW5nJyA/IHN0eWxlcy5yaWdodCA6ICcyMHB4JyksXG5cbiAgICAgICAgJy5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB0b3AgICAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQgICA6ICdhdXRvJyxcbiAgICAgICAgICAgIHdpZHRoICAgOiAnMTAwJScsXG4gICAgICAgICAgICBtaW5XaWR0aDogJzM4MHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmcgOiAwLFxuICAgICAgICB9LFxuXG4gICAgICAgICcuVG9hc3RpZnlfX3RvYXN0Jzoge1xuICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMCAwIDEwcHgnLFxuICAgICAgICAgICAgcGFkZGluZyAgICAgOiAnMTVweCA0MHB4IDE1cHggMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kICA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpJyxcbiAgICAgICAgICAgIGJveFNoYWRvdyAgIDogJzAgMCA0cHggcmdiYSg0MiwgNDIsIDQyLCAwLjI1KScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgbWluSGVpZ2h0ICAgOiAnNTBweCcsXG4gICAgICAgICAgICBtYXhXaWR0aCAgICA6ICczODBweCcsXG4gICAgICAgICAgICB3aWR0aCAgICAgICA6ICcxMDAlJyxcblxuICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICAgICAgICBmb250U2l6ZSAgOiAnMTZweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG5cbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcblxuICAgICAgICAgICAgJyYtLWRlZmF1bHQnOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5CTEFDSyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbic6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICB0b3AgICAgIDogJ2NhbGMoNTAlIC0gMTVweCknLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgd2lkdGggICA6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgIDogJzMwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbiAgOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDogMSxcblxuICAgICAgICAgICAgICAgIGNvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcblxuICAgICAgICAgICAgICAgIG91dGxpbmUgICAgIDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93ICAgOiAnbm9uZScsXG5cbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgICAgICAgICAgICAgd2lsbFRyYW5zZm9ybTogJ2JhY2tncm91bmQsIGJveC1zaGFkb3cnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gICA6ICdiYWNrZ3JvdW5kIC4yNXMgbGluZWFyLCBib3gtc2hhZG93IC4yNXMgbGluZWFyJyxcblxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjA1KScsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcmOmFjdGl2ZSwmOmZvY3VzJzoge1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3cgOiAnaW5zZXQgMXB4IDFweCA0cHggcmdiYSg0MiwgNDIsIDQyLCAwLjE1KScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuMTUpJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICdcIsOXXCInLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAgIDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICA6IENPTE9SUy5CTEFDSyxcblxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZSAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhcic6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiAnMnB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuQkxBQ0ssXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3MnOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5TVUNDRVNTLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1zdWNjZXNzOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXN1Y2Nlc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLlRvYXN0aWZ5X190b2FzdC0taW5mbyc6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLklORk8sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLWluZm86YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLklORk8sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0taW5mbyc6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLklORk8sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYuVG9hc3RpZnlfX3RvYXN0LS13YXJuaW5nJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuV0FSTklORyxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0td2FybmluZzpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWVycm9yJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuRVJST1IsXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLWVycm9yOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1lcnJvcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQ09MT1JTLkVSUk9SLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLlRvYXN0aWZ5X190b2FzdC0taW52ZXJzZSc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgOiBDT0xPUlMuV0hJVEUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDUsIDQ1LCA0NSwgMC45NSknLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uJzoge1xuICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuNSknLFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSwmOmZvY3VzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93IDogJ2luc2V0IDFweCAxcHggNHB4IHJnYig0MiwgNDIsIDQyKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLldISVRFLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXInOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5XSElURSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICAgICAgd2lkdGggOiAnMTAwJScsXG4gICAgICAgICAgICB0b3AgICA6ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0IDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQgIDogMCxcblxuICAgICAgICAgICAgJy5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyJzoge1xuICAgICAgICAgICAgICAgIHRvcCAgICA6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICByaWdodCAgOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbSA6IDAsXG4gICAgICAgICAgICAgICAgbGVmdCAgIDogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuXG4gICAgICAgICAgICAgICAgd2lkdGggICA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJy5Ub2FzdGlmeV9fdG9hc3QnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgIDogJzIwcHggNDBweCAyMHB4IDIwcHgnLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdyAgIDogJzAgMCAycHggMCByZ2JhKDQyLCA0MiwgNDIsIDAuMiknLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCAgICA6ICcxMDAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhUb2FzdHNDb250YWluZXIgY2xhc3NOYW1lPVwiYXBoLXRvYXN0cy1jb250YWluZXJcIiBzdHlsZXM9e3Byb3BzLnN0eWxlc30+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXtwcm9wcy5jbG9zZU9uQ2xpY2sgfHwgZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0FwaFRvYXN0c0NvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdHNDb250YWluZXI7XG4iXX0= */");
  return _react.default.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, _react.default.createElement(_reactToastify.ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || false
  })));
};

var _default = ToastsContainer;
exports.default = _default;