/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { colors } from '../../utils';

/* Component Styles */
const active = {
    color          : colors.get('secondary'),
    backgroundColor: colors.get('secondary', 'crystal'),
};

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 10px;

    background-color: transparent;

    transition :
        color 0.15s linear,
        background-color 0.15s linear
    ;
    will-change:
        color,
        background-color
    ;

    &.active {
        ${active};
    }

    ${props => (props.onClick) ? {
        cursor: 'pointer',
        color : colors.get('secondary'),
    } : null};

    ${props => (props.onClick || props.hoverable) ? {
        '&:hover': active
    } : null}

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
    styles   : propTypes.object,
};

/* Exporting */
export default ListItem;
