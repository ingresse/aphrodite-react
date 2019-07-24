"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Core Packages */

/* Utilites */

/* Helper Components */

/* Component Itself */
function IconExample(props) {
  var color = props.color,
      slug = props.slug,
      markup = props.markup,
      children = props.children;
  return _react.default.createElement(_.HoverActions, {
    styled: true,
    styles: {
      display: 'block',
      width: 'auto'
    },
    actions: _react.default.createElement(_react.default.Fragment, null, !slug ? null : _react.default.createElement(_.Clipboard, {
      styled: true,
      "data-clipboard-text": slug
    }, "Copy Slug"), _react.default.createElement(_.Clipboard, {
      styled: true,
      "data-clipboard-text": markup
    }, "Copy Markup"))
  }, _react.default.createElement(_.Card, {
    hover: true,
    boxShadow: true,
    styles: {
      margin: '0 0 20px',
      backgroundColor: color === 'translucid' ? _utils.colors.get('oil') : null
    }
  }, _react.default.createElement(_.Row, {
    vertical: "middle",
    horizontal: "center"
  }, _react.default.createElement(_.Col, {
    xs: !slug ? 12 : 4,
    sm: !slug ? 12 : 4,
    lg: !slug ? 12 : 3,
    styles: {
      textAlign: 'center'
    }
  }, children), !slug ? null : _react.default.createElement(_.Col, {
    xs: 8,
    sm: 8,
    lg: 9
  }, _react.default.createElement(_.Text, {
    bold: true,
    small: true,
    center: true,
    helper: true
  }, slug)))));
}
/* Exporting */


var _default = IconExample;
exports.default = _default;