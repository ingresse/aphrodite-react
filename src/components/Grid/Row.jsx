/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Framework Helpers */
import { GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Sizes */
const MARGIN = ('-' + GRID.COLUMNS_PADDING + GRID.UNIT);

/* Wrapper Styles */
const RowWrapper = styled('div')((props) => ({
    boxSizing    : 'border-box',
    position     : 'relative',
    display      : 'flex',
    flex         : '0 1 auto',
    flexDirection: 'row',
    flexWrap     : 'wrap',

    marginRight: MARGIN,
    marginLeft : MARGIN,

    WebkitBoxPack : (props.alignment || null),
    MsFlexPack    : (props.alignment || null),
    justifyContent: (props.alignment || null),

    flexDirection: props.reverse ? 'row-reverse' : null,

    '&:before, &:after': {
        clear: 'both',
    },

    ...props.styles,
}));

/* Component */
const Row = (props) => {
    const { className, children } = props;

    return (
        <RowWrapper
            {...props}
            className={`aph-row ${className || ''}`}>
            {children}
        </RowWrapper>
    );
};

/* Properties Types */
Row.propTypes = {
    styles   : propTypes.object,
    alignment: propTypes.string,
};

/* Default Properties */
Row.defaultProps = {
    styles   : {},
    alignment: '',
};

/* Exporting */
export default Row;
