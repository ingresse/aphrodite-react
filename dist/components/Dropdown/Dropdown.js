"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _DropdownStyled = require("./DropdownStyled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Component Itself */
var Dropdown = (0, _react.forwardRef)(function (props, ref) {
  var isVisible = props.isVisible,
      animationDuration = props.animationDuration,
      header = props.header,
      itemColor = props.itemColor,
      hover = props.hover,
      items = props.items,
      selectValue = props.selectValue;
  var dropDownContainerRef = (0, _react.useRef)(null);
  var style = {
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'visibility ' + animationDuration + 'ms'
  };
  return _react.default.createElement(_DropdownStyled.DropdowContainer, _extends({}, props, {
    style: style,
    ref: dropDownContainerRef
  }), header && _react.default.createElement(_DropdownStyled.DropdowHeader, null, header), _react.default.createElement(_DropdownStyled.DropdowContent, {
    color: itemColor,
    hover: hover
  }, items.map(function (item, index) {
    return _react.default.createElement("a", {
      key: index,
      value: item.value,
      href: "#0",
      className: "item",
      onClick: selectValue
    }, item.text);
  })));
});
/* Default Properties */

Dropdown.defaultProps = {
  isVisible: true,
  header: 'Digite ou selecione uma opção',
  items: [{
    text: 'Agora',
    value: '10/10/2019 12:00'
  }],
  hover: _utils.colors.get('ocean', 'crystal'),
  itemColor: _utils.colors.get('ocean', 'original'),
  selectValue: function selectValue(evt) {
    return console.log(evt.target.attributes[0].value);
  },
  animationDuration: 0.15
};
/* Properties Types */

Dropdown.propTypes = {
  isVisible: _propTypes.default.bool,
  header: _propTypes.default.string,
  items: _propTypes.default.array,
  hover: _propTypes.default.string,
  itemColor: _propTypes.default.string,
  selectValue: _propTypes.default.func,
  animationDuration: _propTypes.default.number
};
/* Exporting */

var _default = Dropdown;
exports.default = _default;