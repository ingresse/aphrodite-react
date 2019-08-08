"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        justifyContent: "flex-" + horizontal
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
        alignItems: "flex-" + vertical
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
  }, _objectSpread2["flexDirection"] = reverse ? 'row-reverse' : null, _objectSpread2['&:before, &:after'] = {
    clear: 'both'
  }, _objectSpread2), styles, {}, _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvUm93LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZbUIiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIEhlbHBlcnMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFNpemVzICovXG5jb25zdCBNQVJHSU4gPSAoJy0nICsgR1JJRC5DT0xVTU5TX1BBRERJTkcgKyBHUklELlVOSVQpO1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgUm93V3JhcHBlciA9IHN0eWxlZCgnZGl2JykoKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBhbGlnbm1lbnQsXG4gICAgICAgIHZlcnRpY2FsLFxuICAgICAgICBob3Jpem9udGFsLFxuXG4gICAgICAgIHJldmVyc2UsXG4gICAgICAgIHN0eWxlcyxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBsZXQgX2V4dHJhU3R5bGVzID0ge307XG5cbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gJ2NlbnRlcicgfHwgaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAgIF9leHRyYVN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICBXZWJraXRCb3hQYWNrIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgTXNGbGV4UGFjayAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9leHRyYVN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICBXZWJraXRCb3hQYWNrIDogaG9yaXpvbnRhbCxcbiAgICAgICAgICAgICAgICBNc0ZsZXhQYWNrICAgIDogaG9yaXpvbnRhbCxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogYGZsZXgtJHtob3Jpem9udGFsfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gJ2NlbnRlcicgfHwgdmVydGljYWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICAgICAgICBfZXh0cmFTdHlsZXMgPSBPYmplY3QuYXNzaWduKF9leHRyYVN0eWxlcywge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBNc0ZsZXhBbGlnbiAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcyAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9leHRyYVN0eWxlcyA9IE9iamVjdC5hc3NpZ24oX2V4dHJhU3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgV2Via2l0Qm94QWxpZ246IHZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIE1zRmxleEFsaWduICAgOiB2ZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zICAgIDogYGZsZXgtJHt2ZXJ0aWNhbH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib3hTaXppbmcgICAgOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBvc2l0aW9uICAgICA6ICdyZWxhdGl2ZScsXG4gICAgICAgIGRpc3BsYXkgICAgICA6ICdmbGV4JyxcbiAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGZsZXhXcmFwICAgICA6ICd3cmFwJyxcblxuICAgICAgICBtYXJnaW5SaWdodDogTUFSR0lOLFxuICAgICAgICBtYXJnaW5MZWZ0IDogTUFSR0lOLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHJldmVyc2UgPyAncm93LXJldmVyc2UnIDogbnVsbCxcblxuICAgICAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICB9LFxuXG4gICAgICAgIC4uLnN0eWxlcyxcblxuICAgICAgICAuLi5fZXh0cmFTdHlsZXMsXG4gICAgfTtcbn0pO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IFJvdyA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvd1dyYXBwZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXJvdyAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Sb3dXcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuUm93LnByb3BUeXBlcyA9IHtcbiAgICB2ZXJ0aWNhbCAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhvcml6b250YWw6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzICAgIDoge30sXG4gICAgdmVydGljYWwgIDogJ21pZGRsZScsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iXX0= */");
/* Component */

var Row = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children;
  return _react.default.createElement(RowWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-row " + (className || '')
  }), children);
});
/* Properties Types */

Row.propTypes = {
  vertical: _propTypes.default.string,
  horizontal: _propTypes.default.string,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
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