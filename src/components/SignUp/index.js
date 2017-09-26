import React, { Component } from 'react'
import { AsyncStorage,TouchableOpacity } from 'react-native'
import { Container,Content,Text,Button,Form,Item,Label,Input} from 'native-base'
import firebase from 'firebase'

export class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '' }
        this.saveData = this.saveData.bind(this);
    }

    saveData() {
        if(this.state.name && this.state.email && this.state.password !== ''){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log("User Registered")
            console.log(email, password)
        })
            .then((res) => {
                alert("You have been successfully registered as a user")
                this.props.navigation.navigate('LogIn')
            })
            .catch((error) => {
                alert(error.message)

            })}
            else {
                alert('Please fill empty fields')
            }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<Container style={{ backgroundColor:'#ff3232'}}>
            <Content>
            <Form>
                <Item floatingLabel>
            <Label>Enter your name</Label><Input
                onChangeText={(name) => { this.setState({ name }) }}
                value={this.state.name}
            /></Item>
            <Item floatingLabel>
                <Label>Enter your email</Label>
            <Input
                onChangeText={(email) => { this.setState({ email }) }}
                value={this.state.email}
            /></Item>
            <Item floatingLabel><Label>Enter password</Label><Input
                onChangeText={(password) => { this.setState({ password }) }}
                secureTextEntry={true}
                value={this.state.password}
            /></Item>
                <Button style={{marginLeft: 130,marginTop: 30}} onPress={this.saveData}>
                    <Text>Submit</Text>
       </Button>
    
                <TouchableOpacity style={{marginLeft: 67,marginTop: 15}}><Text onPress={()=>navigate('LogIn')}>Already a member?LogIn Here</Text></TouchableOpacity>
            </Form>
            </Content>
        </Container>
        )
    }
}
SignUpComponent.navigationOptions = {
    title: ' SignUp Here',
};