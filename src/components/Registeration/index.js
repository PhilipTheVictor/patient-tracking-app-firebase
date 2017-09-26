import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Input,Label,Item,Text,Button,Form } from 'native-base'
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
        return (<Container style={{ backgroundColor:'#ff3232'}}>
            <Form>
                <Item floatingLabel>
                <Label>Enter name here</Label>
                <Input
                onChangeText={(name) => { this.setState({ name }) }}
                
        
                value={this.state.name}
            /></Item>
            <Item floatingLabel>
                <Label>Enter email here</Label>
            <Input
                onChangeText={(email) => { this.setState({ email }) }}
                value={this.state.email}
            /></Item>
            <Item floatingLabel>
                <Label>Enter disease</Label><Input
                onChangeText={(disease) => { this.setState({ disease }) }}
                value={this.state.disease}
            /></Item>
            <Item floatingLabel>
                <Label>Enter age here</Label>
                <Input
                onChangeText={(age) => { this.setState({ age }) }}
                value={this.state.age}
                label="Age"
            /></Item>
                <Button onPress={this.saveData}>
                    <Text>Submit</Text>
       </Button>
        </Form>
        </Container>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};