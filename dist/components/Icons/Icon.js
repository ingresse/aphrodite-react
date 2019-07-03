"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconArrowDown = _interopRequireDefault(require("./IconArrowDown"));

var _IconArrowDownCircle = _interopRequireDefault(require("./IconArrowDownCircle"));

var _IconArrowLeftCircle = _interopRequireDefault(require("./IconArrowLeftCircle"));

var _IconArrowRightCircle = _interopRequireDefault(require("./IconArrowRightCircle"));

var _IconArrowUpCircle = _interopRequireDefault(require("./IconArrowUpCircle"));

var _IconCheck = _interopRequireDefault(require("./IconCheck"));

var _IconCheckCircle = _interopRequireDefault(require("./IconCheckCircle"));

var _IconCheckThin = _interopRequireDefault(require("./IconCheckThin"));

var _IconInfoCircle = _interopRequireDefault(require("./IconInfoCircle"));

var _IconLoaderDonut = _interopRequireDefault(require("./IconLoaderDonut"));

var _IconLoading = _interopRequireDefault(require("./IconLoading"));

var _IconPencil = _interopRequireDefault(require("./IconPencil"));

var _IconQuestionCircle = _interopRequireDefault(require("./IconQuestionCircle"));

var _IconTimesCircle = _interopRequireDefault(require("./IconTimesCircle"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Mapper */

/* Should be mapped into 'icons.constants' too */
var ICONS = {
  'arrow-down': _IconArrowDown.default,
  'arrow-down-circle': _IconArrowDownCircle.default,
  'arrow-left-circle': _IconArrowLeftCircle.default,
  'arrow-right-circle': _IconArrowRightCircle.default,
  'arrow-up-circle': _IconArrowUpCircle.default,
  'check': _IconCheck.default,
  'check-circle': _IconCheckCircle.default,
  'check-thin': _IconCheckThin.default,
  'info-circle': _IconInfoCircle.default,
  'loader': _IconLoaderDonut.default,
  'loading': _IconLoading.default,
  'pencil': _IconPencil.default,
  'question-circle': _IconQuestionCircle.default,
  'times-circle': _IconTimesCircle.default
};
/* Component Wrapper styles */

var IconWrapper = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e34a6r20"
})(function (props) {
  return {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnRzIC8gSWNvbnMgKi9cbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0Rvd25DaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dEb3duQ2lyY2xlJztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dMZWZ0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1JpZ2h0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93UmlnaHRDaXJjbGUnO1xuaW1wb3J0IEFycm93VXBDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dVcENpcmNsZSc7XG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi9JY29uQ2hlY2snO1xuaW1wb3J0IENoZWNrQ2lyY2xlIGZyb20gJy4vSWNvbkNoZWNrQ2lyY2xlJztcbmltcG9ydCBDaGVja1RoaW4gZnJvbSAnLi9JY29uQ2hlY2tUaGluJztcbmltcG9ydCBJbmZvQ2lyY2xlIGZyb20gJy4vSWNvbkluZm9DaXJjbGUnO1xuaW1wb3J0IExvYWRlckRvbnV0IGZyb20gJy4vSWNvbkxvYWRlckRvbnV0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IFBlbmNpbCBmcm9tICcuL0ljb25QZW5jaWwnO1xuaW1wb3J0IFF1ZXN0aW9uQ2lyY2xlIGZyb20gJy4vSWNvblF1ZXN0aW9uQ2lyY2xlJztcbmltcG9ydCBUaW1lc0NpcmNsZSBmcm9tICcuL0ljb25UaW1lc0NpcmNsZSc7XG5cbi8qIE1hcHBlciAqL1xuLyogU2hvdWxkIGJlIG1hcHBlZCBpbnRvICdpY29ucy5jb25zdGFudHMnIHRvbyAqL1xuY29uc3QgSUNPTlMgPSB7XG4gICAgJ2Fycm93LWRvd24nICAgICAgICA6IEFycm93RG93bixcbiAgICAnYXJyb3ctZG93bi1jaXJjbGUnIDogQXJyb3dEb3duQ2lyY2xlLFxuICAgICdhcnJvdy1sZWZ0LWNpcmNsZScgOiBBcnJvd0xlZnRDaXJjbGUsXG4gICAgJ2Fycm93LXJpZ2h0LWNpcmNsZSc6IEFycm93UmlnaHRDaXJjbGUsXG4gICAgJ2Fycm93LXVwLWNpcmNsZScgICA6IEFycm93VXBDaXJjbGUsXG4gICAgJ2NoZWNrJyAgICAgICAgICAgICA6IENoZWNrLFxuICAgICdjaGVjay1jaXJjbGUnICAgICAgOiBDaGVja0NpcmNsZSxcbiAgICAnY2hlY2stdGhpbicgICAgICAgIDogQ2hlY2tUaGluLFxuICAgICdpbmZvLWNpcmNsZScgICAgICAgOiBJbmZvQ2lyY2xlLFxuICAgICdsb2FkZXInICAgICAgICAgICAgOiBMb2FkZXJEb251dCxcbiAgICAnbG9hZGluZycgICAgICAgICAgIDogTG9hZGluZyxcbiAgICAncGVuY2lsJyAgICAgICAgICAgIDogUGVuY2lsLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnICAgOiBRdWVzdGlvbkNpcmNsZSxcbiAgICAndGltZXMtY2lyY2xlJyAgICAgIDogVGltZXNDaXJjbGUsXG59O1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBsaW5lSGVpZ2h0ICAgOiAwLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY29uc3QgSWNvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBJQ09OID0gSUNPTlNbcHJvcHMuc2x1Z107XG5cbiAgICBpZiAoIUlDT04pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25XcmFwcGVyIGNsYXNzTmFtZT1cImFwaC1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJQ09OXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9JY29uV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2x1ZyAgOiB1bmRlZmluZWQsXG4gICAgc2l6ZSAgOiAyMCxcbiAgICBjb2xvciA6ICdzZWNvbmRhcnknLFxuICAgIHdpZHRoIDogdW5kZWZpbmVkLFxuICAgIEhlaWdodDogdW5kZWZpbmVkLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSWNvbi5wcm9wVHlwZXMgPSB7XG4gICAgc2x1ZyAgOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19 */");
/* Component it self */

var Icon = (0, _react.forwardRef)(function (props, ref) {
  var ICON = ICONS[props.slug];

  if (!ICON) {
    return null;
  }

  return _react.default.createElement(IconWrapper, {
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, props, {
    ref: ref,
    color: props.color,
    className: "aph-icon ".concat(props.className || '')
  })));
});
/* Default Properties */

Icon.defaultProps = {
  slug: undefined,
  size: 20,
  color: 'secondary',
  width: undefined,
  Height: undefined
};
/* Properties Types */

Icon.propTypes = {
  slug: _propTypes.default.string.isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.string,
  width: _propTypes.default.number,
  height: _propTypes.default.number
};
/* Exporting */

var _default = Icon;
exports.default = _default;