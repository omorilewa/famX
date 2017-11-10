import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignupPage';

const Nav = StackNavigator({
  LandingPage: { screen: LandingPage },
  SignUpPage: { screen: SignUpPage }
  }
)

export default class App extends React.Component {

  render() {
    return (
    <Nav />
    );
  }
}

