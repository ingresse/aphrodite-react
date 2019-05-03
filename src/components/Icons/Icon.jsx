/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

/* Components / Icons */
import ArrowDown from './IconArrowDown';
import ArrowDownCircle from './IconArrowDownCircle';
import ArrowLeftCircle from './IconArrowLeftCircle';
import ArrowRightCircle from './IconArrowRightCircle';
import ArrowUpCircle from './IconArrowUpCircle';
import Check from './IconCheck';
import CheckCircle from './IconCheckCircle';
import CheckThin from './IconCheckThin';
import InfoCircle from './IconInfoCircle';
import Loading from './IconLoading';
import Pencil from './IconPencil';
import QuestionCircle from './IconQuestionCircle';
import TimesCircle from './IconTimesCircle';

/* Mapper */
/* Should be mapped into 'icons.constants' too */
const ICONS = {
    'arrow-down'        : ArrowDown,
    'arrow-down-circle' : ArrowDownCircle,
    'arrow-left-circle' : ArrowLeftCircle,
    'arrow-right-circle': ArrowRightCircle,
    'arrow-up-circle'   : ArrowUpCircle,
    'check'             : Check,
    'check-circle'      : CheckCircle,
    'check-thin'        : CheckThin,
    'info-circle'       : InfoCircle,
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
}));

/* Component it self */
const Icon = forwardRef((props, ref) => {
    const ICON = ICONS[props.slug];

    if (!ICON) {
        return null;
    }

    return (
        <IconWrapper className="aph-icon-wrapper">
            <ICON
                {...props}
                ref={ref}
                color={colors.get(props.color || 'secondary')}
                className={`aph-icon ${props.className || ''}`}
            />
        </IconWrapper>
    );
});

/* Default Properties */
Icon.defaultProps = {
    slug  : undefined,
    size  : 20,
    color : '',
    width : undefined,
    Height: undefined,
};

/* Properties Types */
Icon.propTypes = {
    slug  : propTypes.string.isRequired,
    size  : propTypes.number,
    color : propTypes.string,
    width : propTypes.number,
    height: propTypes.number,
};

/* Exporting */
export default Icon;
