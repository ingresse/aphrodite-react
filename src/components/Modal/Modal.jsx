import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Helpers e Components */
import { H1, ActionBar } from '../';

/* Styled components */
import {
    ModalContainer,
    Mask,
    ModalDialog,
 } from './ModalStyles';

function Modal(props) {
    const {
        title,
        children,
        footer,

        opened,
        animationDuration,
    } = props;

    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        if (!opened) {
            setTimeout(() => {
                setMounted(opened);
            }, animationDuration);

            return
        }

        setMounted(opened)
    }, [ opened ]);

    const style = {
        visibility: opened ? 'visible' : 'hidden',
        animationDuration: animationDuration + 'ms',
        transition: 'visibility ' + animationDuration + 'ms'
    };

    return(mounted &&
        <ModalContainer
            style={style}
            className={`${opened ? 'modal-fade-enter' : 'modal-fade-leave'}`}
        >
            <Mask />
            <ModalDialog>

                {title &&
                    <H1 center bold>{title}</H1>
                }

                {children}

                {footer &&
                    <ActionBar styles={{ padding: '10px 0', minHeight: 'initial' }} visible={true}>
                        {footer}
                    </ActionBar>
                }

            </ModalDialog>
        </ModalContainer>
    );
}

/* Default props */
Modal.defaultProps = {
    title  : '',
    opened : false,
    animationDuration: '100',
};

/* Prop Types */
Modal.propTypes = {
    title   : PropTypes.string,
    opened  : PropTypes.bool,
    animationDuration: PropTypes.string,
};

export default Modal;
