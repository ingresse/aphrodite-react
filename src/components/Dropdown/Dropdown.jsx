/* Packages */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Components */
import DropdownStyled from './DropdownStyled';

/* Component it self */
const Dropdown = forwardRef((props, ref) => {
    /**
     * Properties values
     */
    const {
        className,
        children,

        toggle,
        toggleBlock,

        width,

        center,
        up,
        right,
        left,
        thin,

        opened,
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
    const dropdownRef = useRef(null);

    /**
     * Listen to
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
    useEffect(() => {
        document.addEventListener('click', handleClose);

        return removeClickListener;
    }, []);

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
     * Render
     */
    return (
        <DropdownStyled
            center={center}
            up={up}
            right={right}
            left={left}
            thin={thin}
            toggleBlock={toggleBlock || center}
            contentWidth={width}
            ref={dropdownRef}
            className={`aph-dropdown ${className || ''}`}>
            {(!toggle) ? (null) : (
                <span role="button"
                      onClick={handleToggle}
                      className="aph-dropdown__toggle">
                    {toggle}
                </span>
            )}
            {(!visible) ? (null) : (
                <div className={`aph-dropdown__content${active ? ' active' : ''}${visible ? ' visible' : ''}`}
                     onClick={() => handleClose()}>
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
};

/* Exporting */
export default Dropdown;
