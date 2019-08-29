/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { colors } from '../../utils';

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 10px;

    background-color: transparent;
    box-shadow      : ${props => (!props.borderBottom ? null : `inset 0 1px 0 0 ${colors.getFromTheme(props, 'helper', 'original', 0.25)}`)};

    transition :
        color 0.15s linear,
        background-color 0.15s linear
    ;
    will-change:
        color,
        background-color
    ;

    &.active {
        color           : ${props => colors.getFromTheme(props, 'secondary')};
        background-color: ${props => colors.getFromTheme(props, 'secondary', 'crystal')};
    }

    ${props => (props.onClick) ? {
        cursor: 'pointer',
        color : colors.getFromTheme(props, 'secondary'),

        '&:hover': {
            color          : colors.getFromTheme(props, 'secondary'),
            backgroundColor: colors.getFromTheme(props, 'secondary', 'crystal'),
        }
    } : null};

    ${props => (props.hoverable) ? {
        '&:hover': {
            backgroundColor: colors.getFromTheme(props, 'helper', 'original', 0.25),
        }
    } : null};

    ${props => props.styles};
`;

/* Component Itself */
const ListItem = forwardRef((props, ref) => {
    const {
        className,
        component,
        hoverable,
    } = props;

    const AphListItem = (component ? AphListItemStyled.withComponent(component) : AphListItemStyled);

    return (
        <AphListItem
            role="option"
            {...props}
            ref={ref}
            className={`aph-list__item ${className || ''}`}
        />
    );
});

/* Default Properties */
ListItem.defaultProps = {
    hoverable: false,
    styles   : {},
};

/* Properties Types */
ListItem.propTypes = {
    hoverable: propTypes.bool,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default ListItem;
