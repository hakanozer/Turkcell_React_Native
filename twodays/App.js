import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import pages
import Splash from './pages/Splash'
import Login from './pages/Login'
import Product from './pages/Product'

const navigator = createStackNavigator({
    splash: {
        screen: Splash
    },
    login: {
        screen: Login
    },
    product: {
        screen: Product
    }
},
{
    initialRouteName: "splash"
})

const stack = createAppContainer(navigator)
export default stack