/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { colors } from '../../utils';

/* Components / Icons */
import ArrowUp from './IconArrowUp';
import ArrowRight from './IconArrowRight';
import ArrowDown from './IconArrowDown';
import ArrowLeft from './IconArrowLeft';
import ArrowDownCircle from './IconArrowDownCircle';
import ArrowLeftCircle from './IconArrowLeftCircle';
import ArrowRightCircle from './IconArrowRightCircle';
import ArrowUpCircle from './IconArrowUpCircle';
import Bluetooth from './IconBluetooth';
import Camera from './IconCamera';
import Card from './IconCard';
import Check from './IconCheck';
import CheckCircle from './IconCheckCircle';
import CheckThin from './IconCheckThin';
import ExternalTicket from './IconExternalTicket';
import Eye from './IconEye';
import Flash from './IconFlash';
import FlashOff from './IconFlashOff';
import Info from './IconInfo';
import InfoCircle from './IconInfoCircle';
import List from './IconList';
import LoaderDonut from './IconLoaderDonut';
import Loading from './IconLoading';
import Lock from './IconLock';
import Minus from './IconMinus';
import Options from './IconOptions';
import Pencil from './IconPencil';
import Plus from './IconPlus';
import QRCode from './IconQRCode';
import QuestionCircle from './IconQuestionCircle';
import Scan from './IconScan';
import Search from './IconSearch';
import Settings from './IconSettings';
import Ticketbooth from './IconTicketbooth';
import Times from './IconTimes';
import TimesCircle from './IconTimesCircle';
import Transfer from './IconTransfer';
import Unlock from './IconUnlock';

import PaymentAmex from './IconPaymentAmex';
import PaymentBankBillet from './IconPaymentBankBillet';
import PaymentDiners from './IconPaymentDiners';
import PaymentDiscover from './IconPaymentDiscover';

/* Mapper */
/* Should be mapped into 'icons.constants' too */
const ICONS = {
    'arrow-up'          : ArrowUp,
    'arrow-right'       : ArrowRight,
    'arrow-down'        : ArrowDown,
    'arrow-left'        : ArrowLeft,
    'arrow-down-circle' : ArrowDownCircle,
    'arrow-left-circle' : ArrowLeftCircle,
    'arrow-right-circle': ArrowRightCircle,
    'arrow-up-circle'   : ArrowUpCircle,
    'bluetooth'         : Bluetooth,
    'camera'            : Camera,
    'card'              : Card,
    'check'             : Check,
    'check-circle'      : CheckCircle,
    'check-thin'        : CheckThin,
    'external-ticket'   : ExternalTicket,
    'eye'               : Eye,
    'flash'             : Flash,
    'flash-off'         : FlashOff,
    'info'              : Info,
    'info-circle'       : InfoCircle,
    'list'              : List,
    'loader'            : LoaderDonut,
    'loading'           : Loading,
    'lock'              : Lock,
    'minus'             : Minus,
    'options'           : Options,
    'pencil'            : Pencil,
    'plus'              : Plus,
    'search'            : Search,
    'settings'          : Settings,
    'qrcode'            : QRCode,
    'question-circle'   : QuestionCircle,
    'scan'              : Scan,
    'ticketbooth'       : Ticketbooth,
    'times'             : Times,
    'times-circle'      : TimesCircle,
    'transfer'          : Transfer,
    'unlock'            : Unlock,

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
    'discover'           : PaymentDiners,
    'payment-discover'   : PaymentDiscover,
};

/* Component Wrapper styles */
const IconWrapper = styled('span')(props => ({
    display      : 'inline-block',
    verticalAlign: 'middle',
    lineHeight   : 0,

    ...props.styles,
}));

/* Component it self */
const Icon = forwardRef((props, ref) => {
    const { direction, shape, slug } = props;
    const SLUG = (slug + (!direction ? '' : '-' + direction) + (!shape ? '' : '-' + shape));
    const ICON = ICONS[SLUG];

    if (!ICON) {
        return null;
    }

    const {
        color,
        className,
        styles,

        ...rest
    } = props;

    return (
        <IconWrapper
            styles={styles}
            className="aph-icon-wrapper">
            <ICON
                {...rest}
                ref={ref}
                color={colors.get(color)}
                className={`aph-icon ${className || ''}`}
            />
        </IconWrapper>
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
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Icon;
