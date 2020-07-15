/* Packages */
import styled from '@emotion/styled';

/**
 * Component Styled
 *
 * @param {object} properties - component props
 */
const FormControlStyled = styled.input`
    &.aph-form-control {
        ${props => props.styles};
    }
`;

/* Exporting */
export default FormControlStyled;
