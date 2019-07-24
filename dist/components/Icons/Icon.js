"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _IconArrowUp = _interopRequireDefault(require("./IconArrowUp"));

var _IconArrowRight = _interopRequireDefault(require("./IconArrowRight"));

var _IconArrowDown = _interopRequireDefault(require("./IconArrowDown"));

var _IconArrowLeft = _interopRequireDefault(require("./IconArrowLeft"));

var _IconArrowDownCircle = _interopRequireDefault(require("./IconArrowDownCircle"));

var _IconArrowLeftCircle = _interopRequireDefault(require("./IconArrowLeftCircle"));

var _IconArrowRightCircle = _interopRequireDefault(require("./IconArrowRightCircle"));

var _IconArrowUpCircle = _interopRequireDefault(require("./IconArrowUpCircle"));

var _IconBluetooth = _interopRequireDefault(require("./IconBluetooth"));

var _IconCamera = _interopRequireDefault(require("./IconCamera"));

var _IconCard = _interopRequireDefault(require("./IconCard"));

var _IconCheck = _interopRequireDefault(require("./IconCheck"));

var _IconCheckCircle = _interopRequireDefault(require("./IconCheckCircle"));

var _IconCheckThin = _interopRequireDefault(require("./IconCheckThin"));

var _IconExternalTicket = _interopRequireDefault(require("./IconExternalTicket"));

var _IconEye = _interopRequireDefault(require("./IconEye"));

var _IconFlash = _interopRequireDefault(require("./IconFlash"));

var _IconFlashOff = _interopRequireDefault(require("./IconFlashOff"));

var _IconInfo = _interopRequireDefault(require("./IconInfo"));

var _IconInfoCircle = _interopRequireDefault(require("./IconInfoCircle"));

var _IconList = _interopRequireDefault(require("./IconList"));

var _IconLoaderDonut = _interopRequireDefault(require("./IconLoaderDonut"));

var _IconLoading = _interopRequireDefault(require("./IconLoading"));

var _IconLock = _interopRequireDefault(require("./IconLock"));

var _IconMinus = _interopRequireDefault(require("./IconMinus"));

var _IconOptions = _interopRequireDefault(require("./IconOptions"));

var _IconPencil = _interopRequireDefault(require("./IconPencil"));

var _IconPlus = _interopRequireDefault(require("./IconPlus"));

var _IconQRCode = _interopRequireDefault(require("./IconQRCode"));

var _IconQuestionCircle = _interopRequireDefault(require("./IconQuestionCircle"));

var _IconScan = _interopRequireDefault(require("./IconScan"));

var _IconSearch = _interopRequireDefault(require("./IconSearch"));

var _IconSettings = _interopRequireDefault(require("./IconSettings"));

var _IconTicketbooth = _interopRequireDefault(require("./IconTicketbooth"));

var _IconTimes = _interopRequireDefault(require("./IconTimes"));

var _IconTimesCircle = _interopRequireDefault(require("./IconTimesCircle"));

var _IconTransfer = _interopRequireDefault(require("./IconTransfer"));

var _IconUnlock = _interopRequireDefault(require("./IconUnlock"));

var _IconPaymentAmex = _interopRequireDefault(require("./IconPaymentAmex"));

var _IconPaymentBankBillet = _interopRequireDefault(require("./IconPaymentBankBillet"));

var _IconPaymentDiners = _interopRequireDefault(require("./IconPaymentDiners"));

var _IconPaymentDiscover = _interopRequireDefault(require("./IconPaymentDiscover"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Mapper */

/* Should be mapped into 'icons.constants' too */
var ICONS = {
  'arrow-up': _IconArrowUp.default,
  'arrow-right': _IconArrowRight.default,
  'arrow-down': _IconArrowDown.default,
  'arrow-left': _IconArrowLeft.default,
  'arrow-down-circle': _IconArrowDownCircle.default,
  'arrow-left-circle': _IconArrowLeftCircle.default,
  'arrow-right-circle': _IconArrowRightCircle.default,
  'arrow-up-circle': _IconArrowUpCircle.default,
  'bluetooth': _IconBluetooth.default,
  'camera': _IconCamera.default,
  'card': _IconCard.default,
  'check': _IconCheck.default,
  'check-circle': _IconCheckCircle.default,
  'check-thin': _IconCheckThin.default,
  'external-ticket': _IconExternalTicket.default,
  'eye': _IconEye.default,
  'flash': _IconFlash.default,
  'flash-off': _IconFlashOff.default,
  'info': _IconInfo.default,
  'info-circle': _IconInfoCircle.default,
  'list': _IconList.default,
  'loader': _IconLoaderDonut.default,
  'loading': _IconLoading.default,
  'lock': _IconLock.default,
  'minus': _IconMinus.default,
  'options': _IconOptions.default,
  'pencil': _IconPencil.default,
  'plus': _IconPlus.default,
  'search': _IconSearch.default,
  'settings': _IconSettings.default,
  'qrcode': _IconQRCode.default,
  'question-circle': _IconQuestionCircle.default,
  'scan': _IconScan.default,
  'ticketbooth': _IconTicketbooth.default,
  'times': _IconTimes.default,
  'times-circle': _IconTimesCircle.default,
  'transfer': _IconTransfer.default,
  'unlock': _IconUnlock.default,
  'amex': _IconPaymentAmex.default,
  'payment-amex': _IconPaymentAmex.default,
  'bankbillet': _IconPaymentBankBillet.default,
  'bank-billet': _IconPaymentBankBillet.default,
  'payment-bankbillet': _IconPaymentBankBillet.default,
  'payment-bank-billet': _IconPaymentBankBillet.default,
  'boleto': _IconPaymentBankBillet.default,
  'payment-boleto': _IconPaymentBankBillet.default,
  'diners': _IconPaymentDiners.default,
  'payment-diners': _IconPaymentDiners.default,
  'discover': _IconPaymentDiners.default,
  'payment-discover': _IconPaymentDiscover.default
};
/* Component Wrapper styles */

var IconWrapper = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e34a6r20"
})(function (props) {
  return _objectSpread({
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgLyBJY29ucyAqL1xuaW1wb3J0IEFycm93VXAgZnJvbSAnLi9JY29uQXJyb3dVcCc7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICcuL0ljb25BcnJvd1JpZ2h0JztcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnLi9JY29uQXJyb3dMZWZ0JztcbmltcG9ydCBBcnJvd0Rvd25DaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dEb3duQ2lyY2xlJztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dMZWZ0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1JpZ2h0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93UmlnaHRDaXJjbGUnO1xuaW1wb3J0IEFycm93VXBDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dVcENpcmNsZSc7XG5pbXBvcnQgQmx1ZXRvb3RoIGZyb20gJy4vSWNvbkJsdWV0b290aCc7XG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vSWNvbkNhbWVyYSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0ljb25DYXJkJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0ljb25DaGVjayc7XG5pbXBvcnQgQ2hlY2tDaXJjbGUgZnJvbSAnLi9JY29uQ2hlY2tDaXJjbGUnO1xuaW1wb3J0IENoZWNrVGhpbiBmcm9tICcuL0ljb25DaGVja1RoaW4nO1xuaW1wb3J0IEV4dGVybmFsVGlja2V0IGZyb20gJy4vSWNvbkV4dGVybmFsVGlja2V0JztcbmltcG9ydCBFeWUgZnJvbSAnLi9JY29uRXllJztcbmltcG9ydCBGbGFzaCBmcm9tICcuL0ljb25GbGFzaCc7XG5pbXBvcnQgRmxhc2hPZmYgZnJvbSAnLi9JY29uRmxhc2hPZmYnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JY29uSW5mbyc7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tICcuL0ljb25JbmZvQ2lyY2xlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vSWNvbkxpc3QnO1xuaW1wb3J0IExvYWRlckRvbnV0IGZyb20gJy4vSWNvbkxvYWRlckRvbnV0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IExvY2sgZnJvbSAnLi9JY29uTG9jayc7XG5pbXBvcnQgTWludXMgZnJvbSAnLi9JY29uTWludXMnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9JY29uT3B0aW9ucyc7XG5pbXBvcnQgUGVuY2lsIGZyb20gJy4vSWNvblBlbmNpbCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuL0ljb25QbHVzJztcbmltcG9ydCBRUkNvZGUgZnJvbSAnLi9JY29uUVJDb2RlJztcbmltcG9ydCBRdWVzdGlvbkNpcmNsZSBmcm9tICcuL0ljb25RdWVzdGlvbkNpcmNsZSc7XG5pbXBvcnQgU2NhbiBmcm9tICcuL0ljb25TY2FuJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9JY29uU2VhcmNoJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL0ljb25TZXR0aW5ncyc7XG5pbXBvcnQgVGlja2V0Ym9vdGggZnJvbSAnLi9JY29uVGlja2V0Ym9vdGgnO1xuaW1wb3J0IFRpbWVzIGZyb20gJy4vSWNvblRpbWVzJztcbmltcG9ydCBUaW1lc0NpcmNsZSBmcm9tICcuL0ljb25UaW1lc0NpcmNsZSc7XG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi9JY29uVHJhbnNmZXInO1xuaW1wb3J0IFVubG9jayBmcm9tICcuL0ljb25VbmxvY2snO1xuXG5pbXBvcnQgUGF5bWVudEFtZXggZnJvbSAnLi9JY29uUGF5bWVudEFtZXgnO1xuaW1wb3J0IFBheW1lbnRCYW5rQmlsbGV0IGZyb20gJy4vSWNvblBheW1lbnRCYW5rQmlsbGV0JztcbmltcG9ydCBQYXltZW50RGluZXJzIGZyb20gJy4vSWNvblBheW1lbnREaW5lcnMnO1xuaW1wb3J0IFBheW1lbnREaXNjb3ZlciBmcm9tICcuL0ljb25QYXltZW50RGlzY292ZXInO1xuXG4vKiBNYXBwZXIgKi9cbi8qIFNob3VsZCBiZSBtYXBwZWQgaW50byAnaWNvbnMuY29uc3RhbnRzJyB0b28gKi9cbmNvbnN0IElDT05TID0ge1xuICAgICdhcnJvdy11cCcgICAgICAgICAgOiBBcnJvd1VwLFxuICAgICdhcnJvdy1yaWdodCcgICAgICAgOiBBcnJvd1JpZ2h0LFxuICAgICdhcnJvdy1kb3duJyAgICAgICAgOiBBcnJvd0Rvd24sXG4gICAgJ2Fycm93LWxlZnQnICAgICAgICA6IEFycm93TGVmdCxcbiAgICAnYXJyb3ctZG93bi1jaXJjbGUnIDogQXJyb3dEb3duQ2lyY2xlLFxuICAgICdhcnJvdy1sZWZ0LWNpcmNsZScgOiBBcnJvd0xlZnRDaXJjbGUsXG4gICAgJ2Fycm93LXJpZ2h0LWNpcmNsZSc6IEFycm93UmlnaHRDaXJjbGUsXG4gICAgJ2Fycm93LXVwLWNpcmNsZScgICA6IEFycm93VXBDaXJjbGUsXG4gICAgJ2JsdWV0b290aCcgICAgICAgICA6IEJsdWV0b290aCxcbiAgICAnY2FtZXJhJyAgICAgICAgICAgIDogQ2FtZXJhLFxuICAgICdjYXJkJyAgICAgICAgICAgICAgOiBDYXJkLFxuICAgICdjaGVjaycgICAgICAgICAgICAgOiBDaGVjayxcbiAgICAnY2hlY2stY2lyY2xlJyAgICAgIDogQ2hlY2tDaXJjbGUsXG4gICAgJ2NoZWNrLXRoaW4nICAgICAgICA6IENoZWNrVGhpbixcbiAgICAnZXh0ZXJuYWwtdGlja2V0JyAgIDogRXh0ZXJuYWxUaWNrZXQsXG4gICAgJ2V5ZScgICAgICAgICAgICAgICA6IEV5ZSxcbiAgICAnZmxhc2gnICAgICAgICAgICAgIDogRmxhc2gsXG4gICAgJ2ZsYXNoLW9mZicgICAgICAgICA6IEZsYXNoT2ZmLFxuICAgICdpbmZvJyAgICAgICAgICAgICAgOiBJbmZvLFxuICAgICdpbmZvLWNpcmNsZScgICAgICAgOiBJbmZvQ2lyY2xlLFxuICAgICdsaXN0JyAgICAgICAgICAgICAgOiBMaXN0LFxuICAgICdsb2FkZXInICAgICAgICAgICAgOiBMb2FkZXJEb251dCxcbiAgICAnbG9hZGluZycgICAgICAgICAgIDogTG9hZGluZyxcbiAgICAnbG9jaycgICAgICAgICAgICAgIDogTG9jayxcbiAgICAnbWludXMnICAgICAgICAgICAgIDogTWludXMsXG4gICAgJ29wdGlvbnMnICAgICAgICAgICA6IE9wdGlvbnMsXG4gICAgJ3BlbmNpbCcgICAgICAgICAgICA6IFBlbmNpbCxcbiAgICAncGx1cycgICAgICAgICAgICAgIDogUGx1cyxcbiAgICAnc2VhcmNoJyAgICAgICAgICAgIDogU2VhcmNoLFxuICAgICdzZXR0aW5ncycgICAgICAgICAgOiBTZXR0aW5ncyxcbiAgICAncXJjb2RlJyAgICAgICAgICAgIDogUVJDb2RlLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnICAgOiBRdWVzdGlvbkNpcmNsZSxcbiAgICAnc2NhbicgICAgICAgICAgICAgIDogU2NhbixcbiAgICAndGlja2V0Ym9vdGgnICAgICAgIDogVGlja2V0Ym9vdGgsXG4gICAgJ3RpbWVzJyAgICAgICAgICAgICA6IFRpbWVzLFxuICAgICd0aW1lcy1jaXJjbGUnICAgICAgOiBUaW1lc0NpcmNsZSxcbiAgICAndHJhbnNmZXInICAgICAgICAgIDogVHJhbnNmZXIsXG4gICAgJ3VubG9jaycgICAgICAgICAgICA6IFVubG9jayxcblxuICAgICdhbWV4JyAgICAgICAgICAgICAgIDogUGF5bWVudEFtZXgsXG4gICAgJ3BheW1lbnQtYW1leCcgICAgICAgOiBQYXltZW50QW1leCxcbiAgICAnYmFua2JpbGxldCcgICAgICAgICA6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdiYW5rLWJpbGxldCcgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYmFua2JpbGxldCcgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAncGF5bWVudC1iYW5rLWJpbGxldCc6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdib2xldG8nICAgICAgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYm9sZXRvJyAgICAgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAnZGluZXJzJyAgICAgICAgICAgICA6IFBheW1lbnREaW5lcnMsXG4gICAgJ3BheW1lbnQtZGluZXJzJyAgICAgOiBQYXltZW50RGluZXJzLFxuICAgICdkaXNjb3ZlcicgICAgICAgICAgIDogUGF5bWVudERpbmVycyxcbiAgICAncGF5bWVudC1kaXNjb3ZlcicgICA6IFBheW1lbnREaXNjb3Zlcixcbn07XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQoJ3NwYW4nKShwcm9wcyA9PiAoe1xuICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIGxpbmVIZWlnaHQgICA6IDAsXG5cbiAgICAuLi5wcm9wcy5zdHlsZXMsXG59KSk7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBzaGFwZSwgc2x1ZyB9ID0gcHJvcHM7XG4gICAgY29uc3QgU0xVRyA9IChzbHVnICsgKCFkaXJlY3Rpb24gPyAnJyA6ICctJyArIGRpcmVjdGlvbikgKyAoIXNoYXBlID8gJycgOiAnLScgKyBzaGFwZSkpO1xuICAgIGNvbnN0IElDT04gPSBJQ09OU1tTTFVHXTtcblxuICAgIGlmICghSUNPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJQ09OXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXQoY29sb3IpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pY29uICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbHVnICAgICA6ICcnLFxuICAgIGRpcmVjdGlvbjogJycsXG4gICAgc2hhcGUgICAgOiAnJyxcbiAgICBzaXplICAgICA6IDIwLFxuICAgIGNvbG9yICAgIDogJ3NlY29uZGFyeScsXG4gICAgd2lkdGggICAgOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0ICAgOiB1bmRlZmluZWQsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgICAgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaGFwZSAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZSAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0ICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0= */");
/* Component it self */

var Icon = (0, _react.forwardRef)(function (props, ref) {
  var direction = props.direction,
      shape = props.shape,
      slug = props.slug;
  var SLUG = slug + (!direction ? '' : '-' + direction) + (!shape ? '' : '-' + shape);
  var ICON = ICONS[SLUG];

  if (!ICON) {
    return null;
  }

  var color = props.color,
      className = props.className,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["color", "className", "styles"]);

  return _react.default.createElement(IconWrapper, {
    styles: styles,
    className: "aph-icon-wrapper"
  }, _react.default.createElement(ICON, _extends({}, rest, {
    ref: ref,
    color: _utils.colors.get(color),
    className: "aph-icon " + (className || '')
  })));
});
/* Default Properties */

Icon.defaultProps = {
  slug: '',
  direction: '',
  shape: '',
  size: 20,
  color: 'secondary',
  width: undefined,
  height: undefined,
  styles: {}
};
/* Properties Types */

Icon.propTypes = {
  slug: _propTypes.default.string.isRequired,
  direction: _propTypes.default.string,
  shape: _propTypes.default.string,
  size: _propTypes.default.number,
  color: _propTypes.default.string,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Icon;
exports.default = _default;