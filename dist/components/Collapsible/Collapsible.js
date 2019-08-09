"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _ = require("../");

var _CollapsibleChildrenStyled = _interopRequireDefault(require("./CollapsibleChildrenStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Component Itself */
var Collapsible = (0, _react.forwardRef)(function (props, ref) {
  var header = props.header,
      headerProps = props.headerProps,
      children = props.children,
      disabled = props.disabled,
      delay = props.delay,
      hover = props.hover,
      icon = props.icon,
      iconSize = props.iconSize;
  var timerDelay = delay * 1000;
  var wrapperRef = (0, _react.useRef)(null);
  var wrapperContentRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(props.opened || false),
      opened = _useState[0],
      setOpened = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      openTimer = _useState2[0],
      setOpenTimer = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      closeTimer = _useState3[0],
      setCloseTimer = _useState3[1];

  var _useState4 = (0, _react.useState)(Object.assign({
    transitionDuration: props.delay + 's'
  }, props.opened ? null : {
    maxHeight: 0
  })),
      styles = _useState4[0],
      setStyles = _useState4[1];
  /* Custom Styles */


  var headerStyles = Object.assign({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '-10px',
    padding: headerProps && headerProps.lg ? '15px 10px' : '10px',
    cursor: 'pointer',
    color: _utils.colors.get(disabled ? 'mercury' : 'secondary')
  }, headerProps && headerProps.styles ? headerProps.styles : {});
  /* Header Title */

  var HeaderTitle = headerProps && headerProps.lg ? _.H2 : _.H3;
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
      }, timerDelay));
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
      }, timerDelay + 10));
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
  /**
   * Unmount
   */


  (0, _react.useEffect)(function () {
    return function () {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);
  return _react.default.createElement(_.Card, _extends({}, props, {
    ref: ref,
    hover: true,
    className: "aph-collapsible " + (opened ? 'active' : ''),
    styles: Object.assign({
      position: 'relative',
      overflow: 'hidden'
    }, props.styles)
  }), !header ? null : _react.default.createElement(HeaderTitle, _extends({}, headerProps, {
    styles: Object.assign(headerStyles, {
      paddingRight: !icon ? null : iconSize + "px"
    }),
    onClick: toggle,
    role: "button"
  }), header, !icon ? null : _react.default.createElement(_.Icon, {
    slug: "arrow-down",
    size: iconSize,
    color: _utils.colors.get('mercury', 'light'),
    styles: {
      position: 'absolute',
      right: 0,
      transform: opened ? 'rotate(180deg)' : 'initial',
      transition: "transform " + delay + "s linear"
    }
  })), _react.default.createElement(_CollapsibleChildrenStyled.default, {
    ref: wrapperRef,
    styles: styles,
    visible: opened
  }, _react.default.createElement("div", {
    ref: wrapperContentRef
  }, children)));
});
/* Default Properties */

Collapsible.defaultProps = {
  opened: false,
  hover: false,
  delay: 0.35,
  styles: {},
  childrenStyles: {},
  icon: true,
  iconSize: 40,
  header: '',
  headerProps: null
};
/* Properties Types */

Collapsible.propTypes = {
  opened: _propTypes.default.bool,
  hover: _propTypes.default.bool,
  delay: _propTypes.default.number,
  icon: _propTypes.default.bool,
  iconSize: _propTypes.default.number,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  childrenStyles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  header: _propTypes.default.any,
  headerProps: _propTypes.default.object
};
/* Exporting */

var _default = Collapsible;
exports.default = _default;