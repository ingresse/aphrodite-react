/* Packages */
import React, { Component } from 'react';
import styled, { keyframes } from 'react-emotion';
import PropTypes from 'prop-types';
const color = require('tinycolor2');

/* Constants */
import { COLORS } from '../../constants';

/* Component */
const StyledSwitch = styled('label')(props => ({
    ...props.styles,

    position  : 'relative',
    display   : 'inline-block',
    minHeight : '30px',
    margin    : '0',
    padding   : `${props.right ? '6px 60px 6px 0' : '6px 0 6px 60px'}`,

    fontSize     : '13px',
    fontWeight   : '500',
    lineHeight   : '2.5',
    textTransform: 'uppercase',

    color : COLORS.DARK_GREY,
    cursor: 'pointer',

    ':after': {
        content: 'no-open-quote',
        display: 'block',
    },

    '.aph-switch-check': {
        display : 'inline-block',
        position: 'absolute',
        top     : '-1px',
        opacity : '0',
        right   : `${props.right ? 0 : 'auto'}`,
        left    : `${props.right ? 'auto!important' : 0}`,

        ':checked': {
            backgroundColor: COLORS.GREEN,

            ':before': {
                transform: 'translateX(20px)',

                borderColor: COLORS.GREEN,
                boxShadow  : '1px 0 2px -1px rgba(45,45,45,.25)',
            }
        },
    },

    '.aph-switch-slide': {
        position: 'absolute',
        cursor  : `${props.disabled ? 'not-allowed' : 'pointer'}`,

        top   : '49%',
        bottom: '0',
        right   : `${props.right ? 0 : 'auto'}`,
        left    : `${props.right ? 'auto!important' : 0}`,

        transform: 'translateY(-49%)',

        backgroundColor: props.disabled ? COLORS.LIGHT_GREY : COLORS.GREY,

        borderRadius: '2px',

        transition: '.1s',

        ':before': {
            position: 'absolute',
            content : 'no-open-quote',

            width : '28px',
            height: '28px',
            top   : '0',
            left  : '0',

            backgroundColor: props.disabled ? COLORS.SMOKE : COLORS.WHITE,
            border         : `1px solid ${props.disabled ? COLORS.LIGHT_GREY : COLORS.GREY}`,
            borderRadius   : '3px',
            boxShadow      : `1px 0 2px -1px rgba( ${color(COLORS.BLACK).toString},.25)`,

            transition: '.1s',
        },

        '&.active': {
            backgroundColor: props.disabled ? color(COLORS.GREEN).lighten(30).toString() : COLORS.GREEN,

            ':before': {
                transform: 'translateX(20px)',
                borderColor: props.disabled ? color(COLORS.GREEN).lighten(30).toString() : COLORS.GREEN,
            }
        }
    },

    '.aph-switch-check, .aph-switch-slide': {
        width : '50px',
        height: '30px',
        left  : '0',

    },
}));


class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            checked: false
        };

        this.slide = this.slide.bind(this);
    }

    componentDidMount() {
        const { checked } = this.props;
        this.setState({
            checked: checked || false
        });
    }

    slide() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <StyledSwitch htmlFor={this.props.inputId} {...this.props} className={`${this.props.right && 'aph-switch-right'} ${ this.props.className || '' }`}>
                <input
                    className="aph-switch-check"
                    id={this.props.inputId}
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={this.slide}
                    disabled={this.props.disabled}
                />
                <div className={`aph-switch-slide ${this.state.checked ? 'active' : ''}`}></div>
                {this.props.message}
            </StyledSwitch>
        )
    }
}

/* Default Properties */
Switch.defaultProps = {
    checked : false,
    disabled: false,
    inputId : null,
    message : '',
    right   : false,
};

/* Properties Types */
Switch.propTypes = {

    /**
    * Should the Switch be checked?
    */
    checked: PropTypes.bool,

    /**
    * Should the Switch be disabled?
    */
    disabled: PropTypes.bool,

    /**
    * Add an id for input
    */
    inputId: PropTypes.string,

    /**
    * Add a message with switch
    */
    message: PropTypes.string,

    /**
    * Should the Switch render in righ side?
    */
    right: PropTypes.bool,

};

export default Switch;
