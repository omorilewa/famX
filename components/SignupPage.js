import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import TextField from './TextField';
import { signupStyles as styles } from '../styles';
import SignUpImage from '../assets/sign.png';

export default class SignupPage extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  constructor() {
    super();
    this.state = {
      FirstName: '',
      Lastname: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      PhoneNo: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={SignUpImage}
          style={styles.imageStyle}
        />
        <TextField
          placeholder='Firstname'
          value={this.state.FullName}
          onChangeText={FirstName => this.setState({ FirstName })}
        />
        <TextField
          placeholder='Lastname'
          value={this.state.FullName}
          onChangeText={LastName => this.setState({ LastName })}
        />
        <TextField
          placeholder='E-mail'
          value={this.state.Email}
          onChangeText={Email => this.setState({ Email })}
          keyboardType='email-address'
        />
        <TextField
          placeholder='Password'
          secureTextEntry
          value={this.state.Password}
          onChangeText={Password => this.setState({ Password })}
        />
        <TextField
          placeholder='Confirm Password'
          secureTextEntry
          value={this.state.ConfirmPassword}
          onChangeText={ConfirmPassword => this.setState({ ConfirmPassword })}
        />
        <TextField
          placeholder='+234 802 9040 852'
          value={this.state.PhoneNo}
          onChangeText={PhoneNo => this.setState({ PhoneNo })}
          keyboardType='phone-pad'
        />
        <TouchableHighlight
          style={styles.buttonStyle}
        >
          <Text style={{ color: '#fff' }}>
            SUBMIT DETAILS
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

