import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { landingStyles as styles } from '../styles';

class LandingPage extends Component {
  static navigationOptions = {
    title: 'FAMX',
  };

  static propTypes = {
    navigate: PropTypes.func,
    navigation: PropTypes.object
  };

  handleSignupPress = () => {
    const { navigate } = this.props.navigation;
    navigate('SignupPage');
  }

  handleLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate('LoginPage');
  }

  handleTest = () => {
    const { navigate } = this.props.navigation;
    navigate('CreateFamilyPage');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handleSignupPress}
          style={styles.create}
        >
          <Text
            style={styles.buttonText}
            testID="SignupPage"
          >
            SIGN UP
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.handleLoginPress}
          style={styles.create}
        >
          <Text
            style={styles.buttonText}
            testID="LoginPage"
          >
            LOGIN
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.handleTest}
          style={styles.create}
        >
          <Text
            style={styles.buttonText}
            testID="CreateFamilyPage"
          >
            TEST CREATE FAMILY
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default LandingPage;

