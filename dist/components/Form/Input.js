"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _constants = require("../../constants");

var _IconCheck = _interopRequireDefault(require("../Icons/IconCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref = {
  position: 'relative',
  display: 'block',
  width: '100%'
};

/* Component it self */
var Input = function Input(props) {
  var style = props.style,
      type = props.type;
  var AphFormControl =
  /*#__PURE__*/
  (0, _reactEmotion.default)('input', {
    target: "eaa7cbg0"
  })(function (props) {
    return Object.assign({}, _constants.FORM.STYLES.DEFAULT, _objectSpread({}, style));
  });

  if (type !== 'checkbox' && type !== 'radio') {
    return _react.default.createElement(AphFormControl, props);
  }

  var AphFormMask = null;
  var AphFormWrapper = null;
  var radio = {};

  var icon = _constants.ICONS.encodeSvg(_react.default.createElement(_IconCheck.default, {
    size: 20,
    color: props.color || _constants.COLORS.PRIMARY
  }));

  var _props = Object.assign({}, props);

  delete _props.children;
  delete _props.className;

  if (type === 'radio') {
    radio.borderRadius = '50%';
  }

  AphFormWrapper =
  /*#__PURE__*/
  (0, _reactEmotion.default)('div', {
    target: "eaa7cbg1"
  })(_ref);
  AphFormMask =
  /*#__PURE__*/
  (0, _reactEmotion.default)('label', {
    target: "eaa7cbg2"
  })(function (props) {
    return Object.assign({}, _constants.FORM.STYLES.CHECKBOX_MASK, _objectSpread({
      '&:before': Object.assign(_constants.FORM.STYLES.DEFAULT, _constants.FORM.STYLES.CHECKBOX_MASK['&:before'], radio)
    }, props.labelStyle));
  });
  AphFormControl =
  /*#__PURE__*/
  (0, _reactEmotion.default)('input', {
    target: "eaa7cbg3"
  })(function (props) {
    return Object.assign({}, _constants.FORM.STYLES.CHECKBOX, _objectSpread({
      '&:checked + .aph-form__control__mask:before': {
        backgroundImage: "url(".concat(icon, ")")
      }
    }, style));
  });
  return _react.default.createElement(AphFormWrapper, null, _react.default.createElement(AphFormControl, _extends({}, _props, {
    className: "aph-form__control"
  })), _react.default.createElement(AphFormMask, {
    htmlFor: props.id,
    className: "aph-form__control__mask ".concat(props.className || '')
  }, props.children));
};
/* Exporting */


var _default = Input;
exports.default = _default;