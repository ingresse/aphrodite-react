/* Packages */
import styled from '@emotion/styled';

/* Utils */
import { COLORS, RADIUS } from '../../constants';

/* Component Styles */
const AphTableStyled = styled.table`
    box-sizing: border-box;
    min-width : 100%;

    border-collapse: collapse;
    border-style   : hidden;

    ${props => props.styles};

    ${props => (!props.rounded ? null : `
        position     : relative;
        overflow     : hidden;
        border-radius: ${RADIUS.SM}px;
    `)}

    ${props => (!props.striped ? null : `
        tbody {
            tr:nth-child(even) {
                background-color: ${COLORS.SMOKE};
            }
        }
    `)}

    thead,
    tfoot {
        background-color: ${COLORS.LIGHT_GREY};
        text-align: left;
    }

    th {
        font-weight: 700;
        padding:
            ${props => (props.condensed ? '6px' : '11px')}
            10px
            ${props => (props.condensed ? '4px' : '9px')}
        ;
    }

    td {
        padding:
            ${props => (props.condensed ? '5px' : (props.bordered ? '10px' : '11px'))}
            10px
            ${props => (props.condensed ? (props.bordered ? '4px' : '5px') : '9px')}
        ;

        ${props => (!props.bordered ? null : `
            border-top: 1px solid ${COLORS.LIGHT_GREY};
        `)}
    }

    tbody {
        ${props => (!props.hoverable ? null : `
            tr {
                background-color: transparent;
                transition: background-color 0.25s linear;

                &:hover {
                    background-color: ${COLORS.SMOKE};
                }
            }
        `)}
    }
`;

/* Exporting */
export default AphTableStyled;
