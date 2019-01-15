"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Style Wrapper */
var StyledWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e19gg4i70"
})(function (props) {
  return _objectSpread({}, props.styles, _defineProperty({
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '-10px',
    marginLeft: '-10px',
    '&:before,&:after': {
      content: '" "',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '15px'
    },
    '&:before': {
      left: 0,
      background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 80%)'
    },
    '&:after': {
      right: 0,
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)'
    },
    '&.scrollable--xs': {
      '&:before,&:after': {
        content: 'initial'
      }
    }
  }, _constants.MEDIA_QUERIES.XS, {
    marginRight: '-20px',
    marginLeft: '-20px',
    '&.scrollable--xs:before,&.scrollable--xs:after': {
      content: '" "'
    }
  }));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXNCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGUgV3JhcHBlciAqL1xuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5wcm9wcy5zdHlsZXMsXG5cbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgIHBhZGRpbmdUb3AgICA6ICcxMHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgbWFyZ2luUmlnaHQgIDogJy0xMHB4JyxcbiAgICBtYXJnaW5MZWZ0ICAgOiAnLTEwcHgnLFxuXG4gICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wICAgICA6ICcwJyxcbiAgICAgICAgYm90dG9tICA6ICcwJyxcbiAgICAgICAgd2lkdGggICA6ICcxNXB4JyxcbiAgICB9LFxuXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA4MCUpJyxcbiAgICB9LFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDUwJSknLFxuICAgIH0sXG5cbiAgICAnJi5zY3JvbGxhYmxlLS14cyc6IHtcbiAgICAgICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBjb250ZW50IDogJ2luaXRpYWwnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICctMjBweCcsXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnLTIwcHgnLFxuXG4gICAgICAgICcmLnNjcm9sbGFibGUtLXhzOmJlZm9yZSwmLnNjcm9sbGFibGUtLXhzOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdcIiBcIicsXG4gICAgICAgIH1cbiAgICB9XG59KSk7XG5cbi8qIFN0eWxlZCBTY3JvbGwgKi9cbmNvbnN0IFN0eWxlZFNjcm9sbGFibGUgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICBvdmVyZmxvdyAgOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dZIDogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXG5cbiAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW4gOiAnMCAxMHB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlhTXToge1xuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcblxuICAgICAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY2xhc3MgU2Nyb2xsYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IFJlbmRlclxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm9wcyB9ICAgID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZWRXcmFwcGVyIGNsYXNzTmFtZT17KHByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAocHJvcHMub25seVhTID8gJyBzY3JvbGxhYmxlLS14cycgOiAnJyl9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRTY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRTY3JvbGxhYmxlPlxuICAgICAgICAgICAgPC9TdHlsZWRXcmFwcGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG4vKiBFeHBvcnQgQ29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxhYmxlO1xuIl19 */");
/* Styled Scroll */

var StyledScrollable = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e19gg4i71"
})(_defineProperty({
  overflow: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '.scrollable__item': {
    display: 'inline-block',
    margin: '0 10px',
    verticalAlign: 'middle'
  }
}, _constants.MEDIA_QUERIES.XS, {
  textAlign: 'left',
  '.scrollable__item': {
    '&:first-of-type': {
      marginLeft: '20px'
    },
    '&:last-child': {
      marginRight: '20px'
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR5QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TY3JvbGxhYmxlL1Njcm9sbGFibGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlIFdyYXBwZXIgKi9cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICBwYWRkaW5nVG9wICAgOiAnMTBweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0ICA6ICctMTBweCcsXG4gICAgbWFyZ2luTGVmdCAgIDogJy0xMHB4JyxcblxuICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50IDogJ1wiIFwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcCAgICAgOiAnMCcsXG4gICAgICAgIGJvdHRvbSAgOiAnMCcsXG4gICAgICAgIHdpZHRoICAgOiAnMTVweCcsXG4gICAgfSxcblxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODAlKScsXG4gICAgfSxcblxuICAgICcmOmFmdGVyJzoge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1MCUpJyxcbiAgICB9LFxuXG4gICAgJyYuc2Nyb2xsYWJsZS0teHMnOiB7XG4gICAgICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdpbml0aWFsJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTIwcHgnLFxuICAgICAgICBtYXJnaW5MZWZ0IDogJy0yMHB4JyxcblxuICAgICAgICAnJi5zY3JvbGxhYmxlLS14czpiZWZvcmUsJi5zY3JvbGxhYmxlLS14czphZnRlcic6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICB9XG4gICAgfVxufSkpO1xuXG4vKiBTdHlsZWQgU2Nyb2xsICovXG5jb25zdCBTdHlsZWRTY3JvbGxhYmxlID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgb3ZlcmZsb3cgIDogJ2F1dG8nLFxuICAgIG92ZXJmbG93WSA6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuXG4gICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luIDogJzAgMTBweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG5cbiAgICAgICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICAgICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNsYXNzIFNjcm9sbGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCBSZW5kZXJcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvcHMgfSAgICA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3R5bGVkV3JhcHBlciBjbGFzc05hbWU9eyhwcm9wcy5jbGFzc05hbWUgfHwgJycpICsgKHByb3BzLm9ubHlYUyA/ICcgc2Nyb2xsYWJsZS0teHMnIDogJycpfT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuLyogRXhwb3J0IENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYWJsZTtcbiJdfQ== */");
/* Component it self */

var Scrollable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scrollable, _React$Component);

  function Scrollable() {
    _classCallCheck(this, Scrollable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scrollable).apply(this, arguments));
  }

  _createClass(Scrollable, [{
    key: "render",

    /**
     * Component Render
     */
    value: function render() {
      var props = this.props;
      var children = props.children;
      return _react.default.createElement(StyledWrapper, {
        className: (props.className || '') + (props.onlyXS ? ' scrollable--xs' : '')
      }, _react.default.createElement(StyledScrollable, null, children));
    }
  }]);

  return Scrollable;
}(_react.default.Component);
/* Export Component */


var _default = Scrollable;
exports.default = _default;