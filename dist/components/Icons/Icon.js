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

var _IconCheckCircle = _interopRequireDefault(require("./IconCheckCircle"));

var _IconCheckThin = _interopRequireDefault(require("./IconCheckThin"));

var _IconDelete = _interopRequireDefault(require("./IconDelete"));

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

var _IconRefresh = _interopRequireDefault(require("./IconRefresh"));

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
  'check': _IconCheckThin.default,
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
  'refresh': _IconRefresh.default,
  'delete': _IconDelete.default,
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
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBJb0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudHMgLyBJY29ucyAqL1xuaW1wb3J0IEFycm93VXAgZnJvbSAnLi9JY29uQXJyb3dVcCc7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tICcuL0ljb25BcnJvd1JpZ2h0JztcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi9JY29uQXJyb3dEb3duJztcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSAnLi9JY29uQXJyb3dMZWZ0JztcbmltcG9ydCBBcnJvd0Rvd25DaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dEb3duQ2lyY2xlJztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dMZWZ0Q2lyY2xlJztcbmltcG9ydCBBcnJvd1JpZ2h0Q2lyY2xlIGZyb20gJy4vSWNvbkFycm93UmlnaHRDaXJjbGUnO1xuaW1wb3J0IEFycm93VXBDaXJjbGUgZnJvbSAnLi9JY29uQXJyb3dVcENpcmNsZSc7XG5pbXBvcnQgQmx1ZXRvb3RoIGZyb20gJy4vSWNvbkJsdWV0b290aCc7XG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vSWNvbkNhbWVyYSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0ljb25DYXJkJztcbmltcG9ydCBDaGVja0NpcmNsZSBmcm9tICcuL0ljb25DaGVja0NpcmNsZSc7XG5pbXBvcnQgQ2hlY2tUaGluIGZyb20gJy4vSWNvbkNoZWNrVGhpbic7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vSWNvbkRlbGV0ZSc7XG5pbXBvcnQgRXh0ZXJuYWxUaWNrZXQgZnJvbSAnLi9JY29uRXh0ZXJuYWxUaWNrZXQnO1xuaW1wb3J0IEV5ZSBmcm9tICcuL0ljb25FeWUnO1xuaW1wb3J0IEZsYXNoIGZyb20gJy4vSWNvbkZsYXNoJztcbmltcG9ydCBGbGFzaE9mZiBmcm9tICcuL0ljb25GbGFzaE9mZic7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0ljb25JbmZvJztcbmltcG9ydCBJbmZvQ2lyY2xlIGZyb20gJy4vSWNvbkluZm9DaXJjbGUnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9JY29uTGlzdCc7XG5pbXBvcnQgTG9hZGVyRG9udXQgZnJvbSAnLi9JY29uTG9hZGVyRG9udXQnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9JY29uTG9hZGluZyc7XG5pbXBvcnQgTG9jayBmcm9tICcuL0ljb25Mb2NrJztcbmltcG9ydCBNaW51cyBmcm9tICcuL0ljb25NaW51cyc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL0ljb25PcHRpb25zJztcbmltcG9ydCBQZW5jaWwgZnJvbSAnLi9JY29uUGVuY2lsJztcbmltcG9ydCBQbHVzIGZyb20gJy4vSWNvblBsdXMnO1xuaW1wb3J0IFFSQ29kZSBmcm9tICcuL0ljb25RUkNvZGUnO1xuaW1wb3J0IFF1ZXN0aW9uQ2lyY2xlIGZyb20gJy4vSWNvblF1ZXN0aW9uQ2lyY2xlJztcbmltcG9ydCBSZWZyZXNoIGZyb20gJy4vSWNvblJlZnJlc2gnO1xuaW1wb3J0IFNjYW4gZnJvbSAnLi9JY29uU2Nhbic7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vSWNvblNlYXJjaCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9JY29uU2V0dGluZ3MnO1xuaW1wb3J0IFRpY2tldGJvb3RoIGZyb20gJy4vSWNvblRpY2tldGJvb3RoJztcbmltcG9ydCBUaW1lcyBmcm9tICcuL0ljb25UaW1lcyc7XG5pbXBvcnQgVGltZXNDaXJjbGUgZnJvbSAnLi9JY29uVGltZXNDaXJjbGUnO1xuaW1wb3J0IFRyYW5zZmVyIGZyb20gJy4vSWNvblRyYW5zZmVyJztcbmltcG9ydCBVbmxvY2sgZnJvbSAnLi9JY29uVW5sb2NrJztcblxuaW1wb3J0IFBheW1lbnRBbWV4IGZyb20gJy4vSWNvblBheW1lbnRBbWV4JztcbmltcG9ydCBQYXltZW50QmFua0JpbGxldCBmcm9tICcuL0ljb25QYXltZW50QmFua0JpbGxldCc7XG5pbXBvcnQgUGF5bWVudERpbmVycyBmcm9tICcuL0ljb25QYXltZW50RGluZXJzJztcbmltcG9ydCBQYXltZW50RGlzY292ZXIgZnJvbSAnLi9JY29uUGF5bWVudERpc2NvdmVyJztcbmltcG9ydCBQYXltZW50RWxvIGZyb20gJy4vSWNvblBheW1lbnRFbG8nO1xuaW1wb3J0IFBheW1lbnRGcmVlcGFzcyBmcm9tICcuL0ljb25QYXltZW50RnJlZXBhc3MnO1xuaW1wb3J0IFBheW1lbnRNYXN0ZXJjYXJkIGZyb20gJy4vSWNvblBheW1lbnRNYXN0ZXJjYXJkJztcbmltcG9ydCBQYXltZW50TW9uZXkgZnJvbSAnLi9JY29uUGF5bWVudE1vbmV5JztcbmltcG9ydCBQYXltZW50T3RoZXJzIGZyb20gJy4vSWNvblBheW1lbnRPdGhlcnMnO1xuaW1wb3J0IFBheW1lbnRQYXlwYWwgZnJvbSAnLi9JY29uUGF5bWVudFBheXBhbCc7XG5pbXBvcnQgUGF5bWVudFZpc2EgZnJvbSAnLi9JY29uUGF5bWVudFZpc2EnO1xuXG4vKiBNYXBwZXIgKi9cbi8qIFNob3VsZCBiZSBtYXBwZWQgaW50byAnaWNvbnMuY29uc3RhbnRzJyB0b28gKi9cbmNvbnN0IElDT05TID0ge1xuICAgICdhcnJvdy11cCcgICAgICAgICAgOiBBcnJvd1VwLFxuICAgICdhcnJvdy1yaWdodCcgICAgICAgOiBBcnJvd1JpZ2h0LFxuICAgICdhcnJvdy1kb3duJyAgICAgICAgOiBBcnJvd0Rvd24sXG4gICAgJ2Fycm93LWxlZnQnICAgICAgICA6IEFycm93TGVmdCxcbiAgICAnYXJyb3ctZG93bi1jaXJjbGUnIDogQXJyb3dEb3duQ2lyY2xlLFxuICAgICdhcnJvdy1sZWZ0LWNpcmNsZScgOiBBcnJvd0xlZnRDaXJjbGUsXG4gICAgJ2Fycm93LXJpZ2h0LWNpcmNsZSc6IEFycm93UmlnaHRDaXJjbGUsXG4gICAgJ2Fycm93LXVwLWNpcmNsZScgICA6IEFycm93VXBDaXJjbGUsXG4gICAgJ2JsdWV0b290aCcgICAgICAgICA6IEJsdWV0b290aCxcbiAgICAnY2FtZXJhJyAgICAgICAgICAgIDogQ2FtZXJhLFxuICAgICdjYXJkJyAgICAgICAgICAgICAgOiBDYXJkLFxuICAgICdjaGVjaycgICAgICAgICAgICAgOiBDaGVja1RoaW4sXG4gICAgJ2NoZWNrLWNpcmNsZScgICAgICA6IENoZWNrQ2lyY2xlLFxuICAgICdjaGVjay10aGluJyAgICAgICAgOiBDaGVja1RoaW4sXG4gICAgJ2V4dGVybmFsLXRpY2tldCcgICA6IEV4dGVybmFsVGlja2V0LFxuICAgICdleWUnICAgICAgICAgICAgICAgOiBFeWUsXG4gICAgJ2ZsYXNoJyAgICAgICAgICAgICA6IEZsYXNoLFxuICAgICdmbGFzaC1vZmYnICAgICAgICAgOiBGbGFzaE9mZixcbiAgICAnaW5mbycgICAgICAgICAgICAgIDogSW5mbyxcbiAgICAnaW5mby1jaXJjbGUnICAgICAgIDogSW5mb0NpcmNsZSxcbiAgICAnbGlzdCcgICAgICAgICAgICAgIDogTGlzdCxcbiAgICAnbG9hZGVyJyAgICAgICAgICAgIDogTG9hZGVyRG9udXQsXG4gICAgJ2xvYWRpbmcnICAgICAgICAgICA6IExvYWRpbmcsXG4gICAgJ2xvY2snICAgICAgICAgICAgICA6IExvY2ssXG4gICAgJ21pbnVzJyAgICAgICAgICAgICA6IE1pbnVzLFxuICAgICdvcHRpb25zJyAgICAgICAgICAgOiBPcHRpb25zLFxuICAgICdwZW5jaWwnICAgICAgICAgICAgOiBQZW5jaWwsXG4gICAgJ3BsdXMnICAgICAgICAgICAgICA6IFBsdXMsXG4gICAgJ3NlYXJjaCcgICAgICAgICAgICA6IFNlYXJjaCxcbiAgICAnc2V0dGluZ3MnICAgICAgICAgIDogU2V0dGluZ3MsXG4gICAgJ3FyY29kZScgICAgICAgICAgICA6IFFSQ29kZSxcbiAgICAncXVlc3Rpb24tY2lyY2xlJyAgIDogUXVlc3Rpb25DaXJjbGUsXG4gICAgJ3NjYW4nICAgICAgICAgICAgICA6IFNjYW4sXG4gICAgJ3RpY2tldGJvb3RoJyAgICAgICA6IFRpY2tldGJvb3RoLFxuICAgICd0aW1lcycgICAgICAgICAgICAgOiBUaW1lcyxcbiAgICAndGltZXMtY2lyY2xlJyAgICAgIDogVGltZXNDaXJjbGUsXG4gICAgJ3RyYW5zZmVyJyAgICAgICAgICA6IFRyYW5zZmVyLFxuICAgICd1bmxvY2snICAgICAgICAgICAgOiBVbmxvY2ssXG4gICAgJ3JlZnJlc2gnICAgICAgICAgICA6IFJlZnJlc2gsXG4gICAgJ2RlbGV0ZScgICAgICAgICAgICA6IERlbGV0ZSxcblxuICAgICdhbWV4JyAgICAgICAgICAgICAgIDogUGF5bWVudEFtZXgsXG4gICAgJ3BheW1lbnQtYW1leCcgICAgICAgOiBQYXltZW50QW1leCxcbiAgICAnYmFua2JpbGxldCcgICAgICAgICA6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdiYW5rLWJpbGxldCcgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYmFua2JpbGxldCcgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAncGF5bWVudC1iYW5rLWJpbGxldCc6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgICdib2xldG8nICAgICAgICAgICAgIDogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgJ3BheW1lbnQtYm9sZXRvJyAgICAgOiBQYXltZW50QmFua0JpbGxldCxcbiAgICAnZGluZXJzJyAgICAgICAgICAgICA6IFBheW1lbnREaW5lcnMsXG4gICAgJ3BheW1lbnQtZGluZXJzJyAgICAgOiBQYXltZW50RGluZXJzLFxuICAgICdkaXNjb3ZlcicgICAgICAgICAgIDogUGF5bWVudERpc2NvdmVyLFxuICAgICdwYXltZW50LWRpc2NvdmVyJyAgIDogUGF5bWVudERpc2NvdmVyLFxuICAgICdlbG8nICAgICAgICAgICAgICAgIDogUGF5bWVudEVsbyxcbiAgICAncGF5bWVudC1lbG8nICAgICAgICA6IFBheW1lbnRFbG8sXG4gICAgJ2ZyZWVwYXNzJyAgICAgICAgICAgOiBQYXltZW50RnJlZXBhc3MsXG4gICAgJ3BheW1lbnQtZnJlZXBhc3MnICAgOiBQYXltZW50RnJlZXBhc3MsXG4gICAgJ21hc3RlcicgICAgICAgICAgICAgOiBQYXltZW50TWFzdGVyY2FyZCxcbiAgICAnbWFzdGVyY2FyZCcgICAgICAgICA6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgICdwYXltZW50LW1hc3RlcicgICAgIDogUGF5bWVudE1hc3RlcmNhcmQsXG4gICAgJ3BheW1lbnQtbWFzdGVyY2FyZCcgOiBQYXltZW50TWFzdGVyY2FyZCxcbiAgICAnbW9uZXknICAgICAgICAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAnY2FzaCcgICAgICAgICAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAncGF5bWVudC1tb25leScgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAncGF5bWVudC1jYXNoJyAgICAgICA6IFBheW1lbnRNb25leSxcbiAgICAnb3RoZXJzJyAgICAgICAgICAgICA6IFBheW1lbnRPdGhlcnMsXG4gICAgJ3BheW1lbnQtb3RoZXJzJyAgICAgOiBQYXltZW50T3RoZXJzLFxuICAgICdwYXlwYWwnICAgICAgICAgICAgIDogUGF5bWVudFBheXBhbCxcbiAgICAncGF5bWVudC1wYXlwYWwnICAgICA6IFBheW1lbnRQYXlwYWwsXG4gICAgJ3Zpc2EnICAgICAgICAgICAgICAgOiBQYXltZW50VmlzYSxcbiAgICAncGF5bWVudC12aXNhJyAgICAgICA6IFBheW1lbnRWaXNhLFxufTtcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgc3R5bGVzICovXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbGluZUhlaWdodCAgIDogMCxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIHNoYXBlLCBzbHVnIH0gPSBwcm9wcztcbiAgICBjb25zdCBTTFVHID0gKHNsdWcgKyAoIWRpcmVjdGlvbiA/ICcnIDogJy0nICsgZGlyZWN0aW9uKSArICghc2hhcGUgPyAnJyA6ICctJyArIHNoYXBlKSk7XG4gICAgY29uc3QgSUNPTiA9IElDT05TW1NMVUddO1xuXG4gICAgaWYgKCFJQ09OKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPElDT05cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgY29sb3IpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1pY29uICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbHVnICAgICA6ICcnLFxuICAgIGRpcmVjdGlvbjogJycsXG4gICAgc2hhcGUgICAgOiAnJyxcbiAgICBzaXplICAgICA6IDIwLFxuICAgIGNvbG9yICAgIDogJ3NlY29uZGFyeScsXG4gICAgd2lkdGggICAgOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0ICAgOiB1bmRlZmluZWQsXG4gICAgc3R5bGVzICAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkljb24ucHJvcFR5cGVzID0ge1xuICAgIHNsdWcgICAgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaGFwZSAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZSAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aCAgICA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0ICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlcyAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0= */");
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
    color: _utils.colors.getFromTheme(props, color),
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