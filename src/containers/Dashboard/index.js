import React, { Component } from 'react'
import {StyleSheet, Image,TouchableOpacity } from 'react-native'
import { Container, Content,Button,Text,Icon } from 'native-base'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container  style={{ backgroundColor:'#ff3232'}}>
               <Content style={{ marginLeft: 100}}>
            
                        

                                
                                <TouchableOpacity onPress={() => navigate('Reg')}>
                                <Image source={require('./add.png')} style={{width: 150, height: 150}}/>
                            <Text>Add Patient</Text>
                            </TouchableOpacity>
                    
                            <TouchableOpacity onPress={() => navigate('PatientsList')}>
                                
                            <Image source={require('./list.png')} style={{width: 150, height: 150}} />
                            <Text style={{ marginLeft: 10}}>Patients List</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity onPress={() => navigate('Main')} >
                           
                            <Image source={require('./signout.png')} style={{width: 150, height: 150}} />
                           <Text>Exit</Text> 
                       
                            </TouchableOpacity>
                    </Content>
                </Container>
        )
    }
}
// let styles = StyleSheet.create({
//     container : {
//         width: 400,
//         height: 1000

//     },
//     img: {
//         width: 100,
//         height: 100,
//     },
// });

DashboardComponent.navigationOptions = {
    title: 'Dashboard'
}
