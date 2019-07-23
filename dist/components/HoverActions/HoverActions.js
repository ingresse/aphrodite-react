"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HoverActionsStyled = _interopRequireDefault(require("./HoverActionsStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
function HoverActions(props) {
  /**
   * Inherit props
   */
  var actions = props.actions,
      className = props.className,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["actions", "className", "children"]);
  /**
   * Render
   */


  return _react.default.createElement(_HoverActionsStyled.default, _extends({
    hasActions: actions ? true : false,
    className: "aph-hover-actions " + (className || '')
  }, rest), _react.default.createElement("span", {
    className: "aph-hover-actions__content"
  }, children), _react.default.createElement("span", {
    className: "aph-hover-actions__items"
  }, actions));
}
/* Default Props */


HoverActions.defaultProps = {
  actions: undefined,
  styles: {}
};
/* Properties Types */

HoverActions.propTypes = {
  /**
   * On hover, display components, such as `HoverActionsItem`
   */
  actions: _propTypes.default.any,

  /**
   * Custom Styles
   */
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = HoverActions;
exports.default = _default;