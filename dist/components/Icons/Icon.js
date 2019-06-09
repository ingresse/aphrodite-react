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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50cyAvIEljb25zICovXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4vSWNvbkFycm93RG93bic7XG5pbXBvcnQgQXJyb3dEb3duQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93RG93bkNpcmNsZSc7XG5pbXBvcnQgQXJyb3dMZWZ0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93TGVmdENpcmNsZSc7XG5pbXBvcnQgQXJyb3dSaWdodENpcmNsZSBmcm9tICcuL0ljb25BcnJvd1JpZ2h0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1VwQ2lyY2xlIGZyb20gJy4vSWNvbkFycm93VXBDaXJjbGUnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4vSWNvbkNoZWNrJztcbmltcG9ydCBDaGVja0NpcmNsZSBmcm9tICcuL0ljb25DaGVja0NpcmNsZSc7XG5pbXBvcnQgQ2hlY2tUaGluIGZyb20gJy4vSWNvbkNoZWNrVGhpbic7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tICcuL0ljb25JbmZvQ2lyY2xlJztcbmltcG9ydCBMb2FkZXJEb251dCBmcm9tICcuL0ljb25Mb2FkZXJEb251dCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0ljb25Mb2FkaW5nJztcbmltcG9ydCBQZW5jaWwgZnJvbSAnLi9JY29uUGVuY2lsJztcbmltcG9ydCBRdWVzdGlvbkNpcmNsZSBmcm9tICcuL0ljb25RdWVzdGlvbkNpcmNsZSc7XG5pbXBvcnQgVGltZXNDaXJjbGUgZnJvbSAnLi9JY29uVGltZXNDaXJjbGUnO1xuXG4vKiBNYXBwZXIgKi9cbi8qIFNob3VsZCBiZSBtYXBwZWQgaW50byAnaWNvbnMuY29uc3RhbnRzJyB0b28gKi9cbmNvbnN0IElDT05TID0ge1xuICAgICdhcnJvdy1kb3duJyAgICAgICAgOiBBcnJvd0Rvd24sXG4gICAgJ2Fycm93LWRvd24tY2lyY2xlJyA6IEFycm93RG93bkNpcmNsZSxcbiAgICAnYXJyb3ctbGVmdC1jaXJjbGUnIDogQXJyb3dMZWZ0Q2lyY2xlLFxuICAgICdhcnJvdy1yaWdodC1jaXJjbGUnOiBBcnJvd1JpZ2h0Q2lyY2xlLFxuICAgICdhcnJvdy11cC1jaXJjbGUnICAgOiBBcnJvd1VwQ2lyY2xlLFxuICAgICdjaGVjaycgICAgICAgICAgICAgOiBDaGVjayxcbiAgICAnY2hlY2stY2lyY2xlJyAgICAgIDogQ2hlY2tDaXJjbGUsXG4gICAgJ2NoZWNrLXRoaW4nICAgICAgICA6IENoZWNrVGhpbixcbiAgICAnaW5mby1jaXJjbGUnICAgICAgIDogSW5mb0NpcmNsZSxcbiAgICAnbG9hZGVyJyAgICAgICAgICAgIDogTG9hZGVyRG9udXQsXG4gICAgJ2xvYWRpbmcnICAgICAgICAgICA6IExvYWRpbmcsXG4gICAgJ3BlbmNpbCcgICAgICAgICAgICA6IFBlbmNpbCxcbiAgICAncXVlc3Rpb24tY2lyY2xlJyAgIDogUXVlc3Rpb25DaXJjbGUsXG4gICAgJ3RpbWVzLWNpcmNsZScgICAgICA6IFRpbWVzQ2lyY2xlLFxufTtcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbGluZUhlaWdodCAgIDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgSUNPTiA9IElDT05TW3Byb3BzLnNsdWddO1xuXG4gICAgaWYgKCFJQ09OKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uV3JhcHBlciBjbGFzc05hbWU9XCJhcGgtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8SUNPTlxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5Jyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSWNvbldyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICAgIHNsdWcgIDogdW5kZWZpbmVkLFxuICAgIHNpemUgIDogMjAsXG4gICAgY29sb3IgOiAnJyxcbiAgICB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICBIZWlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGggOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogcHJvcFR5cGVzLm51bWJlcixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdfQ== */");
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