/* Plugins */
import { css } from 'docz-plugin-css';

/* Project Properties */
import pkg from './package.json';

/* Theme Settings */
import theme from './settings/docs.theme';

/* Docz Configs */
export default {
    base: `${(pkg.repository && pkg.repository.slug) ? pkg.repository.slug : ''}/`,
    src : './src/',
    dest: './docs/',

    debug      : false,
    codeSandbox: false,

    plugins: [
        css({ preprocessor: 'postcss' }),
        css({ preprocessor: 'sass' }),
    ],

    theme      : 'docz-theme-default',
    themeConfig: theme,

    htmlContext: {
        head: {
            links: [
                {
                    rel : 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
                },
            ],
        },
    },
};
