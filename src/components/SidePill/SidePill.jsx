/* Core Packages */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

/* Component Styles */
import SidePillStyled from './SidePillStyled';

/* Component Itself */
const SidePill = memo(props => {
    /**
     * Inherit props
     */
    const {
        className,
        children,
        right,
        hoverable,
    } = props;

    /**
     * Render
     */
    return (
        <SidePillStyled
            {...props}
            className={`aph-sidepill ${className || ''}`}>
            {!hoverable ? (null) : (
                <span className={`aph-sidepill__hoverable ${(right) ? 'aph-sidepill__hoverable--right' : ''}`}>
                    {hoverable}
                </span>
            )}
            <span className="aph-sidepill__content">
                {children}
            </span>
        </SidePillStyled>
    );
});

/* Component Default Properties */
SidePill.defaultProps = {
    right : false,
};

/* Component Properties Types */
SidePill.propTypes = {
    right : PropTypes.bool,
};

/* Exporting */
export default SidePill;
