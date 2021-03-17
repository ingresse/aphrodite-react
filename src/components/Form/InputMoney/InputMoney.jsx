/* Core Packages */
import React, { memo, forwardRef } from 'react';
import propTypes from 'prop-types';

/* Component Base */
import InputDiscount from '../InputDiscount/InputDiscount';

/* Component Itself */
const InputMoney = memo(forwardRef((props, ref) => (
    <InputDiscount
        {...props}
    />
)));

/* Default Properties */
InputMoney.defaultProps = {
    id: '',
    label: '',
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    type: 'number',
    inputMode: 'decimal',
    styles: {},
    suggestions: [],
    value: undefined,
    defaultPadding: '10px',
    currency: 'BRL',
    locale: 'pt-BR',
    discountType: 'fixed',
    doubleDecimal: true,
};

const valueTypes = propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
]);

/* Properties Types */
InputMoney.propTypes = {
    id: propTypes.string.isRequired,
    label: propTypes.string,
    onChange: propTypes.func.isRequired,
    type: propTypes.string,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
    suggestions: propTypes.array,
    value: valueTypes,
    currency: propTypes.string,
    locale: propTypes.string,
};

/* Exporting */
export default InputMoney;
