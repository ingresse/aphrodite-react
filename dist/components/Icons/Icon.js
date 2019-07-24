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

var _IconPaymentElo = _interopRequireDefault(require("./IconPaymentElo"));

var _IconPaymentFreepass = _interopRequireDefault(require("./IconPaymentFreepass"));

var _IconPaymentMastercard = _interopRequireDefault(require("./IconPaymentMastercard"));

var _IconPaymentMoney = _interopRequireDefault(require("./IconPaymentMoney"));

var _IconPaymentOthers = _interopRequireDefault(require("./IconPaymentOthers"));

var _IconPaymentPaypal = _interopRequireDefault(require("./IconPaymentPaypal"));

var _IconPaymentVisa = _interopRequireDefault(require("./IconPaymentVisa"));

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
  'discover': _IconPaymentDiscover.default,
  'payment-discover': _IconPaymentDiscover.default,
  'elo': _IconPaymentElo.default,
  'payment-elo': _IconPaymentElo.default,
  'freepass': _IconPaymentFreepass.default,
  'payment-freepass': _IconPaymentFreepass.default,
  'master': _IconPaymentMastercard.default,
  'mastercard': _IconPaymentMastercard.default,
  'payment-master': _IconPaymentMastercard.default,
  'payment-mastercard': _IconPaymentMastercard.default,
  'money': _IconPaymentMoney.default,
  'cash': _IconPaymentMoney.default,
  'payment-money': _IconPaymentMoney.default,
  'payment-cash': _IconPaymentMoney.default,
  'others': _IconPaymentOthers.default,
  'payment-others': _IconPaymentOthers.default,
  'paypal': _IconPaymentPaypal.default,
  'payment-paypal': _IconPaymentPaypal.default,
  'visa': _IconPaymentVisa.default,
  'payment-visa': _IconPaymentVisa.default
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgLyBJY29ucyAqL1xuaW1wb3J0IEFycm93VXAgZnJvbSAnLi9JY29uQXJyb3dVcCc7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICcuL0ljb25BcnJvd1JpZ2h0JztcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnLi9JY29uQXJyb3dMZWZ0JztcbmltcG9ydCBBcnJvd0Rvd25DaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dEb3duQ2lyY2xlJztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dMZWZ0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1JpZ2h0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93UmlnaHRDaXJjbGUnO1xuaW1wb3J0IEFycm93VXBDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dVcENpcmNsZSc7XG5pbXBvcnQgQmx1ZXRvb3RoIGZyb20gJy4vSWNvbkJsdWV0b290aCc7XG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vSWNvbkNhbWVyYSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0ljb25DYXJkJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0ljb25DaGVjayc7XG5pbXBvcnQgQ2hlY2tDaXJjbGUgZnJvbSAnLi9JY29uQ2hlY2tDaXJjbGUnO1xuaW1wb3J0IENoZWNrVGhpbiBmcm9tICcuL0ljb25DaGVja1RoaW4nO1xuaW1wb3J0IEV4dGVybmFsVGlja2V0IGZyb20gJy4vSWNvbkV4dGVybmFsVGlja2V0JztcbmltcG9ydCBFeWUgZnJvbSAnLi9JY29uRXllJztcbmltcG9ydCBGbGFzaCBmcm9tICcuL0ljb25GbGFzaCc7XG5pbXBvcnQgRmxhc2hPZmYgZnJvbSAnLi9JY29uRmxhc2hPZmYnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JY29uSW5mbyc7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tICcuL0ljb25JbmZvQ2lyY2xlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vSWNvbkxpc3QnO1xuaW1wb3J0IExvYWRlckRvbnV0IGZyb20gJy4vSWNvbkxvYWRlckRvbnV0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vSWNvbkxvYWRpbmcnO1xuaW1wb3J0IExvY2sgZnJvbSAnLi9JY29uTG9jayc7XG5pbXBvcnQgTWludXMgZnJvbSAnLi9JY29uTWludXMnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9JY29uT3B0aW9ucyc7XG5pbXBvcnQgUGVuY2lsIGZyb20gJy4vSWNvblBlbmNpbCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuL0ljb25QbHVzJztcbmltcG9ydCBRUkNvZGUgZnJvbSAnLi9JY29uUVJDb2RlJztcbmltcG9ydCBRdWVzdGlvbkNpcmNsZSBmcm9tICcuL0ljb25RdWVzdGlvbkNpcmNsZSc7XG5pbXBvcnQgU2NhbiBmcm9tICcuL0ljb25TY2FuJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9JY29uU2VhcmNoJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL0ljb25TZXR0aW5ncyc7XG5pbXBvcnQgVGlja2V0Ym9vdGggZnJvbSAnLi9JY29uVGlja2V0Ym9vdGgnO1xuaW1wb3J0IFRpbWVzIGZyb20gJy4vSWNvblRpbWVzJztcbmltcG9ydCBUaW1lc0NpcmNsZSBmcm9tICcuL0ljb25UaW1lc0NpcmNsZSc7XG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi9JY29uVHJhbnNmZXInO1xuaW1wb3J0IFVubG9jayBmcm9tICcuL0ljb25VbmxvY2snO1xuXG5pbXBvcnQgUGF5bWVudEFtZXggZnJvbSAnLi9JY29uUGF5bWVudEFtZXgnO1xuaW1wb3J0IFBheW1lbnRCYW5rQmlsbGV0IGZyb20gJy4vSWNvblBheW1lbnRCYW5rQmlsbGV0JztcbmltcG9ydCBQYXltZW50RGluZXJzIGZyb20gJy4vSWNvblBheW1lbnREaW5lcnMnO1xuaW1wb3J0IFBheW1lbnREaXNjb3ZlciBmcm9tICcuL0ljb25QYXltZW50RGlzY292ZXInO1xuaW1wb3J0IFBheW1lbnRFbG8gZnJvbSAnLi9JY29uUGF5bWVudEVsbyc7XG5pbXBvcnQgUGF5bWVudEZyZWVwYXNzIGZyb20gJy4vSWNvblBheW1lbnRGcmVlcGFzcyc7XG5pbXBvcnQgUGF5bWVudE1hc3RlcmNhcmQgZnJvbSAnLi9JY29uUGF5bWVudE1hc3RlcmNhcmQnO1xuaW1wb3J0IFBheW1lbnRNb25leSBmcm9tICcuL0ljb25QYXltZW50TW9uZXknO1xuaW1wb3J0IFBheW1lbnRPdGhlcnMgZnJvbSAnLi9JY29uUGF5bWVudE90aGVycyc7XG5pbXBvcnQgUGF5bWVudFBheXBhbCBmcm9tICcuL0ljb25QYXltZW50UGF5cGFsJztcbmltcG9ydCBQYXltZW50VmlzYSBmcm9tICcuL0ljb25QYXltZW50VmlzYSc7XG5cbi8qIE1hcHBlciAqL1xuLyogU2hvdWxkIGJlIG1hcHBlZCBpbnRvICdpY29ucy5jb25zdGFudHMnIHRvbyAqL1xuY29uc3QgSUNPTlMgPSB7XG4gICAgJ2Fycm93LXVwJyAgICAgICAgICA6IEFycm93VXAsXG4gICAgJ2Fycm93LXJpZ2h0JyAgICAgICA6IEFycm93UmlnaHQsXG4gICAgJ2Fycm93LWRvd24nICAgICAgICA6IEFycm93RG93bixcbiAgICAnYXJyb3ctbGVmdCcgICAgICAgIDogQXJyb3dMZWZ0LFxuICAgICdhcnJvdy1kb3duLWNpcmNsZScgOiBBcnJvd0Rvd25DaXJjbGUsXG4gICAgJ2Fycm93LWxlZnQtY2lyY2xlJyA6IEFycm93TGVmdENpcmNsZSxcbiAgICAnYXJyb3ctcmlnaHQtY2lyY2xlJzogQXJyb3dSaWdodENpcmNsZSxcbiAgICAnYXJyb3ctdXAtY2lyY2xlJyAgIDogQXJyb3dVcENpcmNsZSxcbiAgICAnYmx1ZXRvb3RoJyAgICAgICAgIDogQmx1ZXRvb3RoLFxuICAgICdjYW1lcmEnICAgICAgICAgICAgOiBDYW1lcmEsXG4gICAgJ2NhcmQnICAgICAgICAgICAgICA6IENhcmQsXG4gICAgJ2NoZWNrJyAgICAgICAgICAgICA6IENoZWNrLFxuICAgICdjaGVjay1jaXJjbGUnICAgICAgOiBDaGVja0NpcmNsZSxcbiAgICAnY2hlY2stdGhpbicgICAgICAgIDogQ2hlY2tUaGluLFxuICAgICdleHRlcm5hbC10aWNrZXQnICAgOiBFeHRlcm5hbFRpY2tldCxcbiAgICAnZXllJyAgICAgICAgICAgICAgIDogRXllLFxuICAgICdmbGFzaCcgICAgICAgICAgICAgOiBGbGFzaCxcbiAgICAnZmxhc2gtb2ZmJyAgICAgICAgIDogRmxhc2hPZmYsXG4gICAgJ2luZm8nICAgICAgICAgICAgICA6IEluZm8sXG4gICAgJ2luZm8tY2lyY2xlJyAgICAgICA6IEluZm9DaXJjbGUsXG4gICAgJ2xpc3QnICAgICAgICAgICAgICA6IExpc3QsXG4gICAgJ2xvYWRlcicgICAgICAgICAgICA6IExvYWRlckRvbnV0LFxuICAgICdsb2FkaW5nJyAgICAgICAgICAgOiBMb2FkaW5nLFxuICAgICdsb2NrJyAgICAgICAgICAgICAgOiBMb2NrLFxuICAgICdtaW51cycgICAgICAgICAgICAgOiBNaW51cyxcbiAgICAnb3B0aW9ucycgICAgICAgICAgIDogT3B0aW9ucyxcbiAgICAncGVuY2lsJyAgICAgICAgICAgIDogUGVuY2lsLFxuICAgICdwbHVzJyAgICAgICAgICAgICAgOiBQbHVzLFxuICAgICdzZWFyY2gnICAgICAgICAgICAgOiBTZWFyY2gsXG4gICAgJ3NldHRpbmdzJyAgICAgICAgICA6IFNldHRpbmdzLFxuICAgICdxcmNvZGUnICAgICAgICAgICAgOiBRUkNvZGUsXG4gICAgJ3F1ZXN0aW9uLWNpcmNsZScgICA6IFF1ZXN0aW9uQ2lyY2xlLFxuICAgICdzY2FuJyAgICAgICAgICAgICAgOiBTY2FuLFxuICAgICd0aWNrZXRib290aCcgICAgICAgOiBUaWNrZXRib290aCxcbiAgICAndGltZXMnICAgICAgICAgICAgIDogVGltZXMsXG4gICAgJ3RpbWVzLWNpcmNsZScgICAgICA6IFRpbWVzQ2lyY2xlLFxuICAgICd0cmFuc2ZlcicgICAgICAgICAgOiBUcmFuc2ZlcixcbiAgICAndW5sb2NrJyAgICAgICAgICAgIDogVW5sb2NrLFxuXG4gICAgJ2FtZXgnICAgICAgICAgICAgICAgOiBQYXltZW50QW1leCxcbiAgICAncGF5bWVudC1hbWV4JyAgICAgICA6IFBheW1lbnRBbWV4LFxuICAgICdiYW5rYmlsbGV0JyAgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ2JhbmstYmlsbGV0JyAgICAgICAgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAncGF5bWVudC1iYW5rYmlsbGV0JyA6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdwYXltZW50LWJhbmstYmlsbGV0JzogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ2JvbGV0bycgICAgICAgICAgICAgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAncGF5bWVudC1ib2xldG8nICAgICA6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdkaW5lcnMnICAgICAgICAgICAgIDogUGF5bWVudERpbmVycyxcbiAgICAncGF5bWVudC1kaW5lcnMnICAgICA6IFBheW1lbnREaW5lcnMsXG4gICAgJ2Rpc2NvdmVyJyAgICAgICAgICAgOiBQYXltZW50RGlzY292ZXIsXG4gICAgJ3BheW1lbnQtZGlzY292ZXInICAgOiBQYXltZW50RGlzY292ZXIsXG4gICAgJ2VsbycgICAgICAgICAgICAgICAgOiBQYXltZW50RWxvLFxuICAgICdwYXltZW50LWVsbycgICAgICAgIDogUGF5bWVudEVsbyxcbiAgICAnZnJlZXBhc3MnICAgICAgICAgICA6IFBheW1lbnRGcmVlcGFzcyxcbiAgICAncGF5bWVudC1mcmVlcGFzcycgICA6IFBheW1lbnRGcmVlcGFzcyxcbiAgICAnbWFzdGVyJyAgICAgICAgICAgICA6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgICdtYXN0ZXJjYXJkJyAgICAgICAgIDogUGF5bWVudE1hc3RlcmNhcmQsXG4gICAgJ3BheW1lbnQtbWFzdGVyJyAgICAgOiBQYXltZW50TWFzdGVyY2FyZCxcbiAgICAncGF5bWVudC1tYXN0ZXJjYXJkJyA6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgICdtb25leScgICAgICAgICAgICAgIDogUGF5bWVudE1vbmV5LFxuICAgICdjYXNoJyAgICAgICAgICAgICAgIDogUGF5bWVudE1vbmV5LFxuICAgICdwYXltZW50LW1vbmV5JyAgICAgIDogUGF5bWVudE1vbmV5LFxuICAgICdwYXltZW50LWNhc2gnICAgICAgIDogUGF5bWVudE1vbmV5LFxuICAgICdvdGhlcnMnICAgICAgICAgICAgIDogUGF5bWVudE90aGVycyxcbiAgICAncGF5bWVudC1vdGhlcnMnICAgICA6IFBheW1lbnRPdGhlcnMsXG4gICAgJ3BheXBhbCcgICAgICAgICAgICAgOiBQYXltZW50UGF5cGFsLFxuICAgICdwYXltZW50LXBheXBhbCcgICAgIDogUGF5bWVudFBheXBhbCxcbiAgICAndmlzYScgICAgICAgICAgICAgICA6IFBheW1lbnRWaXNhLFxuICAgICdwYXltZW50LXZpc2EnICAgICAgIDogUGF5bWVudFZpc2EsXG59O1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkKCdzcGFuJykocHJvcHMgPT4gKHtcbiAgICBkaXNwbGF5ICAgICAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBsaW5lSGVpZ2h0ICAgOiAwLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXQgc2VsZiAqL1xuY29uc3QgSWNvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiwgc2hhcGUsIHNsdWcgfSA9IHByb3BzO1xuICAgIGNvbnN0IFNMVUcgPSAoc2x1ZyArICghZGlyZWN0aW9uID8gJycgOiAnLScgKyBkaXJlY3Rpb24pICsgKCFzaGFwZSA/ICcnIDogJy0nICsgc2hhcGUpKTtcbiAgICBjb25zdCBJQ09OID0gSUNPTlNbU0xVR107XG5cbiAgICBpZiAoIUlDT04pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBjb2xvcixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8SUNPTlxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0KGNvbG9yKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaWNvbiAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9JY29uV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2x1ZyAgICAgOiAnJyxcbiAgICBkaXJlY3Rpb246ICcnLFxuICAgIHNoYXBlICAgIDogJycsXG4gICAgc2l6ZSAgICAgOiAyMCxcbiAgICBjb2xvciAgICA6ICdzZWNvbmRhcnknLFxuICAgIHdpZHRoICAgIDogdW5kZWZpbmVkLFxuICAgIGhlaWdodCAgIDogdW5kZWZpbmVkLFxuICAgIHN0eWxlcyAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgICBzbHVnICAgICA6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkaXJlY3Rpb246IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hhcGUgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemUgICAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvciAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGggICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodCAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZXMgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19 */");
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