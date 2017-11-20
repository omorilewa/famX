
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    input: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  handlePress = (values) => {
    this.props.signup(values).then((response) => {
      console.log(response.data);
    }).catch(err => console.log(err));
  }

  render() {
    const { handleSubmit } = this.props;
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

const SignupForm = reduxForm({
  form: 'signup',
  validate,
})(SignupWithData);

export default SignupForm;

