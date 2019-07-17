"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _ModalStyles = require("./ModalStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* Helpers e Components */

/* Styled components */
function Modal(props) {
  var title = props.title,
      children = props.children,
      footer = props.footer,
      opened = props.opened,
      animationDuration = props.animationDuration;

  var _useState = (0, _react.useState)(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  (0, _react.useEffect)(function () {
    if (!opened) {
      setTimeout(function () {
        setMounted(opened);
      }, animationDuration);
      return;
    }

    setMounted(opened);
  }, [opened]);
  var style = {
    visibility: opened ? 'visible' : 'hidden',
    animationDuration: animationDuration + 'ms',
    transition: 'visibility ' + animationDuration + 'ms'
  };
  return mounted && _react.default.createElement(_ModalStyles.ModalContainer, {
    style: style,
    className: "" + (opened ? 'modal-fade-enter' : 'modal-fade-leave')
  }, _react.default.createElement(_ModalStyles.Mask, null), _react.default.createElement(_ModalStyles.ModalDialog, null, title && _react.default.createElement(_.H1, {
    center: true,
    bold: true
  }, title), children, footer && _react.default.createElement(_.ActionBar, {
    styles: {
      padding: '10px 0',
      minHeight: 'initial'
    },
    visible: true
  }, footer)));
}
/* Default props */


Modal.defaultProps = {
  title: '',
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