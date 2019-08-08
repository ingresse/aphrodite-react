/* Core Packages */
import styled from '@emotion/styled';

/* Component Itself */
const AphFlex = styled.div`
    box-sizing: border-box;
    display   : flex;
    min-height: 100%;

    flex-wrap: nowrap;
    flex-flow: ${props => props.flexFlow};

    align-items    : ${props => props.flexStretch ? 'stretch' : props.flexAlign};
    justify-content: ${props => props.flexJustify};

    ${props => props.flexItem && `
        height        : auto;
        flex          : 1 1 auto;
        flex-direction: column;
    `};

    ${props => props.styles};
`;

/* Exporting */
export default AphFlex;
