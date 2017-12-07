import React from 'react';
import { Button } from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { createFamilyStyles as styles } from '../styles';

const BlockButton = (props) => {
  const { buttonText, onPress } = props;
  return (
    <Button
      block
      style={styles.buttonStyle}
      onPress={onPress}
    >
      <Text>{buttonText}</Text>
    </Button>
  );
};

BlockButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default BlockButton;
