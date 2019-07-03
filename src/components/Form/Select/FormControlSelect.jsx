/* Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

/* Framework Definitions */
import { SIZES } from '../../../constants';
import { colors } from '../../../utils';

/* Components Helpers */
import IconArrowDown from '../../Icons/IconArrowDown';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlButtonStyled   from '../FormControlButtonStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const FormControlSelect = memo(forwardRef((props, ref) => {
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

    const [ hasValue, setHasValue ] = useState((typeof value === 'number' || value) ? true : false);
    const styles = `
        height: 50px;
        cursor: pointer;
    `;

    /**
     * Trigger
     */
    useEffect(() => {
        setHasValue(value ? true : false);
    }, [ value ]);

    /**
     * Handle with input changes
     *
     * @param {object} evt - input change synthetic event
     */
    function handleChange(evt) {
        const { target } = evt;
        const inputValue = target.value;

        setHasValue((typeof inputValue === 'number' || inputValue) ? true : false);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt), inputValue);
        }
    }

    return (
        <AphFormControlWrapperStyled>
            <AphFormControlStyled
                {...props}
                as="select"
                ref={ref}
                onChange={handleChange}
                styles={Object.assign({}, styles, props.styles)}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={id}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            <AphFormControlButtonStyled type="button">
                <IconArrowDown
                    color={colors.get('black')}
                />
            </AphFormControlButtonStyled>
            <AphFormControlErrorMsgStyled
                htmlFor={id}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
}));

/* Default Properties */
FormControlSelect.defaultProps = {
    id    : `formControlRandomID${Math.random()}`,
    label : '',
    btn   : null,
    styles: {},
};

/* Properties Types */
FormControlSelect.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    styles: propTypes.any,
};

/* Exporting */
export default FormControlSelect;
