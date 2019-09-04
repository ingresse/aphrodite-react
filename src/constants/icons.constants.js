/* Packages */
import ReactDOMServer from 'react-dom/server';

/* Export */
export const ICONS = Object.assign([
    'adjusts',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'bluetooth',
    'camera',
    'card',
    'cards',
    'chart-line',
    'check',
    'delete',
    'external-ticket',
    'eye',
    'flash',
    'flash-off',
    'help',
    'info',
    'items',
    'list',
    'loader',
    'loading',
    'logout',
    'lock',
    'unlock',
    'search',
    'settings',
    'signal',
    'options',
    'minus',
    'plus',
    'times',
    'qrcode',
    'refresh',
    'scan',
    'ticketbooth',
    'transfer',
    'pencil',

    'payment-amex',
    'payment-bankbillet',
    'payment-diners',
    'payment-discover',
    'payment-elo',
    'payment-freepass',
    'payment-mastercard',
    'payment-money',
    'payment-others',
    'payment-paypal',
    'payment-visa',
], {
    ENCODE_SVG: (reactElement) => {
        return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
    },
});
