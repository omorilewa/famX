import React from 'react';
import { View, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { createFamilyStyles as styles } from '../styles';


const DropDown = (props) => {
  const { input: { onChange, value, ...inputProps }, children, ...pickerProps } = props;
  return (
    <View style={styles.viewStyle}>
      <Picker
        enabled
        style={styles.pickerStyle}
        selectedValue={value}
        onValueChange={inputValue => onChange(inputValue)}
        mode={'dropdown'}
        {...inputProps}
        {...pickerProps}
      >
        {children}

      </Picker>
    </View>
  );
};

DropDown.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.func,
  children: PropTypes.node,
  input: PropTypes.object
};

export default DropDown;

