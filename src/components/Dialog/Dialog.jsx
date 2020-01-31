import React from 'react';
import PropTypes from 'prop-types';

import { DialogWrapper, DialogContent } from './DialogStyled';

function Dialog({
    opened,
    onClose,

    align,
    justify,

    children,
    styles,

    padding,
    closeArea,
}) {
    return (
        <DialogWrapper
            className={`aph-dialog__wrapper ${opened  ? 'act' : ''}`}
            styles={styles}
            align={align}
            justify={justify}
            padding={padding}>
            <DialogContent
                className={`aph-dialog__content ${opened  ? 'act' : ''}`}>
                {children}
            </DialogContent>
            {!closeArea ? null : (
                <div
                    onClick={onClose}
                    className={`aph-dialog__close__area`}
                    style={{
                        zIndex  : '-1',
                        position: 'absolute',
                        top   : 0,
                        left  : 0,
                        right : 0,
                        bottom: 0,
                    }}
                />
            )}
        </DialogWrapper>
    );
}

/* Prop Types */
Dialog.propTypes = {
    opened   : PropTypes.bool.isRequired,
    onClose  : PropTypes.func.isRequired,
    closeArea: PropTypes.bool,

    align  : PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,

    children: PropTypes.any,
    styles  : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

/* Default props */
Dialog.defaultProps = {
    children : null,
    closeArea: true,

    padding: '0',
    align  : 'center',
    justify: 'center',
    styles : {},
};

export default Dialog;
