/* Docz Custom Settings */
export default {
    title      : 'APHRODITE',
    base       : '/aphrodite-react/',
    dest       : './docs/',
    src        : './src/',
    htmlContext: {
        head: {
            links: [
                {
                    rel : 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:400,600,700',
                },
            ],
        },
    },
    themeConfig: {
        colors: {
            primary: '#00A5DB',
        },
        styles: {
            body: {
                fontFamily: '"Roboto", Helvetica, sans-serif',
                fontWeight: '400',
                fontSize  : '16px',
                lineHeight: '20px',
            },
            h1: {
                fontWeight   : '700',
                fontSize     : '60px',
                lineHeight   : '60px',
                textTransform: 'uppercase',
                margin       : '40px 0 20px',
                padding      : '10px 0',
            },
            h2: {
                fontWeight   : '700',
                fontSize     : '32px',
                lineHeight   : '40px',
                textTransform: 'uppercase',
                margin       : '40px 0 20px',
                padding      : '10px 0',
            },
        },
    },
}
