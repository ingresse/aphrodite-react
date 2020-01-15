/* Core Packages */
import { create } from '@storybook/theming/create';

/* Utils */
import { colors } from '../src/utils';

/* Exporting */
export default create({
    base: colors.get('base'),

    colorPrimary  : colors.get('primary'),
    colorSecondary: colors.get('secondary'),

    // UI
    appBg          : colors.get('inverse'),
    appContentBg   : colors.get('background'),
    appBorderColor : colors.get('disabled'),
    appBorderRadius: 5,

    // Typography
    fontBase  : '"Roboto", sans-serif',
    fontCode  : 'monospace',
    fontSize  : '16px',
    lineHeight: '20px',

    // Text colors
    textColor       : colors.get('base'),
    textInverseColor: colors.get('inverse'),

    // Toolbar default and active colors
    barTextColor    : colors.get('helper'),
    barSelectedColor: colors.get('secondary'),
    barBg           : colors.get('inverse'),

    // Form colors
    inputBg          : colors.get('mercury', 'crystal'),
    inputBorder      : 'transparent',
    inputTextColor   : colors.get('base'),
    inputBorderRadius: 2,

    brandTitle: 'Aphrodite React',
    brandImage: '',
});
