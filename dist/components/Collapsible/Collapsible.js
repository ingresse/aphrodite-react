"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _ = require("../");

var _CollapsibleChildrenStyled = _interopRequireDefault(require("./CollapsibleChildrenStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Component Itself */
var Collapsible = function Collapsible(props) {
  var header = props.header,
      headerProps = props.headerProps,
      children = props.children,
      disabled = props.disabled,
      delay = props.delay;
  var wrapperRef = (0, _react.useRef)(null);
  var wrapperContentRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(props.opened || false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      openTimer = _useState4[0],
      setOpenTimer = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      closeTimer = _useState6[0],
      setCloseTimer = _useState6[1];

  var _useState7 = (0, _react.useState)(Object.assign({
    transitionDuration: props.delay + 's'
  }, props.opened ? null : {
    maxHeight: 0
  })),
      _useState8 = _slicedToArray(_useState7, 2),
      styles = _useState8[0],
      setStyles = _useState8[1];
  /* Custom Styles */


  var headerStyles = {
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    color: disabled ? _constants.COLORS.DARK_GREY : _constants.COLORS.PRIMARY
  };
  /**
   * Handle with Collapsible Opening event
   */

  function handleOpen() {
    var openStyles = _objectSpread({}, styles, {
      maxHeight: 0,
      display: 'block'
    });

    clearTimeout(closeTimer);
    setStyles(openStyles);
    setTimeout(function () {
      setStyles(_objectSpread({}, openStyles, {
        maxHeight: wrapperContentRef.current.clientHeight
      }));
      clearTimeout(openTimer);
      setOpenTimer(setTimeout(function () {
        setStyles(_objectSpread({}, openStyles, {
          maxHeight: null
        }));
      }, 250));
    }, 1);
  }
  /**
   * Handle with Collapsible Closing event
   */


  function handleClose() {
    var closeStyles = _objectSpread({}, styles, {
      maxHeight: wrapperContentRef.current.clientHeight
    });

    clearTimeout(openTimer);
    setStyles(closeStyles);
    setTimeout(function () {
      setStyles(_objectSpread({}, closeStyles, {
        maxHeight: 0
      }));
      clearTimeout(closeTimer);
      setCloseTimer(setTimeout(function () {
        setStyles(_objectSpread({}, closeStyles, {
          display: 'none'
        }));
      }, 260));
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

  return _react.default.createElement(_.Card, _extends({}, props, {
    className: "aph-collapsible ".concat(opened ? 'active' : ''),
    styles: Object.assign({
      position: 'relative',
      overflow: 'hidden'
    }, props.styles, !opened ? {} : {
      padding: '10px 10px 0'
    })
  }), !header ? null : _react.default.createElement(_.H3, _extends({}, headerProps, {
    styles: headerStyles,
    onClick: toggle,
    role: "button"
  }), header), _react.default.createElement(_CollapsibleChildrenStyled.default, {
    ref: wrapperRef,
    styles: styles,
    visible: opened
  }, _react.default.createElement("div", {
    ref: wrapperContentRef
  }, children)));
};
/* Default Properties */


Collapsible.defaultProps = {
  opened: false,
  delay: 0.25,
  styles: {},
  childrenStyles: {}
};
/* Properties Types */

Collapsible.propTypes = {
  opened: _propTypes.default.bool,
  delay: _propTypes.default.number,
  styles: _propTypes.default.object,
  childrenStyles: _propTypes.default.object
};
/* Exporting */

var _default = Collapsible;
exports.default = _default;