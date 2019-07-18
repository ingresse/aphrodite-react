/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { colors } from '../../utils';

/* Components / Icons */
import ArrowUp from './IconArrowUp';
import ArrowRight from './IconArrowRight';
import ArrowDown from './IconArrowDown';
import ArrowLeft from './IconArrowLeft';
import ArrowDownCircle from './IconArrowDownCircle';
import ArrowLeftCircle from './IconArrowLeftCircle';
import ArrowRightCircle from './IconArrowRightCircle';
import ArrowUpCircle from './IconArrowUpCircle';
import Check from './IconCheck';
import CheckCircle from './IconCheckCircle';
import CheckThin from './IconCheckThin';
import InfoCircle from './IconInfoCircle';
import LoaderDonut from './IconLoaderDonut';
import Loading from './IconLoading';
import Pencil from './IconPencil';
import QuestionCircle from './IconQuestionCircle';
import TimesCircle from './IconTimesCircle';

/* Mapper */
/* Should be mapped into 'icons.constants' too */
const ICONS = {
    'arrow-up'          : ArrowUp,
    'arrow-right'       : ArrowRight,
    'arrow-down'        : ArrowDown,
    'arrow-left'        : ArrowLeft,
    'arrow-down-circle' : ArrowDownCircle,
    'arrow-left-circle' : ArrowLeftCircle,
    'arrow-right-circle': ArrowRightCircle,
    'arrow-up-circle'   : ArrowUpCircle,
    'check'             : Check,
    'check-circle'      : CheckCircle,
    'check-thin'        : CheckThin,
    'info-circle'       : InfoCircle,
    'loader'            : LoaderDonut,
    'loading'           : Loading,
    'pencil'            : Pencil,
    'question-circle'   : QuestionCircle,
    'times-circle'      : TimesCircle,
};

/* Component Wrapper styles */
const IconWrapper = styled('span')(props => ({
    display      : 'inline-block',
    verticalAlign: 'middle',
    lineHeight   : 0,

    ...props.styles,
}));

/* Component it self */
const Icon = forwardRef((props, ref) => {
    const { direction, shape, slug } = props;
    const SLUG = (slug + (!direction ? '' : '-' + direction) + (!shape ? '' : '-' + shape));
    const ICON = ICONS[SLUG];

    if (!ICON) {
        return null;
    }

    const {
        color,
        className,
        styles,

        ...rest
    } = props;

    return (
        <IconWrapper
            styles={styles}
            className="aph-icon-wrapper">
            <ICON
                {...rest}
                ref={ref}
                color={colors.get(color)}
                className={`aph-icon ${className || ''}`}
            />
        </IconWrapper>
    );
});

/* Default Properties */
Icon.defaultProps = {
    slug     : '',
    direction: '',
    shape    : '',
    size     : 20,
    color    : 'secondary',
    width    : undefined,
    height   : undefined,
    styles   : {},
};

/* Properties Types */
Icon.propTypes = {
    slug     : propTypes.string.isRequired,
    direction: propTypes.string,
    shape    : propTypes.string,
    size     : propTypes.number,
    color    : propTypes.string,
    width    : propTypes.number,
    height   : propTypes.number,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Icon;
