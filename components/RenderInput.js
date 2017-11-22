import React from 'react';
import PropTypes from 'prop-types';
import { FormInput, FormLabel } from 'react-native-elements';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { textfieldStyles as styles } from '../styles';

const RenderInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  label,
  meta: { touched, error },
  input: { onChange, ...restInput }
}) =>
  <View style={styles.viewStyle}>
    <FormLabel labelStyle={styles.labelStyle}>{label}</FormLabel>
    <FormInput
      containerStyle={(touched && error) ?
        [styles.containerStyle, styles.errorStyle] : styles.containerStyle}
      inputStyle={styles.inputStyle}
      onChangeText={onChange}
      {...restInput}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid='transparent'
     />
    <View>{touched && (error &&
        <View style={styles.errorView}>
          <Icon name="exclamation-circle" size={14} color="red"/>
          <Text style={styles.errorText}>{ error}</Text>
        </View>
         )}
    </View>
  </View>;

RenderInput.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.oneOf(['email-address', 'phone-pad'])
};


export default RenderInput;
