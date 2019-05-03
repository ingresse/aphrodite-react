/* Packages */
import React, { forwardRef, useState, useRef } from 'react';
import propTypes from 'prop-types';

/* Utils */
import { COLORS } from '../../constants';

/* Composition Components */
import { H3, Card } from '../';

/* Component Styles */
import CollapsibleChildrenStyled from './CollapsibleChildrenStyled';

/* Component Itself */
const Collapsible = forwardRef((props, ref) => {
    const { header, headerProps, children, disabled, delay } = props;

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
    const headerStyles = {
        margin : 0,
        padding: 0,
        cursor : 'pointer',
        color  : disabled ? COLORS.DARK_GREY : COLORS.PRIMARY
    };

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

    return (
        <Card {...props}
            ref={ref}
            className={`aph-collapsible ${opened ? 'active' : ''}`}
            styles={Object.assign(
                {
                    position: 'relative',
                    overflow: 'hidden',
                },
                props.styles,
                !opened ? {} : {
                    padding: '10px 10px 0'
                }
            )}>
            {!header ? null : (
                <H3 {...headerProps}
                    styles={headerStyles}
                    onClick={toggle}
                    role="button">
                    {header}
                </H3>
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
    delay         : 0.25,
    styles        : {},
    childrenStyles: {},
};

/* Properties Types */
Collapsible.propTypes = {
    opened        : propTypes.bool,
    delay         : propTypes.number,
    styles        : propTypes.object,
    childrenStyles: propTypes.object,
};

/* Exporting */
export default Collapsible;
