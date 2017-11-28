import React from 'react';
import { Button, Icon } from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { createFamilyStyles as styles } from '../styles';

const BlockButton = (props) => {
  const { buttonText, iconName } = props;

  let blockButtonStyle;
  if (props.smallButton) {
    blockButtonStyle = styles.smallButtonStyle;
  } else {
    blockButtonStyle = styles.buttonStyle;
  }

  return (
    <Button
      block
      style={blockButtonStyle}
    >
      <Icon
        name={iconName}
        style={styles.buttonIconStyle}
      />
      <Text>{buttonText}</Text>
    </Button>
  );
};

BlockButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  smallButton: PropTypes.bool,
};

export default BlockButton;
