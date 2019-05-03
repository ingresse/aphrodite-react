"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnRzIC8gSWNvbnMgKi9cbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0Rvd25DaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dEb3duQ2lyY2xlJztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dMZWZ0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1JpZ2h0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93UmlnaHRDaXJjbGUnO1xuaW1wb3J0IEFycm93VXBDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dVcENpcmNsZSc7XG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi9JY29uQ2hlY2snO1xuaW1wb3J0IENoZWNrQ2lyY2xlIGZyb20gJy4vSWNvbkNoZWNrQ2lyY2xlJztcbmltcG9ydCBDaGVja1RoaW4gZnJvbSAnLi9JY29uQ2hlY2tUaGluJztcbmltcG9ydCBJbmZvQ2lyY2xlIGZyb20gJy4vSWNvbkluZm9DaXJjbGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9JY29uTG9hZGluZyc7XG5pbXBvcnQgUGVuY2lsIGZyb20gJy4vSWNvblBlbmNpbCc7XG5pbXBvcnQgUXVlc3Rpb25DaXJjbGUgZnJvbSAnLi9JY29uUXVlc3Rpb25DaXJjbGUnO1xuaW1wb3J0IFRpbWVzQ2lyY2xlIGZyb20gJy4vSWNvblRpbWVzQ2lyY2xlJztcblxuLyogTWFwcGVyICovXG4vKiBTaG91bGQgYmUgbWFwcGVkIGludG8gJ2ljb25zLmNvbnN0YW50cycgdG9vICovXG5jb25zdCBJQ09OUyA9IHtcbiAgICAnYXJyb3ctZG93bicgICAgICAgIDogQXJyb3dEb3duLFxuICAgICdhcnJvdy1kb3duLWNpcmNsZScgOiBBcnJvd0Rvd25DaXJjbGUsXG4gICAgJ2Fycm93LWxlZnQtY2lyY2xlJyA6IEFycm93TGVmdENpcmNsZSxcbiAgICAnYXJyb3ctcmlnaHQtY2lyY2xlJzogQXJyb3dSaWdodENpcmNsZSxcbiAgICAnYXJyb3ctdXAtY2lyY2xlJyAgIDogQXJyb3dVcENpcmNsZSxcbiAgICAnY2hlY2snICAgICAgICAgICAgIDogQ2hlY2ssXG4gICAgJ2NoZWNrLWNpcmNsZScgICAgICA6IENoZWNrQ2lyY2xlLFxuICAgICdjaGVjay10aGluJyAgICAgICAgOiBDaGVja1RoaW4sXG4gICAgJ2luZm8tY2lyY2xlJyAgICAgICA6IEluZm9DaXJjbGUsXG4gICAgJ2xvYWRpbmcnICAgICAgICAgICA6IExvYWRpbmcsXG4gICAgJ3BlbmNpbCcgICAgICAgICAgICA6IFBlbmNpbCxcbiAgICAncXVlc3Rpb24tY2lyY2xlJyAgIDogUXVlc3Rpb25DaXJjbGUsXG4gICAgJ3RpbWVzLWNpcmNsZScgICAgICA6IFRpbWVzQ2lyY2xlLFxufTtcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbGluZUhlaWdodCAgIDogMCxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IEljb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBJQ09OID0gSUNPTlNbcHJvcHMuc2x1Z107XG5cbiAgICBpZiAoIUlDT04pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25XcmFwcGVyIGNsYXNzTmFtZT1cImFwaC1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJQ09OXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0KHByb3BzLmNvbG9yIHx8ICdwcmltYXJ5Jyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSWNvbldyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2x1ZyAgOiB1bmRlZmluZWQsXG4gICAgc2l6ZSAgOiAyMCxcbiAgICBjb2xvciA6IGNvbG9ycy5nZXQoJ3ByaW1hcnknKSxcbiAgICB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICBIZWlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNpemUgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGggOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogcHJvcFR5cGVzLm51bWJlcixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdfQ== */");
/* Component it self */

var Icon = function Icon(props) {
  var ICON = ICONS[props.slug];

  if (!ICON) {
    return null;
  }

  return _react.default.createElement(IconWrapper, {
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, props, {
    color: _utils.colors.get(props.color || 'primary'),
    className: "aph-icon ".concat(props.className || '')
  })));
};
/* Default Properties */


Icon.defaultProps = {
  slug: undefined,
  size: 20,
  color: _utils.colors.get('primary'),
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