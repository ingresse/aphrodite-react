"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphListGroup =
/*#__PURE__*/
(0, _reactEmotion.default)('div', {
  target: "ey9rber0"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    padding: props.noSideBorders ? '1px 0' : '1px',
    margin: 0,
    listStyle: 'none',
    borderRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + _constants.GRID.UNIT,
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n        ") : "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n            inset -1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n        "),
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        "),
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            ")
      }
    },
    '.aph-list__header': {
      backgroundColor: _constants.COLORS.DARK_SMOKE
    },
    '.aph-list__item': {
      backgroundColor: _constants.COLORS.SMOKE
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n                ")
        }
      }
    },
    'div:last-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:last-of-type': {
          marginBottom: '-1px',
          borderBottomRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderBottomLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT
        }
      }
    }
  }, props.styles);
});
/* Component */

var ListGroup = function ListGroup(props) {
  return _react.default.createElement(AphListGroup, _extends({}, props, {
    className: "aph-list-group ".concat(props.className || '')
  }), props.children);
};
/* Exporting */


var _default = ListGroup;
exports.default = _default;