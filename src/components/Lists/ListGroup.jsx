/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

/* Constants */
import { COLORS, GRID, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListGroup = styled('div')(props => ({
    boxSizing: 'border-box',
    position : 'relative',
    overflow : 'hidden',
    display  : 'block',
    width    : '100%',
    padding  : (props.noSideBorders ? '1px 0' : '1px'),
    margin   : 0,
    listStyle: 'none',

    borderRadius: ((!isNaN(props.radius) ? props.radius : RADIUS) + GRID.UNIT),
    boxShadow   : (props.noSideBorders ?
        (`
            inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent,
            inset 0 1px 0 0 ${COLORS.LIGHT_GREY}
        `)
        :
        (`
            inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
            inset 1px 0 0 0 ${COLORS.LIGHT_GREY},
            inset -1px 0 0 0 ${COLORS.LIGHT_GREY},
            inset 0 1px 0 0 ${COLORS.LIGHT_GREY}
        `)
    ),

    '.aph-list__header, .aph-list__item': {
        boxShadow   : `
            inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent
        `,

        '+ .aph-list__header, + .aph-list__item': {
            boxShadow   : `
                inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
                inset 0 0 0 0 transparent,
                inset 0 0 0 0 transparent,
                inset 0 0 0 0 transparent
            `,
        }
    },

    '.aph-list__header': {
        backgroundColor: COLORS.DARK_SMOKE,
    },

    '.aph-list__item': {
        backgroundColor: COLORS.SMOKE,
    },

    'div:first-of-type': {
        '.aph-list__header, > .aph-list__item': {
            '&:first-of-type': {
                marginTop: '-1px',
                borderTopRightRadius: (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
                borderTopLeftRadius : (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
                boxShadow: `
                    inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
                    inset 0 0 0 0 transparent,
                    inset 0 0 0 0 transparent,
                    inset 0 1px 0 0 ${COLORS.LIGHT_GREY}
                `,
            },
        },
    },

    'div:last-of-type': {
        '.aph-list__header, > .aph-list__item': {
            '&:last-of-type': {
                marginBottom: '-1px',
                borderBottomRightRadius: (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
                borderBottomLeftRadius : (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
            },
        },
    },

    ...props.styles,
}));

/* Component */
const ListGroup = forwardRef((props, ref) => {
    return (
        <AphListGroup
            {...props}
            ref={ref}
            className={`aph-list-group ${props.className || ''}`}>
            {props.children}
        </AphListGroup>
    );
});

/* Exporting */
export default ListGroup;
