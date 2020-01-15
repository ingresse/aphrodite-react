/* Core Packages */
const path = require('path');

/* Storybook Settings */
module.exports = {
    stories: [
        '../src/**/**/*.stories.(js|jsx)',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-storysource',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test   : /\.scss$/,
            use    : ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
};
