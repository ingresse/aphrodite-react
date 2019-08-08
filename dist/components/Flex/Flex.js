"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FlexStyles = _interopRequireDefault(require("./FlexStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
function Flex(props) {
  /**
   * Inherit props,
   */
  var className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);
  /**
   * Render
   */


  return _react.default.createElement(_FlexStyles.default, _extends({}, rest, {
    className: "aph-flex " + className
  }));
}
/* Component Props */


Flex.defaultProps = {
  /**
   * Additional className
   */
  className: '',

  /**
   * Flex Flow
   */
  flexFlow: 'column',

  /**
   * Alias to `align-items`
   */
  flexAlign: '',

  /**
   * Alias to `align-items: stretch`
   */
  flexStretch: false,

  /**
   * Alias to `justify-content`
   */
  flexJustify: 'start',

  /**
   * Will apply this to the component styles:
   * ```
   * height        : auto;
   * flex          : 1 1 auto;
   * flex-direction: column;
   * ```
   */
  flexItem: false,

  /**
   * Customized styles
   */
  styles: {}
};
/* Component properties types */

Flex.propTypes = {
  className: _propTypes.default.string,
  flexFlow: _propTypes.default.string,
  flexAlign: _propTypes.default.string,
  flexStretch: _propTypes.default.bool,
  flexJustify: _propTypes.default.string,
  flexItem: _propTypes.default.bool,
  styles: _propTypes.default.any
};
/* Exporting */

var _default = Flex;
exports.default = _default;