/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';
import LibInputMask from 'react-input-mask';

/* Composition Componets */
import Input from '../Input/Input';

/* Component Itself */
function InputMask({
    mask,
    value,
    onChange,
    ref,
    inputRef,
    ...props
}) {
    /**
     * Render
     */
    return (
        <LibInputMask
            mask={mask}
            value={value}
            onChange={onChange}
            {...props}
        >
            {(inputProps) => (
                <Input
                    {...inputProps}
                    inputRef={ref || inputRef}
                />
            )}
        </LibInputMask>
    );
}

/* Default props */
InputMask.defaultProps = {
    mask: '',
    defaultPadding: '10px',
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
