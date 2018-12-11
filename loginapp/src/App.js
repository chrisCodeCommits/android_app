import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
//import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({

      });
  }


  render() {
    return (
    <View>
      <Header headerText='LOGO' />
    </View>
    );
  }

  //render() {
  //  return (
  //  <View>
  //    <Header headerText='LOGO' />
  //    <LoginForm />
  //  </View>
  //  );
  //}
}

export default App;
