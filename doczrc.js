/* Plugin */
import { css } from 'docz-plugin-css';

import { colors } from './src/utils';

/* Docz Custom Settings */
export default {
    title      : 'APHRODITE',
    base       : '/aphrodite-react/',
    dest       : './docs/',
    src        : './src/',
    codeSandbox: false,
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
        codemirrorTheme: 'docz-dark',
        radii : '5px',
        linesToScrollEditor: 50,
        colors: {
            grayExtraLight: colors.get('mercury', 'crystal', 0.5),
            grayLight     : colors.get('mercury', 'crystal'),
            gray          : colors.get('mercury'),
            grayDark      : colors.get('mercury', 'dark'),
            grayExtraDark : colors.get('oil', 'crystal'),
            dark          : colors.get('oil'),

            blue   : colors.get('ocean'),
            skyBlue: colors.get('ocean', 'crystal'),

            /** properties bellow depends on mode select */
            primary: colors.get('ocean'),
            text   : colors.get('black'),
            link   : colors.get('ocean'),

            footerText: colors.get('mercury', 'dark'),

            sidebarBg       : colors.get('mercury', 'crystal', 0.25),
            sidebarText     : colors.get('black'),
            sidebarHighlight: null,
            sidebarBorder   : colors.get('mercury', 'crystal'),

            background: colors.get('white'),
            border    : colors.get('mercury', 'crystal'),

            theadColor: colors.get('mercury', 'light'),
            theadBg   : colors.get('mercury', 'crystal'),
            tableColor: colors.get('black'),

            codeBg   : colors.get('mercury', 'crystal', 0.5),
            codeColor: colors.get('oil'),

            preBg: colors.get('mercury', 'crystal', 0.5),

            blockquoteBg    : colors.get('mercury', 'crystal', 0.5),
            blockquoteBorder: colors.get('mercury', 'light'),
            blockquoteColor : colors.get('mercury', 'dark'),
        },
        styles: {
            body: `
                @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

                font-family: "Roboto", monospace;
                font-weight: 400;
                font-size  : 16px;
                line-height: 20px;
            `,
            container: `
                width    : 100% !important;
                max-width: 1440px;
            `,
            h1: `
                font-family: "Roboto", monospace;
                font-weight: 700;
                font-size  : 36px;
                line-height: 40px;

                color: ${colors.get('black')};

                text-transform: uppercase;
                margin        : 35px 0 20px;
                padding       : 0;
            `,
            h2: `
                font-family: "Roboto", monospace;
                font-weight: 700;
                font-size  : 28px;
                line-height: 30px;

                color: ${colors.get('mercury', 'dark')};

                text-transform: uppercase;
                margin        : 30px 0 15px;
                padding       : 0;
            `,
            h3: `
                font-family: "Roboto", monospace;
                font-weight: 700;
                font-size  : 20px;
                line-height: 30px;

                color: ${colors.get('mercury', 'dark')};

                text-transform: uppercase;
                margin        : 25px 0 15px;
                padding       : 0;
            `,
            playground: `
                margin : 0;
                padding: 20px;
            `,
            paragraph: `
                font-size  : 16px;
                line-height: 20px;

                margin: 10px 0;
            `
        },
    },
    plugins: [
        css({ preprocessor: 'sass' }),
        css({ preprocessor: 'stylus' }),
    ],
}
