/* Core Packages */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactClipboard from 'react-clipboard.js';

/* Component Styles */
import ClipboardStyled from './ClipboardStyled';

/* Component Itself */
const Clipboard = (props) => {

    /**
     * Global values
     */
    const {
        styled,
        styles,

        className,
        onSuccess,
        onError,

        ...rest
    } = props;

    /**
     * Local values
     */
    const [ timer, setTimer ]   = useState(null);
    const [ status, setStatus ] = useState('');

    /**
     * Apply Status
     *
     * @param {string} _status
     */
    function _applyStatus (_status) {
        clearTimeout(timer);
        setStatus(_status);
        setTimer(
            setTimeout(() => {
                setStatus('');
            }, 1000)
        );
    }

    /**
     * On error
     *
     * @param {object} evt
     */
    function _onError (evt) {
        _applyStatus('error');

        if (typeof onError === 'function') {
            onError({ ...evt });
        }
    }

    /**
     * On success
     *
     * @param {object} evt
     */
    function _onSuccess (evt) {
        _applyStatus('success');

        if (typeof onSuccess === 'function') {
            onSuccess({ ...evt });
        }
    }

    /**
     * Common Props
     */
    const clipboardProps = {
        ...rest,
        onError  : _onError,
        onSuccess: _onSuccess,
    };

    /**
     * Render
     */
    if (!styled) {
        return (
            <ReactClipboard
                {...clipboardProps}
                className={`aph-clipboard ${className || ''}`}
            />
        );
    }

    return (
        <ClipboardStyled
            {...clipboardProps}
            as={ReactClipboard}
            styles={styles}
            className={`aph-clipboard${status === 'success' ? ' success' : ''}${status === 'error' ? ' error' : ''} ${className || ''}`}
        />
    );
};

/* Default Props */
Clipboard.defaultProps = {
    styled: false,
    styles: {},
};

/* Properties Types */
Clipboard.propTypes = {
    /**
     * Should have custom styles?
     */
    styled: propTypes.bool,

    /**
     * Only applied with `styled`
     */
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Clipboard;
