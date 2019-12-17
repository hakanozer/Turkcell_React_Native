import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const w = Dimensions.get("window").width
var imgUrl = "background.jpeg"
if (w > 1000) {
    imgUrl = "background.jpeg"
}

export default class Splash extends Component {

    static navigationOptions = {
        header: null,
    }

  async componentDidMount() {

      this.timer = setInterval( async () => {
        const use = await AsyncStorage.getItem("user");
        clearInterval(this.timer)
        if (use === null ) {
           this.props.navigation.navigate("login")
        }else {
            console.log("aaa")
           this.props.navigation.navigate("product")
        }
      }, 3000);

  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image 
            source={ require(`../assets/background.jpeg`) } 
            resizeMode='cover'
            style={{ width: w, height: '100%',  }}
        />
      </View>
    );
  }
}
