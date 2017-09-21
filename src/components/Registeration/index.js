import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'
import firebase from 'firebase'

export class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = { name: '', email: '', disease: '', age: '', date: '' }
        this.saveData = this.saveData.bind(this);

    }

    saveData() {
        let date = new Date();
        let today = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        console.log('date', fullDate);
        firebase.database().ref('/patients/').push().set({
            name: this.state.name,
            email: this.state.email,
            disease: this.state.disease,
            age: this.state.age,
            date: fullDate
        })
            .then(() => {
                alert("Patient successfully registered")
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection><Input
                onChangeText={(name) => { this.setState({ name }) }}
                placeholder="Enter patient's name"
                label="Name"
                value={this.state.name}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter patient's Email"
                onChangeText={(email) => { this.setState({ email }) }}
                label="Email"
                value={this.state.email}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter patient's disease"
                onChangeText={(disease) => { this.setState({ disease }) }}
                label="Disease"
                value={this.state.disease}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter patient's age"
                onChangeText={(age) => { this.setState({ age }) }}
                value={this.state.age}
                label="Age"
            /></CardSection>
            <CardSection>
                <Button onPress={this.saveData}>
                    Submit
       </Button>
            </CardSection>
        </View>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};