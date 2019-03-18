/* Values */
const COLUMNS = 12;

/* Exporting */
export const GRID = {
    UNIT   : 'px',
    QUERIES: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
    ],

    CONTAINER_PADDING_XS: 15,
    CONTAINER_PADDING   : 20,
    CONTAINER           : Object.assign(980, {
        XS: 480,
        SM: 660,
        MD: 820,
        LG: 980,
        XL: 1440,
    }),

    COLUMNS          : COLUMNS,
    COLUMNS_PADDING  : 10,
    COLUMNS_GET_WIDTH: (columnNumber) => {
        function getPercentual(number) {
            return ((((number * 10) / 12) * 10) + '%');
        }

        columnNumber = parseInt(columnNumber, 10);

        if (!columnNumber ||
            typeof columnNumber !== 'number' ||
            (columnNumber < 1 || columnNumber > COLUMNS)) {
            return null;
        }

        return getPercentual(columnNumber)
    },
};
