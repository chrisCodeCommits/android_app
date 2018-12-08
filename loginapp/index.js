/** @format */

//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';
//
//AppRegistry.registerComponent(appName, () => App);


//==================================================


// importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//creating components
const App = () => (
     < Header />
);

// rendering components to display on the device
AppRegistry.registerComponent('loginapp', () => App);
