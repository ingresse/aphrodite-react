/* Core Packages */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Validator */
import { cpfValidator } from '../../../validators';

/* Composition Componets */
import InputMask from '../InputMask/InputMask';

/* Component Itself */
function InputCpf({
    error,
    onChange,
    mask: pMask,
    ...rest
}) {
    /**
     * Local values
     */
    const mask = (pMask || '999.999.999-99');
    const [ hasError, setHasError ] = useState(error || false);

    /**
     * Handle changes
     *
     * @param {object} evt - Synthetic input event
     */
    function handleChange(evt) {
        const { target } = (evt || {});
        const { value }  = (target || {});
        const isValid    = cpfValidator(value);

        setHasError((value && !isValid) ? true : false);

        onChange({
            ...(evt ||{}),
        });
    }

    /**
     * Render
     */
    return (
        <InputMask
            mask={mask}
            error={error || hasError}
            onChange={handleChange}
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            {...rest}
        />
    );
}

/* Default props */
InputCpf.defaultProps = {
    mask: '',
    onChange: () => {},
};

/* Properties types */
InputCpf.propTypes = {
    /**
     * Mask format
     *
     * Visit https://www.npmjs.com/package/react-input-mask for more details
     */
    mask: PropTypes.string,

    /**
     * Changes handler
     *
     * @param {object} evt - Synthetic input event
     */
    onChange: PropTypes.func,
};

/* Exporting */
export default InputCpf;
