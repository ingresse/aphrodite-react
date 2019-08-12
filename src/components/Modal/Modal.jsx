/* Core Packages */
import React, { forwardRef, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';

/* Helper Components */
import {
    H1,
    Flex,
    ActionBar,
} from '../';

/* Component Styles */
import ModalStyled from './ModalStyles';
import ModalOverlayStyled from './ModalOverlayStyles';

/* Component Itself */
const Modal = forwardRef((props, ref) => {

    /**
     * Global props
     */
    const {
        addEventListener,
        removeEventListener,
    } = document;

    /**
     * Inherit Props
     */
    const {
        title,
        header,
        contentJustify,
        alignItems,
        children,
        footer,
        footerProps,
        overlayProps,

        className,
        styles,

        opened,
        openedCallback,
        closeOnEscape,
        closeByEscape,
        unblockScrolling,

        ...rest
    } = props;

    /**
     * State values
     */
    const [ active, setActive ]             = useState(opened);
    const [ visible, setVisible ]           = useState(opened);
    const [ unmounted, setUnmounted ]       = useState(false);
    const [ activeTimer, setActiveTimer ]   = useState(null);
    const [ visibleTimer, setVisibleTimer ] = useState(null);

    /**
     * State reference
     */
    const modalRef = useRef(null);

    /**
     * Watch for `opened` prop changes
     */
    useEffect(() => {
        if (!opened) {
            handleClose();
            unlisten();

            return unlisten;
        }

        if (opened || active) {
            handleOpen();
        }

        return unlisten;
    }, [ opened ]);

    /**
     * Handle with close by escape key
     *
     * @param {object} evt - DOM click event
     */
    function handleCloseOnScape (evt) {
        const { key, keyCode, target } = (evt || {});
        const { nodeName } = (target || {});
        const isEscPressed = (key === 'Escape' || key === 'Esc' || keyCode === 27);

        if (!isEscPressed) {
            return;
        }

        handleClose();

        return;
    }

    /**
     * Add Event Listeners to handle with modal visibility
     */
    function listen () {
        if (closeOnEscape || closeByEscape) {
            addEventListener('keydown', handleCloseOnScape);
        }
    }

    /**
     * Remove Event Listeners
     */
    function unlisten () {
        clearTimeout(activeTimer);
        clearTimeout(visibleTimer);

        removeEventListener('keydown', handleCloseOnScape);
    }

    /**
     * Handle with Dropdown close event
     *
     * @param {object} evt - DOM click event
     */
    function handleClose(evt) {
        clearTimeout(visibleTimer);

        if (unmounted ||
            (evt &&
            evt.target &&
            modalRef &&
            modalRef.current &&
            modalRef.current.contains(evt.target))) {
            return;
        }

        unlisten();
        setActive(false);
        setVisible(true);

        setVisibleTimer(setTimeout(() => {
            if (unmounted) {
                return;
            }

            setVisible(false);
            openedCallback(false);
            modalRef.current.focus();
        }, 100));
    }

    /**
     * Handle with Dropdown open event
     *
     * @param {object} evt - DOM click event
     */
    function handleOpen(evt) {
        clearTimeout(activeTimer);

        if (unmounted) {
            return;
        }

        if (evt && evt.preventDefault) {
            evt.preventDefault();
        }

        setActive(false);
        setVisible(true);

        setActiveTimer(setTimeout(() => {
            if (unmounted) {
                return;
            }

            setActive(true);
            listen();
        }, 50));
    }

    /**
     * Render
     */
    return (
        <>
            {(!active || !visible) ? (null) : (
                <ModalOverlayStyled
                    onClick={(evt) => (closeOnEscape || closeByEscape) && handleClose(evt)}
                    className={`aph-modal-overlay ${active ? ' active' : ''}${visible ? ' visible' : ''}`}
                    {...overlayProps}
                />
            )}
            <ModalStyled
                {...rest}
                ref={modalRef}
                open
                opened={active && visible}
                role="dialog"
                styles={styles}
                hasFooter={(footer || Object.keys(footerProps).length) ? true : false}
                className={`aph-modal ${className || ''}${active ? ' active' : ''}${visible ? ' visible' : ''}`}>
                {(!active || !visible) ? (null) : (
                    <>
                        {unblockScrolling ? (null) : (
                            <Global
                                styles={css`
                                    body {
                                        overflow: hidden;
                                    }
                                `}
                            />
                        )}
                        <Flex
                            flex
                            flexDirection="column"
                            className="aph-modal__container">
                            {(!title) ? (null) : (
                                <H1 className="aph-modal__container__title" bold center>
                                    {title}
                                </H1>
                            )}
                            {(!header) ? (null) : (
                                <header className="aph-modal__container__header">
                                    {header}
                                </header>
                            )}
                            <Flex
                                flex
                                alignItems={alignItems}
                                justifyContent={contentJustify || 'start'}
                                flexDirection="column"
                                styles={{ flex: 1 }}
                                className="aph-modal__container__content">
                                {children}
                            </Flex>
                        </Flex>
                        <ActionBar
                            {...footerProps}
                            className={`aph-modal__content__footer ${footerProps.className || ''}`}
                            visible={footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false)}
                            styles={{
                                ...footerProps.styles,
                                padding  : '10px 0',
                                minHeight: 'initial'
                            }}>
                            {footer}
                        </ActionBar>
                    </>
                )}
            </ModalStyled>
        </>
    );
});

/* Default props */
Modal.defaultProps = {
    title : '',
    header: undefined,

    opened          : false,
    openedCallback  : () => {},
    closeOnEscape   : false,
    unblockScrolling: false,

    /**
     * Flex `justify-content`
     * flex-start || center || flex-end
     */
    contentJustify: 'flex-start',

    alignItems: 'center',
    footerProps: {},
    styles     : {},

    overlayProps: {},
};

/* Prop Types */
Modal.propTypes = {
    title: PropTypes.string,
    header: PropTypes.any,

    opened          : PropTypes.bool,
    openedCallback  : PropTypes.func.isRequired,
    closeOnEscape   : PropTypes.bool,
    unblockScrolling: PropTypes.bool,

    contentJustify: PropTypes.string,
    alignItems: PropTypes.string,

    overlayProps: PropTypes.object,
};

/* Exporting */
export default Modal;
