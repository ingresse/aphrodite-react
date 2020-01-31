/* Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

/* Components Helpers */
import Icon from '../../Icons/Icon';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlButtonStyled   from '../FormControlButtonStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Component Itself */
const Select = memo(forwardRef((props, ref) => {
    const {
        id,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        errorMessage,
    } = props;

    const [ hasValue, setHasValue ] = useState((typeof value === 'number' || value) ? true : false);
    const styles = {
        height      : '50px',
        cursor      : 'pointer',
        paddingRight: '40px',
    };

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
                hasLabel={label ? true : false}
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
            <AphFormControlButtonStyled
                type="button"
                zIndex="-1"
                styles={{ pointerEvents: 'none' }}>
                <Icon
                    size={30}
                    slug="arrow-down"
                    color={props.disabled ? 'disabled' : 'base'}
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
Select.defaultProps = {
    id    : `formControlRandomID${Math.random()}`,
    label : '',
    btn   : null,
    styles: {},
};

/* Properties Types */
Select.propTypes = {
    id    : propTypes.string.isRequired,
    label : propTypes.string,
    btn   : propTypes.object,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Select;
