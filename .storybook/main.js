/* Core Packages */
const path = require('path');

/* Storybook Settings */
module.exports = {
    stories: [
        '../src/**/**/*.stories.(js|md)x',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs/register',
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
