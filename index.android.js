import React, { Component } from 'react';
import { AppRegistry,Image } from 'react-native';
import { Container, Card, CardItem,Button,Text } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { LogInComponent, SignUpComponent, PatientsList, DashboardComponent, RegisterComponent } from './src'
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
      <Container style={{ backgroundColor:'#ff3232'}}>
        
        <Image
            style={{
              flex: 1,
              height: 250,width: null, flex: 1
            }}
            source={require('./checklist.png')}
          />
          <Button style={{ marginLeft: 110,marginBottom: 20 }}onPress={() => navigate('SignUp')}>
           <Text> Get Started!</Text>
       </Button>
      </Container>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: ptafirebase },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  PatientsList: { screen: PatientsList },
  LogIn: { screen: LogInComponent },
  SignUp: { screen: SignUpComponent }
});

AppRegistry.registerComponent('ptafirebase', () => SimpleApp);
