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
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + "\n        " : "\n            inset 0 -1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n            inset 1px 0 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n            inset -1px 0 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n            inset 0 1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + "\n        ",
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        ",
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            "
      }
    },
    '.aph-list__header': {
      backgroundColor: _utils.colors.getFromTheme(props, 'helper')
    },
    '.aph-list__item': {
      backgroundColor: _utils.colors.getFromTheme(props, 'background')
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : _constants.RADIUS) - 2 + _constants.GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 " + _utils.colors.getOpacity(0.25, _utils.colors.getFromTheme(props, 'helper')) + "\n                "
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RzL0xpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTLCBHUklELCBSQURJVVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBVdGlscyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoTGlzdEdyb3VwID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uIDogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICB3aWR0aCAgICA6ICcxMDAlJyxcbiAgICBwYWRkaW5nICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID8gJzFweCAwJyA6ICcxcHgnKSxcbiAgICBtYXJnaW4gICA6IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpICsgR1JJRC5VTklUKSxcbiAgICBib3hTaGFkb3cgICA6IChwcm9wcy5ub1NpZGVCb3JkZXJzID9cbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfSxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX1cbiAgICAgICAgYClcbiAgICAgICAgOlxuICAgICAgICAoYFxuICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgaW5zZXQgMXB4IDAgMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAtMXB4IDAgMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfVxuICAgICAgICBgKVxuICAgICksXG5cbiAgICAnLmFwaC1saXN0X19oZWFkZXIsIC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnRcbiAgICAgICAgYCxcblxuICAgICAgICAnKyAuYXBoLWxpc3RfX2hlYWRlciwgKyAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICBib3hTaGFkb3cgICA6IGBcbiAgICAgICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgIGAsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgJy5hcGgtbGlzdF9faGVhZGVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSxcbiAgICB9LFxuXG4gICAgJy5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpLFxuICAgIH0sXG5cbiAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0xcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cyA6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGBcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAnZGl2Omxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgJy5hcGgtbGlzdF9faGVhZGVyLCA+IC5hcGgtbGlzdF9faXRlbSc6IHtcbiAgICAgICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICctMXB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMgOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgTGlzdEdyb3VwID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhMaXN0R3JvdXBcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWxpc3QtZ3JvdXAgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBoTGlzdEdyb3VwPlxuICAgICk7XG59KTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBMaXN0R3JvdXA7XG4iXX0= */");
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