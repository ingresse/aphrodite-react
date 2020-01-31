import { colors } from '../../../utils';

const customStyles = {
    control: (provided, state) => {
        const controlStyles = {
            fontSize: "16px",
            border: "none",
            minHeight: "50px",
            boxShadow: "none",
            borderRadius: "5px",
            cursor: "pointer",
            padding: "0 2px",
            background: state.isFocused ?
                colors.get('ocean', 'crystal') : state.isDisabled ?
                    colors.get('mercury', 'crystal') : colors.get('smoke'),
        };

        return {
            ...provided,
            ...controlStyles
        };
    },

    indicatorSeparator: () => {
        const separatorStyles = {
            display: "none"
        };

        return {
            ...separatorStyles
        };
    },

    dropdownIndicator: () => {
        const indicatorStyles = {
            display: "flex",
            color: colors.get('black'),
            padding: "8px"
        };

        return {
            ...indicatorStyles
        };
    },

    menu: provided => {
        const menuStyles = {
            ...provided,

            padding: "10px 0"
        };

        return {
            ...provided,
            ...menuStyles
        };
    },

    option: (provided, state) => {
        const optionStyles = {
            fontSize: "16px",
            cursor: "pointer",
            color: colors.get('ocean', 'original'),
            background: state.isFocused || state.isSelected ? colors.get('ocean', 'crystal') : "none",

            "&:hover": {
                background: colors.get('ocean', 'crystal')
            }
        };

        return {
            ...provided,
            ...optionStyles
        };
    }
};

export default customStyles;
