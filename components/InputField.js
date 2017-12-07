import React from 'react';
import { FormInput } from 'react-native-elements';
import PropTypes from 'prop-types';
import { createFamilyStyles as styles } from '../styles';

const InputField = (props) => {
  const {
    placeholder,
    input: { onChange, ...restInput }
  } = props;
  return (
    <FormInput
      containerStyle={styles.inputStyleFam}
      placeholder={placeholder}
      {...restInput}
      onChangeText={onChange}
    />
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object
};


export default InputField;
