import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import customStyles from './AutocompleteStyled';

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

function Autocomplete({
    error,
    errorMessage,
    isAsync,
    ...props
}) {
    return (
        <AphFormControlWrapperStyled
            error={!!error}>
            {isAsync ? (
                <AsyncSelect styles={customStyles} {...props} />
            ) : (
                <Select styles={customStyles} {...props} />
            )}

            {(errorMessage) &&
                <AphFormControlErrorMsgStyled>
                    {errorMessage}
                </AphFormControlErrorMsgStyled>
            }
        </AphFormControlWrapperStyled>
    );
}

/* Prop Types */
Autocomplete.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.any,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,

    isAsync: PropTypes.bool,
    isMulti: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

/* Default Props */
Autocomplete.defaultProps = {
    id: `formControlRandomID${Math.random()}`,
    className: 'Aph aph-select',
    placeholder: 'Custom placeholder',
    onChange: () => null,
    options: null,
    error: false,
    errorMessage: '',

    isAsync: false,
    isMulti: false,
    isDisabled: false,
};

export default Autocomplete;
