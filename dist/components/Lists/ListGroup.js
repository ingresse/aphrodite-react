"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXFCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoTGlzdEdyb3VwID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBwYWRkaW5nICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID8gJzFweCAwJyA6ICcxcHgnKSxcbiAgICBtYXJnaW4gICA6IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpICsgR1JJRC5VTklUKSxcbiAgICBib3hTaGFkb3cgICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID9cbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtDT0xPUlMuTElHSFRfR1JFWX0sXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfVxuICAgICAgICBgKVxuICAgICAgICA6XG4gICAgICAgIChgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgaW5zZXQgMXB4IDAgMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgaW5zZXQgLTFweCAwIDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfSxcbiAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfVxuICAgICAgICBgKVxuICAgICksXG5cbiAgICAnLmFwaC1saXN0X19oZWFkZXIsIC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50XG4gICAgICAgIGAsXG5cbiAgICAgICAgJysgLmFwaC1saXN0X19oZWFkZXIsICsgLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfSxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudFxuICAgICAgICAgICAgYCxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAnLmFwaC1saXN0X19oZWFkZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLkRBUktfU01PS0UsXG4gICAgfSxcblxuICAgICcuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLlNNT0tFLFxuICAgIH0sXG5cbiAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0xcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cyA6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGBcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke0NPTE9SUy5MSUdIVF9HUkVZfSxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Q09MT1JTLkxJR0hUX0dSRVl9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgICdkaXY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAnLmFwaC1saXN0X19oZWFkZXIsID4gLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJy0xcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBMaXN0R3JvdXAgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RHcm91cFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbGlzdC1ncm91cCAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BcGhMaXN0R3JvdXA+XG4gICAgKTtcbn0pO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cDtcbiJdfQ== */");
/* Component */

var ListGroup = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(AphListGroup, _extends({}, props, {
    ref: ref,
    className: "aph-list-group ".concat(props.className || '')
  }), props.children);
});
/* Exporting */

var _default = ListGroup;
exports.default = _default;