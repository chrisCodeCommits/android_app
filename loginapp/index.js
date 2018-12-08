/** @format */

//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';
//
//AppRegistry.registerComponent(appName, () => App);


//==================================================


// importing libraries
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//creating components
const App = () => (
     <Text>This is my first app</Text>
);

// rendering components to display on the device
AppRegistry.registerComponent('loginapp', () => App);
