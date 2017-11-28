import React from 'react';
import { Button } from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { createFamilyStyles as styles } from '../styles';

const BlockButton = (props) => {
  const { buttonText } = props;
  return (
    <Button
      block
      style={styles.buttonStyle}
    >
      <Text>{buttonText}</Text>
    </Button>
  );
};

BlockButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default BlockButton;
