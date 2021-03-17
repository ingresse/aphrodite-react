import React, { forwardRef, useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';
import Styled from '../Styled/Styled';
import Icon from '../Icons/Icon';
import CollapsibleChildrenStyled from './CollapsibleChildrenStyled';

const Collapsible = forwardRef((props, ref) => {
    const {
        after,
        before,
        borderRadius,
        className,
        header,
        headerProps,
        children,
        childrenProps,
        disabled,
        delay,
        icon,
        iconSize,
        radius,
    } = props;

    const timerDelay                  = (delay * 1000);
    const wrapperRef                  = useRef(null);
    const wrapperContentRef           = useRef(null);
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
        cursor        : 'pointer',
        borderRadius  : (borderRadius || radius),
        padding       : '10px 15px',
    }, headerProps && headerProps.styles ? headerProps.styles : {});

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
     * Toggle Collapsible visibility
     */
    function toggle() {
        if (disabled) {
            return;
        }

        if (opened) {
            handleClose();
        } else {
            handleOpen();
        }

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
        <Styled
            {...props}
            ref={ref}
            className={`${className || ''} aph-collapsible ${opened ? 'active' : ''}`}
            styles={{
                position: 'relative',
                overflow: 'hidden',
                ...(props.styles || {}),
            }}
        >
            {before}
            {header && (
                <Styled
                    margin="0"
                    role="button"
                    {...headerProps}
                    onClick={toggle}
                    className="aph-collapsible__header"
                    styles={{
                        ...headerStyles,
                        paddingRight: (!icon ? null : `${iconSize}px`),
                    }}
                >
                    {header}
                    {icon && (
                        <Icon
                            className="aph-collapsible__header__item"
                            slug="arrow-down"
                            size={iconSize}
                            styles={{
                                position  : 'absolute',
                                top       : '50%',
                                right     : '5px',
                                transform : `translateY(-50%)${opened ? ' rotate(180deg)' : ''}`,
                                transition: `transform ${delay}s linear`,
                            }}
                        />
                    )}
                </Styled>
            )}
            <CollapsibleChildrenStyled
                {...childrenProps}
                ref={wrapperRef}
                visible={opened}
                styles={Object.assign({}, (childrenProps.styles || {}), styles)}
                className="aph-collapsible__content"
            >
                <div ref={wrapperContentRef}>
                    {children}
                </div>
            </CollapsibleChildrenStyled>
            {after}
        </Styled>
    );
});

Collapsible.defaultProps = {
    opened        : false,
    delay         : 0.2,
    childrenProps : {},
    childrenStyles: {},
    header        : '',
    headerProps   : null,
    icon          : true,
    iconSize      : 40,
    padding       : '0',
    radius        : 10,
    shadow        : true,
    shadowSpread  : '5px',
    styles        : {},
};

Collapsible.propTypes = {
    after         : propTypes.oneOfType([ propTypes.element, propTypes.string ]),
    before        : propTypes.oneOfType([ propTypes.element, propTypes.string ]),
    opened        : propTypes.bool,
    delay         : propTypes.number,
    icon          : propTypes.bool,
    iconSize      : propTypes.number,
    childrenProps : propTypes.object,
    childrenStyles: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
    header        : propTypes.any,
    headerProps   : propTypes.object,
};

export default Collapsible;
