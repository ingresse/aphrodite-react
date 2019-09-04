/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { colors } from '../../utils';

/* Components / Icons */
import Adjusts from './IconAdjusts';
import ArrowUp from './IconArrowUp';
import ArrowRight from './IconArrowRight';
import ArrowDown from './IconArrowDown';
import ArrowLeft from './IconArrowLeft';
import Bluetooth from './IconBluetooth';
import Camera from './IconCamera';
import Card from './IconCard';
import Cards from './IconCards';
import ChartLine from './IconChartLine';
import CheckThin from './IconCheckThin';
import Delete from './IconDelete';
import ExternalTicket from './IconExternalTicket';
import Eye from './IconEye';
import Flash from './IconFlash';
import FlashOff from './IconFlashOff';
import Info from './IconInfo';
import Items from './IconItems';
import List from './IconList';
import LoaderDonut from './IconLoaderDonut';
import Loading from './IconLoading';
import Lock from './IconLock';
import Logout from './IconLogout';
import Minus from './IconMinus';
import Options from './IconOptions';
import Pencil from './IconPencil';
import Plus from './IconPlus';
import QRCode from './IconQRCode';
import Refresh from './IconRefresh';
import Scan from './IconScan';
import Search from './IconSearch';
import Settings from './IconSettings';
import Signal from './IconSignal';
import Ticketbooth from './IconTicketbooth';
import Times from './IconTimes';
import Transfer from './IconTransfer';
import Unlock from './IconUnlock';

import PaymentAmex from './IconPaymentAmex';
import PaymentBankBillet from './IconPaymentBankBillet';
import PaymentDiners from './IconPaymentDiners';
import PaymentDiscover from './IconPaymentDiscover';
import PaymentElo from './IconPaymentElo';
import PaymentFreepass from './IconPaymentFreepass';
import PaymentMastercard from './IconPaymentMastercard';
import PaymentMoney from './IconPaymentMoney';
import PaymentOthers from './IconPaymentOthers';
import PaymentPaypal from './IconPaymentPaypal';
import PaymentVisa from './IconPaymentVisa';

/* Mapper */
/* Should be mapped into 'icons.constants' too */
const ICONS = {
    'adjusts'           : Adjusts,
    'arrow-up'          : ArrowUp,
    'arrow-right'       : ArrowRight,
    'arrow-down'        : ArrowDown,
    'arrow-left'        : ArrowLeft,
    'bluetooth'         : Bluetooth,
    'camera'            : Camera,
    'card'              : Card,
    'cards'             : Cards,
    'chart-line'        : ChartLine,
    'check'             : CheckThin,
    'check-thin'        : CheckThin,
    'external-ticket'   : ExternalTicket,
    'eye'               : Eye,
    'flash'             : Flash,
    'flash-off'         : FlashOff,
    'info'              : Info,
    'items'             : Items,
    'list'              : List,
    'loader'            : LoaderDonut,
    'loading'           : Loading,
    'lock'              : Lock,
    'logout'            : Logout,
    'minus'             : Minus,
    'options'           : Options,
    'pencil'            : Pencil,
    'plus'              : Plus,
    'qrcode'            : QRCode,
    'scan'              : Scan,
    'search'            : Search,
    'settings'          : Settings,
    'signal'            : Signal,
    'ticketbooth'       : Ticketbooth,
    'times'             : Times,
    'transfer'          : Transfer,
    'unlock'            : Unlock,
    'refresh'           : Refresh,
    'delete'            : Delete,

    'amex'               : PaymentAmex,
    'payment-amex'       : PaymentAmex,
    'bankbillet'         : PaymentBankBillet,
    'bank-billet'        : PaymentBankBillet,
    'payment-bankbillet' : PaymentBankBillet,
    'payment-bank-billet': PaymentBankBillet,
    'boleto'             : PaymentBankBillet,
    'payment-boleto'     : PaymentBankBillet,
    'diners'             : PaymentDiners,
    'payment-diners'     : PaymentDiners,
    'discover'           : PaymentDiscover,
    'payment-discover'   : PaymentDiscover,
    'elo'                : PaymentElo,
    'payment-elo'        : PaymentElo,
    'freepass'           : PaymentFreepass,
    'payment-freepass'   : PaymentFreepass,
    'master'             : PaymentMastercard,
    'mastercard'         : PaymentMastercard,
    'payment-master'     : PaymentMastercard,
    'payment-mastercard' : PaymentMastercard,
    'money'              : PaymentMoney,
    'cash'               : PaymentMoney,
    'payment-money'      : PaymentMoney,
    'payment-cash'       : PaymentMoney,
    'others'             : PaymentOthers,
    'payment-others'     : PaymentOthers,
    'paypal'             : PaymentPaypal,
    'payment-paypal'     : PaymentPaypal,
    'visa'               : PaymentVisa,
    'payment-visa'       : PaymentVisa,
};

/* Component Wrapper styles */
const IconWrapper = styled.svg`
    display       : inline-block;
    line-height   : 0;
    vertical-align: middle;

    ${props => props.aphStyles};
`;

/* Component it self */
const Icon = forwardRef((props, ref) => {
    const { direction, shape, slug } = props;
    const SLUG = (slug + (!direction ? '' : '-' + direction) + (!shape ? '' : '-' + shape));
    const SelectedIcon = ICONS[SLUG];

    if (!SelectedIcon) {
        return null;
    }

    /**
     * Props
     */
    const {
        color,
        className,
        styles,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <IconWrapper
            {...rest}
            ref={ref}
            as={SelectedIcon}
            aphStyles={styles}
            color={colors.getFromTheme(props, color)}
            className={`aph-icon aph-icon-wrapper ${className || ''}`}
        />
    );
});

/* Default Properties */
Icon.defaultProps = {
    slug     : '',
    direction: '',
    shape    : '',
    size     : 20,
    color    : 'secondary',
    width    : undefined,
    height   : undefined,
    styles   : {},
    toEncode : false,
};

/* Properties Types */
Icon.propTypes = {
    slug     : propTypes.string.isRequired,
    direction: propTypes.string,
    shape    : propTypes.string,
    size     : propTypes.number,
    color    : propTypes.string,
    width    : propTypes.number,
    height   : propTypes.number,
    toEncode : propTypes.bool,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Icon;
