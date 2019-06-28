
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  button: {
    alignItems: 'center',
    padding: 13,
    width: 90,
    height: 50,
    backgroundColor: '#8f00ff',
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
  },
});
