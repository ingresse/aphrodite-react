/* Packages */
import React from 'react';
import styled from '@emotion/styled';
const color = require('tinycolor2');

/* Constants */
import { COLORS } from '../../../constants';

/* Styled */
const StyledButton = styled('button')(props => ({
    ...props.styles,

    borderColor: (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    color      : (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    background : 'transparent',

    '&:hover,&:focus,&:active': {
        borderColor: color(props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY).darken().toString(),
        color      : color(props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY).darken().toString(),
    },

    '&:disabled': {
        cursor     : 'not-allowed',
        color      : COLORS.GREY,
        borderColor: COLORS.GREY,
    },
}));

/* Component */
export default class Bordered extends React.Component {
    render() {
        return (
            <StyledButton {...this.props}>
                {this.props.children}
            </StyledButton>
        );
    }
}
