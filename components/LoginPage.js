/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import RenderInput from './RenderInput';
import { signupStyles as styles } from '../styles';
import { validate } from '../utils';

class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  static propTypes = {
    login: PropTypes.func,
    input: PropTypes.object,
    handleSubmit: PropTypes.func,
    authenticateUserMutation: PropTypes.func,
    navigation: PropTypes.object
  }

  loginUser = async (values) => {
    const { email, password } = values;
    try {
      const response = await
        this.props.authenticateUserMutation({ variables: { email, password } });
      const { navigate } = this.props.navigation;
      const tokenToString = response.data.authenticateUser.token.toString();
      this.storeAuthTokensLocally(tokenToString);
      navigate('CreateFamilyPage');
    } catch (e) {
      console.error('An error occurred: ', e);
    }
  }

  storeAuthTokensLocally = async (graphcoolToken) => {
    await AsyncStorage.setItem('graphcoolToken', graphcoolToken);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="user-plus"
          size={40} color="#b24f60"
        />
        <Field
          name="email"
          component={RenderInput}
          label="Email"
        />
        <Field
          name="password"
          component={RenderInput}
          label="Password"
        />
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={handleSubmit(this.loginUser)}
        >
          <Text style={{ color: '#fff' }}>
            LOGIN
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}
const AUTHENTICATE_EMAIL_USER = gql`
mutation AuthenticateUser($email: String!, $password: String!) {
  authenticateUser(email: $email, password: $password) {
    token
  }
}
`;

const LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginPage);

const LoginWithMutation = compose(graphql(AUTHENTICATE_EMAIL_USER, { name: 'authenticateUserMutation' }))(LoginForm);

export default LoginWithMutation;

