"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../constants");

var _utils = require("../../utils");

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
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + "\n        " : "\n            inset 0 -1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n            inset 1px 0 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n            inset -1px 0 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n            inset 0 1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + "\n        ",
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        ",
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            "
      }
    },
    '.aph-list__header': {
      backgroundColor: _utils.colors.getFromTheme(props, 'mercury')
    },
    '.aph-list__item': {
      backgroundColor: _utils.colors.getFromTheme(props, 'smoke')
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 " + _utils.colors.getFromTheme(props, 'mercury', 'crystal') + "\n                "
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBVdGlscyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoTGlzdEdyb3VwID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBwYWRkaW5nICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID8gJzFweCAwJyA6ICcxcHgnKSxcbiAgICBtYXJnaW4gICA6IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpICsgR1JJRC5VTklUKSxcbiAgICBib3hTaGFkb3cgICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID9cbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJyl9LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJyl9XG4gICAgICAgIGApXG4gICAgICAgIDpcbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJyl9LFxuICAgICAgICAgICAgaW5zZXQgMXB4IDAgMCAwICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpfSxcbiAgICAgICAgICAgIGluc2V0IC0xcHggMCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJyl9LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpfVxuICAgICAgICBgKVxuICAgICksXG5cbiAgICAnLmFwaC1saXN0X19oZWFkZXIsIC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpfSxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudFxuICAgICAgICBgLFxuXG4gICAgICAgICcrIC5hcGgtbGlzdF9faGVhZGVyLCArIC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdyAgIDogYFxuICAgICAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdjcnlzdGFsJyl9LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50XG4gICAgICAgICAgICBgLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgICcuYXBoLWxpc3RfX2hlYWRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScpLFxuICAgIH0sXG5cbiAgICAnLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpLFxuICAgIH0sXG5cbiAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0xcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cyA6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGBcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdtZXJjdXJ5JywgJ2NyeXN0YWwnKX0sXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgMCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdtZXJjdXJ5JywgJ2NyeXN0YWwnKX1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgJ2RpdjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTFweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzIDogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IExpc3RHcm91cCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEdyb3VwXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0LWdyb3VwICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RHcm91cD5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwO1xuIl19 */");
/* Component */

var ListGroup = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(AphListGroup, _extends({}, props, {
    ref: ref,
    className: "aph-list-group " + (props.className || '')
  }), props.children);
});
/* Exporting */

var _default = ListGroup;
exports.default = _default;