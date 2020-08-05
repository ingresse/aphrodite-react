/* Core Packages */
import React, { memo, forwardRef, useState } from 'react';
import propTypes from 'prop-types';

/* Component Base */
import InputNumeric from '../InputNumeric/InputNumeric';

import { formatCurrency } from '../../../utils';

/* Component Itself */
const InputDiscount = memo(forwardRef(({
    currency,
    discountType,
    locale,
    onBlur,
    onFocus,
    type,
    value,
    ...props
}, ref) => {
    const [ inFocus, setInFocus ] = useState(false);
    const isDynamic = (discountType === 'dynamic');
    const isFixed = (discountType === 'fixed');
    const min = ((isDynamic || isFixed) ? 0 : undefined);
    const max = (isDynamic ? 100 : undefined);
    const currencyMask = formatCurrency(0, locale, currency).replace(/\d|\,|\./g, '');
    const before = ((inFocus && isFixed) ? currencyMask : '');
    const after = ((inFocus && isDynamic) ? '%' : '');
    const customType = (!inFocus ? 'text' : (type || 'number'));
    const customValue = ((inFocus || (!isFixed && !isDynamic) || (value === undefined) || (value === '')) ? value : (isFixed ? formatCurrency(value, locale, currency) : (value + '%')));

    function handleBlur(evt) {
        setInFocus(false);
        onBlur(evt);
    }

    function handleFocus(evt) {
        setInFocus(true);
        onFocus(evt);
    }

    const customProps = {
        min,
        max,
        before,
        after,
        ref,
        type: customType,
        value: customValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        ...props,
    };

    return (
        <InputNumeric
            {...customProps}
        />
    );
}));

/* Default Properties */
InputDiscount.defaultProps = {
    id: '',
    label: '',
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    type: 'number',
    styles: {},
    suggestions: [],
    value: undefined,
    defaultPadding: '10px',
    currency: 'BRL',
    locale: 'pt-BR',
    discountType: 'dynamic',
    doubleDecimal: true,
};

const valueTypes = propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
]);

/* Properties Types */
InputDiscount.propTypes = {
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
    discountType: propTypes.string,
    doubleDecimal: propTypes.bool,
};

/* Exporting */
export default InputDiscount;
