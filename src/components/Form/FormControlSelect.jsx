/* Packages */
import React, { useState } from 'react';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Components Helpers */
import IconArrowDownCircle from '../Icons/IconArrowDownCircle';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from './FormControlWrapperStyled';
import AphFormControlLabelStyled    from './FormControlLabelStyled';
import AphFormControlStyled         from './FormControlStyled';
import AphFormControlButtonStyled   from './FormControlButtonStyled';
import AphFormControlErrorMsgStyled from './FormControlErrorMsgStyled';

/* Component Styled */
const AphFormControlSelect = AphFormControlStyled.withComponent('select');

/* Component Itself */
const FormControlSelect = (props) => {
    const {
        id,
        className,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        type,
        btn,
        error,
        errorMessage,
        color,
    } = props;

    const [hasValue, setHasValue] = useState(value ? true : false);
    const inputId                 = `${id || 'formControl'}`;
    const styles                  = `
        height: 50px;
        cursor: pointer;

        ${props.styles};
    `;

    /**
     * Handle with input changes
     *
     * @param {object} evt - input change synthetic event
     */
    function handleChange(evt) {
        const { target } = evt;
        const inputValue = target.value;

        setHasValue(inputValue ? true : false);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt));
        }
    }

    return (
        <AphFormControlWrapperStyled>
            <AphFormControlSelect
                {...props}
                onChange={handleChange}
                styles={styles}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={inputId}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            <AphFormControlButtonStyled>
                <IconArrowDownCircle
                    size={10}
                    color={colors.get('black')}
                />
            </AphFormControlButtonStyled>
            <AphFormControlErrorMsgStyled
                htmlFor={inputId}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
};

/* Exporting */
export default FormControlSelect;
