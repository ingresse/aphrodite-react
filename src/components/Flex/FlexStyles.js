/* Core Packages */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Flex = () => css`
    display: flex;
`;

const FlexWrap = (props) => css`
    flex-wrap: ${props.flexWrap};
`;

const AlignItems = (props) => css`
    align-items: ${props.alignItems};
`;

const AlignContent = (props) => css`
    align-items: ${props.alignContent};
`;

const FlexDirection = (props) => css`
    flex-direction: ${props.flexDirection};
`;

const JustifyContente = (props) => css`
    justify-content: ${props.justifyContent};
`;

/* Properties for the Children */
const Order = (props) => css`
    order: ${props.order};
`;

const FlexGrow = (props) => css`
    flex-grow: ${props.flexGrow};
`;

const AlignSelf = (props) => css`
    align-self: ${props.alignSelf};
`;

const FlexShrink = (props) => css`
    flex-shrink: ${props.flexShrink};
`;

/* Component Itself */
const AphFlex = styled.div`
    box-sizing: border-box;

    ${(props) => props.flex && (Flex)};

    ${(props) => props.flexWrap       && (FlexWrap)};
    ${(props) => props.alignItems     && (AlignItems)};
    ${(props) => props.alignContent   && (AlignContent)};
    ${(props) => props.flexDirection  && (FlexDirection)};
    ${(props) => props.justifyContent && (JustifyContente)};

    ${(props) => props.order      && (Order)};
    ${(props) => props.flexGrow   && (FlexGrow)};
    ${(props) => props.alignSelf  && (AlignSelf)};
    ${(props) => props.flexShrink && (FlexShrink)};

    ${(props) => props.styles};
`;

/* Exporting */
export default AphFlex;
