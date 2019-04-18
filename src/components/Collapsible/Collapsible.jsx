/* Packages */
import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';

/* Utils */
import { COLORS } from '../../constants';

/* Composition Components */
import { H3, Card } from '../';

/* Component Styles */
import CollapsibleChildrenStyled from './CollapsibleChildrenStyled';

/* Component Itself */
const Collapsible = (props) => {
    const wrapperRef        = useRef(null);
    const wrapperContentRef = useRef(null);

    const [opened, setOpened]         = useState(props.opened || false);
    const [openTimer, setOpenTimer]   = useState(null);
    const [closeTimer, setCloseTimer] = useState(null);
    const [styles, setStyles]         = useState(props.opened ? {} : { maxHeight: 0 });

    const { header, headerProps, children, disabled } = props;8

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
                }, 250)
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
                }, 260)
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
            className={`aph-accordion ${opened ? 'active' : ''}`}
            styles={Object.assign(
                {},
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
};

/* Default Properties */
Collapsible.defaultProps = {
    opened: false,
    styles: {},
};

/* Properties Types */
Collapsible.propTypes = {
    opened: propTypes.bool,
};

/* Exporting */
export default Collapsible;
