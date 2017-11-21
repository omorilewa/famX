
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
// import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import InputField from './InputField';
import { createFamilyStyles as styles } from '../styles';
import { validate } from '../utils';

class CreateFamilyPage extends Component {
  static navigationOptions = {
    title: 'Create Family',
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
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
            style={styles.buttonStyle}
            onPress={handleSubmit(this.handlePress)}
        >
          <Text style={{ color: '#fff' }}>
            CREATE FAMILY HERE
          </Text>
        </TouchableHighlight>
          <Field
            name="familyName"
            component={InputField}
            label="Enter the name of your family or an alias"
          />
        <TouchableHighlight
            style={styles.buttonStyle}
            onPress={handleSubmit(this.handlePress)}
        >
          <Text style={{ color: '#fff' }}>
            ADD MEMBERS TO THE FAMILY
          </Text>
        </TouchableHighlight>
        <View style={styles.inlineView}>
          <Field
            name="lastName"
            component={InputField}
            label="Enter e-mail adress"
          />
          <Field
            name="email"
            component={InputField}
            label="E-mail"
          />
          </View>
          <Field
            name="password"
            component={InputField}
            label="Password"
          />
          <Field
            name="passwordConfirm"
            component={InputField}
            label="Confirm Password"
          />
          <Field
            name="phoneNum"
            component={InputField}
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
})(CreateFamilyPage);

const SignupForm = reduxForm({
  form: 'signup',
  validate,
})(SignupWithData);

const SignupWithMutation = compose(
  graphql(AUTH_FB_USER, { name: 'authenticateUserMutation' }),
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only' } })
)(SignupForm);

export default SignupWithMutation;
