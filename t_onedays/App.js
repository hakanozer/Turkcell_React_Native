import * as React from 'react';
import {  View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


import TitleDesc from '@components/title-desc'

export default class App extends React.Component {

  componentDidMount() {
    console.log("componentDidMount call")
  }


  render() {
    console.log("render call")
    return (
      <View style={styles.container}>
        <TitleDesc />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  txtTitle: {
    textAlign: 'center',
    color: '#f00',
    fontSize: 20
  },
  titDesc: {
    textAlign: 'center',
    fontSize: 10
  }
});
