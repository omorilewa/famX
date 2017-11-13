import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { textfieldStyles as styles } from '../styles';

const TextField = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType
}) => (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
      keyboardType={keyboardType}
     />
);
TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.oneOf(['email-address', 'phone-pad'])
};

export default TextField;
