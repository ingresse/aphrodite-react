"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _ModalStyles = require("./ModalStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Modal(props) {
  var title = props.title,
      children = props.children,
      footer = props.footer,
      opened = props.opened,
      animationDuration = props.animationDuration;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      render = _useState2[0],
      setRender = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!opened) {
      setTimeout(function () {
        setRender(opened);
      }, animationDuration);
      return;
    }

    setRender(opened);
  }, [opened]);
  var style = {
    visibility: opened ? 'visible' : 'hidden',
    animationDuration: animationDuration + 'ms',
    transition: 'visibility ' + animationDuration + 'ms'
  };
  return render && _react.default.createElement(_ModalStyles.ModalContainer, {
    style: style,
    className: "".concat(opened ? 'modal-fade-enter' : 'modal-fade-leave')
  }, _react.default.createElement(_ModalStyles.Mask, null), _react.default.createElement(_ModalStyles.ModalDialog, null, _react.default.createElement(_.H1, {
    center: true,
    bold: true
  }, title), children, _react.default.createElement(_.ActionBar, {
    styles: {
      padding: '10px 0',
      minHeight: 'initial'
    },
    visible: true
  }, footer && footer)));
}
/* Default props */


Modal.defaultProps = {
  title: 'Modal title',
  opened: false,
  animationDuration: '100'
};
/* Prop Types */

Modal.propTypes = {
  title: _propTypes.default.string,
  opened: _propTypes.default.bool,
  animationDuration: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;