import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'react-native-elements';
import { View, Text } from 'react-native';
import { textfieldStyles as styles } from '../styles';

const RenderInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  meta: { touched, error },
  input: { onChange, ...restInput }
}) =>
  <View>
    <FormInput
      containerStyle={styles.inputStyle}
      onChangeText={onChange}
      {...restInput}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry} />
    <Text>{touched && (error && <Text>{ error}</Text>)}</Text>
  </View>;

RenderInput.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.oneOf(['email-address', 'phone-pad'])
};


export default RenderInput;
