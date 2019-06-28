
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Math Ranking Game</Text>
        <View style={styles.contentButton}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >
              {/* <Text style={styles.textButton}>Hanking</Text> */}
              <Image
                  source={require('./imgs/ranking.png')}
                  style={{width: 25, height: 25}}
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >          
              {/* <Text style={styles.textButton}>Play</Text> */}

              <Icon
                  name="play"
                  type="font-awesome"
                  color="#fff"
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >
              <Icon
                  name="info"
                  color="#fff"
              />
          </TouchableOpacity>
        </View>
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
  contentButton: {
    flexDirection: 'row',
    marginTop: 10,
  },  
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5,
  },
});
