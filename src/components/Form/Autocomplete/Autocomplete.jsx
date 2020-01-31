import React from "react";
import PropTypes from 'prop-types';
import Select from "react-select";
import AsyncSelect from "react-select/async";

import customStyles from "./AutocompleteStyled";

/* Component Helpers/Styles */
import AphFormControlWrapperStyled  from '../FormControlWrapperStyled';
import AphFormControlErrorMsgStyled from '../FormControlErrorMsgStyled';

function Autocomplete(props) {
    const { error, isAsync } = props;

    return (
        <AphFormControlWrapperStyled>
            {isAsync ? (
                <AsyncSelect styles={customStyles} {...props} />
            ) : (
                <Select styles={customStyles} {...props} />
            )}

            {error &&
                <AphFormControlErrorMsgStyled>
                    {error}
                </AphFormControlErrorMsgStyled>
            }
        </AphFormControlWrapperStyled>
    );
}

/* Prop Types */
Autocomplete.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.any,
    error: PropTypes.string,

    isAsync: PropTypes.bool,
    isMulti: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

/* Default Props */
Autocomplete.defaultProps = {
    id: `formControlRandomID${Math.random()}`,
    className: "Aph aph-select",
    placeholder: "Custom placeholder",
    onChange: () => null,
    options: null,
    error: '',

    isAsync: false,
    isMulti: false,
    isDisabled: false,
};

export default Autocomplete;
