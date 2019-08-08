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
        className,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <FlexStyled
            {...rest}
            className={`aph-flex ${className}`}
        />
    );
}

/* Component Props */
Flex.defaultProps = {
    /**
     * Additional className
     */
    className: '',

    /**
     * Flex Flow
     */
    flexFlow: 'column',

    /**
     * Alias to `align-items`
     */
    flexAlign: '',

    /**
     * Alias to `align-items: stretch`
     */
    flexStretch: false,

    /**
     * Alias to `justify-content`
     */
    flexJustify: 'start',

    /**
     * Will apply this to the component styles:
     * ```
     * height        : auto;
     * flex          : 1 1 auto;
     * flex-direction: column;
     * ```
     */
    flexItem: false,

    /**
     * Customized styles
     */
    styles: {},
};

/* Component properties types */
Flex.propTypes = {
    className  : PropTypes.string,
    flexFlow   : PropTypes.string,
    flexAlign  : PropTypes.string,
    flexStretch: PropTypes.bool,
    flexJustify: PropTypes.string,
    flexItem   : PropTypes.bool,
    styles     : PropTypes.any,
};

/* Exporting */
export default Flex;
