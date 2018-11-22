/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'react-emotion';

/* Constants */
import { COLORS } from '../../constants';

/* Components / Icons */
import ArrowDownCircle from './IconArrowDownCircle';
import ArrowLeftCircle from './IconArrowLeftCircle';
import ArrowRightCircle from './IconArrowRightCircle';
import ArrowUpCircle from './IconArrowUpCircle';
import InfoCircle from './IconInfoCircle';
import QuestionCircle from './IconQuestionCircle';
import TimesCircle from './IconTimesCircle';

/* Mapper */
/* Should be mapped into 'icons.constants' too */
const ICONS = {
    'arrow-down-circle' : ArrowDownCircle,
    'arrow-left-circle' : ArrowLeftCircle,
    'arrow-right-circle': ArrowRightCircle,
    'arrow-up-circle'   : ArrowUpCircle,
    'info-circle'       : InfoCircle,
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
const Icon = (props) => {
    const ICON = ICONS[props.slug];

    if (!ICON) {
        return null;
    }

    return (
        <IconWrapper className="aph-icon-wrapper">
            <ICON
                {...props}
                color={props.color || COLORS.PRIMARY}
                className={`aph-icon ${props.className || ''}`}
            />
        </IconWrapper>
    );
};

/* Default Properties */
Icon.defaultProps = {
    slug : undefined,
    size : 20,
    color: COLORS.PRIMARY,
};

/* Properties Types */
Icon.propTypes = {
    slug : propTypes.string.isRequired,
    size : propTypes.number,
    color: propTypes.string,
};

/* Exporting */
export default Icon;
