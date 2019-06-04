/* Packages */
import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';

/* Utils */
import { colors } from '../../utils';

/* Styled components */
import { DropdowContainer, DropdowHeader, DropdowContent } from './DropdownStyled';

/* Component Itself */
const Dropdown = forwardRef((props, ref) => {
    const {
        isVisible,
        animationDuration,
        header,
        itemColor,
        hover,
        items,
        selectValue,
    } = props;

    const dropDownContainerRef = useRef(null);

    const style = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'visibility ' + animationDuration + 'ms'
    }

    return (
        <DropdowContainer
            {...props}
            style={style}
            ref={dropDownContainerRef}
        >

            {header &&
                <DropdowHeader>{header}</DropdowHeader>
            }

            <DropdowContent color={itemColor} hover={hover}>
                {items.map((item, index) => (
                    <a key={index} value={item.value} href="#0" className="item" onClick={selectValue}>
                        {item.text}
                    </a>
                ))}
            </DropdowContent>
        </DropdowContainer>
    );
});

/* Default Properties */
Dropdown.defaultProps = {
    isVisible  : true,
    header     : 'Digite ou selecione uma opção',
    items      : [{ text: 'Agora', value: '10/10/2019 12:00' }],
    hover      :  colors.get('ocean', 'crystal'),
    itemColor  : colors.get('ocean', 'original'),
    selectValue: (evt) => console.log(evt.target.attributes[0].value),
    animationDuration: 0.15,
};

/* Properties Types */
Dropdown.propTypes = {
    isVisible  : PropTypes.bool,
    header     : PropTypes.string,
    items      : PropTypes.array,
    hover      : PropTypes.string,
    itemColor  : PropTypes.string,
    selectValue: PropTypes.func,
    animationDuration: PropTypes.number,
};


/* Exporting */
export default Dropdown;
