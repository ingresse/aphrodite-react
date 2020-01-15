/* Core Packages */
import { addons } from '@storybook/addons';

/* Customization */
import theme from './aphrodite.theme';

/* Apply custom settings */
addons.setConfig({
    theme: theme,
});
