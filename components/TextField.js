import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { textfieldStyles as styles } from '../styles';

export const TextField = ({
  placeholder,
  value,
  secureTextEntry,
  keyboardType
}) => (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      underlineColorAndroid="transparent"
     />
);


TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.enum
};
