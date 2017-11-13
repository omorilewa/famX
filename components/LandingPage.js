import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { landingStyles as styles } from '../styles';

export default class LandingPage extends React.Component {
  static navigationOptions = {
    title: 'FAMX',
  };

  static propTypes = {
    navigate: PropTypes.func,
    navigation: PropTypes.object
  };

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('SignUpPage');
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handlePress}
          style={styles.create}
        >
          <Text style={styles.buttonText}>
            SIGN UP
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

