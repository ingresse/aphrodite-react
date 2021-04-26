/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';
import LibInputMask from 'react-input-mask';

/* Composition Componets */
import Input from '../Input/Input';

/* Component Itself */
function InputMask({
    mask,
    maskProps,
    value,
    onChange,
    ref,
    inputRef,
    disabled,
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
            disabled={disabled}
            {...maskProps}
        >
            {(inputProps) => (
                <Input
                    {...inputProps}
                    {...props}
                    disabled={disabled}
                    inputRef={ref || inputRef}
                />
            )}
        </LibInputMask>
    );
}

/* Default props */
InputMask.defaultProps = {
    mask: '',
    maskProps: {},
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

    /**
     * InputMask lib component props
     */
    maskProps: PropTypes.object,
};

/* Exporting */
export default InputMask;
