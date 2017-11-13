import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import TextField from './TextField';
import { signupStyles as styles } from '../styles';
import SignUpImage from '../assets/sign.png';

class SignupPage extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  static propTypes = {
    signUp: PropTypes.func
  }
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phoneNum: ''
    };
  }

  submit = () => {
    this.props.signUp(this.state).then((response) => {
      console.log(response.data);
    });
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
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <TextField
          placeholder='Lastname'
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
        />
        <TextField
          placeholder='E-mail'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardType='email-address'
        />
        <TextField
          placeholder='Password'
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TextField
          placeholder='Confirm Password'
          secureTextEntry
          value={this.state.passwordConfirm}
          onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
        />
        <TextField
          placeholder='+234 802 9040 852'
          value={this.state.phoneNum}
          onChangeText={phoneNum => this.setState({ phoneNum })}
          keyboardType='phone-pad'
        />
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={this.submit}
        >
          <Text style={{ color: '#fff' }}>
            SUBMIT DETAILS
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const SignUpMutation = gql`
  mutation createUser(
    $firstName: String!,
    $lastName : String!,
    $email: String!,
    $password: String!,
    $passwordConfirm: String!,
    $phoneNum: String!
  ){
    createUser(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      password: $password,
      passwordConfirm: $passwordConfirm,
      phoneNum: $phoneNum) {
        firstName
        email
    }
  }
`;

const SignUpWithData = graphql(SignUpMutation, {
  props: ({ mutate }) => ({
    signUp: ({
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      phoneNum
    }) => mutate({
      variables: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        phoneNum
      }
    }),
  }),
})(SignupPage);

export default SignUpWithData;
