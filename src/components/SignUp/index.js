import React, { Component } from 'react'
import { View, Text, AsyncStorage,TouchableOpacity } from 'react-native'
import { CardSection, Button, Input } from '../.././common'
import firebase from 'firebase'

export class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '' }
        this.saveData = this.saveData.bind(this);
    }

    saveData() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log("User Registered")
            console.log(email, password)
        })
            .then((res) => {
                alert("You have been successfully registered as a user")
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection><Input
                onChangeText={(name) => { this.setState({ name }) }}
                placeholder="Enter your name"
                label="Name"
                value={this.state.name}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter your email"
                onChangeText={(email) => { this.setState({ email }) }}
                label="Email"
                value={this.state.email}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter your password"
                onChangeText={(password) => { this.setState({ password }) }}
                label="Password"
                secureTextEntry={true}
                value={this.state.password}
            /></CardSection>
            <CardSection>
                <Button onPress={this.saveData}>
                    Submit
       </Button>
            </CardSection>
            <CardSection>
                <TouchableOpacity><Text onPress={()=>navigate('LogIn')}>Already a member?LogIn Here</Text></TouchableOpacity>
            </CardSection>
        </View>
        )
    }
}
SignUpComponent.navigationOptions = {
    title: ' SignUp Here',
};