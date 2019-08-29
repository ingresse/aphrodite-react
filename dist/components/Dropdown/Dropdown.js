"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropdownStyled = _interopRequireDefault(require("./DropdownStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* Packages */

/* Components */

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
      opened = props.opened,
      styles = props.styles;
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


  var dropdownRef = (0, _react.useRef)(null);
  /**
   * Add click listener
   */

  function addClickListener() {
    document.addEventListener('click', handleClose);
  }
  /**
   * Remove click listener
   */


  function removeClickListener() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
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
      removeClickListener();
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
      addClickListener();
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
   * Listen to `opened` changes
   */


  (0, _react.useEffect)(function () {
    removeClickListener();

    if (!opened) {
      handleClose();
      return;
    }

    if (opened || active) {
      addClickListener();
      handleOpen();
    }

    return function cleanup() {
      removeClickListener();
    };
  }, [opened]);
  /**
   * Mount
   */

  (0, _react.useEffect)(function () {
    return function cleanup() {
      removeClickListener();
    };
  }, []);
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
    styles: styles,
    ref: dropdownRef,
    className: "aph-dropdown " + (className || '')
  }, !toggle ? null : _react.default.createElement("span", {
    role: "button",
    onClick: handleToggle,
    className: "aph-dropdown__toggle"
  }, toggle), !visible ? null : _react.default.createElement("div", {
    className: "aph-dropdown__content" + (active ? ' active' : '') + (visible ? ' visible' : ''),
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
  left: true,
  styles: {}
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
  left: _propTypes.default.bool,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Dropdown;
exports.default = _default;