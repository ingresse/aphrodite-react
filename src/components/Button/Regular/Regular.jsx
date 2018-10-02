/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS } from '../../../constants';

/* Styled */
const StyledButton = styled('button')(props => ({
    ...props.styles,

    borderColor: (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
    color      : (props.color && props.color !== 'white' ? COLORS.WHITE : COLORS.BLACK),
    background : (props.color ? COLORS[props.color.toUpperCase()] : COLORS.PRIMARY),
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
