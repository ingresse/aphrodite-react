/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants Helpers */
import { ICONS, RADIUS } from '../../constants';

/* Utils */
import { colors } from '../../utils';

/* Components Helpers */
import IconCheckThin from '../Icons/IconCheckThin';

/* Wrapper Styles */
const AphCheckboxWrapperStyled = styled.div`
    box-sizing: border-box;
    display   : block;
    position  : relative;
`;

/* Mask Styles */
const AphCheckboxMaskStyled = styled.label`
    box-sizing: border-box;
    display   : block;
    position  : relative;
    cursor    : pointer;

    padding-top   : 5px;
    padding-bottom: 5px;
    padding-right : ${props => props.labelRight ? '35px' : null};
    padding-left  : ${props => !props.labelRight ? '35px' : null};

    text-align: ${props => props.right ? 'right' : null};

    &:before {
        box-sizing: border-box;
        content   : " ";
        position  : absolute;
        display   : block;
        width     : 30px;
        height    : 30px;

        top: 0;

        border-radius: 5px;

        transition-timing-function: ease;
        transition-duration       : 0.15s;
        transition-property       : background-image;

        background-image   : url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
        background-color   : ${props => colors.get((props.color || 'secondary'), 'crystal')};
        background-size    : 20px;
        background-position: center;
        background-repeat  : no-repeat;
    }
`;

/* Component Styles */
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

    + .aph-form-control-mask:before {
        right: ${props => (props.labelRight || props.right) ? '0' : null};
        left : ${props => (!props.labelRight && !props.right) ? '0' : null};
    }

    &:checked + .aph-form-control-mask:before {
        background-image: url('${props => ICONS.ENCODE_SVG(
            <IconCheckThin
                size={20}
                color={colors.get(props.color || 'secondary')}
            />
        )}');
    }
`;

/* Component Itself */
const Checkbox = (props) => {
    const { className, children, color, id, right, labelProps, labelRight } = props;
    let newProps = Object.assign({}, props);

    delete newProps.children;

    return (
        <AphCheckboxWrapperStyled>
            <AphCheckboxStyled
                className={`aph-form-control ${className || ''}`}
                {...newProps}
                type="checkbox"
            />
            <AphCheckboxMaskStyled
                className={`aph-form-control-mask ${className || ''}`}
                htmlFor={id}
                color={color}
                right={right}
                labelRight={labelRight || right}
                {...labelProps}>
                {children}
            </AphCheckboxMaskStyled>
        </AphCheckboxWrapperStyled>
    );
};

/* Default Properties */
Checkbox.defaultProps = {
    id        : `formControlRandomID${Math.random()}`,
    labelProps: {},
    labelRight: false,
    right     : false,
    styles    : {},
};

/* Properties Types */
Checkbox.propTypes = {
    id        : propTypes.string.isRequired,
    labelProps: propTypes.object,
    labelRight: propTypes.bool,
    right     : propTypes.bool,
    styles    : propTypes.any,
};

/* Exporting */
export default Checkbox;
