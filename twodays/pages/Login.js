import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPass: '',
    };
  }

  fncSend = () => {
    const e = this.state.userEmail
    const p = this.state.userPass
    
    const param = {
      ref: "5380f5dbcc3b1021f93ab24c3a1aac24",
      userEmail: e,
      userPass: p,
      face: "no",
    }
    const url = "https://www.jsonbulut.com/json/userLogin.php"

    axios.get(url, { params: param })
    .then(res => {
      const dt = res.data.user[0]
      if (dt.durum) {
        const userData = JSON.stringify(dt.bilgiler)
        AsyncStorage.setItem("user", userData)
        // page redirect
        this.props.navigation.navigate("product")
      }
    }).catch(err => {
      
    })

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={ styles.scroll} >
          <Hoshi onChangeText={ (txt) => { this.setState({ userEmail: txt }) }} keyboardType='email-address' autoCapitalize='none' label="E-Mail Address" />
          <Hoshi onChangeText={ (txt) => { this.setState({ userPass: txt }) }} secureTextEntry  label="Password" />
          <TouchableOpacity onPress= { this.fncSend } >
              <Text style={{ fontSize: 15, textAlign: 'center', width: '100%', height: 40, backgroundColor: '#00a0c1', marginTop: 20, textAlignVertical:'center', padding: 10, }}> Login </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    padding: 10,
  },
  txtInput: {

  }
})