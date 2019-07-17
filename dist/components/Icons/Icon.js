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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgLyBJY29ucyAqL1xuaW1wb3J0IEFycm93RG93biBmcm9tICcuL0ljb25BcnJvd0Rvd24nO1xuaW1wb3J0IEFycm93RG93bkNpcmNsZSBmcm9tICcuL0ljb25BcnJvd0Rvd25DaXJjbGUnO1xuaW1wb3J0IEFycm93TGVmdENpcmNsZSBmcm9tICcuL0ljb25BcnJvd0xlZnRDaXJjbGUnO1xuaW1wb3J0IEFycm93UmlnaHRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dSaWdodENpcmNsZSc7XG5pbXBvcnQgQXJyb3dVcENpcmNsZSBmcm9tICcuL0ljb25BcnJvd1VwQ2lyY2xlJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0ljb25DaGVjayc7XG5pbXBvcnQgQ2hlY2tDaXJjbGUgZnJvbSAnLi9JY29uQ2hlY2tDaXJjbGUnO1xuaW1wb3J0IENoZWNrVGhpbiBmcm9tICcuL0ljb25DaGVja1RoaW4nO1xuaW1wb3J0IEluZm9DaXJjbGUgZnJvbSAnLi9JY29uSW5mb0NpcmNsZSc7XG5pbXBvcnQgTG9hZGVyRG9udXQgZnJvbSAnLi9JY29uTG9hZGVyRG9udXQnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9JY29uTG9hZGluZyc7XG5pbXBvcnQgUGVuY2lsIGZyb20gJy4vSWNvblBlbmNpbCc7XG5pbXBvcnQgUXVlc3Rpb25DaXJjbGUgZnJvbSAnLi9JY29uUXVlc3Rpb25DaXJjbGUnO1xuaW1wb3J0IFRpbWVzQ2lyY2xlIGZyb20gJy4vSWNvblRpbWVzQ2lyY2xlJztcblxuLyogTWFwcGVyICovXG4vKiBTaG91bGQgYmUgbWFwcGVkIGludG8gJ2ljb25zLmNvbnN0YW50cycgdG9vICovXG5jb25zdCBJQ09OUyA9IHtcbiAgICAnYXJyb3ctZG93bicgICAgICAgIDogQXJyb3dEb3duLFxuICAgICdhcnJvdy1kb3duLWNpcmNsZScgOiBBcnJvd0Rvd25DaXJjbGUsXG4gICAgJ2Fycm93LWxlZnQtY2lyY2xlJyA6IEFycm93TGVmdENpcmNsZSxcbiAgICAnYXJyb3ctcmlnaHQtY2lyY2xlJzogQXJyb3dSaWdodENpcmNsZSxcbiAgICAnYXJyb3ctdXAtY2lyY2xlJyAgIDogQXJyb3dVcENpcmNsZSxcbiAgICAnY2hlY2snICAgICAgICAgICAgIDogQ2hlY2ssXG4gICAgJ2NoZWNrLWNpcmNsZScgICAgICA6IENoZWNrQ2lyY2xlLFxuICAgICdjaGVjay10aGluJyAgICAgICAgOiBDaGVja1RoaW4sXG4gICAgJ2luZm8tY2lyY2xlJyAgICAgICA6IEluZm9DaXJjbGUsXG4gICAgJ2xvYWRlcicgICAgICAgICAgICA6IExvYWRlckRvbnV0LFxuICAgICdsb2FkaW5nJyAgICAgICAgICAgOiBMb2FkaW5nLFxuICAgICdwZW5jaWwnICAgICAgICAgICAgOiBQZW5jaWwsXG4gICAgJ3F1ZXN0aW9uLWNpcmNsZScgICA6IFF1ZXN0aW9uQ2lyY2xlLFxuICAgICd0aW1lcy1jaXJjbGUnICAgICAgOiBUaW1lc0NpcmNsZSxcbn07XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIGxpbmVIZWlnaHQgICA6IDAsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IElDT04gPSBJQ09OU1twcm9wcy5zbHVnXTtcblxuICAgIGlmICghSUNPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbG9yLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25XcmFwcGVyIGNsYXNzTmFtZT1cImFwaC1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJQ09OXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0KGNvbG9yKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaWNvbiAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9JY29uV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2x1ZyAgOiB1bmRlZmluZWQsXG4gICAgc2l6ZSAgOiAyMCxcbiAgICBjb2xvciA6ICdzZWNvbmRhcnknLFxuICAgIHdpZHRoIDogdW5kZWZpbmVkLFxuICAgIEhlaWdodDogdW5kZWZpbmVkLFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSWNvbi5wcm9wVHlwZXMgPSB7XG4gICAgc2x1ZyAgOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZSAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19 */");
/* Component it self */

var Icon = (0, _react.forwardRef)(function (props, ref) {
  var ICON = ICONS[props.slug];

  if (!ICON) {
    return null;
  }

  var color = props.color,
      className = props.className;
  return _react.default.createElement(IconWrapper, {
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, props, {
    ref: ref,
    color: _utils.colors.get(color),
    className: "aph-icon ".concat(className || '')
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