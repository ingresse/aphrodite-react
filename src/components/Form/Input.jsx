/* Packages */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Framework Definitions */
import { COLORS, RADIUS, SIZES } from '../../constants';

/* Component Variations */
import Checkbox from './Checkbox';

/* Component Wrapper */
const AphInputWrapperStyled = styled.div`
    box-sizing: border-box;
    position: relative;
    display : block;
`;

/* Component Label */
const AphInputLabelStyled = styled.label`
    box-sizing: border-box;
    position: absolute;
    top     : calc(50% - 10px);
    left    : 10px;
    display : inline-block;
    top     : 2.5px;

    color: ${COLORS.DARK_GREY};

    font-size  : ${SIZES.SM.FONT_SIZE};
    line-height: ${SIZES.SM.LINE_HEIGHT};

    text-transform: uppercase;

    transition : color 0.25s linear;
    will-change: color;
`;

/* Component Styles */
const AphInputStyled = styled.input`
    box-sizing: border-box;
    display: block;
    width  : 100%;
    padding: 17.5px 10px 2.5px;
    margin : 0;
    min-height: 50px;

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    color           : ${COLORS.BLACK};
    background-color: ${COLORS.SMOKE};
    border-radius   : ${RADIUS.XS}px;

    border : 0;
    outline: 0;

    transition : background-color 0.25s linear, padding 0.25s linear;
    will-change: background-color, padding;

    &::placeholder {
        opacity: 0;
        color  : ${COLORS.GREY};

        transition: opacity 0.25s linear;
    }

    &:active,
    &:focus {
        background-color: ${COLORS.GET('PRIMARY', 0.1)};

        &::placeholder {
            opacity: 1;
        }
    }

    &:hover,
    &:active,
    &:focus {
        border : 0;
        outline: 0;

        + .aph-form-label {
            color: ${COLORS.PRIMARY};
        }
    }

    ${props => props.styles};
`;

/* Component Itself */
const Input = (props) => {
    const {
        id,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        type,
    } = props;

    const inputId = `AphFormField${id || Math.random()}`;
    const [hasValue, setHasValue] = useState(value ? true : false);

    if (type === 'checkbox') {
        return (
            <Checkbox
                {...props}
                id={id}
            />
        );
    }

    function handleChange(evt) {
        const { target } = evt;
        const inputValue = target.value;

        setHasValue(inputValue ? true : false);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt));
        }
    }

    return (
        <AphInputWrapperStyled>
            <AphInputStyled
                {...props}
                id={inputId}
                value={value}
                onChange={handleChange}
                placeholder={(!label) ? '' : (placeholder || '')}
                className={`aph-form-control ${className || ''} ${(placeholder || hasValue) ? 'aph-form-control--filled' : ''}`}
            />
            {(!label && !placeholder) ? (null) : (
                <AphInputLabelStyled
                    {...labelProps}
                    htmlFor={inputId}
                    className="aph-form-label">
                    {label || placeholder}
                </AphInputLabelStyled>
            )}
        </AphInputWrapperStyled>
    );
};

/* Default Properties */
Input.defaultProps = {
    id        : '',
    labelProps: {},
    labelRight: false,
    right     : false,
    styles    : {},
}

/* Properties Types */
Input.propTypes = {
    id        : propTypes.string.isRequired,
    labelProps: propTypes.object,
    labelRight: propTypes.bool,
    right     : propTypes.bool,
    styles    : propTypes.object,
};

/* Exporting */
export default Input;
