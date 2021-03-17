import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { MEDIA_QUERIES } from '../../constants';
import Dropdown from '../Dropdown/Dropdown';
import Icon from '../Icons/Icon';
import List from '../Lists/List';
import ListItem from '../Lists/ListItem';

const LayerMenu = forwardRef(({
    children,
    disabled,
    icon,
    loading,
    options,
    right,
    styles: originalStyles,
    toggle,
    toggleProps,
    top,
    width,
    ...props
}, ref) => {
    const { xs, ...styles } = originalStyles;

    return (
        <Dropdown
            ref={ref}
            thin
            right
            width={width}
            toggleTabIndex={null}
            toggleBlock
            toggleProps={!loading ? toggleProps : { onClick: () => {} }}
            toggle={toggle || (
                <Icon
                    {...icon}
                    size={icon.size || 40}
                    slug={icon.slug || 'arrow-down'}
                    color={loading ? 'disabled' : icon.color}
                />
            )}
            styles={{
                position: 'absolute',
                width   : '40px',
                height  : '40px',
                top     : `${top || 'calc(50% - 20px)'}`,
                right   : `${right || '5px'}`,

                '.aph-dropdown__content': {
                    top  : '90%',
                    right: '0',
                },

                [MEDIA_QUERIES.LT.SM]: {
                    right: '5px',

                    '.aph-dropdown__content': {
                        right: '0',
                    },
                    ...(xs || {}),
                },

                ...styles
            }}
            {...props}
        >
            {options && options.length && (
                <List styles={{ overflow: 'hidden' }}>
                    {options.map((option, index) => {
                        const { children } = (option || {});

                        return (
                            <ListItem
                                key={index}
                                {...option}
                            >
                                {children || option}
                            </ListItem>
                        );
                    })}
                </List>
            )}
            {children}
        </Dropdown>
    );
});

/* Default Properties */
LayerMenu.defaultProps = {
    icon: {
        color: 'secondary',
        size: 40,
        slug: 'arrow-down',
    },
    loading: false,
    options: [],
    right: '',
    top: '',
    styles: {},
};

/* Properties Types */
LayerMenu.propTypes = {
    /**
     * Icon Component props
     */
    icon: propTypes.object,

    /**
     * Loading state
     */
    loading: propTypes.bool,

    /**
     * Dropdown menu options
     */
    options: propTypes.array,

    /**
     * Dropdown toggle element/text
     */
    toggle: propTypes.oneOfType([
        propTypes.element,
        propTypes.string,
    ]),

    /**
     * Distance (desktop view)
     */
    top: propTypes.string,

    /**
     * Distance (desktop view)
     */
    right: propTypes.string,

    /**
     * Custom styles
     */
    styles: propTypes.object,

    /**
     * Dropdown menu wrapper width
     */
    width: propTypes.string,
};

/* Exporting */
export default LayerMenu;
