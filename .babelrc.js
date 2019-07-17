module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
            }
        ],
        [
            '@babel/preset-react',
            {
                loose: true,
            }
        ],
    ],
    env: {
        production: {
            plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                [
                    'emotion',
                    {
                        'hoist': true,
                    }
                ],
            ].filter(Boolean)
        },
        development: {
            plugins: [
                [
                    'emotion',
                    {
                        'sourceMap': true,
                        'autoLabel': true,
                    },
                ]
            ]
        }
    }
}
