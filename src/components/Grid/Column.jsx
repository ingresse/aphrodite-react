/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants Helpers */
import { GRID, MEDIA_QUERIES } from '../../constants';

/* Component Styles */
const ColStyled = styled('div')((props) => {
    /**
     * Inherit props
     */
    const {
        gridWidth,
        gridStyles,

        gridFirst,
        gridLast,

        gridXS,
        gridXXS,
        gridSM,
        gridMD,
        gridLG,
        gridXL,
    } = (props || {});

    /**
     * Order
     */
    const ORDER = (
        (gridFirst === 'xxs' || gridFirst === 'xs') ? -1 : (
            (gridLast === 'xxs' || gridLast === 'xs') ? 1 : null
        )
    );

    /**
     * Get CSS Flex order property, based on Component Prop
     *
     * @param {string} size
     */
    function getOrder (size = 'xs') {
        return (
            (gridFirst === size) ? -1 : (
                (gridLast === size) ? 1 : null
            )
        );
    }

    /**
     * Styles
     */
    return ({
        boxSizing    : 'border-box',
        flex         : '0 0 auto',
        flexGrow     : 1,
        flexDirection: 'column',

        order: ORDER,

        paddingRight: GRID.COLUMNS_PADDING,
        paddingLeft : GRID.COLUMNS_PADDING,

        flexBasis: (gridWidth || GRID.COLUMNS_GET_WIDTH(gridXXS || gridXS) || null),
        maxWidth : (gridWidth || GRID.COLUMNS_GET_WIDTH(gridXXS || gridXS) || null),

        ...gridStyles,

        [MEDIA_QUERIES.LT.SM]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(gridXS)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(gridXS)),
            order    : getOrder('xs'),
        },

        [MEDIA_QUERIES.GT.SM]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(gridSM)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(gridSM)),
            order    : getOrder('sm'),
        },

        [MEDIA_QUERIES.GT.MD]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(gridMD)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(gridMD)),
            order    : getOrder('md'),
        },

        [MEDIA_QUERIES.GT.LG]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(gridLG)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(gridLG)),
            order    : getOrder('lg'),
        },

        [MEDIA_QUERIES.GT.XL]: {
            flexBasis: (GRID.COLUMNS_GET_WIDTH(gridXL)),
            maxWidth : (GRID.COLUMNS_GET_WIDTH(gridXL)),
            order    : getOrder('xl'),
        },
    });
});

/* Component */
const Column = forwardRef((props, ref) => {
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

        className,
        children,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <ColStyled
            {...rest}
            gridFirst={first}
            gridLast={last}
            gridXXS={xxs}
            gridXS={xs}
            gridSM={sm}
            gridMD={md}
            gridLG={lg}
            gridXL={xl}
            gridWidth={width}
            gridStyles={styles}
            ref={ref}
            className={`aph-col ${className || ''}`}>
            {children}
        </ColStyled>
    );
});

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
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Default Properties */
Column.defaultProps = {
    styles: {},
};

/* Exporting */
export default Column;
