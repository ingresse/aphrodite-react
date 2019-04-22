/* Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import AphTableStyled from './TableStyled';

/* Component Itself */
const Table = (props) => {
    const { className, children } = props;

    return (
        <AphTableStyled
            {...props}
            className={`aph-table ${className || ''}`}>
            {children}
        </AphTableStyled>
    );
};

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
