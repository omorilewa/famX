import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default TextField = ({
  placeholder,
  value,
  secureTextEntry,
  keyboardType }) => (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      underlineColorAndroid='transparent'
    >
    </TextInput>
)

const styles = StyleSheet.create({
  inputStyle: {
    height: '7%',
    borderColor: 'gray',
    borderWidth: 2,
    width: '95%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: '4%',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0
  }
});

