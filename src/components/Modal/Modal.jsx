/* Core Packages */
import React, { forwardRef, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

/* Helper Components */
import { H1, ActionBar } from '../';

/* Component Styles */
import ModalStyled from './ModalStyles';

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
        children,
        footer,
        footerProps,

        className,
        styles,

        opened,
        openedCallback,
        closeOnEscape,

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
            return;
        }

        if (opened || active) {
            handleOpen();
        }
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

        if (isEscPressed) {
            handleClose();
            return false;
        }
    }

    /**
     * Add Event Listeners to handle with modal visibility
     */
    function listen () {
        addEventListener('click', handleClose);

        if (closeOnEscape) {
            addEventListener('keydown', handleCloseOnScape);
        }
    }

    /**
     * Remove Event Listeners
     */
    function unlisten () {
        removeEventListener('click', handleClose);
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
        }, 250));
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

            modalRef.current.focus();

            setActive(true);
            listen();
        }, 50));
    }

    /**
     * Render
     */
    return (
        <ModalStyled
            {...rest}
            ref={modalRef}
            open
            opened={active && visible}
            styles={styles}
            hasFooter={(footer || Object.keys(footerProps).length)}
            className={`aph-modal ${className || ''}${active ? ' active' : ''}${visible ? ' visible' : ''}`}>
            {(!active || !visible) ? (null) : (
                <>
                    {title &&
                        <H1 className="aph-modal__title" bold center>
                            {title}
                        </H1>
                    }

                    {header &&
                        <header className="aph-modal__header">
                            {header}
                        </header>
                    }

                    <section className="aph-modal__content">
                        {children}
                    </section>

                    <ActionBar
                        {...footerProps}
                        className={`aph-modal__footer ${footerProps.className || ''}`}
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
    );
});

/* Default props */
Modal.defaultProps = {
    title : '',
    header: undefined,

    opened        : false,
    openedCallback: () => {},
    closeOnEscape : false,

    footerProps: {},
    styles     : {},
};

/* Prop Types */
Modal.propTypes = {
    title: PropTypes.string,
    header: PropTypes.any,

    opened        : PropTypes.bool,
    openedCallback: PropTypes.func,
    closeOnEscape : PropTypes.bool,
};

/* Exporting */
export default Modal;
