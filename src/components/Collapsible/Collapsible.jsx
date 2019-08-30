/* Packages */
import React, { forwardRef, useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';

/* Utils */
import { colors } from '../../utils';

/* Composition Components */
import { H2, H3, Card, Icon } from '../';

/* Component Styles */
import CollapsibleChildrenStyled from './CollapsibleChildrenStyled';

/* Component Itself */
const Collapsible = forwardRef((props, ref) => {
    const {
        header,
        headerProps,
        children,
        disabled,
        delay,
        hover,
        icon,
        iconSize,
    } = props;

    const timerDelay = (delay * 1000);

    const wrapperRef        = useRef(null);
    const wrapperContentRef = useRef(null);

    const [opened, setOpened]         = useState(props.opened || false);
    const [openTimer, setOpenTimer]   = useState(null);
    const [closeTimer, setCloseTimer] = useState(null);
    const [styles, setStyles]         = useState(
        Object.assign(
            { transitionDuration: (props.delay + 's') },
            props.opened ? null : { maxHeight: 0 }
        )
    );

    /* Custom Styles */
    const headerStyles = Object.assign({
        position      : 'relative',
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'space-between',

        margin : '-10px',
        padding: ((headerProps && headerProps.lg) ? '15px 10px' : '10px'),
        cursor : 'pointer',
        color  : colors.get(disabled ? 'mercury' : 'secondary'),
    }, headerProps && headerProps.styles ? headerProps.styles : {});

    /* Header Title */
    const HeaderTitle = (headerProps && headerProps.lg ? H2 : H3);

    /**
     * Handle with Collapsible Opening event
     */
    function handleOpen() {
        const openStyles = {
            ...styles,
            maxHeight: 0,
            display: 'block'
        };

        clearTimeout(closeTimer);
        setStyles(openStyles);

        setTimeout(() => {
            setStyles({
                ...openStyles,
                maxHeight: wrapperContentRef.current.clientHeight
            });

            clearTimeout(openTimer);
            setOpenTimer(
                setTimeout(() => {
                    setStyles({
                        ...openStyles,
                        maxHeight: null
                    });
                }, timerDelay)
            );
        }, 1);
    }

    /**
     * Handle with Collapsible Closing event
     */
    function handleClose() {
        const closeStyles = {
            ...styles,
            maxHeight: wrapperContentRef.current.clientHeight
        };

        clearTimeout(openTimer);
        setStyles(closeStyles);

        setTimeout(() => {
            setStyles({
                ...closeStyles,
                maxHeight: 0
            });

            clearTimeout(closeTimer);
            setCloseTimer(
                setTimeout(() => {
                    setStyles({
                        ...closeStyles,
                        display: 'none'
                    });
                }, (timerDelay + 10))
            );
        }, 10);
    }

    /**
     * Handle with Collapsible Toggle event
     */
    function handleToggle(isOpened) {
        if (isOpened) {
            handleClose();
        } else {
            handleOpen();
        }
    }

    /**
     * Toggle Collapsible visibility
     */
    function toggle() {
        if (disabled) {
            return;
        }

        handleToggle(opened);
        setOpened(!opened);
    }

    /**
     * Unmount
     */
    useEffect(() => {
        return function cleanup() {
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    return (
        <Card
            {...props}
            ref={ref}
            hover
            className={`aph-collapsible ${opened ? 'active' : ''}`}
            styles={Object.assign(
                {
                    position: 'relative',
                    overflow: 'hidden',
                },
                props.styles,
            )}>
            {!header ? null : (
                <HeaderTitle
                    {...headerProps}
                    styles={Object.assign(headerStyles, {
                        paddingRight: (!icon ? null : `${iconSize}px`),
                    })}
                    onClick={toggle}
                    role="button">
                        {header}
                        {(!icon) ? (null) : (
                            <Icon
                                slug="arrow-down"
                                size={iconSize}
                                color={colors.get('mercury', 'light')}
                                styles={{
                                    position  : 'absolute',
                                    top       : '50%',
                                    right     : 0,
                                    transform : `translateY(-50%)${opened ? ' rotate(180deg)' : ''}`,
                                    transition: `transform ${delay}s linear`,
                                }}
                            />
                        )}
                </HeaderTitle>
            )}

            <CollapsibleChildrenStyled
                ref={wrapperRef}
                styles={styles}
                visible={opened}>
                <div ref={wrapperContentRef}>{children}</div>
            </CollapsibleChildrenStyled>
        </Card>
    );
});

/* Default Properties */
Collapsible.defaultProps = {
    opened        : false,
    hover         : false,
    delay         : 0.35,
    styles        : {},
    childrenStyles: {},
    icon          : true,
    iconSize      : 40,

    header     : '',
    headerProps: null,
};

/* Properties Types */
Collapsible.propTypes = {
    opened        : propTypes.bool,
    hover         : propTypes.bool,
    delay         : propTypes.number,
    icon          : propTypes.bool,
    iconSize      : propTypes.number,
    styles        : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
    childrenStyles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    header     : propTypes.any,
    headerProps: propTypes.object,
};

/* Exporting */
export default Collapsible;
