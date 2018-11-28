/* Sort Filters */
export const sort = {
    byProperty: (array, property, reverse) => {
        array.sort((a, b) => {
            if (a[property] < b[property]) {
                return reverse ? 1 : -1;
            }

            if (a[property] > b[property]) {
                return reverse ? -1 : 1;
            }

            return 0;
        });

        return array;
    }
};
