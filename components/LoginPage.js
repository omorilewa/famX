
import React, { Component } from 'react';
import lodash from 'lodash';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel } from 'react-native-elements';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import RenderInput from './RenderInput';
import { signupStyles as styles } from '../styles';
import { validate } from '../utils';

class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  static propTypes = {
    login: PropTypes.func,
    input: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = () => {
    const values = lodash.pick(
      this.state,
      ['email', 'password']
    );
    this.props.login(values).then((response) => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="user-plus"
          size={40} color="#b24f60"
        />
        <FormLabel>E-mail</FormLabel>
        <Field
          name="email"
          component={RenderInput}
          value={this.state.email}
          onChangeText={this.onChange}
          keyboardType='email-address'
        />
        <FormLabel>Password</FormLabel>
        <Field
          name="password"
          component={RenderInput}
          secureTextEntry
          value={this.state.password}
          onChangeText={this.onChange}
        />
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={this.submit}
        >
          <Text style={{ color: '#fff' }}>
            LOGIN
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const LoginMutation = gql`
  mutation getUser($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
        firstName
        email
    }
  }
`;

const LoginWithData = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: ({
      email,
      password
    }) => mutate({
      variables: {
        email,
        password
      }
    }),
  }),
})(LoginPage);

export const LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginWithData);

