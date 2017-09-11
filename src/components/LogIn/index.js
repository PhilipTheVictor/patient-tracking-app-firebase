import React, { Component } from 'react'
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native'
import { CardSection, Button, Input } from '../.././common'
import firebase from 'firebase'

export class LogInComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '' }
        this.logInUser = this.logInUser.bind(this);


    }

    logInUser() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            alert(error.message)
        })
            .then((res) => {
                alert("You have successfully logged in")

                this.props.navigation.navigate('Dashboard')
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection><Input
                placeholder="Enter your Email"
                onChangeText={(email) => {
                    this.setState({
                        email
                    })
                }}
                label="Email"
                value={this.state.email}
            />
            </CardSection>
            <CardSection><Input
                placeholder="Enter your password"
                onChangeText={(password) => { this.setState({ password }) }}
                label="Password"
                secureTextEntry={true}
                value={this.state.password}
            /></CardSection>
            <CardSection>
                <Button onPress={this.logInUser}>
                    Submit
       </Button>
            </CardSection>
            <CardSection>
                <TouchableOpacity><Text onPress={() => navigate('SignUp')}>Not a member? Sign Up Here</Text></TouchableOpacity>
            </CardSection>
        </View>
        )
    }
}
LogInComponent.navigationOptions = {
    title: 'LogIn Here',
};