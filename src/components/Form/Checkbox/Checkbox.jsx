import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { ICONS } from '../../../constants';
import { colors } from '../../../utils';
import IconCheckThin from '../../Icons/IconCheckThin';

const AphCheckboxWrapperStyled = styled.div`
    box-sizing: border-box;
    display   : block;
    position  : relative;
`;

const AphCheckboxMaskStyled = styled.label`
    box-sizing: border-box;
    display   : block;
    position  : relative;
    cursor    : pointer;

    min-height    : 30px;
    padding-top   : 5px;
    padding-bottom: 5px;
    padding-right : ${props => props.labelRight ? '40px' : null};
    padding-left  : ${props => !props.labelRight ? '40px' : null};

    text-align: ${props => props.right ? 'right' : null};
    transition: all 0.15s ease;

    &:before {
        box-sizing  : border-box;
        content     : " ";
        position    : absolute;
        display     : block;
        width       : 30px;
        height      : 30px;
        border      : ${({ borderWidth }) => borderWidth}px solid;
        border-color: ${(props) => colors.getFullColor(props, (props.color || props.borderColor || 'border'))};

        top: calc(50% - 15px);

        border-radius: 7.5px;

        transition-timing-function: ease;
        transition-duration       : 0.15s;
        transition-property       : background-color, background-image, border-color;

        background-image   : url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
        background-color   : transparent;
        background-size    : 20px;
        background-position: center;
        background-repeat  : no-repeat;
    }
`;

const AphCheckboxStyled = styled.input`
    box-sizing: border-box;

    position: absolute;
    display : block;
    width   : 30px;
    height  : 30px;
    margin  : 0;
    opacity : 0;

    top  : 0;
    right: ${props => props.labelRight ? '0' : null};
    left : ${props => !props.labelRight ? '0' : null};

    vertical-align: middle;

    + .aph-form-control-mask {
        &:active,
        &:focus,
        &:hover {
            color: ${props => colors.getFullColor(props, (props.color || 'secondary'))};
        }

        &:before {
            right: ${props => (props.labelRight || props.right) ? '0' : null};
            left : ${props => (!props.labelRight && !props.right) ? '0' : null};

            &:active,
            &:focus,
            &:hover {
                border-color: ${props => colors.getFullColor(props, (props.color || 'secondary'))};
            }
        }
    }

    &:active,
    &:checked,
    &:focus,
    &:hover {
        + .aph-form-control-mask {
            color: ${props => colors.getFullColor(props, (props.color || 'secondary'))};

            &:before {
                border-color: ${props => colors.getFullColor(props, (props.color || 'secondary'))};
            }
        }
    }

    &:checked + .aph-form-control-mask:before {
        background-image: url('${props => ICONS.ENCODE_SVG(
            <IconCheckThin
                size={20}
                color={colors.getFullColor(props, (props.color || 'secondary'))}
            />
        )}');
    }

    &.disabled,
    &:disabled {
        + .aph-form-control-mask {
            color: ${props => colors.getFullColor(props, (props.color || 'disabled'))};

            &:active,
            &:focus,
            &:hover {
                color: ${props => colors.getFullColor(props, (props.color || 'disabled'))};
            }

            &:before {
                color           : ${props => colors.getFullColor(props, 'disabled')};
                border-color    : ${props => colors.getFullColor(props, 'disabled')};
                background-color: ${props => colors.getFullColor(props, 'background')};
            }
        }

        &:checked + .aph-form-control-mask:before {
            background-image: url('${props => ICONS.ENCODE_SVG(
                <IconCheckThin
                    size={20}
                    color={colors.getFullColor(props, 'disabled')}
                />
            )}');
        }
    }
`;

const Checkbox = forwardRef((props, ref) => {
    const {
        borderColor,
        borderWidth,
        className,
        children,
        color,
        labelProps,
        labelRight,
        id,
        right,
    } = props;
    let newProps = Object.assign({}, props);

    delete newProps.children;

    return (
        <AphCheckboxWrapperStyled>
            <AphCheckboxStyled
                className={`aph-form-control ${className || ''}`}
                {...newProps}
                ref={ref}
                type="checkbox"
            />
            <AphCheckboxMaskStyled
                className={`aph-form-control-mask ${className || ''}`}
                htmlFor={id}
                color={color}
                right={right}
                labelRight={labelRight || right}
                borderColor={borderColor}
                borderWidth={borderWidth}
                {...labelProps}
            >
                {children}
            </AphCheckboxMaskStyled>
        </AphCheckboxWrapperStyled>
    );
});

Checkbox.defaultProps = {
    id         : `formControlRandomID${Math.random()}`,
    labelProps : {},
    labelRight : false,
    right      : false,
    borderColor: '',
    borderWidth : 2,
    styles     : {},
};

Checkbox.propTypes = {
    id         : propTypes.string.isRequired,
    labelProps : propTypes.object,
    labelRight : propTypes.bool,
    right      : propTypes.bool,
    borderColor: propTypes.string,
    borderWidth: propTypes.number,
    styles     : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

export default Checkbox;
