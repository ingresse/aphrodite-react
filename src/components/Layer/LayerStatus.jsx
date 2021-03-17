import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '../../utils';
import { MEDIA_QUERIES } from '../../constants';
import Styled from '../Styled/Styled';

const Wrapper = styled(Styled)`
    position: absolute;
    z-index : 10;
    top     : 26.93%;
    bottom  : 26.93%;
    left    : ${({ hasInput }) => !hasInput ? 1 : 4}0px;

    display: block;
    padding: 0;
    margin : 0;
    width  : 30px;
    height : auto;

    border : 0;
    outline: 0;
    cursor : pointer;

    background-color: transparent;

    transition-property       : top, bottom;
    transition-duration       : 0.2s;
    transition-timing-function: linear;

    -webkit-tap-highlight-color: rgba(0,0,0,0);

    &:after {
        content  : " ";
        position : absolute;
        top      : 0;
        bottom   : 0;
        left     : 50%;
        transform: translateX(-50%);

        display : block;
        margin  : 0;
        padding : 0;
        width   : 4px;
        height  : auto;

        border-radius: 2.5px;

        background-color: ${props => colors.get(props.textColor)};
    }

    &:active,
    &:focus,
    &:hover {
        top    : 15%;
        bottom : 15%;
        border : 0;
        outline: 0;

        .aph-layer__status__description {
            opacity   : 1;
            z-index   : 9;
            visibility: visible;
        }
    }

    .aph-layer__status__description {
        box-sizing: border-box;
        z-index   : -1;
        opacity   : 0;
        visibility: hidden;
        position  : absolute;
        top       : 50%;
        left      : 25px;
        transform : translateY(-50%);

        display   : inline-block;
        width     : auto;
        min-height: 30px;
        padding   : 5px 10px;

        white-space: nowrap;

        font-size     : 12px;
        line-height   : 20px;
        text-transform: uppercase;

        border-radius   : 5px;
        color           : inherit;
        background-color: #ffffff;
        box-shadow      : 0 0 5px rgba(0, 0, 0, 0.2);

        transition-property       : opacity, z-index, visibility;
        transition-duration       : 0.25s;
        transition-timing-function: linear;
    }

    ${MEDIA_QUERIES.LT.SM} {
        left: ${({ hasInput }) => !hasInput ? '5px' : '40px'};

        .aph-layer__status__description {
            left: 30px;
        }
    }
`;

/* Component Itself */
const LayerStatus = forwardRef(({
    children,
    color,
    label,
    text,
    checkbox,
    radio,
    ...props
}, ref) => {
    return (
        <Wrapper
            as="button"
            type="button"
            tabIndex="-1"
            textColor={color}
            ref={ref}
            hasInput={!!(checkbox || radio)}
            {...props}
        >
            {(children || label || text) && (
                <span className="aph-layer__status__description">
                    {children || label || text}
                </span>
            )}
        </Wrapper>
    );
});

/* Default Properties */
LayerStatus.defaultProps = {
    className: '',
    color: 'disabled',
    tabIndex: '-1',
    type: 'button',
    styles: {},
};

/* Properties Types */
LayerStatus.propTypes = {
    /**
     * Hover content
     */
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.element,
    ]),

    /**
     * Color name from Colors Utility
     */
    color: propTypes.string,

    /**
     * Custom styles
     */
    styles: propTypes.object,
};

/* Exporting */
export default LayerStatus;
