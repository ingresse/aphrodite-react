/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/* Constants */
import { COLORS, MEDIA_QUERIES, SCREEN_SIZES } from '../../constants';

/**
 * Customized from 'react-tooltip' project:
 *
 * https://github.com/wwayne/react-tooltip
 * https://react-tooltip.netlify.com/
 */

/* Component Wrapper */
const TooltipWrapper = styled('span')(props => ({
    display      : 'inline-block',
    verticalAlign: 'middle',
    lineHeight   : 0,

    '.aph-tooltip': {
        opacity: 1,
        padding: '8px 12px',

        fontSize  : '12px',
        lineHeight: '16px',
        textAlign : (props.place === 'right' ? 'left' : (props.place === 'left' ? 'right' : 'center')),

        maxWidth    : '230px',
        borderRadius: '4px',

        '&.type-error': {
            backgroundColor: COLORS.ERROR,

            '&:after': {
                borderTopColor: COLORS.ERROR,
            },

            '&.place-right:after': {
                borderRightColor:  COLORS.ERROR,
            },

            '&.place-bottom:after': {
                borderBottomColor:  COLORS.ERROR,
            },

            '&.place-left:after': {
                borderLeftColor:  COLORS.ERROR,
            },
        },

        '&.type-warning': {
            color          : COLORS.BLACK,
            backgroundColor: COLORS.WARNING,

            '&:after': {
                borderTopColor: COLORS.WARNING,
            },

            '&.place-right:after': {
                borderRightColor:  COLORS.WARNING,
            },

            '&.place-bottom:after': {
                borderBottomColor:  COLORS.WARNING,
            },

            '&.place-left:after': {
                borderLeftColor:  COLORS.WARNING,
            },
        },

        '&.type-success': {
            backgroundColor: COLORS.SUCCESS,

            '&:after': {
                borderTopColor: COLORS.SUCCESS,
            },

            '&.place-right:after': {
                borderRightColor:  COLORS.SUCCESS,
            },

            '&.place-bottom:after': {
                borderBottomColor:  COLORS.SUCCESS,
            },

            '&.place-left:after': {
                borderLeftColor:  COLORS.SUCCESS,
            },
        },

        '&.type-info': {
            backgroundColor: COLORS.INFO,

            '&:after': {
                borderTopColor: COLORS.INFO,
            },

            '&.place-right:after': {
                borderRightColor:  COLORS.INFO,
            },

            '&.place-bottom:after': {
                borderBottomColor:  COLORS.INFO,
            },

            '&.place-left:after': {
                borderLeftColor:  COLORS.INFO,
            },
        },

        '&.place-right, &.place-bottom, &.place-left': {
            '&:after': {
                borderTopColor: 'transparent',
            },
        },

        '&.type-light': {
            color          : COLORS.DARK_GREY,
            backgroundColor: COLORS.WHITE,
            boxShadow      : '0 0 4px 0 rgba(0, 0, 0, 0.2)',

            '&:after': {
                width : '12px',
                height: '12px',
                border: '0 !important',
                bottom: '-10px',

                backgroundRepeat: 'no-repeat',
                backgroundSize  : '100%',
                backgroundImage : 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAAA/UlEQVQoFa2S62qEMBCFT7IxCor4/o/Y/SMiuLk3Z7KWIrS03Q4kJJMz31xUlWp40fSL8RL+P5CUErj+aow197c7YoqYpgnLsvyKta4r9n2HHscRXM55bNv2Ywi1jGGscs6VnDJ88NXp0Pc95nn+FtYATWs7C1V7KiUXacn7BrLWfgkigDomo87cDBT/k2rIOSPGiOADHu4hgmtFJ2DoB3S2gzEGWmvIJ1ZKyYVOPlJEGId2Gs/0XQGMNafoM4g+3kOd03EcIomhAoYBpjMfFVAjWulFjm1ja+eMOHC2SZOyb7rNQCtJ0iJqwiuEDwJ6wnimMat6Bp8VyEPd3gFtaZ6FSCYKnwAAAABJRU5ErkJggg==")',
            },

            '&.place-right:after, &.place-left:after': {
                width    : '8px',
                marginTop: '-5.5px',
            },

            '&.place-right:after': {
                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE3PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpEr0D8AAAENSURBVCgVhZLrjoQgDIXLRcDEGP/Mvv8zGs0ICG7bWcgw2RESI4F+Lee04sIFHyvnDOd5gj887PsOj58HKKVqlKy7vw3luPIFOSGYTv4+YxqIAK6CwSEGCCHCNE1NFUqgS5YK4LNCCOC9h3F0MM9zCal/rvQORMxOgLX2X4BIWTSQcAIOf4Ax5itQIRYc0S2s0AMI0sWpiMKtsyycLu6WLnqscyh8vIutd43l9bSzkUIIkFJi9w/Ytq0T/rqWQiKkJAyD4bFZ17ULciWtNOhBc2+osT2QIaqmtYbBDOCs44m4A9mIoquANA3Us29gnb13kERRK57Pgwd4WZZGZ2N5BVGjQWMMPpccTSk10C9l/KMdM5jKRwAAAABJRU5ErkJggg==")',
            },

            '&.place-bottom:after': {
                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABCUlEQVQoFa2S7a6DIAyGCzKZifH+r9IfRgcCwvrWsLElJ9tJ1oRQ6ctDP1SFjRrDp6x87ggppUhpXth5vZtpD+rldCTKR6acs4S11qQ7TaZjuT6h7T0+Og0AXIopUgyRvHfn65wBfJwhBg20rUkmFZBSEvG+72SvloZhEO1xHAzyZIuVb2MMIbtamnkH+N1T3/c0juPjMfjIALFqLUilmAp6EEIgZADANE1V+7IvyyI6a63o0CNpuLu5EuIJQPAvQKUBJOUCdOml4Wqe5xK4acNw/QhoQc6h7ItMzGzbJvV/yqACsEOLHq3rKhDFEyld17War31MDaZ4Oq9D/xrxFD5+tufR/72fQO4qbauIX3q2XAAAAABJRU5ErkJggg==")',
            },

            '&.place-left:after': {
                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABD0lEQVQoFY2T0a6EIAxEBwTBaPz/P/TVGBMFUS9Dlg0ad/f2BTFzaGkHccbAK/Z9xzAMaNsWjW2gtYasJIQQWZJWVe6qqkLXdXDOg99CCiihIOUVFGWmfMA0TRF0sNairmsodQVlFpZr3/cwxiRw8xtCCDiOA/kmjxAPIMgsq1uRwfM4E/gRKkGWGraAsIffUAaNNdg2j2OPJcZsj42g+B7LsiSAJX8t7w7m/b+geZ7h1vU9r59QmtnqojtiWXRHHPhXiID3Ps1MaQVVqWSpj1AGrLHQtU6uYBb68BHKNqIrMlD672JYdmccx2TYpnn2HTWXTHwa7FQdy6njxXmHMgMBxgXiDwqT+NWp+1ui5g/scn4798MbBAAAAABJRU5ErkJggg==")',
            },
        },

        '&__content': {
            display      : 'inline-block',
            verticalAlign: 'middle',
            minHeight    : ((props.style && props.style.height) ? props.style.height : null),
        },
    },

    [MEDIA_QUERIES.XS]: {
        '.aph-tooltip': {
            fontSize  : '14px',
            lineHeight: '20px',
        },
    },
}));

/* Component it self */
const Tooltip = forwardRef((props, ref) => {
    let customProps = Object.assign({}, props);
    customProps.id  = customProps.id || `AphTooltip${Math.random()}`;

    delete customProps.children;
    delete customProps.tip;

    return (
        <TooltipWrapper
            {...customProps}
            ref={ref}>
            <span data-tip={props.tip}
                  data-for={customProps.id}
                  className="aph-tooltip__content">
                {props.children}
            </span>
            <ReactTooltip
                {...customProps}
                delayHide={customProps.delayHide || (window.innerWidth > SCREEN_SIZES.SM ? 500 : 0)}
                className={`aph-tooltip ${props.className || ''}`}
            />
        </TooltipWrapper>
    );
});

/* Component default properties */
Tooltip.defaultProps = {
    border: false,
    effect: 'solid',
    place : 'top',
    type  : 'light',
};

/* Component properties types */
Tooltip.propTypes = {
    children : propTypes.any.isRequired,
    tip      : propTypes.any.isRequired,
    delayHide: propTypes.number,
    effect   : propTypes.string,
    place    : propTypes.string,
    type     : propTypes.string,
};

/* Exporting */
export default Tooltip;
