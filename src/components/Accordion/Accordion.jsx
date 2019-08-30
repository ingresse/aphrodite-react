/* Packages */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helper Constants */
import { GRID, MEDIA_QUERIES, SCREEN_SIZES, SIZES } from '../../constants';

/* Helper Components */
import { ListItem, Icon } from '../';

/* Component Styles */
const _iconSize   = (window.innerWidth > SCREEN_SIZES.SM ? 22 : 30);
const iconColumn  = (_iconSize + (GRID.CONTAINER_PADDING  / 2) + GRID.UNIT);

/* Component Styles */
const AphAccordion = styled('div')(props => ({
    boxSizing: 'border-box',
    display  : 'block',

    fontSize  : SIZES.MD.FONT_SIZE,
    lineHeight: SIZES.MD.LINE_HEIGHT,

    ...props.styles,
}));

/* Component Header Styles */
const Header = styled('div')(props => ({
    boxSizing : 'border-box',
    display   : 'block',
    lineHeight: 0,
}));

/* Component Header Column Styles */
const columnStyles = {
    boxSizing    : 'border-box',
    display      : 'inline-block',
    verticalAlign: 'middle',
};

/* Component Header Icon Column Styles */
const IconColumn = styled('div')(props => ({
    ...columnStyles,
    width: iconColumn,
    lineHeight: 0,
    margin: '-2px 0',

    [MEDIA_QUERIES.LT.SM]: {
        margin: 0,
    },
}));

/* Component Header Content Column Styles */
const ContentColumn = styled('div')(props => ({
    ...columnStyles,
    width: `calc(100% - ${iconColumn})`,
    lineHeight: '20px',
}));

/* Component Itself */
function Accordion(props) {
    /**
     * Inherit props
     */
    const {
        header,
        headerDark,
        headerProps,
        headerStyles,

        children,
        className,
        id,
        styles,

        withIcon,
        iconSize,
        iconProps,
        iconStyles,
    } = props;

    /**
     * Local values
     */
    const [ opened, setOpened ] = useState(props.opened || false);

    /**
     * Toggle childrens visibility
     */
    function toggle() {
        const toggleCallback = (props.toggleCallback || props.openedCallback);
        const isOpened       = !opened;

        setOpened(isOpened);

        if (typeof toggleCallback !== 'function') {
            return;
        }

        toggleCallback(isOpened);
    }

    /**
     * Listen for changes
     */
    useEffect(() => {
        setOpened(props.opened);
    }, [ props.opened ]);

    /**
     * Render
     */
    return (
        <AphAccordion
            styles={styles}
            className={`aph-accordion ${className}`}
        >
            <ListItem
                id={id}
                {...headerProps}
                header={headerDark ? true : false}
                styles={{ cursor: 'pointer', paddingRight: '15px', paddingLeft: '15px', ...headerStyles }}
                onClick={toggle}
                className="aph-accordion__header">
                {children ? (
                    <Header className="aph-accordion__header-row">
                        {withIcon &&
                        <IconColumn className="aph-accordion__header__col-icon">
                            <Icon
                                size={iconSize || _iconSize}
                                slug={`arrow-${opened ? 'up' : 'down'}-circle`}
                                styles={iconStyles}
                                {...iconProps}
                            />
                        </IconColumn>}
                        <ContentColumn className="aph-accordion__header__col-content">
                            {header}
                        </ContentColumn>
                    </Header>
                ) : header}
            </ListItem>
            {opened && children}
        </AphAccordion>
    );
};

/* Default Props */
Accordion.defaultProps = {
    opened   : false,
    header   : '',
    className: '',

    withIcon : true,
};

/* Properties Types */
Accordion.propTypes = {
    opened        : propTypes.bool,
    openedCallback: propTypes.func,

    header      : propTypes.any,
    headerDark  : propTypes.bool,
    headerStyles: propTypes.object,

    children : propTypes.any,
    className: propTypes.string,

    styles    : propTypes.object,

    withIcon  : propTypes.bool,
    iconSize  : propTypes.number,
    iconStyles: propTypes.object,

    toggleCallback: propTypes.func,
};

/* Exporting */
export default Accordion;
