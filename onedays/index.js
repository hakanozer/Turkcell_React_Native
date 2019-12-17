import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { NativeRouter , Route } from 'react-router-native'
import { Navigation } from 'react-router-navigation';

// page import 
import App from './App';
import Detail from './Detail'

// stack
const stack = () => (
<NativeRouter>
    <Navigation>
        <Route exact path="/" component={App}></Route>
        <Route path="/detail" component={Detail}></Route>
    </Navigation>
</NativeRouter>
)



AppRegistry.registerComponent(appName, () => stack);
