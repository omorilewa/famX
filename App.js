import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  logWord = () => {
    console.log("TEST FUNCTION")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.logWord}
          style={styles.create}
        >
          <Text style={styles.buttonText}>
            SIGN UP
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.logWord}
          style={[styles.create, { backgroundColor: 'grey'}]}
        >
          <Text style={styles.buttonText}>
            SIGN IN
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#B7C4AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    height: 45,
    backgroundColor: 'black',
    marginBottom: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 250
  },
  buttonText: {
    textAlign: 'center',
    color: '#fafafa',
    fontWeight: '300',
    fontSize: 16
  },
  stretch: {
    width: 250,
    height: 200,
    marginBottom: 20
  }
});
