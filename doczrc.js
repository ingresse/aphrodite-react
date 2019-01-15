/* Plugin */
import { css } from 'docz-plugin-css';

/* Docz Custom Settings */
export default {
    title      : 'APHRODITE',
    base       : '/aphrodite-react/',
    dest       : './docs/',
    src        : './src/',
    hashRouter : true,
    htmlContext: {
        head: {
            links: [
                {
                    rel : 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
                },
            ],
        },
    },
    themeConfig: {
        mode  : 'light',
        colors: {
            primary: '#00A5DB',
        },
        styles: {
            container: {
                width   : '100%',
                maxWidth: '1440px',
            },
            body: {
                fontFamily: '"Roboto", Helvetica, sans-serif',
                fontWeight: '400',
                fontSize  : '16px',
                lineHeight: '20px',
            },
            h1: {
                fontFamily: '"Roboto", Helvetica, sans-serif',
                fontWeight   : '700',
                fontSize     : '60px',
                lineHeight   : '60px',
                textTransform: 'uppercase',
                margin       : '40px 0 20px',
                padding      : '10px 0',
            },
            h2: {
                fontWeight   : '700',
                fontSize     : '32px',
                lineHeight   : '40px',
                textTransform: 'uppercase',
                margin       : '40px 0 20px',
                padding      : '10px 0',
            },
        },
    },
    plugins: [
        css({ preprocessor: 'sass' }),
        css({ preprocessor: 'stylus' }),
    ],
}
