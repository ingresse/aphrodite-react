/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

/* Constants */
import { GRID, RADIUS } from '../../constants';

/* Utils */
import { colors } from '../../utils';

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
            inset 0 -1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent,
            inset 0 1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))}
        `)
        :
        (`
            inset 0 -1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
            inset 1px 0 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
            inset -1px 0 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
            inset 0 1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))}
        `)
    ),

    '.aph-list__header, .aph-list__item': {
        boxShadow   : `
            inset 0 -1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent,
            inset 0 0 0 0 transparent
        `,

        '+ .aph-list__header, + .aph-list__item': {
            boxShadow   : `
                inset 0 -1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
                inset 0 0 0 0 transparent,
                inset 0 0 0 0 transparent,
                inset 0 0 0 0 transparent
            `,
        }
    },

    '.aph-list__header': {
        backgroundColor: colors.getFromTheme(props, 'helper'),
    },

    '.aph-list__item': {
        backgroundColor: colors.getFromTheme(props, 'background'),
    },

    'div:first-of-type': {
        '.aph-list__header, > .aph-list__item': {
            '&:first-of-type': {
                marginTop: '-1px',
                borderTopRightRadius: (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
                borderTopLeftRadius : (((!isNaN(props.radius) ? props.radius : RADIUS) - 2) + GRID.UNIT),
                boxShadow: `
                    inset 0 -1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))},
                    inset 0 0 0 0 transparent,
                    inset 0 0 0 0 transparent,
                    inset 0 1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))}
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
