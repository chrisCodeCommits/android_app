import React, { Component } from 'react';
import { View } from 'react-native';
//import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  //componentWillMount() {
  //  firebase.initializeApp({
  //      apiKey: 'AIzaSyD5mgoyr0EDqrOrlaYYNF9KqhlnnHdQgpU',
  //      authDomain: 'loginapp-f2dfb.firebaseapp.com',
  //      databaseURL: 'https://loginapp-f2dfb.firebaseio.com',
  //      projectId: 'loginapp-f2dfb',
  //      storageBucket: 'loginapp-f2dfb.appspot.com',
  //      messagingSenderId: '605563606553' 
  //  });
  //}

  render() {
    return (
    <View>
      <Header headerText='Fitness App' />
      <LoginForm />
    </View>
    );
  }
}

export default App;
