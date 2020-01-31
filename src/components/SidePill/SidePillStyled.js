/* Core Packages */
import styled from '@emotion/styled';

/* Aphrodite Helpers */
import { colors } from '../../utils';

/* Component Styles */
const SidePillStyled = styled.aside`
    box-sizing     : border-box;
    display        : flex;
    align-items    : center;
    justify-content: ${props => props.center ? 'center' : props.right ? 'flex-end' : 'flex-start'};
    min-width      : 70px;
    min-height     : 60px;
    padding        : ${props => props.right ? '0 15px 0 25px' : '0 20px'};

    position : absolute;
    top      : 10px;
    left     : ${props => (props.center ? '50%' : props.right ? null : '-15%')};
    right    : ${props => (props.right && !props.center ? '-15%' : null)};

    flex-direction: ${props => (props.right ? 'row-reverse' : null)};

    font-weight: 500;
    font-size  : 20px;
    line-height: 30px;

    color           : ${props => colors.getFromTheme(props, 'base')};
    background-color: ${props => colors.getFromTheme(props, 'background')};
    box-shadow      : 0 0 5px 0 ${props => colors.getFromTheme(props, 'black', 'original', 0.25)};

    border-radius: ${props => props.center ? '30px' : props.right ? '30px 0 0 30px' : '0 30px 30px 0'};

    transition: all 0.15s linear 0s;

    img {
        margin-left : ${props => props.right ? 0 : '20px'};
        margin-right: ${props => props.right ? '20px' : 0};
    }

    .aph-sidepill {
        &__content,
        &__hoverable {
            display    : flex;
            align-items: center;

            padding: 0;
            margin : 0;
        }
    }

    &:hover {
        left : ${props => (props.right  ? null : '0')};
        right: ${props => (!props.right ? null : '0')};
    }
`;

/* Exporting */
export default SidePillStyled;
