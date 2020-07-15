/* Packages */
import React, { memo, forwardRef, useState, useEffect } from 'react';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlLabelStyled    from '../FormControlLabelStyled';
import AphFormControlStyled         from '../FormControlStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

/* Utilities */
import {
    colors,
} from '../../../utils';

/* Component Itself */
const TextArea = memo(forwardRef((props, ref) => {
    const {
        id,
        className,
        error,
        errorMessage,
        label,
        labelProps,
        placeholder,
        value,
        onChange,
        styles,
        ...rest
    } = props;

    const [hasValue, setHasValue] = useState(value ? true : false);
    const inputId                 = `${id || 'formControl'}`;
    const _styles                 = `
        max-width : 100%;
        min-width : 100%;
        min-height: 90px;
        padding-bottom: 10px;

        &[rows="4"] {
            min-height: 110px;
        }

        &[rows="5"] {
            min-height: 130px;
        }

        &[rows="6"] {
            min-height: 150px;
        }

        &[rows="7"] {
            min-height: 170px;
        }

        &[rows="8"] {
            min-height: 190px;
        }

        &[rows="9"] {
            min-height: 210px;
        }

        &[rows="10"] {
            min-height: 230px;
        }

        + .aph-form-label {
            display: block;
            top    : 0;

            background-color: ${props => colors.getFromTheme(props, 'background')};
        }

        &:disabled {
            + .aph-form-label {
                background-color: ${props => colors.getFromTheme(props, 'disabled', 'crystal')};
            }
        }

        ${styles};
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

        setHasValue(inputValue ? true : false);

        if (typeof onChange === 'function') {
            onChange(Object.assign({}, evt));
        }
    }

    return (
        <AphFormControlWrapperStyled
            error={!!error}
            hasLabel={!!label}>
            <AphFormControlStyled
                {...rest}
                as="textarea"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                styles={_styles}
                className={`aph-form-control ${className || ''}`}
            />
            {(!label) ? (null) : (
                <AphFormControlLabelStyled
                    {...labelProps}
                    htmlFor={inputId}
                    className={`aph-form-label ${(placeholder || hasValue) ? 'aph-form-label--top' : ''}`}>
                    {label}
                </AphFormControlLabelStyled>
            )}
            <AphFormControlErrorMsgStyled
                htmlFor={inputId}
                styles={!errorMessage ? null : { maxHeight: '600px' }}
                className="aph-form-error">
                {errorMessage || ''}
            </AphFormControlErrorMsgStyled>
        </AphFormControlWrapperStyled>
    );
}));

/* Exporting */
export default TextArea;
