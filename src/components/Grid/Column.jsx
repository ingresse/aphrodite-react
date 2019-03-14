/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants Helpers */
import { GRID, MEDIA_QUERIES } from '../../constants';

/* Wrapper Styles */
const ColumnWrapper = styled('div')((props) => ({
    boxSizing    : 'border-box',
    display      : 'flex',
    flex         : '0 0 auto',
    flexGrow     : 1,
    flexBasis    : 0,
    flexDirection: 'column',

    paddingRight: GRID.COLUMNS_PADDING,
    paddingLeft : GRID.COLUMNS_PADDING,

    minWidth: (props.width || (GRID.COLUMNS_GET_WIDTH(props.xxs || props.xs || props.sm || props.md || props.lg || props.xl))),
    maxWidth: (props.width || (GRID.COLUMNS_GET_WIDTH(props.xxs || props.xs || props.sm || props.md || props.lg || props.xl))),

    ...props.styles,

    [MEDIA_QUERIES.XSS]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.xxs)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.xxs)),
    },

    [MEDIA_QUERIES.GT.XXS]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.xs)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.xs)),
    },

    [MEDIA_QUERIES.SM]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.sm)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.sm)),
    },

    [MEDIA_QUERIES.GT.SM]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.md)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.md)),
    },

    [MEDIA_QUERIES.GT.MD]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.lg)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.lg)),
    },

    [MEDIA_QUERIES.XL]: {
        minWidth: (GRID.COLUMNS_GET_WIDTH(props.xl)),
        maxWidth: (GRID.COLUMNS_GET_WIDTH(props.xl)),
    },
}));

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
    width : propTypes.string,
    styles: propTypes.object,
};

/* Default Properties */
Column.defaultProps = {
    styles: {},
};

/* Exporting */
export default Column;
