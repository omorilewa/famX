
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
    authenticateUserMutation: PropTypes.func
  }

  handlePress = (values) => {
    this.props.signup(values).then((response) => {
      console.log(response.data);
    }).catch(err => console.log(err));
  }

  _handleFacebookLogin = async () => {
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
              this._storeAuthTokensLocally(data.authenticateFacebookUser.token, token, expires);
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

  _storeAuthTokensLocally = async (graphcoolToken, socialLoginToken, socialLoginValidity) => {
    await AsyncStorage.setItem('graphcoolToken', graphcoolToken);
    await AsyncStorage.setItem('socialLoginToken', socialLoginToken);
    await AsyncStorage.setItem('socialLoginValidity', socialLoginValidity);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <View >
           <Text>Sign up with </Text><TouchableHighlight
           onPress={this._handleFacebookLogin}>
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
            size={40} color="#b24f60"
          />
          <Field
            name="firstName"
            component={RenderInput}
            label="Firstname"
          />
          <Field
            name="lastName"
            component={RenderInput}
            label="Lastname"
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

const SignupWithData = graphql(SIGNUP_MUTATION, {
  props: ({ mutate }) => ({
    signup: ({
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

const SignupForm = reduxForm({
  form: 'signup',
  validate,
})(SignupWithData);

const SignupWithMutation = compose(
  graphql(AUTH_FB_USER, { name: 'authenticateUserMutation' }),
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only' } })
)(SignupForm);

export default SignupWithMutation;
