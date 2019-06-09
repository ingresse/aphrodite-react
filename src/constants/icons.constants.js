/* Packages */
import ReactDOMServer from 'react-dom/server';

/* Export */
export const ICONS = Object.assign([
    'arrow-down',
    'arrow-down-circle',
    'arrow-left-circle',
    'arrow-right-circle',
    'arrow-up-circle',
    'info-circle',
    'check',
    'check-circle',
    'check-thin',
    'loader',
    'loading',
    'question-circle',
    'times-circle',
], {
    ENCODE_SVG: (reactElement) => {
        return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
    },
});
