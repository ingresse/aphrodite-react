/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS } from '../../../constants';

/* Styled */
const StyledButton = styled('button')(props => ({
    ...props.styles,

    color      : (props.color && props.color !== 'white' ? COLORS.WHITE : COLORS.BLACK),
    background : (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    borderColor: (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),

    '&:disabled': {
        cursor     : 'not-allowed',
        color      : COLORS.GREY,
        background : COLORS.LIGHT_GREY,
        borderColor: COLORS.LIGHT_GREY,
    },
}));

/* Component */
export default class Regular extends React.Component {
    render() {
        return (
            <StyledButton {...this.props}>
                {this.props.children}
            </StyledButton>
        );
    }
}
