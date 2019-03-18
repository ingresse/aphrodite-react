/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants Helpers */
import { GRID, MEDIA_QUERIES } from '../../constants';

/* Wrapper Styles */
const ColumnWrapper = styled('div')((props) => {
    const {
        first,
        last,

        width,
        styles,

        xxs,
        xs,
        sm,
        md,
        lg,
        xl,
    } = props;

    const ORDER = (
        (first === 'xxs' || first === 'xs') ? -1 : (
            (last === 'xxs' || last === 'xs') ? 1 : null
        )
    );

    /**
     * Get CSS Flex order property, based on Component Prop
     *
     * @param {string} size
     */
    function getOrder (size = 'xs') {
        return (
            (first === size) ? -1 : (
                (last === size) ? 1 : null
            )
        );
    }

    return ({
        boxSizing    : 'border-box',
        flex         : '0 0 auto',
        flexGrow     : 1,
        flexBasis    : 0,
        flexDirection: 'column',

        order: ORDER,

        paddingRight: GRID.COLUMNS_PADDING,
        paddingLeft : GRID.COLUMNS_PADDING,

        flexBasis: (width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'),
        maxWidth : (width || GRID.COLUMNS_GET_WIDTH(xxs || xs) || '100%'),

        ...styles,

        [MEDIA_QUERIES.LT.SM]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(xs)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(xs)),
            order    : getOrder('xs'),
        },

        [MEDIA_QUERIES.GT.SM]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(sm)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(sm)),
            order    : getOrder('sm'),
        },

        [MEDIA_QUERIES.GT.MD]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(md)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(md)),
            order    : getOrder('md'),
        },

        [MEDIA_QUERIES.GT.LG]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(lg)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(lg)),
            order    : getOrder('lg'),
        },

        [MEDIA_QUERIES.GT.XL]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(xl)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(xl)),
            order    : getOrder('xl'),
        },
    });
});

/* Component */
const Column = (props) => {
    const { className, children } = props;

    return (
        <ColumnWrapper
            {...props}
            className={`aph-col ${className || ''}`}>
            {children}
        </ColumnWrapper>
    );
};

/* Sizes Types */
const sizesTypes = propTypes.oneOfType([
    propTypes.string,
    propTypes.number
]);

/* Properties Types */
Column.propTypes = {
    xss   : sizesTypes,
    xs    : sizesTypes,
    sm    : sizesTypes,
    md    : sizesTypes,
    lg    : sizesTypes,
    xl    : sizesTypes,

    first : propTypes.string,
    last  : propTypes.string,

    width : propTypes.string,
    styles: propTypes.object,
};

/* Default Properties */
Column.defaultProps = {
    styles: {},
};

/* Exporting */
export default Column;
