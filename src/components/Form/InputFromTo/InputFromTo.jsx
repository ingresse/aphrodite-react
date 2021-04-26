import React from 'react';
import Col from '../../Grid/Column';
import Styled from '../../Styled/Styled';
import Row from '../../Grid/Row';
import DatePicker from '../DatePicker/DatePicker';
import InputFromToIconBetween from './InputFromToIconBetween';

export default function InputFromTo({
  disabled = false,
  from = {},
  to = {},
  ...sharedProps
}) {
  return (
    <Styled styles={{ position: 'relative' }}>
      <Row vertical="start">
        <Col xs={6}>
          <DatePicker
            disabled={disabled}
            {...sharedProps}
            {...from}
          />
        </Col>
        <Col xs={6}>
          <DatePicker
            disabled={disabled}
            {...sharedProps}
            {...to}
          />
        </Col>
      </Row>
      <InputFromToIconBetween
        className="icon-between-dates"
        color="helper"
        slug="transfer"
        size={20}
        disabled={disabled}
      />
    </Styled>
  );
}
