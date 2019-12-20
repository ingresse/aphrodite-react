/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';
import LibInputMask from 'react-input-mask';

/* Composition Componets */
import Input from '../Input/FormControlInput';

/* Component Itself */
function InputMask(props) {
    /**
     * Render
     */
    return (
        <LibInputMask
            {...props}>
            {(inputProps) => (
                <Input
                    {...inputProps}
                />
            )}
        </LibInputMask>
    );
}

/* Default props */
InputMask.defaultProps = {
    mask: '',
};

/* Properties types */
InputMask.propTypes = {
    /**
     * Mask format
     *
     * Visit https://www.npmjs.com/package/react-input-mask for more details
     */
    mask: PropTypes.string,
};

/* Exporting */
export default InputMask;
