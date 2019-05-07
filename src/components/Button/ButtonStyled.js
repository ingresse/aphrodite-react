/* Core Packages */
import styled from '@emotion/styled';

/* UI Library definitions */
import { colors } from '../../utils';

/* Component Itself */
const AphButtonStyled = styled.button`
    box-sizing: border-box;
    cursor    : pointer;
    display   : ${props => props.block ? '' : 'inline-'}block;

    width    : ${props => props.block ? '100%' : 'auto'};
    min-width: 140px;
    padding  : ${props => ((props.sm || props.small) ? '5px 15px' : '10px 20px')};
    margin   : ${props => props.margin};

    text-align    : center;
    text-transform: uppercase;

    font-size  : 16px;
    line-height: 20px;

    border-radius: ${props => ((props.radius || 0) + ((props.radius + '').includes('px') ? '' : 'px'))};

    border : 0;
    outline: 0;

    color: ${props => colors.get(props.color === 'white' ? 'secondary' : 'white')};
    background-color: ${props =>
        colors.get((props.color || 'secondary'))
    };

    transition-timing-function: ease;
    transition-duration       : 0.25s;
    transition-property       : background-color, color, width;

    &:hover {
        background-color: ${props =>
            colors.get((props.color || 'secondary'), 'light')
        };
    }

    &:active,
    &:focus {
        background-color: ${props =>
            colors.get((props.color || 'secondary'), 'dark')
        };
    }

    &:disabled {
        cursor: not-allowed;

        color: ${colors.get('mercury', 'light')};
        background-color: ${colors.get('mercury', 'crystal')};
    }
`;

/* Exporting */
export default AphButtonStyled;
