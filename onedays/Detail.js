import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {utilStyle} from './util/css'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={utilStyle.continer}>
        <Text> Detail </Text>
      </View>
    );
  }
}
