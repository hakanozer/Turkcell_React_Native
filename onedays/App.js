import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'react-router-native'
import {utilStyle} from './util/css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.fncSend()
    this.inputRef.focus()
  }

  fncSend = () => {
    const n = this.state.name
    Alert.alert(n)
  }

  render() {
    return (
      <View style={utilStyle.continer}>
          <ScrollView>
            <Text> App </Text>
            <TextInput ref={ (input) =>  this.inputRef = input  } onChangeText={ (txt) =>{ this.setState({ name: txt }) }} style={ styles.txtInput } placeholder="Adınız" ></TextInput>
            <TouchableOpacity onPress={ (evt)=> { this.fncSend(evt) }  }>
              <Text  style={[ styles.txtInput, { width: '50%', textAlign: 'center', marginTop: 5 } ]} > Gönder </Text>
            </TouchableOpacity>

            <Text> { this.state.name } </Text>

            <Link to="/detail">
              <Text>Detay Aç</Text>
            </Link>

          </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {

  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 19,
    padding:5,
    borderColor: '#0003f0'
  }
})