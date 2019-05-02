/* Packages */
import React from 'react';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Components Helpers */
import IconArrowDownCircle from '../Icons/IconArrowDownCircle';

/* Component Itself */
const FormControlSelect = (props) => {
    const styles = `
        height: 50px;
        cursor: pointer;

        ${props => props.styles};
    `;

    return (
        <select
            icon="arrow-down"
            {...props}
            styles={styles}
            btn={{
                children: (
                    <IconArrowDownCircle
                        size={10}
                        color={colors.get('black')}
                    />
                ),
            }}
        />
    );
};

/* Exporting */
export default FormControlSelect;
