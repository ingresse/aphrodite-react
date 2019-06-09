/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import AphTableStyled from './TableStyled';

/* Component Itself */
const Table = forwardRef((props, ref) => {
    const { className, children } = props;

    return (
        <AphTableStyled
            {...props}
            ref={ref}
            className={`aph-table ${className || ''}`}>
            {children}
        </AphTableStyled>
    );
});

/* Default Properties */
Table.defaultProps = {
    bordered : false,
    condensed: false,
    hoverable: false,
    striped  : false,
};

/* Properties Types */
Table.propTypes = {
    bordered : propTypes.bool,
    condensed: propTypes.bool,
    hoverable: propTypes.bool,
    striped  : propTypes.bool,
};

/* Exporting */
export default Table;
