/* Packages */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Components */
import Styled from '../Styled/Styled';
import DropdownStyled from './DropdownStyled';

/* Component it self */
const Dropdown = forwardRef(({
    className,
    children,
    toggle,
    toggleBlock,
    toggleProps = {},
    toggleTag = 'button',
    toggleTabIndex = '-1',
    width,
    center,
    up,
    right,
    left,
    thin,
    opened,
    styles,
}, ref) => {

    /**
     * State values
     */
    let unmounted = false;
    const [ active, setActive ]             = useState(opened);
    const [ visible, setVisible ]           = useState(opened);
    const [ activeTimer, setActiveTimer ]   = useState(null);
    const [ visibleTimer, setVisibleTimer ] = useState(null);

    /**
     * State reference
     */
    const dropdownRef = useRef(null);

    /**
     * Add click listener
     */
    function addClickListener() {
        document.addEventListener('click', handleClose);
    }

    /**
     * Remove click listener
     */
    function removeClickListener() {
        clearTimeout(activeTimer);
        clearTimeout(visibleTimer);

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
            dropdownRef &&
            dropdownRef.current &&
            dropdownRef.current.contains(evt.target))) {
            return;
        }

        setActive(false);
        setVisible(true);

        setVisibleTimer(setTimeout(() => {
            if (unmounted) {
                return;
            }

            setVisible(false);
            removeClickListener();
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

            setActive(true);
            addClickListener();
        }, 50));
    }

    /**
     * Toggle visibility handler
     *
     * @param {object} evt - DOM click event
     */
    function handleToggle(evt) {
        if (visible && !opened) {
            return handleClose();
        }

        handleOpen(evt);
    }

    /**
     * Listen to `opened` changes
     */
    useEffect(() => {
        removeClickListener();

        if (!opened) {
            handleClose();

            return;
        }

        if (opened || active) {
            addClickListener();
            handleOpen();
        }

        return removeClickListener;
    }, [ opened ]);

    /**
     * Mount
     */
    useEffect(() => {
        return removeClickListener;
    }, []);

    /**
     * Render
     */
    return (
        <DropdownStyled
            opened={visible}
            center={center}
            up={up}
            right={right}
            left={left}
            thin={thin}
            toggleBlock={toggleBlock || center}
            contentWidth={width}
            styles={styles}
            ref={dropdownRef}
            className={`aph-dropdown ${className || ''}`}
        >
            {(!toggle) ? (null) : (
                <Styled
                    as={toggleTag}
                    role="button"
                    type="button"
                    tabIndex={toggleTabIndex}
                    onClick={handleToggle}
                    className="aph-dropdown__toggle"
                    {...toggleProps}
                >
                    {toggle}
                </Styled>
            )}
            {(!visible) ? (null) : (
                <div
                    className={`aph-dropdown__content${active ? ' active' : ''}${visible ? ' visible' : ''}`}
                    onClick={() => handleClose()}
                >
                    {children}
                </div>
            )}
        </DropdownStyled>
    );
});

/* Component Properties */
Dropdown.defaultProps = {
    className: '',
    toggle   : '',

    opened: false,

    width: '220px',
    thin : false,

    up   : false,
    right: false,
    left : true,

    styles: {},
};

/* Component Properties Types */
Dropdown.propTypes = {
    className: PropTypes.string,
    toggle   : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),

    opened: PropTypes.bool,

    width: PropTypes.string,
    thin : PropTypes.bool,

    up   : PropTypes.bool,
    right: PropTypes.bool,
    left : PropTypes.bool,

    styles: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

/* Exporting */
export default Dropdown;
