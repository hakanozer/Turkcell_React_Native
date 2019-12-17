import React, { Component } from 'react';
import { View, Text, BackHandler, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios'

export default class Product extends Component {

    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.andBackButton)
        const url = "https://www.jsonbulut.com/json/product.php?ref=5380f5dbcc3b1021f93ab24c3a1aac24&start=0"
        axios.get(url).then(res => {
            const bilgiler = res.data.Products[0].bilgiler
            //console.log(JSON.stringify(bilgiler))
            this.setState({ jsonPro: bilgiler })
        })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.andBackButton)
    }

    andBackButton = () => {
        return true
    }

  constructor(props) {
    super(props);
    this.state = {
        jsonPro: []
    };
  }

  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList  
                data={ this.state.jsonPro }
                keyExtractor={ (item) => item.productId }
                renderItem={ ({item}) => ( <Text> { item.productName } </Text>  )}
            />
        </SafeAreaView>
    );
  }
}
