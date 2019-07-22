"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _ModalStyles = _interopRequireDefault(require("./ModalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
var Modal = (0, _react.forwardRef)(function (props, ref) {
  /**
   * Global props
   */
  var _document = document,
      addEventListener = _document.addEventListener,
      removeEventListener = _document.removeEventListener;
  /**
   * Inherit Props
   */

  var title = props.title,
      header = props.header,
      children = props.children,
      footer = props.footer,
      footerProps = props.footerProps,
      className = props.className,
      styles = props.styles,
      opened = props.opened,
      openedCallback = props.openedCallback,
      closeOnEscape = props.closeOnEscape,
      rest = _objectWithoutPropertiesLoose(props, ["title", "header", "children", "footer", "footerProps", "className", "styles", "opened", "openedCallback", "closeOnEscape"]);
  /**
   * State values
   */


  var _useState = (0, _react.useState)(opened),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0, _react.useState)(opened),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      unmounted = _useState3[0],
      setUnmounted = _useState3[1];

  var _useState4 = (0, _react.useState)(null),
      activeTimer = _useState4[0],
      setActiveTimer = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      visibleTimer = _useState5[0],
      setVisibleTimer = _useState5[1];
  /**
   * State reference
   */


  var modalRef = (0, _react.useRef)(null);
  /**
   * Watch for `opened` prop changes
   */

  (0, _react.useEffect)(function () {
    if (!opened) {
      handleClose();
      unlisten();
      return;
    }

    if (opened || active) {
      handleOpen();
    }
  }, [opened]);
  /**
   * Handle with close by escape key
   *
   * @param {object} evt - DOM click event
   */

  function handleCloseOnScape(evt) {
    var _ref = evt || {},
        key = _ref.key,
        keyCode = _ref.keyCode,
        target = _ref.target;

    var _ref2 = target || {},
        nodeName = _ref2.nodeName;

    var isEscPressed = key === 'Escape' || key === 'Esc' || keyCode === 27;

    if (isEscPressed) {
      handleClose();
      return false;
    }
  }
  /**
   * Add Event Listeners to handle with modal visibility
   */


  function listen() {
    addEventListener('click', handleClose);

    if (closeOnEscape) {
      addEventListener('keydown', handleCloseOnScape);
    }
  }
  /**
   * Remove Event Listeners
   */


  function unlisten() {
    removeEventListener('click', handleClose);
    removeEventListener('keydown', handleCloseOnScape);
  }
  /**
   * Handle with Dropdown close event
   *
   * @param {object} evt - DOM click event
   */


  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && modalRef && modalRef.current && modalRef.current.contains(evt.target)) {
      return;
    }

    unlisten();
    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
      openedCallback(false);
    }, 250));
  }
  /**
   * Handle with Dropdown open event
   *
   * @param {object} evt - DOM click event
   */


  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (unmounted) {
      return;
    }

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      modalRef.current.focus();
      setActive(true);
      listen();
    }, 50));
  }
  /**
   * Render
   */


  return _react.default.createElement(_ModalStyles.default, _extends({}, rest, {
    ref: modalRef,
    open: true,
    opened: active && visible,
    styles: styles,
    hasFooter: footer || Object.keys(footerProps).length,
    className: "aph-modal " + (className || '') + (active ? ' active' : '') + (visible ? ' visible' : '')
  }), !active || !visible ? null : _react.default.createElement(_react.default.Fragment, null, title && _react.default.createElement(_.H1, {
    className: "aph-modal__title",
    bold: true,
    center: true
  }, title), header && _react.default.createElement("header", {
    className: "aph-modal__header"
  }, header), _react.default.createElement("section", {
    className: "aph-modal__content"
  }, children), _react.default.createElement(_.ActionBar, _extends({}, footerProps, {
    className: "aph-modal__footer " + (footerProps.className || ''),
    visible: footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false),
    styles: _objectSpread({}, footerProps.styles, {
      padding: '10px 0',
      minHeight: 'initial'
    })
  }), footer)));
});
/* Default props */

Modal.defaultProps = {
  title: '',
  header: undefined,
  opened: false,
  openedCallback: function openedCallback() {},
  closeOnEscape: false,
  footerProps: {},
  styles: {}
};
/* Prop Types */

Modal.propTypes = {
  title: _propTypes.default.string,
  header: _propTypes.default.any,
  opened: _propTypes.default.bool,
  openedCallback: _propTypes.default.func,
  closeOnEscape: _propTypes.default.bool
};
/* Exporting */

var _default = Modal;
exports.default = _default;