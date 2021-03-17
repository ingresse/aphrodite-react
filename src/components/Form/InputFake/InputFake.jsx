import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '../../../utils';
import Button from '../../Button/Button';
import Col from '../../Grid/Column';
import Icon from '../../Icons/Icon';
import Row from '../../Grid/Row';
import Styled from '../../Styled/Styled';

const InputFakeWrapper = styled(Styled)`
  &:hover {
    .aph-label {
      color: ${(props) => colors.getFromTheme(props, 'secondary')};
    }
  }

  button {
    svg g {
      transition: stroke 0.2s ease;
    }

    &:active, &:focus, &:hover {
      background-color: rgba(0, 0, 0, .05);

      svg g {
        stroke: ${(props) => colors.getFromTheme(props, 'secondary')};
      }
    }
  }

  ${({ styles }) => styles};
`;

export default function InputFake({
  children,
  disabled,
  label,
  onRemove,
  onRemoveIcon,
  onRemoveIconColor,
  onRemoveIconSize,
  onRemoveTitle,
  onRemoveWidth,
  placeholder,
  value,
  ...props
}) {
  const valchil = value || children;
  const display = valchil || placeholder;
  const onRemoveColWidth = `${parseInt(onRemoveWidth, 10) + 5}px`;
  const mainColWidth = !onRemove ? '100%' : `calc(100% - ${onRemoveColWidth})`;

  return (!display && !label) ? null : (
    <InputFakeWrapper
      background={disabled ? 'disabled' : 'background'}
      padding="5px 10px"
      radius={5}
      shadow={false}
      {...props}
    >
      <Row vertical="center">
        <Col
          width={mainColWidth}
          styles={{
            textAlign: 'left',
          }}
        >
          {label && (
            <Styled
              className="aph-form-control-fake__label"
              margin={!display ? '' : '-2px 0 2px'}
              textColor="helper"
              textSize={!display ? 'md' : 'sm'}
              textTruncate
              textUpper
            >
              {label}
            </Styled>
          )}
          <Styled
            textTruncate
            textColor={!valchil ? 'helper,original,0.5' : ''}
            className={`aph-form-control-fake__${valchil ? 'content' : 'placeholder'}`}
          >
            {display}
          </Styled>
        </Col>
        {onRemove && (
          <Col
            width={onRemoveColWidth}
            styles={{
              textAlign: 'right',
              paddingLeft: '0',
              paddingRight: '5px',
            }}
          >
            <Button
              link
              small
              margin="0"
              title={onRemoveTitle}
              onClick={onRemove}
              styles={{
                minHeight: onRemoveWidth,
                minWidth: onRemoveWidth,
                height: onRemoveWidth,
                width: onRemoveWidth,
                padding: `${parseFloat(onRemoveWidth, 10) / 6}px`,
              }}
            >
              <Icon
                size={onRemoveIconSize, parseFloat(onRemoveWidth, 10) / 2}
                slug={onRemoveIcon}
                color={onRemoveIconColor}
                styles={{
                  g: {
                    strokeWidth: '3px !important',
                  },
                }}
              />
            </Button>
          </Col>
        )}
      </Row>
    </InputFakeWrapper>
  );
}

InputFake.defaultProps = {
  disabled: false,
  label: '',
  onRemove: undefined,
  onRemoveIcon: 'times',
  onRemoveIconColor: 'base',
  onRemoveIconSize: undefined,
  onRemoveTitle: 'Remover',
  onRemoveWidth: '40px',
  placeholder: '',
  value: '',
};

InputFake.propTypes = {
  disabled: propTypes.bool,
  label: propTypes.string,
  onRemove: propTypes.func,
  onRemoveIcon: propTypes.string,
  onRemoveIconColor: propTypes.string,
  onRemoveIconSize: propTypes.number,
  onRemoveTitle: propTypes.string,
  onRemoveWidth: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
};
