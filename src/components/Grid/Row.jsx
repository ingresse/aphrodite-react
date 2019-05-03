/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Framework Helpers */
import { GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Sizes */
const MARGIN = ('-' + GRID.COLUMNS_PADDING + GRID.UNIT);

/* Wrapper Styles */
const RowWrapper = styled('div')((props) => {
    const {
        alignment,
        vertical,
        horizontal,

        reverse,
        styles,
    } = props;

    let _extraStyles = {};

    if (horizontal) {
        if (horizontal === 'center' || horizontal === 'middle') {
            _extraStyles = {
                WebkitBoxPack : 'center',
                MsFlexPack    : 'center',
                justifyContent: 'center',
            };

        } else {
            _extraStyles = {
                WebkitBoxPack : horizontal,
                MsFlexPack    : horizontal,
                justifyContent: `flex-${horizontal}`,
            };
        }
    }

    if (vertical) {
        if (vertical === 'center' || vertical === 'middle') {
            _extraStyles = Object.assign(_extraStyles, {
                WebkitBoxAlign: 'center',
                MsFlexAlign   : 'center',
                alignItems    : 'center',
            });

        } else {
            _extraStyles = Object.assign(_extraStyles, {
                WebkitBoxAlign: vertical,
                MsFlexAlign   : vertical,
                alignItems    : `flex-${vertical}`,
            });
        }
    }

    return {
        boxSizing    : 'border-box',
        position     : 'relative',
        display      : 'flex',
        flex         : '0 1 auto',
        flexDirection: 'row',
        flexWrap     : 'wrap',

        marginRight: MARGIN,
        marginLeft : MARGIN,

        flexDirection: reverse ? 'row-reverse' : null,

        '&:before, &:after': {
            clear: 'both',
        },

        ...styles,

        ..._extraStyles,
    };
});

/* Component */
const Row = forwardRef((props, ref) => {
    const { className, children } = props;

    return (
        <RowWrapper
            {...props}
            ref={ref}
            className={`aph-row ${className || ''}`}>
            {children}
        </RowWrapper>
    );
});

/* Properties Types */
Row.propTypes = {
    styles    : propTypes.object,
    vertical  : propTypes.string,
    horizontal: propTypes.string,
};

/* Default Properties */
Row.defaultProps = {
    styles    : {},
    vertical  : 'middle',
    horizontal: 'left',
};

/* Exporting */
export default Row;
