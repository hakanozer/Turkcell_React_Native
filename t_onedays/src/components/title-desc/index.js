import React, { Component } from 'react';
import {  View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants';

class TitleDesc extends Component {
    render() {

        return (
        <View>
          <Text style={ styles.txtTitle } > Merhaba Turkcell </Text>
          <Text style={ styles.titDesc }> Açıklama bölümü </Text>
        </View>
        );
    }
}

export default TitleDesc;

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