"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Wrapper styles */
var AphListGroup = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ey9rber0"
})(function (props) {
  return _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    padding: props.noSideBorders ? '1px 0' : '1px',
    margin: 0,
    listStyle: 'none',
    borderRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) + _constants.GRID.UNIT,
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n        ") : "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n            inset -1px 0 0 0 ").concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n        "),
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        "),
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            ")
      }
    },
    '.aph-list__header': {
      backgroundColor: _constants.COLORS.DARK_SMOKE
    },
    '.aph-list__item': {
      backgroundColor: _constants.COLORS.SMOKE
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 ".concat(_constants.COLORS.LIGHT_GREY, ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 ").concat(_constants.COLORS.LIGHT_GREY, "\n                ")
        }
      }
    },
    'div:last-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:last-of-type': {
          marginBottom: '-1px',
          borderBottomRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderBottomLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT
        }
      }
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXFCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIEdSSUQsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBBcGhMaXN0R3JvdXAgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb24gOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93IDogJ2hpZGRlbicsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuICAgIHdpZHRoICAgIDogJzEwMCUnLFxuICAgIHBhZGRpbmcgIDogKHByb3BzLm5vU2lkZUJvcmRlcnMgPyAnMXB4IDAnIDogJzFweCcpLFxuICAgIG1hcmdpbiAgIDogMCxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcblxuICAgIGJvcmRlclJhZGl1czogKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgKyBHUklELlVOSVQpLFxuICAgIGJveFNoYWRvdyAgIDogKHByb3BzLm5vU2lkZUJvcmRlcnMgP1xuICAgICAgICAoYFxuICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfSxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9XG4gICAgICAgIGApXG4gICAgICAgIDpcbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtDT0xPUlMuTElHSFRfR1JFWX0sXG4gICAgICAgICAgICBpbnNldCAxcHggMCAwIDAgJHtDT0xPUlMuTElHSFRfR1JFWX0sXG4gICAgICAgICAgICBpbnNldCAtMXB4IDAgMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9XG4gICAgICAgIGApXG4gICAgKSxcblxuICAgICcuYXBoLWxpc3RfX2hlYWRlciwgLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICBib3hTaGFkb3cgICA6IGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtDT0xPUlMuTElHSFRfR1JFWX0sXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnRcbiAgICAgICAgYCxcblxuICAgICAgICAnKyAuYXBoLWxpc3RfX2hlYWRlciwgKyAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICBib3hTaGFkb3cgICA6IGBcbiAgICAgICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50XG4gICAgICAgICAgICBgLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgICcuYXBoLWxpc3RfX2hlYWRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuREFSS19TTU9LRSxcbiAgICB9LFxuXG4gICAgJy5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuU01PS0UsXG4gICAgfSxcblxuICAgICdkaXY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgJy5hcGgtbGlzdF9faGVhZGVyLCA+IC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgICAgICcmOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTFweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzIDogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogYFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtDT0xPUlMuTElHSFRfR1JFWX1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgJ2RpdjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTFweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzIDogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IExpc3RHcm91cCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0R3JvdXBcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0LWdyb3VwICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RHcm91cD5cbiAgICApO1xufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0R3JvdXA7XG4iXX0= */");
/* Component */

var ListGroup = function ListGroup(props) {
  return _react.default.createElement(AphListGroup, _extends({}, props, {
    className: "aph-list-group ".concat(props.className || '')
  }), props.children);
};
/* Exporting */


var _default = ListGroup;
exports.default = _default;