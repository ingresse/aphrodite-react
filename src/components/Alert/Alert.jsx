import React, { Fragment, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Styled from '../Styled/Styled';

export default function Alert({
  children,
  color = 'secondary',
  margin = '10px 0',
  opened = true,
  openedCallback = () => {},
  closeable = true,
  closeBottom = false,
  textSmall,
  styles,
  ...props
}) {
  const [visible, setVisible] = useState(opened);
  const closeDistance = '10px';
  const isColorComplete = !!(color && color.includes(','));

  function close() {
    setVisible(false);
    openedCallback(false);
  }

  useEffect(() => {
    setVisible(opened);
  }, [opened]);

  return (
    <Styled
      backgroundColor={isColorComplete ? color : `${color},crystal,0.25`}
      textColor={isColorComplete ? color : `${color},dark`}
      radius={5}
      styles={{
        position: 'relative',
        transition: 'all 0.2s ease',
        margin: `${!visible ? '0' : margin}`,
        paddingTop: (!visible ? '0' : null),
        paddingBottom: (!visible ? '0' : null),
        paddingRight: (!closeable ? null : '40px'),
        lineHeight: (!visible ? '0' : '20px'),
        fontSize: (textSmall ? '14px' : null),
        ...styles,
      }}
      {...props}
    >
      {visible && (
        <Fragment>
          {children}
          {closeable && (
            <ButtonIcon
              title="Fechar"
              onClick={close}
              size={30}
              icon={{
                slug: 'times',
                color,
              }}
              styles={{
                position: 'absolute',
                top: closeBottom ? null : closeDistance,
                right: closeDistance,
                bottom: closeBottom ? closeDistance : null,
              }}
            />
          )}
        </Fragment>
      )}
    </Styled>
  );
}

Alert.defaultProps = {
  color         : 'secondary',
  margin        : '10px 0',
  padding       : '15px',
  opened        : true,
  openedCallback: () => {},
  closeable     : true,
  closeBottom   : false,
  textSmall     : false,
  styles        : {},
};

Alert.propTypes = {
  color         : propTypes.string,
  margin        : propTypes.string,
  opened        : propTypes.bool,
  openedCallback: propTypes.func,
  closeable     : propTypes.bool,
  closeBottom   : propTypes.bool,
  textSmall     : propTypes.bool,
  styles        : propTypes.object,
};
