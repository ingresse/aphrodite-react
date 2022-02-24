/* Core Packages */
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../../utils';

/* Constants */
import { SIZES } from '../../../constants';

/* Component Styles */
const RichTextEditorStyled = styled.div`
    .quill {
        .ql {
            &-container,
            &-toolbar {
                border: 0;
            }

            &-toolbar,
            &-editor {
                font-size  : ${SIZES.MD.FONT_SIZE};
                line-height: ${SIZES.MD.LINE_HEIGHT};
            }

            &-toolbar {
                padding    : 0;
                line-height: 0;
                box-shadow : inset 0 -1px 0 0 ${({ theme }) => colors.getOpacity(0.25, theme.helper)};

                .ql-formats {
                    display    : inline-block;
                    line-height: 0;

                    button {
                        display  : inline-block;
                        min-width: 40px;
                        height   : 40px;
                        padding  : 10px;

                        text-align : center;
                        font-family: monospace;
                        font-size  : 20px;
                        line-height: 20px;

                        border : 0;
                        outline: 0;

                        color           : inherit;
                        background-color: transparent;

                        .ql {
                            &-stroke {
                                stroke: ${(props) => colors.getFromTheme(props, 'base')};
                            }

                            &-fill {
                                fill: ${(props) => colors.getFromTheme(props, 'base')};
                            }
                        }

                        &:focus,
                        &:hover {
                            .ql {
                                &-stroke {
                                    stroke: ${(props) => colors.getFromTheme(props, 'link')};
                                }

                                &-fill {
                                    fill: ${(props) => colors.getFromTheme(props, 'link')};
                                }
                            }
                        }
                    }
                }
            }

            &-container {
                .ql {
                    &-editor {
                        padding   : 15px 10px;
                        min-height: ${(props) => props.minHeight}px;

                        &:active,
                        &:focus,
                        &:hover {
                            border : 0;
                            outline: 0;
                        }

                        &:before {
                            font-weight: 300;
                            font-style : normal;

                            color: ${(props) => colors.getFromTheme(props, 'mercury', 'light')};
                        }

                        p {
                            margin: 10px 0;

                            &:first-of-type {
                                margin-top: 0;
                            }

                            &:last-of-type {
                                margin-bottom: 0;
                            }
                        }
                    }

                    &-clipboard {
                        display: none;
                    }
                }
            }
        }
    }
`;

/* Exporting */
export default RichTextEditorStyled;
