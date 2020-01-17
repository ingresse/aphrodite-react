/* Utilities */
import { colors as palette } from '../src/utils';

/* Theme Primary Color */
const themeColor = 'secondary';

/* Theme Colors */
const colors = {
    // sidebar background (dark), table header background (dark),
    // preview handle background (dark), <blockquote> background, <code> background
    blackLight: palette.get('oil', 'light'),
    black     : palette.get('oil'), // page background (dark)
    blackDark : palette.get('oil', 'dark'), // text

    whiteLight: palette.get('smoke'), // text
    white     : palette.get('white'), // page background (light)
    whiteDark : palette.get('smoke'), // sidebar background (light), table header background (light), preview handle background (light), <blockquote> background, <code> background

    grey: palette.get('disabled'), // table border, preview border, preview handle bars

    primaryLight: palette.get(themeColor, 'crystal'), // sidebar menu item (hovered)
    primary     : palette.get(themeColor), // brand background, link, thematic break, preview error type, props table property name, <h1>, <blockquote> border left, search result
    primaryDark : palette.get(themeColor, 'dark'), // link (hovered)

    secondary: palette.get(themeColor, 'light'), // props table shape type, brand background, <hr>, search result

    highlight: palette.get(themeColor, 'crystal', 0.5), // matched search query
    error    : palette.get('error', 'regular', 0.8), // preview error background
};

/* Exporting */
export default colors;
