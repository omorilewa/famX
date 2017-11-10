import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import TextField from './TextField';

export default class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: '',
      Lastname: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      PhoneNo: ''
    }
  }

  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/sign.png')}
          style={styles.imageStyle}
        />
        <TextField
          placeholder='Firstname'
          value={this.state.FullName}
          onChangeText={(Firstname) => this.setState({Firstname}) }
        >
        </TextField>
        <TextField
          placeholder='Lastname'
          value={this.state.FullName}
          onChangeText={(Lastname) => this.setState({Lastname}) }
        >
        </TextField>
        <TextField
          placeholder='E-mail'
          value={this.state.Email}
          onChangeText={(Email) => this.setState({ Email })}
          keyboardType='email-address'
        >
        </TextField>
        <TextField
          placeholder='Password'
          secureTextEntry={true}
          value={this.state.Password}
          onChangeText={(Password) => this.setState({Password}) }
        >
        </TextField>
        <TextField
          placeholder='Confirm Password'
          secureTextEntry={true}
          value={this.state.ConfirmPassword}
          onChangeText={(ConfirmPassword) => this.setState({ConfirmPassword}) }
        >
        </TextField>
        <TextField
          placeholder='+234 802 9040 852'
          value={this.state.PhoneNo}
          onChangeText={(PhoneNo) => this.setState({ PhoneNo })}
          keyboardType='phone-pad'
        >
        </TextField>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => console.log('voila!')}
        >
          <Text style={{ color: '#fff' }}>
            SUBMIT DETAILS
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#B7C4AA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    height: '15%',
    width: '24%',
    marginTop: '2%',
    marginBottom: '5%'
  },
  buttonStyle: {
    height: '7%',
    backgroundColor: '#4b5320',
    marginTop: '9%',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 250
  }
});
