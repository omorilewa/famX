/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Facebook } from 'expo';
import { reduxForm, Field } from 'redux-form';
import RenderInput from './RenderInput';
import { signupStyles as styles } from '../styles';
import { validate } from '../utils';


class SignupPage extends Component {
  static navigationOptions = {
    title: 'Signup',
  };

  static propTypes = {
    signup: PropTypes.func,
    input: PropTypes.object,
    handleSubmit: PropTypes.func,
    authenticateUserMutation: PropTypes.func,
    signupUserMutation: PropTypes.func,
    navigation: PropTypes.object
  }

  handlePress = async (values) => {
    const {
      firstName, lastName, email, password, passwordConfirm, phoneNum
    } = values;
    console.log(email, password);
    try {
      const response = await this.props.signupUserMutation({
        variables: {
          firstName, lastName, email, password, passwordConfirm, phoneNum
        }
      });
      const { navigate } = this.props.navigation;
      const tokenToString = response.data.signupUser.token.toString();
      this.storeAuthTokensLocally(tokenToString);
      // Did not destructure because the variable name firstName exists
      navigate('CreateFamilyPage', { name: response.data.signupUser.firstName });
    } catch (e) {
      console.error('An error occurred: ', e);
    }
  }
  handleFacebookLogin = async () => {
    try {
      const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
        '641679006221114',
        { permissions: ['public_profile', 'email', 'user_friends'], behavior: 'native' }
      );
      switch (type) {
        case 'success': {
          try {
            await this.props.authenticateUserMutation({
              variables: {
                facebookToken: token,
              },
            }).then(({ data }) => {
              console.log(data);
              const { navigate } = this.props.navigation;
              const tokenToString = data.authenticateFacebookUser.token.toString();
              navigate('CreateFamilyPage');
              this.storeAuthTokensLocally(
                tokenToString,
                token.toString(),
                expires.toString()
              );
            });
          } catch (e) {
            console.log('the error is ', e);
          }

          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      console.log('the error is', e);
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  storeAuthTokensLocally = async (graphcoolToken, socialLoginToken, socialLoginValidity) => {
    await AsyncStorage.setItem('graphcoolToken', graphcoolToken);
    await AsyncStorage.setItem('socialLoginToken', socialLoginToken);
    await AsyncStorage.setItem('socialLoginValidity', socialLoginValidity);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>Sign up with </Text>
        <View style={styles.socialMediaSectionStyles}>
           <TouchableHighlight
           onPress={this.handleFacebookLogin}>
           <Text style={styles.linkStyle}> Facebook </Text>
           </TouchableHighlight>
           <Text>or</Text>
          <Text style={styles.linkStyle}> Google</Text>
        </View>
        <Text style={styles.divider}>
               ____________________  or  _____________________
        </Text>
          <Icon
            name="user-plus"
            size={40}
            style={styles.iconStyle}
            color="#b24f60"
          />
          <Field
            name="firstName"
            component={RenderInput}
            label="First Name"
          />
          <Field
            name="lastName"
            component={RenderInput}
            label="Last Name"
          />
          <Field
            name="email"
            component={RenderInput}
            label="E-mail"
          />
          <Field
            name="password"
            component={RenderInput}
            label="Password"
          />
          <Field
            name="passwordConfirm"
            component={RenderInput}
            label="Confirm Password"
          />
          <Field
            name="phoneNum"
            component={RenderInput}
            label="Phone Number"
          />
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={handleSubmit(this.handlePress)}
          >
            <Text style={{ color: '#fff' }}>
              SUBMIT DETAILS
            </Text>
            </TouchableHighlight>
          </View>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation SignupUser(
    $firstName: String!,
    $lastName : String!,
    $email: String!,
    $password: String!,
    $passwordConfirm: String!,
    $phoneNum: String!
  ){
    signupUser(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      password: $password,
      passwordConfirm: $passwordConfirm,
      phoneNum: $phoneNum) {
        token
        firstName
    }
  }
`;

const AUTH_FB_USER = gql`
mutation AuthenticateUserMutation($facebookToken: String!) {
  authenticateFacebookUser(facebookToken: $facebookToken) {
    token
  }
}`;

const LOGGED_IN_USER = gql`
query LoggedInUser {
  loggedInUser {
    id
  }
}`;

const SignupForm = reduxForm({
  form: 'signup',
  validate,
})(SignupPage);

const SignupWithMutation = compose(
  graphql(SIGNUP_MUTATION, { name: 'signupUserMutation' }),
  graphql(AUTH_FB_USER, { name: 'authenticateUserMutation' }),
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only' } })
)(SignupForm);

export default SignupWithMutation;
