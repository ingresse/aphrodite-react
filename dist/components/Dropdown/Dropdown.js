"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropdownStyled = _interopRequireDefault(require("./DropdownStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Component it self */
var Dropdown = (0, _react.forwardRef)(function (props, ref) {
  /**
   * Properties values
   */
  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      toggleBlock = props.toggleBlock,
      width = props.width,
      center = props.center,
      up = props.up,
      right = props.right,
      left = props.left,
      thin = props.thin,
      opened = props.opened;
  /**
   * State values
   */

  var _useState = (0, _react.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(opened),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      unmounted = _useState6[0],
      setUnmounted = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      activeTimer = _useState8[0],
      setActiveTimer = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      visibleTimer = _useState10[0],
      setVisibleTimer = _useState10[1];
  /**
   * State reference
   */


  var dropdownRef = (0, _react.useRef)(null);
  /**
   * Listen to
   */

  (0, _react.useEffect)(function () {
    if (!opened) {
      handleClose();
      return;
    }

    if (opened || active) {
      handleOpen();
    }
  }, [opened]);
  /**
   * Mount
   */

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClose);
    return removeClickListener;
  }, []);
  /**
   * Remove click listener
   */

  function removeClickListener() {
    setUnmounted(true);
    document.removeEventListener('click', handleClose);
  }
  /**
   * Handle with Dropdown close event
   *
   * @param {object} evt - DOM click event
   */


  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && dropdownRef && dropdownRef.current && dropdownRef.current.contains(evt.target)) {
      return;
    }

    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
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

      setActive(true);
    }, 50));
  }
  /**
   * Toggle visibility handler
   *
   * @param {object} evt - DOM click event
   */


  function handleToggle(evt) {
    if (visible && !opened) {
      return handleClose();
    }

    handleOpen(evt);
  }
  /**
   * Render
   */


  return _react.default.createElement(_DropdownStyled.default, {
    center: center,
    up: up,
    right: right,
    left: left,
    thin: thin,
    toggleBlock: toggleBlock || center,
    contentWidth: width,
    ref: dropdownRef,
    className: "aph-dropdown ".concat(className || '')
  }, !toggle ? null : _react.default.createElement("span", {
    role: "button",
    onClick: handleToggle,
    className: "aph-dropdown__toggle"
  }, toggle), !visible ? null : _react.default.createElement("div", {
    className: "aph-dropdown__content".concat(active ? ' active' : '').concat(visible ? ' visible' : ''),
    onClick: function onClick() {
      return handleClose();
    }
  }, children));
});
/* Component Properties */

Dropdown.defaultProps = {
  className: '',
  toggle: '',
  opened: false,
  width: '220px',
  thin: false,
  up: false,
  right: false,
  left: true
};
/* Component Properties Types */

Dropdown.propTypes = {
  className: _propTypes.default.string,
  toggle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  opened: _propTypes.default.bool,
  width: _propTypes.default.string,
  thin: _propTypes.default.bool,
  up: _propTypes.default.bool,
  right: _propTypes.default.bool,
  left: _propTypes.default.bool
};
/* Exporting */

var _default = Dropdown;
exports.default = _default;