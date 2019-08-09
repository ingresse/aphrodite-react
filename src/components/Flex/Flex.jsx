/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Component Styles */
import FlexStyled from './FlexStyles';

/* Component Itself */
function Flex (props) {
    /**
     * Inherit props,
     */
    const {
        className
    } = props;

    /**
     * Render
     */
    return (
        <FlexStyled
            {...props}
            className={`aph-flex ${className}`}
        />
    );
}

/* Component Props */
Flex.defaultProps = {
    className     : '',
    flexWrap      : '',
    alignSelf     : '',
    alignItems    : '',
    alignContent  : '',
    flexDirection : '',
    justifyContent: '',

    order     : '',
    flexGrow  : '',
    flexShrink: '',

    styles: {},
};

/* Component properties types */
Flex.propTypes = {
    className     : PropTypes.string,
    flexWrap      : PropTypes.string,
    alignSelf     : PropTypes.string,
    alignItems    : PropTypes.string,
    alignContent  : PropTypes.string,
    flexDirection : PropTypes.string,
    justifyContent: PropTypes.string,

    order: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    flexGrow: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    flexShrink: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    styles: PropTypes.any,
};

/* Exporting */
export default Flex;
