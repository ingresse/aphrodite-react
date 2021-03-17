import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '../../constants';
import Checkbox from '../Form/Checkbox/Checkbox';
import Radio from '../Form/RadioButton/RadioButton';
import Styled from '../Styled/Styled';

/* Styles */
const Wrapper = styled(Styled)`
    position : absolute;
    z-index  : 10;
    top      : 50%;
    left     : 10px;
    transform: translateY(-50%);

    display: block;
    padding: 0;
    margin : 0;
    width  : 30px;
    height : 30px;

    border : 0;
    outline: 0;
    cursor : pointer;

    background-color: transparent;

    ${MEDIA_QUERIES.LT.SM} {
        left: 10px;
    }
`;

/* Component Itself */
const LayerCheckboxOrRadio = forwardRef(({
    checkbox,
    radio,
    disabled,
    ...props
}, ref) => {
    const shouldRender = !!(checkbox || radio);

    return !shouldRender ? null : (
        <Wrapper
            ref={ref}
            {...props}
        >
            {checkbox && (
                <Checkbox disabled={disabled} {...checkbox} />
            )}
            {radio && (
                <Radio disabled={disabled} {...radio} />
            )}
        </Wrapper>
    );
});

/* Default Properties */
LayerCheckboxOrRadio.defaultProps = {
    checkbox: null,
    radio   : null,
    styles  : {},
};

/* Properties Types */
LayerCheckboxOrRadio.propTypes = {
    /**
     * Checkbox props
     */
    checkbox: propTypes.object,

     /**
      * Radio props
      */
    radio: propTypes.object,

    /**
     * Custom styles
     */
    styles: propTypes.object,
};

/* Exporting */
export default LayerCheckboxOrRadio;
