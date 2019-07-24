/* Packages */
import ReactDOMServer from 'react-dom/server';

/* Export */
export const ICONS = Object.assign([
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'bluetooth',
    'camera',
    'check',
    'check-thin',
    'external-ticket',
    'eye',
    'flash',
    'flash-off',
    'info',
    'list',
    'loader',
    'loading',
    'lock',
    'unlock',
    'search',
    'times',

    'arrow-down-circle',
    'arrow-left-circle',
    'arrow-right-circle',
    'arrow-up-circle',
    'check-circle',
    'info-circle',
    'question-circle',
    'times-circle',
], {
    ENCODE_SVG: (reactElement) => {
        return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
    },
});
