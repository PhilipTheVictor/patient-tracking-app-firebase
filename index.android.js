import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { LogInComponent, SignUpComponent, PatientsList, MainComponent, DashboardComponent, RegisterComponent } from './src'
import { CardSection, Button, Card } from './src/common'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2924y1RXrxSpLediJ3rDPyxnwue6laZE",
  authDomain: "peekaboo-guru-f8b71.firebaseapp.com",
  databaseURL: "https://peekaboo-guru-f8b71.firebaseio.com",
  projectId: "peekaboo-guru-f8b71",
  storageBucket: "peekaboo-guru-f8b71.appspot.com",
  messagingSenderId: "481781432314"
};
firebase.initializeApp(config);

export default class ptafirebase extends Component {
  static navigationOptions = { // for title 
    title: 'Patient Tracking Application',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <CardSection>
          <Button onPress={() => navigate('Home')}>
            Get Started!
       </Button>
        </CardSection>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: ptafirebase },
  Home: { screen: DashboardComponent },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  PatientsList: { screen: PatientsList },
  LogIn: { screen: LogInComponent },
  SignUp: { screen: SignUpComponent }
});

AppRegistry.registerComponent('ptafirebase', () => SimpleApp);
