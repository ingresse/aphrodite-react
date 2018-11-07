/* Modules */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {polyfill} from 'react-lifecycles-compat';

/* Components */
import IconClose from '../IconClose/IconClose'

/* Constants */
import { MEDIA_QUERIES } from '../../constants';

const StyledWrapper = styled('div')(props => ({
    ...props.styles,
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: 'rgba(45,45,45,0.95)',
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
    color: 'white',
    bottom: '0px',
    display: 'flex',
    minHeight: '50px!important',
    maxHeight: '50px!important',
    minWidth: '380px!important',
    maxWidth: '380px!important',
    justifyContent: 'space-between',
    top: '10%',
    right: '10%',
    padding: '0 20px',
    position: 'fixed',
    transform: 'translateX(260%)',
    transition: 'transform .35s ease',
    zIndex: '2000',

    '.toast__link': {
        cursor: 'pointer',
    },

    '&.visible': {
        transform: 'translateX(40%)',
    },

    '&.static': {
        position: 'static',
    },

    [MEDIA_QUERIES.XS]: {
        '&.visible': {
            transform: 'translateX(10%)',
        }
    }
}));

/* Component it self */
class Toast extends Component {
    /**
     * Constructor
     *
     * @param {object} props
     */
    constructor (props) {
        super(props)

        this.props = props;
        this.state = {
            close  : false,
            visible: false,
        }

        this.setTimeout = '';
        this.handleClose = this.handleClose.bind(this);
    }

    /**
     * Show the toast.
     *
     * @param {object} props
     * @param {object} state - Current state data
     *
     * @return {Object}
     */
    static getDerivedStateFromProps(props, state) {
        if (props.visible !== state.visible && !state.close) {
            return {
                visible: props.visible,
            };
        }

        return null;
    }

    /**
     * Update the toast state.
     *
     * @param {object} prevProps - The previous props
     * @param {object} prevState - The previous state
     */
    componentDidUpdate(prevProps, prevState) {
        if (!this.state.visible && prevState.close) {
            this.setState({
                ...this.state,
                close: false
            });
        }

        if (this.state.visible && !this.state.close) {
            this.setTimeout = setTimeout(() => {
                this.handleClose();
            }, prevProps.timeout);
        }
    }

    /**
     * Close the toast.
     *
     * @param {object} evt - Event DOM.
     */
    handleClose(evt) {
        if (evt) {
            evt.preventDefault();
        }

        this.setState({
            visible: false,
            close  : true
        }, () => {
            clearTimeout(this.setTimeout);
        });
    }

    render () {
        return (
            <StyledWrapper className={`toast ${this.props.className || ''} ${this.state.visible && 'visible'}`}>
                <p className="aph font-weight-500">{ this.props.message }</p>
                <span className="toast__link" onClick={this.handleClose}><IconClose /></span>
            </StyledWrapper>
        )
    }

}

/* Default Properties */
Toast.defaultProps = {
    className: '',
    message  : '',
    timeout  : 3000,
    visible  : false,
}

/* Properties Types */
Toast.propTypes = {

    /**
    * Toast Messager.
    */
    message: PropTypes.string,

    /**
    * Toast timeout. Default 3000ms
    */
    timeout: PropTypes.number,

    /**
     * Show/Hide the Toast.
    */
    visible: PropTypes.bool,
};

// Polyfill the component to work with older versions of React
polyfill(Toast);

/* Export Component */
export default Toast;


