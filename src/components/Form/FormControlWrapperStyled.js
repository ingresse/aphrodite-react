/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { colors } from '../../utils';

/* Component Styles */
const AphFormControlWrapperStyled = styled.div`
    box-sizing: border-box;
    position  : relative;
    display   : block;

    .aph-form-control {
        padding: ${({ hasLabel }) => !hasLabel ? null : '20px 10px 0'};
    }

    ${props => !props.hasError ? null : `
        .aph-form-control {
            color: ${colors.getFromTheme(props, 'error')};

            + .aph-form-label {
                color: ${colors.getFromTheme(props, 'error')};
            }

            &:hover,
            &:active,
            &:focus {
                + .aph-form-label {
                    color: ${colors.getFromTheme(props, 'error')};
                }
            }
        }
    `}
`;

/* Exporting */
export default AphFormControlWrapperStyled;
