
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

class SignupPage extends Component {
  static navigationOptions = {
    title: 'Signup',
  };

  static propTypes = {
    signup: PropTypes.func,
    input: PropTypes.object
  }
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phoneNum: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = () => {
    const values = lodash.pick(
      this.state,
      ['firstName',
        'lastName',
        'email',
        'password',
        'passwordConfirm',
        'phoneNum']
    );
    this.props.signup(values).then((response) => {
      console.log(response.data);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: 'gray' }}>
           Sign up with<Text style={styles.linkStyle}> Facebook </Text>
           or
          <Text style={styles.linkStyle}> Google</Text>
        </Text>
        <Text style={styles.divider}>
               ____________________  or  _____________________
        </Text>
        <Icon
          name="user-plus"
          size={40} color="#b24f60"
        />
        <FormLabel labelStyle={styles.labelStyle}>
          Firstname
        </FormLabel>
        <Field
          name="firstname"
          component={RenderInput}
          value={this.state.firstName}
          onChangeText={this.onChange}
        />
        <FormLabel>Lastname</FormLabel>
        <Field
          name="lastname"
          component={RenderInput}
          value={this.state.lastName}
          onChangeText={this.onChange}
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
        <FormLabel>Confirm Password</FormLabel>
        <Field
          name="passwordConfirm"
          component={RenderInput}
          secureTextEntry
          value={this.state.passwordConfirm}
          onChangeText={this.onChange}
        />
        <FormLabel>Phone Number</FormLabel>
        <Field
          name="phoneNum"
          component={RenderInput}
          value={this.state.phoneNum}
          onChangeText={this.onChange}
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

const SignupMutation = gql`
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

const SignupWithData = graphql(SignupMutation, {
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

export const SignupForm = reduxForm({
  form: 'signup',
  validate,
})(SignupWithData);

