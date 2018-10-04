/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS } from '../../../constants';

/* Styled */
const StyledButton = styled('button')(props => ({
    ...props.styles,

    borderColor: (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    color      : (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    background : 'transparent',

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
