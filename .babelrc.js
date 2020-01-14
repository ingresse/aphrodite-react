module.exports = {
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        [
            'emotion',
            {
                'hoist': true,
            }
        ],
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-flow',
        '@babel/preset-react'
    ],
};
