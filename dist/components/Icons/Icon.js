"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Mapper */

/* Should be mapped into 'icons.constants' too */
var ICONS = {
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50cyAvIEljb25zICovXG5pbXBvcnQgQXJyb3dEb3duQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93RG93bkNpcmNsZSc7XG5pbXBvcnQgQXJyb3dMZWZ0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93TGVmdENpcmNsZSc7XG5pbXBvcnQgQXJyb3dSaWdodENpcmNsZSBmcm9tICcuL0ljb25BcnJvd1JpZ2h0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1VwQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93VXBDaXJjbGUnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4vSWNvbkNoZWNrJztcbmltcG9ydCBDaGVja0NpcmNsZSBmcm9tICcuL0ljb25DaGVja0NpcmNsZSc7XG5pbXBvcnQgQ2hlY2tUaGluIGZyb20gJy4vSWNvbkNoZWNrVGhpbic7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tICcuL0ljb25JbmZvQ2lyY2xlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IFBlbmNpbCBmcm9tICcuL0ljb25QZW5jaWwnO1xuaW1wb3J0IFF1ZXN0aW9uQ2lyY2xlIGZyb20gJy4vSWNvblF1ZXN0aW9uQ2lyY2xlJztcbmltcG9ydCBUaW1lc0NpcmNsZSBmcm9tICcuL0ljb25UaW1lc0NpcmNsZSc7XG5cbi8qIE1hcHBlciAqL1xuLyogU2hvdWxkIGJlIG1hcHBlZCBpbnRvICdpY29ucy5jb25zdGFudHMnIHRvbyAqL1xuY29uc3QgSUNPTlMgPSB7XG4gICAgJ2Fycm93LWRvd24tY2lyY2xlJyA6IEFycm93RG93bkNpcmNsZSxcbiAgICAnYXJyb3ctbGVmdC1jaXJjbGUnIDogQXJyb3dMZWZ0Q2lyY2xlLFxuICAgICdhcnJvdy1yaWdodC1jaXJjbGUnOiBBcnJvd1JpZ2h0Q2lyY2xlLFxuICAgICdhcnJvdy11cC1jaXJjbGUnICAgOiBBcnJvd1VwQ2lyY2xlLFxuICAgICdjaGVjaycgICAgICAgICAgICAgOiBDaGVjayxcbiAgICAnY2hlY2stY2lyY2xlJyAgICAgIDogQ2hlY2tDaXJjbGUsXG4gICAgJ2NoZWNrLXRoaW4nICAgICAgICA6IENoZWNrVGhpbixcbiAgICAnaW5mby1jaXJjbGUnICAgICAgIDogSW5mb0NpcmNsZSxcbiAgICAnbG9hZGluZycgICAgICAgICAgIDogTG9hZGluZyxcbiAgICAncGVuY2lsJyAgICAgICAgICAgIDogUGVuY2lsLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnICAgOiBRdWVzdGlvbkNpcmNsZSxcbiAgICAndGltZXMtY2lyY2xlJyAgICAgIDogVGltZXNDaXJjbGUsXG59O1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBsaW5lSGVpZ2h0ICAgOiAwLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY29uc3QgSWNvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IElDT04gPSBJQ09OU1twcm9wcy5zbHVnXTtcblxuICAgIGlmICghSUNPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbldyYXBwZXIgY2xhc3NOYW1lPVwiYXBoLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPElDT05cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgY29sb3I9e3Byb3BzLmNvbG9yIHx8IENPTE9SUy5QUklNQVJZfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pY29uICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICAgIHNsdWcgIDogdW5kZWZpbmVkLFxuICAgIHNpemUgIDogMjAsXG4gICAgY29sb3IgOiBDT0xPUlMuUFJJTUFSWSxcbiAgICB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICBIZWlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGggOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogcHJvcFR5cGVzLm51bWJlcixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdfQ== */");
/* Component it self */

var Icon = function Icon(props) {
  var ICON = ICONS[props.slug];

  if (!ICON) {
    return null;
  }

  return _react.default.createElement(IconWrapper, {
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, props, {
    color: props.color || _constants.COLORS.PRIMARY,
    className: "aph-icon ".concat(props.className || '')
  })));
};
/* Default Properties */


Icon.defaultProps = {
  slug: undefined,
  size: 20,
  color: _constants.COLORS.PRIMARY,
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