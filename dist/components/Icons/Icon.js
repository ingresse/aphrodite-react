"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _IconArrowDown = _interopRequireDefault(require("./IconArrowDown"));

var _IconArrowDownCircle = _interopRequireDefault(require("./IconArrowDownCircle"));

var _IconArrowLeftCircle = _interopRequireDefault(require("./IconArrowLeftCircle"));

var _IconArrowRightCircle = _interopRequireDefault(require("./IconArrowRightCircle"));

var _IconArrowUpCircle = _interopRequireDefault(require("./IconArrowUpCircle"));

var _IconCheck = _interopRequireDefault(require("./IconCheck"));

var _IconCheckCircle = _interopRequireDefault(require("./IconCheckCircle"));

var _IconCheckThin = _interopRequireDefault(require("./IconCheckThin"));

var _IconInfoCircle = _interopRequireDefault(require("./IconInfoCircle"));

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50cyAvIEljb25zICovXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4vSWNvbkFycm93RG93bic7XG5pbXBvcnQgQXJyb3dEb3duQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93RG93bkNpcmNsZSc7XG5pbXBvcnQgQXJyb3dMZWZ0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93TGVmdENpcmNsZSc7XG5pbXBvcnQgQXJyb3dSaWdodENpcmNsZSBmcm9tICcuL0ljb25BcnJvd1JpZ2h0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1VwQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93VXBDaXJjbGUnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4vSWNvbkNoZWNrJztcbmltcG9ydCBDaGVja0NpcmNsZSBmcm9tICcuL0ljb25DaGVja0NpcmNsZSc7XG5pbXBvcnQgQ2hlY2tUaGluIGZyb20gJy4vSWNvbkNoZWNrVGhpbic7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tICcuL0ljb25JbmZvQ2lyY2xlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IFBlbmNpbCBmcm9tICcuL0ljb25QZW5jaWwnO1xuaW1wb3J0IFF1ZXN0aW9uQ2lyY2xlIGZyb20gJy4vSWNvblF1ZXN0aW9uQ2lyY2xlJztcbmltcG9ydCBUaW1lc0NpcmNsZSBmcm9tICcuL0ljb25UaW1lc0NpcmNsZSc7XG5cbi8qIE1hcHBlciAqL1xuLyogU2hvdWxkIGJlIG1hcHBlZCBpbnRvICdpY29ucy5jb25zdGFudHMnIHRvbyAqL1xuY29uc3QgSUNPTlMgPSB7XG4gICAgJ2Fycm93LWRvd24nICAgICAgICA6IEFycm93RG93bixcbiAgICAnYXJyb3ctZG93bi1jaXJjbGUnIDogQXJyb3dEb3duQ2lyY2xlLFxuICAgICdhcnJvdy1sZWZ0LWNpcmNsZScgOiBBcnJvd0xlZnRDaXJjbGUsXG4gICAgJ2Fycm93LXJpZ2h0LWNpcmNsZSc6IEFycm93UmlnaHRDaXJjbGUsXG4gICAgJ2Fycm93LXVwLWNpcmNsZScgICA6IEFycm93VXBDaXJjbGUsXG4gICAgJ2NoZWNrJyAgICAgICAgICAgICA6IENoZWNrLFxuICAgICdjaGVjay1jaXJjbGUnICAgICAgOiBDaGVja0NpcmNsZSxcbiAgICAnY2hlY2stdGhpbicgICAgICAgIDogQ2hlY2tUaGluLFxuICAgICdpbmZvLWNpcmNsZScgICAgICAgOiBJbmZvQ2lyY2xlLFxuICAgICdsb2FkaW5nJyAgICAgICAgICAgOiBMb2FkaW5nLFxuICAgICdwZW5jaWwnICAgICAgICAgICAgOiBQZW5jaWwsXG4gICAgJ3F1ZXN0aW9uLWNpcmNsZScgICA6IFF1ZXN0aW9uQ2lyY2xlLFxuICAgICd0aW1lcy1jaXJjbGUnICAgICAgOiBUaW1lc0NpcmNsZSxcbn07XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIGxpbmVIZWlnaHQgICA6IDAsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IElDT04gPSBJQ09OU1twcm9wcy5zbHVnXTtcblxuICAgIGlmICghSUNPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbldyYXBwZXIgY2xhc3NOYW1lPVwiYXBoLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPElDT05cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXQocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pY29uICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbHVnICA6IHVuZGVmaW5lZCxcbiAgICBzaXplICA6IDIwLFxuICAgIGNvbG9yIDogJycsXG4gICAgd2lkdGggOiB1bmRlZmluZWQsXG4gICAgSGVpZ2h0OiB1bmRlZmluZWQsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgICBzbHVnICA6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzaXplICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdpZHRoIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IHByb3BUeXBlcy5udW1iZXIsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0= */");
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
    color: _utils.colors.get(props.color || 'secondary'),
    className: "aph-icon ".concat(props.className || '')
  })));
});
/* Default Properties */

Icon.defaultProps = {
  slug: undefined,
  size: 20,
  color: '',
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