/* Utilities */
import { colors as palette } from '../src/utils';

/* Theme Primary Color */
const themeColor = 'secondary';

/* Theme Colors */
const colors = {
    blackLight: palette.get('oil', 'light'),
    black     : palette.get('oil'),
    blackDark : palette.get('oil', 'dark'),

    grey: palette.get('disabled'),

    whiteLight: palette.get('smoke'),
    white     : palette.get('white'),
    whiteDark : palette.get('smoke'),

    primaryLight: palette.get(themeColor, 'crystal'),
    primary     : palette.get(themeColor),
    primaryDark : palette.get(themeColor, 'dark'),

    secondary: palette.get(themeColor, 'light'),

    highlight: palette.get(themeColor, 'crystal', 0.5),
    error    : palette.get('error', 'regular', 0.8),
};

/* Exporting */
export default colors;
