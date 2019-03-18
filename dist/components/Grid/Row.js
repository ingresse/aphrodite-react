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
  var _objectSpread2;

  var alignment = props.alignment,
      vertical = props.vertical,
      horizontal = props.horizontal,
      reverse = props.reverse,
      styles = props.styles;
  var _extraStyles = {};

  if (horizontal) {
    if (horizontal === 'center' || horizontal === 'middle') {
      _extraStyles = {
        WebkitBoxPack: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center'
      };
    } else {
      _extraStyles = {
        WebkitBoxPack: horizontal,
        MsFlexPack: horizontal,
        justifyContent: "flex-".concat(horizontal)
      };
    }
  }

  if (vertical) {
    if (vertical === 'center' || vertical === 'middle') {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        alignItems: 'center'
      });
    } else {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: vertical,
        MsFlexAlign: vertical,
        alignItems: "flex-".concat(vertical)
      });
    }
  }

  return _objectSpread((_objectSpread2 = {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: MARGIN,
    marginLeft: MARGIN
  }, _defineProperty(_objectSpread2, "flexDirection", reverse ? 'row-reverse' : null), _defineProperty(_objectSpread2, '&:before, &:after', {
    clear: 'both'
  }), _objectSpread2), styles, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvUm93LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZbUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUywgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU2l6ZXMgKi9cbmNvbnN0IE1BUkdJTiA9ICgnLScgKyBHUklELkNPTFVNTlNfUEFERElORyArIEdSSUQuVU5JVCk7XG5cbi8qIFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBSb3dXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGFsaWdubWVudCxcbiAgICAgICAgdmVydGljYWwsXG4gICAgICAgIGhvcml6b250YWwsXG5cbiAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGxldCBfZXh0cmFTdHlsZXMgPSB7fTtcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGlmIChob3Jpem9udGFsID09PSAnY2VudGVyJyB8fCBob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveFBhY2sgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBNc0ZsZXhQYWNrICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveFBhY2sgOiBob3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIE1zRmxleFBhY2sgICAgOiBob3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBgZmxleC0ke2hvcml6b250YWx9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgaWYgKHZlcnRpY2FsID09PSAnY2VudGVyJyB8fCB2ZXJ0aWNhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAgIF9leHRyYVN0eWxlcyA9IE9iamVjdC5hc3NpZ24oX2V4dHJhU3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgV2Via2l0Qm94QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIE1zRmxleEFsaWduICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0gT2JqZWN0LmFzc2lnbihfZXh0cmFTdHlsZXMsIHtcbiAgICAgICAgICAgICAgICBXZWJraXRCb3hBbGlnbjogdmVydGljYWwsXG4gICAgICAgICAgICAgICAgTXNGbGV4QWxpZ24gICA6IHZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMgICAgOiBgZmxleC0ke3ZlcnRpY2FsfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgcG9zaXRpb24gICAgIDogJ3JlbGF0aXZlJyxcbiAgICAgICAgZGlzcGxheSAgICAgIDogJ2ZsZXgnLFxuICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgZmxleFdyYXAgICAgIDogJ3dyYXAnLFxuXG4gICAgICAgIG1hcmdpblJpZ2h0OiBNQVJHSU4sXG4gICAgICAgIG1hcmdpbkxlZnQgOiBNQVJHSU4sXG5cbiAgICAgICAgZmxleERpcmVjdGlvbjogcmV2ZXJzZSA/ICdyb3ctcmV2ZXJzZScgOiBudWxsLFxuXG4gICAgICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgICAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLi4uc3R5bGVzLFxuXG4gICAgICAgIC4uLl9leHRyYVN0eWxlcyxcbiAgICB9O1xufSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgUm93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3dXcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcm93ICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1Jvd1dyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblJvdy5wcm9wVHlwZXMgPSB7XG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJ0aWNhbCAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhvcml6b250YWw6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzICAgIDoge30sXG4gICAgdmVydGljYWwgIDogJ21pZGRsZScsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iXX0= */");
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
  vertical: _propTypes.default.string,
  horizontal: _propTypes.default.string
};
/* Default Properties */

Row.defaultProps = {
  styles: {},
  vertical: 'middle',
  horizontal: 'left'
};
/* Exporting */

var _default = Row;
exports.default = _default;