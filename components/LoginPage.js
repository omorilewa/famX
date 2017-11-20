
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    input: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  handlePress = (values) => {
    this.props.login(values)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
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
          onPress={handleSubmit(this.handlePress)}
        >
          <Text style={{ color: '#fff' }}>
            LOGIN
          </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginPage);

export default LoginForm;

