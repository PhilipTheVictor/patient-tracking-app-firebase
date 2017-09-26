import React, { Component } from 'react'
import { AsyncStorage, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { Container, Content, Text,Button,Card,CardItem,Input,Form,Label,Item } from 'native-base'

export class LogInComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '' }
        this.logInUser = this.logInUser.bind(this);


    }

    logInUser() {
        if(this.state.email && this.state.password !== '') {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            alert(error.message)
        })
            .then((res) => {
                alert("You have successfully logged in")

                this.props.navigation.navigate('Dashboard')
            })}
            else{
                alert("Please fill empty fields")
            }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<Container style={{ backgroundColor:'#ff3232'}}>
            <Form>
                <Item floatingLabel>
                <Label>Enter your email</Label>
            <Input
                onChangeText={(email) => {
                    this.setState({
                        email
                    })
                }}
                value={this.state.email}
            />
            </Item>
            <Item floatingLabel>
            <Label>Enter your password</Label>
            <Input
                onChangeText={(password) => { this.setState({ password }) }}
                secureTextEntry={true}
                value={this.state.password}
            />
            </Item>
                <Button style={{marginLeft: 130,marginTop: 30}}onPress={this.logInUser}>
                    <Text>Submit</Text>
       </Button>
            
            
                <TouchableOpacity style={{marginLeft: 67,marginTop: 15}}><Text onPress={() => navigate('SignUp')}>Not a member? Sign Up Here</Text></TouchableOpacity>
            </Form>
        </Container>
        )
    }
}
LogInComponent.navigationOptions = {
    title: 'LogIn Here',
};