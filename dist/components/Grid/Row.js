"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Sizes */
var MARGIN = '-' + _constants.GRID.COLUMNS_PADDING + _constants.GRID.UNIT;
/* Wrapper Styles */

var RowWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e134hck50"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: MARGIN,
    marginLeft: MARGIN,
    WebkitBoxPack: props.alignment || null,
    MsFlexPack: props.alignment || null,
    justifyContent: props.alignment || null,
    '&:before, &:after': {
      clear: 'both'
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvUm93LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZbUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU2l6ZXMgKi9cbmNvbnN0IE1BUkdJTiA9ICgnLScgKyBHUklELkNPTFVNTlNfUEFERElORyArIEdSSUQuVU5JVCk7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBSb3dXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+ICh7XG4gICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uICAgICA6ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheSAgICAgIDogJ2ZsZXgnLFxuICAgIGZsZXggICAgICAgICA6ICcwIDEgYXV0bycsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleFdyYXAgICAgIDogJ3dyYXAnLFxuXG4gICAgbWFyZ2luUmlnaHQ6IE1BUkdJTixcbiAgICBtYXJnaW5MZWZ0IDogTUFSR0lOLFxuXG4gICAgV2Via2l0Qm94UGFjayA6IChwcm9wcy5hbGlnbm1lbnQgfHwgbnVsbCksXG4gICAgTXNGbGV4UGFjayAgICA6IChwcm9wcy5hbGlnbm1lbnQgfHwgbnVsbCksXG4gICAganVzdGlmeUNvbnRlbnQ6IChwcm9wcy5hbGlnbm1lbnQgfHwgbnVsbCksXG5cbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBSb3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvd1dyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1yb3cgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUm93V3JhcHBlcj5cbiAgICApO1xufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuUm93LnByb3BUeXBlcyA9IHtcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgYWxpZ25tZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlcyAgIDoge30sXG4gICAgYWxpZ25tZW50OiAnJyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUm93O1xuIl19 */");
/* Component */

var Row = function Row(props) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(RowWrapper, _extends({}, props, {
    className: "aph-row ".concat(className || '')
  }), children);
};
/* Properties Types */


Row.propTypes = {
  styles: _propTypes.default.object,
  alignment: _propTypes.default.string
};
/* Default Properties */

Row.defaultProps = {
  styles: {},
  alignment: ''
};
/* Exporting */

var _default = Row;
exports.default = _default;