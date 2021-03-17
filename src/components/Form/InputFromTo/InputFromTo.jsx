import React from 'react';
import Col from '../../Grid/Column';
import Icon from '../../Icons/Icon';
import Segment from '../../Segment/Segment';
import Row from '../../Grid/Row';
import DatePicker from '../DatePicker/DatePicker';

export default function InputFromTo({
  disabled = false,
  from = {},
  to = {},
  ...sharedProps
}) {
  return (
    <Segment
      padding="0"
      styles={{
        position: 'relative',

        '.icon-between-dates': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '2.5px',
          backgroundColor: (disabled ? '#dddfe0' : '#f8f8f8'),
        },
      }}
    >
      <Row>
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
      <Icon
        className="icon-between-dates"
        color="helper"
        size={25}
        slug="transfer"
      />
    </Segment>
  );
}
