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

        ...rest
    } = props;

    /**
     * State values
     */
    const [ active, setActive ]       = useState(opened);
    const [ visible, setVisible ]     = useState(opened);
    const [ unmounted, setUnmounted ] = useState(false);
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

            return;
        }

        if (opened || active) {
            handleOpen();
        }
    }, [ opened ]);

    /**
     * Mount
     */
    // useEffect(() => {
    //     if (active && !visible) {
    //         document.addEventListener('click', handleClose);
    //     }

    //     if (visible && !active) {
    //         removeClickListener();
    //     }

    //     return removeClickListener;
    // }, [ active, visible ]);

    /**
     * Remove click listener
     */
    function removeClickListener () {
        setUnmounted(true);
        document.removeEventListener('click', handleClose);
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

        setActive(false);
        setVisible(true);

        setVisibleTimer(setTimeout(() => {
            if (unmounted) {
                return;
            }

            setVisible(false);
        }, 250));
    }

    /**
     * Handle with Dropdown open event
     *
     * @param {object} evt - DOM click event
     */
    function handleOpen(evt) {
        clearTimeout(activeTimer);

        // if (unmounted) {
        //     return;
        // }

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
            opened={active}
            styles={styles}
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

                    {footer &&
                        <ActionBar
                            {...footerProps}
                            className="aph-modal__footer"
                            visible={true}
                            styles={{
                                ...footerProps.styles,
                                padding  : '10px 0',
                                minHeight: 'initial'
                            }}>
                            {footer}
                        </ActionBar>
                    }
                </>
            )}
        </ModalStyled>
    );
});

/* Default props */
Modal.defaultProps = {
    title  : '',
    opened : false,

    footerProps: {},
};

/* Prop Types */
Modal.propTypes = {
    title   : PropTypes.string,
    opened  : PropTypes.bool,
};

/* Exporting */
export default Modal;
