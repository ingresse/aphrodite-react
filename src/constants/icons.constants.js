/* Packages */
import ReactDOMServer from 'react-dom/server';

/* Export */
export const ICONS = Object.assign([
    'arrow-down-circle',
    'arrow-left-circle',
    'arrow-right-circle',
    'arrow-up-circle',
    'info-circle',
    'check',
    'check-circle',
    'check-thin',
    'question-circle',
    'times-circle',
], {
    encodeSvg: (reactElement) => {
        return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
    },
});
