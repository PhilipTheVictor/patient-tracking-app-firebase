import React, { Component } from 'react'
import {StyleSheet, Image,TouchableOpacity,BackHandler } from 'react-native'
import { Container, Content,Button,Text,Icon } from 'native-base'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container  style={{ backgroundColor:'#ff3232'}}>
               <Content >
            
                        

                                
                                <TouchableOpacity onPress={() => navigate('Reg')}>
                                <Image source={require('./add.png')} style={{width: 145, height: 145, marginLeft:100}}/>
                            <Text style={{ marginLeft: 120}} >Add Patient</Text>
                            </TouchableOpacity>
                    
                            <TouchableOpacity onPress={() => navigate('PatientsList')}>
                                
                            <Image source={require('./list.png')} style={{width: 145, height: 145, marginLeft:95}} />
                            <Text style={{ marginLeft: 125}} >Patients List</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity onPress={() =>  BackHandler.exitApp()} >
                           
                            <Image source={require('./signout.png')} style={{width: 145, height: 145,marginLeft:100}} />
                           <Text style={{ marginLeft: 152}}>Exit</Text> 
                       
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
