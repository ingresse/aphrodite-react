/* Packages */
import styled from '@emotion/styled';

/* UI Library Helpers */
import { colors } from '../../utils';

/* Pagination Styles */
const AphPaginationStyled = styled.section`
    box-sizing: border-box;
    position  : relative;
    display   : block;
    width     : auto;
    margin    : 40px auto;
    padding   : 10px 60px;
    max-width : 460px;
    min-height: 50px;

    list-style-type: none;

    text-align : center;
    user-select: none;

    border-radius   : 5px;
    background-color: ${props => colors.getFromTheme(props, 'smoke')};

    * {
        box-sizing : border-box;
        user-select: none;
    }

    .rc-pagination {
        &-prev,
        &-next,
        &-jump-next,
        &-jump-prev,
        &-item {
            display       : inline-block;
            vertical-align: middle;

            text-align: center;

            min-width: 30px;

            font-weight: bold;
            font-size  : 16px;
            line-height: 20px;

            border-radius: 5px;

            transition: background-color 0.25s linear;

            outline: 0;
            border : 0;

            &:not(.rc-pagination-item-active) {
                cursor: pointer;
            }
        }

        &-prev,
        &-next {
            position: absolute;
            padding : 2px 2.5px 2.5px;

            color           : ${props => colors.getFromTheme(props, 'inverse')};
            background-color: ${props => colors.getFromTheme(props, 'secondary')};
        }

        &-prev {
            left: 15px;
        }

        &-next {
            right: 15px;
            padding-left: 1.5px;
        }

        &-disabled {
            background-color: ${props => colors.getFromTheme(props, 'disabled')};
        }

        &-item,
        &-jump-prev,
        &-jump-next {
            padding: 5px;
            margin : 0 5px;

            color           : ${props => colors.getFromTheme(props, 'secondary')};
            background-color: transparent;

            &-active {
                color: ${props => colors.getFromTheme(props, 'black')};
            }

            &:active,
            &:hover {
                outline: 0;
                border : 0;

                &:not(.rc-pagination-item-active) {
                    background-color: ${props => colors.getFromTheme(props, 'mercury', 'crystal', 0.5)};
                }
            }
        }
    }

    ${props => props.styles};
`;

/* Exporting */
export default AphPaginationStyled;
